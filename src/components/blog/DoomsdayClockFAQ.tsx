import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, HelpCircle } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockFAQ() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Doomsday Clock FAQ: 30 Most Common Questions Answered | DoomsdayClock.net",
      description:
        "Every question about the Doomsday Clock answered. What is it? What time is it set to? Who controls it? Can it go back? What happens at midnight? 30 expert answers.",
      path: "/blog/doomsday-clock-faq",
      newsKeywords:
        "doomsday clock faq, doomsday clock questions, doomsday clock answers, is the doomsday clock real, doomsday clock explained, doomsday clock meaning",
      publishedTime: "2026-03-15T00:00:00Z",
      modifiedTime: "2026-03-15T00:00:00Z",
      section: "Reference",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Doomsday Clock FAQ: 30 Most Common Questions Answered",
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
        "@id": "https://doomsdayclock.net/blog/doomsday-clock-faq",
      },
      description:
        "Every question about the Doomsday Clock answered — 30 expert answers covering basics, current status, history, meaning, and threats.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Reference",
      keywords: [
        "doomsday clock faq",
        "doomsday clock questions",
        "doomsday clock explained",
        "doomsday clock meaning",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 3000,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        // BASICS (1-8)
        {
          "@type": "Question",
          name: "What is the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock is a symbolic timepiece maintained by the Bulletin of the Atomic Scientists since 1947. It represents how close humanity is to catastrophic destruction — midnight — from nuclear war, climate change, and disruptive technologies. The closer the clock is to midnight, the greater the existential danger.",
          },
        },
        {
          "@type": "Question",
          name: "Who created the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock was created in 1947 by scientists from the Manhattan Project who founded the Bulletin of the Atomic Scientists. Artist Martyl Langsdorf designed the original clock image for the June 1947 cover of the Bulletin's magazine. The scientists who built the atomic bomb created the clock to warn the public about the dangers of the weapons they had helped create.",
          },
        },
        {
          "@type": "Question",
          name: "When was the Doomsday Clock created?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock was first set in 1947, two years after the atomic bombings of Hiroshima and Nagasaki. Its initial setting was 7 minutes to midnight. The clock has been adjusted 27 times since then, with the most recent change in February 2026.",
          },
        },
        {
          "@type": "Question",
          name: "Why was the Doomsday Clock created?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock was created to communicate the urgency of nuclear threats to the public and policymakers. The Manhattan Project scientists who built it believed they had a moral responsibility to warn the world about the existential dangers of nuclear weapons. The clock translates complex scientific and geopolitical assessments into a simple, universally understood symbol.",
          },
        },
        {
          "@type": "Question",
          name: "How does the Doomsday Clock work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Bulletin's Science and Security Board — a group of Nobel laureates and leading scientists — evaluates global threats annually and sets the clock's time. They assess nuclear risks, climate change, and disruptive technologies. The clock can move forward (closer to midnight) when threats increase, or backward when diplomatic progress reduces risk. It is updated once per year, typically in January or February.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Doomsday Clock real?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock is a real symbolic device maintained by a real scientific organization — the Bulletin of the Atomic Scientists. However, it is a metaphor, not a literal clock. It does not count down in real time. The threats it measures — nuclear weapons, climate change, and disruptive technologies — are very real, but the clock itself is a communication tool designed to convey the severity of those threats in an intuitive way.",
          },
        },
        {
          "@type": "Question",
          name: "Where is the Doomsday Clock located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no single physical Doomsday Clock. The clock is a concept maintained by the Bulletin of the Atomic Scientists, which is headquartered at the University of Chicago. Annual clock announcements are made at press conferences in Washington, D.C. The clock's setting is published on the Bulletin's website and communicated worldwide through media coverage.",
          },
        },
        {
          "@type": "Question",
          name: "Who controls the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock is set by the Bulletin of the Atomic Scientists' Science and Security Board, which includes Nobel laureates and experts in nuclear policy, climate science, and emerging technologies. They consult with the Bulletin's Board of Sponsors, which has included luminaries like Albert Einstein and Stephen Hawking. No government or political organization has any control over the clock's setting.",
          },
        },
        // CURRENT STATUS (9-14)
        {
          "@type": "Question",
          name: "What time is the Doomsday Clock set to right now?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Doomsday Clock is currently set at ${currentTime.display} to midnight, as of ${currentTime.lastUpdated}. This is the closest the clock has ever been to midnight in its 79-year history.`,
          },
        },
        {
          "@type": "Question",
          name: "When did the Doomsday Clock last change?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Doomsday Clock was last changed on ${currentTime.lastUpdated}, when the Bulletin moved it from 89 seconds to 85 seconds to midnight — a 4-second advance that was the largest single forward move in the seconds era. The Bulletin cited escalating nuclear risks, climate change, and AI-related threats.`,
          },
        },
        {
          "@type": "Question",
          name: "Why is the Doomsday Clock at 85 seconds?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The clock was moved to 85 seconds in February 2026 due to multiple converging threats: escalating nuclear risks from the Russia-Ukraine war and Middle East conflict, the continued acceleration of climate change with 2025 confirmed as the hottest year on record, and deepening concerns about artificial intelligence and autonomous weapons systems. The 4-second advance reflected the Bulletin's assessment that threats are compounding faster than in previous years.",
          },
        },
        {
          "@type": "Question",
          name: "What changed on the Doomsday Clock in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In February 2026, the Bulletin moved the Doomsday Clock from 89 seconds to 85 seconds to midnight — a 4-second jump that represented the largest single-year advance since the clock entered the seconds range in 2020. The move was driven by nuclear escalation, climate acceleration, AI risks, and the erosion of international cooperation.",
          },
        },
        {
          "@type": "Question",
          name: "When is the next Doomsday Clock update?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The next Doomsday Clock announcement is expected in ${currentTime.nextUpdate}. The Bulletin typically announces the new setting in late January or early February each year at a press conference in Washington, D.C.`,
          },
        },
        {
          "@type": "Question",
          name: "Has the Doomsday Clock ever been this close to midnight before?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. At 85 seconds to midnight, the Doomsday Clock is closer than it has ever been in its 79-year history. The previous record was 89 seconds in 2025. Before the clock entered the seconds range in 2020 (at 100 seconds), its closest setting was 2 minutes to midnight, reached twice — in 1953 during the hydrogen bomb tests and in 2018.",
          },
        },
        // HISTORY (15-20)
        {
          "@type": "Question",
          name: "When was the Doomsday Clock farthest from midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock was farthest from midnight in 1991, when it was set to 17 minutes to midnight. This followed the end of the Cold War, the signing of the Strategic Arms Reduction Treaty (START), and the dissolution of the Soviet Union. It remains the safest the clock has ever been.",
          },
        },
        {
          "@type": "Question",
          name: "When was the Doomsday Clock closest to midnight before 2020?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Before the clock moved to 100 seconds in 2020, its closest setting was 2 minutes to midnight. This level was reached twice: first in 1953, when both the US and Soviet Union tested thermonuclear weapons, and again in 2018, when the Bulletin cited failures to address nuclear threats and climate change.",
          },
        },
        {
          "@type": "Question",
          name: "How many times has the Doomsday Clock changed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock has been set 27 times since its creation in 1947. It has moved forward (closer to midnight) 17 times, moved backward 8 times, and remained unchanged on two occasions (2024 and a few other years where no adjustment was announced). The clock is not adjusted every year — it only changes when the Bulletin determines the threat level has materially shifted.",
          },
        },
        {
          "@type": "Question",
          name: "What happened to the Doomsday Clock during the Cold War?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "During the Cold War (1947-1991), the Doomsday Clock fluctuated dramatically. It reached its most dangerous Cold War setting of 2 minutes in 1953 during the hydrogen bomb tests. It moved back to 12 minutes in 1963 after the Partial Test Ban Treaty, and reached its all-time safest setting of 17 minutes in 1991 when the Cold War ended. The Cold War era demonstrated that diplomacy can move the clock backward even from the most dangerous positions.",
          },
        },
        {
          "@type": "Question",
          name: "Has the Doomsday Clock ever gone backward?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — the Doomsday Clock has moved backward 8 times in its history. The largest backward move was in 1991, when it jumped from 10 to 17 minutes after the Cold War ended. Other reversals followed arms control treaties and diplomatic breakthroughs. The last backward movement was in 2010, making the current 16-year stretch without a reversal the longest in the clock's history.",
          },
        },
        {
          "@type": "Question",
          name: "What was the original Doomsday Clock time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock was first set at 7 minutes to midnight in 1947. Artist Martyl Langsdorf chose this setting for aesthetic reasons — she thought it looked good on the cover of the Bulletin's magazine. Since then, the clock has been set based on scientific and geopolitical assessments by the Bulletin's Science and Security Board.",
          },
        },
        // MEANING & INTERPRETATION (21-25)
        {
          "@type": "Question",
          name: "What does midnight mean on the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Midnight on the Doomsday Clock symbolizes global catastrophe — the destruction of civilization as we know it. This could come from nuclear war, runaway climate change, pandemics, or disruptive technologies. Midnight represents a point of no return from which recovery would be impossible or extremely unlikely. The clock has never reached midnight.",
          },
        },
        {
          "@type": "Question",
          name: "What do the seconds on the Doomsday Clock represent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The seconds represent the urgency and proximity of existential threats. When the Bulletin moved the clock to 100 seconds in 2020, it broke a 73-year convention of measuring in minutes — a deliberate signal that the danger had entered unprecedented territory. Each second closer to midnight indicates a meaningful increase in the overall threat level, though seconds do not correspond to a specific unit of real time.",
          },
        },
        {
          "@type": "Question",
          name: "Is the Doomsday Clock a countdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Doomsday Clock is not a countdown to a specific event or date. It does not tick in real time. The clock is a barometer — a snapshot of the global threat level at the time of each annual assessment. It can move forward or backward depending on whether threats increase or decrease. It is designed to motivate action, not predict an endpoint.",
          },
        },
        {
          "@type": "Question",
          name: "Does the Doomsday Clock predict the future?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Doomsday Clock does not predict specific events or outcomes. It assesses the current level of existential risk based on expert analysis of nuclear weapons, climate change, and disruptive technologies. The Bulletin has always described the clock as a warning, not a forecast. Its purpose is to inform the public and motivate policy changes, not to prophesy doom.",
          },
        },
        {
          "@type": "Question",
          name: "How accurate is the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock is not designed to be 'accurate' in the way a measurement instrument is. It is a qualitative expert assessment, not a quantitative prediction. Its value lies in synthesizing complex global threats into a single, understandable indicator. The Bulletin's track record shows the clock has generally reflected the consensus of the scientific community on existential risk levels, though it has been criticized for not adjusting in real time to acute crises like the Cuban Missile Crisis.",
          },
        },
        // THREATS (26-30)
        {
          "@type": "Question",
          name: "What threats does the Doomsday Clock measure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock measures three primary categories of existential threat: nuclear weapons (the original and still primary factor), climate change (added as a factor in 2007), and disruptive technologies including AI, cyber threats, and biosecurity risks (increasingly weighted in recent years). The Bulletin also considers the state of international diplomacy and institutional capacity to manage these threats.",
          },
        },
        {
          "@type": "Question",
          name: "Does climate change affect the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Since 2007, climate change has been a formal factor in the Doomsday Clock's setting. The Bulletin evaluates rising global temperatures, the pace of emissions reductions, extreme weather events, and the risk of passing irreversible tipping points. Climate change has contributed to every forward movement of the clock since it was added as a factor, and the Bulletin has stated it is now a permanent consideration.",
          },
        },
        {
          "@type": "Question",
          name: "Does artificial intelligence affect the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. AI has become an increasingly significant factor in the Doomsday Clock's assessment, particularly since 2023. The Bulletin evaluates risks from autonomous weapons systems, AI-enabled cyberattacks on critical infrastructure, deepfake disinformation that undermines democratic processes, and the integration of AI into military decision-making including nuclear command and control. The lack of binding international AI governance frameworks has been cited as a major concern.",
          },
        },
        {
          "@type": "Question",
          name: "How do nuclear weapons affect the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuclear weapons remain the primary driver of the Doomsday Clock's setting. The Bulletin evaluates the size and readiness of global arsenals (approximately 12,500 warheads worldwide), the status of arms control agreements, nuclear rhetoric from world leaders, the risk of nuclear use in active conflicts, and the proliferation of nuclear weapons to additional states. The collapse of arms control frameworks like the INF Treaty and New START has been a major factor in the clock's recent forward movements.",
          },
        },
        {
          "@type": "Question",
          name: "What could move the Doomsday Clock back?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The clock could move backward with concrete diplomatic achievements: a new US-Russia or multilateral arms control treaty, binding international climate commitments backed by real emissions reductions, an international AI governance framework, or the resolution of active conflicts like the Russia-Ukraine war. Every backward movement in the clock's history was driven by specific, verifiable diplomatic progress — not rhetoric or good intentions.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "dc-faq");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "dc-faq-page");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="dc-faq"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="dc-faq-page"]'
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
          <span className="text-foreground">Doomsday Clock FAQ</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <HelpCircle className="w-3.5 h-3.5" />
            Reference
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Doomsday Clock FAQ:{" "}
            <span className="text-doom">
              30 Most Common Questions Answered
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 15, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              15 min read
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
                Set on {currentTime.lastUpdated} &mdash; the closest it has
                ever been
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Intro */}
          <section>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is one of the most recognized symbols of
              existential risk in the world &mdash; but it is also one of the
              most misunderstood. Is it a real clock? Does it predict the
              future? What happens if it hits midnight? Below, we answer the
              30 most commonly asked questions about the Doomsday Clock,
              organized into five categories. Each answer links to our
              in-depth articles for readers who want to go deeper.
            </p>
          </section>

          {/* ===== CATEGORY 1: BASICS ===== */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-6">
              The Basics
            </h2>

            {/* Q1 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                1. What is the Doomsday Clock?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock is a symbolic timepiece maintained by the{" "}
                <Link
                  to="/blog/who-controls-doomsday-clock"
                  className="text-atomic hover:underline"
                >
                  Bulletin of the Atomic Scientists
                </Link>{" "}
                since 1947. It represents how close humanity is to
                catastrophic destruction &mdash; midnight &mdash; from
                nuclear war, climate change, and disruptive technologies.
                The closer the clock is to midnight, the greater the
                existential danger facing civilization. It is not a literal
                clock but a powerful metaphor based on expert scientific
                assessment.
              </p>
            </div>

            {/* Q2 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                2. Who created the Doomsday Clock?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock was created in 1947 by scientists from
                the Manhattan Project who founded the Bulletin of the Atomic
                Scientists. Artist Martyl Langsdorf designed the original
                clock image for the June 1947 cover of the Bulletin&apos;s
                magazine. The same scientists who helped build the atomic
                bomb created the clock to warn the public about the dangers
                of the weapons they had unleashed. Read more about the{" "}
                <Link
                  to="/blog/who-created-doomsday-clock"
                  className="text-atomic hover:underline"
                >
                  origins of the Doomsday Clock
                </Link>
                .
              </p>
            </div>

            {/* Q3 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                3. When was the Doomsday Clock created?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock was first set in 1947, two years after
                the atomic bombings of Hiroshima and Nagasaki. Its initial
                setting was 7 minutes to midnight. The clock has been
                adjusted 27 times since then, with the most recent change
                coming in February 2026 when it moved to{" "}
                <span className="text-doom font-semibold">
                  {currentTime.display}
                </span>
                .
              </p>
            </div>

            {/* Q4 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                4. Why was the Doomsday Clock created?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock was created to communicate the urgency of
                nuclear threats to the public and policymakers. The
                Manhattan Project scientists who built it believed they had
                a moral responsibility to warn the world about the
                existential dangers of nuclear weapons. The clock translates
                complex scientific and geopolitical assessments into a
                simple, universally understood symbol that transcends
                language and cultural barriers. Learn more about{" "}
                <Link
                  to="/blog/why-doomsday-clock-important"
                  className="text-atomic hover:underline"
                >
                  why the Doomsday Clock matters
                </Link>
                .
              </p>
            </div>

            {/* Q5 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                5. How does the Doomsday Clock work?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Bulletin&apos;s Science and Security Board &mdash; a
                group of Nobel laureates and leading scientists &mdash;
                evaluates global threats annually and sets the clock&apos;s
                time. They assess nuclear risks, climate change, and
                disruptive technologies. The clock can move forward (closer
                to midnight) when threats increase, or backward when
                diplomatic progress reduces risk. It is updated once per
                year, typically in January or February. For a detailed
                breakdown, see{" "}
                <Link
                  to="/blog/how-doomsday-clock-calculated"
                  className="text-atomic hover:underline"
                >
                  how the Doomsday Clock is calculated
                </Link>
                .
              </p>
            </div>

            {/* Q6 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                6. Is the Doomsday Clock real?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock is a real symbolic device maintained by a
                real scientific organization &mdash; the Bulletin of the
                Atomic Scientists. However, it is a metaphor, not a literal
                clock. It does not count down in real time. The threats it
                measures &mdash; nuclear weapons, climate change, and
                disruptive technologies &mdash; are very real, but the clock
                itself is a communication tool designed to convey the
                severity of those threats in an intuitive way. Read our
                analysis:{" "}
                <Link
                  to="/blog/is-doomsday-clock-real-or-fake"
                  className="text-atomic hover:underline"
                >
                  Is the Doomsday Clock real or fake?
                </Link>
              </p>
            </div>

            {/* Q7 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                7. Where is the Doomsday Clock located?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                There is no single physical Doomsday Clock. The clock is a
                concept maintained by the Bulletin of the Atomic Scientists,
                which is headquartered at the University of Chicago. Annual
                clock announcements are made at press conferences in
                Washington, D.C. The clock&apos;s setting is published on
                the Bulletin&apos;s website and communicated worldwide
                through media coverage. Learn more about{" "}
                <Link
                  to="/blog/where-doomsday-clock-located"
                  className="text-atomic hover:underline"
                >
                  where the Doomsday Clock is located
                </Link>
                .
              </p>
            </div>

            {/* Q8 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                8. Who controls the Doomsday Clock?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock is set by the Bulletin of the Atomic
                Scientists&apos; Science and Security Board, which includes
                Nobel laureates and experts in nuclear policy, climate
                science, and emerging technologies. They consult with the
                Bulletin&apos;s Board of Sponsors, which has included
                luminaries like Albert Einstein and Stephen Hawking. No
                government or political organization has any control over
                the clock&apos;s setting. Read our deep dive on{" "}
                <Link
                  to="/blog/who-controls-doomsday-clock"
                  className="text-atomic hover:underline"
                >
                  who controls the Doomsday Clock
                </Link>
                .
              </p>
            </div>
          </section>

          {/* ===== CATEGORY 2: CURRENT STATUS ===== */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-6">
              Current Status
            </h2>

            {/* Q9 */}
            <div className="p-5 rounded-lg bg-doom/10 border border-doom/30 mb-4">
              <h3 className="text-lg font-semibold text-doom mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5 text-doom shrink-0" />
                9. What time is the Doomsday Clock set to right now?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock is currently set at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight, as of {currentTime.lastUpdated}. This is the
                closest the clock has ever been to midnight in its 79-year
                history. See our full analysis of the{" "}
                <Link
                  to="/blog/doomsday-clock-current-time"
                  className="text-doom hover:underline"
                >
                  current Doomsday Clock time
                </Link>
                .
              </p>
            </div>

            {/* Q10 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                10. When did the Doomsday Clock last change?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock was last changed on{" "}
                {currentTime.lastUpdated}, when the Bulletin moved it from
                89 seconds to 85 seconds to midnight &mdash; a 4-second
                advance that was the largest single forward move in the
                seconds era. The Bulletin cited escalating nuclear risks,
                climate change, and AI-related threats as the primary
                drivers.
              </p>
            </div>

            {/* Q11 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                11. Why is the Doomsday Clock at 85 seconds?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The clock was moved to 85 seconds in February 2026 due to
                multiple converging threats: escalating nuclear risks from
                the Russia-Ukraine war and Middle East conflict, the
                continued acceleration of climate change with 2025
                confirmed as the hottest year on record, and deepening
                concerns about artificial intelligence and autonomous
                weapons systems. The 4-second advance reflected the
                Bulletin&apos;s assessment that threats are compounding
                faster than in previous years. Read our full breakdown of
                the{" "}
                <Link
                  to="/blog/doomsday-clock-2026"
                  className="text-atomic hover:underline"
                >
                  2026 Doomsday Clock announcement
                </Link>
                .
              </p>
            </div>

            {/* Q12 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                12. What changed on the Doomsday Clock in 2026?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In February 2026, the Bulletin moved the Doomsday Clock from
                89 seconds to 85 seconds to midnight &mdash; a 4-second
                jump that represented the largest single-year advance since
                the clock entered the seconds range in 2020. The move was
                driven by nuclear escalation, climate acceleration, AI
                risks, and the erosion of international cooperation. See{" "}
                <Link
                  to="/blog/doomsday-clock-2026"
                  className="text-atomic hover:underline"
                >
                  Doomsday Clock 2026: What Changed and Why
                </Link>
                .
              </p>
            </div>

            {/* Q13 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                13. When is the next Doomsday Clock update?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The next Doomsday Clock announcement is expected in{" "}
                <span className="text-doom font-semibold">
                  {currentTime.nextUpdate}
                </span>
                . The Bulletin typically announces the new setting in late
                January or early February each year at a press conference in
                Washington, D.C. The Science and Security Board evaluates
                threats throughout the year before making their decision.
              </p>
            </div>

            {/* Q14 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                14. Has the Doomsday Clock ever been this close to midnight
                before?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No. At {currentTime.display} to midnight, the Doomsday
                Clock is closer than it has ever been in its 79-year
                history. The previous record was 89 seconds in 2025. Before
                the clock entered the seconds range in 2020 (at 100
                seconds), its closest setting was 2 minutes to midnight,
                reached twice &mdash; in 1953 during the hydrogen bomb
                tests and in 2018. Explore the full{" "}
                <Link
                  to="/blog/doomsday-clock-history-timeline"
                  className="text-atomic hover:underline"
                >
                  Doomsday Clock history timeline
                </Link>
                .
              </p>
            </div>
          </section>

          {/* ===== CATEGORY 3: HISTORY ===== */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-6">
              History
            </h2>

            {/* Q15 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                15. When was the Doomsday Clock farthest from midnight?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock was farthest from midnight in 1991, when
                it was set to 17 minutes to midnight. This followed the end
                of the Cold War, the signing of the Strategic Arms Reduction
                Treaty (START), and the dissolution of the Soviet Union. It
                remains the safest the clock has ever been &mdash; a full
                15 minutes and 35 seconds safer than today&apos;s setting.
              </p>
            </div>

            {/* Q16 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                16. When was the Doomsday Clock closest to midnight before
                2020?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Before the clock moved to 100 seconds in 2020, its closest
                setting was 2 minutes to midnight. This level was reached
                twice: first in 1953, when both the US and Soviet Union
                tested thermonuclear weapons, and again in 2018, when the
                Bulletin cited failures to address nuclear threats and
                climate change. The{" "}
                <Link
                  to="/blog/doomsday-clock-cold-war"
                  className="text-atomic hover:underline"
                >
                  Cold War era
                </Link>{" "}
                saw the most dramatic swings in the clock&apos;s history.
              </p>
            </div>

            {/* Q17 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                17. How many times has the Doomsday Clock changed?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock has been set 27 times since its creation
                in 1947. It has moved forward (closer to midnight) 17
                times, moved backward 8 times, and remained unchanged on
                two occasions. The clock is not adjusted every year &mdash;
                it only changes when the Bulletin determines the threat
                level has materially shifted. See the{" "}
                <Link
                  to="/blog/doomsday-clock-history-timeline"
                  className="text-atomic hover:underline"
                >
                  complete timeline of every change
                </Link>
                .
              </p>
            </div>

            {/* Q18 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                18. What happened to the Doomsday Clock during the Cold War?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                During the Cold War (1947&ndash;1991), the Doomsday Clock
                fluctuated dramatically. It reached its most dangerous Cold
                War setting of 2 minutes in 1953 during the hydrogen bomb
                tests. It moved back to 12 minutes in 1963 after the
                Partial Test Ban Treaty, and reached its all-time safest
                setting of 17 minutes in 1991 when the Cold War ended. The
                era demonstrated that diplomacy can move the clock backward
                even from the most dangerous positions. Read our full{" "}
                <Link
                  to="/blog/doomsday-clock-cold-war"
                  className="text-atomic hover:underline"
                >
                  Cold War analysis
                </Link>
                .
              </p>
            </div>

            {/* Q19 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                19. Has the Doomsday Clock ever gone backward?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes &mdash; the Doomsday Clock has moved backward 8 times
                in its history. The largest backward move was in 1991, when
                it jumped from 10 to 17 minutes after the Cold War ended.
                Other reversals followed arms control treaties and
                diplomatic breakthroughs. The last backward movement was in
                2010, making the current 16-year stretch without a reversal
                the longest in the clock&apos;s history. Read our detailed
                account of{" "}
                <Link
                  to="/blog/can-doomsday-clock-go-back"
                  className="text-atomic hover:underline"
                >
                  every time the clock went back
                </Link>
                .
              </p>
            </div>

            {/* Q20 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                20. What was the original Doomsday Clock time?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock was first set at 7 minutes to midnight in
                1947. Artist Martyl Langsdorf chose this setting for
                aesthetic reasons &mdash; she thought it looked good on the
                cover of the Bulletin&apos;s magazine. Since then, the clock
                has been set based on scientific and geopolitical assessments
                by the Bulletin&apos;s Science and Security Board.
              </p>
            </div>
          </section>

          {/* ===== CATEGORY 4: MEANING & INTERPRETATION ===== */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-6">
              Meaning &amp; Interpretation
            </h2>

            {/* Q21 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                21. What does midnight mean on the Doomsday Clock?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Midnight on the Doomsday Clock symbolizes global catastrophe
                &mdash; the destruction of civilization as we know it. This
                could come from nuclear war, runaway climate change,
                pandemics, or disruptive technologies. Midnight represents a
                point of no return from which recovery would be impossible
                or extremely unlikely. The clock has never reached midnight.
                Read our full explainer on{" "}
                <Link
                  to="/blog/what-happens-doomsday-clock-midnight"
                  className="text-atomic hover:underline"
                >
                  what happens at midnight
                </Link>
                .
              </p>
            </div>

            {/* Q22 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                22. What do the seconds on the Doomsday Clock represent?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The seconds represent the urgency and proximity of
                existential threats. When the Bulletin moved the clock to
                100 seconds in 2020, it broke a 73-year convention of
                measuring in minutes &mdash; a deliberate signal that the
                danger had entered unprecedented territory. Each second
                closer to midnight indicates a meaningful increase in the
                overall threat level, though seconds do not correspond to a
                specific unit of real time. See{" "}
                <Link
                  to="/blog/what-does-89-seconds-to-midnight-mean"
                  className="text-atomic hover:underline"
                >
                  what the seconds mean
                </Link>
                .
              </p>
            </div>

            {/* Q23 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                23. Is the Doomsday Clock a countdown?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No. The Doomsday Clock is not a countdown to a specific
                event or date. It does not tick in real time. The clock is a
                barometer &mdash; a snapshot of the global threat level at
                the time of each annual assessment. It can move forward or
                backward depending on whether threats increase or decrease.
                It is designed to motivate action, not predict an endpoint.
                Learn{" "}
                <Link
                  to="/blog/how-to-read-doomsday-clock"
                  className="text-atomic hover:underline"
                >
                  how to read the Doomsday Clock
                </Link>
                .
              </p>
            </div>

            {/* Q24 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                24. Does the Doomsday Clock predict the future?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No. The Doomsday Clock does not predict specific events or
                outcomes. It assesses the current level of existential risk
                based on expert analysis of nuclear weapons, climate change,
                and disruptive technologies. The Bulletin has always
                described the clock as a warning, not a forecast. Its
                purpose is to inform the public and motivate policy changes,
                not to prophesy doom.
              </p>
            </div>

            {/* Q25 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                25. How accurate is the Doomsday Clock?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock is not designed to be
                &quot;accurate&quot; in the way a measurement instrument is.
                It is a qualitative expert assessment, not a quantitative
                prediction. Its value lies in synthesizing complex global
                threats into a single, understandable indicator. The
                Bulletin&apos;s track record shows the clock has generally
                reflected the consensus of the scientific community on
                existential risk levels, though it has been criticized for
                not adjusting in real time to acute crises like the Cuban
                Missile Crisis.
              </p>
            </div>
          </section>

          {/* ===== CATEGORY 5: THREATS ===== */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-6">
              Threats
            </h2>

            {/* Q26 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                26. What threats does the Doomsday Clock measure?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Doomsday Clock measures three primary categories of
                existential threat: nuclear weapons (the original and still
                primary factor), climate change (added as a factor in 2007),
                and disruptive technologies including AI, cyber threats, and
                biosecurity risks (increasingly weighted in recent years).
                The Bulletin also considers the state of international
                diplomacy and institutional capacity to manage these
                threats.
              </p>
            </div>

            {/* Q27 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                27. Does climate change affect the Doomsday Clock?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes. Since 2007, climate change has been a formal factor in
                the Doomsday Clock&apos;s setting. The Bulletin evaluates
                rising global temperatures, the pace of emissions
                reductions, extreme weather events, and the risk of passing
                irreversible tipping points. Climate change has contributed
                to every forward movement of the clock since it was added as
                a factor. Read more about the{" "}
                <Link
                  to="/blog/doomsday-clock-climate-change"
                  className="text-atomic hover:underline"
                >
                  Doomsday Clock and climate change
                </Link>
                .
              </p>
            </div>

            {/* Q28 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                28. Does artificial intelligence affect the Doomsday Clock?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes. AI has become an increasingly significant factor in the
                Doomsday Clock&apos;s assessment, particularly since 2023.
                The Bulletin evaluates risks from autonomous weapons
                systems, AI-enabled cyberattacks on critical infrastructure,
                deepfake disinformation that undermines democratic
                processes, and the integration of AI into military
                decision-making including nuclear command and control. The
                lack of binding international AI governance frameworks has
                been cited as a major concern.
              </p>
            </div>

            {/* Q29 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                29. How do nuclear weapons affect the Doomsday Clock?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nuclear weapons remain the primary driver of the Doomsday
                Clock&apos;s setting. The Bulletin evaluates the size and
                readiness of global arsenals (approximately 12,500 warheads
                worldwide), the status of arms control agreements, nuclear
                rhetoric from world leaders, the risk of nuclear use in
                active conflicts, and the proliferation of nuclear weapons
                to additional states. The collapse of arms control
                frameworks like the INF Treaty and New START has been a
                major factor in the clock&apos;s recent forward movements.
              </p>
            </div>

            {/* Q30 */}
            <div className="p-5 rounded-lg bg-white/5 border border-white/10 mb-4">
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-atomic shrink-0" />
                30. What could move the Doomsday Clock back?
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The clock could move backward with concrete diplomatic
                achievements: a new US-Russia or multilateral arms control
                treaty, binding international climate commitments backed by
                real emissions reductions, an international AI governance
                framework, or the resolution of active conflicts like the
                Russia-Ukraine war. Every backward movement in the
                clock&apos;s history was driven by specific, verifiable
                diplomatic progress &mdash; not rhetoric or good intentions.
                Read our analysis of{" "}
                <Link
                  to="/blog/can-doomsday-clock-go-back"
                  className="text-atomic hover:underline"
                >
                  how the clock can go back
                </Link>
                .
              </p>
            </div>
          </section>
        </div>

        {/* CTA */}
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
                Every change in the clock&apos;s 79-year history.
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
                What the clock&apos;s midnight setting actually represents.
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
                Inside the Bulletin of the Atomic Scientists.
              </p>
            </Link>
            <Link
              to="/blog/can-doomsday-clock-go-back"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-atomic/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-atomic transition-colors mb-1">
                Can the Doomsday Clock Go Back?
              </h4>
              <p className="text-xs text-muted-foreground">
                A history of every reversal and what drove them.
              </p>
            </Link>
          </div>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-faq"
          slugs={[
            "what-is-the-doomsday-clock",
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
