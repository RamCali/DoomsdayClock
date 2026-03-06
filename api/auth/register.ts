import type { VercelRequest, VercelResponse } from "@vercel/node";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { sql } from "../_lib/db";
import { setCors } from "../_lib/cors";
import { signToken } from "../_lib/auth";
import { sendVerificationEmail } from "../_lib/email";

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
