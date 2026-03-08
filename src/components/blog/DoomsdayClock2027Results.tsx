// ============================================================
// QUICK-PUBLISH TEMPLATE — 2027 Doomsday Clock Results
// ============================================================
// When the announcement is made:
// 1. Fill in the PLACEHOLDER values below
// 2. Uncomment the lazy import in App.tsx
// 3. Uncomment the entry in BlogIndex.tsx
// 4. Add entry to api/sitemap.ts BLOG_POSTS array
// 5. git commit && git push (triggers Vercel auto-deploy)
// 6. Run: npm run indexnow
// ============================================================

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, AlertTriangle, Minus } from "lucide-react";
// import { currentTime } from "../../data/clockHistory"; // Uncomment when filling in template
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

const RESULT = {
  newTime: "PLACEHOLDER_SECONDS",           // e.g., "80 seconds" or "75 seconds"
  newTimeNumber: 0,                          // e.g., 80 or 75 (numeric, for comparisons)
  direction: "forward" as "forward" | "backward" | "unchanged",
  announcementDate: "PLACEHOLDER_DATE",      // e.g., "January 28, 2027"
  announcementDateISO: "2027-01-28",         // ISO format for schema
  changeAmount: "PLACEHOLDER_CHANGE",        // e.g., "5 seconds closer" or "moved back 10 seconds"
  keyReasons: [
    "PLACEHOLDER_REASON_1",                  // e.g., "Escalating nuclear tensions"
    "PLACEHOLDER_REASON_2",                  // e.g., "Climate change tipping points"
    "PLACEHOLDER_REASON_3",                  // e.g., "AI weapons proliferation"
  ],
  bulletinQuote: "PLACEHOLDER_QUOTE",        // Key quote from the Bulletin's statement
};

