import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "../../_lib/db";
import { setCors } from "../../_lib/cors";
import { getUserFromRequest, requireAuth } from "../../_lib/auth";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  const postId = parseInt(req.query.id as string);
  if (isNaN(postId)) return res.status(400).json({ error: "Invalid post ID" });

  try {
    if (req.method === "GET") {
      return handleList(req, res, postId);
    }
    if (req.method === "POST") {
      return handleCreate(req, res, postId);
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error: unknown) {
    if (error instanceof Error && "status" in error) {
      return res.status((error as Error & { status: number }).status).json({ error: error.message });
    }
    console.error("Comments error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleList(req: VercelRequest, res: VercelResponse, postId: number) {
  const auth = getUserFromRequest(req);
  const userId = auth?.userId || 0;

  const comments = await sql`
    SELECT c.id, c.post_id, c.parent_comment_id, c.body, c.vote_score, c.created_at,
           u.display_name AS author_name, u.id AS author_id,
           COALESCE(cv.value, 0)::int AS user_vote
    FROM comments c
    JOIN users u ON u.id = c.user_id
    LEFT JOIN comment_votes cv ON cv.comment_id = c.id AND cv.user_id = ${userId}
    WHERE c.post_id = ${postId}
    ORDER BY c.created_at ASC
  `;

  return res.status(200).json(comments);
}

async function handleCreate(req: VercelRequest, res: VercelResponse, postId: number) {
  const auth = requireAuth(req);

  // Check email verified
  const [user] = await sql`SELECT email_verified, display_name FROM users WHERE id = ${auth.userId}`;
  if (!user?.email_verified) {
    return res.status(403).json({ error: "Please verify your email before commenting" });
  }

  const { body, parentCommentId } = req.body;

  if (!body || body.length < 1 || body.length > 5000) {
    return res.status(400).json({ error: "Comment must be 1-5,000 characters" });
  }

  // Check post exists
  const [post] = await sql`SELECT id FROM posts WHERE id = ${postId}`;
  if (!post) return res.status(404).json({ error: "Post not found" });

  // Check parent comment exists if provided
  if (parentCommentId) {
    const [parent] = await sql`SELECT id FROM comments WHERE id = ${parentCommentId} AND post_id = ${postId}`;
    if (!parent) return res.status(400).json({ error: "Parent comment not found" });
  }

  const [comment] = await sql`
    INSERT INTO comments (post_id, user_id, parent_comment_id, body)
    VALUES (${postId}, ${auth.userId}, ${parentCommentId || null}, ${body})
    RETURNING id, post_id, parent_comment_id, body, vote_score, created_at
  `;

  // Increment comment count
  await sql`UPDATE posts SET comment_count = comment_count + 1 WHERE id = ${postId}`;

  return res.status(201).json({
    ...comment,
    author_name: user.display_name,
    author_id: auth.userId,
    user_vote: 0,
  });
}
