import type { VercelRequest, VercelResponse } from "@vercel/node";

const SITE_URL = "https://doomsdayclock.net";

function escapeXml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

const NEWS_ARTICLES = [
  {
    slug: "doomsday-clock-2027-prediction",
    title: "Doomsday Clock 2027 Prediction: Will It Move Closer to Midnight?",
    date: "2026-03-07T00:00:00Z",
    keywords: "doomsday clock 2027, doomsday clock prediction, nuclear threat 2027",
  },
  {
    slug: "doomsday-clock-history-timeline",
    title: "Doomsday Clock History: Every Change from 1947 to 2026",
    date: "2026-03-07T00:00:00Z",
    keywords: "doomsday clock history, doomsday clock timeline, nuclear threat history",
  },
  {
    slug: "doomsday-clock-2026",
    title: "Doomsday Clock 2026: What Changed and Why",
    date: "2026-03-07T00:00:00Z",
    keywords: "doomsday clock 2026, 85 seconds to midnight, bulletin atomic scientists 2026",
  },
  {
    slug: "doomsday-clock-comic-vs-real",
    title: "Doomsday Clock vs. Pop Culture: The Comic, The Symbol, The Movement",
    date: "2026-03-07T00:00:00Z",
    keywords: "doomsday clock comic, doomsday clock watchmen, doomsday clock dc comics",
  },
  {
    slug: "us-iran-crisis-doomsday-clock",
    title: "Operation Epic Fury: How US-Iran Strikes Could Push the Doomsday Clock to the Brink",
    date: "2026-02-28T00:00:00Z",
    keywords: "US Iran crisis, doomsday clock, nuclear threat, Operation Epic Fury",
  },
  {
    slug: "what-happens-doomsday-clock-midnight",
    title: "What Happens When the Doomsday Clock Reaches Midnight?",
    date: "2026-03-07T00:00:00Z",
    keywords: "doomsday clock midnight, what happens at midnight, doomsday clock meaning",
  },
  {
    slug: "who-controls-doomsday-clock",
    title: "Who Controls the Doomsday Clock? Inside the Bulletin of the Atomic Scientists",
    date: "2026-03-07T00:00:00Z",
    keywords: "who controls doomsday clock, bulletin of atomic scientists, doomsday clock board",
  },
  {
    slug: "what-does-89-seconds-to-midnight-mean",
    title: "What Does 89 Seconds to Midnight Actually Mean?",
    date: "2026-03-07T00:00:00Z",
    keywords: "89 seconds to midnight, doomsday clock 2025, doomsday clock meaning",
  },
  {
    slug: "will-the-world-end-doomsday-clock",
    title: "Will the World End? What the Doomsday Clock Actually Predicts",
    date: "2026-03-07T00:00:00Z",
    keywords: "will the world end, doomsday clock prediction, end of the world 2026",
  },
];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") return res.status(405).end();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${NEWS_ARTICLES.map(
  (a) => `  <url>
    <loc>${SITE_URL}/blog/${a.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>DoomsdayClock.net</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${a.date}</news:publication_date>
      <news:title>${escapeXml(a.title)}</news:title>
      <news:keywords>${a.keywords}</news:keywords>
    </news:news>
  </url>`
).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=600");
  return res.status(200).send(xml);
}
