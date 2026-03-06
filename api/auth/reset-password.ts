import type { VercelRequest, VercelResponse } from "@vercel/node";
import bcrypt from "bcryptjs";
import { sql } from "../_lib/db";
import { setCors } from "../_lib/cors";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { token, newPassword } = req.body;

    if (!token || !newPassword) {
      return res.status(400).json({ error: "Token and new password are required" });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters" });
    }

    // Find valid, unused token
    const [record] = await sql`
      SELECT id, user_id FROM password_reset_tokens
      WHERE token = ${token} AND expires_at > NOW() AND used = false
    `;

    if (!record) {
      return res.status(400).json({ error: "Invalid or expired reset link" });
    }

    // Update password
    const passwordHash = await bcrypt.hash(newPassword, 12);
    await sql`UPDATE users SET password_hash = ${passwordHash}, updated_at = NOW() WHERE id = ${record.user_id}`;

    // Mark token as used
    await sql`UPDATE password_reset_tokens SET used = true WHERE id = ${record.id}`;

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Reset password error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
