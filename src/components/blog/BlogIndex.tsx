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
