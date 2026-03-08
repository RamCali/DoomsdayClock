import type { VercelRequest, VercelResponse } from "@vercel/node";

const SITE_URL = "https://doomsdayclock.net";

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
      <news:title>${a.title}</news:title>
      <news:keywords>${a.keywords}</news:keywords>
    </news:news>
  </url>`
).join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=600");
  return res.status(200).send(xml);
}
