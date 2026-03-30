import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  AlertTriangle,
  Cpu,
  Shield,
  Brain,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockAI() {
  useEffect(() => {
    updateMetaTags({
      title:
        "How AI & Artificial Intelligence Threaten the Doomsday Clock | DoomsdayClock.net",
      description:
        "Artificial intelligence is now a factor in the Doomsday Clock. Learn how AI weapons, deepfakes, and autonomous systems are pushing the clock closer to midnight in 2026.",
      path: "/blog/doomsday-clock-and-artificial-intelligence",
      newsKeywords:
        "doomsday clock ai, doomsday clock artificial intelligence, ai doomsday, ai nuclear weapons, ai autonomous weapons, artificial intelligence existential risk",
      publishedTime: "2026-03-15T00:00:00Z",
      modifiedTime: "2026-03-15T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "How AI & Artificial Intelligence Threaten the Doomsday Clock",
      datePublished: "2026-03-15T00:00:00Z",
      dateModified: "2026-03-15T00:00:00Z",
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
          "https://doomsdayclock.net/blog/doomsday-clock-and-artificial-intelligence",
      },
      description:
        "Artificial intelligence is now a factor in the Doomsday Clock. Learn how AI weapons, deepfakes, and autonomous systems are pushing the clock closer to midnight.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "doomsday clock ai",
        "doomsday clock artificial intelligence",
        "ai doomsday",
        "ai nuclear weapons",
        "ai autonomous weapons",
        "artificial intelligence existential risk",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2000,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does the Doomsday Clock factor in artificial intelligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Bulletin of the Atomic Scientists began formally incorporating disruptive technologies, including artificial intelligence, into the Doomsday Clock's assessment in the early 2020s. AI-related risks such as autonomous weapons, deepfakes, and cyber threats are now evaluated alongside nuclear and climate threats.",
          },
        },
        {
          "@type": "Question",
          name: "How could AI cause a nuclear war?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI could contribute to nuclear conflict through several pathways: false alarms from AI-driven early warning systems, autonomous weapons making escalatory decisions without human oversight, deepfake disinformation confusing leaders during a crisis, or cyberattacks on nuclear command and control infrastructure. The speed of AI decision-making compresses the time available for human judgment.",
          },
        },
        {
          "@type": "Question",
          name: "What are autonomous weapons and why are they dangerous?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Autonomous weapons, also called lethal autonomous weapons systems (LAWS), are AI-powered military systems that can select and engage targets without direct human control. They are dangerous because they could malfunction, be hacked, or make catastrophic targeting errors. They also lower the threshold for conflict by removing the human cost of deploying force.",
          },
        },
        {
          "@type": "Question",
          name: "Is AI an existential risk to humanity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Many leading scientists and organizations, including the Bulletin of the Atomic Scientists, consider AI to be a potential existential risk. The concern is not that AI will become sentient and rebel, but that AI systems integrated into military, economic, and political systems could amplify existing threats like nuclear war, enable new forms of mass manipulation, and outpace humanity's ability to govern them safely.",
          },
        },
        {
          "@type": "Question",
          name: "Could AI help move the Doomsday Clock backward?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Potentially, yes. AI could help move the clock backward by improving nuclear treaty verification, enhancing climate modeling, detecting disinformation, and optimizing clean energy systems. However, these positive applications require robust governance frameworks to ensure AI is developed and deployed safely and equitably.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "dc-ai");
    script.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "dc-ai-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="dc-ai"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="dc-ai-faq"]'
      );
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
          <span className="text-foreground">AI &amp; the Doomsday Clock</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            How <span className="text-doom">AI &amp; Artificial Intelligence</span>{" "}
            Threaten the Doomsday Clock
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 15, 2026
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
                AI and disruptive technologies are now a primary factor in
                the clock&apos;s record-close setting
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: AI as a New Doomsday Clock Factor */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              <Cpu className="w-6 h-6 inline mr-2" />
              AI as a New Doomsday Clock Factor
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For most of its history, the{" "}
              <Link
                to="/blog/what-is-the-doomsday-clock"
                className="text-doom hover:underline"
              >
                Doomsday Clock
              </Link>{" "}
              measured a single threat: nuclear weapons. Climate change was
              added to the calculus in 2007, broadening the clock&apos;s scope
              beyond nuclear risk alone. But it was not until the early 2020s
              that the Bulletin of the Atomic Scientists formally introduced a
              third category of existential concern &mdash; disruptive
              technologies &mdash; with artificial intelligence at its center.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The shift did not happen overnight. For years, the Bulletin&apos;s
              annual statements had included passing references to cyber risks
              and emerging technologies. But the explosive growth of AI
              capabilities beginning in 2023 &mdash; large language models,
              autonomous drone systems, AI-assisted weapons targeting, and
              synthetic media generation &mdash; forced a reckoning. By 2024,
              the Bulletin&apos;s Science and Security Board concluded that AI
              was no longer a speculative future threat but an active,
              present-day factor in the global risk landscape.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In its{" "}
              <Link
                to="/blog/doomsday-clock-2026"
                className="text-doom hover:underline"
              >
                2026 announcement
              </Link>
              , the Bulletin was explicit: disruptive technologies, led by
              artificial intelligence, were a contributing factor in the
              decision to move the clock to{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight. For the first time, AI was not just mentioned in
              the annual statement &mdash; it was cited as a direct driver of
              the clock&apos;s forward movement.
            </p>
            <p className="text-foreground leading-relaxed">
              This elevation reflects a broader reality: AI is not a standalone
              risk. It is a force multiplier that amplifies every other threat
              the Doomsday Clock measures. It makes nuclear weapons more
              dangerous, climate disinformation more effective, and
              geopolitical crises harder to manage. Understanding how AI
              interacts with the Doomsday Clock requires examining each of
              these pathways in detail.
            </p>
          </section>

          {/* Section 2: Autonomous Weapons & AI in Warfare */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              <Shield className="w-6 h-6 inline mr-2" />
              Autonomous Weapons &amp; AI in Warfare
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Lethal autonomous weapons systems (LAWS) represent the most
              immediate way AI affects the Doomsday Clock. These are weapons
              that can select and engage targets without direct human oversight
              &mdash; from AI-guided drone swarms to automated missile defense
              interceptors. Multiple nations, including the United States,
              China, Russia, Israel, and several others, are actively
              developing and in some cases deploying these systems.
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  AI-powered drone swarms
                </h4>
                <p className="text-sm text-muted-foreground">
                  Coordinated fleets of small drones that use AI to
                  autonomously identify, track, and strike targets. Already
                  deployed in the Russia-Ukraine and Middle East conflicts,
                  these systems can overwhelm traditional air defenses and
                  operate in environments where communications are jammed.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  AI-enabled targeting systems
                </h4>
                <p className="text-sm text-muted-foreground">
                  Military AI platforms that analyze satellite imagery,
                  signals intelligence, and sensor data to generate target
                  lists for human commanders. While nominally
                  &quot;human-in-the-loop,&quot; the speed and volume of
                  AI-generated recommendations can pressure operators into
                  rubber-stamping AI decisions under combat conditions.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Loitering munitions
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI-guided weapons that can patrol an area for hours, using
                  onboard sensors and machine learning to identify and engage
                  targets of opportunity without further human instruction.
                  These blur the line between a weapon and an autonomous
                  combatant.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              The fundamental danger of autonomous weapons is speed. In a
              conflict between AI-armed adversaries, the pace of engagement
              could rapidly exceed human decision-making capacity. If one side
              deploys autonomous systems that can identify and strike targets in
              milliseconds, the other side faces intense pressure to automate
              its own responses &mdash; creating an escalation dynamic where
              machines, not humans, control the tempo of war.
            </p>
            <p className="text-foreground leading-relaxed">
              Despite years of discussion at the United Nations Convention on
              Certain Conventional Weapons (CCW), there is no binding
              international treaty governing autonomous weapons. Efforts to
              negotiate one have repeatedly stalled, with major military powers
              resisting constraints on AI-enabled weapons development. The
              Bulletin has identified this governance vacuum as one of the most
              dangerous gaps in the international security architecture.
            </p>
          </section>

          {/* Section 3: AI and Nuclear Command & Control */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              AI and Nuclear Command &amp; Control
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Perhaps the most alarming intersection of AI and the Doomsday
              Clock involves nuclear weapons. Several nuclear-armed states are
              exploring the integration of AI into their nuclear command and
              control systems &mdash; the networks that detect incoming
              attacks, communicate launch orders, and manage nuclear arsenals.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The logic behind this integration is straightforward: AI can
              process sensor data faster than humans, potentially providing
              earlier and more accurate warning of an incoming nuclear strike.
              But the risks are profound. An AI system that generates a false
              alarm &mdash; misinterpreting a satellite glitch, a weather
              pattern, or a conventional military exercise as a nuclear
              launch &mdash; could trigger a response before humans have time
              to verify the threat.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The history of nuclear near-misses is instructive. In 1983,
              Soviet officer Stanislav Petrov correctly identified a false alarm
              from the Soviet early warning system, preventing a potential
              nuclear exchange. Human judgment saved the world that day. If an
              AI system had been making the call, it might have reached a
              different conclusion &mdash; and there would have been no
              opportunity for a human to override it.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bulletin has warned that AI integration into nuclear systems
              is accelerating without adequate safeguards. There are no
              international agreements governing the use of AI in nuclear
              command and control, no shared standards for AI reliability in
              high-stakes military contexts, and no mechanisms for
              adversaries to communicate about their respective AI
              deployments to reduce the risk of misunderstanding.
            </p>
          </section>

          {/* Section 4: Deepfakes, Disinformation & Democratic Erosion */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              <Brain className="w-6 h-6 inline mr-2" />
              Deepfakes, Disinformation &amp; Democratic Erosion
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              AI-generated synthetic media &mdash; deepfake videos, cloned
              voices, fabricated documents, and AI-written propaganda &mdash;
              represents a different but equally dangerous category of risk.
              The Doomsday Clock ultimately depends on the ability of leaders
              and publics to make informed decisions about existential threats.
              When the information environment is poisoned by AI-generated
              disinformation, that capacity erodes.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The threat operates on multiple levels. At the tactical level,
              deepfakes can be used to fabricate evidence of an attack,
              impersonate a head of state, or spread false intelligence during
              a crisis &mdash; any of which could trigger a catastrophic
              military response based on manufactured reality. At the
              strategic level, persistent AI-powered disinformation campaigns
              erode public trust in institutions, media, and democratic
              processes, making it harder for societies to build the political
              consensus needed to address existential threats.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Elections worldwide have already been targeted by AI-generated
              disinformation. Deepfake audio and video of political candidates
              have been deployed to manipulate voters. AI-powered bot networks
              amplify divisive narratives at scale. The cumulative effect is a
              degradation of the shared reality that functional democracies
              &mdash; and effective international cooperation &mdash; require.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bulletin has emphasized that disinformation is not a
              peripheral concern &mdash; it is central to existential risk
              management. If publics lose the ability to distinguish truth
              from fabrication, and if leaders cannot trust the intelligence
              they receive during a crisis, the probability of catastrophic
              miscalculation increases dramatically. AI-powered disinformation
              is, in this sense, a direct contributor to the Doomsday
              Clock&apos;s current position.
            </p>
          </section>

          {/* Section 5: The AI Governance Gap */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The AI Governance Gap
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              What makes AI uniquely dangerous in the Doomsday Clock context is
              not just the technology itself, but the absence of governance
              frameworks to manage it. Nuclear weapons, for all their danger,
              are governed by a well-established (if imperfect) architecture of
              treaties, norms, and institutions built over decades: the Nuclear
              Non-Proliferation Treaty, the Comprehensive Nuclear-Test-Ban
              Treaty, bilateral agreements between major powers, and the
              International Atomic Energy Agency.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              AI has no equivalent. There is no international treaty governing
              autonomous weapons. There is no global agreement on AI safety
              standards. There is no multilateral body with the authority to
              inspect, verify, or enforce AI-related commitments. The EU AI Act
              and various national regulations represent early steps, but they
              are fragmented, jurisdiction-limited, and largely focused on
              commercial applications rather than military or security risks.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The gap between the pace of AI development and the pace of AI
              governance is widening, not narrowing. New AI capabilities are
              emerging on timescales of months, while international governance
              negotiations operate on timescales of years or decades. This
              asymmetry means that by the time any comprehensive governance
              framework is agreed upon, the technology it aims to regulate
              may have already transformed the threat landscape in ways its
              architects did not anticipate.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bulletin has been clear that closing this governance gap is
              one of the most urgent priorities for reducing existential risk.
              Without binding international frameworks for AI in military
              systems, the world is essentially running an uncontrolled
              experiment with technologies that could, if mismanaged, push the
              Doomsday Clock to midnight. For more on the broader threat
              landscape, see our explainer on{" "}
              <Link
                to="/blog/doomsday-clock-climate-change"
                className="text-doom hover:underline"
              >
                climate change and the Doomsday Clock
              </Link>
              .
            </p>
          </section>

          {/* Section 6: Could AI Move the Clock Backward? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Could AI Move the Clock Backward?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The relationship between AI and the Doomsday Clock is not
              entirely negative. The same technologies that pose existential
              risks also offer potential pathways to reducing them &mdash; if
              developed and deployed responsibly.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-2">
                  Nuclear treaty verification
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI-powered satellite imagery analysis and sensor networks
                  could make arms control treaties more verifiable, reducing
                  the trust gap between nuclear-armed states that has stalled
                  new agreements.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-2">
                  Climate modeling and prediction
                </h4>
                <p className="text-sm text-muted-foreground">
                  Advanced AI models can improve climate predictions, optimize
                  renewable energy grids, accelerate materials science for
                  batteries and carbon capture, and help societies adapt to
                  climate impacts more effectively.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-2">
                  Disinformation detection
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI systems designed to detect deepfakes, identify
                  coordinated disinformation campaigns, and authenticate
                  legitimate communications could help preserve the
                  information integrity that crisis management depends on.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-2">
                  Early warning and crisis prevention
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI-driven analysis of geopolitical data, military
                  movements, and diplomatic signals could provide earlier
                  warning of escalating crises, giving leaders more time and
                  better information to de-escalate before situations become
                  catastrophic.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              The challenge is that these positive applications require
              precisely the kind of international cooperation and governance
              that is currently lacking. AI-powered treaty verification only
              works if nations agree to be verified. Climate AI only helps if
              the political will to act on its findings exists. Disinformation
              detection is only effective if platforms and governments commit
              to deploying it.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bulletin has acknowledged that AI could be a force for moving
              the clock backward &mdash; but only if humanity makes deliberate
              choices to steer AI development toward safety rather than
              allowing market forces and military competition to dictate its
              trajectory. The clock at{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              reflects the Bulletin&apos;s judgment that, as of 2026, the
              risks are outpacing the benefits.
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
                  Does the Doomsday Clock factor in artificial intelligence?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes. The Bulletin of the Atomic Scientists began formally
                  incorporating disruptive technologies, including artificial
                  intelligence, into the Doomsday Clock&apos;s assessment in
                  the early 2020s. AI-related risks such as autonomous weapons,
                  deepfakes, and cyber threats are now evaluated alongside
                  nuclear and climate threats.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  How could AI cause a nuclear war?
                </h3>
                <p className="text-sm text-muted-foreground">
                  AI could contribute to nuclear conflict through several
                  pathways: false alarms from AI-driven early warning systems,
                  autonomous weapons making escalatory decisions without human
                  oversight, deepfake disinformation confusing leaders during a
                  crisis, or cyberattacks on nuclear command and control
                  infrastructure. The speed of AI decision-making compresses the
                  time available for human judgment.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  What are autonomous weapons and why are they dangerous?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Autonomous weapons, also called lethal autonomous weapons
                  systems (LAWS), are AI-powered military systems that can
                  select and engage targets without direct human control. They
                  are dangerous because they could malfunction, be hacked, or
                  make catastrophic targeting errors. They also lower the
                  threshold for conflict by removing the human cost of
                  deploying force.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Is AI an existential risk to humanity?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Many leading scientists and organizations, including the
                  Bulletin of the Atomic Scientists, consider AI to be a
                  potential existential risk. The concern is not that AI will
                  become sentient and rebel, but that AI systems integrated
                  into military, economic, and political systems could amplify
                  existing threats like nuclear war, enable new forms of mass
                  manipulation, and outpace humanity&apos;s ability to govern
                  them safely.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Could AI help move the Doomsday Clock backward?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Potentially, yes. AI could help move the clock backward by
                  improving nuclear treaty verification, enhancing climate
                  modeling, detecting disinformation, and optimizing clean
                  energy systems. However, these positive applications require
                  robust governance frameworks to ensure AI is developed and
                  deployed safely and equitably.
                </p>
              </div>
            </div>
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
            to="/blog/doomsday-clock-climate-change"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              How Climate Change Affects the Doomsday Clock
            </h4>
            <p className="text-sm text-muted-foreground">
              Climate change, nuclear risks, and AI threats all contribute to
              the current record-close setting.
            </p>
          </Link>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-and-artificial-intelligence"
          slugs={[
            "doomsday-clock-2026",
            "what-is-the-doomsday-clock",
            "doomsday-clock-climate-change",
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
