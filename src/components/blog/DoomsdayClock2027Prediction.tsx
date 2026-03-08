import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, TrendingUp, Minus } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

export function DoomsdayClock2027Prediction() {
  useEffect(() => {
    updateMetaTags({
      title: "Doomsday Clock 2027 Prediction: Will It Move Closer to Midnight? | DoomsdayClock.net",
      description: "Our analysis of the 2027 Doomsday Clock prediction. Will it move closer to midnight? Explore scenarios, expert analysis, and historical patterns for the January 2027 announcement.",
      path: "/blog/doomsday-clock-2027-prediction",
      newsKeywords: "doomsday clock 2027, doomsday clock prediction, doomsday clock 2027 prediction, nuclear threat 2027",
      publishedTime: "2026-03-07T00:00:00Z",
      modifiedTime: "2026-03-07T00:00:00Z",
      section: "Analysis",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Doomsday Clock 2027 Prediction: Will It Move Closer to Midnight?",
      datePublished: "2026-03-07T00:00:00Z",
      dateModified: "2026-03-07T00:00:00Z",
      author: { "@type": "Organization", name: "DoomsdayClock.net", url: "https://doomsdayclock.net" },
      publisher: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        logo: { "@type": "ImageObject", url: "https://doomsdayclock.net/DoomsDayClock.net.png", width: 1200, height: 1200 },
        url: "https://doomsdayclock.net",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://doomsdayclock.net/blog/doomsday-clock-2027-prediction" },
      description: "Analysis and prediction for the 2027 Doomsday Clock announcement. Expert scenarios and historical patterns.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Analysis",
      keywords: ["doomsday clock 2027", "doomsday clock prediction", "nuclear threat 2027", "doomsday clock 2027 time"],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2200,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "2027-prediction");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="2027-prediction"]'
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
          <span className="text-foreground">2027 Prediction</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-doom opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-doom"></span>
            </span>
            Analysis
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock 2027 Prediction:</span>{" "}
            Will It Move Closer to Midnight?
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
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
                Set on {currentTime.lastUpdated} — Next update: {currentTime.nextUpdate}
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: Where We Stand */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Where We Stand: 85 Seconds to Midnight
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock currently sits at {currentTime.display} to midnight — the closest it has ever been
              in its nearly eight-decade history. Set on {currentTime.lastUpdated} by the Bulletin of the Atomic Scientists,
              this position reflects a world grappling with compounding existential threats that show no signs of abating.
              As we look ahead to the January 2027 announcement, the question is not whether the world is dangerous — it
              clearly is — but whether conditions have deteriorated enough to warrant yet another forward move.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The trend line is unmistakable and deeply concerning. The clock has moved forward every single year since 2023,
              a streak of consecutive advances not seen since the darkest days of the Cold War. In 2023, the Bulletin moved
              the clock to 90 seconds in response to Russia's invasion of Ukraine and the nuclear saber-rattling that accompanied
              it. It held at 90 seconds in 2024 as the war ground on. In 2025, a one-second advance to 89 seconds signaled
              that things were getting worse, not better. And in February 2026, the clock lurched forward to 85 seconds — a
              four-second jump that reflected the compounding crises in the Middle East, the continued erosion of arms control,
              and the accelerating climate emergency.
            </p>
            <p className="text-foreground leading-relaxed">
              The trajectory is clear: the world is getting more dangerous, not less. Each year, the Bulletin's Science and
              Security Board has found fewer reasons for optimism and more reasons for alarm. The question for 2027 is
              whether anything will break this pattern — and if so, what?
            </p>
          </section>

          {/* Section 2: Factors Forward */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Factors That Could Push the Clock Forward in 2027
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Multiple interconnected threat vectors are converging in ways that could compel the Bulletin to advance
              the clock once again. Here are the four most significant areas of concern heading into the 2027 assessment.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {/* Factor 1: Nuclear */}
              <div className="doom-accent-card p-4">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Nuclear Escalation
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    US-Iran conflict (Operation Epic Fury, Feb 2026) with strikes on nuclear facilities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Russia-Ukraine war continuing into its fifth year with persistent nuclear rhetoric
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    North Korea's advancing ICBM and warhead miniaturization program
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Collapse of remaining arms control treaties (New START expired 2026)
                  </li>
                </ul>
              </div>

              {/* Factor 2: Climate */}
              <div className="doom-accent-card p-4">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Climate Crisis
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Record global temperatures continuing to shatter benchmarks year after year
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Critical tipping points — ice sheets, permafrost, ocean currents — being crossed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Insufficient policy response and missed emissions targets worldwide
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Extreme weather events increasing in frequency, intensity, and human cost
                  </li>
                </ul>
              </div>

              {/* Factor 3: AI */}
              <div className="doom-accent-card p-4">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  AI and Emerging Tech
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Autonomous weapons development accelerating across multiple nations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    AI-enabled disinformation undermining public trust and democratic institutions
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Cyber threats targeting nuclear command and control infrastructure
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Lack of international governance frameworks for frontier AI systems
                  </li>
                </ul>
              </div>

              {/* Factor 4: Geopolitical */}
              <div className="doom-accent-card p-4">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Geopolitical Instability
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Great power competition intensifying between the US, China, and Russia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    International institutions weakening — UN, NATO, nonproliferation regime
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Regional conflicts multiplying across the Middle East, Eastern Europe, and Asia
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Diplomatic channels narrowing as trust between major powers erodes
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              The interplay between these threat categories is what makes the current moment especially precarious.
              Nuclear escalation is compounded by AI-driven misinformation. Climate disasters fuel geopolitical
              instability. Weakening institutions reduce the world's capacity to respond to any single crisis, let
              alone the cascading combination currently in play. The Bulletin explicitly considers these
              interconnections, and they all point in the same direction.
            </p>
          </section>

          {/* Section 3: Factors Back */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Factors That Could Move the Clock Back
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While the prevailing trend is deeply concerning, it would be irresponsible not to consider the
              scenarios — however unlikely — that could prompt the Bulletin to hold the clock steady or even move
              it back. The clock has moved backward before, and understanding what it would take offers a roadmap
              for those working to reduce existential risk.
            </p>
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  New arms control agreements
                </h4>
                <p className="text-sm text-muted-foreground">
                  A successor to New START or any binding agreement limiting nuclear arsenals between major powers
                  would be a significant positive signal. Even preliminary negotiations would indicate a reversal of
                  the current arms control collapse.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  US-Iran diplomatic resolution
                </h4>
                <p className="text-sm text-muted-foreground">
                  A ceasefire, de-escalation agreement, or renewed nuclear negotiations following Operation Epic Fury
                  would demonstrate that even the most acute crises can be resolved through diplomacy rather than force.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Climate breakthrough technology or policy
                </h4>
                <p className="text-sm text-muted-foreground">
                  A major international climate agreement with binding targets, or a technological breakthrough in carbon
                  capture or clean energy deployment, could address one of the three pillars the Bulletin evaluates.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  International AI governance framework
                </h4>
                <p className="text-sm text-muted-foreground">
                  A binding international treaty governing autonomous weapons and AI in military contexts would address
                  the Bulletin's growing concerns about disruptive technologies.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Ukraine ceasefire or peace agreement
                </h4>
                <p className="text-sm text-muted-foreground">
                  An end to the Russia-Ukraine war — which has been the single largest driver of clock advances since
                  2023 — would remove a major source of nuclear risk and geopolitical instability.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              Realistically, none of these developments appear imminent as of early 2026. The geopolitical environment
              is characterized by escalation, not de-escalation; by fragmentation, not cooperation. But history has
              surprised us before — the rapid end of the Cold War, the Iran nuclear deal of 2015, and other diplomatic
              breakthroughs seemed impossible until they happened.
            </p>
          </section>

          {/* Section 4: Three Scenarios */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Three Scenarios for January 2027
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Based on our analysis of historical patterns, current threat trajectories, and the Bulletin's
              decision-making framework, we have identified three plausible scenarios for the January 2027
              announcement. Each reflects a different assessment of where the world will stand ten months from now.
            </p>

            <div className="space-y-4 my-6">
              {/* Scenario A: Most Likely — Forward */}
              <div className="p-5 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-5 h-5 text-doom" />
                  <h4 className="font-bold text-doom text-lg">
                    Scenario A: Moves Closer — 75-80 Seconds
                  </h4>
                </div>
                <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-doom/20 text-doom mb-3">
                  Most Likely
                </span>
                <p className="text-sm text-muted-foreground mb-3">
                  If current trends continue and the Iran situation remains unresolved — which is the most
                  probable trajectory — the Bulletin will almost certainly advance the clock again. The historical
                  pattern is compelling: the clock has moved forward every year from 2023 to 2026, and there is no
                  precedent for a reversal during an active period of escalation.
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  A move to 75-80 seconds would represent the fifth consecutive year of forward movement and would
                  continue the incremental advances the Bulletin has favored in recent years. The four-second jump
                  in 2026 (from 89 to 85) suggests the Board is willing to make meaningful moves, but not dramatic
                  leaps, when conditions worsen steadily rather than catastrophically.
                </p>
                <p className="text-sm text-muted-foreground">
                  Under this scenario, the Bulletin cites the ongoing fallout from Operation Epic Fury, the
                  continued Russia-Ukraine war, worsening climate indicators, and the absence of any meaningful
                  arms control progress as primary drivers.
                </p>
              </div>

              {/* Scenario B: Dramatic Move */}
              <div className="p-5 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-5 h-5 text-yellow-500" />
                  <h4 className="font-bold text-yellow-500 text-lg">
                    Scenario B: Dramatic Move — Under 60 Seconds
                  </h4>
                </div>
                <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-yellow-500/20 text-yellow-500 mb-3">
                  Possible if Major Escalation
                </span>
                <p className="text-sm text-muted-foreground mb-3">
                  If a major escalation occurs between now and January 2027 — the use of a nuclear weapon in
                  conflict, a catastrophic climate tipping point being visibly crossed, or a direct military
                  confrontation between nuclear powers — the Bulletin could make an unprecedented jump, bringing
                  the clock to under 60 seconds for the first time.
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  There is historical precedent for barrier-breaking moves. In 2020, the Bulletin shifted from
                  minutes to seconds for the first time, setting the clock at 100 seconds. That move broke a
                  conceptual barrier that had stood since 1947. A drop below 60 seconds would break another — and
                  it would signal that the Bulletin believes we are in truly unprecedented, uncharted territory.
                </p>
                <p className="text-sm text-muted-foreground">
                  This scenario, while less likely than Scenario A, is far from implausible given the number of
                  active flashpoints. The Iran conflict alone could escalate dramatically if nuclear facilities
                  are further targeted or if Iran accelerates its weapons program in response.
                </p>
              </div>

              {/* Scenario C: Stays or Moves Back */}
              <div className="p-5 rounded-lg bg-atomic/10 border border-atomic/30">
                <div className="flex items-center gap-3 mb-3">
                  <Minus className="w-5 h-5 text-atomic" />
                  <h4 className="font-bold text-atomic text-lg">
                    Scenario C: Stays the Same or Moves Back
                  </h4>
                </div>
                <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-atomic/20 text-atomic mb-3">
                  Least Likely
                </span>
                <p className="text-sm text-muted-foreground mb-3">
                  For the clock to hold steady or move backward, significant diplomatic breakthroughs would need
                  to occur across multiple threat categories. This is not without historical precedent — in 1991,
                  the clock moved all the way back to 17 minutes to midnight after the Cold War ended and the
                  Strategic Arms Reduction Treaty was signed. In 2010, it moved back one minute on the strength
                  of international climate cooperation and the New START treaty.
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  But those reversals occurred during periods of genuine, broad-based de-escalation. The current
                  moment is characterized by the opposite: escalation across every dimension the Bulletin evaluates.
                  For the clock to hold at 85 seconds, the Board would need to conclude that the situation, while
                  dire, has not materially worsened — a difficult case to make given the events of early 2026.
                </p>
                <p className="text-sm text-muted-foreground">
                  This is the least likely scenario given the current trajectory. It would require major, positive
                  developments in nuclear diplomacy, climate policy, and geopolitical stability — all within the
                  next ten months.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Historical Pattern */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What the Historical Pattern Tells Us
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock's recent trajectory offers important context for any 2027 prediction. Since 2020,
              when the clock first broke through the minutes barrier into seconds, the trend has been relentlessly
              forward. Let's examine the data.
            </p>
            <div className="space-y-3 my-6">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">2020</span>
                <span className="text-sm text-muted-foreground">100 seconds — broke the minutes barrier</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">2023</span>
                <span className="text-sm text-muted-foreground">90 seconds — Ukraine war</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">2024</span>
                <span className="text-sm text-muted-foreground">90 seconds — unchanged</span>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">2025</span>
                <span className="text-sm text-muted-foreground">89 seconds — one-second advance</span>
              </div>
              <div className="p-3 rounded-lg bg-doom/10 border border-doom/30 flex items-center justify-between">
                <span className="text-sm font-bold text-doom">2026</span>
                <span className="text-sm text-doom font-medium">85 seconds — four-second jump</span>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              From 2023 to 2026, the clock moved forward a total of 5 seconds over four years — an average of
              roughly 1.25 seconds per year if you include the unchanged 2024 reading, or about 3.3 seconds per
              active-move year if you exclude it. The 2026 jump of four seconds was the largest single advance
              since 2023 and suggests the Bulletin is becoming more willing to make meaningful moves as conditions
              deteriorate.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              If we extrapolate the recent trend, a simple average would suggest the clock might land around 81-82
              seconds in 2027. But the Bulletin does not follow mathematical formulas — it responds to real-world
              events. The clock is a judgment call made by a board of experts, not an algorithm. A single major
              event — a nuclear weapon test, a climate catastrophe, or a new military conflict — could push the
              clock far beyond what any trend line would suggest.
            </p>
            <p className="text-foreground leading-relaxed">
              Conversely, a genuine diplomatic breakthrough could break the pattern entirely. The clock's history
              includes dramatic reversals: it moved from 3 minutes in 1984 to 6 minutes in 1988, and from 10
              minutes in 1990 to 17 minutes in 1991. But those reversals were driven by transformative events —
              the INF Treaty and the end of the Cold War, respectively. Nothing of comparable magnitude appears
              to be on the horizon today.
            </p>
          </section>

          {/* Section 6: Make Your Own Prediction */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Make Your Own Prediction
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The analysis above reflects our best assessment, but the future is inherently uncertain. We've built
              several tools to help you engage with these questions directly and form your own view of where the
              Doomsday Clock is headed.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-6">
              <Link
                to="/#predictions"
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
              >
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-doom transition-colors">
                  Prediction Poll
                </h4>
                <p className="text-sm text-muted-foreground">
                  Join thousands of others in predicting the next Doomsday Clock setting. Cast your vote and see
                  how your prediction compares.
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
                  Explore different scenarios and see how various events could affect the Doomsday Clock's position.
                  Toggle factors on and off to model outcomes.
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
                  Discuss your analysis with the community. Share your reasoning, debate the factors, and learn
                  from other perspectives.
                </p>
              </Link>
            </div>
          </section>
        </div>

        {/* CTA: Get Notified */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Get Notified When the 2027 Results Are Announced
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Be the first to know when the Bulletin of the Atomic Scientists reveals the 2027 Doomsday Clock
            setting. Sign up for instant notifications.
          </p>
          <Link
            to="/#notify"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            Get Notified
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-8 doom-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Related Articles
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              to="/blog/us-iran-crisis-doomsday-clock"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Operation Epic Fury: How US-Iran Strikes Could Push the Clock to the Brink
              </p>
              <p className="text-xs text-muted-foreground mt-1">Breaking Analysis</p>
            </Link>
            <Link
              to="/blog/doomsday-clock-history-timeline"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock History: Every Change from 1947 to 2026
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
              to="/blog/doomsday-clock-comic-vs-real"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock vs. Pop Culture: Comic vs. Real
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
