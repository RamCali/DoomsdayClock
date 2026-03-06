import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";
import { sql } from "../_lib/db";
import { setCors } from "../_lib/cors";
import { sendPasswordResetEmail } from "../_lib/email";

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
