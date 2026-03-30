import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, TrendingUp, AlertTriangle } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClock2025() {
  useEffect(() => {
    updateMetaTags({
      title: "Doomsday Clock 2025: Why It Moved to 89 Seconds to Midnight | DoomsdayClock.net",
      description:
        "In January 2025, the Doomsday Clock moved to 89 seconds to midnight — a record at the time. What caused the change from 90 seconds, what 89 seconds means, and how it led to 2026's 85-second setting.",
      path: "/blog/doomsday-clock-2025",
      newsKeywords:
        "doomsday clock 2025, 89 seconds to midnight, doomsday clock update 2025, bulletin atomic scientists 2025, doomsday clock 2025 update, doomsday clock 2025 meaning, what was the doomsday clock in 2025, atomic scientists doomsday clock 2025, doomsday clock 2025 predictions",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Update",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Doomsday Clock 2025: The 89-Second Update Explained",
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
        "@id": "https://doomsdayclock.net/blog/doomsday-clock-2025",
      },
      description:
        "The Doomsday Clock moved to 89 seconds to midnight in January 2025. Full analysis of why it moved and what 89 seconds means.",
      image: "https://doomsdayclock.net/og-image-2025.png",
      articleSection: "Update",
      keywords: [
        "doomsday clock 2025",
        "89 seconds to midnight",
        "bulletin of atomic scientists",
        "nuclear threat 2025",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2000,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "dc-2025");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What was the Doomsday Clock in 2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In January 2025, the Bulletin of the Atomic Scientists moved the Doomsday Clock to 89 seconds to midnight, one second closer than the previous setting of 90 seconds. It was the closest the clock had ever been to midnight at the time.",
          },
        },
        {
          "@type": "Question",
          name: "Why did the Doomsday Clock move in 2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Bulletin cited four primary factors: escalating nuclear risks including Russia-Ukraine tensions and the suspension of New START, the climate crisis with 2024 being the hottest year on record, AI and emerging technology risks such as autonomous weapons and deepfakes, and growing geopolitical instability across the Middle East and weakened international institutions.",
          },
        },
        {
          "@type": "Question",
          name: "What does 89 seconds to midnight mean?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "89 seconds to midnight represented the closest the Doomsday Clock had ever been set at the time, signaling an extreme level of existential danger to humanity. The single-second move from 90 to 89 seconds was deliberate, indicating continued deterioration of global security despite international awareness of the threats.",
          },
        },
        {
          "@type": "Question",
          name: "Has the Doomsday Clock moved since 2025?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. In February 2026, the Bulletin moved the Doomsday Clock further forward to 85 seconds to midnight, a four-second advance that represented the largest single move since the clock entered the seconds range in 2020.",
          },
        },
      ],
    };

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "dc-2025-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector('script[data-blog-schema="dc-2025"]');
      if (el) el.remove();
      const faqEl = document.querySelector('script[data-blog-schema="dc-2025-faq"]');
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
          <span className="text-foreground">Doomsday Clock 2025</span>
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
            <span className="text-doom">Doomsday Clock 2025:</span>{" "}
            The 89-Second Update Explained
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 14, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>

          {/* Update banner */}
          <div className="doom-accent-card p-4 flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Note: The Doomsday Clock has since moved to{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                in February 2026
              </p>
              <p className="text-xs text-muted-foreground">
                This article covers the January 2025 announcement, when the
                clock was set to 89 seconds to midnight.{" "}
                <Link
                  to="/blog/doomsday-clock-2026"
                  className="text-doom hover:underline"
                >
                  Read the 2026 update &rarr;
                </Link>
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The 2025 Doomsday Clock Announcement */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The 2025 Doomsday Clock Announcement
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              In January 2025, the Bulletin of the Atomic Scientists moved
              the Doomsday Clock from 90 seconds to 89 seconds to midnight
              &mdash; one second closer, setting a new record for the
              closest the clock had ever been. The announcement was made at
              the Bulletin&apos;s annual press conference in Washington D.C.,
              where members of the Science and Security Board outlined the
              converging threats that drove the decision.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The one-second advance may sound small, but it carried
              significant symbolic weight. After holding the clock at 90
              seconds for two consecutive years (2023 and 2024), the
              Bulletin&apos;s decision to push it forward signaled that the
              global threat landscape had continued to deteriorate despite
              growing international awareness of existential risks.
            </p>
            <p className="text-foreground leading-relaxed">
              This was the third consecutive forward move in the seconds era,
              following the historic 10-second jump in 2023 that first
              brought the clock to 90 seconds. The 2025 setting of 89
              seconds confirmed that the world had not found its footing
              &mdash; and that the trajectory remained firmly in the wrong
              direction.
            </p>
          </section>

          {/* Section 2: Why Did the Clock Move to 89 Seconds? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why Did the Clock Move to 89 Seconds?
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The Bulletin&apos;s Science and Security Board cited four
              primary factors behind the decision to advance the clock. Each
              of these threat domains worsened or failed to improve compared
              to the previous year&apos;s assessment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {/* Nuclear Risks */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Escalating Nuclear Risks
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Russia-Ukraine war continued into its third year with
                    persistent nuclear rhetoric and tactical escalation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Arms control erosion accelerated as frameworks designed
                    to limit nuclear weapons continued to unravel
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    New START treaty suspended by Russia, leaving no active
                    bilateral arms reduction agreement between the US and
                    Russia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    All nine nuclear-armed states continued modernizing their
                    arsenals, signaling a new arms race
                  </li>
                </ul>
              </div>

              {/* Climate Crisis */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Climate Crisis
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    2024 confirmed as the hottest year on record, breaking
                    the previous record set in 2023
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Global average temperatures breached the 1.5&deg;C
                    threshold above pre-industrial levels for the first time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Extreme weather events &mdash; wildfires, floods, and
                    heat waves &mdash; intensified across every continent
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Major emitters continued to fall short of their COP
                    pledges, widening the gap between promises and action
                  </li>
                </ul>
              </div>

              {/* AI and Emerging Tech */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  AI &amp; Emerging Tech Risks
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Autonomous weapons systems proliferating with minimal
                    international oversight or governance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Deepfake technology reaching unprecedented sophistication,
                    enabling large-scale disinformation campaigns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    AI-assisted biological research raising dual-use concerns
                    about engineered pathogens and biosecurity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    No binding international AI governance framework despite
                    rapid capability advancement
                  </li>
                </ul>
              </div>

              {/* Geopolitical Instability */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  Geopolitical Instability
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Middle East tensions escalating with expanding regional
                    conflicts and proxy wars
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    International institutions weakened by growing
                    unilateralism and declining multilateral cooperation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Diplomatic channels narrowing between major powers,
                    reducing capacity to manage crises
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Democratic backsliding and rising authoritarianism
                    undermining global stability frameworks
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              The Bulletin emphasized that these four domains are deeply
              interconnected. Nuclear brinkmanship is amplified by AI-driven
              misinformation. Climate disasters destabilize regions already
              prone to conflict. The weakening of international institutions
              reduces the world&apos;s ability to respond to any single
              threat, let alone their simultaneous convergence. It was this
              compounding effect, rather than any single crisis, that
              justified the advance.
            </p>
          </section>

          {/* Section 3: What Does 89 Seconds Mean vs 90 Seconds? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Does 89 Seconds Mean vs 90 Seconds?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The single-second move from 90 to 89 seconds was deliberate
              and calculated. Some observers questioned whether one second
              was meaningful, but the Bulletin&apos;s decision reflected a
              specific judgment: the world had gotten worse, but not
              dramatically so.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              To understand why one second matters, consider the context. In
              the Doomsday Clock&apos;s first 73 years (1947&ndash;2019),
              the clock was always measured in minutes. The closest it had
              come was 2 minutes to midnight in 1953 and again in 2018. When
              the Bulletin broke the minutes barrier in January 2020 by
              setting the clock to 100 seconds, it was a seismic symbolic
              shift &mdash; an acknowledgment that the world had entered
              uncharted territory.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Once the clock entered the seconds range, every increment
              became proportionally significant. Moving from 100 to 90
              seconds in 2023 was a 10% reduction in the remaining time.
              Moving from 90 to 89 seconds was a smaller absolute change,
              but it carried the message that even after two years at the
              previous record, the situation had not stabilized.
            </p>
            <p className="text-foreground leading-relaxed">
              The one-second advance also signaled restraint. The Bulletin
              could have moved the clock by several seconds, as they would
              later do in 2026 with the four-second jump to 85. Instead,
              the 2025 setting reflected their assessment that conditions
              had worsened incrementally rather than catastrophically
              &mdash; a distinction that would not hold for long.
            </p>
          </section>

          {/* Section 4: The Seconds Era: 2020 to Present */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Seconds Era: 2020 to Present
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The Doomsday Clock entered the seconds range for the first
              time in January 2020. Since then, every annual setting has
              remained in seconds &mdash; a sustained period of
              unprecedented danger. Here is the complete timeline of the
              seconds era.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2020
                  </span>
                  <span className="text-sm text-muted-foreground">
                    100 seconds &mdash; broke the minutes barrier for the
                    first time
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2021
                  </span>
                  <span className="text-sm text-muted-foreground">
                    100 seconds &mdash; unchanged amid COVID-19 pandemic
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2022
                  </span>
                  <span className="text-sm text-muted-foreground">
                    100 seconds &mdash; unchanged, third year in a row
                  </span>
                </div>
              </div>
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
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-doom">
                    2025
                  </span>
                  <span className="text-sm text-doom font-medium">
                    89 seconds &mdash; new record, 1-second advance
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2026
                  </span>
                  <span className="text-sm text-muted-foreground">
                    85 seconds &mdash; 4-second jump, current setting
                  </span>
                </div>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The pattern is stark. In seven years of the seconds era, the
              clock has never moved backward. It has only advanced or held
              steady, with the overall trajectory firmly downward. The 2025
              setting of 89 seconds was a critical inflection point &mdash;
              the moment when the clock broke through the 90-second floor
              that had held for two years, opening the door to further
              advances.
            </p>
            <p className="text-foreground leading-relaxed">
              From 100 seconds in 2020 to 85 seconds in 2026, the clock has
              lost 15 seconds in just six years. It took 73 years for the
              clock to reach 100 seconds from its original setting of 7
              minutes in 1947. The acceleration is unmistakable.
            </p>
          </section>

          {/* Section 5: What Has Happened Since */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Has Happened Since
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock moved further forward in February 2026,
              advancing four seconds to{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight. The four-second jump was the largest single
              advance since the clock entered the seconds range, signaling
              that the Bulletin saw a significant acceleration in global
              threats.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For a detailed analysis of the 2026 announcement, including
              the specific factors that drove the four-second advance, read
              our{" "}
              <Link
                to="/blog/doomsday-clock-2026"
                className="text-doom hover:underline"
              >
                Doomsday Clock 2026 deep dive
              </Link>
              .
            </p>
            <p className="text-foreground leading-relaxed">
              The trajectory from 89 seconds in 2025 to 85 seconds in 2026
              confirmed what many analysts feared: the one-second move in
              2025 was not a sign of stabilization, but a brief pause before
              a sharper decline. The world did not course-correct after
              breaking through 90 seconds &mdash; instead, the pace of
              deterioration quickened.
            </p>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  What was the Doomsday Clock in 2025?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  In January 2025, the Bulletin of the Atomic Scientists set
                  the Doomsday Clock to 89 seconds to midnight. This was one
                  second closer than the previous setting of 90 seconds and
                  represented the closest the clock had ever been to midnight
                  at the time.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Why did the Doomsday Clock move in 2025?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Bulletin cited four primary factors: escalating nuclear
                  risks including the ongoing Russia-Ukraine conflict and the
                  suspension of New START, the climate crisis with 2024
                  being the hottest year on record, AI and emerging
                  technology risks such as autonomous weapons and deepfakes,
                  and growing geopolitical instability including Middle East
                  tensions and weakened international institutions.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  What does 89 seconds to midnight mean?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  89 seconds to midnight meant that the Doomsday Clock was
                  at the closest point to midnight it had ever been,
                  signaling an extreme level of existential danger. The
                  seconds range itself (entered in 2020) represents
                  unprecedented threat levels. Each second closer carries
                  significant symbolic weight, indicating continued
                  deterioration of global security conditions.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Has the Doomsday Clock moved since 2025?
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes. In February 2026, the Bulletin moved the Doomsday
                  Clock further forward to 85 seconds to midnight &mdash; a
                  four-second advance that was the largest single jump since
                  the clock entered the seconds range in 2020. Read our{" "}
                  <Link
                    to="/blog/doomsday-clock-2026"
                    className="text-doom hover:underline"
                  >
                    2026 update
                  </Link>{" "}
                  for the full analysis.
                </p>
              </div>
            </div>
          </section>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-2025"
          slugs={[
            "doomsday-clock-2026",
            "what-does-89-seconds-to-midnight-mean",
            "doomsday-clock-history-timeline",
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
