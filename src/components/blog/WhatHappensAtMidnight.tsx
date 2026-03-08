import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  AlertTriangle,
  Radiation,
  Thermometer,
  Cpu,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WhatHappensAtMidnight() {
  useEffect(() => {
    updateMetaTags({
      title:
        "What Happens When the Doomsday Clock Reaches Midnight? | DoomsdayClock.net",
      description:
        "What happens if the Doomsday Clock hits midnight? Learn what midnight symbolizes, why the clock has never reached it, and the catastrophic scenarios it represents.",
      path: "/blog/what-happens-doomsday-clock-midnight",
      newsKeywords:
        "doomsday clock midnight, what happens doomsday clock midnight, doomsday clock meaning, nuclear threat",
      publishedTime: "2026-03-07T00:00:00Z",
      modifiedTime: "2026-03-07T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "What Happens When the Doomsday Clock Reaches Midnight?",
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
          "https://doomsdayclock.net/blog/what-happens-doomsday-clock-midnight",
      },
      description:
        "What happens if the Doomsday Clock hits midnight? The meaning, the symbolism, and why it has never reached midnight.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "doomsday clock midnight",
        "what happens at midnight",
        "nuclear catastrophe",
        "existential risk",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2000,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "midnight");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="midnight"]'
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
          <span className="text-foreground">What Happens at Midnight</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <Clock className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What Happens When the Doomsday Clock{" "}
            <span className="text-doom">Reaches Midnight?</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              7 min read
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
                Set on {currentTime.lastUpdated} — the closest it has ever
                been
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The Short Answer */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Short Answer
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              If the Doomsday Clock reaches midnight, nothing literally
              &quot;happens&quot; in the way a timer triggers a bomb. The
              clock is a metaphor, not a mechanism. There is no button that
              gets pressed, no siren that goes off, no automated sequence
              that begins. Midnight is symbolic &mdash; it represents the
              point of no return, the moment when existential catastrophe
              becomes inevitable or has already occurred.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But that distinction between metaphor and reality matters less
              than you might think. The Doomsday Clock was created in 1947
              by the same scientists who built the atomic bomb. They
              understood, better than anyone alive, that the threats the
              clock measures are not abstract. Nuclear war, climate
              collapse, and disruptive technologies are real dangers with
              real consequences &mdash; consequences that could end
              civilization as we know it.
            </p>
            <p className="text-foreground leading-relaxed">
              So while midnight itself is a symbol, the scenarios it warns
              about are anything but. At{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, we are closer to those scenarios than at any
              point in the clock&apos;s{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-atomic hover:underline"
              >
                79-year history
              </Link>
              .
            </p>
          </section>

          {/* Section 2: What Midnight Represents */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Midnight Represents
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The{" "}
              <Link
                to="/blog/who-controls-doomsday-clock"
                className="text-atomic hover:underline"
              >
                Bulletin of the Atomic Scientists
              </Link>{" "}
              tracks three primary categories of existential threat. Each
              represents a distinct pathway to the kind of civilizational
              catastrophe that midnight symbolizes. Here is what each of
              those pathways looks like at its worst.
            </p>

            {/* Card 1: Nuclear War */}
            <div className="doom-accent-card p-5 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <Radiation className="w-6 h-6 text-doom shrink-0" />
                <h3 className="text-lg font-semibold text-doom">
                  Nuclear War
                </h3>
              </div>
              <p className="text-foreground leading-relaxed mb-3">
                A full-scale nuclear exchange between major powers remains
                the most immediate pathway to midnight. The world&apos;s
                nuclear arsenals contain approximately 12,500 warheads,
                with the United States and Russia holding roughly 90% of
                the total. Even a &quot;limited&quot; exchange of a few
                hundred weapons would be catastrophic beyond anything in
                human experience.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  Hundreds of millions of immediate casualties from blast,
                  heat, and radiation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  Nuclear winter: soot injected into the stratosphere
                  blocks sunlight, dropping global temperatures by 10-20
                  degrees Celsius
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  Global agricultural collapse within one to two growing
                  seasons, leading to worldwide famine
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  Civilizational collapse within months as supply chains,
                  governments, and infrastructure disintegrate
                </li>
              </ul>
            </div>

            {/* Card 2: Climate Collapse */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <div className="flex items-center gap-3 mb-3">
                <Thermometer className="w-6 h-6 text-orange-400 shrink-0" />
                <h3 className="text-lg font-semibold text-foreground">
                  Climate Collapse
                </h3>
              </div>
              <p className="text-foreground leading-relaxed mb-3">
                Unlike nuclear war, climate collapse unfolds over decades
                rather than hours. But the end result can be equally
                devastating. The Bulletin began factoring climate change
                into the clock&apos;s setting in 2007, recognizing it as a
                slow-moving existential threat that compounds all other
                risks.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">&#9679;</span>
                  Runaway greenhouse effect as critical tipping points
                  cascade: permafrost methane release, ice sheet collapse,
                  Amazon dieback
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">&#9679;</span>
                  Sea level rise of several meters displacing billions of
                  coastal inhabitants worldwide
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">&#9679;</span>
                  Agricultural systems failing across major breadbasket
                  regions due to extreme heat, drought, and unpredictable
                  weather
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">&#9679;</span>
                  Mass extinction event accelerating to levels not seen
                  since the end of the dinosaurs 66 million years ago
                </li>
              </ul>
            </div>

            {/* Card 3: Disruptive Technologies */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <Cpu className="w-6 h-6 text-blue-400 shrink-0" />
                <h3 className="text-lg font-semibold text-foreground">
                  Disruptive Technologies
                </h3>
              </div>
              <p className="text-foreground leading-relaxed mb-3">
                The newest category of threat, added in recent years as
                artificial intelligence, biotechnology, and cyber
                capabilities have advanced beyond existing regulatory
                frameworks. These technologies do not just create new
                risks &mdash; they amplify existing nuclear and climate
                threats in ways that are difficult to predict or control.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">&#9679;</span>
                  AI-enabled biological weapons: machine learning tools
                  that can design novel pathogens, lowering the barrier to
                  bioterrorism
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">&#9679;</span>
                  Autonomous weapons systems capable of making lethal
                  decisions without human oversight or intervention
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">&#9679;</span>
                  Cyber attacks on nuclear command and control
                  infrastructure that could trigger false alarms or
                  disable safety systems
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">&#9679;</span>
                  AI-generated disinformation that erodes the shared
                  reality needed for diplomacy and de-escalation
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: Has the Clock Ever Reached Midnight? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Has the Doomsday Clock Ever Reached Midnight?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              No. In its entire 79-year history, from its creation in 1947
              to the present day, the Doomsday Clock has never reached
              midnight. That fact is both reassuring and instructive. It
              means that despite decades of nuclear brinkmanship, proxy
              wars, climate inaction, and technological disruption,
              humanity has always managed to pull back from the edge &mdash;
              sometimes barely.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But the trajectory is unmistakable. The clock has been moving
              steadily closer to midnight, especially in recent years. Here
              is how the closest settings compare:
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-doom">
                    85 seconds (2026)
                  </h4>
                  <span className="text-xs text-doom font-medium px-2 py-0.5 rounded-full bg-doom/20">
                    Current
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The closest the clock has ever been. Set due to
                  escalating nuclear risks, the ongoing Russia-Ukraine war,
                  Middle East conflict, climate change, and AI-related
                  threats.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  89 seconds (2025)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Moved one second closer than the previous record,
                  reflecting compounding global threats and stalled
                  diplomacy.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  90 seconds (2023-2024)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Russia&apos;s invasion of Ukraine and thinly veiled
                  nuclear threats broke the 100-second barrier set in 2020,
                  marking the first time the clock was measured in under
                  100 seconds.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  2 minutes (1953 and 2018)
                </h4>
                <p className="text-sm text-muted-foreground">
                  In 1953, both superpowers tested thermonuclear weapons
                  within months of each other. In 2018, failure to address
                  nuclear threats and climate change returned the clock to
                  this historic danger point.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              The shift from minutes to seconds in 2020 was itself a
              deliberate signal. By moving to{" "}
              <Link
                to="/#timeline"
                className="text-atomic hover:underline"
              >
                100 seconds
              </Link>
              , the Bulletin broke a convention that had lasted 73 years,
              communicating that the level of danger had entered genuinely
              uncharted territory. The subsequent moves to 90, 89, and now
              85 seconds have only reinforced that message.
            </p>
          </section>

          {/* Section 4: Historical Near-Misses */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Historical Near-Misses That Almost Brought Midnight
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              While the clock has never reached midnight, there have been
              moments when the world came terrifyingly close to the
              catastrophes it represents. Many of these incidents were not
              reflected in the clock&apos;s setting at the time, because
              the Bulletin typically adjusts the clock annually rather than
              in real-time. The gap between the clock&apos;s position and
              the actual danger level in these moments underscores how
              close humanity has come to the brink.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Cuban Missile Crisis (1962)
                </h4>
                <p className="text-sm text-muted-foreground">
                  For 13 days in October 1962, the United States and Soviet
                  Union stood on the brink of nuclear war over Soviet
                  missiles deployed to Cuba. Nuclear-armed bombers were
                  airborne, submarines carried nuclear torpedoes, and
                  launch authority had been partially delegated to field
                  commanders. The clock was at 7 minutes at the time and
                  was never adjusted in real-time &mdash; a reminder that
                  the clock measures chronic danger, not minute-by-minute
                  crisis.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Stanislav Petrov Incident (1983)
                </h4>
                <p className="text-sm text-muted-foreground">
                  On September 26, 1983, Soviet early-warning systems
                  falsely reported the launch of five American
                  intercontinental ballistic missiles. Lieutenant Colonel
                  Stanislav Petrov, the duty officer at the Soviet nuclear
                  early-warning center, judged the alert to be a false
                  alarm and chose not to report it up the chain of command.
                  His decision &mdash; based on gut instinct rather than
                  protocol &mdash; may have single-handedly prevented
                  nuclear war. The fate of civilization rested on one
                  man&apos;s judgment call.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Able Archer 83 (1983)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Just weeks after the Petrov incident, NATO conducted
                  &quot;Able Archer 83,&quot; a military exercise
                  simulating a coordinated nuclear attack on the Soviet
                  Union. Soviet leadership, already on high alert, feared
                  the exercise was cover for an actual first strike. Soviet
                  nuclear forces were placed on heightened readiness.
                  Declassified documents later revealed the world was far
                  closer to nuclear war during this exercise than anyone
                  publicly knew at the time.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Norwegian Rocket Incident (1995)
                </h4>
                <p className="text-sm text-muted-foreground">
                  On January 25, 1995, Russian early-warning radar detected
                  a rocket launch off the coast of Norway. The trajectory
                  was consistent with a US submarine-launched ballistic
                  missile. President Boris Yeltsin activated his nuclear
                  command briefcase &mdash; the first confirmed time a
                  Russian president did so in a real alert. The rocket
                  turned out to be a Norwegian research rocket studying the
                  Northern Lights. Russia had been notified in advance, but
                  the message never reached the radar operators.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              Each of these incidents shares a common thread: catastrophe
              was averted not by robust systems or fail-safe protocols, but
              by individual judgment, luck, or both. The margin between
              survival and midnight has often been razor-thin.
            </p>
          </section>

          {/* Section 5: Why the Clock Is a Warning, Not a Prediction */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why the Clock Is a Warning, Not a Prediction
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin of the Atomic Scientists has always been explicit
              about what the Doomsday Clock is and what it is not. It is a
              measure of proximity to catastrophe, not a prediction that
              catastrophe will occur. The distinction is crucial. A
              prediction implies inevitability; a warning implies that
              something can still be done.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The clock is designed to motivate action, not cause despair.
              When it moves forward, the message is not &quot;give
              up&quot; &mdash; it is &quot;pay attention, and demand better
              from your leaders.&quot; When it moves backward, the message
              is that diplomacy, cooperation, and restraint work.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              And history proves the clock <em>can</em> move backward. In
              1991, after the end of the Cold War and the signing of the
              Strategic Arms Reduction Treaty, the clock moved all the way
              back to{" "}
              <span className="text-atomic font-semibold">
                17 minutes to midnight
              </span>{" "}
              &mdash; its safest setting ever. That represents a swing of
              15 minutes from its 1953 low point of just 2 minutes. The{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-atomic hover:underline"
              >
                full timeline
              </Link>{" "}
              shows that progress is possible, even from the most dangerous
              positions.
            </p>
            <p className="text-foreground leading-relaxed">
              Every second gained is a testament to human diplomacy,
              scientific cooperation, and the collective choice to step
              back from the brink. The clock reaching 17 minutes in 1991
              was not inevitable &mdash; it was earned through decades of
              arms control negotiations, public pressure, and political
              courage. The same forces can push the clock backward again,
              even from today&apos;s{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>
              .
            </p>
          </section>

          {/* Section 6: What Would Need to Happen */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Would Need to Happen for the Clock to Reach Midnight
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For the{" "}
              <Link
                to="/blog/who-controls-doomsday-clock"
                className="text-atomic hover:underline"
              >
                Bulletin&apos;s Science and Security Board
              </Link>{" "}
              to move the clock to midnight, the world would need to cross
              a threshold from which recovery is no longer plausible. This
              is not a single event but a convergence of failures &mdash; a
              scenario where the systems designed to prevent catastrophe
              have all broken down simultaneously.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In concrete terms, this could mean:
            </p>
            <ul className="text-foreground space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-doom mt-0.5">&#9679;</span>
                <span>
                  <strong>A deliberate nuclear first strike</strong> or
                  catastrophic miscalculation that triggers a full-scale
                  nuclear exchange between major powers, with no
                  possibility of de-escalation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-doom mt-0.5">&#9679;</span>
                <span>
                  <strong>
                    Multiple simultaneous failures of deterrence
                  </strong>{" "}
                  and diplomacy across different conflict zones,
                  overwhelming the international community&apos;s capacity
                  to respond
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-doom mt-0.5">&#9679;</span>
                <span>
                  <strong>
                    Complete breakdown of international order
                  </strong>{" "}
                  &mdash; the collapse of institutions like the UN, NATO,
                  and arms control treaties that provide the framework for
                  managing existential risks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-doom mt-0.5">&#9679;</span>
                <span>
                  <strong>
                    Irreversible accumulation of climate and technological
                    damage
                  </strong>{" "}
                  past critical tipping points, where feedback loops make
                  catastrophic outcomes inevitable regardless of any future
                  human action
                </span>
              </li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              It is worth noting that the Bulletin <em>could</em>{" "}
              theoretically set the clock to midnight. But in doing so,
              they would be documenting catastrophe, not predicting it.
              Midnight is not a forecast &mdash; it is a diagnosis. If the
              clock ever reaches midnight, it means the warning came too
              late, or was not heeded in time.
            </p>
            <p className="text-foreground leading-relaxed">
              That is precisely why every second matters. At{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, we are in unprecedented territory. But
              unprecedented does not mean inevitable. The clock is still
              ticking, and midnight has not arrived. What happens next
              depends on the choices made by leaders, institutions, and
              ordinary citizens in the months and years ahead.
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
              to="/blog/who-controls-doomsday-clock"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                Who Controls the Doomsday Clock?
              </h4>
              <p className="text-xs text-muted-foreground">
                Inside the Bulletin of the Atomic Scientists and how
                they decide the clock&apos;s setting.
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
            <Link
              to="/embed"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                Embed the Doomsday Clock
              </h4>
              <p className="text-xs text-muted-foreground">
                Add a live Doomsday Clock widget to your own website or
                blog.
              </p>
            </Link>
          </div>
        </div>

        <RelatedArticles
          currentSlug="what-happens-doomsday-clock-midnight"
          slugs={[
            "will-the-world-end-doomsday-clock",
            "doomsday-clock-history-timeline",
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
