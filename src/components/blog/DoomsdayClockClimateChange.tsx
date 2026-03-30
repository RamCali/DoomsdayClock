import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  AlertTriangle,
  Thermometer,
  Cpu,
} from "lucide-react";
import { currentTime, clockHistory } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockClimateChange() {
  useEffect(() => {
    updateMetaTags({
      title:
        "How Climate Change Affects the Doomsday Clock | DoomsdayClock.net",
      description:
        "Climate change has been a factor in the Doomsday Clock since 2007. Learn how global warming, AI, and emerging threats influence the clock's position alongside nuclear risks.",
      path: "/blog/doomsday-clock-climate-change",
      newsKeywords:
        "doomsday clock climate change, doomsday clock global warming, doomsday clock ai, environmental doomsday clock",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "How Climate Change Affects the Doomsday Clock",
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
          "https://doomsdayclock.net/blog/doomsday-clock-climate-change",
      },
      description:
        "Climate change has been a factor in the Doomsday Clock since 2007. Learn how global warming, AI, and emerging threats influence the clock's position.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "doomsday clock climate change",
        "doomsday clock global warming",
        "doomsday clock ai",
        "environmental doomsday clock",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2400,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does climate change affect the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Since 2007, climate change has been a formal factor in the Doomsday Clock's setting. The Bulletin of the Atomic Scientists evaluates emissions trends, tipping points, policy failures, and extreme weather events alongside nuclear and technology risks when determining the clock's position.",
          },
        },
        {
          "@type": "Question",
          name: "When was climate change added to the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Climate change was first incorporated into the Doomsday Clock's assessment in 2007. Before that year, the clock was set exclusively based on nuclear threats. The Bulletin recognized that global warming posed its own existential risk to civilization.",
          },
        },
        {
          "@type": "Question",
          name: "Does AI affect the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Bulletin added disruptive technologies — including artificial intelligence — as a formal factor in recent clock assessments. Concerns include autonomous weapons systems, AI-assisted biological research, deepfake disinformation, and cyber attacks on nuclear infrastructure.",
          },
        },
        {
          "@type": "Question",
          name: "What are the three threats the Doomsday Clock measures?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock now evaluates three categories of existential threat: nuclear weapons, climate change, and disruptive technologies (including AI). These three threat categories interact and compound each other, creating a more complex risk landscape than nuclear weapons alone.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "climate-change");
    script.textContent = JSON.stringify([articleSchema, faqSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="climate-change"]'
      );
      if (el) el.remove();
      resetToDefaults();
    };
  }, []);

  const climateEntry = clockHistory.find((e) => e.year === 2007);

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
          <span className="text-foreground">Climate Change &amp; the Clock</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            How <span className="text-doom">Climate Change</span> Affects the
            Doomsday Clock
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
                Climate change, nuclear risks, and AI threats all contribute to
                the current record-close setting
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: When Climate Change Entered the Equation */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              When Climate Change Entered the Equation
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For the first 60 years of its existence, the Doomsday Clock
              measured one thing: nuclear risk. From its creation in 1947
              through 2006, every forward and backward movement was driven
              entirely by nuclear weapons developments &mdash; arms races,
              treaties, proliferation, and geopolitical confrontations between
              nuclear powers. Climate change, while increasingly recognized by
              scientists as a civilizational threat, was not part of the
              clock&apos;s calculus.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That changed in 2007. The Bulletin of the Atomic Scientists
              announced that, for the first time, the Doomsday Clock would
              incorporate climate change as a factor in its annual assessment.
              The decision reflected a growing scientific consensus that global
              warming was not merely an environmental concern &mdash; it was an
              existential threat to human civilization on par with nuclear
              weapons, albeit operating on a different timescale.
            </p>
            {climateEntry && (
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 my-4">
                <h4 className="font-semibold text-foreground mb-1">
                  {climateEntry.year}: {climateEntry.time} to midnight
                </h4>
                <p className="text-sm text-muted-foreground">
                  {climateEntry.details}
                </p>
                <p className="text-xs text-blue-400 mt-2 font-medium">
                  The first year climate change was factored into the
                  Doomsday Clock&apos;s setting.
                </p>
              </div>
            )}
            <p className="text-foreground leading-relaxed">
              The Bulletin&apos;s reasoning was straightforward: a threat that
              could render large portions of the Earth uninhabitable, collapse
              global food systems, trigger mass migration of billions of people,
              and destabilize every government on the planet met any reasonable
              definition of &quot;existential risk.&quot; By 2007, the
              scientific evidence had become overwhelming, and the Bulletin
              concluded that a tool designed to measure threats to human
              civilization could no longer ignore the biggest slow-motion threat
              humanity had ever faced.
            </p>
          </section>

          {/* Section 2: How Climate Factors Into the Clock Setting */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How Climate Factors Into the Clock Setting
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When the{" "}
              <Link
                to="/blog/who-controls-doomsday-clock"
                className="text-doom hover:underline"
              >
                Science and Security Board
              </Link>{" "}
              meets each year to assess the Doomsday Clock&apos;s position,
              climate change is now evaluated alongside nuclear threats and
              emerging technologies. The specific climate factors they consider
              include:
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-doom/5 border border-doom/20">
                <h4 className="font-semibold text-foreground mb-1">
                  <Thermometer className="w-4 h-4 inline mr-2 text-doom" />
                  Global emissions trends
                </h4>
                <p className="text-sm text-muted-foreground">
                  Are greenhouse gas emissions rising, stabilizing, or falling?
                  Despite decades of climate summits, global CO2 emissions
                  reached record highs in 2024. The gap between what nations
                  promise and what they deliver continues to widen.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Climate tipping points
                </h4>
                <p className="text-sm text-muted-foreground">
                  Scientists have identified critical thresholds &mdash; the
                  collapse of the West Antarctic Ice Sheet, the dieback of the
                  Amazon rainforest, the disruption of the Atlantic Meridional
                  Overturning Circulation (AMOC) &mdash; that, once crossed,
                  could trigger cascading and irreversible changes. Several of
                  these tipping points are now considered &quot;imminent&quot; by
                  leading climate researchers.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Policy failures and insufficient action
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Paris Agreement&apos;s goal of limiting warming to
                  1.5&deg;C above pre-industrial levels has been a key
                  benchmark. In 2024, the global average temperature breached
                  1.5&deg;C for the first time over a 12-month period. Current
                  national commitments put the world on track for 2.5&ndash;3&deg;C
                  of warming by 2100 &mdash; a catastrophic outcome.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Extreme weather events
                </h4>
                <p className="text-sm text-muted-foreground">
                  2024 was confirmed as the hottest year in recorded human
                  history. Unprecedented heatwaves, wildfires, floods, and
                  droughts affected every continent. These events are not just
                  environmental disasters &mdash; they destabilize food systems,
                  trigger migration crises, and strain the political
                  institutions humanity needs to address existential threats.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              The Bulletin has been clear that climate change alone would
              justify moving the clock forward in recent years. When combined
              with escalating nuclear risks and emerging technology threats,
              the climate crisis has been a significant contributor to the
              clock&apos;s record-close position of{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight.
            </p>
          </section>

          {/* Section 3: AI and Emerging Technology Threats */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              <Cpu className="w-6 h-6 inline mr-2" />
              AI and Emerging Technology Threats
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The most recent addition to the Doomsday Clock&apos;s threat
              assessment is disruptive technology, with artificial intelligence
              at its center. While the Bulletin has considered technology risks
              for years, the explosive growth of AI capabilities since 2023 has
              elevated this concern to a primary factor in the clock&apos;s
              setting.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The specific AI-related risks the Bulletin evaluates include:
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Autonomous weapons systems
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI-powered weapons that can select and engage targets without
                  human oversight. Multiple nations are developing lethal
                  autonomous weapons, and no international framework currently
                  regulates their use. The risk of an AI system making a
                  catastrophic military decision &mdash; especially in a nuclear
                  context &mdash; is growing.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Deepfakes and disinformation
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI-generated disinformation can undermine the shared
                  understanding of reality that effective diplomacy requires. If
                  world leaders cannot trust that the intelligence they receive
                  is real, or if publics are manipulated by synthetic media
                  during a crisis, the risk of catastrophic miscalculation
                  increases dramatically.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  AI-assisted biological research
                </h4>
                <p className="text-sm text-muted-foreground">
                  Large language models and protein-folding AI have
                  dramatically lowered the barriers to designing dangerous
                  pathogens. What once required years of specialized training
                  and access to advanced laboratories can increasingly be
                  accomplished with commercially available AI tools, raising
                  the specter of engineered pandemics.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Cyber attacks on nuclear infrastructure
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI-enhanced cyber capabilities could target nuclear command
                  and control systems, early warning networks, or power grid
                  infrastructure supporting nuclear facilities. A successful
                  cyber attack on these systems during a geopolitical crisis
                  could trigger a nuclear exchange through miscalculation or
                  false alarms.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              The Bulletin has emphasized that AI risks are not hypothetical
              &mdash; they are already manifesting. AI-generated deepfakes
              have been used in elections worldwide, autonomous drone swarms
              have been deployed in active conflicts, and AI tools have been
              shown to be capable of assisting in the design of chemical and
              biological agents. The technology is moving faster than
              governance frameworks can keep pace.
            </p>
          </section>

          {/* Section 4: The Three-Threat Framework */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Three-Threat Framework
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Today&apos;s Doomsday Clock reflects a fundamentally more complex
              threat landscape than the one its creators envisioned in 1947.
              The modern clock evaluates three interconnected categories of
              existential risk: nuclear weapons, climate change, and disruptive
              technologies. What makes the current moment especially dangerous
              is not just the severity of each individual threat, but the way
              they interact and compound each other.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/5 border border-doom/20 text-center">
                <div className="text-2xl mb-2">&#9762;</div>
                <h4 className="font-semibold text-foreground mb-1">Nuclear</h4>
                <p className="text-xs text-muted-foreground">
                  The original and most immediate existential threat. A nuclear
                  exchange could happen in minutes and kill billions.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-doom/5 border border-doom/20 text-center">
                <div className="text-2xl mb-2">&#127777;</div>
                <h4 className="font-semibold text-foreground mb-1">Climate</h4>
                <p className="text-xs text-muted-foreground">
                  Slower-moving but potentially irreversible. Threatens food
                  systems, habitability, and the stability of every nation.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-doom/5 border border-doom/20 text-center">
                <div className="text-2xl mb-2">&#129302;</div>
                <h4 className="font-semibold text-foreground mb-1">Technology</h4>
                <p className="text-xs text-muted-foreground">
                  The newest category. AI, autonomous weapons, and cyber
                  capabilities are evolving faster than governance.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              These threats do not exist in isolation. Climate change
              destabilizes the geopolitical conditions that nuclear diplomacy
              requires. AI accelerates both nuclear risk (through autonomous
              weapons and cyber vulnerabilities) and climate risk (through
              energy-intensive computing and economic disruption). Nuclear
              conflict would itself trigger catastrophic climate effects through
              nuclear winter. The three threat categories form a web of
              interconnected risks where progress on one can be undermined by
              deterioration in another.
            </p>
            <p className="text-foreground leading-relaxed">
              This interconnection is why the Bulletin now evaluates all three
              categories together. A world that successfully reduces nuclear
              arsenals but fails to address climate change is not safe. A world
              that limits global warming but allows AI-enabled weapons to
              proliferate unchecked is not safe. The Doomsday Clock at{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              reflects the Bulletin&apos;s judgment that all three threat
              categories are simultaneously deteriorating &mdash; a convergence
              that has no precedent in the clock&apos;s history.
            </p>
          </section>

          {/* Section 5: Climate vs Nuclear: Which Matters More? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Climate vs Nuclear: Which Matters More?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              This is one of the most frequently debated questions about the
              modern Doomsday Clock. The honest answer is that the Bulletin
              does not publicly weight one threat over another. The clock
              produces a single output &mdash; a time setting &mdash; that
              reflects the board&apos;s holistic assessment of all existential
              risks combined.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That said, there are important differences in how these threats
              operate. Nuclear war is the more <em>immediate</em> risk: a
              full-scale exchange between major powers could happen with less
              than 30 minutes of warning and kill hundreds of millions within
              hours. Climate change is the more <em>certain</em> risk: barring
              a radical and immediate transformation of the global energy
              system, significant warming is locked in by existing emissions,
              and every fraction of a degree brings humanity closer to
              catastrophic tipping points.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Nuclear risk is characterized by low probability but extreme
              consequence. Climate risk is characterized by high probability
              (approaching certainty for some impacts) with consequences that
              escalate over time. Both can be mitigated by human action, but
              they require fundamentally different types of response. Nuclear
              risk is managed through diplomacy, treaties, and deterrence.
              Climate risk is managed through emissions reduction, energy
              transition, and adaptation.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bulletin has made clear that both threats are essential to
              the clock&apos;s setting and that neither alone would move the
              clock to its current position. The convergence of nuclear risk,
              climate acceleration, and technology disruption is precisely what
              makes the current moment so dangerous. For a deeper look at what
              scenarios could push the clock forward or pull it back, see our{" "}
              <Link
                to="/blog/doomsday-clock-2027-prediction"
                className="text-doom hover:underline"
              >
                2027 prediction analysis
              </Link>
              .
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Track the Doomsday Clock in Real Time
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See the current clock time, interactive timeline, and countdown to
            the next announcement.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View Live Clock
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Link
            to="/blog/doomsday-clock-2026"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              Doomsday Clock 2026: What Changed and Why
            </h4>
            <p className="text-sm text-muted-foreground">
              Deep dive on the February 2026 announcement and what drove the
              clock to {currentTime.display}.
            </p>
          </Link>
          <Link
            to="/blog/what-is-the-doomsday-clock"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              What Is the Doomsday Clock?
            </h4>
            <p className="text-sm text-muted-foreground">
              The complete guide to the Doomsday Clock &mdash; what it is, how
              it works, and why it matters.
            </p>
          </Link>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-climate-change"
          slugs={[
            "doomsday-clock-2026",
            "what-is-the-doomsday-clock",
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
