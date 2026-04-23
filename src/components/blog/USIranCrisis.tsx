import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, AlertTriangle, Calendar } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function USIranCrisis() {
  const modifiedISO = new Date().toISOString();

  useEffect(() => {
    updateMetaTags({
      title: "Operation Epic Fury & the Doomsday Clock: US-Iran Nuclear Crisis 2026",
      description:
        "Operation Epic Fury — the 2026 US-Israel strikes on Iran — and what it means for the Doomsday Clock. Latest nuclear escalation analysis and Bulletin response.",
      path: "/blog/us-iran-crisis-doomsday-clock",
      newsKeywords:
        "operation epic fury doomsday clock 2026, operation epic fury, doomsday clock iran, doomsday clock 2026 update iran, us iran crisis doomsday clock, doomsday clock iran war, doomsday clock iran conflict, doomsday clock 2026 iran conflict, doomsday clock 2026 update iran conflict",
      publishedTime: "2026-02-28T00:00:00Z",
      modifiedTime: modifiedISO,
      section: "Analysis",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Operation Epic Fury & the Doomsday Clock: US-Iran Nuclear Crisis 2026",
      datePublished: "2026-02-28T00:00:00Z",
      dateModified: modifiedISO,
      author: { "@type": "Organization", name: "DoomsdayClock.net" },
      publisher: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        logo: {
          "@type": "ImageObject",
          url: "https://doomsdayclock.net/DoomsDayClock.net.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://doomsdayclock.net/blog/us-iran-crisis-doomsday-clock",
      },
      description:
        "US-Israel strikes on Iran threaten to push the Doomsday Clock even closer to midnight. At 85 seconds — already the closest ever — here's what the Iran conflict means for nuclear risk in 2026.",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "us-iran");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does the US-Iran crisis affect the Doomsday Clock in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The 2026 US-Israel strikes on Iran (Operation Epic Fury) directly amplify every threat the Bulletin of the Atomic Scientists already cited when setting the clock at 85 seconds: nuclear escalation, fraying arms control, and Middle East conflict. A crisis of this magnitude could push the clock forward by 20–40 seconds in a future setting.",
          },
        },
        {
          "@type": "Question",
          name: "What is Operation Epic Fury?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Operation Epic Fury is the coordinated US-Israeli military strike on Iran launched on February 28, 2026, targeting military installations, air defense systems, and facilities linked to Iran's nuclear program across Tehran and other major Iranian cities.",
          },
        },
        {
          "@type": "Question",
          name: "Could the Doomsday Clock move because of the Iran war?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Bulletin of the Atomic Scientists typically updates the clock once a year in January, but off-cycle adjustments are possible during major crises. The active use of military force by two nuclear-armed nations against a threshold nuclear state represents exactly the kind of qualitative escalation that has historically warranted special statements.",
          },
        },
        {
          "@type": "Question",
          name: "How close is the Doomsday Clock right now in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As of February 2026, the Doomsday Clock is set at 85 seconds to midnight — the closest it has ever been in its 79-year history. This setting was made before Operation Epic Fury, meaning the actual current risk level is likely higher than the official setting reflects.",
          },
        },
      ],
    };
    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "us-iran-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://doomsdayclock.net/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://doomsdayclock.net/blog" },
        { "@type": "ListItem", position: 3, name: "US-Iran Crisis & the Doomsday Clock", item: "https://doomsdayclock.net/blog/us-iran-crisis-doomsday-clock" },
      ],
    };
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.setAttribute("data-blog-schema", "us-iran-breadcrumb");
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(breadcrumbScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="us-iran"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="us-iran-faq"]'
      );
      if (faqEl) faqEl.remove();
      const bcEl = document.querySelector(
        'script[data-blog-schema="us-iran-breadcrumb"]'
      );
      if (bcEl) bcEl.remove();
      resetToDefaults();
    };
  }, [modifiedISO]);

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
          <span className="text-foreground">US-Iran Crisis</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-doom opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-doom"></span>
            </span>
            Breaking Analysis
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">US-Iran Crisis 2026:</span> How
            Operation Epic Fury Could Push the Doomsday Clock Past 85 Seconds
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              February 28, 2026
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
                Set on {currentTime.lastUpdated} — before today's
                escalation
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Happened Today
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              On February 28, 2026, the United States and Israel launched
              &quot;Operation Epic Fury,&quot; a coordinated series of
              military strikes against Iran. Multiple explosions were
              reported across Tehran and other major cities, with targets
              including military installations, air defense systems, and
              — critically — facilities linked to Iran's nuclear program.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              President Trump described the operation as aimed at
              &quot;eliminating imminent threats from the Iranian
              regime,&quot; claiming that Supreme Leader Ali Khamenei was
              killed in the strikes — a claim Iran has denied. Iran
              retaliated by targeting Israeli territory and bases hosting
              US troops in the region.
            </p>
            <p className="text-foreground leading-relaxed">
              The strikes came just one day after Oman's Foreign Minister
              announced a &quot;breakthrough&quot; in US-Iran nuclear
              negotiations, with Iran reportedly agreeing to halt uranium
              enrichment stockpiling and accept full IAEA verification.
              The collapse of diplomacy into active warfare represents one
              of the most dangerous escalations in decades.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Nuclear Dimension
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              What makes this conflict uniquely dangerous for the
              Doomsday Clock is its direct intersection with nuclear
              proliferation. Iran's nuclear program has been a central
              concern of the Bulletin of the Atomic Scientists for over
              two decades, and military strikes on nuclear facilities
              introduce several catastrophic risk vectors.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              First, strikes on enrichment facilities risk releasing
              radioactive material, creating immediate environmental and
              humanitarian consequences. Second, the destruction of
              diplomatic channels — particularly after a reported
              breakthrough — may convince Iran's leadership that only a
              nuclear weapon can guarantee regime survival. This is the
              exact proliferation pressure that has historically pushed
              the clock forward.
            </p>
            <p className="text-foreground leading-relaxed">
              Third, and most critically, this conflict involves a
              nuclear-armed state (the United States) directly attacking
              a threshold nuclear state, with another nuclear power
              (Israel) as a co-belligerent. The risk of miscalculation,
              accidental escalation, or deliberate nuclear use — however
              small — is non-zero and growing.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Historical Parallels: When Conflicts Moved the Clock
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock has a long history of responding to
              military conflicts and nuclear brinkmanship. Understanding
              these precedents helps frame the potential impact of the
              current crisis.
            </p>
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  1953: US & Soviet hydrogen bomb tests
                </h4>
                <p className="text-sm text-muted-foreground">
                  The clock moved to just 2 minutes to midnight — its
                  closest position for over 60 years — after both
                  superpowers tested thermonuclear weapons within months
                  of each other.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  1984: US-Soviet relations at their lowest
                </h4>
                <p className="text-sm text-muted-foreground">
                  Heightened Cold War tensions, the Soviet shoot-down of
                  Korean Air Lines Flight 007, and the breakdown of arms
                  control negotiations pushed the clock to 3 minutes.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  2023: Russia-Ukraine war escalation
                </h4>
                <p className="text-sm text-muted-foreground">
                  Russia's invasion of Ukraine and thinly veiled nuclear
                  threats moved the clock to 90 seconds — the closest
                  ever at the time — breaking the minutes barrier for the
                  first time since the clock's creation.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              In each case, it was the combination of active military
              conflict with nuclear risk that proved decisive. The
              current US-Iran situation carries both elements in acute
              form.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How This Could Affect the Doomsday Clock
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin of the Atomic Scientists typically announces
              the Doomsday Clock setting once per year in January.
              However, the current 85-second setting was determined on{" "}
              {currentTime.lastUpdated} — weeks before Operation Epic
              Fury. While off-cycle adjustments are rare, the magnitude
              of this crisis could warrant one.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-medium text-doom mb-2">
                  Risk Factors Pushing Forward
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Direct strikes on nuclear facilities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Collapse of diplomatic negotiations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Regional escalation cascade risk
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Nuclear proliferation pressure on Iran
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Great power confrontation dynamics
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-medium text-foreground mb-2">
                  Potential Clock Impact
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Based on historical precedent, a crisis of this
                  magnitude could push the clock forward by 20 to 40
                  seconds — potentially bringing it to as little as{" "}
                  <span className="text-doom font-bold">
                    45 seconds
                  </span>{" "}
                  to midnight.
                </p>
                <p className="text-sm text-muted-foreground">
                  If the conflict escalates further — particularly if
                  nuclear weapons are introduced — the clock could reach
                  midnight for the first time in its 79-year history.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What the Bulletin of the Atomic Scientists Considers
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin's Science and Security Board evaluates threats
              across three primary categories: nuclear risk, climate
              change, and disruptive technologies. For the 2026
              assessment, they already cited &quot;aggressive behavior by
              nuclear powers,&quot; &quot;fraying nuclear arms
              control,&quot; and &quot;Middle East conflict
              escalation&quot; as key factors.
            </p>
            <p className="text-foreground leading-relaxed">
              Operation Epic Fury dramatically amplifies every one of
              these concerns. The active use of military force against a
              near-nuclear state by two nuclear-armed nations, the
              destruction of a diplomatic breakthrough, and the potential
              for wider regional conflagration represent a qualitative
              escalation beyond what the Board assessed just weeks ago.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why This Matters
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is not a prediction — it's a warning.
              At {currentTime.display} to midnight, we were already at
              the closest point to catastrophe in the clock's history.
              The US-Iran conflict doesn't just risk pushing the clock
              forward; it threatens to make the clock's symbolic warning
              a lived reality.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The international community's response in the coming days
              and weeks will be critical. History shows that even the
              most dangerous moments can be de-escalated — the Cuban
              Missile Crisis, the 1983 Soviet nuclear false alarm, and
              countless other near-misses prove that humanity can step
              back from the brink. But only if leaders choose to do so.
            </p>
            <p className="text-foreground leading-relaxed">
              We will continue to monitor this situation and update our
              analysis as events develop. The next official Doomsday
              Clock announcement is scheduled for{" "}
              <span className="text-doom font-semibold">
                {currentTime.nextUpdate}
              </span>
              , but the Bulletin may choose to issue a special statement
              given the severity of the current crisis.
            </p>
          </section>
        </div>

        {/* CTA: What If Simulator */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Explore the Impact
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use our What If simulator to see how a US-Iran military
            conflict could affect the Doomsday Clock.
          </p>
          <Link
            to="/#what-if"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            Try the What If Simulator
          </Link>
        </div>

        <RelatedArticles
          currentSlug="us-iran-crisis-doomsday-clock"
          slugs={[
            "doomsday-clock-2026",
            "doomsday-clock-history-timeline",
            "what-happens-doomsday-clock-midnight",
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
