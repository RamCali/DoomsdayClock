import { neon } from "@neondatabase/serverless";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const sql = neon(process.env.DATABASE_URL!);

interface VoteResults {
  closer: number;
  same: number;
  farther: number;
  total: number;
}

async function getResults(): Promise<VoteResults> {
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
    if (req.method === "GET") {
      const results = await getResults();
      return res.status(200).json(results);
    }

    if (req.method === "POST") {
      const { choice } = req.body;

      if (!["closer", "same", "farther"].includes(choice)) {
        return res.status(400).json({ error: "Invalid choice. Must be closer, same, or farther." });
      }

      await sql`INSERT INTO votes (choice) VALUES (${choice})`;

      const results = await getResults();
      return res.status(201).json(results);
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
