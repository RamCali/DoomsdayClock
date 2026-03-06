import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { setCors } from "../_lib/cors";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ error: "Token is required" });
    }

    // Find valid token
    const [record] = await sql`
      SELECT user_id FROM email_verification_tokens
      WHERE token = ${token} AND expires_at > NOW()
    `;

    if (!record) {
      return res.status(400).json({ error: "Invalid or expired verification link" });
    }

    // Verify user email
    await sql`UPDATE users SET email_verified = true, updated_at = NOW() WHERE id = ${record.user_id}`;

    // Delete used token
    await sql`DELETE FROM email_verification_tokens WHERE token = ${token}`;

    return res.status(200).json({ message: "Email verified successfully" });
  } catch (error) {
    console.error("Verify email error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
