import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

const SITE_URL = "https://doomsdayclock.net";

const BLOG_POSTS = [
  { slug: "us-iran-crisis-doomsday-clock", lastmod: "2026-02-28" },
];

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
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
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
