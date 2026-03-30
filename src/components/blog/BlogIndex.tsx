import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Calendar, Clock } from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "analysis" | "update" | "explainer" | "gear";
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    slug: "what-is-the-doomsday-clock",
    title:
      "What Is the Doomsday Clock? Definition, Meaning & How It Works",
    excerpt:
      "Everything you need to know about the Doomsday Clock — what it is, how it works, who sets it, and why it matters. The definitive guide to the world's most recognized symbol of existential risk.",
    date: "March 14, 2026",
    readTime: "12 min read",
    category: "explainer",
    featured: true,
  },
  {
    slug: "doomsday-clock-current-time-today",
    title:
      "Doomsday Clock Current Time Today (2026): Live Status & Update",
    excerpt:
      "The Doomsday Clock is currently at 85 seconds to midnight — the closest it has ever been. See the latest status, what changed in 2026, and when the next update is expected.",
    date: "March 14, 2026",
    readTime: "6 min read",
    category: "update",
    featured: true,
  },
  {
    slug: "doomsday-clock-history-timeline",
    title:
      "Doomsday Clock History: Every Change from 1947 to 2026",
    excerpt:
      "The complete timeline of all 28 Doomsday Clock changes. From its creation at 7 minutes in 1947 to the current record of 85 seconds to midnight.",
    date: "March 7, 2026",
    readTime: "12 min read",
    category: "explainer",
    featured: true,
  },
  {
    slug: "doomsday-clock-2026",
    title:
      "Doomsday Clock 2026: What Changed and Why",
    excerpt:
      "The Bulletin moved the clock from 89 to 85 seconds in February 2026. A deep dive on what drove the change and what 85 seconds means in context.",
    date: "March 7, 2026",
    readTime: "8 min read",
    category: "update",
  },
  {
    slug: "doomsday-clock-2027-prediction",
    title:
      "Doomsday Clock 2027 Prediction: What Could Move the Clock?",
    excerpt:
      "Scenario analysis of what could push the Doomsday Clock forward or backward in 2027. Covering nuclear risks, climate, AI, and geopolitical factors.",
    date: "March 7, 2026",
    readTime: "10 min read",
    category: "analysis",
  },
  {
    slug: "doomsday-clock-comic-vs-real",
    title:
      "Doomsday Clock vs. Pop Culture: The Comic, The Symbol, The Movement",
    excerpt:
      "The real Doomsday Clock vs. the DC Comics series \u2014 what\u2019s the difference? How Watchmen borrowed nuclear anxiety, and why the real clock matters more.",
    date: "March 7, 2026",
    readTime: "6 min read",
    category: "explainer",
  },
  {
    slug: "what-does-89-seconds-to-midnight-mean",
    title:
      "What Does 89 Seconds to Midnight Actually Mean?",
    excerpt:
      "The significance of the Doomsday Clock's 2025 setting explained. What 89 seconds means, how it compares to 90 seconds, and what the current 85-second record means for humanity.",
    date: "March 7, 2026",
    readTime: "8 min read",
    category: "explainer",
  },
  {
    slug: "will-the-world-end-doomsday-clock",
    title:
      "Will the World End? What the Doomsday Clock Actually Predicts",
    excerpt:
      "No, the world is not ending in 2026. What the Doomsday Clock actually predicts, the difference between the climate clock and the Doomsday Clock, and what science says about humanity's future.",
    date: "March 7, 2026",
    readTime: "9 min read",
    category: "explainer",
  },
  {
    slug: "what-happens-doomsday-clock-midnight",
    title:
      "What Happens When the Doomsday Clock Reaches Midnight?",
    excerpt:
      "Midnight represents global catastrophe. But the clock has never reached it. What midnight symbolizes, the near-misses that almost brought it, and why it's a warning, not a prediction.",
    date: "March 7, 2026",
    readTime: "7 min read",
    category: "explainer",
  },
  {
    slug: "who-controls-doomsday-clock",
    title:
      "Who Controls the Doomsday Clock? Inside the Bulletin of the Atomic Scientists",
    excerpt:
      "The Science and Security Board of the Bulletin of the Atomic Scientists sets the clock. Meet the Nobel Laureates and experts who decide how close we are to midnight.",
    date: "March 7, 2026",
    readTime: "6 min read",
    category: "explainer",
  },
  {
    slug: "us-iran-crisis-doomsday-clock",
    title:
      "Operation Epic Fury: How US-Iran Strikes Could Push the Doomsday Clock to the Brink",
    excerpt:
      "The US and Israel have launched coordinated military strikes against Iran. We analyze how this major escalation could affect the Doomsday Clock\u2019s position.",
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "analysis",
    featured: true,
  },
  {
    slug: "best-doomsday-clock-watches",
    title: "Best Doomsday Clock Watches & Atomic-Age Timepieces",
    excerpt:
      "From nuclear-inspired collector's pieces to military-grade survival watches, these timepieces blend style with preparedness for when every second counts.",
    date: "March 7, 2026",
    readTime: "7 min read",
    category: "gear",
  },
  {
    slug: "emergency-food-supply-guide",
    title: "Best Emergency Food Supplies for Long-Term Storage",
    excerpt:
      "Expert guide to the best emergency food supplies for long-term storage. Freeze-dried meals, survival food kits, and storage tips for 25+ year shelf life.",
    date: "March 7, 2026",
    readTime: "9 min read",
    category: "gear",
  },
  {
    slug: "essential-survival-gear-2026",
    title: "Essential Survival Gear for 2026: A Preparedness Guide",
    excerpt:
      "Complete guide to essential survival gear — bug-out bags, water filtration, communication devices, and first aid kits for any crisis scenario.",
    date: "March 7, 2026",
    readTime: "10 min read",
    category: "gear",
  },
  {
    slug: "best-home-backup-power-systems",
    title: "Best Home Backup Power Systems for Extended Outages",
    excerpt:
      "Solar generators, battery stations, and whole-home systems compared. Keep the lights on when the grid goes down.",
    date: "March 7, 2026",
    readTime: "8 min read",
    category: "gear",
  },
  {
    slug: "doomsday-clock-timeline-graph",
    title:
      "Doomsday Clock Timeline Graph: Every Change from 1947 to 2026",
    excerpt:
      "Interactive visual graph of every Doomsday Clock change across nearly 80 years. See how the clock has moved through 28 adjustments from 7 minutes to 85 seconds.",
    date: "March 14, 2026",
    readTime: "8 min read",
    category: "explainer",
  },
  {
    slug: "doomsday-clock-2025",
    title:
      "Doomsday Clock 2025: The 89-Second Update Explained",
    excerpt:
      "The Doomsday Clock moved to 89 seconds to midnight in January 2025 — the closest it had ever been. Full analysis of why it moved and what 89 seconds means.",
    date: "March 14, 2026",
    readTime: "8 min read",
    category: "update",
  },
  {
    slug: "doomsday-clock-climate-change",
    title:
      "How Climate Change Affects the Doomsday Clock",
    excerpt:
      "Climate change has been a factor in the Doomsday Clock since 2007. Learn how global warming, AI, and emerging threats influence the clock alongside nuclear risks.",
    date: "March 14, 2026",
    readTime: "9 min read",
    category: "explainer",
  },
  {
    slug: "doomsday-clock-cold-war",
    title:
      "The Doomsday Clock During the Cold War & Cuban Missile Crisis",
    excerpt:
      "How did the Doomsday Clock move during the Cold War? From hydrogen bomb tests to the Cuban Missile Crisis to the fall of the Berlin Wall — the complete Cold War clock history.",
    date: "March 14, 2026",
    readTime: "10 min read",
    category: "explainer",
  },
  {
    slug: "where-is-doomsday-clock-located",
    title:
      "Where Is the Doomsday Clock? Location, NYC, & How to See It",
    excerpt:
      "Where is the Doomsday Clock located? The Bulletin's Chicago headquarters, the NYC Metronome confusion, Union Square, and how to see the real clock.",
    date: "March 14, 2026",
    readTime: "6 min read",
    category: "explainer",
  },
  {
    slug: "how-long-is-89-seconds-doomsday-clock",
    title:
      "How Long Is 89 Seconds on the Doomsday Clock in Real Time?",
    excerpt:
      "The Doomsday Clock doesn't work like a real countdown. Learn what the seconds actually represent, why there's no real-time equivalent, and the common misconception explained.",
    date: "March 14, 2026",
    readTime: "6 min read",
    category: "explainer",
  },
  {
    slug: "can-doomsday-clock-go-back",
    title:
      "Can the Doomsday Clock Go Backwards? History of Every Reversal",
    excerpt:
      "Yes — the Doomsday Clock has moved backward 8 times. From the end of the Cold War to nuclear treaties, see every time the clock moved away from midnight.",
    date: "March 14, 2026",
    readTime: "8 min read",
    category: "explainer",
  },
  {
    slug: "how-is-doomsday-clock-calculated",
    title:
      "How Is the Doomsday Clock Calculated? The Science Behind the Setting",
    excerpt:
      "The Doomsday Clock isn't set by a formula — it's a consensus expert judgment. Explore the methodology, threat categories, and deliberation process behind the world's most famous risk assessment.",
    date: "March 14, 2026",
    readTime: "9 min read",
    category: "explainer",
  },
  {
    slug: "doomsday-clock-vs-atomic-clock",
    title:
      "Doomsday Clock vs Atomic Clock: What's the Difference?",
    excerpt:
      "They share a name but nothing else. Learn the difference between the symbolic threat clock and the world's most precise timekeeping device.",
    date: "March 14, 2026",
    readTime: "7 min read",
    category: "explainer",
  },
  {
    slug: "how-to-read-doomsday-clock",
    title:
      "How to Read the Doomsday Clock: A Beginner's Guide",
    excerpt:
      "What do the minutes and seconds mean? How to interpret changes? A beginner's guide to understanding the world's most recognized symbol of existential risk.",
    date: "March 14, 2026",
    readTime: "6 min read",
    category: "explainer",
  },
  {
    slug: "is-doomsday-clock-real-or-fake",
    title:
      "Is the Doomsday Clock Real or Fake? Debunking the Critics",
    excerpt:
      "Is the Doomsday Clock real, fake, or fear mongering? We address every criticism head-on — from scientific legitimacy to media sensationalism — with facts.",
    date: "March 14, 2026",
    readTime: "8 min read",
    category: "explainer",
  },
  {
    slug: "who-created-doomsday-clock",
    title:
      "Who Created the Doomsday Clock? The Founders Behind the Symbol",
    excerpt:
      "The story of the Manhattan Project scientists, the Bulletin of the Atomic Scientists, and artist Martyl Langsdorf — the people who created the world's most famous warning symbol.",
    date: "March 14, 2026",
    readTime: "8 min read",
    category: "explainer",
  },
  {
    slug: "why-is-doomsday-clock-important",
    title:
      "Why Is the Doomsday Clock Important? Why You Should Care",
    excerpt:
      "From influencing nuclear policy to raising climate awareness, discover why this 79-year-old symbol remains critically important — and what you can do about it.",
    date: "March 14, 2026",
    readTime: "7 min read",
    category: "explainer",
  },
  {
    slug: "doomsday-clock-through-decades",
    title:
      "Doomsday Clock Through the Decades: 2000 vs 2020 vs 2026",
    excerpt:
      "Compare the Doomsday Clock across three pivotal eras. See how global threats evolved from Cold War aftermath to the age of AI and climate crisis.",
    date: "March 14, 2026",
    readTime: "9 min read",
    category: "explainer",
  },
  {
    slug: "doomsday-clock-watchmen-comic",
    title:
      "Doomsday Clock & Watchmen: The Comic Series vs the Real Clock",
    excerpt:
      "Is Doomsday Clock a sequel to Watchmen? Is it canon? Is it worth reading? Everything about the DC Comics series versus the real nuclear threat clock.",
    date: "March 14, 2026",
    readTime: "8 min read",
    category: "explainer",
  },
  {
    slug: "doomsday-clock-and-artificial-intelligence",
    title:
      "How AI & Artificial Intelligence Threaten the Doomsday Clock",
    excerpt:
      "AI is now a factor in the Doomsday Clock. From autonomous weapons to deepfakes to nuclear command systems — how artificial intelligence is pushing the clock closer to midnight.",
    date: "March 15, 2026",
    readTime: "9 min read",
    category: "explainer",
  },
  {
    slug: "doomsday-clock-vs-other-threat-indices",
    title:
      "Doomsday Clock vs Other Global Threat Indices: How Do They Compare?",
    excerpt:
      "How does the Doomsday Clock compare to the Climate Clock, Global Peace Index, and Nuclear Threat Initiative? A comprehensive comparison of the world's threat assessments.",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "explainer",
  },
  {
    slug: "how-many-nuclear-weapons-exist-2026",
    title:
      "How Many Nuclear Weapons Exist in 2026? Country-by-Country Breakdown",
    excerpt:
      "There are approximately 12,100 nuclear warheads worldwide. See the complete country-by-country breakdown and how stockpiles affect the Doomsday Clock.",
    date: "March 15, 2026",
    readTime: "10 min read",
    category: "explainer",
  },
  {
    slug: "what-would-happen-in-a-nuclear-war",
    title:
      "What Would Happen in a Nuclear War? Science-Based Effects & Aftermath",
    excerpt:
      "What would actually happen if nuclear war broke out? From the initial blast to nuclear winter — the science-based effects on cities, climate, food supply, and civilization.",
    date: "March 15, 2026",
    readTime: "11 min read",
    category: "explainer",
  },
  {
    slug: "seven-minutes-to-midnight-doomsday-clock",
    title:
      "What Is 7 Minutes to Midnight on the Doomsday Clock?",
    excerpt:
      "Seven minutes to midnight was the Doomsday Clock's original 1947 setting. Learn what 7 minutes meant, how it compares to today's 85 seconds, and the history behind the original time.",
    date: "March 15, 2026",
    readTime: "7 min read",
    category: "explainer",
  },
  {
    slug: "doomsday-clock-news-updates",
    title:
      "Doomsday Clock News & Latest Updates (March 2026)",
    excerpt:
      "The latest Doomsday Clock news and updates. The clock moved to 85 seconds to midnight in 2026 — the closest ever. Get the latest developments affecting the clock.",
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "update",
    featured: true,
  },
  {
    slug: "doomsday-clock-faq",
    title:
      "Doomsday Clock FAQ: 30 Most Common Questions Answered",
    excerpt:
      "Every question about the Doomsday Clock answered. What is it? What time is it? Who controls it? Can it go back? What happens at midnight? 30 expert answers in one place.",
    date: "March 15, 2026",
    readTime: "15 min read",
    category: "explainer",
    featured: true,
  },
  {
    slug: "when-will-doomsday-clock-hit-midnight",
    title:
      "When Will the Doomsday Clock Hit Midnight? Predictions & Analysis",
    excerpt:
      "Will the Doomsday Clock ever reach midnight? Analysis of the clock's trajectory, what midnight represents, and whether the clock could actually hit zero.",
    date: "March 15, 2026",
    readTime: "8 min read",
    category: "analysis",
  },
  {
    slug: "best-underground-bunker-kits",
    title:
      "Best Underground Bunker Kits & Survival Shelters (2026)",
    excerpt:
      "From DIY bunker building supplies to pre-fabricated underground shelters, the complete guide to bunker kits, NBC air filtration, and survival shelter options.",
    date: "March 23, 2026",
    readTime: "10 min read",
    category: "gear",
  },
  {
    slug: "best-radiation-detectors-geiger-counters",
    title:
      "Best Radiation Detectors & Geiger Counters for 2026",
    excerpt:
      "Expert-reviewed guide to the best radiation detectors and Geiger counters. From personal dosimeters to professional-grade monitors for nuclear emergency preparedness.",
    date: "March 23, 2026",
    readTime: "9 min read",
    category: "gear",
  },
  {
    slug: "best-emergency-radios",
    title:
      "Best Emergency Radios & Hand-Crank Weather Radios (2026)",
    excerpt:
      "The best hand-crank, solar, and battery emergency radios with NOAA weather alerts. Stay connected when the grid goes down.",
    date: "March 23, 2026",
    readTime: "8 min read",
    category: "gear",
  },
  {
    slug: "best-doomsday-clock-books-nuclear-threats",
    title:
      "Best Books About Nuclear Threats, Doomsday & Existential Risk",
    excerpt:
      "Essential reading on nuclear weapons, existential risk, and the Doomsday Clock. From Daniel Ellsberg's The Doomsday Machine to Annie Jacobsen's Nuclear War.",
    date: "March 23, 2026",
    readTime: "9 min read",
    category: "gear",
  },
  {
    slug: "best-water-purification-systems-emergency",
    title:
      "Best Water Purification Systems for Emergency Preparedness (2026)",
    excerpt:
      "Water is the #1 survival priority. Expert guide to the best portable filters, home purification systems, and emergency water storage solutions.",
    date: "March 23, 2026",
    readTime: "9 min read",
    category: "gear",
  },
];

