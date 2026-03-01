import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight, Calendar, Clock } from "lucide-react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "analysis" | "update" | "explainer";
  featured?: boolean;
}

const posts: BlogPost[] = [
  {
    slug: "us-iran-crisis-doomsday-clock",
    title:
      "Operation Epic Fury: How US-Iran Strikes Could Push the Doomsday Clock to the Brink",
    excerpt:
      "The US and Israel have launched coordinated military strikes against Iran. We analyze how this major escalation could affect the Doomsday Clock's position.",
    date: "February 28, 2026",
    readTime: "8 min read",
    category: "analysis",
    featured: true,
  },
];

export function BlogIndex() {
  useEffect(() => {
    document.title =
      "Blog | Doomsday Clock Analysis & Updates | DoomsdayClock.net";
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
