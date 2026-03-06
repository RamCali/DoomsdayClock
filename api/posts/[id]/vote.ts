import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";
import jwt from "jsonwebtoken";

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

function verifyToken(token: string): JWTPayload {
  return jwt.verify(token, getSecret()) as JWTPayload;
}

function getUserFromRequest(req: VercelRequest): JWTPayload | null {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return null;
  try { return verifyToken(authHeader.slice(7)); } catch { return null; }
}

function requireAuth(req: VercelRequest): JWTPayload {
  const user = getUserFromRequest(req);
  if (!user) { const err = new Error("Unauthorized") as Error & { status: number }; err.status = 401; throw err; }
  return user;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCors(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const postId = parseInt(req.query.id as string);
  if (isNaN(postId)) return res.status(400).json({ error: "Invalid post ID" });

  try {
    const auth = requireAuth(req);
    const { value } = req.body;

    if (![1, -1, 0].includes(value)) {
      return res.status(400).json({ error: "Value must be 1, -1, or 0" });
    }

    // Check post exists
    const [post] = await sql`SELECT id FROM posts WHERE id = ${postId}`;
    if (!post) return res.status(404).json({ error: "Post not found" });

    if (value === 0) {
      // Remove vote
      await sql`DELETE FROM post_votes WHERE post_id = ${postId} AND user_id = ${auth.userId}`;
    } else {
      // Upsert vote
      await sql`
        INSERT INTO post_votes (post_id, user_id, value)
        VALUES (${postId}, ${auth.userId}, ${value})
        ON CONFLICT (post_id, user_id) DO UPDATE SET value = ${value}
      `;
    }

    // Recalculate score
    const [result] = await sql`
      UPDATE posts SET vote_score = (
        SELECT COALESCE(SUM(value), 0) FROM post_votes WHERE post_id = ${postId}
      ) WHERE id = ${postId}
      RETURNING vote_score
    `;

    return res.status(200).json({ vote_score: result.vote_score, user_vote: value });
  } catch (error: unknown) {
    if (error instanceof Error && "status" in error) {
      return res.status((error as Error & { status: number }).status).json({ error: error.message });
    }
    console.error("Vote error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
