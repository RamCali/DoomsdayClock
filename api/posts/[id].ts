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