export function BlogIndex() {
  useEffect(() => {
    updateMetaTags({
      title: "Blog | Doomsday Clock Analysis & Updates | DoomsdayClock.net",
      description: "Analysis, updates, and deep dives on the events that shape humanity's existential risk landscape.",
      path: "/blog",
      type: "website",
    });
    return () => resetToDefaults();
  }, []);

  return (
    <div className="py-12 sm:py-16">
      <div className="container-wide">
        {/* Header */}
        <div className="mb-8 sm:mb-12 animate-fade-in">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Link
              to="/"
              className="hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Blog</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-doom">Doomsday Clock</span> Blog
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl">
            Analysis, updates, and deep dives on the events that shape
            humanity's existential risk landscape.
          </p>
        </div>

        {/* Featured post */}
        {posts
          .filter((p) => p.featured)
          .map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block doom-accent-card p-6 sm:p-8 mb-8 group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-doom opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-doom"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-doom">
                  Featured
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-doom transition-colors mb-3">
                {post.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
                <span className="ml-auto flex items-center gap-1 text-doom font-medium group-hover:gap-2 transition-all">
                  Read more{" "}
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}

        {/* All posts grid */}
        <h2 className="text-lg font-semibold text-foreground mb-4">
          All Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="glass-card p-6 group"
            >
              <span className="text-xs uppercase tracking-wider text-doom font-medium mb-2 block">
                {post.category}
              </span>
              <h3 className="text-lg font-bold text-foreground group-hover:text-doom transition-colors mb-2 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Doomsday Clock
          </Link>
        </div>
      </div>
    </div>
  );
}
