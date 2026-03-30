import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Article {
  slug: string;
  title: string;
  category: string;
}

// All published articles for cross-linking
const ALL_ARTICLES: Article[] = [
  { slug: "doomsday-clock-history-timeline", title: "Doomsday Clock History: Every Change from 1947 to 2026", category: "explainer" },
  { slug: "doomsday-clock-2026", title: "Doomsday Clock 2026: What Changed and Why", category: "update" },
  { slug: "doomsday-clock-2027-prediction", title: "Doomsday Clock 2027 Prediction: What Could Move the Clock?", category: "analysis" },
  { slug: "us-iran-crisis-doomsday-clock", title: "Operation Epic Fury: How US-Iran Strikes Could Push the Clock to the Brink", category: "analysis" },
  { slug: "doomsday-clock-comic-vs-real", title: "Doomsday Clock vs. Pop Culture: The Comic, The Symbol, The Movement", category: "explainer" },
  { slug: "what-happens-doomsday-clock-midnight", title: "What Happens When the Doomsday Clock Reaches Midnight?", category: "explainer" },
  { slug: "who-controls-doomsday-clock", title: "Who Controls the Doomsday Clock?", category: "explainer" },
  { slug: "what-does-89-seconds-to-midnight-mean", title: "What Does 89 Seconds to Midnight Actually Mean?", category: "explainer" },
  { slug: "will-the-world-end-doomsday-clock", title: "Will the World End? What the Doomsday Clock Actually Predicts", category: "explainer" },
  { slug: "where-is-doomsday-clock-located", title: "Where Is the Doomsday Clock Located? The Physical Clock Explained", category: "explainer" },
  { slug: "how-is-doomsday-clock-calculated", title: "How Is the Doomsday Clock Calculated? The Science Behind the Setting", category: "explainer" },
  { slug: "can-doomsday-clock-go-back", title: "Can the Doomsday Clock Go Back? A History of Reversals", category: "explainer" },
  { slug: "doomsday-clock-vs-atomic-clock", title: "Doomsday Clock vs Atomic Clock: What's the Difference?", category: "explainer" },
  { slug: "how-to-read-doomsday-clock", title: "How to Read the Doomsday Clock: A Beginner's Guide", category: "explainer" },
  { slug: "is-doomsday-clock-real-or-fake", title: "Is the Doomsday Clock Real or Fake? Debunking the Critics", category: "explainer" },
  { slug: "who-created-doomsday-clock", title: "Who Created the Doomsday Clock? The Founders Behind the Symbol", category: "explainer" },
  { slug: "why-is-doomsday-clock-important", title: "Why Is the Doomsday Clock Important? Why You Should Care", category: "explainer" },
  { slug: "doomsday-clock-through-decades", title: "Doomsday Clock Through the Decades: 2000 vs 2020 vs 2026", category: "explainer" },
  { slug: "doomsday-clock-watchmen-comic", title: "Doomsday Clock & Watchmen: The Comic Series vs the Real Clock", category: "explainer" },
  { slug: "doomsday-clock-and-artificial-intelligence", title: "How AI & Artificial Intelligence Threaten the Doomsday Clock", category: "explainer" },
  { slug: "doomsday-clock-vs-other-threat-indices", title: "Doomsday Clock vs Other Global Threat Indices", category: "explainer" },
  { slug: "how-many-nuclear-weapons-exist-2026", title: "How Many Nuclear Weapons Exist in 2026?", category: "explainer" },
  { slug: "what-would-happen-in-a-nuclear-war", title: "What Would Happen in a Nuclear War?", category: "explainer" },
  { slug: "seven-minutes-to-midnight-doomsday-clock", title: "What Is 7 Minutes to Midnight on the Doomsday Clock?", category: "explainer" },
  { slug: "doomsday-clock-news-updates", title: "Doomsday Clock News & Latest Updates (March 2026)", category: "update" },
  { slug: "doomsday-clock-faq", title: "Doomsday Clock FAQ: 30 Most Common Questions Answered", category: "explainer" },
  { slug: "when-will-doomsday-clock-hit-midnight", title: "When Will the Doomsday Clock Hit Midnight?", category: "analysis" },
  { slug: "best-underground-bunker-kits", title: "Best Underground Bunker Kits & Survival Shelters (2026)", category: "gear" },
  { slug: "best-radiation-detectors-geiger-counters", title: "Best Radiation Detectors & Geiger Counters for 2026", category: "gear" },
  { slug: "best-emergency-radios", title: "Best Emergency Radios & Hand-Crank Weather Radios (2026)", category: "gear" },
  { slug: "best-doomsday-clock-books-nuclear-threats", title: "Best Books About Nuclear Threats, Doomsday & Existential Risk", category: "gear" },
  { slug: "best-water-purification-systems-emergency", title: "Best Water Purification Systems for Emergency Preparedness", category: "gear" },
];

interface RelatedArticlesProps {
  currentSlug: string;
  slugs?: string[];
}

export function RelatedArticles({ currentSlug, slugs }: RelatedArticlesProps) {
  let articles: Article[];

  if (slugs) {
    // Show specific recommended articles
    articles = slugs
      .map(s => ALL_ARTICLES.find(a => a.slug === s))
      .filter((a): a is Article => !!a);
  } else {
    // Auto-pick 3 articles excluding current
    articles = ALL_ARTICLES
      .filter(a => a.slug !== currentSlug)
      .slice(0, 3);
  }

  if (articles.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-white/10">
      <h3 className="text-lg font-bold text-foreground mb-4">Related Articles</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {articles.map(article => (
          <Link
            key={article.slug}
            to={`/blog/${article.slug}`}
            className="glass-card p-4 group hover:border-doom/30 transition-colors"
          >
            <span className="text-xs uppercase tracking-wider text-doom font-medium mb-1.5 block">
              {article.category}
            </span>
            <h4 className="text-sm font-semibold text-foreground group-hover:text-doom transition-colors line-clamp-2">
              {article.title}
            </h4>
            <span className="mt-2 flex items-center gap-1 text-xs text-doom font-medium group-hover:gap-2 transition-all">
              Read <ChevronRight className="w-3 h-3" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
