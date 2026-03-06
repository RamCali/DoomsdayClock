import type { VercelRequest, VercelResponse } from "@vercel/node";
import { sql } from "./_lib/db";
import { setCors } from "./_lib/cors";
import { getUserFromRequest, requireAuth } from "./_lib/auth";

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

  let periodFilter = "";
  if (sort === "top" && period === "day") {
    periodFilter = "AND p.created_at > NOW() - INTERVAL '1 day'";
  } else if (sort === "top" && period === "week") {
    periodFilter = "AND p.created_at > NOW() - INTERVAL '7 days'";
  }

  let orderBy: string;
  switch (sort) {
    case "new":
      orderBy = "p.created_at DESC";
      break;
    case "top":
      orderBy = "p.vote_score DESC, p.created_at DESC";
      break;
    case "hot":
    default:
      orderBy = "(p.vote_score::FLOAT / POWER(EXTRACT(EPOCH FROM (NOW() - p.created_at)) / 3600.0 + 2.0, 1.5)) DESC";
      break;
  }

  // Build query with raw SQL since we need dynamic ORDER BY
  const posts = await sql(`
    SELECT p.id, p.title, p.body, p.vote_score, p.comment_count, p.created_at, p.updated_at,
           u.display_name AS author_name, u.id AS author_id,
           COALESCE(pv.value, 0)::int AS user_vote
    FROM posts p
    JOIN users u ON u.id = p.user_id
    LEFT JOIN post_votes pv ON pv.post_id = p.id AND pv.user_id = $1
    WHERE 1=1 ${periodFilter}
    ORDER BY ${orderBy}
    LIMIT $2 OFFSET $3
  `, [userId, limit, offset]);

  const [{ count }] = await sql(`SELECT COUNT(*)::int AS count FROM posts WHERE 1=1 ${periodFilter}`);

  return res.status(200).json({
    posts,
    total: count,
    page,
    totalPages: Math.ceil(count / limit),
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
