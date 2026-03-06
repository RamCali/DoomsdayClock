import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { Resend } from "resend";

const sql = neon(process.env.DATABASE_URL!);

function setCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

interface JWTPayload { userId: number; email: string; }

function getSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET environment variable is not set");
  return secret;
}

function signToken(payload: JWTPayload): string {
  return jwt.sign(payload, getSecret(), { expiresIn: "7d" });
}

const FROM = "Doomsday Clock <noreply@doomsdayclock.net>";
const FRONTEND_URL = process.env.FRONTEND_URL || "https://doomsdayclock.net";

function getResend() {
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY not set");
  return new Resend(process.env.RESEND_API_KEY);
}

async function sendVerificationEmail(email: string, token: string) {
  const verifyUrl = `${FRONTEND_URL}/verify-email?token=${token}`;
  await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "Verify your Doomsday Clock account",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#111;color:#fff;border-radius:16px;">
        <h2 style="margin:0 0 16px;font-size:24px;">Welcome to the Doomsday Clock Forum</h2>
        <p style="color:#a1a1aa;margin:0 0 24px;line-height:1.6;">
          Click below to verify your email and start sharing your ideas on how to save the world.
        </p>
        <a href="${verifyUrl}" style="display:inline-block;padding:12px 24px;background:#ea384c;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">
          Verify Email
        </a>
        <p style="color:#71717a;font-size:12px;margin:24px 0 0;">This link expires in 24 hours.</p>
      </div>
    `,
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { email, displayName, password } = req.body;

    // Validate inputs
    if (!email || !email.includes("@") || email.length > 255) {
      return res.status(400).json({ error: "Valid email is required" });
    }
    if (!displayName || displayName.length < 2 || displayName.length > 30) {
      return res.status(400).json({ error: "Display name must be 2-30 characters" });
    }
    if (!password || password.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters" });
    }

    // Check email uniqueness
    const existing = await sql`SELECT id FROM users WHERE email = ${email.toLowerCase()}`;
    if (existing.length > 0) {
      return res.status(409).json({ error: "An account with this email already exists" });
    }

    // Hash password and create user
    const passwordHash = await bcrypt.hash(password, 12);
    const [user] = await sql`
      INSERT INTO users (email, display_name, password_hash)
      VALUES (${email.toLowerCase()}, ${displayName}, ${passwordHash})
      RETURNING id, email, display_name, email_verified, avatar_url, bio, created_at
    `;

    // Create verification token
    const verificationToken = crypto.randomUUID();
    await sql`
      INSERT INTO email_verification_tokens (user_id, token, expires_at)
      VALUES (${user.id}, ${verificationToken}, NOW() + INTERVAL '24 hours')
    `;

    // Send verification email
    try {
      await sendVerificationEmail(user.email, verificationToken);
    } catch (emailErr) {
      console.error("Failed to send verification email:", emailErr);
      // Don't fail registration if email fails - user can request resend
    }

    const token = signToken({ userId: user.id, email: user.email });

    return res.status(201).json({
      token,
      user: {
        id: user.id,
        email: user.email,
        display_name: user.display_name,
        email_verified: user.email_verified,
        avatar_url: user.avatar_url,
        bio: user.bio,
        created_at: user.created_at,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
