import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  RotateCcw,
  TrendingDown,
  History,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function CanDoomsdayClockGoBack() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Can the Doomsday Clock Go Back? A History of Reversals | DoomsdayClock.net",
      description:
        "Can the Doomsday Clock be reversed? Yes — it has moved backward 8 times. Explore every reversal, what caused them, and what it would take to turn the clock back today.",
      path: "/blog/can-doomsday-clock-go-back",
      newsKeywords:
        "can doomsday clock go back, doomsday clock reversed, doomsday clock go backwards, lowest doomsday clock, farthest from midnight",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Can the Doomsday Clock Go Back? A History of Reversals",
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
          "https://doomsdayclock.net/blog/can-doomsday-clock-go-back",
      },
      description:
        "Can the Doomsday Clock be reversed? Yes — it has moved backward 8 times. Explore every reversal, what caused them, and what it would take to turn the clock back today.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "can doomsday clock go back",
        "doomsday clock reversed",
        "doomsday clock go backwards",
        "lowest doomsday clock",
        "farthest from midnight",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2400,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "can-go-back");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="can-go-back"]'
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
          <span className="text-foreground">Can the Clock Go Back?</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <Clock className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Can the Doomsday Clock Go Back?{" "}
            <span className="text-doom">A History of Reversals</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 14, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          {/* Current clock context */}
          <div className="doom-accent-card p-4 flex items-center gap-4">
            <RotateCcw className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                The Doomsday Clock is currently at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight
              </p>
              <p className="text-xs text-muted-foreground">
                Set on {currentTime.lastUpdated} — the closest it has ever
                been
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: Yes, the Clock Can Go Back */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Yes, the Clock Can Go Back
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              One of the most common questions about the Doomsday Clock is
              whether it can only move forward. The answer is a definitive
              no &mdash; the clock has moved backward{" "}
              <strong>8 times</strong> since it was first set at 7 minutes
              to midnight in 1947. This is not a minor footnote in the
              clock&apos;s history. It is one of its most important design
              features.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock was never intended to be a simple
              countdown to catastrophe. The{" "}
              <Link
                to="/blog/who-controls-doomsday-clock"
                className="text-atomic hover:underline"
              >
                Bulletin of the Atomic Scientists
              </Link>{" "}
              created it as a barometer &mdash; a tool that responds to
              both positive and negative developments in global security.
              When treaties are signed, when diplomatic breakthroughs
              occur, when nations step back from the brink, the clock
              moves backward. That responsiveness is what gives the clock
              its moral authority and its practical value.
            </p>
            <p className="text-foreground leading-relaxed">
              If the clock could only move forward, it would be nothing
              more than a fatalistic countdown. Instead, it communicates
              something far more powerful: that the future is not fixed.
              Human choices matter. Diplomacy works. Arms control saves
              lives. The clock&apos;s backward movements are proof that
              progress is possible, even when the world seems to be
              hurtling toward disaster. At{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, that message has never been more important.
            </p>
          </section>

          {/* Section 2: Every Time the Clock Moved Back */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Every Time the Clock Moved Back
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Here is the complete record of every backward movement in the
              Doomsday Clock&apos;s{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-atomic hover:underline"
              >
                79-year history
              </Link>
              . Each reversal was driven by concrete diplomatic
              achievements, treaty signings, or geopolitical shifts that
              reduced the risk of existential catastrophe.
            </p>

            <div className="space-y-4">
              {/* 1960 */}
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-atomic shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">
                      1960
                    </h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-atomic/20 text-atomic">
                    2 min &rarr; 7 min
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Pugwash Conferences on Science and World Affairs
                  brought scientists from both sides of the Iron Curtain
                  together for the first time. This unprecedented
                  scientific cooperation &mdash; along with growing public
                  awareness of nuclear dangers &mdash; convinced the
                  Bulletin that the superpowers were beginning to
                  understand the need for restraint. The clock jumped 5
                  minutes backward, the first reversal in its history.
                </p>
              </div>

              {/* 1963 */}
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-atomic shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">
                      1963
                    </h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-atomic/20 text-atomic">
                    7 min &rarr; 12 min
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Partial Test Ban Treaty (PTBT) prohibited nuclear
                  weapons tests in the atmosphere, in outer space, and
                  underwater. Signed by the United States, Soviet Union,
                  and United Kingdom in the wake of the Cuban Missile
                  Crisis, it marked the first legally binding agreement
                  limiting nuclear testing. The clock moved back 5 minutes
                  &mdash; reflecting genuine hope that the two superpowers
                  could negotiate their way out of the arms race.
                </p>
              </div>

              {/* 1969 */}
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-atomic shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">
                      1969
                    </h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-atomic/20 text-atomic">
                    7 min &rarr; 10 min
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Nuclear Non-Proliferation Treaty (NPT) was signed,
                  establishing the framework that would prevent the spread
                  of nuclear weapons to additional countries. Nearly every
                  nation on Earth eventually joined the treaty, making it
                  one of the most widely adhered-to arms control agreements
                  in history. The Bulletin moved the clock back 3 minutes,
                  recognizing that limiting the number of nuclear-armed
                  states was critical to long-term survival.
                </p>
              </div>

              {/* 1972 */}
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-atomic shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">
                      1972
                    </h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-atomic/20 text-atomic">
                    10 min &rarr; 12 min
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The United States and Soviet Union signed two landmark
                  agreements: the Strategic Arms Limitation Treaty (SALT I)
                  and the Anti-Ballistic Missile (ABM) Treaty. SALT I
                  placed the first-ever limits on the number of strategic
                  nuclear weapons each side could deploy, while the ABM
                  Treaty restricted missile defense systems to prevent a
                  destabilizing arms race. Together, they represented the
                  high-water mark of d&eacute;tente and moved the clock
                  back to 12 minutes.
                </p>
              </div>

              {/* 1988 */}
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-atomic shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">
                      1988
                    </h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-atomic/20 text-atomic">
                    3 min &rarr; 6 min
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Intermediate-Range Nuclear Forces (INF) Treaty,
                  signed by Ronald Reagan and Mikhail Gorbachev, eliminated
                  an entire class of nuclear weapons for the first time in
                  history. All ground-launched ballistic and cruise missiles
                  with ranges between 500 and 5,500 kilometers were
                  destroyed &mdash; roughly 2,700 missiles in total. The
                  treaty included unprecedented on-site verification
                  measures and demonstrated that nuclear disarmament was not
                  just theoretically possible but practically achievable.
                </p>
              </div>

              {/* 1990 */}
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-atomic shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">
                      1990
                    </h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-atomic/20 text-atomic">
                    6 min &rarr; 10 min
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The fall of the Berlin Wall in November 1989 signaled the
                  beginning of the end of the Cold War. As the Iron Curtain
                  collapsed across Eastern Europe, the ideological divide
                  that had driven the nuclear arms race for four decades
                  began to dissolve. The Bulletin moved the clock back 4
                  minutes, recognizing that the geopolitical landscape had
                  fundamentally shifted in favor of peace and cooperation.
                </p>
              </div>

              {/* 1991 */}
              <div className="p-5 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <TrendingDown className="w-5 h-5 text-doom shrink-0" />
                    <h3 className="text-lg font-semibold text-doom">
                      1991
                    </h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-doom/20 text-doom">
                    10 min &rarr; 17 min (safest ever)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Cold War officially ended. The United States and
                  Soviet Union signed the Strategic Arms Reduction Treaty
                  (START), the first agreement to actually reduce &mdash;
                  not just limit &mdash; strategic nuclear arsenals. The
                  dissolution of the Soviet Union in December 1991 removed
                  the existential standoff that had defined global politics
                  for nearly half a century. The clock reached 17 minutes
                  to midnight &mdash; the farthest it has ever been.
                </p>
              </div>

              {/* 2010 */}
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <History className="w-5 h-5 text-atomic shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">
                      2010
                    </h3>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-atomic/20 text-atomic">
                    5 min &rarr; 6 min
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  President Barack Obama and Russian President Dmitry
                  Medvedev engaged in productive arms reduction talks that
                  led to the New START treaty. The Copenhagen climate summit
                  also generated renewed international momentum toward
                  addressing climate change. The clock moved back just one
                  minute &mdash; a modest reversal reflecting cautious
                  optimism rather than a fundamental shift. It would be the
                  last time the clock moved backward.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: What Drove the Biggest Reversal */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Drove the Biggest Reversal
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The 1991 setting of 17 minutes to midnight remains the safest
              the Doomsday Clock has ever been, and it is worth
              understanding exactly what made that moment possible. The
              clock moved 7 minutes in a single adjustment &mdash; from 10
              minutes to 17 &mdash; the largest single backward movement in
              its history.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Three converging developments drove this historic reversal.
              First, the Strategic Arms Reduction Treaty (START) was signed
              by George H.W. Bush and Mikhail Gorbachev in July 1991. Unlike
              previous arms control agreements that merely capped the number
              of weapons, START required both sides to make deep, verifiable
              cuts to their strategic nuclear arsenals. Each side would
              reduce to no more than 6,000 deployed warheads and 1,600
              delivery vehicles &mdash; a reduction of roughly 35% from
              existing levels.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Second, the dissolution of the Soviet Union in December 1991
              ended the ideological and military confrontation that had
              defined the nuclear age. For the first time since 1947, the
              world was no longer divided into two hostile blocs with
              thousands of nuclear weapons aimed at each other on
              hair-trigger alert. The existential standoff that had created
              the Doomsday Clock in the first place was over.
            </p>
            <p className="text-foreground leading-relaxed">
              Third, and perhaps most importantly, the transition was
              managed without catastrophe. The Soviet Union&apos;s nuclear
              arsenal &mdash; spread across Russia, Ukraine, Belarus, and
              Kazakhstan &mdash; was consolidated and secured through
              cooperative programs like Nunn-Lugar. The fact that the
              largest empire in history could dissolve without a single
              nuclear weapon being used or lost was itself a remarkable
              achievement of diplomacy and international cooperation. It
              proved that even the most dangerous situations could be
              navigated peacefully when the political will existed.
            </p>
          </section>

          {/* Section 4: Why the Clock Hasn't Gone Back Since 2010 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why the Clock Hasn&apos;t Gone Back Since 2010
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The most sobering fact about the Doomsday Clock&apos;s
              reversals is how long it has been since the last one. The
              clock moved backward one minute in 2010. Since then &mdash;
              for 16 consecutive years &mdash; it has either stayed in
              place or moved forward. This is the longest stretch without
              a backward movement in the clock&apos;s entire history.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The reasons are not hard to identify. The arms control
              framework that drove most of the clock&apos;s backward
              movements has been systematically dismantled. The United
              States withdrew from the INF Treaty in 2019. Russia
              suspended its participation in the New START treaty in 2023
              and later withdrew entirely. The Open Skies Treaty, which
              allowed mutual aerial surveillance, collapsed in 2020-2021.
              The architecture of arms control that took decades to build
              has been torn down in just a few years.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Meanwhile, new threats have compounded the old ones. Climate
              change has accelerated, with global temperatures breaking
              records year after year and international climate commitments
              falling far short of what scientists say is necessary.
              Artificial intelligence has introduced entirely new
              categories of risk, from autonomous weapons systems to
              AI-enabled disinformation that undermines the shared reality
              needed for effective diplomacy. The Bulletin added
              &quot;disruptive technologies&quot; as a formal factor in
              the clock&apos;s assessment, acknowledging that the threat
              landscape has fundamentally expanded.
            </p>
            <p className="text-foreground leading-relaxed">
              Multiple regional conflicts have further darkened the
              picture. Russia&apos;s invasion of Ukraine in 2022 was
              accompanied by explicit nuclear threats from the Kremlin
              &mdash; the most direct nuclear saber-rattling since the
              Cold War. Conflict in the Middle East has escalated and
              drawn in multiple regional powers. These are not abstract
              risks; they are active crises that could escalate at any
              time. Taken together, these developments explain why the{" "}
              <Link
                to="/blog/doomsday-clock-2027-prediction"
                className="text-atomic hover:underline"
              >
                conditions for a reversal
              </Link>{" "}
              have simply not materialized.
            </p>
          </section>

          {/* Section 5: What Would It Take to Reverse the Clock Today? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Would It Take to Reverse the Clock Today?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Looking at what drove the clock backward in the past, a
              clear pattern emerges: every reversal was tied to specific,
              verifiable diplomatic achievements. Not rhetoric, not good
              intentions, but signed agreements and structural changes
              that materially reduced existential risk. What would the
              modern equivalent look like?
            </p>
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  A US-Russia or US-China Arms Control Breakthrough
                </h4>
                <p className="text-sm text-muted-foreground">
                  A new strategic arms reduction treaty &mdash;
                  particularly one that brings China into the arms control
                  framework for the first time &mdash; would be the single
                  most impactful step. China&apos;s nuclear arsenal is
                  expanding rapidly, and no bilateral or multilateral
                  agreement currently limits its growth. A trilateral
                  framework that caps and reduces arsenals across all three
                  major nuclear powers would represent a generational
                  achievement in arms control.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Dramatic Climate Action
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Bulletin has made clear that climate change is now a
                  permanent factor in the clock&apos;s setting. A credible
                  global commitment to limiting warming to 1.5 degrees
                  Celsius &mdash; backed by binding emissions targets,
                  accelerated renewable energy deployment, and
                  international climate finance &mdash; would signal the
                  kind of collective action that has historically moved
                  the clock backward.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  International AI Governance Framework
                </h4>
                <p className="text-sm text-muted-foreground">
                  A binding international agreement on AI weapons and
                  autonomous systems &mdash; analogous to the Biological
                  Weapons Convention or the Chemical Weapons Convention
                  &mdash; would address one of the newest and
                  fastest-growing categories of existential risk. Such a
                  framework would need to include prohibitions on fully
                  autonomous lethal weapons, safeguards for AI in nuclear
                  command and control, and transparency measures for
                  military AI development.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Resolution of Active Conflicts
                </h4>
                <p className="text-sm text-muted-foreground">
                  A negotiated end to the Russia-Ukraine war, meaningful
                  de-escalation in the Middle East, and reduced tensions
                  across the Taiwan Strait would collectively remove
                  several of the acute crisis points that have driven the
                  clock forward in recent years. No single conflict
                  resolution would be sufficient, but progress on multiple
                  fronts simultaneously would demonstrate the kind of
                  diplomatic momentum the Bulletin looks for.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              None of these scenarios is impossible. Arms control treaties
              have been negotiated under far worse conditions &mdash; the
              Partial Test Ban Treaty was signed less than a year after the
              Cuban Missile Crisis brought the world to the brink of
              nuclear war. The INF Treaty was signed during a period when
              US-Soviet relations were at their most confrontational since
              the 1960s. History shows that the clock can go back even from
              the most dangerous positions.
            </p>
            <p className="text-foreground leading-relaxed">
              But history also shows that reversals require political will,
              public pressure, and sustained diplomatic effort. They do not
              happen on their own. At{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, the urgency of finding that will has never been
              greater. The clock has gone back before. Whether it goes back
              again depends on whether today&apos;s leaders can match the
              courage and commitment of their predecessors &mdash; and
              whether citizens demand that they do.
            </p>
          </section>
        </div>

        {/* CTA: What If Simulator */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            See How Current Events Could Move the Clock
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use our What If simulator to explore how different global
            scenarios &mdash; nuclear escalation, climate milestones,
            diplomatic breakthroughs &mdash; could push the Doomsday Clock
            forward or backward.
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
              to="/blog/doomsday-clock-history-timeline"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                Complete Doomsday Clock Timeline (1947-2026)
              </h4>
              <p className="text-xs text-muted-foreground">
                Every change in the clock&apos;s 79-year history, from 7
                minutes to 85 seconds.
              </p>
            </Link>
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
              to="/blog/doomsday-clock-2027-prediction"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                Doomsday Clock 2027 Prediction
              </h4>
              <p className="text-xs text-muted-foreground">
                What the Bulletin might decide at the next clock
                announcement and what factors will drive it.
              </p>
            </Link>
            <Link
              to="/#timeline"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                Interactive Timeline
              </h4>
              <p className="text-xs text-muted-foreground">
                Explore every Doomsday Clock change on our interactive
                visual timeline.
              </p>
            </Link>
          </div>
        </div>

        <RelatedArticles
          currentSlug="can-doomsday-clock-go-back"
          slugs={[
            "doomsday-clock-history-timeline",
            "doomsday-clock-2027-prediction",
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
