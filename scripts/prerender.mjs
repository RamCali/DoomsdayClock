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

// Build-time date stamps so prerendered HTML always reflects "current month/year"
// in titles, descriptions, and article:modified_time. Combined with a daily
// rebuild cron, this gives Google a fresh freshness signal every day.
const BUILD_NOW = new Date();
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const CURRENT_MONTH = MONTHS[BUILD_NOW.getMonth()];
const CURRENT_YEAR = BUILD_NOW.getFullYear();
const LAST_UPDATED_DISPLAY = `${CURRENT_MONTH} ${BUILD_NOW.getDate()}, ${CURRENT_YEAR}`;
const MODIFIED_ISO = BUILD_NOW.toISOString();

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
        <li><a href="/blog/doomsday-clock-2026">Doomsday Clock 2026 Update: Current Time Is 85 Seconds</a></li>
        <li><a href="/blog/doomsday-clock-2027-prediction">Doomsday Clock 2027 Prediction</a></li>
        <li><a href="/blog/us-iran-crisis-doomsday-clock">US-Iran Crisis & the Doomsday Clock</a></li>
        <li><a href="/blog/doomsday-clock-history-timeline">Doomsday Clock Timeline: All 28 Changes (1947-2026)</a></li>
        <li><a href="/blog/doomsday-clock-timeline-graph">Doomsday Clock Graph & Chart: Visual Timeline</a></li>
        <li><a href="/blog/doomsday-clock-comic-vs-real">Doomsday Clock vs. Pop Culture</a></li>
        <li><a href="/blog/what-happens-doomsday-clock-midnight">What Happens at Midnight?</a></li>
        <li><a href="/blog/who-controls-doomsday-clock">Who Controls the Doomsday Clock?</a></li>
        <li><a href="/blog/what-does-89-seconds-to-midnight-mean">What Does 89 Seconds Mean?</a></li>
        <li><a href="/blog/will-the-world-end-doomsday-clock">Will the World End?</a></li>
        <li><a href="/blog/best-doomsday-clock-watches">Best Doomsday Clock Watches</a></li>
        <li><a href="/blog/emergency-food-supply-guide">Emergency Food Supply Guide</a></li>
        <li><a href="/blog/essential-survival-gear-2026">Essential Survival Gear 2026</a></li>
        <li><a href="/blog/best-home-backup-power-systems">Best Home Backup Power Systems</a></li>
        <li><a href="/blog/doomsday-clock-and-artificial-intelligence">How AI Threatens the Doomsday Clock</a></li>
        <li><a href="/blog/doomsday-clock-vs-other-threat-indices">Doomsday Clock vs Other Threat Indices</a></li>
        <li><a href="/blog/how-many-nuclear-weapons-exist-2026">How Many Nuclear Weapons Exist?</a></li>
        <li><a href="/blog/what-would-happen-in-a-nuclear-war">What Would Happen in a Nuclear War?</a></li>
        <li><a href="/blog/seven-minutes-to-midnight-doomsday-clock">7 Minutes to Midnight Explained</a></li>
        <li><a href="/blog/doomsday-clock-news-updates">Doomsday Clock News & Updates</a></li>
        <li><a href="/blog/doomsday-clock-faq">Doomsday Clock FAQ</a></li>
        <li><a href="/blog/when-will-doomsday-clock-hit-midnight">When Will the Clock Hit Midnight?</a></li>
      </ul></nav>`,
  },
  {
    path: "/blog/doomsday-clock-2026",
    title: "Doomsday Clock 2026: 85 Seconds to Midnight — Current Status",
    description: `Current Doomsday Clock status: 85 seconds to midnight — the closest ever, set February 4, 2026. Page last refreshed ${LAST_UPDATED_DISPLAY}. Why the Bulletin moved from 89 to 85 seconds.`,
    content: `<h1>Doomsday Clock 2026: 85 Seconds to Midnight — Current Status</h1>
      <p>The Doomsday Clock is currently set at <strong>85 seconds to midnight</strong> as of February 4, 2026 — the closest it has ever been in its 79-year history. The Bulletin of the Atomic Scientists moved it forward from 89 seconds, citing nuclear escalation, climate acceleration, and AI risks.</p>
      <p><em>Last updated: ${LAST_UPDATED_DISPLAY}</em></p>
      <h2>Why Did the Doomsday Clock Move in 2026?</h2>
      <p>The decision was driven by increased nuclear risks, the ongoing Middle East conflict including the US-Iran crisis, climate change acceleration, and emerging AI-related threats to global stability.</p>
      <p><a href="/">Current Doomsday Clock time</a> | <a href="/blog/doomsday-clock-history-timeline">Complete timeline of all changes</a> | <a href="/blog/doomsday-clock-monthly-update">Month-by-month update log</a></p>`,
  },
  {
    path: "/blog/doomsday-clock-monthly-update",
    title: "Doomsday Clock Monthly Update Log — Month-by-Month Changes",
    description: `Month-by-month log of Doomsday Clock developments through ${CURRENT_YEAR}: Bulletin statements, nuclear incidents, and escalation events that shape the next setting. Page refreshed ${LAST_UPDATED_DISPLAY}.`,
    content: `<h1>Doomsday Clock Monthly Update Log — Month-by-Month Changes</h1>
      <p>This page logs month-by-month developments affecting the Doomsday Clock through ${CURRENT_YEAR}: Bulletin statements, nuclear incidents, diplomatic breakdowns, and the escalation events that will shape the next official setting.</p>
      <p><em>Page refreshed: ${LAST_UPDATED_DISPLAY}.</em> For the current clock setting and the canonical 2026 analysis, see our <a href="/blog/doomsday-clock-2026">Doomsday Clock 2026 current status</a> page.</p>
      <h2>Recent Developments</h2>
      <p>For the most significant geopolitical event currently affecting nuclear risk, see our <a href="/blog/us-iran-crisis-doomsday-clock">US-Iran crisis breakdown</a>. For the complete history of every setting, see the <a href="/blog/doomsday-clock-history-timeline">Doomsday Clock timeline 1947–${CURRENT_YEAR}</a>.</p>`,
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
    title: "Operation Epic Fury & the Doomsday Clock: US-Iran Nuclear Crisis 2026",
    description: "Operation Epic Fury — the US-Israel strikes on Iran — and what it means for the Doomsday Clock. Latest nuclear escalation analysis and Bulletin response.",
    content: `<h1>US-Iran Crisis 2026: How Operation Epic Fury Could Push the Doomsday Clock Past 85 Seconds</h1>
      <p>Operation Epic Fury — the US-Israel military strikes on Iran — represents one of the most significant escalations in Middle East tensions in decades. With the Doomsday Clock already at 85 seconds to midnight, could this crisis push it even closer?</p>
      <h2>Impact on the Doomsday Clock in 2026</h2>
      <p>A widening conflict in the Middle East involving nuclear-armed or nuclear-threshold states could push the clock past 85 seconds — potentially the largest single advance in its history.</p>
      <p><a href="/blog/doomsday-clock-2026">Doomsday Clock 2026: Current time and full analysis</a> | <a href="/blog/doomsday-clock-history-timeline">Complete timeline of all changes</a></p>`,
  },
  {
    path: "/blog/doomsday-clock-history-timeline",
    title: "Doomsday Clock Timeline: All 28 Changes from 1947 to 2026",
    description: "Complete Doomsday Clock timeline — all 28 settings from 7 minutes (1947) to 85 seconds (2026). Year-by-year history with dates, reasons, and graph.",
    content: `<h1>Doomsday Clock Timeline: All 28 Changes from 1947 to 2026 (Complete History)</h1>
      <p>The Doomsday Clock has been adjusted 28 times since its creation in 1947 by the Bulletin of the Atomic Scientists. This complete timeline shows every change, from the original 7 minutes to midnight to today's record-low 85 seconds.</p>
      <h2>Key Milestones in the Doomsday Clock Timeline</h2>
      <ul>
        <li><strong>1947:</strong> Clock created at 7 minutes to midnight</li>
        <li><strong>1953:</strong> 2 minutes — hydrogen bomb tests (closest until 2020)</li>
        <li><strong>1991:</strong> 17 minutes — furthest from midnight (Cold War ends)</li>
        <li><strong>2020:</strong> 100 seconds — enters sub-2-minute territory for first time</li>
        <li><strong>2023:</strong> 90 seconds — Russia-Ukraine war escalation</li>
        <li><strong>2025:</strong> 89 seconds — record at the time</li>
        <li><strong>2026:</strong> 85 seconds — closest ever to midnight</li>
      </ul>
      <p><a href="/blog/doomsday-clock-timeline-graph">See the visual Doomsday Clock graph and chart</a> | <a href="/blog/doomsday-clock-2026">2026 Update: Why it moved to 85 seconds</a></p>`,
  },
  {
    path: "/blog/doomsday-clock-timeline-graph",
    title: "Doomsday Clock Graph & Chart: Visual Timeline of Every Change (1947–2026)",
    description: "See the Doomsday Clock history chart and visual timeline graph from 1947 to 2026. Track every change over time — from 17 minutes at its safest to 85 seconds at its closest to midnight.",
    content: `<h1>Doomsday Clock Graph & Chart: Visual Timeline of Every Change (1947–2026)</h1>
      <p>This interactive Doomsday Clock graph shows every time setting from 1947 to 2026. The visual history chart tracks how the clock has moved over time — from 17 minutes to midnight at its safest (1991) to the current record of 85 seconds (2026).</p>
      <h2>Doomsday Clock Over Time: Key Trends</h2>
      <ul>
        <li><strong>1947–1953:</strong> Rapid advance from 7 to 2 minutes as nuclear arms race begins</li>
        <li><strong>1963–1991:</strong> General improvement, reaching 17 minutes as Cold War ends</li>
        <li><strong>1995–2020:</strong> Steady decline back toward midnight</li>
        <li><strong>2020–2026:</strong> Sub-2-minute era — 100 seconds down to 85 seconds</li>
      </ul>
      <p><a href="/blog/doomsday-clock-history-timeline">Full timeline with detailed history</a> | <a href="/blog/doomsday-clock-2026">Why the clock moved to 85 seconds in 2026</a></p>`,
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
    title: "When Will the World End? Doomsday Clock Predictions for 2026, 2050 & 2100",
    description: "Scientists say no — the world won't end in 2026. But the Doomsday Clock just hit 85 seconds to midnight, the closest ever. Real timelines for 2026, 2050, and 2100 from the Bulletin of Atomic Scientists, plus what would actually push us past midnight.",
    content: `<h1>When Will the World End? Doomsday Clock Predictions for 2026, 2050 &amp; 2100</h1>
      <p><strong>No scientific body predicts the world will end in 2026.</strong> But the Doomsday Clock just moved to 85 seconds to midnight — the closest it has ever been since 1947. Here's what the clock actually predicts for 2026, 2050, and 2100, and what would have to happen for it to hit zero.</p>
      <h2>Will the World End in 2026?</h2>
      <p>No credible scientific body, government agency, or research institution predicts the world will end in 2026. The Doomsday Clock measures existential risk — not a countdown to a specific date. It has been at 2 minutes (1953), 17 minutes (1991), and now 85 seconds (2026), proving the threats it tracks are not inevitable.</p>
      <h2>Will the World Survive in 2050?</h2>
      <p>Yes, with very high probability — but climate models project 1.5–2.5°C of warming, sea levels rising 15–30cm, and significant strain on global food and water systems. Not apocalyptic, but more dangerous.</p>
      <h2>What Would Push the Clock Past Midnight?</h2>
      <p>The Bulletin of Atomic Scientists cites four converging threats: nuclear escalation, climate change, AI risks, and biosecurity. A nuclear exchange, runaway warming above 4°C, or unchecked AI deployment would all push the clock toward midnight.</p>`,
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
  {
    path: "/blog/doomsday-clock-and-artificial-intelligence",
    title: "How AI & Artificial Intelligence Threaten the Doomsday Clock | DoomsdayClock.net",
    description: "Artificial intelligence is now a factor in the Doomsday Clock. Learn how AI weapons, deepfakes, and autonomous systems are pushing the clock closer to midnight in 2026.",
    content: `<h1>How AI & Artificial Intelligence Threaten the Doomsday Clock</h1>
      <p>Artificial intelligence has become a significant factor in the Bulletin of the Atomic Scientists' Doomsday Clock assessment. From autonomous weapons systems to AI-powered disinformation, technology is creating new existential risks.</p>
      <h2>AI as a Doomsday Clock Factor</h2>
      <p>The Bulletin began explicitly citing AI as a threat factor in its annual clock-setting deliberations, alongside nuclear weapons, climate change, and biosecurity risks.</p>`,
  },
  {
    path: "/blog/doomsday-clock-vs-other-threat-indices",
    title: "Doomsday Clock vs Other Global Threat Indices: How Do They Compare? | DoomsdayClock.net",
    description: "How does the Doomsday Clock compare to the Climate Clock, Global Peace Index, Nuclear Threat Initiative, and other threat assessments?",
    content: `<h1>Doomsday Clock vs Other Global Threat Indices</h1>
      <p>The Doomsday Clock is the world's most recognized symbol of existential risk, but it's not the only global threat assessment. Compare it to the Climate Clock, Global Peace Index, Nuclear Threat Initiative Index, and more.</p>`,
  },
  {
    path: "/blog/how-many-nuclear-weapons-exist-2026",
    title: "How Many Nuclear Weapons Exist in 2026? Country-by-Country Breakdown | DoomsdayClock.net",
    description: "There are approximately 12,100 nuclear warheads worldwide in 2026. See the complete country-by-country breakdown and how stockpiles affect the Doomsday Clock.",
    content: `<h1>How Many Nuclear Weapons Exist in 2026?</h1>
      <p>As of 2026, there are approximately 12,100 nuclear warheads worldwide, held by nine countries. Russia and the United States possess about 88% of all nuclear weapons.</p>
      <h2>Nuclear Weapons by Country (2026)</h2>
      <ul>
        <li>Russia: ~5,580 warheads</li>
        <li>United States: ~5,044 warheads</li>
        <li>China: ~500 warheads</li>
        <li>France: 290 warheads</li>
        <li>United Kingdom: 225 warheads</li>
        <li>Pakistan: ~170 warheads</li>
        <li>India: ~172 warheads</li>
        <li>Israel: ~90 warheads (undeclared)</li>
        <li>North Korea: ~50 warheads</li>
      </ul>`,
  },
  {
    path: "/blog/what-would-happen-in-a-nuclear-war",
    title: "What Would Happen in a Nuclear War? Science-Based Effects & Aftermath | DoomsdayClock.net",
    description: "What would actually happen if nuclear war broke out? From the initial blast to nuclear winter, the science-based effects on cities, climate, food supply, and civilization.",
    content: `<h1>What Would Happen in a Nuclear War?</h1>
      <p>A nuclear war would cause devastating immediate effects — fireballs, shockwaves, and radiation — followed by long-term consequences including nuclear winter, crop failures, and potential civilizational collapse. This is why the Doomsday Clock exists.</p>
      <h2>The Science of Nuclear War Effects</h2>
      <p>Research from climate scientists including Alan Robock's nuclear winter models shows that even a limited nuclear exchange could trigger global temperature drops of 5-10°C, devastating agriculture worldwide.</p>`,
  },
  {
    path: "/blog/seven-minutes-to-midnight-doomsday-clock",
    title: "What Is 7 Minutes to Midnight on the Doomsday Clock? | DoomsdayClock.net",
    description: "Seven minutes to midnight was the Doomsday Clock's original 1947 setting. Learn what 7 minutes meant, how it compares to today's 85 seconds, and the history behind the original time.",
    content: `<h1>What Is 7 Minutes to Midnight on the Doomsday Clock?</h1>
      <p>Seven minutes to midnight was the original setting of the Doomsday Clock when it was created in 1947 by the Bulletin of the Atomic Scientists. Artist Martyl Langsdorf designed the clock face with this initial setting.</p>
      <h2>The Original 1947 Setting</h2>
      <p>In 1947, the world's biggest nuclear concern was the growing atomic arsenal. The clock has since ranged from 17 minutes (1991) to today's record-low 85 seconds to midnight.</p>`,
  },
  {
    path: "/blog/doomsday-clock-news-updates",
    title: "Doomsday Clock News & Latest Updates (March 2026) | DoomsdayClock.net",
    description: "The latest Doomsday Clock news and updates for March 2026. The clock moved to 85 seconds to midnight — the closest ever. Get the latest developments affecting the clock.",
    content: `<h1>Doomsday Clock News & Latest Updates (March 2026)</h1>
      <p>The Doomsday Clock is currently at 85 seconds to midnight — the closest it has ever been. The Bulletin of the Atomic Scientists moved the clock from 89 to 85 seconds in February 2026.</p>
      <h2>Latest Update: February 2026</h2>
      <p>The clock advanced by 4 seconds, the largest single move in the seconds era. The next update is expected in January 2027.</p>`,
  },
  {
    path: "/blog/doomsday-clock-faq",
    title: "Doomsday Clock FAQ: 30 Most Common Questions Answered | DoomsdayClock.net",
    description: "Every question about the Doomsday Clock answered. What is it? What time is it set to? Who controls it? Can it go back? What happens at midnight? 30 expert answers.",
    content: `<h1>Doomsday Clock FAQ: 30 Most Common Questions Answered</h1>
      <p>Your comprehensive guide to every common question about the Doomsday Clock — from what it is and who controls it to what happens at midnight and whether it can go backward.</p>
      <h2>What is the Doomsday Clock?</h2>
      <p>The Doomsday Clock is a symbol that represents how close humanity is to catastrophic destruction, maintained by the Bulletin of the Atomic Scientists since 1947.</p>
      <h2>What time is the Doomsday Clock set to?</h2>
      <p>As of 2026, the Doomsday Clock is set at 85 seconds to midnight — the closest it has ever been.</p>`,
  },
  {
    path: "/blog/when-will-doomsday-clock-hit-midnight",
    title: "When Will the Doomsday Clock Hit Midnight? Predictions & Analysis | DoomsdayClock.net",
    description: "Will the Doomsday Clock ever reach midnight? Analysis of the clock's trajectory, what midnight represents, and whether the clock could actually hit zero.",
    content: `<h1>When Will the Doomsday Clock Hit Midnight?</h1>
      <p>The Doomsday Clock has never reached midnight in its 79-year history, and it likely never will in the literal sense. Midnight represents global catastrophe — a scenario the clock is designed to help prevent, not predict.</p>
      <h2>The Clock's Trajectory</h2>
      <p>From 7 minutes in 1947 to 85 seconds in 2026, the clock has moved significantly closer to midnight. But the clock is a warning, not a countdown.</p>`,
  },
  {
    path: "/blog/best-underground-bunker-kits",
    title: "Best Underground Bunker Kits & Survival Shelters (2026) | DoomsdayClock.net",
    description: "Complete guide to underground bunker kits and survival shelters. From DIY building supplies to pre-fabricated shelters, NBC air filtration, and cost breakdowns.",
    content: `<h1>Best Underground Bunker Kits & Survival Shelters (2026)</h1>
      <p>A comprehensive guide to underground bunker kits and survival shelters for emergency preparedness. Covers DIY options, pre-fabricated shelters, NBC air filtration systems, and complete cost breakdowns.</p>`,
  },
  {
    path: "/blog/best-radiation-detectors-geiger-counters",
    title: "Best Radiation Detectors & Geiger Counters for 2026 | DoomsdayClock.net",
    description: "Expert-reviewed guide to the best radiation detectors and Geiger counters for nuclear emergency preparedness. From personal dosimeters to professional monitors.",
    content: `<h1>Best Radiation Detectors & Geiger Counters for 2026</h1>
      <p>Expert-reviewed guide to the best radiation detectors and Geiger counters. With the Doomsday Clock at 85 seconds to midnight, knowing your radiation exposure is more important than ever.</p>`,
  },
  {
    path: "/blog/best-emergency-radios",
    title: "Best Emergency Radios & Hand-Crank Weather Radios (2026) | DoomsdayClock.net",
    description: "The best hand-crank, solar, and battery emergency radios with NOAA weather alerts. Stay connected when the grid goes down.",
    content: `<h1>Best Emergency Radios & Hand-Crank Weather Radios (2026)</h1>
      <p>Emergency radios with NOAA weather alerts are essential preparedness gear. Our expert-reviewed guide covers hand-crank, solar, and battery-powered options for any crisis scenario.</p>`,
  },
  {
    path: "/blog/best-doomsday-clock-books-nuclear-threats",
    title: "Best Books About Nuclear Threats, Doomsday & Existential Risk | DoomsdayClock.net",
    description: "Essential reading on nuclear weapons, existential risk, and the Doomsday Clock. From The Doomsday Machine to Nuclear War: A Scenario.",
    content: `<h1>Best Books About Nuclear Threats, Doomsday & Existential Risk</h1>
      <p>The essential reading list for understanding nuclear threats and the Doomsday Clock. From Daniel Ellsberg's The Doomsday Machine to Annie Jacobsen's Nuclear War: A Scenario.</p>`,
  },
  {
    path: "/blog/best-water-purification-systems-emergency",
    title: "Best Water Purification Systems for Emergency Preparedness (2026) | DoomsdayClock.net",
    description: "Water is the #1 survival priority. Expert guide to the best portable filters, home purification systems, and emergency water storage solutions.",
    content: `<h1>Best Water Purification Systems for Emergency Preparedness (2026)</h1>
      <p>Water purification is the single most important aspect of emergency preparedness. This guide covers portable filters, home systems, chemical treatments, and storage solutions.</p>`,
  },
  {
    path: "/blog/what-is-the-doomsday-clock",
    title: "What Is the Doomsday Clock? Definition, Meaning & How It Works (2026) | DoomsdayClock.net",
    description: "The Doomsday Clock is a symbol of how close humanity is to catastrophe, currently at 85 seconds to midnight. Learn what it means, how it works, who sets it, and why it matters — the definitive guide.",
    content: `<h1>What Is the Doomsday Clock?</h1>
      <p>The Doomsday Clock is a symbolic timepiece maintained by the Bulletin of the Atomic Scientists since 1947, representing how close humanity is to global catastrophe. As of 2026, it sits at 85 seconds to midnight — the closest it has ever been.</p>
      <h2>How the Clock Works</h2>
      <p>The Bulletin's Science and Security Board evaluates nuclear threats, climate change, disruptive technologies, and biosecurity each year, then decides whether to move the clock forward, backward, or leave it unchanged.</p>
      <p><a href="/blog/how-is-doomsday-clock-calculated">How is the clock calculated?</a> | <a href="/blog/who-controls-doomsday-clock">Who controls the clock?</a></p>`,
  },
  {
    path: "/blog/doomsday-clock-current-time-today",
    title: "Doomsday Clock Current Time: 85 Seconds to Midnight (March 2026) | DoomsdayClock.net",
    description: `The Doomsday Clock is at 85 seconds to midnight — the closest EVER. Updated ${LAST_UPDATED_DISPLAY}. See what changed from 89 seconds, why it moved, and when the next update is expected.`,
    content: `<h1>Doomsday Clock Current Time: 85 Seconds to Midnight</h1>
      <p>The Doomsday Clock is currently at <strong>85 seconds to midnight</strong> as of February 4, 2026 — the closest it has ever been in its 79-year history.</p>
      <p><em>Page refreshed: ${LAST_UPDATED_DISPLAY}.</em></p>
      <h2>What Changed from 89 Seconds</h2>
      <p>The Bulletin moved the clock forward by 4 seconds, citing nuclear escalation, the Middle East conflict, climate acceleration, and AI-related risks.</p>`,
  },
  {
    path: "/blog/doomsday-clock-2025",
    title: "Doomsday Clock 2025: 89 Seconds to Midnight (Now 85 in 2026)",
    description: "In January 2025, the Doomsday Clock moved to 89 seconds to midnight — a record at the time. It has since moved to 85 seconds in February 2026. Full breakdown of the 2025 change, what caused it, and the 2026 update.",
    content: `<h1>Doomsday Clock 2025: 89 Seconds to Midnight (Now 85 in 2026)</h1>
      <p><strong>Latest update:</strong> The Doomsday Clock has since moved to <strong>85 seconds to midnight</strong> in February 2026 — the new record. <a href="/blog/doomsday-clock-2026">Read the 2026 update &rarr;</a></p>
      <p>In January 2025, the Bulletin of the Atomic Scientists moved the Doomsday Clock to 89 seconds to midnight — the closest it had ever been at the time. This article covers what caused the 2025 change and what it means in context of the 2026 advance.</p>
      <h2>Why the Clock Moved to 89 Seconds in 2025</h2>
      <p>Escalating nuclear risks, the ongoing Russia-Ukraine war, climate crisis, and AI-related threats drove the decision. The one-second move from 90 to 89 was deliberate — a signal that conditions had worsened, but not yet collapsed.</p>
      <h2>What Happened Since: The 2026 Update</h2>
      <p>In February 2026, the Bulletin moved the clock forward by 4 seconds to 85 seconds to midnight — the largest single advance in the seconds era. <a href="/blog/doomsday-clock-2026">Full 2026 analysis</a>.</p>
      <p><a href="/blog/doomsday-clock-2026">2026 update: 85 seconds</a> | <a href="/blog/doomsday-clock-history-timeline">Full timeline</a></p>`,
  },
  {
    path: "/blog/doomsday-clock-climate-change",
    title: "How Climate Change Affects the Doomsday Clock | DoomsdayClock.net",
    description: "Climate change has been a factor in the Doomsday Clock since 2007. Learn how global warming, AI, and emerging threats influence the clock's position alongside nuclear risks.",
    content: `<h1>How Climate Change Affects the Doomsday Clock</h1>
      <p>Climate change has been an explicit factor in the Doomsday Clock since 2007, when the Bulletin of the Atomic Scientists added it to its list of existential threats alongside nuclear weapons.</p>
      <h2>Climate as a Clock Factor</h2>
      <p>Each year, the Science and Security Board weighs climate acceleration, emissions trajectories, and policy responses when deciding whether to move the clock.</p>`,
  },
  {
    path: "/blog/doomsday-clock-cold-war",
    title: "The Doomsday Clock During the Cold War & Cuban Missile Crisis | DoomsdayClock.net",
    description: "How did the Doomsday Clock move during the Cold War? From hydrogen bomb tests to the Cuban Missile Crisis to the fall of the Berlin Wall — the complete Cold War clock history.",
    content: `<h1>The Doomsday Clock During the Cold War</h1>
      <p>The Doomsday Clock was created in 1947 at the dawn of the Cold War. From hydrogen bomb tests to the Cuban Missile Crisis to the fall of the Berlin Wall, the clock tracked humanity's closest brushes with nuclear catastrophe.</p>
      <h2>Key Cold War Settings</h2>
      <p>The closest setting until 2020 was 2 minutes in 1953 (hydrogen bomb tests). The farthest was 17 minutes in 1991 (Cold War ends).</p>`,
  },
  {
    path: "/blog/where-is-doomsday-clock-located",
    title: "Where Is the Doomsday Clock Located? The Physical Clock Explained | DoomsdayClock.net",
    description: "Where is the Doomsday Clock physically located? Learn about the Bulletin of the Atomic Scientists headquarters in Chicago, where the clock is kept, and how to visit.",
    content: `<h1>Where Is the Doomsday Clock Located?</h1>
      <p>The Doomsday Clock is maintained by the Bulletin of the Atomic Scientists, headquartered at the University of Chicago. The physical clock face is housed at the Bulletin's offices in Chicago, Illinois.</p>
      <h2>Visiting the Bulletin</h2>
      <p>While the clock itself is not on public display, the Bulletin's offices and the University of Chicago campus are accessible to visitors interested in the history of atomic science.</p>`,
  },
  {
    path: "/blog/how-long-is-89-seconds-doomsday-clock",
    title: "How Long Is 89 Seconds on the Doomsday Clock in Real Time? | DoomsdayClock.net",
    description: "How long is 89 seconds on the Doomsday Clock in real time? The Doomsday Clock doesn't work like a real countdown. Learn what the seconds actually represent and why it's a metaphor, not a timer.",
    content: `<h1>How Long Is 89 Seconds on the Doomsday Clock?</h1>
      <p>The Doomsday Clock doesn't work like a real countdown. 89 seconds (or today's 85 seconds) is a symbolic measure of existential risk, not a literal duration until catastrophe.</p>
      <h2>The Clock as Metaphor</h2>
      <p>The closer to midnight, the greater the perceived threat. The clock has never reached midnight — and it isn't meant to predict a specific event.</p>`,
  },
  {
    path: "/blog/can-doomsday-clock-go-back",
    title: "Can the Doomsday Clock Go Back? A History of Reversals | DoomsdayClock.net",
    description: "Can the Doomsday Clock be reversed? Yes — it has moved backward 8 times. Explore every reversal, what caused them, and what it would take to turn the clock back today.",
    content: `<h1>Can the Doomsday Clock Go Back?</h1>
      <p>Yes — the Doomsday Clock has moved backward 8 times in its history. The most dramatic reversal was in 1991, when it moved from 10 minutes to 17 minutes as the Cold War ended.</p>
      <h2>What It Would Take Today</h2>
      <p>Reversing the clock from 85 seconds would require meaningful arms-control progress, climate policy breakthroughs, and de-escalation in active conflicts.</p>`,
  },
  {
    path: "/blog/how-is-doomsday-clock-calculated",
    title: "How Is the Doomsday Clock Calculated? The Science Behind the Setting | DoomsdayClock.net",
    description: "How is the Doomsday Clock time calculated? Explore the methodology, threat categories, and expert deliberation process behind the world's most famous risk assessment.",
    content: `<h1>How Is the Doomsday Clock Calculated?</h1>
      <p>The Doomsday Clock is set by the Science and Security Board of the Bulletin of the Atomic Scientists, in consultation with their Board of Sponsors (which includes Nobel Laureates).</p>
      <h2>The Methodology</h2>
      <p>The board evaluates four main threat categories — nuclear weapons, climate change, disruptive technologies (including AI), and biosecurity — then deliberates to reach a consensus setting each January.</p>`,
  },
  {
    path: "/blog/doomsday-clock-vs-atomic-clock",
    title: "Doomsday Clock vs Atomic Clock: What's the Difference? | DoomsdayClock.net",
    description: "Doomsday Clock vs atomic clock — they share a name but nothing else. Learn the difference between the symbolic threat clock and the world's most precise timekeeping device.",
    content: `<h1>Doomsday Clock vs Atomic Clock: What's the Difference?</h1>
      <p>The Doomsday Clock and the atomic clock share the word "atomic" but are completely different. The Doomsday Clock is a symbolic threat assessment; atomic clocks are physical devices that measure time using atomic oscillations.</p>
      <h2>The Key Distinction</h2>
      <p>Atomic clocks define the second with sub-nanosecond precision and underpin GPS. The Doomsday Clock has no physical mechanism — it's a metaphor maintained by scientists.</p>`,
  },
  {
    path: "/blog/how-to-read-doomsday-clock",
    title: "How to Read the Doomsday Clock: A Beginner's Guide | DoomsdayClock.net",
    description: "How to read and understand the Doomsday Clock. A beginner's guide to what the minutes and seconds mean, how to interpret changes, and what the current time tells us.",
    content: `<h1>How to Read the Doomsday Clock</h1>
      <p>Reading the Doomsday Clock is simple: the closer the hand is to midnight, the greater the perceived existential threat. Today's setting of 85 seconds is the closest it has ever been.</p>
      <h2>Interpreting Changes</h2>
      <p>Movement toward midnight indicates worsening conditions; movement away signals progress. The clock is updated annually in late January.</p>`,
  },
  {
    path: "/blog/is-doomsday-clock-real-or-fake",
    title: "Is the Doomsday Clock Real or Fake? Debunking the Critics | DoomsdayClock.net",
    description: "Is the Doomsday Clock real, fake, or fear mongering? We address every criticism head-on — from scientific legitimacy to media sensationalism — with facts.",
    content: `<h1>Is the Doomsday Clock Real or Fake?</h1>
      <p>The Doomsday Clock is a real, scientifically-deliberated assessment by the Bulletin of the Atomic Scientists. It is not a prediction or a physical countdown — it is a consensus expert judgment of existential risk.</p>
      <h2>Addressing the Critics</h2>
      <p>Critics call it sensationalism; supporters call it the most successful science-communication symbol of the 20th century. Both views agree it influences global policy discussion.</p>`,
  },
  {
    path: "/blog/who-created-doomsday-clock",
    title: "Who Created the Doomsday Clock? The Founders Behind the Symbol | DoomsdayClock.net",
    description: "Who founded and created the Doomsday Clock? The story of the Manhattan Project scientists, the Bulletin of the Atomic Scientists, and artist Martyl Langsdorf.",
    content: `<h1>Who Created the Doomsday Clock?</h1>
      <p>The Doomsday Clock was created in 1947 by artist Martyl Langsdorf for the cover of the Bulletin of the Atomic Scientists, a magazine founded by Manhattan Project scientists who feared the consequences of nuclear weapons.</p>
      <h2>The Founders</h2>
      <p>Eugene Rabinowitch and Hyman Goldsmith, both Manhattan Project veterans, founded the Bulletin in 1945. Martyl Langsdorf set the original clock at 7 minutes to midnight.</p>`,
  },
  {
    path: "/blog/why-is-doomsday-clock-important",
    title: "Why Is the Doomsday Clock Important? Why You Should Care | DoomsdayClock.net",
    description: "Why does the Doomsday Clock matter? From influencing nuclear policy to raising climate awareness, discover why this 79-year-old symbol remains critically important today.",
    content: `<h1>Why Is the Doomsday Clock Important?</h1>
      <p>The Doomsday Clock matters because it translates complex, abstract existential risks into a single intuitive symbol — one that policymakers, journalists, and the public can immediately understand.</p>
      <h2>Influence on Policy</h2>
      <p>The clock has shaped nuclear arms-control discourse for nearly 80 years and is cited in major media every time it moves.</p>`,
  },
  {
    path: "/blog/doomsday-clock-through-decades",
    title: "Doomsday Clock Through the Decades: 2000 vs 2020 vs 2026 | DoomsdayClock.net",
    description: "Compare the Doomsday Clock across three pivotal eras: 2000, 2020, and 2026. See how global threats evolved from Cold War aftermath to the age of AI and climate crisis.",
    content: `<h1>Doomsday Clock Through the Decades</h1>
      <p>From 9 minutes in 2000, to 100 seconds in 2020, to 85 seconds in 2026 — the Doomsday Clock has tracked humanity's evolving relationship with existential risk across three very different eras.</p>
      <h2>2000 vs 2020 vs 2026</h2>
      <p>In 2000, the dominant concerns were nuclear proliferation and US-Russia relations. By 2020, climate and cyber threats had become central. By 2026, AI joins the threat matrix.</p>`,
  },
  {
    path: "/blog/doomsday-clock-watchmen-comic",
    title: "Doomsday Clock & Watchmen: The Comic Series vs the Real Clock | DoomsdayClock.net",
    description: "Is Doomsday Clock a sequel to Watchmen? Is it canon? Everything about the DC Comics series versus the real nuclear threat clock by the Bulletin of Atomic Scientists.",
    content: `<h1>Doomsday Clock & Watchmen</h1>
      <p>"Doomsday Clock" is a 12-issue DC Comics series (2017–2019) by Geoff Johns and Gary Frank, a direct sequel to Alan Moore's Watchmen. It is named after — but distinct from — the real Doomsday Clock maintained by the Bulletin of the Atomic Scientists.</p>
      <h2>Real vs Fictional</h2>
      <p>The real clock is a scientific risk assessment. The comic is fiction inspired by the symbol. Both draw on the same nuclear-era anxiety.</p>`,
  },
  {
    path: "/store",
    title: "DoomsdayClock.net Store — Survival Guides, Apparel & Preparedness Gear",
    description: "Official DoomsdayClock.net store. Digital survival guides, family emergency plans, apparel, and curated preparedness gear for the 85-seconds-to-midnight era.",
    ogType: "website",
    content: `<h1>DoomsdayClock.net Store</h1>
      <p>Digital survival guides, family emergency plans, apparel, and curated preparedness gear. Every product chosen for the 85-seconds-to-midnight era.</p>
      <p><a href="/store/nuclear-survival-guide">Nuclear Survival Guide</a> | <a href="/store/family-emergency-plan">Family Emergency Plan</a> | <a href="/store/food-planning-guide">90-Day Food Planning Guide</a></p>`,
  },
  {
    path: "/terms",
    title: "Terms of Service | DoomsdayClock.net",
    description: "Terms of Service for DoomsdayClock.net. By using the site, you agree to these terms governing access, acceptable use, intellectual property, and liability.",
    ogType: "website",
    content: `<h1>Terms of Service</h1>
      <p>By accessing and using DoomsdayClock.net, you agree to be bound by these Terms of Service. The full text governs acceptable use, intellectual property, disclaimers, and limitations of liability.</p>`,
  },
  {
    path: "/privacy",
    title: "Privacy Policy | DoomsdayClock.net",
    description: "Privacy Policy for DoomsdayClock.net. Learn how we collect, use, and safeguard your information, including analytics, newsletter signups, and cookies.",
    ogType: "website",
    content: `<h1>Privacy Policy</h1>
      <p>DoomsdayClock.net is committed to protecting your privacy. This policy explains what information we collect (analytics, newsletter signups, cookies), how we use it, and your rights.</p>`,
  },
  {
    path: "/advertise",
    title: "Advertise on DoomsdayClock.net | Media Kit & Sponsorship",
    description: "Reach an engaged audience interested in geopolitics, science, and preparedness. Sponsorship options from $200/month. View our media kit.",
    ogType: "website",
    content: `<h1>Advertise on DoomsdayClock.net</h1>
      <p>Reach a highly engaged audience interested in geopolitics, science, current events, and emergency preparedness. Sponsorship options starting at $200.</p>`,
  },
  {
    path: "/forum",
    title: "Forum | Doomsday Clock Community Discussion",
    description: "Join the Doomsday Clock community. Share your ideas on how to push the clock back and discuss global existential risks.",
    ogType: "website",
    content: `<h1>Doomsday Clock Community Forum</h1>
      <p>Share ideas on how to push the Doomsday Clock back from midnight. Discuss nuclear risk, climate change, and global existential threats with the community.</p>
      <p><a href="/blog/doomsday-clock-2026">Current Doomsday Clock status (85 seconds)</a> | <a href="/">Back to homepage</a></p>`,
  },
  {
    path: "/store/nuclear-survival-guide",
    title: "Nuclear Emergency Survival Guide — 12-Chapter Digital Guide | DoomsdayClock.net",
    description: "The complete 80-page guide to surviving a nuclear emergency. Covers shelter-in-place, evacuation, radiation exposure, decontamination, and long-term recovery. $9.99 instant download.",
    ogType: "product",
    content: `<h1>Nuclear Emergency Survival Guide</h1>
      <p>The complete 80-page guide to surviving a nuclear emergency. 12 chapters covering shelter-in-place protocols, evacuation decisions, radiation basics, decontamination, potassium iodide dosing, emergency water and food, first aid, and long-term recovery. Based on FEMA, CDC, and NRC guidelines.</p>
      <p><a href="https://doomsdayclock.gumroad.com/l/nuclear-survival-guide">Buy Now — $9.99</a></p>`,
  },
  {
    path: "/store/family-emergency-plan",
    title: "Family Emergency Plan Template — Printable Worksheets | DoomsdayClock.net",
    description: "Editable family emergency action plan with contact sheets, meeting points, go-bag checklists, medical info, and scenario-specific protocols. $4.99 instant download.",
    ogType: "product",
    content: `<h1>Family Emergency Plan Template</h1>
      <p>Editable emergency action plan template for your family. Includes emergency contacts, communication tree, 3 meeting points, evacuation routes, 72-hour go-bag checklist, medical information worksheets, important documents checklist, and 5 scenario-specific action plans.</p>
      <p><a href="https://doomsdayclock.gumroad.com/l/family-emergency-plan">Buy Now — $4.99</a></p>`,
  },
  {
    path: "/store/food-planning-guide",
    title: "90-Day Emergency Food Planning Guide — Meal Plans & Shopping Lists | DoomsdayClock.net",
    description: "Complete 90-day emergency food storage guide. Calorie calculations, shopping lists, storage methods, 30-day meal plan with recipes, and budget planning. $7.99 instant download.",
    ogType: "product",
    content: `<h1>90-Day Emergency Food Planning Guide</h1>
      <p>Complete meal planning guide for 90 days of emergency food storage. Includes calorie calculations by household size, the 3-tier pantry foundation, 12-week shopping lists, storage methods and shelf life guide, 30-day meal plan with 10 recipes, rotation tracking, and budget optimization.</p>
      <p><a href="https://doomsdayclock.gumroad.com/l/food-planning-guide">Buy Now — $7.99</a></p>`,
  },
];

