import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../_lib/db";
import { setCors } from "../_lib/cors";
import { getUserFromRequest, requireAuth } from "../_lib/auth";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  const id = parseInt(req.query.id as string);
  if (isNaN(id)) return res.status(400).json({ error: "Invalid post ID" });

  try {
    if (req.method === "GET") {
      return handleGet(req, res, id);
    }
    if (req.method === "DELETE") {
      return handleDelete(req, res, id);
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error: unknown) {
    if (error instanceof Error && "status" in error) {
      return res.status((error as Error & { status: number }).status).json({ error: error.message });
    }
    console.error("Post detail error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleGet(req: VercelRequest, res: VercelResponse, id: number) {
  const auth = getUserFromRequest(req);
  const userId = auth?.userId || 0;

  const [post] = await sql`
    SELECT p.id, p.title, p.body, p.vote_score, p.comment_count, p.created_at, p.updated_at,
           u.display_name AS author_name, u.id AS author_id,
           COALESCE(pv.value, 0)::int AS user_vote
    FROM posts p
    JOIN users u ON u.id = p.user_id
    LEFT JOIN post_votes pv ON pv.post_id = p.id AND pv.user_id = ${userId}
    WHERE p.id = ${id}
  `;

  if (!post) return res.status(404).json({ error: "Post not found" });

  return res.status(200).json(post);
}

async function handleDelete(req: VercelRequest, res: VercelResponse, id: number) {
  const auth = requireAuth(req);

  const [post] = await sql`SELECT user_id FROM posts WHERE id = ${id}`;
  if (!post) return res.status(404).json({ error: "Post not found" });
  if (post.user_id !== auth.userId) {
    return res.status(403).json({ error: "You can only delete your own posts" });
  }

  await sql`DELETE FROM posts WHERE id = ${id}`;
  return res.status(200).json({ message: "Post deleted" });
}
