/**
 * Pre-render script for SEO
 *
 * Generates static HTML files for each route so that Googlebot sees
 * proper <title>, meta tags, and meaningful content on every page —
 * not just an empty <div id="root"></div>.
 *
 * Run after `vite build`:  node scripts/prerender.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const SITE = "https://doomsdayclock.net";

// ---------- page data ----------

const clockData = {
  2015: { time: "3 minutes", reason: "Climate inaction", details: "Unchecked climate change, nuclear modernization, and outsized nuclear arsenals pose threats." },
  2017: { time: "2.5 minutes", reason: "Trump administration", details: "Rise of nationalism worldwide, US President's comments about nuclear weapons, and climate change denial." },
  2018: { time: "2 minutes", reason: "Nuclear risks increase", details: "Failure of world leaders to address nuclear threats and climate change." },
  2020: { time: "100 seconds", reason: "Closest ever", details: "Nuclear weapons modernization, climate change, and cyber-enabled information warfare combine to create unprecedented danger." },
  2021: { time: "100 seconds", reason: "Unchanged", details: "The Clock remained at 100 seconds amid COVID-19 and political instability." },
  2022: { time: "100 seconds", reason: "Unchanged", details: "The Clock remained at 100 seconds as nuclear and climate threats continued to grow." },
  2023: { time: "90 seconds", reason: "Russia-Ukraine war", details: "Russia's invasion of Ukraine raises nuclear tensions to their highest level since the Cold War. Climate change continues unabated." },
  2024: { time: "90 seconds", reason: "Unchanged", details: "The Clock remains at 90 seconds due to ongoing Russia-Ukraine conflict, nuclear threats, and lack of climate action." },
  2025: { time: "89 seconds", reason: "Closest ever", details: "The Clock moves 1 second closer to midnight—the closest it has ever been. Escalating nuclear risks, ongoing Russia-Ukraine war, climate crisis, and AI-related threats contribute to the decision." },
  2026: { time: "85 seconds", reason: "Closest ever", details: "The Clock moves to 85 seconds to midnight—a new record. Increased nuclear risks, the Middle East conflict, climate change, and AI-related threats drive the decision." },
};

const yearPages = Object.entries(clockData).map(([year, d]) => ({
  path: `/doomsday-clock-${year}`,
  title: `Doomsday Clock ${year}: ${d.time} to Midnight | DoomsdayClock.net`,
  description: `In ${year}, the Doomsday Clock was set to ${d.time} to midnight. ${d.details} View the full Doomsday Clock ${year} timeline, history, and analysis.`,
  content: `<h1>Doomsday Clock ${year} — ${d.time} to Midnight</h1>
    <p>In ${year}, the Bulletin of the Atomic Scientists set the Doomsday Clock to <strong>${d.time} to midnight</strong>. ${d.details}</p>
    <h2>Why the Clock Was Set to ${d.time} in ${year}</h2>
    <p>Reason: ${d.reason}. ${d.details}</p>
    <p><a href="/">View the current Doomsday Clock time</a> | <a href="/blog/doomsday-clock-history-timeline">Full history timeline</a></p>`,
}));

const blogPages = [
  {
    path: "/blog",
    title: "Blog | Doomsday Clock Analysis & Updates | DoomsdayClock.net",
    description: "Analysis, updates, and deep dives on the events that shape humanity's existential risk landscape.",
    ogType: "website",
    content: `<h1>Doomsday Clock Blog — Analysis & Updates</h1>
      <p>In-depth analysis, updates, and deep dives on the events that shape humanity's existential risk landscape.</p>
      <nav><ul>
        <li><a href="/blog/doomsday-clock-2026">Doomsday Clock 2026: What Changed and Why</a></li>
        <li><a href="/blog/doomsday-clock-2027-prediction">Doomsday Clock 2027 Prediction</a></li>
        <li><a href="/blog/us-iran-crisis-doomsday-clock">US-Iran Crisis & the Doomsday Clock</a></li>
        <li><a href="/blog/doomsday-clock-history-timeline">Complete History Timeline (1947-2026)</a></li>
        <li><a href="/blog/doomsday-clock-comic-vs-real">Doomsday Clock vs. Pop Culture</a></li>
        <li><a href="/blog/what-happens-doomsday-clock-midnight">What Happens at Midnight?</a></li>
        <li><a href="/blog/who-controls-doomsday-clock">Who Controls the Doomsday Clock?</a></li>
        <li><a href="/blog/what-does-89-seconds-to-midnight-mean">What Does 89 Seconds Mean?</a></li>
        <li><a href="/blog/will-the-world-end-doomsday-clock">Will the World End?</a></li>
        <li><a href="/blog/best-doomsday-clock-watches">Best Doomsday Clock Watches</a></li>
        <li><a href="/blog/emergency-food-supply-guide">Emergency Food Supply Guide</a></li>
        <li><a href="/blog/essential-survival-gear-2026">Essential Survival Gear 2026</a></li>
        <li><a href="/blog/best-home-backup-power-systems">Best Home Backup Power Systems</a></li>
      </ul></nav>`,
  },
  {
    path: "/blog/doomsday-clock-2026",
    title: "Doomsday Clock 2026: What Changed and Why | DoomsdayClock.net",
    description: "The Bulletin moved the Doomsday Clock from 89 to 85 seconds to midnight in February 2026. A deep dive on what drove the change and what 85 seconds means in context.",
    content: `<h1>Doomsday Clock 2026: What Changed and Why</h1>
      <p>On February 4, 2026, the Bulletin of the Atomic Scientists moved the Doomsday Clock from 89 to <strong>85 seconds to midnight</strong> — a new record for the closest the clock has ever been to global catastrophe.</p>
      <h2>Why Did the Clock Move in 2026?</h2>
      <p>The decision was driven by increased nuclear risks, the ongoing Middle East conflict, climate change acceleration, and emerging AI-related threats to global stability.</p>
      <p><a href="/">Current Doomsday Clock time</a> | <a href="/blog/doomsday-clock-history-timeline">Full timeline</a></p>`,
  },
  {
    path: "/blog/doomsday-clock-2027-prediction",
    title: "Doomsday Clock 2027 Prediction: Will It Move Closer to Midnight? | DoomsdayClock.net",
    description: "Our analysis of the 2027 Doomsday Clock prediction. Will it move closer to midnight? Explore scenarios, expert analysis, and historical patterns for the January 2027 announcement.",
    content: `<h1>Doomsday Clock 2027 Prediction: Will It Move Closer to Midnight?</h1>
      <p>The next Doomsday Clock announcement is expected in January 2027. Based on historical patterns and current global threats, we analyze the most likely scenarios for the 2027 setting.</p>
      <h2>Key Factors for the 2027 Decision</h2>
      <p>Nuclear proliferation risks, the ongoing Russia-Ukraine conflict, Middle East tensions, accelerating climate change, and AI governance challenges will all factor into the Bulletin's decision.</p>`,
  },
  {
    path: "/blog/us-iran-crisis-doomsday-clock",
    title: "US-Iran Crisis & the Doomsday Clock: Operation Epic Fury Analysis | DoomsdayClock.net",
    description: "Analysis of how US-Israel strikes on Iran (Operation Epic Fury) could push the Doomsday Clock closer to midnight. Currently at 85 seconds.",
    content: `<h1>US-Iran Crisis & the Doomsday Clock</h1>
      <p>Operation Epic Fury — the US-Israel military strikes on Iran — represents one of the most significant escalations in Middle East tensions in decades. How could this crisis affect the Doomsday Clock?</p>
      <h2>Impact on the Doomsday Clock</h2>
      <p>With the clock already at 85 seconds to midnight, a widening conflict in the Middle East involving nuclear-armed or nuclear-threshold states could push it even closer.</p>`,
  },
  {
    path: "/blog/doomsday-clock-history-timeline",
    title: "Doomsday Clock History: Complete Timeline of Every Change (1947-2026) | DoomsdayClock.net",
    description: "Explore the complete history of every Doomsday Clock change from 1947 to 2026. See all 27 time adjustments, the reasons behind each move, and key historical events.",
    content: `<h1>Doomsday Clock History: Complete Timeline (1947-2026)</h1>
      <p>The Doomsday Clock has been adjusted 27 times since its creation in 1947 by the Bulletin of the Atomic Scientists. This complete timeline shows every change, from the original 7 minutes to midnight to today's 85 seconds.</p>
      <h2>Key Milestones</h2>
      <ul>
        <li><strong>1947:</strong> Clock created at 7 minutes to midnight</li>
        <li><strong>1953:</strong> 2 minutes — hydrogen bomb tests</li>
        <li><strong>1991:</strong> 17 minutes — furthest from midnight (Cold War ends)</li>
        <li><strong>2020:</strong> 100 seconds — enters sub-2-minute territory for first time</li>
        <li><strong>2026:</strong> 85 seconds — closest ever</li>
      </ul>`,
  },
  {
    path: "/blog/doomsday-clock-comic-vs-real",
    title: "Doomsday Clock vs. Pop Culture: The Comic, The Symbol, The Movement | DoomsdayClock.net",
    description: "The real Doomsday Clock vs. the DC Comics series — what's the difference? How Watchmen borrowed nuclear anxiety, and why the real clock matters more than fiction.",
    content: `<h1>Doomsday Clock vs. Pop Culture</h1>
      <p>The real Doomsday Clock, maintained by the Bulletin of the Atomic Scientists since 1947, is often confused with the DC Comics "Doomsday Clock" series — a sequel to Alan Moore's Watchmen.</p>
      <h2>The Real Clock vs. the Comic</h2>
      <p>While Alan Moore's Watchmen drew heavily on nuclear anxiety and the symbolism of the Doomsday Clock, the real clock is a scientific assessment tool, not fiction.</p>`,
  },
  {
    path: "/blog/what-happens-doomsday-clock-midnight",
    title: "What Happens When the Doomsday Clock Reaches Midnight? | DoomsdayClock.net",
    description: "What happens if the Doomsday Clock hits midnight? Learn what midnight symbolizes, why the clock has never reached it, and the catastrophic scenarios it represents.",
    content: `<h1>What Happens When the Doomsday Clock Reaches Midnight?</h1>
      <p>Midnight on the Doomsday Clock symbolizes global catastrophe — the point at which human civilization faces an existential threat that cannot be reversed. The clock has never reached midnight.</p>
      <h2>What Midnight Represents</h2>
      <p>Midnight doesn't predict a specific event. It represents a tipping point where nuclear war, climate catastrophe, or other existential threats make continued human civilization uncertain.</p>`,
  },
  {
    path: "/blog/who-controls-doomsday-clock",
    title: "Who Controls the Doomsday Clock? Inside the Bulletin of the Atomic Scientists | DoomsdayClock.net",
    description: "Who decides the Doomsday Clock time? Learn about the Bulletin of the Atomic Scientists, their Science and Security Board, and the process behind each clock setting.",
    content: `<h1>Who Controls the Doomsday Clock?</h1>
      <p>The Doomsday Clock is set by the Science and Security Board of the Bulletin of the Atomic Scientists, in consultation with their Board of Sponsors, which includes Nobel Laureates.</p>
      <h2>The Decision Process</h2>
      <p>Each year, the Board evaluates nuclear threats, climate change, disruptive technologies, and biosecurity to determine whether to move the clock forward, backward, or leave it unchanged.</p>`,
  },
  {
    path: "/blog/what-does-89-seconds-to-midnight-mean",
    title: "What Does 89 Seconds to Midnight Mean? Doomsday Clock Explained | DoomsdayClock.net",
    description: "What does 89 seconds to midnight actually mean? Understand the significance of the Doomsday Clock's 2025 setting, how it compares to 90 seconds, and what the current 85-second reading means for humanity.",
    content: `<h1>What Does 89 Seconds to Midnight Mean?</h1>
      <p>In 2025, the Doomsday Clock was set to 89 seconds to midnight — at the time, the closest it had ever been to symbolic global catastrophe. In 2026, it moved even closer to 85 seconds.</p>
      <h2>Understanding the Scale</h2>
      <p>The clock's time is not a literal countdown. It's a metaphor for how close humanity is to self-destruction, as assessed by leading scientists and security experts.</p>`,
  },
  {
    path: "/blog/will-the-world-end-doomsday-clock",
    title: "Will the World End? What the Doomsday Clock Actually Predicts | DoomsdayClock.net",
    description: "Will the world end in 2026? What the Doomsday Clock actually predicts, the difference between the climate clock and the Doomsday Clock, and what science says about humanity's future.",
    content: `<h1>Will the World End? What the Doomsday Clock Actually Predicts</h1>
      <p>The Doomsday Clock is not a prediction that the world will end. It's a warning — a call to action from scientists who believe humanity has the power to change course.</p>
      <h2>What the Clock Does and Doesn't Predict</h2>
      <p>The clock measures the level of existential risk, not the probability of a specific doomsday event. Even at 85 seconds to midnight, the message is that action can still push the clock back.</p>`,
  },
  {
    path: "/blog/best-doomsday-clock-watches",
    title: "Best Doomsday Clock Watches & Atomic-Age Timepieces | DoomsdayClock.net",
    description: "Discover the best doomsday clock-themed watches and atomic-age timepieces. From nuclear-inspired designs to survival watches built for any scenario.",
    content: `<h1>Best Doomsday Clock Watches & Atomic-Age Timepieces</h1>
      <p>A curated collection of doomsday clock-themed watches and atomic-age timepieces — from nuclear-inspired designs to rugged survival watches built for any scenario.</p>`,
  },
  {
    path: "/blog/emergency-food-supply-guide",
    title: "Best Emergency Food Supplies for Long-Term Storage (2026) | DoomsdayClock.net",
    description: "Expert guide to the best emergency food supplies for long-term storage. From freeze-dried meals to survival food kits rated for 25+ years of shelf life.",
    content: `<h1>Best Emergency Food Supplies for Long-Term Storage (2026)</h1>
      <p>An expert guide to the best emergency food supplies for long-term storage. From freeze-dried meals to survival food kits rated for 25+ years of shelf life.</p>`,
  },
  {
    path: "/blog/essential-survival-gear-2026",
    title: "Essential Survival Gear for 2026: A Preparedness Guide | DoomsdayClock.net",
    description: "Complete guide to essential survival gear for 2026. From bug-out bags to water filtration, the gear you need when the Doomsday Clock ticks closer to midnight.",
    content: `<h1>Essential Survival Gear for 2026</h1>
      <p>A complete preparedness guide covering the essential survival gear for 2026 — from bug-out bags to water filtration systems, the gear you need when the Doomsday Clock ticks closer to midnight.</p>`,
  },
  {
    path: "/blog/best-home-backup-power-systems",
    title: "Best Home Backup Power Systems for Extended Outages (2026) | DoomsdayClock.net",
    description: "Complete guide to home backup power systems for extended outages. Solar generators, battery stations, and whole-home systems compared.",
    content: `<h1>Best Home Backup Power Systems for Extended Outages (2026)</h1>
      <p>A complete guide to home backup power systems for extended outages. Solar generators, portable battery stations, and whole-home systems compared and reviewed.</p>`,
  },
];

const allPages = [
  // Homepage is already well-covered by index.html noscript fallback — skip it
  ...yearPages,
  ...blogPages,
];

// ---------- template manipulation ----------

function generateHTML(template, page) {
  let html = template;

  // Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHTML(page.title)}</title>`
  );

  // Replace meta name="title"
  html = html.replace(
    /<meta name="title" content="[^"]*"/,
    `<meta name="title" content="${escapeAttr(page.title)}"`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${escapeAttr(page.description)}"`
  );

  // Replace OG tags
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${SITE}${page.path}"`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${escapeAttr(page.title)}"`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${escapeAttr(page.description)}"`
  );
  html = html.replace(
    /<meta property="og:type" content="[^"]*"/,
    `<meta property="og:type" content="${page.ogType || "article"}"`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"/,
    `<meta name="twitter:url" content="${SITE}${page.path}"`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${escapeAttr(page.title)}"`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${escapeAttr(page.description)}"`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${SITE}${page.path}"`
  );

  // Replace the #root content: put SEO content BEFORE the noscript fallback
  // React's createRoot().render() will replace all of this when JS loads
  const seoBlock = `<div id="root">
      <div data-prerendered="true" style="max-width:800px;margin:0 auto;padding:40px 20px;font-family:system-ui,sans-serif;color:#e4e4e7;">
        ${page.content}
        <p style="margin-top:2rem;font-size:0.875rem;color:#71717a;">Loading interactive experience...</p>
      </div>`;

  html = html.replace(/<div id="root">/, seoBlock);

  return html;
}

function escapeHTML(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(s) {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ---------- main ----------

const template = readFileSync(join(DIST, "index.html"), "utf-8");
let count = 0;

for (const page of allPages) {
  const html = generateHTML(template, page);
  // e.g. /blog/foo -> dist/blog/foo.html
  // Vercel with cleanUrls: true serves foo.html at /foo
  const filePath = join(DIST, page.path + ".html");
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, html);
  count++;
}

console.log(`✓ Pre-rendered ${count} pages for SEO`);
