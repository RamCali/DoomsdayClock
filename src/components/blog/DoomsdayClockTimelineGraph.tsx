import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, BarChart3 } from "lucide-react";
import { currentTime, clockHistory } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockTimelineGraph() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Doomsday Clock Timeline Graph: Every Change from 1947 to 2026 | DoomsdayClock.net",
      description:
        "Interactive Doomsday Clock timeline graph showing every change from 1947 to 2026. See how the clock has moved over 28 adjustments across nearly 80 years of history.",
      path: "/blog/doomsday-clock-timeline-graph",
      newsKeywords:
        "doomsday clock timeline, doomsday clock graph, doomsday clock over the years, doomsday clock by year, doomsday clock history graph",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Analysis",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Doomsday Clock Timeline Graph: Every Change from 1947 to 2026",
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
          "https://doomsdayclock.net/blog/doomsday-clock-timeline-graph",
      },
      description:
        "Interactive Doomsday Clock timeline graph showing every change from 1947 to 2026 across 28 adjustments.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Analysis",
      keywords: [
        "doomsday clock timeline",
        "doomsday clock graph",
        "doomsday clock over the years",
        "doomsday clock by year",
        "doomsday clock history graph",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2200,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "timeline-graph");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="timeline-graph"]'
      );
      if (el) el.remove();
      resetToDefaults();
    };
  }, []);

  const maxMinutes = 17; // 1991 was farthest at 17 minutes
  const forwardMoves = clockHistory.filter(
    (e) => e.direction === "forward"
  );
  const backwardMoves = clockHistory.filter(
    (e) => e.direction === "backward"
  );

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
          <span className="text-foreground">Timeline Graph</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs sm:text-sm font-medium">
            <BarChart3 className="w-3.5 h-3.5" />
            Analysis
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock Timeline Graph:</span>{" "}
            Every Change from 1947 to 2026
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 14, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
          </div>

          {/* Current clock context */}
          <div className="doom-accent-card p-4 flex items-center gap-4">
            <Clock className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                The Doomsday Clock is currently at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight &mdash; the closest it has ever been
              </p>
              <p className="text-xs text-muted-foreground">
                Set on {currentTime.lastUpdated} &mdash;{" "}
                {clockHistory.length} time settings across{" "}
                {currentTime.year - 1947} years of history
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The Complete Graph */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Doomsday Clock by Year: The Complete Graph
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock has been adjusted {clockHistory.length - 1}{" "}
              times since its creation in 1947. The visual timeline below shows
              every setting from 1947 to 2026 as a horizontal bar graph. Wider
              bars represent more minutes from midnight (safer), while narrower
              bars show the clock closer to midnight (more dangerous). Red bars
              indicate forward moves (closer to midnight), green bars show
              backward moves (safer), and gray marks the initial 1947 setting.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              Scroll through the complete Doomsday Clock graph to see how
              humanity&apos;s risk has evolved over nearly eight decades &mdash;
              from the dawn of the nuclear age through the Cold War, the hopeful
              1990s, and into the unprecedented danger of the 2020s.
            </p>

            {/* Visual bar graph */}
            <div className="space-y-3">
              {clockHistory.map((event) => {
                const widthPercent = (event.minutes / maxMinutes) * 100;
                return (
                  <div key={event.year} className="group">
                    <div className="flex items-center gap-3">
                      <span className="w-12 text-sm font-mono font-bold text-foreground">
                        {event.year}
                      </span>
                      <div className="flex-1">
                        <div
                          className="h-6 rounded transition-all duration-300 group-hover:opacity-80"
                          style={{
                            width: `${Math.max(widthPercent, 8)}%`,
                            background:
                              event.direction === "backward"
                                ? "#10b981"
                                : event.direction === "initial"
                                ? "#6b7280"
                                : "#ef4444",
                          }}
                        >
                          <span className="text-xs text-white px-2 leading-6 whitespace-nowrap">
                            {event.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground ml-16 mt-0.5">
                      {event.reason}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded" style={{ background: "#ef4444" }} />
                Forward (closer to midnight)
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded" style={{ background: "#10b981" }} />
                Backward (farther from midnight)
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="w-3 h-3 rounded" style={{ background: "#6b7280" }} />
                Initial setting
              </div>
            </div>
          </section>

          {/* Section 2: Key Patterns */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Key Patterns in the Timeline
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Looking at the Doomsday Clock over the years reveals several
              striking patterns that tell the story of how humanity has managed
              &mdash; and failed to manage &mdash; existential risk across
              nearly eight decades.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-medium text-foreground mb-2">
                  Forward Moves Dominate
                </h4>
                <p className="text-sm text-muted-foreground">
                  The clock has moved forward{" "}
                  <strong className="text-foreground">
                    {forwardMoves.length} times
                  </strong>{" "}
                  but backward only{" "}
                  <strong className="text-foreground">
                    {backwardMoves.length} times
                  </strong>
                  . The overall trajectory is unmistakably toward greater danger,
                  with forward moves outnumbering backward moves by roughly 2 to
                  1.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <h4 className="font-medium text-foreground mb-2">
                  The 1990s: Peak Safety
                </h4>
                <p className="text-sm text-muted-foreground">
                  The safest period in the clock&apos;s history came in 1991,
                  when the end of the Cold War and the signing of the START
                  treaty pushed the clock to{" "}
                  <strong className="text-foreground">17 minutes</strong> to
                  midnight &mdash; a record that has never been approached since.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                <h4 className="font-medium text-foreground mb-2">
                  The Shift to Seconds
                </h4>
                <p className="text-sm text-muted-foreground">
                  In 2020, for the first time in the clock&apos;s 73-year
                  history, the setting broke through the minutes barrier to{" "}
                  <strong className="text-foreground">100 seconds</strong>. This
                  shift to seconds marked a qualitatively new category of danger
                  that the Bulletin had never previously conveyed.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-medium text-foreground mb-2">
                  Fastest Deterioration
                </h4>
                <p className="text-sm text-muted-foreground">
                  From 2020 to 2026, the clock moved from 100 seconds to 85
                  seconds &mdash; a loss of{" "}
                  <strong className="text-foreground">
                    15 seconds in just 6 years
                  </strong>
                  . This represents the most rapid deterioration in the modern
                  era, driven by compounding threats from nuclear risk, climate
                  change, and AI.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              The graph above makes one fact visually undeniable: the bars get
              progressively shorter over time. After the dramatic expansion in
              1991, the trend has been relentlessly downward. The clock has not
              moved backward since 2010 &mdash; the longest sustained forward
              march in its entire history. Each year that passes without a
              backward move sets a new record for consecutive deterioration.
            </p>
          </section>

          {/* Section 3: Every Forward Move */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Every Forward Move
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock has moved closer to midnight{" "}
              {forwardMoves.length} times since 1947. Each forward move reflects
              the Bulletin&apos;s Science and Security Board&apos;s assessment
              that existential threats have intensified. Here are the major
              forward moves and the events that drove them.
            </p>

            <div className="space-y-3">
              {forwardMoves.map((event) => (
                <div
                  key={event.year}
                  className="p-3 rounded-lg bg-doom/5 border border-doom/20"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">
                      {event.year}: {event.time} to midnight
                    </h4>
                    <span className="text-xs text-doom font-medium">
                      &#9650; Closer
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{event.reason}</strong>{" "}
                    &mdash; {event.details}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              The forward moves cluster around two main categories: new nuclear
              weapons capabilities (1949, 1953, 1968, 1974, 1998) and the
              breakdown of diplomatic frameworks (1980, 1981, 1984, 2002, 2012,
              2015). In the modern era, the convergence of nuclear risk, climate
              change, and emerging technologies like AI has created a new driver
              of forward movement that compounds all previous threats.
            </p>
          </section>

          {/* Section 4: Every Backward Move */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Every Backward Move
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While the overall trend is alarming, the Doomsday Clock has also
              moved backward {backwardMoves.length} times &mdash; proof that
              diplomacy, treaties, and international cooperation can genuinely
              reduce existential risk. Every backward move in the clock&apos;s
              history followed a major diplomatic breakthrough.
            </p>

            <div className="space-y-3">
              {backwardMoves.map((event) => (
                <div
                  key={event.year}
                  className="p-3 rounded-lg bg-green-500/5 border border-green-500/20"
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">
                      {event.year}: {event.time} to midnight
                    </h4>
                    <span className="text-xs text-green-400 font-medium">
                      &#9660; Safer
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{event.reason}</strong>{" "}
                    &mdash; {event.details}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              These {backwardMoves.length} backward moves carry a powerful
              message of hope. Every single one was tied to concrete diplomatic
              action: the Partial Test Ban Treaty (1963), the Non-Proliferation
              Treaty (1969), SALT I and the ABM Treaty (1972), the INF Treaty
              (1988), the end of the Cold War (1990), the START treaty (1991),
              and the New START negotiations (2010). The pattern is clear
              &mdash; when nations choose cooperation, the clock responds. The
              question today is whether the political will exists to achieve the
              kind of breakthroughs that moved the clock backward in the past.
            </p>
          </section>

          {/* Section 5: What the Graph Tells Us */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What the Graph Tells Us About the Future
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock timeline graph reveals an unmistakable
              trajectory. After reaching its safest point of 17 minutes in 1991,
              the clock has deteriorated almost continuously for over three
              decades. The rate of decline has accelerated sharply since 2017,
              when the clock stood at 2.5 minutes. In just nine years, it has
              fallen to 85 seconds &mdash; a pace of deterioration without
              precedent in the clock&apos;s nearly 80-year history.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The convergence of multiple existential threats &mdash; nuclear
              weapons modernization, the collapse of arms control frameworks,
              accelerating climate change, and the rapid rise of AI &mdash;
              means the Bulletin&apos;s Science and Security Board faces an
              increasingly complex assessment each year. Unlike the Cold War era,
              when nuclear risk was the dominant factor, today&apos;s setting
              reflects a web of interconnected dangers that reinforce each other.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              What will the 2027 announcement bring? Our analysis of the
              scenarios that could move the clock forward or backward is
              available in our{" "}
              <Link
                to="/blog/doomsday-clock-2027-prediction"
                className="text-doom hover:underline font-semibold"
              >
                Doomsday Clock 2027 Prediction
              </Link>{" "}
              article. The next announcement is expected in{" "}
              <Link
                to="/#countdown"
                className="text-doom hover:underline font-semibold"
              >
                {currentTime.nextUpdate}
              </Link>
              .
            </p>
            <p className="text-foreground leading-relaxed">
              But the Doomsday Clock is not a prediction &mdash; it is a
              warning. The graph shows that backward movement is possible and
              has happened {backwardMoves.length} times before. What it requires
              is the same combination of political will, scientific engagement,
              and public pressure that produced every backward move in the
              clock&apos;s history. The scientists who maintain this clock do so
              not out of fatalism, but out of a conviction that informed citizens
              can still demand a safer world.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Explore the Interactive Timeline
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See every Doomsday Clock change visualized on our interactive
            timeline with detailed analysis for each year.
          </p>
          <Link
            to="/#timeline"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View the Full Timeline
          </Link>
        </div>

        {/* Related articles grid */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Link
            to="/blog/doomsday-clock-history-timeline"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              Doomsday Clock History: Complete Timeline
            </h4>
            <p className="text-sm text-muted-foreground">
              The full narrative history of every change with detailed context
              for each year.
            </p>
          </Link>
          <Link
            to="/blog/doomsday-clock-2027-prediction"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              Doomsday Clock 2027 Prediction
            </h4>
            <p className="text-sm text-muted-foreground">
              What could move the clock forward or backward in 2027? Our
              scenario analysis.
            </p>
          </Link>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-timeline-graph"
          slugs={[
            "doomsday-clock-history-timeline",
            "doomsday-clock-2026",
            "what-is-the-doomsday-clock",
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