const vaultPages = [
  {
    path: "/vault",
    title: "The Vault: Offline Knowledge System — Complete Survival Operating System | DoomsdayClock.net",
    description: "The Vault is a $99 digital survival product with 15 modules, 5 interactive tools, 3 crisis walkthroughs, and a printable emergency binder. Your tactical OS for grid-down scenarios.",
    ogType: "product",
    content: `<h1>The Vault: Offline Knowledge System</h1>
      <p>Total Information Redundancy for Grid-Down Scenarios. 15 comprehensive modules, 5 interactive tools, 3 full crisis scenario walkthroughs, and a printable emergency binder system. Your tactical operating system for when the grid goes down.</p>
      <h2>What's Included</h2>
      <ul>
        <li>Module 0: The 15-Minute Family Briefing</li>
        <li>Module 1: The First 72 Hours</li>
        <li>Module 2: Water Procurement & Purification</li>
        <li>Module 3: Field Medicine & Trauma</li>
        <li>Module 4: Communication When the Grid Is Down</li>
        <li>Module 5: Food Security — 90-Day Runway</li>
        <li>Module 6: Power Generation & Energy Management</li>
        <li>Module 7: Shelter — Hardening, Heating & Cooling</li>
        <li>Module 8: Navigation Without GPS</li>
        <li>Module 9: Community Defense & Organization</li>
        <li>Module 10: The Barter Economy</li>
        <li>Module 11: Psychological Resilience</li>
        <li>Module 12: Children, Elderly & Special Needs</li>
        <li>Module 13: Digital Fortress — OpSec</li>
        <li>Module 14: Full Crisis Walkthroughs</li>
        <li>Module 15: Printable Emergency Binder</li>
      </ul>
      <h2>Interactive Tools</h2>
      <ul>
        <li><a href="/vault/supply-calculator">Supply Runway Calculator</a></li>
        <li><a href="/vault/water-purification">Water Purification Decision Matrix</a></li>
        <li><a href="/vault/frequency-reference">Communication Frequency Reference</a></li>
        <li><a href="/vault/emergency-binder">Emergency Binder Generator</a></li>
        <li><a href="/vault/threat-assessment">Threat Assessment Scorecard</a></li>
      </ul>`,
  },
  {
    path: "/vault/supply-calculator",
    title: "Supply Runway Calculator — How Many Days Can You Survive? | DoomsdayClock.net",
    description: "Free interactive survival supply calculator. Enter your household size and food inventory to calculate exactly how many days you can sustain your family in an emergency.",
    content: `<h1>Supply Runway Calculator</h1>
      <p>Calculate exactly how many days your family can survive on your current food supply. Enter your household members and food inventory to get your survival runway.</p>
      <p><a href="/vault">Back to The Vault</a></p>`,
  },
  {
    path: "/vault/water-purification",
    title: "Water Purification Decision Tree — Find Your Best Method | DoomsdayClock.net",
    description: "Interactive water purification guide. Select your water source and available tools to get step-by-step purification instructions for safe drinking water in any emergency.",
    content: `<h1>Water Purification Decision Tree</h1>
      <p>Find the best water purification method for your situation. Answer questions about your water source and available tools to get exact step-by-step instructions.</p>
      <p><a href="/vault">Back to The Vault</a></p>`,
  },
  {
    path: "/vault/frequency-reference",
    title: "Emergency Communication Frequency Reference Card | DoomsdayClock.net",
    description: "Complete emergency radio frequency reference. NOAA weather frequencies, FRS/GMRS channels, ham radio quick start, international distress frequencies, and the 5-5-5 communication protocol.",
    content: `<h1>Communication Frequency Reference</h1>
      <p>Complete emergency communication reference card with NOAA frequencies, FRS/GMRS channels, ham radio basics, and the 5-5-5 family communication protocol.</p>
      <p><a href="/vault">Back to The Vault</a></p>`,
  },
  {
    path: "/vault/emergency-binder",
    title: "Emergency Binder Generator — Build Your Family's Emergency Plan | DoomsdayClock.net",
    description: "Free interactive emergency binder generator. Enter your family information, rally points, medical data, and emergency contacts to create a printable family emergency binder.",
    content: `<h1>Emergency Binder Generator</h1>
      <p>Build your family's emergency binder with rally points, medical information, emergency contacts, and more. Print it, laminate it, keep it in your go-bag.</p>
      <p><a href="/vault">Back to The Vault</a></p>`,
  },
  {
    path: "/vault/threat-assessment",
    title: "Personal Threat Assessment Scorecard — How Prepared Are You? | DoomsdayClock.net",
    description: "Take the free threat assessment quiz. Score your preparedness across 8 categories — water, food, medical, communication, power, shelter, navigation, and community — and get a personalized action plan.",
    content: `<h1>Personal Threat Assessment Scorecard</h1>
      <p>How prepared are you? Score yourself across 8 critical survival categories and get a personalized action plan based on your weakest areas.</p>
      <p><a href="/vault">Back to The Vault</a></p>`,
  },
];

const allPages = [
  // Homepage is already well-covered by index.html noscript fallback — skip it
  ...yearPages,
  ...blogPages,
  ...vaultPages,
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

  // Inject (or replace) article:modified_time so freshness signal updates with each daily build.
  // Stamping this in the prerendered HTML is what Googlebot reads first — must be present
  // in the static markup, not just injected client-side via React.
  const modifiedMeta = `<meta property="article:modified_time" content="${MODIFIED_ISO}" />`;
  if (/<meta property="article:modified_time"/.test(html)) {
    html = html.replace(
      /<meta property="article:modified_time" content="[^"]*"\s*\/?>/,
      modifiedMeta
    );
  } else {
    html = html.replace("</head>", `  ${modifiedMeta}\n</head>`);
  }

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
