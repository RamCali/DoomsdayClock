import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

const SITE_URL = "https://doomsdayclock.net";

const TODAY_ISO = new Date().toISOString().split("T")[0];

const BLOG_POSTS = [
  { slug: "doomsday-clock-2026", lastmod: TODAY_ISO, priority: "1.0", changefreq: "daily" },
  { slug: "us-iran-crisis-doomsday-clock", lastmod: TODAY_ISO, priority: "0.9", changefreq: "daily" },
  { slug: "doomsday-clock-history-timeline", lastmod: TODAY_ISO, priority: "0.9", changefreq: "weekly" },
  { slug: "doomsday-clock-monthly-update", lastmod: TODAY_ISO, priority: "0.6", changefreq: "weekly" },
  { slug: "doomsday-clock-faq", lastmod: TODAY_ISO, priority: "0.8", changefreq: "weekly" },
  { slug: "doomsday-clock-2027-prediction", lastmod: "2026-03-07", priority: "0.8", changefreq: "monthly" },
  { slug: "doomsday-clock-comic-vs-real", lastmod: "2026-03-07", priority: "0.7", changefreq: "monthly" },
  { slug: "what-happens-doomsday-clock-midnight", lastmod: "2026-03-07", priority: "0.7", changefreq: "monthly" },
  { slug: "who-controls-doomsday-clock", lastmod: "2026-03-07", priority: "0.7", changefreq: "monthly" },
  { slug: "what-does-89-seconds-to-midnight-mean", lastmod: "2026-03-07", priority: "0.7", changefreq: "monthly" },
  { slug: "will-the-world-end-doomsday-clock", lastmod: "2026-03-07", priority: "0.7", changefreq: "monthly" },
  { slug: "best-doomsday-clock-watches", lastmod: "2026-03-07", priority: "0.6", changefreq: "monthly" },
  { slug: "emergency-food-supply-guide", lastmod: "2026-03-07", priority: "0.6", changefreq: "monthly" },
  { slug: "essential-survival-gear-2026", lastmod: "2026-03-07", priority: "0.6", changefreq: "monthly" },
  { slug: "best-home-backup-power-systems", lastmod: "2026-03-07", priority: "0.6", changefreq: "monthly" },
];

const YEAR_PAGES = [2015, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") return res.status(405).end();

  const sql = neon(process.env.DATABASE_URL!);
  const posts = await sql`SELECT id, updated_at, created_at FROM posts ORDER BY created_at DESC`;

  const today = new Date().toISOString().split("T")[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <!-- Homepage -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${SITE_URL}/og-image-2026.png</image:loc>
      <image:title>Doomsday Clock - 85 Seconds to Midnight</image:title>
    </image:image>
  </url>

  <!-- Section anchors -->
  <url>
    <loc>${SITE_URL}/#clock</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${SITE_URL}/#timeline</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/#scenarios</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${SITE_URL}/#history</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/#faq</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Year Pages -->
${YEAR_PAGES.map(y => `  <url>
    <loc>${SITE_URL}/doomsday-clock-${y}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join("\n")}

  <!-- Blog -->
  <url>
    <loc>${SITE_URL}/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${BLOG_POSTS.map(p => `  <url>
    <loc>${SITE_URL}/blog/${p.slug}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join("\n")}

  <!-- Forum -->
  <url>
    <loc>${SITE_URL}/forum</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
${posts.map(p => {
    const lastmod = new Date(p.updated_at || p.created_at).toISOString().split("T")[0];
    return `  <url>
    <loc>${SITE_URL}/forum/post/${p.id}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
  }).join("\n")}

  <!-- AI documentation -->
  <url>
    <loc>${SITE_URL}/llms.txt</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${SITE_URL}/llms-full.txt</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=600");
  return res.status(200).send(xml);
}
