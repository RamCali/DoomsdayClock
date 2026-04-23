import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function MonthlyUpdate() {
  const now = new Date();
  const currentMonth = MONTHS[now.getMonth()];
  const currentYear = now.getFullYear();
  const lastUpdatedDisplay = `${currentMonth} ${now.getDate()}, ${currentYear}`;
  const modifiedISO = now.toISOString();

  useEffect(() => {
    updateMetaTags({
      title: "Doomsday Clock Monthly Update Log — Month-by-Month Changes",
      description: `Month-by-month log of Doomsday Clock developments through ${currentYear}: Bulletin statements, nuclear incidents, and escalation events. Page refreshed ${lastUpdatedDisplay}.`,
      path: "/blog/doomsday-clock-monthly-update",
      newsKeywords: `doomsday clock monthly log, doomsday clock news ${currentYear}, doomsday clock developments ${currentYear}, doomsday clock month by month, doomsday clock update log`,
      publishedTime: "2026-04-01T00:00:00Z",
      modifiedTime: modifiedISO,
      section: "Update",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Doomsday Clock Monthly Update Log — Month-by-Month Changes",
      datePublished: "2026-04-01T00:00:00Z",
      dateModified: modifiedISO,
      author: { "@type": "Organization", name: "DoomsdayClock.net", url: "https://doomsdayclock.net" },
      publisher: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        logo: {
          "@type": "ImageObject",
          url: "https://doomsdayclock.net/DoomsDayClock.net.png",
          width: 1200,
          height: 1200,
        },
        url: "https://doomsdayclock.net",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://doomsdayclock.net/blog/doomsday-clock-monthly-update",
      },
      isPartOf: {
        "@type": "WebPage",
        "@id": "https://doomsdayclock.net/blog/doomsday-clock-2026",
        name: "Doomsday Clock 2026: Current Status",
      },
      description: `A month-by-month log of Doomsday Clock developments through ${currentYear} — Bulletin statements, nuclear incidents, diplomatic events, and the escalations that shape the next setting.`,
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Update",
      inLanguage: "en-US",
      isAccessibleForFree: true,
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://doomsdayclock.net/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://doomsdayclock.net/blog" },
        { "@type": "ListItem", position: 3, name: "Monthly Update Log", item: "https://doomsdayclock.net/blog/doomsday-clock-monthly-update" },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "monthly-update");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const bcScript = document.createElement("script");
    bcScript.type = "application/ld+json";
    bcScript.setAttribute("data-blog-schema", "monthly-update-breadcrumb");
    bcScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(bcScript);

    return () => {
      const el = document.querySelector('script[data-blog-schema="monthly-update"]');
      if (el) el.remove();
      const bcEl = document.querySelector('script[data-blog-schema="monthly-update-breadcrumb"]');
      if (bcEl) bcEl.remove();
      resetToDefaults();
    };
  }, [modifiedISO, lastUpdatedDisplay, currentYear]);

  return (
    <article className="py-12 sm:py-16">
      <div className="container-tight">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Monthly Update Log</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
            </span>
            Update Log
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock Monthly Update Log</span>{" "}
            — Month-by-Month Changes
          </h1>

          {/* Direct-answer paragraph */}
          <p className="text-base sm:text-lg text-foreground leading-relaxed">
            This page tracks month-by-month developments affecting the Doomsday Clock through {currentYear}: Bulletin statements, nuclear incidents, diplomatic breakdowns, and the escalation events that shape the next official setting. For the current clock setting, see our{" "}
            <Link to="/blog/doomsday-clock-2026" className="text-doom hover:underline">
              Doomsday Clock 2026 current status
            </Link>{" "}
            page.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Last updated: {lastUpdatedDisplay}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How This Log Works
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin of the Atomic Scientists issues one official Doomsday Clock setting per year, typically in January. The months in between aren't quiet — nuclear incidents, diplomatic breakdowns, military escalations, and climate shocks accumulate and shape the Board's next decision. This page logs those developments as they happen.
            </p>
            <p className="text-foreground leading-relaxed">
              For the <strong>current clock setting</strong> (85 seconds to midnight, set February 4, 2026), see our canonical{" "}
              <Link to="/blog/doomsday-clock-2026" className="text-doom hover:underline">
                Doomsday Clock 2026 current status
              </Link>{" "}
              page. This log is for tracking what's changed <em>between</em> announcements.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Recent Developments
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The most significant current development affecting nuclear risk is Operation Epic Fury — the February 2026 US-Israel military strikes on Iran. See our full breakdown in the{" "}
              <Link to="/blog/us-iran-crisis-doomsday-clock" className="text-doom hover:underline">
                US-Iran crisis analysis
              </Link>
              .
            </p>
            <p className="text-foreground leading-relaxed">
              The next official Bulletin announcement is expected in{" "}
              <span className="text-doom font-semibold">{currentTime.nextUpdate}</span>. Until then, the {currentTime.display} setting stands as the official position, and the events logged here are what the Science and Security Board will weigh.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What the Board Is Watching
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Four threat domains dominate the Bulletin's between-announcement thinking: continued nuclear escalation in Ukraine and the Middle East, the collapse of arms-control frameworks, accelerating climate disruption, and the proliferation of AI-enabled autonomous weapons. Any major movement in any of these typically surfaces here first.
            </p>
            <p className="text-foreground leading-relaxed">
              For the complete history of every clock setting and the reasoning behind each move, see the{" "}
              <Link to="/blog/doomsday-clock-history-timeline" className="text-doom hover:underline">
                complete Doomsday Clock timeline (1947–{currentYear})
              </Link>
              .
            </p>
          </section>
        </div>

        <RelatedArticles currentSlug="doomsday-clock-monthly-update" />

        <div className="mt-8 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
