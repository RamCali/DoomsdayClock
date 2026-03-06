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
