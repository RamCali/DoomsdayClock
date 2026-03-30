import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, TrendingUp, AlertTriangle } from "lucide-react";
import { currentTime, clockHistory } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockCurrentTime() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Doomsday Clock Current Time: 85 Seconds to Midnight (March 2026) | DoomsdayClock.net",
      description:
        "The Doomsday Clock is at 85 seconds to midnight — the closest EVER. Updated March 2026. See what changed from 89 seconds, why it moved, and when the next update is expected.",
      path: "/blog/doomsday-clock-current-time-today",
      newsKeywords:
        "doomsday clock today, doomsday clock currently, doomsday clock time, what time doomsday clock, doomsday clock current time, doomsday clock right now, doomsday clock now, doomsday clock what time is it, doomsday clock current, doomsday clock update today, what is the doomsday clock at today",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Status",
      author: "DoomsdayClock.net",
    });

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Doomsday Clock Current Time Today (2026): Live Status & Update",
      datePublished: "2026-03-14T00:00:00Z",
      dateModified: "2026-03-14T00:00:00Z",
      author: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        url: "https://doomsdayclock.net",
      },
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
        "@id":
          "https://doomsdayclock.net/blog/doomsday-clock-current-time-today",
      },
      description:
        "What time is the Doomsday Clock right now? Currently set at 85 seconds to midnight as of February 2026.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Status",
      keywords: [
        "doomsday clock today",
        "doomsday clock currently",
        "doomsday clock time",
        "what time doomsday clock",
        "doomsday clock current time",
        "doomsday clock right now",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 1600,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What time is the Doomsday Clock right now?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Doomsday Clock is currently set at ${currentTime.display} to midnight, as of ${currentTime.lastUpdated}. This is the closest the clock has ever been to midnight in its history since 1947.`,
          },
        },
        {
          "@type": "Question",
          name: "When was the Doomsday Clock last updated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Doomsday Clock was last updated on ${currentTime.lastUpdated}, when the Bulletin of the Atomic Scientists moved it from 89 seconds to ${currentTime.display} to midnight.`,
          },
        },
        {
          "@type": "Question",
          name: "When is the next Doomsday Clock update?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The next Doomsday Clock update is expected in ${currentTime.nextUpdate}. The Bulletin of the Atomic Scientists announces the clock setting annually, typically in late January.`,
          },
        },
        {
          "@type": "Question",
          name: "What does 85 seconds to midnight mean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "85 seconds to midnight means the Bulletin of the Atomic Scientists believes humanity is extremely close to catastrophic destruction. Midnight represents global catastrophe, and 85 seconds is the closest the Doomsday Clock has ever been set. The setting reflects escalating nuclear risks, climate change, AI threats, and geopolitical instability.",
          },
        },
        {
          "@type": "Question",
          name: "Has the Doomsday Clock ever been closer to midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. At 85 seconds to midnight, the Doomsday Clock is at its closest point ever. The previous record was 89 seconds, set in January 2025. Before that, the clock was at 90 seconds from 2023 to 2024. The clock first moved into the seconds range in 2020 at 100 seconds to midnight.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "current-time");
    script.textContent = JSON.stringify([articleSchema, faqSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="current-time"]'
      );
      if (el) el.remove();
      resetToDefaults();
    };
  }, []);

  const recentHistory = clockHistory
    .filter((entry) => entry.year >= 2020)
    .sort((a, b) => b.year - a.year);

  return (
    <article className="py-12 sm:py-16">
      <div className="container-tight">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            to="/"
            className="hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            to="/blog"
            className="hover:text-foreground transition-colors"
          >
            Blog
          </Link>
          <span>/</span>
          <span className="text-foreground">
            Doomsday Clock Current Time
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-doom opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-doom"></span>
            </span>
            Live Status
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock Current Time</span>{" "}
            Today ({currentTime.year})
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 14, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>
        </header>

        {/* Hero: Prominent current time display */}
        <div className="doom-accent-card p-6 sm:p-8 mb-10 text-center animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-doom" />
            <Clock className="w-10 h-10 text-doom" />
            <AlertTriangle className="w-8 h-8 text-doom" />
          </div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-2">
            The Doomsday Clock is currently at
          </p>
          <p className="text-5xl sm:text-6xl md:text-7xl font-black text-doom mb-2">
            {currentTime.display}
          </p>
          <p className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
            to midnight
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              Set on {currentTime.lastUpdated}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              Next update: {currentTime.nextUpdate}
            </span>
          </div>
          <div className="mt-6">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
            >
              <Clock className="w-4 h-4 mr-2" />
              View Live Clock &amp; Countdown
            </Link>
          </div>
        </div>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: What Time Is the Doomsday Clock Right Now? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Time Is the Doomsday Clock Right Now?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is currently at{" "}
              <span className="text-doom font-bold">
                {currentTime.display}
              </span>{" "}
              to midnight, set on{" "}
              <span className="font-semibold">{currentTime.lastUpdated}</span>.
              This is the closest the clock has ever been to midnight in its
              nearly eight-decade history. The Bulletin of the Atomic Scientists
              moved the clock forward by four seconds from its previous setting
              of 89 seconds, which was established in January 2025.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The four-second advance is the largest single-year jump since the
              clock entered the seconds range in 2020. It signals that the
              Bulletin&apos;s Science and Security Board sees not just
              incremental worsening but an acceleration of global threats across
              every domain they evaluate &mdash; nuclear weapons, climate
              change, disruptive technologies, and geopolitical instability.
            </p>
            <p className="text-foreground leading-relaxed">
              Midnight on the Doomsday Clock represents global catastrophe
              &mdash; the point of no return. At {currentTime.display}, the
              Bulletin is conveying that humanity is perilously close to that
              threshold, and the window for meaningful action continues to
              narrow.
            </p>
          </section>

          {/* Section 2: What Changed in 2026? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Changed in 2026?
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The Bulletin cited multiple converging threats in its February
              2026 announcement. No single event drove the four-second advance
              &mdash; rather, the simultaneous worsening of several
              existential risks compelled the most significant clock movement
              in years.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Nuclear Risks
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Russia-Ukraine war continues into its fourth year with
                  persistent nuclear rhetoric. Arms control frameworks have
                  collapsed after New START expired without a successor.
                  US-China tensions over the Taiwan Strait have intensified.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Climate Acceleration
                </h4>
                <p className="text-sm text-muted-foreground">
                  2025 was confirmed as the hottest year on record. Arctic sea
                  ice hit new lows, and major emitters continued to miss their
                  own climate targets. The window for limiting warming to 1.5
                  degrees is effectively closed.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  AI &amp; Technology Threats
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI-powered autonomous weapons are proliferating without
                  governance frameworks. Deepfakes are undermining democratic
                  processes at scale. AI integration into military
                  decision-making introduces new risks of catastrophic
                  miscalculation.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Middle East Conflict
                </h4>
                <p className="text-sm text-muted-foreground">
                  Regional conflicts have expanded, Iran&apos;s nuclear
                  program has advanced toward weapons-grade enrichment, and
                  diplomatic channels have narrowed significantly across the
                  broader Middle East.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              For a comprehensive breakdown of the 2026 announcement and its
              implications, read our{" "}
              <Link
                to="/blog/doomsday-clock-2026"
                className="text-doom hover:underline"
              >
                full Doomsday Clock 2026 analysis
              </Link>
              .
            </p>
          </section>

          {/* Section 3: Recent Doomsday Clock Settings */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Recent Doomsday Clock Settings
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The clock has moved forward in four of the last five
              announcements. Here is where the Doomsday Clock has stood in
              recent years:
            </p>

            <div className="space-y-3 my-6">
              {recentHistory.map((entry) => (
                <div
                  key={entry.year}
                  className={`p-4 rounded-lg flex items-center justify-between ${
                    entry.year === currentTime.year
                      ? "bg-doom/10 border border-doom/30"
                      : "bg-white/5 border border-white/10"
                  }`}
                >
                  <span
                    className={`text-sm font-medium ${
                      entry.year === currentTime.year
                        ? "font-bold text-doom"
                        : "text-foreground"
                    }`}
                  >
                    {entry.year}
                  </span>
                  <span
                    className={`text-sm text-right ${
                      entry.year === currentTime.year
                        ? "text-doom font-medium"
                        : "text-muted-foreground"
                    }`}
                  >
                    {entry.time} to midnight &mdash; {entry.reason}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-foreground leading-relaxed">
              The trajectory is clear: since breaking the 100-second barrier
              in 2020, the clock has continued to advance. The 2024 hold at 90
              seconds was the only pause in an otherwise relentless forward
              march. At the current rate, the clock could reach 80 seconds or
              fewer within the next few years &mdash; a prospect that has
              scientists deeply concerned.
            </p>
          </section>

          {/* Section 4: When Is the Next Doomsday Clock Update? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              When Is the Next Doomsday Clock Update?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The next Doomsday Clock update is expected in{" "}
              <span className="text-doom font-semibold">
                {currentTime.nextUpdate}
              </span>
              . The Bulletin of the Atomic Scientists announces the clock
              setting annually, typically at a press conference held in late
              January in Washington D.C.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Science and Security Board &mdash; which includes Nobel
              laureates and leading researchers in nuclear policy, climate
              science, and emerging technologies &mdash; meets in the weeks
              before the announcement to evaluate the state of global threats
              and decide whether to move the clock forward, backward, or hold
              it steady.
            </p>
            <div className="doom-accent-card p-4 flex items-center gap-4">
              <Clock className="w-8 h-8 text-doom shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Countdown to the next announcement
                </p>
                <p className="text-xs text-muted-foreground">
                  Visit our{" "}
                  <Link to="/" className="text-doom hover:underline">
                    homepage
                  </Link>{" "}
                  to see the live countdown timer to the {currentTime.nextUpdate}{" "}
                  announcement.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: How to Track the Doomsday Clock */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How to Track the Doomsday Clock
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Staying informed about the Doomsday Clock&apos;s status is
              easier than ever. Here are the best ways to keep track:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Live Tracker
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our{" "}
                  <Link to="/" className="text-doom hover:underline">
                    homepage
                  </Link>{" "}
                  features a real-time Doomsday Clock display with the current
                  time, a countdown to the next announcement, an interactive
                  timeline of every clock change since 1947, and a What If
                  Simulator for modeling future scenarios.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Embed Widget
                </h4>
                <p className="text-sm text-muted-foreground">
                  Add the Doomsday Clock to your own website with our free{" "}
                  <Link to="/embed" className="text-doom hover:underline">
                    embeddable widget
                  </Link>
                  . It updates automatically whenever the Bulletin announces a
                  new setting.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Email Alerts
                </h4>
                <p className="text-sm text-muted-foreground">
                  Sign up for email notifications on our{" "}
                  <Link to="/" className="text-doom hover:underline">
                    homepage
                  </Link>{" "}
                  to get alerted as soon as the Bulletin announces a new clock
                  setting. Be the first to know when the clock moves.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section (visible on page for SEO) */}
        <div className="mt-8 doom-card p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-doom mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                What time is the Doomsday Clock right now?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock is currently set at{" "}
                {currentTime.display} to midnight, as of{" "}
                {currentTime.lastUpdated}. This is the closest the clock has
                ever been to midnight in its history since 1947.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                When was the Doomsday Clock last updated?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock was last updated on{" "}
                {currentTime.lastUpdated}, when the Bulletin of the Atomic
                Scientists moved it from 89 seconds to{" "}
                {currentTime.display} to midnight.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                When is the next Doomsday Clock update?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The next Doomsday Clock update is expected in{" "}
                {currentTime.nextUpdate}. The Bulletin of the Atomic
                Scientists announces the clock setting annually, typically in
                late January.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                What does 85 seconds to midnight mean?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                85 seconds to midnight means the Bulletin of the Atomic
                Scientists believes humanity is extremely close to
                catastrophic destruction. Midnight represents global
                catastrophe, and 85 seconds is the closest the Doomsday Clock
                has ever been set. The setting reflects escalating nuclear
                risks, climate change, AI threats, and geopolitical
                instability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                Has the Doomsday Clock ever been closer to midnight?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No. At {currentTime.display} to midnight, the Doomsday Clock
                is at its closest point ever. The previous record was 89
                seconds, set in January 2025. Before that, the clock was at 90
                seconds from 2023 to 2024. The clock first moved into the
                seconds range in 2020 at 100 seconds to midnight.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Watch the Clock Live
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See the current Doomsday Clock time, countdown to the next
            announcement, and explore the full history on our interactive
            tracker.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            <Clock className="w-4 h-4 mr-2" />
            Go to Live Clock
          </Link>
        </div>

        {/* Related articles */}
        <RelatedArticles
          currentSlug="doomsday-clock-current-time-today"
          slugs={[
            "doomsday-clock-2026",
            "what-does-89-seconds-to-midnight-mean",
            "doomsday-clock-2027-prediction",
          ]}
        />

        {/* Back link */}
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
