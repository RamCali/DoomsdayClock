import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  Atom,
  Thermometer,
  Cpu,
  History,
  RotateCcw,
  Scale,
  HelpCircle,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WhatIsTheDoomsdayClock() {
  useEffect(() => {
    updateMetaTags({
      title:
        "What Is the Doomsday Clock? Definition, Meaning & How It Works (2026) | DoomsdayClock.net",
      description:
        "The Doomsday Clock is a symbol of how close humanity is to catastrophe, currently at " +
        currentTime.display +
        " to midnight. Learn what it means, how it works, who sets it, and why it matters — the definitive guide.",
      path: "/blog/what-is-the-doomsday-clock",
      newsKeywords:
        "what is the doomsday clock, doomsday clock definition, doomsday clock meaning, how does the doomsday clock work, doomsday clock explained, what does doomsday clock mean, doomsday clock bulletin of atomic scientists, is the doomsday clock accurate, does the doomsday clock actually mean anything, how often does the doomsday clock change",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const newsArticleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "What Is the Doomsday Clock? Definition, Meaning & How It Works",
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
          "https://doomsdayclock.net/blog/what-is-the-doomsday-clock",
      },
      description:
        "Comprehensive guide to the Doomsday Clock: its definition, meaning, how it works, what it measures, its history, and whether it is accurate.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "what is the doomsday clock",
        "doomsday clock definition",
        "doomsday clock meaning",
        "how does the doomsday clock work",
        "doomsday clock explained",
        "bulletin of atomic scientists",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2500,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock is a symbolic timepiece maintained by the Bulletin of the Atomic Scientists since 1947. It represents how close humanity is to catastrophic destruction (midnight). The clock is set annually by a board of scientists and security experts who assess threats from nuclear weapons, climate change, and disruptive technologies.",
          },
        },
        {
          "@type": "Question",
          name: "What time is the Doomsday Clock right now?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "The Doomsday Clock is currently set at " +
              currentTime.display +
              " to midnight, the closest it has ever been. It was last set on " +
              currentTime.lastUpdated +
              " by the Bulletin of the Atomic Scientists.",
          },
        },
        {
          "@type": "Question",
          name: "How does the Doomsday Clock work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock is set each year by the Bulletin's Science and Security Board, a group of world-renowned scientists including Nobel laureates. They assess global threats across three categories — nuclear weapons, climate change, and disruptive technologies — through a months-long process of research, consultation, and deliberation before announcing the new time each January.",
          },
        },
        {
          "@type": "Question",
          name: "Who created the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock was created in 1947 by artist Martyl Langsdorf for the cover of the Bulletin of the Atomic Scientists. The Bulletin itself was founded in 1945 by Manhattan Project scientists, including Albert Einstein and J. Robert Oppenheimer, who wanted to warn the public about nuclear dangers.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Doomsday Clock accurate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock is not designed to predict specific events — it is a risk communication tool that conveys the expert consensus on how close humanity is to self-destruction. Its credibility comes from the caliber of scientists who set it, including Nobel laureates and leading researchers in nuclear policy, climate science, and emerging technologies.",
          },
        },
        {
          "@type": "Question",
          name: "Can the Doomsday Clock go backward?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The Doomsday Clock has moved backward 8 times in its history. Each reversal followed major diplomatic achievements such as arms control treaties or international cooperation agreements. The farthest it has ever been from midnight was 17 minutes in 1991, after the Cold War ended and the START treaty was signed.",
          },
        },
        {
          "@type": "Question",
          name: "What happens if the Doomsday Clock reaches midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Midnight on the Doomsday Clock represents global catastrophe — the point at which human civilization faces irreversible destruction. The clock has never reached midnight. It is designed as a warning, not a countdown, and the Bulletin's scientists believe that human action can always pull the clock back from the brink.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "what-is");
    script.textContent = JSON.stringify([newsArticleSchema, faqSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="what-is"]'
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
            What Is the Doomsday Clock
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What Is the{" "}
            <span className="text-doom">Doomsday Clock?</span>{" "}
            Definition, Meaning &amp; How It Works
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 14, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              12 min read
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
                to midnight &mdash; the closest it has ever been
              </p>
              <p className="text-xs text-muted-foreground">
                Set on {currentTime.lastUpdated} by the Bulletin of the
                Atomic Scientists &bull; Next update expected{" "}
                {currentTime.nextUpdate}
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-foreground leading-relaxed mb-4 text-lg">
              The Doomsday Clock is one of the most recognized symbols in
              the world &mdash; but what does it actually mean? If you have
              ever seen a headline about the Doomsday Clock moving closer
              to midnight and wondered what that means for you and the
              planet, this guide will give you a clear, complete answer.
            </p>
            <p className="text-foreground leading-relaxed">
              In this article, we will explain what the Doomsday Clock is,
              how it works, what it measures, its full history from 1947 to
              the present, whether it can move backward, and how seriously
              you should take it. Whether you are encountering the
              Doomsday Clock for the first time or looking for a deeper
              understanding, this is the definitive guide.
            </p>
          </section>

          {/* Section 1: The Doomsday Clock, Explained */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              The Doomsday Clock, Explained
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is a symbolic timepiece created and
              maintained by the{" "}
              <strong>Bulletin of the Atomic Scientists</strong> since
              1947. On this clock, midnight represents global catastrophe
              &mdash; the theoretical point at which human civilization
              faces irreversible destruction. The closer the clock&apos;s
              hands are to midnight, the greater the danger.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Currently, the Doomsday Clock stands at{" "}
              <strong className="text-doom">{currentTime.display}</strong>{" "}
              to midnight, the closest it has ever been in its nearly
              eight-decade history. This setting was announced on{" "}
              {currentTime.lastUpdated} and reflects the Bulletin&apos;s
              assessment that humanity faces an unprecedented convergence
              of existential threats.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              It is essential to understand what the Doomsday Clock is{" "}
              <em>not</em>. It is not a literal countdown to the end of
              the world. It is not a scientific measurement like
              temperature or radiation levels. It does not tick in real
              time. Instead, the Doomsday Clock is an expert assessment of
              existential risk &mdash; a carefully considered judgment by
              some of the world&apos;s most qualified scientists about how
              close humanity stands to destroying itself.
            </p>

            <div className="p-4 rounded-lg bg-doom/5 border border-doom/20">
              <h4 className="font-semibold text-foreground mb-2">
                Doomsday Clock Definition
              </h4>
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">
                  The Doomsday Clock
                </strong>{" "}
                is a symbol that represents the likelihood of a
                human-made global catastrophe, in the opinion of the
                Bulletin of the Atomic Scientists&apos; Science and
                Security Board. Midnight symbolizes destruction; the
                number of minutes or seconds remaining indicates how
                urgent the current level of danger is. It is updated
                annually (typically each January) and has been set{" "}
                <strong>27 times</strong> since its creation in 1947.
              </p>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              Think of it as a global risk barometer, maintained by
              Nobel laureates and leading security experts, designed to
              cut through the noise and communicate a single,
              unmistakable message: how safe &mdash; or unsafe &mdash;
              is the world right now?
            </p>
          </section>

          {/* Section 2: How Does the Doomsday Clock Work? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              How Does the Doomsday Clock Work?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is set by the Bulletin&apos;s{" "}
              <strong>Science and Security Board (SASB)</strong>, a panel
              of world-renowned scientists, policy experts, and former
              government officials. The board includes specialists in
              nuclear physics, climate science, biosecurity, cybersecurity,
              and artificial intelligence. Their work is supported by a
              group of sponsors that includes{" "}
              <strong>Nobel Prize laureates</strong>.
            </p>
            <p className="text-foreground leading-relaxed mb-6">
              The clock-setting process is rigorous and unfolds over
              several months each year. Here is how it works:
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 text-doom font-bold text-sm shrink-0">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Assessment
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Beginning in the fall, board members independently
                      evaluate the current state of global threats. Each
                      member reviews the latest data, research, and
                      geopolitical developments within their area of
                      expertise &mdash; from nuclear arsenal sizes and
                      arms control negotiations to climate emissions data
                      and AI capability advances.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 text-doom font-bold text-sm shrink-0">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Consultation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The board consults with external experts, government
                      officials, intelligence professionals, and other
                      organizations. In some cases, members receive
                      classified briefings on national security matters.
                      This ensures the assessment reflects the broadest
                      possible range of expert opinion.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 text-doom font-bold text-sm shrink-0">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Deliberation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The full Science and Security Board convenes to
                      debate the evidence and reach a consensus. Board
                      members may disagree about the relative weight of
                      different threats or whether the overall risk level
                      has changed enough to move the clock. The goal is
                      consensus &mdash; a shared judgment that the
                      majority of experts can support.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 text-doom font-bold text-sm shrink-0">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Announcement
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Each January, the results are announced at a press
                      conference, traditionally in Washington, D.C. The
                      event features remarks from board members, a formal
                      unveiling of the new clock setting, and a detailed
                      explanation of the threats that informed the
                      decision. The announcement generates worldwide media
                      coverage and public discussion.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              The board does not receive government funding and its members
              serve voluntarily, which the Bulletin considers essential to
              the clock&apos;s credibility &mdash; it allows assessments
              free from political pressure or national bias. Want to learn
              more about the people behind the decision? Read our deep
              dive on{" "}
              <Link
                to="/blog/who-controls-doomsday-clock"
                className="text-doom hover:underline font-semibold"
              >
                who controls the Doomsday Clock
              </Link>
              .
            </p>
          </section>

          {/* Section 3: What Does the Doomsday Clock Measure? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
              What Does the Doomsday Clock Measure?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When the Doomsday Clock was first created in 1947, it
              measured a single threat: nuclear weapons. Over the decades,
              as new existential dangers emerged, the Bulletin expanded its
              scope. Today, the Science and Security Board evaluates three
              primary threat categories:
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center gap-2 mb-2">
                  <Atom className="w-4 h-4 text-doom" />
                  <h4 className="font-semibold text-doom text-sm sm:text-base">
                    Nuclear Weapons
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  The size and readiness of global nuclear arsenals, the
                  status of arms control treaties, nuclear proliferation to
                  new states or actors, modernization programs, and
                  regional conflicts with a nuclear dimension. The collapse
                  of treaties like the INF and the erosion of New START
                  have been major factors in recent clock settings.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-doom" />
                  <h4 className="font-semibold text-doom text-sm sm:text-base">
                    Climate Change
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Global carbon emissions trends, progress toward
                  international climate commitments, tipping point
                  research, extreme weather events, sea level rise, and
                  the political will to enact meaningful policy changes.
                  Climate was first added to the assessment in 2007,
                  reflecting a broader understanding of existential risk.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-doom" />
                  <h4 className="font-semibold text-doom text-sm sm:text-base">
                    Disruptive Technologies
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Artificial intelligence and autonomous weapons systems,
                  cyber threats to nuclear command and control
                  infrastructure, biosecurity risks from synthetic biology,
                  and other emerging technologies that could amplify
                  existing dangers or create entirely new categories of
                  risk. This is the fastest-evolving area of concern.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <h4 className="font-medium text-foreground mb-2">
                How the Scope Has Expanded
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">1947&ndash;2006:</strong>{" "}
                    Nuclear weapons only. The clock measured the danger of
                    nuclear war and arms races between superpowers.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">2007:</strong>{" "}
                    Climate change added. The Bulletin recognized that
                    environmental catastrophe posed its own existential
                    threat, independent of nuclear war.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">2015&ndash;present:</strong>{" "}
                    Disruptive technologies incorporated. Cyber warfare,
                    AI, autonomous weapons, and biosecurity now factor
                    into every assessment, reflecting the rapidly changing
                    threat landscape.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-foreground leading-relaxed mt-4">
              This expansion reflects a key insight: existential risk is
              existential risk, regardless of its source. A civilization
              destroyed by runaway climate change is just as gone as one
              destroyed by nuclear war. By broadening its scope, the
              Doomsday Clock has remained relevant to the actual dangers
              humanity faces in the 21st century.
            </p>
          </section>

          {/* Section 4: The Doomsday Clock's History */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <History className="w-5 h-5 sm:w-6 sm:h-6" />
              The Doomsday Clock&apos;s History: From 7 Minutes to{" "}
              {currentTime.display}
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Since its creation in 1947, the Doomsday Clock has been
              adjusted 26 times. Its journey from the initial setting of
              7 minutes to midnight to the current{" "}
              {currentTime.display} tells the story of nearly eight
              decades of human civilization, its crises, and its
              occasional triumphs.
            </p>

            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  1947: 7 minutes to midnight{" "}
                  <span className="text-blue-400 text-sm">
                    (initial setting)
                  </span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Artist Martyl Langsdorf creates the clock for the cover
                  of the Bulletin of the Atomic Scientists. The world has
                  just witnessed the devastation of Hiroshima and
                  Nagasaki. A new era of existential risk has begun.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-foreground mb-1">
                  1953: 2 minutes to midnight{" "}
                  <span className="text-doom text-sm">(Cold War closest)</span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  The United States and Soviet Union test thermonuclear
                  weapons within months of each other. For the first time,
                  humanity possesses the power to destroy civilization
                  entirely. This record would stand for over 60 years.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <h4 className="font-semibold text-foreground mb-1">
                  1991: 17 minutes to midnight{" "}
                  <span className="text-green-400 text-sm">
                    (farthest ever)
                  </span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Cold War ends. The Strategic Arms Reduction Treaty
                  (START) is signed. The Berlin Wall has fallen. The
                  clock reaches its safest position in history &mdash; a
                  record that has never been approached since.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-orange-500/10 border border-orange-500/30">
                <h4 className="font-semibold text-foreground mb-1">
                  2020: 100 seconds to midnight{" "}
                  <span className="text-orange-400 text-sm">
                    (first time in seconds)
                  </span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  For the first time in the clock&apos;s 73-year history,
                  the setting is expressed in seconds rather than minutes.
                  This shift is not merely symbolic &mdash; it reflects
                  the Bulletin&apos;s judgment that threats have converged
                  to an unprecedented degree.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-foreground mb-1">
                  2026: {currentTime.display} to midnight{" "}
                  <span className="text-doom text-sm">
                    (closest ever)
                  </span>
                </h4>
                <p className="text-sm text-muted-foreground">
                  The current setting, announced on{" "}
                  {currentTime.lastUpdated}. Driven by compounding threats
                  from nuclear tensions, accelerating climate change, and
                  the rapid advance of AI systems with military
                  applications.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              This is just the overview. For every single clock change,
              the reasoning behind it, and the historical events that
              shaped each decision, explore our{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-doom hover:underline font-semibold"
              >
                complete Doomsday Clock history timeline
              </Link>
              .
            </p>
          </section>

          {/* Section 5: Can the Doomsday Clock Go Backward? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
              Can the Doomsday Clock Go Backward?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Yes &mdash; and this is one of the most important things to
              understand about the Doomsday Clock. The clock is not a
              one-way ratchet toward doom. It has moved{" "}
              <strong>backward 8 times</strong> in its history, and each
              reversal carried a powerful, hopeful message.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Every time the clock has moved away from midnight, it
              followed a major diplomatic achievement or breakthrough in
              international cooperation:
            </p>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10 mb-4">
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">1960:</strong>{" "}
                    Moved back to 7 minutes after growing public pressure
                    against nuclear testing and initial US-Soviet
                    scientific cooperation.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">1963:</strong>{" "}
                    Moved back to 12 minutes after the Partial Test Ban
                    Treaty was signed, banning atmospheric nuclear tests.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">1969:</strong>{" "}
                    Moved back to 10 minutes after most nations signed the
                    Nuclear Non-Proliferation Treaty.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">1972:</strong>{" "}
                    Moved back to 12 minutes after the US and Soviet Union
                    signed SALT I and the Anti-Ballistic Missile Treaty.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">1988:</strong>{" "}
                    Moved back to 6 minutes after the Intermediate-Range
                    Nuclear Forces (INF) Treaty was signed.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">1990:</strong>{" "}
                    Moved back to 10 minutes as the Cold War wound down
                    and the Berlin Wall fell.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">1991:</strong>{" "}
                    Moved back to 17 minutes &mdash; the safest ever
                    &mdash; after the Cold War ended and START was signed.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 mt-0.5">&#9679;</span>
                  <span>
                    <strong className="text-foreground">2010:</strong>{" "}
                    Moved back to 6 minutes after the New START treaty
                    negotiations and renewed US-Russia cooperation. This
                    was the last backward movement.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The pattern is unmistakable: when nations choose diplomacy
              over confrontation, when leaders sign treaties and honor
              agreements, when the international community cooperates to
              reduce shared threats, the clock moves backward. The
              Doomsday Clock measures risk that{" "}
              <strong>human action can reduce</strong>.
            </p>
            <p className="text-foreground leading-relaxed">
              The fact that the clock has not moved backward since 2010
              &mdash; the longest sustained forward march in its history
              &mdash; is itself a statement about the current state of
              international cooperation. But the mechanism for reversal
              still exists. It always has.
            </p>
          </section>

          {/* Section 6: Is the Doomsday Clock Accurate? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
              Is the Doomsday Clock Accurate?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              This is one of the most common questions people ask, and
              the answer requires understanding what the clock is designed
              to do. The Doomsday Clock is <strong>not</strong> a
              prediction tool. It does not forecast specific events or
              assign probabilities to scenarios. It will never tell you
              that nuclear war has a 15% chance of happening next year.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Instead, the Doomsday Clock is a{" "}
              <strong>risk communication device</strong> &mdash; a way
              to translate enormously complex, interconnected global
              threats into a single, intuitive symbol that anyone can
              understand. In this sense, asking whether the clock is
              &quot;accurate&quot; is like asking whether a weather
              warning is &quot;accurate.&quot; The warning does not
              predict exactly when a storm will hit; it communicates the
              level of danger based on the best available evidence.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-medium text-doom mb-2">
                  What Critics Say
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5">
                      &#9679;
                    </span>
                    <span>
                      The clock has stayed very close to midnight for
                      years without catastrophe actually occurring, which
                      could create a &quot;boy who cried wolf&quot;
                      effect.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5">
                      &#9679;
                    </span>
                    <span>
                      Combining multiple different threats into a single
                      number oversimplifies complex realities.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5">
                      &#9679;
                    </span>
                    <span>
                      The clock may reflect the perspectives of a
                      particular group of experts rather than a truly
                      universal assessment.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-medium text-doom mb-2">
                  What Supporters Say
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5">
                      &#9679;
                    </span>
                    <span>
                      The absence of catastrophe does not mean the risk
                      was overstated &mdash; it may mean the warnings
                      helped prevent it.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5">
                      &#9679;
                    </span>
                    <span>
                      Simplification is the point. No other tool
                      communicates existential risk to the public as
                      effectively.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5">
                      &#9679;
                    </span>
                    <span>
                      The caliber of scientists who set it &mdash;
                      including Nobel laureates &mdash; gives the clock
                      a credibility that few other risk assessments can
                      match.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock&apos;s real value lies not in precision
              but in attention. It forces a global conversation about
              existential risk at least once a year. It gives journalists,
              educators, and policymakers a shared reference point for
              discussing dangers that most people would rather not think
              about. And it has done so consistently for nearly 80 years,
              making it one of the most enduring public interest projects
              in the history of science communication.
            </p>
            <p className="text-foreground leading-relaxed">
              No single number can capture the full complexity of global
              risk. But the Doomsday Clock was never meant to. It was
              meant to make you pay attention &mdash; and in that mission,
              it has been remarkably effective.
            </p>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  What is the Doomsday Clock?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Doomsday Clock is a symbolic timepiece maintained by
                  the Bulletin of the Atomic Scientists since 1947. It
                  represents how close humanity is to catastrophic
                  destruction (midnight). The clock is set annually by a
                  board of scientists and security experts who assess
                  threats from nuclear weapons, climate change, and
                  disruptive technologies.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  What time is the Doomsday Clock right now?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Doomsday Clock is currently set at{" "}
                  <span className="text-doom font-semibold">
                    {currentTime.display}
                  </span>{" "}
                  to midnight, the closest it has ever been. It was last
                  set on {currentTime.lastUpdated} by the Bulletin of the
                  Atomic Scientists. The next update is expected in{" "}
                  {currentTime.nextUpdate}.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  How does the Doomsday Clock work?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Each year, the Bulletin&apos;s Science and Security
                  Board &mdash; a panel of world-renowned scientists
                  including Nobel laureates &mdash; assesses global
                  threats through a months-long process of research,
                  consultation, and deliberation. They evaluate nuclear
                  risk, climate change, and disruptive technologies before
                  announcing the new clock time each January.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Who created the Doomsday Clock?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Doomsday Clock was created in 1947 by artist Martyl
                  Langsdorf for the cover of the Bulletin of the Atomic
                  Scientists. The Bulletin was founded in 1945 by
                  Manhattan Project scientists, including Albert Einstein
                  and J. Robert Oppenheimer, who wanted to warn the public
                  about the dangers of nuclear weapons.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Is the Doomsday Clock accurate?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Doomsday Clock is not designed to predict specific
                  events. It is a risk communication tool that conveys the
                  expert consensus on how close humanity is to
                  self-destruction. Its credibility comes from the caliber
                  of scientists who set it, including Nobel laureates and
                  leading researchers in nuclear policy, climate science,
                  and emerging technologies.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Can the Doomsday Clock go backward?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes. The Doomsday Clock has moved backward 8 times in
                  its history. Every reversal followed major diplomatic
                  achievements such as arms control treaties or
                  international cooperation agreements. The farthest it
                  has ever been from midnight was 17 minutes in 1991,
                  after the Cold War ended.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  What happens if the Doomsday Clock reaches midnight?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Midnight on the Doomsday Clock represents global
                  catastrophe &mdash; the point at which human
                  civilization faces irreversible destruction. The clock
                  has never reached midnight. It is designed as a warning,
                  not a countdown, and the Bulletin&apos;s scientists
                  believe that human action can always pull the clock
                  back. Learn more in our article on{" "}
                  <Link
                    to="/blog/what-happens-doomsday-clock-midnight"
                    className="text-doom hover:underline"
                  >
                    what happens if the Doomsday Clock hits midnight
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA card */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Track the Doomsday Clock in Real Time
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See the current time, explore the interactive timeline, and
            simulate how global events could move the clock with our
            What If tool.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View the Live Doomsday Clock
          </Link>
        </div>

        <RelatedArticles
          currentSlug="what-is-the-doomsday-clock"
          slugs={[
            "doomsday-clock-history-timeline",
            "who-controls-doomsday-clock",
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
