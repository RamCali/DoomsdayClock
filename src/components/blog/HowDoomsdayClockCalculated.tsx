import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  FlaskConical,
  Calculator,
  Brain,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function HowDoomsdayClockCalculated() {
  useEffect(() => {
    updateMetaTags({
      title:
        "How Is the Doomsday Clock Calculated? The Science Behind the Setting | DoomsdayClock.net",
      description:
        "How is the Doomsday Clock time calculated? Explore the methodology, threat categories, and expert deliberation process behind the world's most famous risk assessment.",
      path: "/blog/how-is-doomsday-clock-calculated",
      newsKeywords:
        "how is doomsday clock calculated, doomsday clock methodology, doomsday clock science, how doomsday clock works, is doomsday clock accurate, is doomsday clock legit",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "How Is the Doomsday Clock Calculated? The Science Behind the Setting",
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
          "https://doomsdayclock.net/blog/how-is-doomsday-clock-calculated",
      },
      description:
        "How is the Doomsday Clock time calculated? Explore the methodology, threat categories, and expert deliberation process behind the world's most famous risk assessment.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "how is doomsday clock calculated",
        "doomsday clock methodology",
        "doomsday clock science",
        "how doomsday clock works",
        "is doomsday clock accurate",
        "is doomsday clock legit",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2800,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "how-calculated");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="how-calculated"]'
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
            How Is the Doomsday Clock Calculated
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <FlaskConical className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            How Is the{" "}
            <span className="text-doom">Doomsday Clock Calculated?</span>{" "}
            The Science Behind the Setting
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
          {/* Introduction */}
          <section>
            <p className="text-foreground leading-relaxed mb-4">
              One of the most common questions people ask about the
              Doomsday Clock is deceptively simple: how is it calculated?
              With the clock currently set at {currentTime.display} to
              midnight — the closest it has ever been to symbolic
              annihilation — people naturally want to understand the
              methodology behind a number that captures headlines around
              the world every January. Is there a formula? An algorithm?
              A secret equation that converts geopolitical chaos into
              seconds?
            </p>
            <p className="text-foreground leading-relaxed">
              The answer is more nuanced — and arguably more credible —
              than any formula could provide. The Doomsday Clock is the
              product of structured expert deliberation, a process that
              synthesizes deep domain knowledge across multiple
              existential threat categories into a single, powerful
              symbol. Understanding how that process works reveals why
              the clock has maintained its authority for nearly eight
              decades.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
              Not a Formula — a Judgment
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The first thing to understand about how the Doomsday Clock
              is calculated is that it is not calculated in the
              mathematical sense at all. There is no equation where you
              plug in the number of nuclear warheads, multiply by global
              carbon emissions, and divide by diplomatic treaties to get
              a number of seconds. This surprises many people, who
              assume that something as consequential as the Doomsday
              Clock must be driven by a rigorous quantitative model.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Instead, the clock is set through a process of{" "}
              <strong>structured expert judgment</strong> — a
              methodology that is well-established in risk assessment
              fields ranging from intelligence analysis to public
              health. The Science and Security Board of the Bulletin of
              the Atomic Scientists, a group of approximately 18
              world-class scientists and security experts, evaluates the
              current state of global threats and reaches a consensus on
              where the clock should stand. Their judgment integrates
              quantitative data with qualitative analysis, contextual
              understanding, and decades of collective experience.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This approach is actually more appropriate than a formula
              for the kind of risk the clock measures. Existential
              threats are characterized by deep uncertainty, complex
              interactions between variables, and the impossibility of
              precise probability estimates. A formula would give false
              precision — suggesting a level of certainty that simply
              does not exist when assessing whether humanity will
              survive the next century. Expert judgment, by contrast,
              can account for ambiguity, weigh incommensurable factors,
              and incorporate information that resists quantification,
              such as the intentions of political leaders or the
              stability of deterrence relationships.
            </p>
            <p className="text-foreground leading-relaxed">
              The intelligence community uses a similar approach when
              producing National Intelligence Estimates. Climate
              scientists use structured expert elicitation to assess
              tipping point risks. The IPCC relies on expert judgment to
              synthesize thousands of studies into confidence levels.
              The Doomsday Clock sits squarely within this tradition of
              rigorous, structured, but ultimately human assessment.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />
              The Three Pillars of Assessment
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The Science and Security Board organizes its evaluation
              around three primary threat categories, each of which is
              assessed independently before being synthesized into a
              holistic judgment. These three pillars represent the major
              pathways through which human civilization could face
              catastrophic or existential harm.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* Nuclear Risk */}
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2 text-sm sm:text-base">
                  Nuclear Risk
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  The original and still most heavily weighted category.
                  Board members assess the size and readiness of global
                  nuclear arsenals, the status of arms control treaties
                  (or their collapse), proliferation risks from emerging
                  nuclear states, modernization programs that could
                  destabilize deterrence, launch-on-warning postures,
                  and regional flashpoints such as the Korean Peninsula,
                  South Asia, and the Middle East. The erosion of the
                  INF Treaty, suspension of New START inspections, and
                  expansion of Chinese nuclear capabilities have all
                  factored into recent assessments.
                </p>
              </div>

              {/* Climate Change */}
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2 text-sm sm:text-base">
                  Climate Change
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Added to the assessment framework in the 2000s, the
                  climate pillar evaluates global emissions trajectories
                  against Paris Agreement targets, progress (or lack
                  thereof) on policy commitments, the latest research on
                  climate tipping points such as ice sheet collapse and
                  permafrost thaw, the pace of renewable energy
                  transition, and the growing frequency and intensity of
                  extreme weather events. The board weighs whether
                  current action is sufficient to avoid catastrophic
                  warming scenarios.
                </p>
              </div>

              {/* Disruptive Technologies */}
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2 text-sm sm:text-base">
                  Disruptive Technologies
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  The newest and fastest-evolving pillar covers AI
                  weapons systems and autonomous lethal decision-making,
                  cyber threats to nuclear command and control
                  infrastructure, biosecurity risks from synthetic
                  biology and gain-of-function research, and the
                  potential for emerging technologies to amplify
                  existing threats or create entirely new categories of
                  risk. The rapid advancement of AI capabilities and the
                  absence of international governance frameworks have
                  made this pillar increasingly prominent.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              Each pillar is evaluated by board members with specific
              domain expertise. A nuclear physicist may lead the nuclear
              assessment while a climate scientist leads the climate
              evaluation. The key insight is that these pillars do not
              exist in isolation — nuclear conflict could be triggered
              by climate-driven resource competition, AI systems could
              accelerate nuclear escalation, and biosecurity failures
              could destabilize the geopolitical order. The board must
              account for these interactions when synthesizing their
              assessment into a single clock setting.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6" />
              The Evaluation Process
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Setting the Doomsday Clock is not a single meeting or a
              quick vote. The annual evaluation unfolds over several
              months and involves multiple distinct phases, each
              designed to ensure that the final clock setting reflects
              the most thorough and well-informed assessment possible.
            </p>

            <div className="space-y-4">
              {/* Step 1 */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-atomic/20 text-atomic font-bold text-sm shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Individual Assessments
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Beginning in the fall, each board member
                      independently evaluates the current threat
                      landscape within their area of expertise. They
                      review the latest research, track geopolitical
                      developments, analyze data trends, and produce
                      written assessments that document their findings
                      and recommendations. These individual reports
                      form the evidentiary foundation for the group
                      deliberation that follows.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-atomic/20 text-atomic font-bold text-sm shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      External Consultations
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The board reaches beyond its own membership to
                      consult with government officials, diplomats,
                      military leaders, intelligence analysts, and
                      subject matter experts from around the world.
                      These consultations provide perspectives that the
                      board members may not have access to through
                      their own research, including assessments of
                      political will, behind-the-scenes diplomatic
                      developments, and emerging risks that have not
                      yet received wide public attention.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-atomic/20 text-atomic font-bold text-sm shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Classified Briefings
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      In some cases, board members with appropriate
                      security clearances receive classified briefings
                      on matters of national security. While the
                      specifics of these briefings cannot be shared
                      publicly, they inform the board's understanding
                      of threats that may not be fully visible through
                      open-source intelligence alone — such as the
                      current status of nuclear weapons programs,
                      cyber capabilities, or covert military
                      developments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-atomic/20 text-atomic font-bold text-sm shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Full Board Deliberation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The entire Science and Security Board convenes
                      to discuss, debate, and synthesize the evidence.
                      These deliberations can be lengthy and
                      contentious — board members may disagree about
                      whether nuclear or climate risks deserve more
                      weight, whether recent developments represent
                      genuine shifts or temporary fluctuations, and
                      whether the overall threat level warrants moving
                      the clock. The goal is consensus: a position
                      that the board as a whole can stand behind.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-atomic/20 text-atomic font-bold text-sm shrink-0">
                    5
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Consensus Decision
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Once the board reaches agreement on the clock
                      setting, they draft a detailed public statement
                      explaining the reasoning behind their decision.
                      This statement documents which threat categories
                      improved, which deteriorated, and which remained
                      unchanged. It serves as the official record of
                      the board's assessment and provides the public
                      with the context needed to understand the clock
                      setting beyond the headline number.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-atomic/20 text-atomic font-bold text-sm shrink-0">
                    6
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Public Announcement
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The new clock setting is unveiled at a press
                      conference, traditionally held in Washington,
                      D.C. each January. Board members present their
                      findings, answer questions from journalists, and
                      issue their statement. The announcement
                      generates worldwide media coverage and is
                      translated into dozens of languages, making it
                      one of the most widely covered science-policy
                      events on the annual calendar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              Why Seconds Instead of Minutes?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For most of its history, the Doomsday Clock was measured
              in minutes. From its creation in 1947 at 7 minutes to
              midnight through decades of Cold War tension, arms
              control breakthroughs, and post-Soviet uncertainty, the
              clock moved in increments of minutes — sometimes half
              minutes. The farthest it ever stood from midnight was 17
              minutes in 1991, following the end of the Cold War and the
              signing of the Strategic Arms Reduction Treaty.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That changed in January 2020, when the Bulletin moved the
              clock to{" "}
              <strong>100 seconds to midnight</strong> — the first time
              in the clock's 73-year history that it was measured in
              seconds rather than minutes. The shift was not merely
              symbolic. It reflected the board's assessment that the
              threat level had surpassed anything in the clock's
              history, including the most dangerous moments of the Cold
              War such as the Cuban Missile Crisis and the Soviet
              nuclear buildup of the early 1980s.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The move to seconds also gave the board greater
              granularity for future adjustments. When the threat
              landscape was measured in minutes, moving the clock by 30
              seconds was the smallest meaningful increment. By
              switching to a seconds-based framework, the board could
              signal smaller but still significant changes in the global
              risk environment without making dramatic jumps that might
              not accurately reflect the magnitude of change.
            </p>
            <p className="text-foreground leading-relaxed">
              The current setting of {currentTime.display} to midnight
              represents further deterioration from that already
              historic 2020 threshold. Each second closer to midnight
              carries weight — it signals that the board, after months
              of careful evaluation, concluded that the world grew
              measurably more dangerous. The seconds framework
              communicates urgency in a way that minutes no longer
              could, matching the accelerating pace of the threats
              themselves.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />
              Is the Doomsday Clock Accurate?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              "Is the Doomsday Clock accurate?" and "Is the Doomsday
              Clock legit?" are among the most frequently asked
              questions about the clock, and they deserve a direct
              answer. The clock is not a prediction — it does not claim
              to forecast when or whether civilization will end. It is a{" "}
              <strong>risk assessment</strong>, a structured evaluation
              of the current threat environment that communicates how
              dangerous the board believes the present moment to be
              relative to other periods in history.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This distinction matters. A weather forecast predicts a
              specific outcome: rain tomorrow at 3 PM. The Doomsday
              Clock does something different — it assesses the overall
              level of danger, more like a hurricane warning system that
              says "conditions are favorable for a catastrophic storm"
              without specifying exactly when or where it will hit.
              Other risk frameworks operate similarly. The intelligence
              community's threat assessments, the WHO's pandemic alert
              levels, and the Department of Homeland Security's threat
              advisory system all communicate risk levels without
              predicting specific events.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              On the question of track record, the clock's movements
              have generally correlated well with expert consensus on
              global risk levels. It moved closest to midnight during
              periods that historians and security experts broadly
              agree were the most dangerous — the early hydrogen bomb
              era, the height of Cold War tensions, and the current
              period of converging nuclear, climate, and technological
              risks. It moved farthest from midnight during periods of
              genuine risk reduction, such as the early 1990s when the
              Soviet Union dissolved and major arms control agreements
              were signed.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The "fear mongering" criticism is worth addressing fairly.
              Some argue that keeping the clock so close to midnight for
              an extended period diminishes its impact — if midnight
              never comes, why should anyone pay attention? This is a
              legitimate concern, and the Bulletin has acknowledged it.
              But the counterargument is equally compelling: the fact
              that midnight has not arrived does not mean the danger is
              not real. A hospital patient in critical condition may
              survive for years, but that does not mean the doctors were
              wrong to call the condition critical.
            </p>
            <p className="text-foreground leading-relaxed">
              The clock's credibility ultimately rests on the expertise
              and independence of the people who set it. The Science and
              Security Board includes Nobel laureates, former defense
              officials, and leading researchers who stake their
              professional reputations on the assessment. They receive
              no financial benefit from moving the clock in any
              direction, and the Bulletin's independence from government
              funding insulates the process from political pressure.
              Whether one agrees with every clock setting, the process
              behind it is rigorous, transparent, and grounded in
              genuine expertise.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              What Would Move the Clock Back?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is not a one-way ratchet. It has moved
              backward — farther from midnight — eight times in its
              history, and understanding what drove those reversals
              offers concrete hope alongside the warning. The most
              dramatic reversal came in 1991, when the clock jumped from
              10 minutes to 17 minutes to midnight following the end of
              the Cold War, the dissolution of the Soviet Union, and the
              signing of the Strategic Arms Reduction Treaty (START).
              It proved that sustained diplomacy and political will
              could meaningfully reduce existential risk.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Other notable reversals include 1960, when the clock moved
              from 2 minutes to 7 minutes after increased scientific
              cooperation between the US and Soviet Union, and 1963,
              when the Partial Test Ban Treaty pushed the clock from 12
              minutes back to 12 minutes (it held steady as a sign of
              cautious optimism). In 2010, the clock moved from 5
              minutes to 6 minutes following President Obama's arms
              reduction efforts and the Copenhagen climate negotiations.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              So what would move the clock back from its current
              position? The board has been explicit about the kinds of
              developments that would warrant a reversal.{" "}
              <strong>New arms control treaties</strong> — particularly
              a successor to New START with verifiable limits on
              strategic weapons — would be significant.{" "}
              <strong>Significant climate action</strong>, such as major
              emitting nations adopting binding emissions reduction
              targets with credible implementation plans, would address
              the climate pillar.{" "}
              <strong>
                International cooperation on AI governance
              </strong>
              , including binding agreements on autonomous weapons
              systems and AI safety standards, would address the
              disruptive technology pillar.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Other positive developments could include the resumption
              of US-Russia strategic stability dialogues, progress on
              the Iran and North Korea nuclear files, multilateral
              agreements on biosecurity governance, and a demonstrated
              reduction in the risk of accidental nuclear war through
              improved communication channels and de-alerting measures.
            </p>
            <p className="text-foreground leading-relaxed">
              The history of the clock demonstrates that progress is
              possible. Every backward movement was preceded by
              deliberate human choices — treaties negotiated, agreements
              signed, tensions de-escalated. The clock's current
              position is alarming, but it is not inevitable. The
              seconds can be reclaimed, just as minutes were reclaimed
              before. What the clock ultimately measures is not fate but
              choice — and choices can change.
            </p>
          </section>
        </div>

        {/* CTA: Learn who sets the clock */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Who Makes the Decision?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Learn about the Bulletin of the Atomic Scientists, their
            Science and Security Board, and the experts behind the
            Doomsday Clock.
          </p>
          <Link
            to="/blog/who-controls-doomsday-clock"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            Meet the Decision Makers
          </Link>
        </div>

        {/* Internal cross-links */}
        <div className="mt-8 doom-card p-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Related Articles
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/blog/who-controls-doomsday-clock"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                Who Controls the Doomsday Clock?
              </h4>
              <p className="text-xs text-muted-foreground">
                Inside the Bulletin of the Atomic Scientists and the
                board that sets the clock.
              </p>
            </Link>
            <Link
              to="/blog/doomsday-clock-history-timeline"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                Complete Doomsday Clock History Timeline
              </h4>
              <p className="text-xs text-muted-foreground">
                Every movement from 1947 to today — trace the clock's
                journey across eight decades.
              </p>
            </Link>
            <Link
              to="/blog/doomsday-clock-2026"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                Doomsday Clock 2026
              </h4>
              <p className="text-xs text-muted-foreground">
                The latest announcement and what it means for the
                current threat landscape.
              </p>
            </Link>
            <Link
              to="/#what-if"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                What If Simulator
              </h4>
              <p className="text-xs text-muted-foreground">
                Explore how different global events could move the
                Doomsday Clock.
              </p>
            </Link>
          </div>
        </div>

        <RelatedArticles
          currentSlug="how-is-doomsday-clock-calculated"
          slugs={[
            "who-controls-doomsday-clock",
            "doomsday-clock-history-timeline",
            "doomsday-clock-2026",
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
