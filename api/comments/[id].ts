import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { setCors } from "../_lib/cors";
import { requireAuth } from "../_lib/auth";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "DELETE") return res.status(405).json({ error: "Method not allowed" });

  const commentId = parseInt(req.query.id as string);
  if (isNaN(commentId)) return res.status(400).json({ error: "Invalid comment ID" });

  try {
    const auth = requireAuth(req);

    const [comment] = await sql`SELECT user_id, post_id FROM comments WHERE id = ${commentId}`;
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    if (comment.user_id !== auth.userId) {
      return res.status(403).json({ error: "You can only delete your own comments" });
    }

    await sql`DELETE FROM comments WHERE id = ${commentId}`;
    await sql`UPDATE posts SET comment_count = GREATEST(comment_count - 1, 0) WHERE id = ${comment.post_id}`;

    return res.status(200).json({ message: "Comment deleted" });
  } catch (error: unknown) {
    if (error instanceof Error && "status" in error) {
      return res.status((error as Error & { status: number }).status).json({ error: error.message });
    }
    console.error("Delete comment error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
