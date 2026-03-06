import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import crypto from "crypto";
import { Resend } from "resend";

const sql = neon(process.env.DATABASE_URL!);

function setCors(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}

const FROM = "Doomsday Clock <noreply@doomsdayclock.net>";
const FRONTEND_URL = process.env.FRONTEND_URL || "https://doomsdayclock.net";

function getResend() {
  if (!process.env.RESEND_API_KEY) throw new Error("RESEND_API_KEY not set");
  return new Resend(process.env.RESEND_API_KEY);
}

async function sendPasswordResetEmail(email: string, token: string) {
  const resetUrl = `${FRONTEND_URL}/reset-password?token=${token}`;
  await getResend().emails.send({
    from: FROM,
    to: email,
    subject: "Reset your Doomsday Clock password",
    html: `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#111;color:#fff;border-radius:16px;">
        <h2 style="margin:0 0 16px;font-size:24px;">Password Reset</h2>
        <p style="color:#a1a1aa;margin:0 0 24px;line-height:1.6;">
          Click below to reset your password.
        </p>
        <a href="${resetUrl}" style="display:inline-block;padding:12px 24px;background:#1EAEDB;color:#fff;border-radius:8px;text-decoration:none;font-weight:600;">
          Reset Password
        </a>
        <p style="color:#71717a;font-size:12px;margin:24px 0 0;">
          This link expires in 1 hour. If you didn't request this, ignore this email.
        </p>
      </div>
    `,
  });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Always return success to prevent email enumeration
    const successResponse = { message: "If that email exists, a reset link has been sent" };

    const [user] = await sql`SELECT id, email FROM users WHERE email = ${email.toLowerCase()}`;
    if (!user) {
      return res.status(200).json(successResponse);
    }

    const resetToken = crypto.randomUUID();
    await sql`
      INSERT INTO password_reset_tokens (user_id, token, expires_at)
      VALUES (${user.id}, ${resetToken}, NOW() + INTERVAL '1 hour')
    `;

    try {
      await sendPasswordResetEmail(user.email, resetToken);
    } catch (emailErr) {
      console.error("Failed to send password reset email:", emailErr);
    }

    return res.status(200).json(successResponse);
  } catch (error) {
    console.error("Forgot password error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
