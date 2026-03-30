import { neon } from "@neondatabase/serverless";
import type { VercelRequest, VercelResponse } from "@vercel/node";

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    const err = new Error("DATABASE_URL environment variable is not set") as Error & { status?: number };
    err.status = 500;
    throw err;
  }
  return neon(url);
}

interface VoteResults {
  closer: number;
  same: number;
  farther: number;
  total: number;
}

async function getResults(sql: ReturnType<typeof neon>): Promise<VoteResults> {
  const rows = await sql`
    SELECT choice, COUNT(*)::int AS count
    FROM votes
    GROUP BY choice
  `;

  const counts: Record<string, number> = { closer: 0, same: 0, farther: 0 };
  for (const row of rows) {
    counts[row.choice] = row.count;
  }

  return {
    closer: counts.closer,
    same: counts.same,
    farther: counts.farther,
    total: counts.closer + counts.same + counts.farther,
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const sql = getSql();
    if (req.method === "GET") {
      const results = await getResults(sql);
      return res.status(200).json(results);
    }

    if (req.method === "POST") {
      const { choice } = req.body;

      if (!["closer", "same", "farther"].includes(choice)) {
        return res.status(400).json({ error: "Invalid choice. Must be closer, same, or farther." });
      }

      await sql`INSERT INTO votes (choice) VALUES (${choice})`;

      const results = await getResults(sql);
      return res.status(201).json(results);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Database error:", error);
    if (error instanceof Error && "status" in error) {
      return res.status((error as Error & { status: number }).status).json({ error: error.message });
    }
    return res.status(500).json({ error: "Internal server error" });
  }
}
