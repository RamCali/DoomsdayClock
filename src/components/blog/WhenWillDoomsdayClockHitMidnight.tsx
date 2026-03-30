import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WhenWillDoomsdayClockHitMidnight() {
  useEffect(() => {
    updateMetaTags({
      title:
        "When Will the Doomsday Clock Hit Midnight? Predictions & Analysis | DoomsdayClock.net",
      description:
        "Will the Doomsday Clock ever reach midnight? Analysis of the clock's trajectory, what midnight represents, and whether the clock could actually hit zero.",
      path: "/blog/when-will-doomsday-clock-hit-midnight",
      newsKeywords:
        "when will doomsday clock hit midnight, doomsday clock midnight prediction, will doomsday clock reach midnight, what year will doomsday clock go off, doomsday clock prediction, how far from midnight",
      publishedTime: "2026-03-15T00:00:00Z",
      modifiedTime: "2026-03-15T00:00:00Z",
      section: "Analysis",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "When Will the Doomsday Clock Hit Midnight? Predictions & Analysis",
      datePublished: "2026-03-15T00:00:00Z",
      dateModified: "2026-03-15T00:00:00Z",
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
          "https://doomsdayclock.net/blog/when-will-doomsday-clock-hit-midnight",
      },
      description:
        "Will the Doomsday Clock ever reach midnight? Analysis of the clock's trajectory, what midnight represents, and whether the clock could actually hit zero.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Analysis",
      keywords: [
        "doomsday clock midnight",
        "doomsday clock prediction",
        "will doomsday clock reach midnight",
        "doomsday clock trajectory",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 1800,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Will the Doomsday Clock ever hit midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Bulletin of the Atomic Scientists has not stated whether the clock could reach midnight. The clock is designed to motivate action, not predict doom. It has moved backward 8 times in its history, proving that the future is not predetermined. Whether it reaches midnight depends on the choices made by leaders and citizens regarding nuclear weapons, climate change, and emerging technologies.",
          },
        },
        {
          "@type": "Question",
          name: "What year will the Doomsday Clock reach midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no specific year predicted for the Doomsday Clock to reach midnight. The clock does not move on a fixed schedule or trajectory — it responds to real-world developments. If current threats are addressed through diplomacy, arms control, and climate action, the clock could move backward instead. No mathematical extrapolation of its past movements can predict its future position.",
          },
        },
        {
          "@type": "Question",
          name: "Has the Doomsday Clock ever reached midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. In its entire 79-year history since 1947, the Doomsday Clock has never reached midnight. The closest it has been is 85 seconds to midnight, set in February 2026. The clock has moved backward 8 times, demonstrating that progress toward safety is possible even from dangerous positions.",
          },
        },
        {
          "@type": "Question",
          name: "What would happen if the Doomsday Clock hit midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If the Doomsday Clock reached midnight, it would mean the Bulletin of the Atomic Scientists has assessed that existential catastrophe — such as nuclear war, civilizational collapse, or irreversible climate breakdown — has become inevitable or has already occurred. Nothing literally 'triggers' at midnight; it is a symbolic assessment, not a mechanism.",
          },
        },
        {
          "@type": "Question",
          name: "How fast is the Doomsday Clock moving toward midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The clock has accelerated significantly in recent years. It took 73 years (1947-2020) to move from 7 minutes to 100 seconds. It then took just 6 years (2020-2026) to move another 15 seconds to 85 seconds. The 2026 advance of 4 seconds was the largest single-year jump in the seconds era. However, the clock does not move at a constant rate and could slow, stop, or reverse at any time.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "dc-hit-midnight");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "dc-hit-midnight-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="dc-hit-midnight"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="dc-hit-midnight-faq"]'
      );
      if (faqEl) faqEl.remove();
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
          <span className="text-foreground">
            When Will the Clock Hit Midnight?
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            Analysis
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            When Will the Doomsday Clock{" "}
            <span className="text-doom">Hit Midnight?</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 15, 2026
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
                The Doomsday Clock is currently at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight
              </p>
              <p className="text-xs text-muted-foreground">
                Set on {currentTime.lastUpdated} &mdash; the closest it has
                ever been
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Has the Doomsday Clock Ever Hit Midnight?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              No. In its entire 79-year history, the Doomsday Clock has never
              reached midnight. Since its creation in 1947, the clock has been
              set 27 times, ranging from a high of 17 minutes to midnight in
              1991 to its current record low of{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>
              . Despite decades of nuclear brinkmanship, climate inaction, and
              technological disruption, the clock has always remained before
              midnight.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This fact is both reassuring and important to understand. The
              Doomsday Clock was designed as a warning, not a countdown. Its
              purpose is to communicate the current level of existential danger
              and motivate action to reduce it. The fact that midnight has never
              been reached does not mean the threats are not real &mdash; it
              means that, so far, humanity has always managed to step back from
              the brink. Sometimes barely.
            </p>
            <p className="text-foreground leading-relaxed">
              But the trajectory of the past six years raises an inevitable
              question: at the current pace, when &mdash; if ever &mdash;
              could the clock reach midnight? To answer that, we need to look
              at the data, the Bulletin&apos;s approach, and the nature of the
              threats the clock measures.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Clock&apos;s Current Trajectory
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The Doomsday Clock has been on a sustained downward trajectory
              since 2020, when it moved to 100 seconds to midnight &mdash;
              breaking the minutes barrier for the first time in its history.
              Since then, the clock has moved forward every year it has been
              adjusted, accelerating in 2026.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2020
                  </span>
                  <span className="text-sm text-muted-foreground">
                    100 seconds &mdash; broke the minutes barrier
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2023
                  </span>
                  <span className="text-sm text-muted-foreground">
                    90 seconds &mdash; 10-second jump (Ukraine war)
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2024
                  </span>
                  <span className="text-sm text-muted-foreground">
                    90 seconds &mdash; unchanged
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2025
                  </span>
                  <span className="text-sm text-muted-foreground">
                    89 seconds &mdash; 1-second advance
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-doom">
                    2026
                  </span>
                  <span className="text-sm text-doom font-medium">
                    85 seconds &mdash; 4-second jump (acceleration)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The pattern tells a clear story: the clock is not just moving
              forward, it is accelerating. It took three years (2020&ndash;2023)
              to move 10 seconds. Then one year produced no change, another
              moved 1 second, and then 2026 brought a 4-second jump. In total,
              the clock has shed 15 seconds in just six years &mdash; after it
              took 73 years to get from 7 minutes to 100 seconds. The pace of
              deterioration is historically unprecedented.
            </p>
            <p className="text-foreground leading-relaxed">
              For a full analysis of what drove the 2026 advance, see our{" "}
              <Link
                to="/blog/doomsday-clock-2026"
                className="text-atomic hover:underline"
              >
                Doomsday Clock 2026 report
              </Link>
              .
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              If the Current Trend Continues
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              It is tempting to extrapolate the clock&apos;s recent trajectory
              and predict when it might reach midnight. If the clock continues
              to lose seconds at the average rate of the past six years
              &mdash; roughly 2.5 seconds per year &mdash; it would reach
              midnight in approximately 34 years, around 2060. If the 2026
              pace of 4 seconds per year were sustained, midnight would arrive
              in about 21 years, around 2047.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But these extrapolations are fundamentally misleading, and it is
              important to explain why. The Doomsday Clock does not move at a
              constant rate. It is not a physical clock ticking down at a
              measurable pace. It is a barometer that responds to real-world
              developments &mdash; developments that are inherently
              unpredictable. The clock has moved backward 8 times in its
              history. It stayed unchanged for years at a stretch. It has
              jumped dramatically in a single year and then held steady the
              next.
            </p>
            <p className="text-foreground leading-relaxed">
              Mathematical extrapolation of the Doomsday Clock is like
              predicting the weather in 2060 based on this week&apos;s
              forecast. The inputs &mdash; geopolitics, technology, climate
              science, human decisions &mdash; are too complex and
              unpredictable to reduce to a linear trend. The numbers above
              illustrate the pace of recent deterioration, but they should not
              be read as a prediction. They are a warning about the trajectory,
              not a forecast of the destination.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Would Cause Midnight?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For the Bulletin&apos;s Science and Security Board to set the
              clock to midnight, the world would need to cross a threshold
              from which recovery is no longer plausible. This is not a single
              event but a convergence of catastrophic failures &mdash; a
              scenario where the systems designed to prevent existential
              catastrophe have all broken down simultaneously.
            </p>
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Full-Scale Nuclear War
                </h4>
                <p className="text-sm text-muted-foreground">
                  A deliberate nuclear first strike or catastrophic
                  miscalculation that triggers a full-scale exchange between
                  major nuclear powers. Even a &quot;limited&quot; exchange
                  would cause hundreds of millions of casualties, nuclear
                  winter, and global agricultural collapse. This remains the
                  most immediate pathway to midnight.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Civilizational Collapse
                </h4>
                <p className="text-sm text-muted-foreground">
                  A cascading failure of global systems &mdash; economic
                  collapse, mass famine, pandemic, and conflict &mdash;
                  occurring simultaneously and overwhelming the
                  international community&apos;s capacity to respond. This
                  could be triggered by a combination of climate tipping
                  points, supply chain disruption, and geopolitical
                  fragmentation.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Irreversible Climate Breakdown
                </h4>
                <p className="text-sm text-muted-foreground">
                  The crossing of multiple irreversible climate tipping
                  points &mdash; permafrost methane release, ice sheet
                  collapse, Amazon dieback &mdash; that trigger runaway
                  warming beyond any possibility of human intervention. This
                  scenario would unfold over decades rather than hours, but
                  the point of no return could be identified in advance by
                  climate scientists.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Catastrophic Technology Failure
                </h4>
                <p className="text-sm text-muted-foreground">
                  An AI-triggered nuclear launch, a cyberattack that
                  disables global infrastructure, or the release of an
                  engineered pathogen. These scenarios are newer but
                  increasingly realistic as technology outpaces governance
                  frameworks designed to contain it.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              For a detailed exploration of what midnight represents, read our
              companion article:{" "}
              <Link
                to="/blog/what-happens-doomsday-clock-midnight"
                className="text-atomic hover:underline"
              >
                What Happens When the Doomsday Clock Reaches Midnight?
              </Link>
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why the Clock Probably Won&apos;t Hit Midnight
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Despite the alarming trajectory, there are structural reasons
              why the Doomsday Clock is unlikely to actually reach midnight.
              The first is the Bulletin&apos;s own approach to the clock.
              The Bulletin has always described the clock as a tool for
              motivating action, not documenting catastrophe. If the clock
              reached midnight, it would mean the warning had failed &mdash;
              and the Bulletin would likely have far bigger concerns than
              updating a symbolic timepiece.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The second reason is practical: as the clock gets closer to
              midnight, each second carries more symbolic weight. Moving from
              100 seconds to 90 was dramatic. Moving from 90 to 85 was
              alarming. Moving from 10 seconds to 5 would be extraordinary.
              The Bulletin is likely to become increasingly conservative with
              forward movements as the clock approaches zero, reserving the
              final seconds for genuinely unprecedented developments. The
              asymptotic pressure of midnight itself creates a natural
              deceleration.
            </p>
            <p className="text-foreground leading-relaxed">
              The third reason is historical. The clock has moved backward 8
              times. The largest reversal &mdash; from 10 minutes to 17
              minutes in 1991 &mdash; came after one of the most dangerous
              periods in human history. The Cold War arms race brought the
              world repeatedly to the brink of nuclear annihilation, yet the
              clock ended up at its safest setting ever. This pattern
              demonstrates that progress is not just possible but has been
              achieved repeatedly, even from the most dangerous positions.
              Read our full analysis of{" "}
              <Link
                to="/blog/can-doomsday-clock-go-back"
                className="text-atomic hover:underline"
              >
                every time the clock moved backward
              </Link>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What the Clock ACTUALLY Predicts
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock does not predict that the world will end on
              a specific date. It does not forecast nuclear war, climate
              collapse, or technological catastrophe. What it does is
              something more nuanced and arguably more useful: it
              communicates the overall level of existential risk as assessed
              by some of the world&apos;s leading scientists and security
              experts.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              At{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, the clock is saying: the combination of nuclear
              threats, climate change, and disruptive technologies has
              created a danger environment without precedent in the
              post-World War II era. It is not saying catastrophe is
              inevitable. It is saying the conditions for catastrophe are
              more favorable than they have ever been &mdash; and that
              urgent action is needed to change those conditions.
            </p>
            <p className="text-foreground leading-relaxed">
              The distinction matters. A prediction of doom invites fatalism.
              A warning about risk invites action. The Doomsday Clock is,
              and has always been, a call to action. Its purpose is not to
              tell us when the world will end, but to remind us that the
              choices we make &mdash; as citizens, as voters, as members of
              a global community &mdash; determine whether it does.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The More Important Question
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Rather than asking &quot;when will the clock hit
              midnight?&quot; the more productive question is: &quot;what
              can we do to move it backward?&quot; The{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-atomic hover:underline"
              >
                clock&apos;s history
              </Link>{" "}
              provides a clear answer. Every backward movement was driven by
              concrete diplomatic achievements: arms control treaties,
              international cooperation, and the political will to prioritize
              survival over short-term advantage.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Today, the path backward would require progress on multiple
              fronts simultaneously. A new strategic arms control framework
              between the US, Russia, and China. Binding international
              commitments on climate change backed by real emissions
              reductions. An AI governance framework that prevents the most
              dangerous applications of artificial intelligence. Resolution
              or de-escalation of active conflicts. None of these is
              impossible &mdash; arms control treaties have been negotiated
              under far worse conditions.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Partial Test Ban Treaty was signed less than a year after
              the Cuban Missile Crisis. The INF Treaty was signed during one
              of the most confrontational periods of the Cold War. The clock
              moved from 10 minutes to 17 minutes in a single year. History
              shows that dramatic progress is possible when the political
              will exists.
            </p>
            <p className="text-foreground leading-relaxed">
              At{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, the urgency of finding that will has never been
              greater. The clock is still ticking. Midnight has not arrived.
              And what happens next is not predetermined &mdash; it depends
              on the choices made by all of us in the months and years ahead.
            </p>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Will the Doomsday Clock ever hit midnight?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Bulletin has not stated whether the clock could reach
                  midnight. The clock is designed to motivate action, not
                  predict doom. It has moved backward 8 times in its history,
                  proving that the future is not predetermined. Whether it
                  reaches midnight depends on the choices made by leaders and
                  citizens regarding nuclear weapons, climate change, and
                  emerging technologies.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What year will the Doomsday Clock reach midnight?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  There is no specific year predicted for the Doomsday Clock
                  to reach midnight. The clock does not move on a fixed
                  schedule or trajectory &mdash; it responds to real-world
                  developments. If current threats are addressed through
                  diplomacy, arms control, and climate action, the clock could
                  move backward instead.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Has the Doomsday Clock ever reached midnight?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No. In its entire 79-year history since 1947, the Doomsday
                  Clock has never reached midnight. The closest it has been is{" "}
                  {currentTime.display} to midnight, set in February 2026.
                  The clock has moved backward 8 times, demonstrating that
                  progress toward safety is possible even from dangerous
                  positions.
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What would happen if the Doomsday Clock hit midnight?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If the Doomsday Clock reached midnight, it would mean the
                  Bulletin has assessed that existential catastrophe &mdash;
                  such as nuclear war, civilizational collapse, or
                  irreversible climate breakdown &mdash; has become
                  inevitable or has already occurred. Nothing literally
                  &quot;triggers&quot; at midnight; it is a symbolic
                  assessment, not a mechanism. Read more about{" "}
                  <Link
                    to="/blog/what-happens-doomsday-clock-midnight"
                    className="text-atomic hover:underline"
                  >
                    what happens at midnight
                  </Link>
                  .
                </p>
              </div>

              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  How fast is the Doomsday Clock moving toward midnight?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The clock has accelerated significantly in recent years. It
                  took 73 years (1947&ndash;2020) to move from 7 minutes to
                  100 seconds. It then took just 6 years (2020&ndash;2026) to
                  move another 15 seconds to 85 seconds. The 2026 advance of
                  4 seconds was the largest single-year jump in the seconds
                  era. However, the clock does not move at a constant rate
                  and could slow, stop, or reverse at any time.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Model Future Scenarios
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use our What If simulator to explore how different global
            scenarios could push the Doomsday Clock forward toward midnight
            &mdash; or pull it back from the brink.
          </p>
          <Link
            to="/#what-if"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            Try the What If Simulator
          </Link>
        </div>

        {/* Internal cross-links */}
        <div className="mt-8 doom-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Continue Reading
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/blog/what-happens-doomsday-clock-midnight"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                What Happens at Midnight?
              </h4>
              <p className="text-xs text-muted-foreground">
                What the clock&apos;s midnight setting actually represents
                and the catastrophic scenarios it warns about.
              </p>
            </Link>
            <Link
              to="/blog/doomsday-clock-2026"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                Doomsday Clock 2026: What Changed and Why
              </h4>
              <p className="text-xs text-muted-foreground">
                A deep dive on the 4-second advance and the threats behind
                it.
              </p>
            </Link>
            <Link
              to="/blog/can-doomsday-clock-go-back"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                Can the Doomsday Clock Go Back?
              </h4>
              <p className="text-xs text-muted-foreground">
                A history of every reversal and what drove them.
              </p>
            </Link>
            <Link
              to="/blog/doomsday-clock-history-timeline"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                Complete Doomsday Clock Timeline
              </h4>
              <p className="text-xs text-muted-foreground">
                Every change from 1947 to 2026 in one place.
              </p>
            </Link>
          </div>
        </div>

        <RelatedArticles
          currentSlug="when-will-doomsday-clock-hit-midnight"
          slugs={[
            "what-happens-doomsday-clock-midnight",
            "doomsday-clock-2026",
            "can-doomsday-clock-go-back",
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
