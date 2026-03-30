import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  History,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockThroughDecades() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Doomsday Clock Through the Decades: 2000 vs 2020 vs 2026 | DoomsdayClock.net",
      description:
        "Compare the Doomsday Clock across three pivotal eras: 2000, 2020, and 2026. See how global threats evolved from Cold War aftermath to the age of AI and climate crisis.",
      path: "/blog/doomsday-clock-through-decades",
      newsKeywords:
        "doomsday clock 2000, doomsday clock 2020, doomsday clock in 2000, where was doomsday clock in 2020, doomsday clock comparison",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Doomsday Clock Through the Decades: 2000 vs 2020 vs 2026",
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
          "https://doomsdayclock.net/blog/doomsday-clock-through-decades",
      },
      description:
        "Compare the Doomsday Clock across three pivotal eras: 2000, 2020, and 2026. See how global threats evolved from Cold War aftermath to the age of AI and climate crisis.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "doomsday clock 2000",
        "doomsday clock 2020",
        "doomsday clock comparison",
        "doomsday clock through decades",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2200,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "through-decades");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="through-decades"]'
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
          <span className="text-foreground">
            Doomsday Clock Through the Decades
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <History className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Doomsday Clock Through the Decades:{" "}
            <span className="text-doom">2000 vs 2020 vs 2026</span>
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

          {/* Current clock context */}
          <div className="doom-accent-card p-4 flex items-center gap-4">
            <Clock className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                The Doomsday Clock is currently at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight
              </p>
              <p className="text-xs text-muted-foreground">
                Set on {currentTime.lastUpdated} by the Bulletin of the
                Atomic Scientists
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: Three Snapshots in Time */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <History className="w-5 h-5 sm:w-6 sm:h-6" />
              Three Snapshots in Time
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock has been adjusted more than two dozen
              times since its creation in 1947, but three settings stand
              out as defining markers of their eras. In the year 2000,
              the clock sat at 9 minutes to midnight — a setting that
              reflected cautious optimism following the end of the Cold
              War. By 2020, it had plunged to 100 seconds to midnight,
              the first time the Bulletin of the Atomic Scientists
              measured the threat in seconds rather than minutes. And in
              2026, it reached 85 seconds to midnight, the closest
              humanity has ever stood to symbolic annihilation.
            </p>
            <p className="text-foreground leading-relaxed">
              These three moments capture a dramatic arc — from a world
              that believed it had turned a corner on nuclear danger, to
              a world confronting multiple overlapping existential
              threats with no clear path to resolution. By comparing
              what the clock measured in each era, we can trace how
              global risks have evolved and why the Bulletin's scientists
              have grown increasingly alarmed.
            </p>
          </section>

          {/* Section 2: The Year 2000 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              The Year 2000: 9 Minutes to Midnight
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When the Bulletin set the clock at 9 minutes to midnight
              in 1998 — the setting that would hold through the year
              2000 — the Cold War had ended less than a decade earlier.
              The Soviet Union had dissolved in 1991, and for the first
              time since the nuclear age began, the United States and
              Russia were engaged in diplomatic efforts to reduce their
              arsenals rather than expand them. The Strategic Arms
              Reduction Treaties (START I and START II) promised deep
              cuts in deployed warheads, and the Comprehensive Nuclear
              Test Ban Treaty had been opened for signature.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But the picture was far from rosy. Despite improving
              relations between Washington and Moscow, both nations
              still maintained thousands of nuclear weapons on
              hair-trigger alert — a posture that meant a catastrophic
              launch could be initiated within minutes based on a false
              alarm or miscalculation. India and Pakistan had conducted
              nuclear weapons tests in 1998, introducing a volatile new
              dimension to the global nuclear landscape and raising
              fears of a South Asian arms race.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Climate change was recognized as a growing concern but had
              not yet reached the acute stage that would define later
              decades. The Kyoto Protocol had been adopted in 1997, and
              there was still widespread belief that international
              cooperation could keep global warming within manageable
              limits. The Y2K computer bug generated widespread anxiety
              but ultimately proved to be a manageable technical
              challenge rather than the civilizational disruption some
              had feared.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bulletin cited the persistence of massive nuclear
              arsenals, the risks of hair-trigger alert postures, and
              the failure of nations to move more aggressively toward
              disarmament as the primary reasons for keeping the clock
              at 9 minutes. It was a setting that acknowledged real
              progress while warning that the fundamental dangers of
              the nuclear age had not been eliminated.
            </p>
          </section>

          {/* Section 3: The Year 2020 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              The Year 2020: 100 Seconds to Midnight
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              In January 2020, the Bulletin made a historic and
              unsettling decision: for the first time in the clock's
              73-year history, the setting was expressed in seconds
              rather than minutes. At 100 seconds to midnight, the
              Doomsday Clock had never been closer to the symbolic point
              of civilizational collapse. The shift from minutes to
              seconds was not merely a rhetorical flourish — it
              represented a qualitative change in the board's assessment
              of how dire the global threat landscape had become.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The arms control architecture that had restrained nuclear
              competition for decades was crumbling. The United States
              had withdrawn from the Intermediate-Range Nuclear Forces
              (INF) Treaty in 2019, eliminating a cornerstone agreement
              that had banned an entire class of nuclear weapons since
              1987. New START, the last remaining bilateral arms control
              treaty between the US and Russia, was set to expire in
              February 2021 with no clear path to extension. Nuclear
              modernization programs were underway in all nine
              nuclear-armed states, with new warhead designs, delivery
              systems, and doctrines that lowered the threshold for use.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Climate change had moved from a future concern to a
              present emergency. The year 2019 had been one of the
              hottest on record, and the devastating Australian
              bushfires that burned through late 2019 and into 2020
              offered a visceral preview of what unchecked warming could
              mean. Global carbon emissions continued to rise despite
              the Paris Agreement, and scientific reports warned that
              critical tipping points — permafrost thaw, ice sheet
              collapse, Amazon dieback — might be closer than previously
              thought.
            </p>
            <p className="text-foreground leading-relaxed">
              The COVID-19 pandemic, which erupted shortly after the
              January announcement, would go on to validate one of the
              board's deepest concerns: that global institutions were
              dangerously fragile and unprepared for large-scale crises.
              Meanwhile, cyber threats to critical infrastructure and
              the emergence of AI-enabled weapons systems introduced
              entirely new categories of risk that had barely existed
              two decades earlier. The world of 2020 was not just more
              dangerous than the world of 2000 — it was dangerous in
              fundamentally new ways.
            </p>
          </section>

          {/* Section 4: The Year 2026 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              The Year 2026: 85 Seconds to Midnight
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The 2026 setting of 85 seconds to midnight — the closest
              the clock has ever been — reflects a world where the
              threats identified in 2020 have not only persisted but
              intensified. The Russia-Ukraine war, now in its fourth
              year, has reintroduced the specter of nuclear conflict in
              Europe for the first time since the Cold War. Russia has
              repeatedly invoked its nuclear arsenal in the context of
              the conflict, and the deployment of tactical nuclear
              weapons has been openly discussed by military strategists
              on multiple sides.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              US-Iran military tensions escalated dramatically, with
              direct strikes raising the prospect of a broader Middle
              Eastern conflict that could draw in multiple nuclear-armed
              or nuclear-threshold states. The collapse of the Iran
              nuclear deal (JCPOA) left Tehran's nuclear program less
              constrained than at any point in recent history, and
              regional rivals have signaled their own interest in
              nuclear capabilities.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Global temperatures shattered records yet again, with 2025
              marking the hottest year ever recorded. The gap between
              climate commitments and actual emissions continued to
              widen, and scientists warned that several planetary tipping
              points may have already been crossed. Extreme weather
              events — catastrophic flooding, unprecedented heat waves,
              devastating wildfires — became so frequent that they
              began to overlap, straining disaster response capacity
              around the world.
            </p>
            <p className="text-foreground leading-relaxed">
              Perhaps most alarming to the Bulletin's scientists was the
              pace of artificial intelligence development, which was
              outstripping governance frameworks by a wide margin.
              AI systems were being integrated into military
              decision-making, nuclear early warning systems, and
              autonomous weapons platforms — all without adequate
              international agreements on safety standards or use
              limitations. Nuclear modernization programs accelerated
              across all major powers, and the treaty architecture that
              once constrained the arms race had largely collapsed,
              with no serious negotiations underway to replace it.
            </p>
          </section>

          {/* Section 5: The Trend Line */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              The Trend Line
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Placing these three settings side by side reveals an
              unmistakable trajectory. The clock has moved from a
              setting that reflected guarded hope to one that reflects
              acute and escalating danger — a compression from minutes
              to seconds that mirrors the compression of time humanity
              may have left to address its most critical challenges.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* 2000 card */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <span className="text-2xl font-bold text-green-400">
                  9 min
                </span>
                <h4 className="font-semibold text-foreground mt-1">
                  Year 2000
                </h4>
                <p className="text-xs text-muted-foreground mt-2">
                  Post-Cold War arsenals, India-Pakistan tests, early
                  climate awareness, diplomatic optimism
                </p>
              </div>
              {/* 2020 card */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <span className="text-2xl font-bold text-yellow-400">
                  100 sec
                </span>
                <h4 className="font-semibold text-foreground mt-1">
                  Year 2020
                </h4>
                <p className="text-xs text-muted-foreground mt-2">
                  Treaty collapse, climate emergency, pandemic
                  fragility, emerging cyber and AI threats
                </p>
              </div>
              {/* 2026 card */}
              <div className="p-4 rounded-lg bg-white/5 border border-doom/30">
                <span className="text-2xl font-bold text-doom">
                  85 sec
                </span>
                <h4 className="font-semibold text-foreground mt-1">
                  Year 2026
                </h4>
                <p className="text-xs text-muted-foreground mt-2">
                  Active wars, ungoverned AI, nuclear modernization,
                  record temperatures, collapsed treaties
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mt-6">
              The transition from 9 minutes to 100 seconds represented
              a 5.4-fold increase in perceived danger over two decades.
              The further move to 85 seconds confirmed that the
              Bulletin sees no sign of the trend reversing. Each era
              added new threat categories without resolving the old
              ones: the nuclear arsenals that worried the board in 2000
              are still here, now joined by climate breakdown, AI
              risks, and active military conflicts between
              nuclear-armed states.
            </p>
          </section>

          {/* Section 6: What This Means for the Future */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What This Means for the Future
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              If the trend of the past quarter-century continues, the
              question is not whether the clock will move closer to
              midnight but how quickly. The converging nature of modern
              threats — where a climate disaster can trigger political
              instability that raises nuclear risks, or where an AI
              malfunction in a military system could escalate a
              conventional conflict into a nuclear one — means that the
              dangers are no longer additive but multiplicative. Each
              threat amplifies the others in ways that make the overall
              risk greater than the sum of its parts.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Yet history offers at least one reason for hope. In 1991,
              the Doomsday Clock was set back to 17 minutes to midnight
              — its furthest point from doom — following the end of the
              Cold War, the signing of the Strategic Arms Reduction
              Treaty, and the dissolution of the Soviet Union. That
              dramatic reversal demonstrated that the clock can move
              backward when political will, diplomatic engagement, and
              genuine risk reduction converge. The question is whether
              today's leaders can summon that same combination in a far
              more complex threat environment.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              International cooperation is more needed than ever but
              harder to achieve. The multilateral institutions built
              after World War II are strained, great-power competition
              has replaced great-power cooperation, and the speed of
              technological change outpaces the ability of governments
              to negotiate agreements. Reversing the clock's trajectory
              would require simultaneous progress on nuclear arms
              control, binding climate commitments with enforcement
              mechanisms, and international frameworks for AI governance
              — an agenda so ambitious that it strains credulity.
            </p>
            <p className="text-foreground leading-relaxed">
              But the alternative — accepting the current trajectory as
              inevitable — is unthinkable. The Doomsday Clock exists
              precisely to remind us that midnight is not a
              destination but a choice. The scientists who move the
              clock's hands are not predicting the future; they are
              warning us about the present and challenging us to change
              course. Whether the next decade looks more like the
              hopeful turn of 2000 or the grim slide toward 2026
              depends entirely on the decisions that governments,
              institutions, and citizens make starting now.
            </p>
          </section>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-through-decades"
          slugs={[
            "doomsday-clock-history-timeline",
            "can-doomsday-clock-go-back",
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
