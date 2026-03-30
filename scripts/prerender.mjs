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
    title: "Doomsday Clock 2026 Update: Current Time Is 85 Seconds to Midnight (Closest Ever)",
    description: "The Doomsday Clock 2026 setting is 85 seconds to midnight — the closest ever. Updated February 4, 2026. Why the Bulletin moved the clock from 89 to 85 seconds, what it means, and the current status of nuclear and climate threats.",
    content: `<h1>Doomsday Clock 2026 Update: Current Time Is 85 Seconds to Midnight</h1>
      <p>On February 4, 2026, the Bulletin of the Atomic Scientists moved the Doomsday Clock from 89 to <strong>85 seconds to midnight</strong> — a new record for the closest the clock has ever been to global catastrophe. This 4-second advance is the largest single move in the seconds era.</p>
      <h2>Why Did the Doomsday Clock Move in 2026?</h2>
      <p>The decision was driven by increased nuclear risks, the ongoing Middle East conflict including the US-Iran crisis, climate change acceleration, and emerging AI-related threats to global stability.</p>
      <p><a href="/">Current Doomsday Clock time</a> | <a href="/blog/doomsday-clock-history-timeline">Complete timeline of all changes</a> | <a href="/blog/doomsday-clock-timeline-graph">Visual graph of the clock over time</a></p>`,
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
    title: "US-Iran Crisis 2026: How Operation Epic Fury Could Push the Doomsday Clock Past 85 Seconds",
    description: "US-Israel strikes on Iran threaten to push the Doomsday Clock even closer to midnight. At 85 seconds — already the closest ever — here's what the Iran conflict means for nuclear risk in 2026.",
    content: `<h1>US-Iran Crisis 2026: How Operation Epic Fury Could Push the Doomsday Clock Past 85 Seconds</h1>
      <p>Operation Epic Fury — the US-Israel military strikes on Iran — represents one of the most significant escalations in Middle East tensions in decades. With the Doomsday Clock already at 85 seconds to midnight, could this crisis push it even closer?</p>
      <h2>Impact on the Doomsday Clock in 2026</h2>
      <p>A widening conflict in the Middle East involving nuclear-armed or nuclear-threshold states could push the clock past 85 seconds — potentially the largest single advance in its history.</p>
      <p><a href="/blog/doomsday-clock-2026">Doomsday Clock 2026: Current time and full analysis</a> | <a href="/blog/doomsday-clock-history-timeline">Complete timeline of all changes</a></p>`,
  },
  {
    path: "/blog/doomsday-clock-history-timeline",
    title: "Doomsday Clock Timeline: All 28 Changes from 1947 to 2026 (Complete History)",
    description: "The complete Doomsday Clock timeline with all 28 settings — from 7 minutes (1947) to 85 seconds (2026). See every change, why it moved, and how close we've come to midnight over the years.",
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
    path: "/advertise",
    title: "Advertise on DoomsdayClock.net | Media Kit & Sponsorship",
    description: "Reach an engaged audience interested in geopolitics, science, and preparedness. Sponsorship options from $200/month. View our media kit.",
    ogType: "website",
    content: `<h1>Advertise on DoomsdayClock.net</h1>
      <p>Reach a highly engaged audience interested in geopolitics, science, current events, and emergency preparedness. Sponsorship options starting at $200.</p>`,
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
