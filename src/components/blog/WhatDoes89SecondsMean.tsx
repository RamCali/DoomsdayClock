import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, BookOpen, AlertTriangle } from "lucide-react";
import { currentTime, clockHistory } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WhatDoes89SecondsMean() {
  useEffect(() => {
    updateMetaTags({
      title:
        "What Does 89 Seconds to Midnight Mean? Doomsday Clock Explained | DoomsdayClock.net",
      description:
        "What does 89 seconds to midnight actually mean? Understand the significance of the Doomsday Clock's 2025 setting, how it compares to 90 seconds, and what the current 85-second reading means for humanity.",
      path: "/blog/what-does-89-seconds-to-midnight-mean",
      newsKeywords:
        "89 seconds to midnight, doomsday clock 89 seconds, what does 89 seconds mean, 90 seconds to midnight, doomsday clock meaning",
      publishedTime: "2026-03-07T00:00:00Z",
      modifiedTime: "2026-03-07T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "What Does 89 Seconds to Midnight Mean? Doomsday Clock Explained",
      datePublished: "2026-03-07T00:00:00Z",
      dateModified: "2026-03-07T00:00:00Z",
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
          "https://doomsdayclock.net/blog/what-does-89-seconds-to-midnight-mean",
      },
      description:
        "What does 89 seconds to midnight actually mean? The significance of the Doomsday Clock's 2025 setting explained.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "89 seconds to midnight",
        "doomsday clock meaning",
        "90 seconds to midnight",
        "doomsday clock explained",
        "85 seconds to midnight",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2200,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "89-seconds");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="89-seconds"]'
      );
      if (el) el.remove();
      resetToDefaults();
    };
  }, []);

  const secondsEntries = clockHistory.filter((e) => e.time.includes("seconds"));

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
          <span className="text-foreground">What Does 89 Seconds Mean?</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What Does <span className="text-doom">89 Seconds</span> to Midnight
            Actually Mean?
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          {/* Current clock context */}
          <div className="doom-accent-card p-4 flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                <strong>Update:</strong> The clock has since moved to{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight (February 2026)
              </p>
              <p className="text-xs text-muted-foreground">
                89 seconds was the 2025 setting &mdash; this article explains
                that reading and how it compares to the current record
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The Quick Answer */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Quick Answer
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When the Bulletin of the Atomic Scientists set the Doomsday Clock
              to 89 seconds to midnight in January 2025, they were saying this:
              humanity is closer to self-inflicted catastrophe than at any
              previous point in the clock&apos;s history. The setting was one
              second closer than the previous record of 90 seconds, set in 2023
              after Russia&apos;s invasion of Ukraine.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is not a literal countdown. It is a symbolic
              measure &mdash; maintained since 1947 by a board of scientists
              including Nobel Laureates &mdash; that communicates how close the
              world stands to existential catastrophe. Midnight represents the
              point of no return. The closer the time, the greater the danger.
            </p>
            <p className="text-foreground leading-relaxed">
              At 89 seconds, the Bulletin was signaling that the convergence of
              nuclear threats, climate change, disruptive technologies, and
              geopolitical instability had created a level of risk without
              precedent in the clock&apos;s nearly eight-decade history. It has
              since moved even closer &mdash; to{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              in February 2026.
            </p>
          </section>

          {/* Section 2: Why 89 and Not 90? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why 89 Seconds? What Changed from 90?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The clock had been at 90 seconds to midnight since January 2023,
              when Russia&apos;s invasion of Ukraine and thinly veiled nuclear
              threats prompted a dramatic forward move. It stayed at 90 seconds
              through 2024. In January 2025, the Bulletin moved it one second
              closer to midnight. That single second carried enormous symbolic
              weight.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The factors the Bulletin cited for the 2025 move included:
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-doom/5 border border-doom/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Escalating nuclear risks
                </h4>
                <p className="text-sm text-muted-foreground">
                  The ongoing erosion of arms control frameworks, with no active
                  bilateral negotiations between the US and Russia on nuclear
                  weapons limits. Russia&apos;s suspension of participation in
                  New START effectively ended the last remaining constraint on
                  the world&apos;s two largest nuclear arsenals.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  The Russia-Ukraine war
                </h4>
                <p className="text-sm text-muted-foreground">
                  Now entering its third year, the conflict continued to carry
                  nuclear escalation risks. Russia repeatedly referenced its
                  nuclear capabilities, while the war&apos;s expansion to
                  include strikes on Russian territory raised the stakes
                  further.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Climate crisis acceleration
                </h4>
                <p className="text-sm text-muted-foreground">
                  2024 was confirmed as the hottest year in recorded human
                  history, breaching the 1.5&deg;C warming threshold for the
                  first time over a 12-month average. Extreme weather events
                  intensified worldwide while emissions continued rising.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  AI and emerging technology risks
                </h4>
                <p className="text-sm text-muted-foreground">
                  Rapid advances in artificial intelligence, particularly in
                  autonomous weapons systems, deepfake disinformation, and
                  AI-assisted biological research, introduced new and poorly
                  understood dimensions of existential risk.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              Moving just one second &mdash; from 90 to 89 &mdash; was itself a
              deliberate choice. In the Bulletin&apos;s framework, any forward
              move is alarming. But the granularity of seconds-level adjustments
              (compared to the minutes used for most of the clock&apos;s
              history) communicates that the margin of safety has become
              vanishingly thin.
            </p>
          </section>

          {/* Section 3: From Minutes to Seconds */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              From Minutes to Seconds: How We Got Here
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For 73 years &mdash; from 1947 to 2019 &mdash; the Doomsday Clock
              was always measured in minutes. The closest it ever got in the
              minutes era was 2 minutes to midnight, reached twice: in 1953
              (hydrogen bomb tests) and 2018 (failure to address nuclear threats
              and climate change). Then, in January 2020, the Bulletin broke
              the minutes barrier for the first time, setting the clock at 100
              seconds.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              That shift was not arbitrary. It was a deliberate signal that the
              level of danger had entered a new category &mdash; one that
              demanded finer-grained measurement to communicate the urgency.
              Here is every seconds-era setting:
            </p>

            <div className="space-y-3">
              {secondsEntries.map((event) => (
                <div
                  key={event.year}
                  className={`p-4 rounded-lg border ${
                    event.year === 2026
                      ? "bg-doom/10 border-doom/30"
                      : event.year === 2025
                      ? "bg-doom/5 border-doom/20"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">
                      {event.year}: {event.time} to midnight
                    </h4>
                    {event.year === 2026 && (
                      <span className="text-xs text-doom font-medium px-2 py-0.5 rounded-full bg-doom/20">
                        Current
                      </span>
                    )}
                    {event.year === 2025 && (
                      <span className="text-xs text-muted-foreground font-medium px-2 py-0.5 rounded-full bg-white/10">
                        Previous
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.details}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              The trajectory is clear: in just six years, the clock has moved
              from 100 seconds to 85 &mdash; a 15-second decline that
              represents the fastest sustained deterioration in the
              clock&apos;s history. Each second lost narrows the margin
              humanity has to act.
            </p>
          </section>

          {/* Section 4: Does It Actually Mean Anything? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Does the Doomsday Clock Actually Mean Anything?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              This is one of the most common questions people ask. The answer
              is yes &mdash; but not in the way many people assume. The
              Doomsday Clock does not predict when the world will end. It does
              not correspond to a literal countdown. You cannot divide the
              remaining seconds by some rate to calculate a date of doom.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              What the clock <em>does</em> do is synthesize the judgment of
              some of the world&apos;s leading experts in nuclear policy,
              climate science, and emerging technologies into a single,
              universally understandable symbol. The{" "}
              <Link
                to="/blog/who-controls-doomsday-clock"
                className="text-doom hover:underline"
              >
                Science and Security Board
              </Link>{" "}
              that sets the clock includes Nobel Laureates and researchers who
              advise governments on existential risk. Their assessment carries
              weight precisely because it is not sensationalized &mdash; it is
              a considered, evidence-based evaluation of where humanity stands.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The clock has also proven to be a powerful communication tool. It
              has been featured in thousands of news articles, cited in
              government reports, and referenced in academic research. When the
              clock moves, people pay attention. That attention is the point
              &mdash; the clock exists to drive public awareness and policy
              action on existential threats.
            </p>
            <p className="text-foreground leading-relaxed">
              Crucially, the clock can move backward. It has done so eight
              times in its history, most dramatically in 1991 when it reached
              17 minutes to midnight after the end of the Cold War. Every
              backward move followed major diplomatic achievements &mdash;
              proof that the threats the clock measures are not inevitable, and
              that human action can genuinely reduce existential risk.
            </p>
          </section>

          {/* Section 5: What Does the Current Clock Say? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Does the Doomsday Clock Currently Say?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              As of February 4, 2026, the Doomsday Clock stands at{" "}
              <span className="text-doom font-bold">
                {currentTime.display} to midnight
              </span>{" "}
              &mdash; the closest it has ever been. The clock moved from 89
              seconds (the 2025 setting this article explains) to 85 seconds,
              a four-second jump that was the largest single forward move in
              the seconds era.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin cited escalating nuclear risks from the
              Russia-Ukraine war, conflict in the Middle East, the continued
              acceleration of climate change, and deepening concerns about
              artificial intelligence as the primary drivers. For a full
              analysis of the 2026 announcement, see our{" "}
              <Link
                to="/blog/doomsday-clock-2026"
                className="text-doom hover:underline"
              >
                Doomsday Clock 2026 deep dive
              </Link>
              .
            </p>
            <p className="text-foreground leading-relaxed">
              The next expected clock adjustment will come in{" "}
              <Link
                to="/#countdown"
                className="text-doom hover:underline font-semibold"
              >
                {currentTime.nextUpdate}
              </Link>
              . For predictions on what could move the clock forward or
              backward, see our{" "}
              <Link
                to="/blog/doomsday-clock-2027-prediction"
                className="text-doom hover:underline"
              >
                2027 prediction analysis
              </Link>
              .
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Track the Doomsday Clock in Real Time
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See the current clock time, interactive timeline, and countdown to
            the next announcement.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View Live Clock
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Link
            to="/blog/what-happens-doomsday-clock-midnight"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              What Happens at Midnight?
            </h4>
            <p className="text-sm text-muted-foreground">
              What midnight symbolizes, why the clock has never reached it, and
              the catastrophic scenarios it represents.
            </p>
          </Link>
          <Link
            to="/blog/doomsday-clock-history-timeline"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              Complete Doomsday Clock Timeline
            </h4>
            <p className="text-sm text-muted-foreground">
              Every change from 1947 to 2026 &mdash; all 28 settings with
              detailed analysis.
            </p>
          </Link>
        </div>

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
