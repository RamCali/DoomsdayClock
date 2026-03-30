import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, BookOpen, AlertTriangle, TrendingUp } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function HowToReadDoomsdayClock() {
  useEffect(() => {
    updateMetaTags({
      title:
        "How to Read the Doomsday Clock: A Beginner's Guide | DoomsdayClock.net",
      description:
        "How to read and understand the Doomsday Clock. A beginner's guide to what the minutes and seconds mean, how to interpret changes, and what the current time tells us.",
      path: "/blog/how-to-read-doomsday-clock",
      newsKeywords:
        "how to read doomsday clock, what does doomsday clock mean, doomsday clock explained, how many seconds to midnight, doomsday clock for beginners",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "How to Read the Doomsday Clock: A Beginner's Guide",
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
          "https://doomsdayclock.net/blog/how-to-read-doomsday-clock",
      },
      description:
        "How to read and understand the Doomsday Clock. A beginner's guide to what the minutes and seconds mean, how to interpret changes, and what the current time tells us.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "how to read doomsday clock",
        "what does doomsday clock mean",
        "doomsday clock explained",
        "how many seconds to midnight",
        "doomsday clock for beginners",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2000,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "how-to-read");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="how-to-read"]'
      );
      if (el) el.remove();
      resetToDefaults();
    };
  }, []);

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
          <span className="text-foreground">How to Read the Doomsday Clock</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            How to Read the <span className="text-doom">Doomsday Clock</span>: A
            Beginner&apos;s Guide
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

          {/* Current clock context */}
          <div className="doom-accent-card p-4 flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                <strong>Current Reading:</strong> The Doomsday Clock stands at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight
              </p>
              <p className="text-xs text-muted-foreground">
                The closest the clock has ever been &mdash; this guide will help
                you understand exactly what that means
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The Basics */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Basics: Midnight = Catastrophe
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock uses one of the simplest and most powerful
              metaphors in science communication: a clock counting down to
              midnight. Midnight represents global catastrophe &mdash; the point
              at which humanity has caused irreversible, civilization-ending
              damage to itself or the planet. This could mean nuclear war,
              runaway climate collapse, a pandemic engineered through
              biotechnology, or any combination of existential threats.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The core concept is straightforward. The closer the clock is to
              midnight, the greater the danger humanity faces. The further from
              midnight, the safer we are. When the Bulletin of the Atomic
              Scientists moves the clock forward (closer to midnight), they are
              saying that global threats have intensified. When they move it
              backward, they are recognizing that positive developments &mdash;
              diplomatic breakthroughs, arms reductions, climate agreements
              &mdash; have reduced the overall level of existential risk.
            </p>
            <p className="text-foreground leading-relaxed">
              The clock was created in 1947 by scientists who had worked on the
              Manhattan Project and understood, firsthand, the destructive power
              humanity had unleashed. It started at 7 minutes to midnight. Since
              then, it has been adjusted 28 times, reflecting the evolving
              landscape of existential threats. Today, the clock accounts for
              far more than nuclear weapons alone &mdash; it incorporates
              climate change, disruptive technologies like artificial
              intelligence, and biosecurity risks into its assessment.
            </p>
          </section>

          {/* Section 2: Minutes vs. Seconds */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              <TrendingUp className="w-5 h-5 inline mr-2" />
              Minutes vs. Seconds: What Changed
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For most of its history &mdash; from 1947 to 2019 &mdash; the
              Doomsday Clock was measured in minutes. The range has spanned from
              2 minutes to midnight (the most dangerous, reached in 1953 and
              again in 2018) to 17 minutes to midnight (the safest, reached in
              1991 after the end of the Cold War). For seven decades, minutes
              provided sufficient granularity to communicate the level of threat.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That changed in January 2020. For the first time in the
              clock&apos;s history, the Bulletin switched to seconds, setting the
              clock at 100 seconds to midnight. This was not a casual formatting
              decision. It was a deliberate and dramatic signal that threat levels
              had entered unprecedented territory &mdash; that the margin of
              safety had become so thin that minutes could no longer capture the
              urgency.
            </p>
            <div className="p-4 rounded-lg bg-doom/5 border border-doom/20 my-6">
              <h4 className="font-semibold text-foreground mb-2">
                The Seconds Era (2020&ndash;Present)
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>2020: 100 seconds &mdash; First-ever seconds-level reading</p>
                <p>2021: 100 seconds &mdash; Held steady amid COVID-19</p>
                <p>2022: 100 seconds &mdash; Unchanged for three consecutive years</p>
                <p>2023: 90 seconds &mdash; Russia-Ukraine war escalation</p>
                <p>2024: 90 seconds &mdash; Held steady</p>
                <p>2025: 89 seconds &mdash; Incremental deterioration</p>
                <p className="text-doom font-medium">
                  2026: 85 seconds &mdash; Current reading, the closest ever
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              The current reading of 85 seconds is even more alarming than the
              initial shift to seconds suggested. In just six years, 15 seconds
              have been lost &mdash; a pace of deterioration that is
              unprecedented in the clock&apos;s nearly eight-decade history. When
              you see a clock reading in seconds rather than minutes, understand
              that this alone signals we are in the most dangerous period the
              Bulletin has ever assessed.
            </p>
          </section>

          {/* Section 3: How to Interpret a Clock Change */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How to Interpret a Clock Change
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin typically announces a new clock setting once per year,
              usually in January or early February. When the announcement comes,
              here is how to interpret what happened:
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-doom/5 border border-doom/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Clock moves FORWARD (closer to midnight)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Threats have increased. The world is in greater danger than the
                  previous year. Nuclear risks, climate deterioration, or
                  technology-related dangers have worsened in the Bulletin&apos;s
                  assessment. This is always cause for serious concern.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Clock moves BACKWARD (further from midnight)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Positive developments have occurred. Treaties have been signed,
                  diplomatic breakthroughs achieved, or significant policy
                  actions taken. This has happened eight times in the
                  clock&apos;s history and always followed concrete human action
                  to reduce risk.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Clock STAYS THE SAME
                </h4>
                <p className="text-sm text-muted-foreground">
                  The overall risk level is roughly unchanged from the previous
                  year. This does not mean nothing happened &mdash; it means that
                  positive and negative developments roughly balanced each other,
                  or that the situation remained static.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The <em>size</em> of the movement matters too. A small move, like
              the shift from 90 to 89 seconds in 2025, signals incremental
              deterioration &mdash; things are getting worse, but not
              dramatically so. A large move tells a very different story. When
              the clock jumped from 10 minutes to 17 minutes in 1991 after the
              Cold War ended, that seven-minute leap signaled a transformative,
              historic reduction in existential risk.
            </p>
            <p className="text-foreground leading-relaxed">
              Similarly, the 2023 move from 100 to 90 seconds &mdash; a
              ten-second jump forward &mdash; was one of the most alarming
              single adjustments in the clock&apos;s history, driven by
              Russia&apos;s invasion of Ukraine and explicit nuclear threats.
              Pay attention not just to direction, but to magnitude.
            </p>
          </section>

          {/* Section 4: What 85 Seconds Actually Means */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What {currentTime.display} Actually Means
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The current setting of{" "}
              <span className="text-doom font-bold">
                {currentTime.display} to midnight
              </span>{" "}
              means that the Bulletin&apos;s experts &mdash; including Nobel
              Laureates and leading researchers in nuclear policy, climate
              science, and emerging technologies &mdash; assess that humanity
              faces the greatest existential risk in the clock&apos;s 79-year
              history. Every previous era, including the height of the Cold War
              when thousands of nuclear weapons were on hair-trigger alert, has
              been assessed as less dangerous than the present moment.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              It is critical to understand what this is and is not. It is a call
              to action, not a prediction of imminent doom. The Bulletin is not
              saying the world will end tomorrow. They are saying that the
              combination of risks &mdash; nuclear, climatic, technological,
              biological &mdash; has never been this severe, and that without
              decisive action, the trajectory leads toward catastrophe.
            </p>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-semibold text-foreground mb-3">
                Historical Context: A Visual Scale
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-green-400 w-20 shrink-0 text-right">
                    17 min
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-green-500/20">
                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{ width: "12%" }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-40 shrink-0">
                    Safest (1991)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-blue-400 w-20 shrink-0 text-right">
                    7 min
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-blue-500/20">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: "30%" }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-40 shrink-0">
                    Creation (1947)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-yellow-400 w-20 shrink-0 text-right">
                    2 min
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-yellow-500/20">
                    <div
                      className="h-full rounded-full bg-yellow-500"
                      style={{ width: "70%" }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-40 shrink-0">
                    Most dangerous Cold War (1953)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-doom w-20 shrink-0 text-right">
                    85 sec
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-doom/20">
                    <div
                      className="h-full rounded-full bg-doom"
                      style={{ width: "92%" }}
                    />
                  </div>
                  <span className="text-xs text-doom font-medium w-40 shrink-0">
                    Now (2026)
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: What the Clock Does NOT Tell You */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What the Clock Does NOT Tell You
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is widely recognized, but it is also widely
              misunderstood. Here are the most common misconceptions and the
              reality behind each one:
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  It is NOT a countdown timer
                </h4>
                <p className="text-sm text-muted-foreground">
                  The clock does not tick in real-time. It does not lose a second
                  every second. It is only adjusted by the Bulletin&apos;s
                  Science and Security Board, typically once per year, based on a
                  comprehensive review of global threats.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  It does NOT predict when the world will end
                </h4>
                <p className="text-sm text-muted-foreground">
                  You cannot divide the remaining seconds by any rate to
                  calculate a date of doom. The clock measures current risk
                  level, not a timeline to destruction. Midnight is a symbol,
                  not a scheduled event.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  It does NOT measure one specific threat
                </h4>
                <p className="text-sm text-muted-foreground">
                  The clock reflects the combined assessment of nuclear risk,
                  climate change, disruptive technologies, and biosecurity
                  threats. No single factor determines the setting &mdash; it is
                  the convergence of multiple risks that drives the reading.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  It is NOT set by a computer or algorithm
                </h4>
                <p className="text-sm text-muted-foreground">
                  The clock is set by human judgment &mdash; specifically, the{" "}
                  <Link
                    to="/blog/who-controls-doomsday-clock"
                    className="text-doom hover:underline"
                  >
                    Science and Security Board
                  </Link>
                  , a group of experts who consult with the Bulletin&apos;s Board
                  of Sponsors, which includes Nobel Laureates. It is a
                  deliberative, evidence-based process.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  It does NOT change every day
                </h4>
                <p className="text-sm text-muted-foreground">
                  The clock is updated roughly once per year, usually in January
                  or early February. Between announcements, the setting remains
                  fixed regardless of daily news events. The Bulletin takes a
                  long view, assessing the overall trajectory of existential
                  risk rather than reacting to individual headlines.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              Understanding these limitations actually makes the clock more
              useful, not less. When you know what the clock is designed to
              communicate &mdash; and what it is not &mdash; you can interpret
              each annual announcement with the appropriate context and
              seriousness.
            </p>
          </section>

          {/* Section 6: Why Understanding the Clock Matters */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why Understanding the Clock Matters
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is one of the most effective science
              communication tools ever created. Since 1947, it has translated
              the complex, technical realities of existential risk into a
              single, universally understandable image. When the clock moves,
              it makes headlines in every major news outlet worldwide. That
              visibility is not an accident &mdash; it is the entire point.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Understanding how to read the Doomsday Clock means understanding
              the existential risks facing humanity. It means being able to
              look beyond the headline and grasp the substance: which threats
              are worsening, which are improving, and what the overall
              trajectory looks like. It means understanding that the clock can
              move backward &mdash; that the threats it measures are not
              inevitable, and that informed public pressure and policy action
              have historically made a real difference.
            </p>
            <p className="text-foreground leading-relaxed">
              When you see the next headline about the Doomsday Clock moving,
              you now know exactly what it means and why it matters. You know
              how to read the direction and magnitude of the change. You know
              what the current setting tells us about the state of the world.
              And you know that the clock is not a prophecy of doom &mdash; it
              is a warning, and warnings exist so that we can act on them.
            </p>
          </section>
        </div>

        {/* Related articles */}
        <RelatedArticles
          currentSlug="how-to-read-doomsday-clock"
          slugs={[
            "what-does-89-seconds-to-midnight-mean",
            "doomsday-clock-history-timeline",
            "how-is-doomsday-clock-calculated",
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