export function DoomsdayClock2027Results() {
  useEffect(() => {
    updateMetaTags({
      title: `Doomsday Clock 2027: ${RESULT.newTime} to Midnight — ${RESULT.direction === "forward" ? "Closer Than Ever" : RESULT.direction === "backward" ? "A Step Back from the Brink" : "Unchanged"} | DoomsdayClock.net`,
      description: `The Bulletin of the Atomic Scientists has set the 2027 Doomsday Clock to ${RESULT.newTime} to midnight. ${RESULT.changeAmount}. Full analysis and historical context.`,
      path: "/blog/doomsday-clock-2027-results",
      newsKeywords: "doomsday clock 2027, doomsday clock 2027 time, doomsday clock january 2027, new doomsday clock time",
      publishedTime: `${RESULT.announcementDateISO}T12:00:00Z`,
      modifiedTime: `${RESULT.announcementDateISO}T12:00:00Z`,
      section: "Breaking News",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: `Doomsday Clock 2027: ${RESULT.newTime} to Midnight`,
      datePublished: `${RESULT.announcementDateISO}T12:00:00Z`,
      dateModified: `${RESULT.announcementDateISO}T12:00:00Z`,
      author: { "@type": "Organization", name: "DoomsdayClock.net", url: "https://doomsdayclock.net" },
      publisher: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        logo: { "@type": "ImageObject", url: "https://doomsdayclock.net/DoomsDayClock.net.png", width: 1200, height: 1200 },
        url: "https://doomsdayclock.net",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://doomsdayclock.net/blog/doomsday-clock-2027-results" },
      description: `The Bulletin of the Atomic Scientists has set the 2027 Doomsday Clock to ${RESULT.newTime} to midnight. ${RESULT.changeAmount}.`,
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Breaking News",
      keywords: ["doomsday clock 2027", "doomsday clock 2027 time", "doomsday clock january 2027", "new doomsday clock time", "bulletin of the atomic scientists 2027"],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2500,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "2027-results");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-blog-schema="2027-results"]');
      if (el) el.remove();
      resetToDefaults();
    };
  }, []);

  return (
    <article className="py-12 sm:py-16">
      <div className="container-tight">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">2027 Results</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          {/* Breaking news badge with pulsing red dot */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-doom opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-doom"></span>
            </span>
            Breaking
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Doomsday Clock 2027: <span className="text-doom">{RESULT.newTime}</span> to Midnight
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {RESULT.announcementDate}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>
        </header>

        {/* Big result display card */}
        <div className="doom-accent-card p-8 text-center mb-10 animate-fade-in">
          <p className="text-6xl font-bold text-doom">{RESULT.newTime}</p>
          <p className="text-xl text-foreground mt-2">to midnight</p>
          <p className="text-muted-foreground mt-2">{RESULT.changeAmount} from 85 seconds (2026)</p>
        </div>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">

          {/* Section 1: What the Bulletin Announced */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What the Bulletin Announced
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              On {RESULT.announcementDate}, the Bulletin of the Atomic Scientists set the Doomsday Clock
              to {RESULT.newTime} to midnight. This represents {RESULT.changeAmount} from the 2026 setting
              of 85 seconds &mdash;{" "}
              {RESULT.direction === "forward"
                ? "marking a new record and the closest the clock has ever been to symbolic global catastrophe."
                : RESULT.direction === "backward"
                ? "marking the first time the clock has moved away from midnight since 2010."
                : "holding the clock at its current position for the first time since the 2024 decision to keep it at 90 seconds."}
            </p>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10 my-6">
              <p className="text-foreground italic leading-relaxed">
                &ldquo;{RESULT.bulletinQuote}&rdquo;
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                &mdash; Bulletin of the Atomic Scientists, {RESULT.announcementDate}
              </p>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The Science and Security Board cited the following key reasons for the {RESULT.direction === "unchanged" ? "decision to hold the clock steady" : `${RESULT.direction} movement`}:
            </p>

            <div className="space-y-3 my-6">
              {RESULT.keyReasons.map((reason, index) => (
                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-doom shrink-0 mt-0.5" />
                    <p className="text-foreground">{reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2: CONDITIONAL based on RESULT.direction */}

          {RESULT.direction === "forward" && (
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
                Closer to Midnight: What This Means
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                The move to {RESULT.newTime} represents the fifth consecutive year of forward movement
                (or holding at record levels) since the clock reached 90 seconds in 2023. The Doomsday Clock
                is now closer to midnight than at any point in its{" "}
                <Link to="/blog/doomsday-clock-history-timeline" className="text-doom hover:underline">80-year history</Link>
                &mdash; surpassing the previous record of 85 seconds set in February 2026.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-medium text-foreground mb-2">Previous Record (2026)</h4>
                  <p className="text-2xl font-bold text-muted-foreground">85 seconds</p>
                </div>
                <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                  <h4 className="font-medium text-doom mb-2">New Record (2027)</h4>
                  <p className="text-2xl font-bold text-doom">{RESULT.newTime}</p>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-4">
                The trajectory is deeply concerning. From 100 seconds in 2020, the clock has moved forward
                {RESULT.newTimeNumber > 0 ? ` ${100 - RESULT.newTimeNumber} seconds in just seven years` : ""}.
                The acceleration reflects the Bulletin's assessment that threats are not merely persisting but
                compounding &mdash; nuclear risks amplified by AI, climate tipping points destabilizing
                geopolitics, and weakening international institutions reducing the world's ability to respond.
              </p>

              <p className="text-foreground leading-relaxed mb-4">
                For the clock to reverse course, the Bulletin has consistently pointed to the need for
                renewed arms control agreements, meaningful climate action, and international cooperation
                on emerging technology governance. None of these appear imminent, but the Board has
                emphasized that the clock is meant not just as a warning, but as a call to action.
              </p>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10 my-4">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Key question:</span> At what point does
                  continued forward movement lose its signaling power? The Bulletin has acknowledged this
                  tension &mdash; moving too far, too fast risks numbing the public, but holding steady in
                  the face of worsening conditions would undermine the clock's credibility.
                </p>
              </div>
            </section>
          )}

          {RESULT.direction === "backward" && (
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
                A Step Back: What Changed
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                This is the first time the Doomsday Clock has moved backward since 2010, when the signing
                of the New START treaty and renewed international climate cooperation prompted the Bulletin
                to move the clock from 5 minutes to 6 minutes to midnight. In the clock's{" "}
                <Link to="/blog/doomsday-clock-history-timeline" className="text-doom hover:underline">80-year history</Link>,
                backward movements have occurred only a handful of times &mdash; each driven by genuine,
                verifiable progress on existential threats.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-medium text-foreground mb-2">Previous Setting (2026)</h4>
                  <p className="text-2xl font-bold text-muted-foreground">85 seconds</p>
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <h4 className="font-medium text-green-400 mb-2">New Setting (2027)</h4>
                  <p className="text-2xl font-bold text-green-400">{RESULT.newTime}</p>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-4">
                The clock has moved from 85 seconds to {RESULT.newTime}, a difference
                of {RESULT.newTimeNumber > 0 ? `${RESULT.newTimeNumber - 85} seconds` : "several seconds"}.
                While this is a positive development, the Bulletin cautioned against interpreting it as a
                signal that the world is safe. Even at {RESULT.newTime}, the clock remains far closer to
                midnight than at any point during the Cold War &mdash; when the closest setting was 2
                minutes (120 seconds) in 1953.
              </p>

              <p className="text-foreground leading-relaxed mb-4">
                The positive developments that drove this change should be understood in context. The
                clock's backward movements in history have sometimes been followed by renewed forward
                advances &mdash; the 1991 move to 17 minutes was followed by a return to 14 minutes in
                1995. Sustained progress, not a single year's improvement, is what the world needs.
              </p>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10 my-4">
                <p className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">Cautious optimism:</span> The Bulletin
                  stressed that while conditions have improved in specific areas, the overall threat
                  landscape remains elevated. The backward move is an acknowledgment of progress, not a
                  declaration of safety.
                </p>
              </div>
            </section>
          )}

          {RESULT.direction === "unchanged" && (
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
                Holding Steady: What This Means
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                The decision to hold the clock at {RESULT.newTime} mirrors the 2024 decision, when the
                Bulletin kept the clock at 90 seconds for a second consecutive year. At the time, the Board
                explained that while threats had not diminished, they had not materially worsened enough to
                justify a forward move. The same logic appears to apply in 2027.
              </p>

              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/30 my-6 flex items-start gap-4">
                <Minus className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-semibold mb-1">
                    Unchanged does not mean safe
                  </p>
                  <p className="text-sm text-muted-foreground">
                    The clock remaining at {RESULT.newTime} is not good news. It means the world continues
                    to face the same converging existential threats that brought us to this record-setting
                    position in the first place. The Bulletin has been clear: holding steady at a dangerous
                    level is itself dangerous.
                  </p>
                </div>
              </div>

              <p className="text-foreground leading-relaxed mb-4">
                Some factors may have balanced out &mdash; improvements in one area offset by deterioration
                in another. The Bulletin evaluates the overall picture, and an unchanged reading can
                reflect a genuinely mixed assessment rather than stagnation. However, the{" "}
                <Link to="/blog/doomsday-clock-history-timeline" className="text-doom hover:underline">historical pattern</Link>{" "}
                shows that unchanged readings are often followed by forward moves the next year, as
                underlying trends continue to worsen.
              </p>

              <p className="text-foreground leading-relaxed">
                The Bulletin may also be waiting to see how key events develop. Several major geopolitical
                situations are at inflection points, and the Board may have concluded that the next six to
                twelve months will be decisive in determining the clock's future direction.
              </p>
            </section>
          )}

          {/* Section 3: Historical Context */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Historical Context
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              To understand what {RESULT.newTime} means, it helps to see how the Doomsday Clock has moved
              in recent years and where 2027 fits in the clock's{" "}
              <Link to="/blog/doomsday-clock-history-timeline" className="text-doom hover:underline">80-year history</Link>.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">2020</span>
                <span className="text-sm text-muted-foreground">100 seconds &mdash; broke the minutes barrier</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">2023</span>
                <span className="text-sm text-muted-foreground">90 seconds &mdash; Ukraine war</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">2024</span>
                <span className="text-sm text-muted-foreground">90 seconds &mdash; unchanged</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">2025</span>
                <span className="text-sm text-muted-foreground">89 seconds &mdash; one-second advance</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">2026</span>
                <span className="text-sm text-muted-foreground">85 seconds &mdash; four-second jump</span>
              </div>
              <div className="p-3 rounded-lg bg-doom/10 border border-doom/30 flex items-center justify-between">
                <span className="text-sm font-bold text-doom">2027</span>
                <span className="text-sm text-doom font-medium">
                  {RESULT.newTime} &mdash;{" "}
                  {RESULT.direction === "forward"
                    ? "new record"
                    : RESULT.direction === "backward"
                    ? "moved back"
                    : "unchanged"}
                </span>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              {RESULT.direction === "forward" ? (
                <>
                  At {RESULT.newTime}, the clock stands at its closest-ever position to midnight. For
                  comparison, during the most dangerous moment of the Cold War &mdash; when the US and
                  Soviet Union both tested thermonuclear weapons in 1953 &mdash; the clock stood at 2
                  minutes (120 seconds). Today it is {RESULT.newTimeNumber > 0 ? `${120 - RESULT.newTimeNumber} seconds` : "significantly"}{" "}
                  closer. At its furthest from midnight, the clock stood at 17 minutes (1,020 seconds) in
                  1991 after the Cold War ended.
                </>
              ) : RESULT.direction === "backward" ? (
                <>
                  Even with this backward move, the clock at {RESULT.newTime} remains far closer to midnight
                  than at almost any point in its history. During the Cold War's most dangerous moment in
                  1953, the clock stood at 2 minutes (120 seconds). At its furthest from midnight, it was
                  set to 17 minutes (1,020 seconds) in 1991. The current position, while improved, reflects
                  a world that remains in deep peril.
                </>
              ) : (
                <>
                  Holding at {RESULT.newTime}, the clock remains at its closest-ever position to midnight.
                  During the Cold War's most dangerous moment in 1953, the clock stood at 2 minutes (120
                  seconds) &mdash; still farther than today. At its furthest from midnight, the clock was
                  at 17 minutes (1,020 seconds) in 1991 after the Cold War ended. The unchanged reading
                  does not diminish the severity of the current moment.
                </>
              )}
            </p>
          </section>

          {/* Section 4: Expert Reactions */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Expert Reactions
            </h2>
            <p className="text-muted-foreground italic">
              This section will be updated with expert reactions as they come in.
            </p>
          </section>

          {/* Section 5: What Comes Next */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Comes Next
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              {RESULT.direction === "forward" ? (
                <>
                  With the clock now at {RESULT.newTime}, the central question for 2027 is whether any
                  force &mdash; diplomatic, technological, or political &mdash; can arrest its forward
                  momentum. The Bulletin has identified specific areas where progress could change the
                  trajectory: renewed arms control negotiations, meaningful climate commitments with binding
                  enforcement, and international governance frameworks for AI and autonomous weapons.
                </>
              ) : RESULT.direction === "backward" ? (
                <>
                  The backward move to {RESULT.newTime} opens a window of cautious optimism, but the
                  question is whether the positive trends that drove this change can be sustained.
                  History shows that backward movements can be fragile &mdash; the key will be whether
                  diplomatic and policy gains are institutionalized rather than dependent on the choices
                  of individual leaders.
                </>
              ) : (
                <>
                  With the clock unchanged at {RESULT.newTime}, the world faces a critical year. The
                  threats that brought us to this position have not abated, and several flashpoints could
                  tip the balance in either direction. The next twelve months will be decisive in
                  determining whether the clock moves forward toward midnight or whether meaningful
                  progress can begin to turn it back.
                </>
              )}
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-6">
              <Link
                to="/#timeline"
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
              >
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-doom transition-colors">
                  Interactive Timeline
                </h4>
                <p className="text-sm text-muted-foreground">
                  Explore the complete Doomsday Clock timeline, now updated with the 2027 setting.
                </p>
              </Link>
              <Link
                to="/#what-if"
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
              >
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-doom transition-colors">
                  What If Simulator
                </h4>
                <p className="text-sm text-muted-foreground">
                  Model how different scenarios could affect the clock's position. Toggle factors on and off.
                </p>
              </Link>
              <Link
                to="/forum"
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
              >
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-doom transition-colors">
                  Community Forum
                </h4>
                <p className="text-sm text-muted-foreground">
                  Discuss the 2027 announcement with the community. Share your analysis and reactions.
                </p>
              </Link>
            </div>

            <p className="text-foreground leading-relaxed">
              The next Doomsday Clock update is expected in <span className="text-doom font-semibold">January 2028</span>.
              Between now and then, the Bulletin's Science and Security Board will monitor developments across
              all threat categories. For ongoing analysis, follow our{" "}
              <Link to="/blog" className="text-doom hover:underline">blog</Link> and join the{" "}
              <Link to="/forum" className="text-doom hover:underline">community discussion</Link>.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Explore the Complete Timeline
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See every Doomsday Clock change from 1947 to 2027 on our interactive timeline.
          </p>
          <Link
            to="/#timeline"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View the Timeline
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-8 doom-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Related Articles
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              to="/blog/doomsday-clock-2027-prediction"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock 2027 Prediction: What We Expected
              </p>
              <p className="text-xs text-muted-foreground mt-1">Analysis</p>
            </Link>
            <Link
              to="/blog/doomsday-clock-history-timeline"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock History: Every Change from 1947 to 2027
              </p>
              <p className="text-xs text-muted-foreground mt-1">Explainer</p>
            </Link>
            <Link
              to="/blog/doomsday-clock-2026"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock 2026: What Changed and Why
              </p>
              <p className="text-xs text-muted-foreground mt-1">Update</p>
            </Link>
            <Link
              to="/blog/who-controls-doomsday-clock"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Who Controls the Doomsday Clock?
              </p>
              <p className="text-xs text-muted-foreground mt-1">Explainer</p>
            </Link>
          </div>
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
