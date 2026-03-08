import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, TrendingUp } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClock2026() {
  useEffect(() => {
    updateMetaTags({
      title: "Doomsday Clock 2026: What Changed and Why | DoomsdayClock.net",
      description:
        "The Bulletin moved the Doomsday Clock from 89 to 85 seconds to midnight in February 2026. A deep dive on what drove the change and what 85 seconds means in context.",
      path: "/blog/doomsday-clock-2026",
      newsKeywords:
        "doomsday clock 2026, doomsday clock 85 seconds, doomsday clock update 2026, bulletin atomic scientists 2026",
      publishedTime: "2026-03-07T00:00:00Z",
      modifiedTime: "2026-03-07T00:00:00Z",
      section: "Update",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Doomsday Clock 2026: What Changed and Why",
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
        "@id": "https://doomsdayclock.net/blog/doomsday-clock-2026",
      },
      description:
        "The Bulletin moved the Doomsday Clock from 89 to 85 seconds in February 2026. A deep dive on the change.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Update",
      keywords: [
        "doomsday clock 2026",
        "85 seconds to midnight",
        "bulletin of atomic scientists",
        "nuclear threat 2026",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 1800,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "dc-2026");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-blog-schema="dc-2026"]');
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
          <span className="text-foreground">Doomsday Clock 2026</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
            </span>
            Update
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock 2026:</span>{" "}
            What Changed and Why
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
                Set on {currentTime.lastUpdated} &mdash; a 4-second advance
                from the 2025 setting of 89 seconds
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The 2026 Announcement */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The 2026 Announcement
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              On February 4, 2026, the Bulletin of the Atomic Scientists
              moved the Doomsday Clock from 89 seconds to 85 seconds to
              midnight. The announcement was made at the Bulletin&apos;s
              annual press conference in Washington D.C., where members of
              the Science and Security Board laid out the reasoning behind
              the most significant single-year advance since the clock
              entered the seconds range in 2020.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This is the fourth consecutive year the clock has moved
              forward &mdash; a streak of sustained deterioration not seen
              since the darkest years of the Cold War arms race. But the
              magnitude of this advance is what sets 2026 apart. In 2025,
              the clock moved just one second, from 90 to 89 &mdash; a
              cautious, incremental adjustment that signaled the Bulletin
              saw things getting worse but not dramatically so. The
              four-second jump to 85 seconds represents a sharp
              acceleration, a signal from the world&apos;s leading risk
              scientists that the pace of global deterioration has
              quickened.
            </p>
            <p className="text-foreground leading-relaxed">
              To understand why the Bulletin made this move, we need to
              examine the specific threats they cited, how 85 seconds
              compares to the clock&apos;s nearly eight-decade history, and
              what this trajectory means for the years ahead.
            </p>
          </section>

          {/* Section 2: Why 85 Seconds? The Key Factors */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why 85 Seconds? The Key Factors
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The Bulletin&apos;s Science and Security Board evaluates
              existential threats across several interconnected domains.
              In 2026, every major threat category worsened compared to
              the previous year. Here are the four primary drivers behind
              the decision to advance the clock by four seconds.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {/* Nuclear Weapons */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Nuclear Weapons
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Russia-Ukraine war continues into its fourth year with
                    persistent nuclear rhetoric from Moscow
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    US-China tensions escalating over the Taiwan Strait,
                    with increased military posturing on both sides
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    North Korea conducting advanced ICBM tests with
                    improved range and accuracy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Collapse of remaining arms control frameworks after
                    New START expired without a successor
                  </li>
                </ul>
              </div>

              {/* Climate Change */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Climate Change
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    2025 confirmed as the hottest year on record,
                    surpassing 2024&apos;s previous record
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    COP30 emissions targets being missed by most major
                    economies, widening the gap between pledges and action
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Arctic sea ice hitting record lows, accelerating
                    feedback loops that compound warming
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Extreme weather events increasing in frequency and
                    severity across every continent
                  </li>
                </ul>
              </div>

              {/* Disruptive Technologies */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Disruptive Technologies
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    AI-enabled autonomous weapons proliferating across
                    multiple nations without governance frameworks
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Cyber attacks on critical infrastructure increasing in
                    sophistication and frequency
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Deepfakes undermining democratic processes and eroding
                    public trust in institutions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Lack of binding international AI governance despite
                    calls from scientists and civil society
                  </li>
                </ul>
              </div>

              {/* Middle East Conflict */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Middle East Conflict
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Israeli-Palestinian conflict continuing with no
                    ceasefire or diplomatic resolution in sight
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Iran&apos;s nuclear program advancing, with enrichment
                    levels approaching weapons-grade thresholds
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Regional proxy wars expanding, drawing in state and
                    non-state actors across the broader Middle East
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Diplomatic channels narrowing as trust between
                    regional and global powers erodes
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              The Bulletin emphasized that these threat categories do not
              exist in isolation. Nuclear brinkmanship is amplified by AI
              misinformation. Climate disasters destabilize regions
              already on the brink of conflict. The erosion of
              international institutions reduces the world&apos;s
              capacity to respond to any single crisis, let alone the
              cascading combination currently in play. It is this
              convergence &mdash; not any single event &mdash; that
              drove the four-second advance.
            </p>
          </section>

          {/* Section 3: From 89 to 85: What 4 Seconds Means */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              From 89 to 85: What 4 Seconds Means
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              In the Bulletin&apos;s history, multi-second moves indicate
              that the Science and Security Board sees serious,
              broad-based deterioration &mdash; not just incremental
              worsening, but a qualitative shift in the threat landscape.
              To put the 2026 advance in perspective, consider the
              clock&apos;s recent trajectory.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2023
                  </span>
                  <span className="text-sm text-muted-foreground">
                    90 seconds &mdash; 10-second jump due to Ukraine war
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2024
                  </span>
                  <span className="text-sm text-muted-foreground">
                    90 seconds &mdash; unchanged (a rare pause)
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2025
                  </span>
                  <span className="text-sm text-muted-foreground">
                    89 seconds &mdash; 1-second move (incremental)
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
              The pattern tells a clear story. The 2023 jump of 10
              seconds was a crisis response &mdash; a direct reaction to
              Russia&apos;s invasion of Ukraine and the explicit nuclear
              threats that accompanied it. The 2024 hold at 90 seconds
              was a rare pause, reflecting a world that had not improved
              but had not dramatically worsened either. The 2025
              one-second advance was cautious, signaling incremental
              deterioration. And now the 2026 four-second jump represents
              an acceleration: the Bulletin sees threats compounding
              faster than in the previous two years.
            </p>
            <p className="text-foreground leading-relaxed">
              This pattern suggests the Bulletin is responding to an
              accumulation of threats rather than a single precipitating
              crisis. Unlike 2023, where the Ukraine invasion provided a
              clear catalyst, 2026 reflects a world where multiple
              overlapping emergencies &mdash; nuclear, climatic,
              technological, and geopolitical &mdash; are reinforcing
              each other in ways that make the whole greater than the sum
              of its parts.
            </p>
          </section>

          {/* Section 4: The Bulletin's Statement */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Bulletin&apos;s Statement
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin&apos;s official 2026 statement was among its
              most urgent in recent memory. The Science and Security
              Board &mdash; which includes Nobel laureates and leading
              researchers in nuclear policy, climate science, and
              emerging technologies &mdash; chose unusually direct
              language to convey the severity of the moment.
            </p>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10 my-6">
              <p className="text-foreground leading-relaxed italic mb-3">
                &ldquo;Escalating nuclear risks remain the primary driver
                of the clock&apos;s advance. The erosion of arms control,
                the modernization of arsenals by all nine nuclear-armed
                states, and the persistent threat of nuclear use in
                active conflicts have created a threat environment
                without precedent in the post-Cold War era.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">
                &mdash; Bulletin of the Atomic Scientists, February 2026
              </p>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              On climate change, the Board stated that the planet is
              &ldquo;at or near irreversible tipping points&rdquo; that
              could trigger cascading failures in Earth&apos;s climate
              systems. They pointed to the continued failure of major
              emitters to meet their own targets, the record-breaking
              temperatures of 2025, and the accelerating loss of polar
              ice as evidence that the window for meaningful climate
              action is closing.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              On technology, the Board noted that the threats posed by
              artificial intelligence are &ldquo;no longer
              theoretical.&rdquo; AI-powered autonomous weapons are being
              deployed in active conflict zones. Deepfake technology is
              being used at scale to manipulate elections and erode public
              trust. And the integration of AI into military
              decision-making systems &mdash; including those related to
              nuclear command and control &mdash; introduces new and
              poorly understood risks of catastrophic miscalculation.
            </p>
            <p className="text-foreground leading-relaxed">
              Perhaps most concerning was the Board&apos;s assessment of
              the international order itself. They described international
              cooperation as &ldquo;at its lowest point in decades,&rdquo;
              with multilateral institutions weakened, diplomatic channels
              narrowing, and trust between major powers at a nadir. This
              erosion of the cooperative infrastructure that has
              historically managed existential risk may be the most
              dangerous development of all &mdash; because without
              functioning institutions, there is no mechanism to address
              any of the other threats.
            </p>
          </section>

          {/* Section 5: How 85 Seconds Compares to History */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How 85 Seconds Compares to History
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock has been set{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-doom hover:underline"
              >
                27 times since 1947
              </Link>
              . Its range spans from a high of 17 minutes to midnight in
              1991 to its current record low of 85 seconds. To understand
              where we stand today, it helps to see the recent trajectory
              alongside the clock&apos;s most notable historical
              positions.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  2020
                </span>
                <span className="text-sm text-muted-foreground">
                  100 seconds &mdash; broke the minutes barrier for the
                  first time
                </span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  2023
                </span>
                <span className="text-sm text-muted-foreground">
                  90 seconds &mdash; Ukraine war
                </span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  2024
                </span>
                <span className="text-sm text-muted-foreground">
                  90 seconds &mdash; unchanged
                </span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  2025
                </span>
                <span className="text-sm text-muted-foreground">
                  89 seconds &mdash; incremental advance
                </span>
              </div>
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30 flex items-center justify-between">
                <span className="text-sm font-bold text-doom">
                  2026
                </span>
                <span className="text-sm text-doom font-medium">
                  85 seconds &mdash; closest EVER to midnight
                </span>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-between">
                <span className="text-sm font-medium text-green-400">
                  1991
                </span>
                <span className="text-sm text-green-400">
                  17 minutes &mdash; farthest ever (end of Cold War)
                </span>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The historical comparison is sobering. At 85 seconds, the
              clock now stands closer to midnight than it did during the
              Cuban Missile Crisis of 1962, when the world came within
              hours of nuclear war and the clock was set at 7 minutes.
              It is closer than the peak of the Cold War arms race in
              1953, when the US and Soviet Union tested hydrogen bombs
              and the clock stood at 2 minutes. The shift from minutes
              to seconds in 2020 was itself historic &mdash; but the
              continued acceleration since then is what has scientists
              most alarmed.
            </p>
            <p className="text-foreground leading-relaxed">
              It took 73 years, from 1947 to 2020, for the clock to
              reach 100 seconds. It took just six more years to shave
              off another 15 seconds. The acceleration is not gradual
              &mdash; it is compounding, driven by the simultaneous
              worsening of threats across every domain the Bulletin
              evaluates.
            </p>
          </section>

          {/* Section 6: What Comes Next */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Comes Next
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The next Doomsday Clock announcement is expected in{" "}
              <span className="text-doom font-semibold">
                {currentTime.nextUpdate}
              </span>
              . Given the current trajectory &mdash; four consecutive
              years of forward movement, with the most recent advance
              being the largest &mdash; the central question is whether
              this trend will continue, accelerate, or finally break.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Will the clock keep moving forward? The answer depends on
              whether any of the major threat vectors show meaningful
              improvement over the coming months. A ceasefire in Ukraine,
              a new arms control framework, a binding international AI
              governance treaty, or a breakthrough in climate policy could
              all provide reasons for the Bulletin to hold the clock
              steady or even move it back. But none of these developments
              appear imminent as of early 2026.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              There is also a deeper question: is the clock approaching a
              floor? At some point, the Bulletin will face the question
              of what happens as the clock nears zero. Can it keep
              advancing in single-digit increments indefinitely, or does
              the symbolism of midnight impose a practical limit on how
              close the clock can get? The Bulletin has not addressed
              this question publicly, but it looms larger with each
              forward move.
            </p>
            <p className="text-foreground leading-relaxed">
              For a detailed analysis of the scenarios that could shape
              the next announcement, read our{" "}
              <Link
                to="/blog/doomsday-clock-2027-prediction"
                className="text-doom hover:underline"
              >
                2027 Doomsday Clock prediction
              </Link>
              . To explore how different events might affect the
              clock&apos;s position, try the{" "}
              <Link
                to="/#what-if"
                className="text-doom hover:underline"
              >
                What If Simulator
              </Link>
              .
            </p>
          </section>
        </div>

        {/* CTA: 2027 Prediction */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Explore Our 2027 Prediction
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            What could push the clock forward &mdash; or pull it back
            &mdash; in January 2027? Read our full scenario analysis.
          </p>
          <Link
            to="/blog/doomsday-clock-2027-prediction"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            Read the 2027 Prediction
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-8 doom-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Related Articles
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              to="/blog/doomsday-clock-history-timeline"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock History: Every Change from 1947 to 2026
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Explainer
              </p>
            </Link>
            <Link
              to="/blog/doomsday-clock-2027-prediction"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock 2027 Prediction: Will It Move Closer?
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Analysis
              </p>
            </Link>
            <Link
              to="/#timeline"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Interactive Doomsday Clock Timeline
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Interactive
              </p>
            </Link>
            <Link
              to="/#what-if"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                What If Simulator: Model Future Scenarios
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Interactive
              </p>
            </Link>
          </div>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-2026"
          slugs={[
            "doomsday-clock-2027-prediction",
            "doomsday-clock-history-timeline",
            "what-does-89-seconds-to-midnight-mean",
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
