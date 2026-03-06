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

  try {
    if (req.method === "GET") {
      return handleList(req, res);
    }
    if (req.method === "POST") {
      return handleCreate(req, res);
    }
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error: unknown) {
    if (error instanceof Error && "status" in error) {
      return res.status((error as Error & { status: number }).status).json({ error: error.message });
    }
    console.error("Posts error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

async function handleList(req: VercelRequest, res: VercelResponse) {
  const sort = (req.query.sort as string) || "hot";
  const period = (req.query.period as string) || "all";
  const page = Math.max(1, parseInt(req.query.page as string) || 1);
  const limit = Math.min(50, Math.max(1, parseInt(req.query.limit as string) || 20));
  const offset = (page - 1) * limit;

  const auth = getUserFromRequest(req);
  const userId = auth?.userId || 0;

  let posts;
  let total;

  if (sort === "new") {
    posts = await sql`
      SELECT p.id, p.title, p.body, p.vote_score, p.comment_count, p.created_at, p.updated_at,
             u.display_name AS author_name, u.id AS author_id,
             COALESCE(pv.value, 0)::int AS user_vote
      FROM posts p
      JOIN users u ON u.id = p.user_id
      LEFT JOIN post_votes pv ON pv.post_id = p.id AND pv.user_id = ${userId}
      ORDER BY p.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
    total = (await sql`SELECT COUNT(*)::int AS count FROM posts`)[0].count;
  } else if (sort === "top" && period === "day") {
    posts = await sql`
      SELECT p.id, p.title, p.body, p.vote_score, p.comment_count, p.created_at, p.updated_at,
             u.display_name AS author_name, u.id AS author_id,
             COALESCE(pv.value, 0)::int AS user_vote
      FROM posts p
      JOIN users u ON u.id = p.user_id
      LEFT JOIN post_votes pv ON pv.post_id = p.id AND pv.user_id = ${userId}
      WHERE p.created_at > NOW() - INTERVAL '1 day'
      ORDER BY p.vote_score DESC, p.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
    total = (await sql`SELECT COUNT(*)::int AS count FROM posts WHERE created_at > NOW() - INTERVAL '1 day'`)[0].count;
  } else if (sort === "top" && period === "week") {
    posts = await sql`
      SELECT p.id, p.title, p.body, p.vote_score, p.comment_count, p.created_at, p.updated_at,
             u.display_name AS author_name, u.id AS author_id,
             COALESCE(pv.value, 0)::int AS user_vote
      FROM posts p
      JOIN users u ON u.id = p.user_id
      LEFT JOIN post_votes pv ON pv.post_id = p.id AND pv.user_id = ${userId}
      WHERE p.created_at > NOW() - INTERVAL '7 days'
      ORDER BY p.vote_score DESC, p.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
    total = (await sql`SELECT COUNT(*)::int AS count FROM posts WHERE created_at > NOW() - INTERVAL '7 days'`)[0].count;
  } else if (sort === "top") {
    posts = await sql`
      SELECT p.id, p.title, p.body, p.vote_score, p.comment_count, p.created_at, p.updated_at,
             u.display_name AS author_name, u.id AS author_id,
             COALESCE(pv.value, 0)::int AS user_vote
      FROM posts p
      JOIN users u ON u.id = p.user_id
      LEFT JOIN post_votes pv ON pv.post_id = p.id AND pv.user_id = ${userId}
      ORDER BY p.vote_score DESC, p.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
    total = (await sql`SELECT COUNT(*)::int AS count FROM posts`)[0].count;
  } else {
    // hot (default)
    posts = await sql`
      SELECT p.id, p.title, p.body, p.vote_score, p.comment_count, p.created_at, p.updated_at,
             u.display_name AS author_name, u.id AS author_id,
             COALESCE(pv.value, 0)::int AS user_vote
      FROM posts p
      JOIN users u ON u.id = p.user_id
      LEFT JOIN post_votes pv ON pv.post_id = p.id AND pv.user_id = ${userId}
      ORDER BY (p.vote_score::FLOAT / POWER(EXTRACT(EPOCH FROM (NOW() - p.created_at)) / 3600.0 + 2.0, 1.5)) DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
    total = (await sql`SELECT COUNT(*)::int AS count FROM posts`)[0].count;
  }

  return res.status(200).json({
    posts,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}

async function handleCreate(req: VercelRequest, res: VercelResponse) {
  const auth = requireAuth(req);
  const { title, body } = req.body;

  // Check email verified
  const [user] = await sql`SELECT email_verified FROM users WHERE id = ${auth.userId}`;
  if (!user?.email_verified) {
    return res.status(403).json({ error: "Please verify your email before posting" });
  }

  // Validate
  if (!title || title.length < 5 || title.length > 200) {
    return res.status(400).json({ error: "Title must be 5-200 characters" });
  }
  if (!body || body.length < 10 || body.length > 10000) {
    return res.status(400).json({ error: "Body must be 10-10,000 characters" });
  }

  // Create post with auto-upvote
  const [post] = await sql`
    INSERT INTO posts (user_id, title, body, vote_score)
    VALUES (${auth.userId}, ${title}, ${body}, 1)
    RETURNING id, title, body, vote_score, comment_count, created_at, updated_at
  `;

  // Auto-upvote by author
  await sql`
    INSERT INTO post_votes (post_id, user_id, value) VALUES (${post.id}, ${auth.userId}, 1)
  `;

  return res.status(201).json({
    ...post,
    author_name: (await sql`SELECT display_name FROM users WHERE id = ${auth.userId}`)[0].display_name,
    author_id: auth.userId,
    user_vote: 1,
  });
}
