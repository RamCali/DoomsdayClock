import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../../_lib/db";
import { setCors } from "../../_lib/cors";
import { requireAuth } from "../../_lib/auth";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const commentId = parseInt(req.query.id as string);
  if (isNaN(commentId)) return res.status(400).json({ error: "Invalid comment ID" });

  try {
    const auth = requireAuth(req);
    const { value } = req.body;

    if (![1, -1, 0].includes(value)) {
      return res.status(400).json({ error: "Value must be 1, -1, or 0" });
    }

    const [comment] = await sql`SELECT id FROM comments WHERE id = ${commentId}`;
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    if (value === 0) {
      await sql`DELETE FROM comment_votes WHERE comment_id = ${commentId} AND user_id = ${auth.userId}`;
    } else {
      await sql`
        INSERT INTO comment_votes (comment_id, user_id, value)
        VALUES (${commentId}, ${auth.userId}, ${value})
        ON CONFLICT (comment_id, user_id) DO UPDATE SET value = ${value}
      `;
    }

    const [result] = await sql`
      UPDATE comments SET vote_score = (
        SELECT COALESCE(SUM(value), 0) FROM comment_votes WHERE comment_id = ${commentId}
      ) WHERE id = ${commentId}
      RETURNING vote_score
    `;

    return res.status(200).json({ vote_score: result.vote_score, user_vote: value });
  } catch (error: unknown) {
    if (error instanceof Error && "status" in error) {
      return res.status((error as Error & { status: number }).status).json({ error: error.message });
    }
    console.error("Comment vote error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
