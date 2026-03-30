import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Megaphone,
  Globe,
  Lightbulb,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WhyDoomsdayClockImportant() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Why Is the Doomsday Clock Important? Why You Should Care | DoomsdayClock.net",
      description:
        "Why does the Doomsday Clock matter? From influencing nuclear policy to raising climate awareness, discover why this 79-year-old symbol remains critically important today.",
      path: "/blog/why-is-doomsday-clock-important",
      newsKeywords:
        "why is doomsday clock important, does doomsday clock mean anything, doomsday clock significance, why doomsday clock matters, doomsday clock purpose",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Why Is the Doomsday Clock Important? Why You Should Care",
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
          "https://doomsdayclock.net/blog/why-is-doomsday-clock-important",
      },
      description:
        "Why does the Doomsday Clock matter? From influencing nuclear policy to raising climate awareness, discover why this 79-year-old symbol remains critically important today.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "why is doomsday clock important",
        "does doomsday clock mean anything",
        "doomsday clock significance",
        "why doomsday clock matters",
        "doomsday clock purpose",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 1800,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "why-important");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="why-important"]'
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
            Why Is the Doomsday Clock Important
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <Lightbulb className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Why Is the{" "}
            <span className="text-doom">Doomsday Clock</span> Important?
            Why You Should Care
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 14, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              7 min read
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
              The Doomsday Clock has been a fixture of global culture
              since 1947, appearing on magazine covers, in presidential
              speeches, and across countless news headlines. Yet for
              something so widely recognized, it is also widely
              misunderstood. Critics dismiss it as mere fear-mongering or
              an outdated relic of Cold War anxiety. Supporters see it as
              one of the most important communication tools ever devised
              by the scientific community. The truth, as with most things
              involving existential risk, is both more nuanced and more
              urgent than either camp typically acknowledges.
            </p>
            <p className="text-foreground leading-relaxed">
              Currently set at {currentTime.display} to midnight — the
              closest it has ever been to catastrophe — the Doomsday Clock
              is not a prediction, a countdown, or a gimmick. It is a
              carefully considered assessment by some of the world's
              leading scientists and security experts about how close
              humanity stands to destroying itself. Understanding why the
              clock matters requires looking beyond the symbol to the
              concrete effects it has on policy, public awareness, and the
              global conversation about our collective future.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
              More Than a Symbol
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is often dismissed as "just a symbol."
              But that framing fundamentally misunderstands the power of
              symbols in shaping human behavior. National flags are "just
              symbols," yet people go to war over them. Traffic lights are
              "just symbols," yet they prevent millions of accidents every
              day. The Doomsday Clock operates in the same way — it
              translates enormously complex, abstract threats into
              something that anyone, regardless of their scientific
              background, can immediately grasp. When someone hears "89
              seconds to midnight," they do not need a Ph.D. in nuclear
              physics to understand that the situation is dire.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This simplicity is the clock's greatest achievement. The
              threats it represents — nuclear war, climate change,
              disruptive technologies, biosecurity risks — are staggeringly
              complex. They involve intricate geopolitics, advanced
              science, and long-term probabilistic thinking that most
              people (including most policymakers) struggle to engage with
              in their full complexity. The clock cuts through that
              complexity and delivers a verdict: things are getting better,
              or things are getting worse. That clarity is not a weakness;
              it is precisely what makes the clock valuable.
            </p>
            <p className="text-foreground leading-relaxed">
              When the Bulletin of the Atomic Scientists moves the clock,
              the world pays attention. Major news outlets on every
              continent cover the announcement. Social media lights up
              with discussion. World leaders are asked to respond. The
              clock forces a conversation about existential risk that
              might otherwise never happen — conversations that are easy
              to avoid because the threats feel too large, too abstract,
              or too frightening to confront directly.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Megaphone className="w-5 h-5 sm:w-6 sm:h-6" />
              Influencing Policy and Diplomacy
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock's influence extends far beyond public
              awareness — it has a documented track record of shaping
              policy discussions at the highest levels of government. The
              clock's announcements have been cited in Congressional
              testimonies, referenced in speeches at the United Nations,
              and invoked during diplomatic negotiations over arms control
              treaties. When the Bulletin moves the clock forward,
              policymakers cannot ignore it because their constituents and
              the media demand a response.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The clock provides scientists with a uniquely powerful
              platform to speak directly to power. The Bulletin's Science
              and Security Board — which includes Nobel laureates and
              former heads of state — uses the annual announcement to
              deliver specific recommendations to governments around the
              world. These are not vague platitudes but concrete policy
              proposals: resume arms control negotiations, rejoin
              international climate agreements, establish governance
              frameworks for artificial intelligence, increase funding for
              pandemic preparedness. The clock's visibility ensures that
              these recommendations reach an audience that scientific
              papers and policy briefs alone never could.
            </p>
            <p className="text-foreground leading-relaxed">
              Arms control advocates have repeatedly used the clock's
              settings to build urgency for treaty negotiations. During
              the negotiations that led to the New START treaty, for
              example, the clock's position was cited as evidence that the
              international community needed to act decisively to reduce
              nuclear arsenals. The clock's movement backward after the
              end of the Cold War — reaching 17 minutes to midnight in
              1991 — demonstrated that progress was possible and provided
              a tangible benchmark against which future setbacks could be
              measured. This dual function — as both warning and
              scoreboard — gives the clock a diplomatic utility that few
              other tools can match.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
              Public Awareness and Education
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Most people will never read a peer-reviewed paper on nuclear
              proliferation, sit through a briefing on climate tipping
              points, or attend a conference on biosecurity. But they
              understand "85 seconds to midnight." The Doomsday Clock is
              arguably the most successful science communication tool ever
              created — a single image that has sustained global relevance
              for nearly eight decades. No other scientific metaphor has
              achieved anything close to the same level of cultural
              penetration.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The clock is taught in schools around the world, from middle
              school social studies classes to graduate seminars on
              international security. It serves as an entry point for
              students who might otherwise never engage with topics like
              nuclear deterrence theory, the physics of climate feedback
              loops, or the challenges of governing emerging technologies.
              Teachers use the clock's history — its movements forward and
              backward over the decades — as a narrative framework for
              teaching the history of the Cold War, the arms race, the
              rise of environmentalism, and the information revolution.
            </p>
            <p className="text-foreground leading-relaxed">
              In media, the clock provides journalists with a reliable,
              authoritative reference point for stories about global
              threats. Every January, when the Bulletin announces its
              decision, thousands of articles are published worldwide
              explaining the reasoning behind the clock's position. These
              articles reach millions of readers who might never seek out
              information about existential risks on their own. The clock
              thus functions as a kind of annual global health checkup for
              civilization — a moment when the world pauses to consider
              whether things are getting better or worse, and why.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              A Barometer of Our Time
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The clock's trajectory over its nearly 80-year history tells
              a story that no other single indicator can match. It is a
              barometer of humanity's self-assessment — a running record
              of how the world's leading experts have judged the state of
              existential risk at each moment in history. Looking at the
              clock's timeline is like reading a thermometer of
              civilization's health, and the readings are sobering.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The relative safety of 1991, when the clock stood at 17
              minutes to midnight following the end of the Cold War and
              the signing of the Strategic Arms Reduction Treaty, now
              looks like a distant high-water mark. The gradual
              deterioration through the 2000s — driven by the collapse of
              arms control frameworks, the acceleration of climate change,
              and the rise of cyberwarfare — brought the clock steadily
              closer to midnight. The unprecedented move to seconds in
              2020, when the clock was set to 100 seconds, signaled that
              the world had entered genuinely uncharted territory. Each
              setting is a data point in humanity's ongoing
              self-assessment, and the trend line is unmistakably moving
              in the wrong direction.
            </p>
            <p className="text-foreground leading-relaxed">
              This historical dimension gives the clock a depth that
              snapshot assessments cannot provide. A single year's
              setting might be debatable, but the overall pattern is
              stark: the world has been getting steadily more dangerous
              for three decades. The clock captures not just the current
              moment but the trajectory — and trajectories matter more
              than any single data point when it comes to understanding
              risk. Historians, political scientists, and security
              analysts all use the clock's history as a reference frame
              for understanding how the global threat landscape has
              evolved since the dawn of the nuclear age.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
              Why It Matters Now More Than Ever
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock was created to address a single threat:
              nuclear weapons. In the decades since, the landscape of
              existential risk has expanded dramatically, and the clock
              has evolved with it. Today, the Bulletin's assessment
              considers multiple overlapping and mutually reinforcing
              threats, each of which would be alarming on its own and
              which together create a risk environment unlike anything
              humanity has previously faced.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Nuclear modernization programs are underway in all nine
              nuclear-armed states, with the United States, Russia, and
              China investing hundreds of billions of dollars in new
              warheads, delivery systems, and command-and-control
              infrastructure. Climate change is accelerating past
              internationally agreed targets, with 2025 confirmed as the
              hottest year on record and key tipping points — Arctic ice
              loss, permafrost thaw, coral reef collapse — approaching or
              already crossed. Artificial intelligence is developing
              faster than any governance framework can keep pace with,
              raising profound questions about autonomous weapons,
              disinformation, and the concentration of power.
              Biosecurity risks, highlighted by the COVID-19 pandemic,
              remain elevated as synthetic biology tools become more
              accessible and dual-use research continues with inadequate
              oversight.
            </p>
            <p className="text-foreground leading-relaxed">
              Perhaps most concerning is the decline of international
              cooperation at precisely the moment when it is most needed.
              Arms control treaties are collapsing, climate negotiations
              are stalling, and multilateral institutions are under
              unprecedented strain. The convergence of these risks — each
              one feeding into and amplifying the others — makes the
              clock's role as an integrative assessment tool more valuable
              than at any point in its history. No other institution
              attempts to synthesize all of these threats into a single,
              coherent evaluation and communicate it to the global public.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
              What You Can Do
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is, above all, a call to action. Its
              purpose is not to scare people into paralysis but to
              motivate them into engagement. The clock's creators — many
              of whom had worked on the Manhattan Project and understood
              better than anyone the destructive potential of nuclear
              weapons — believed that informed citizens could change the
              course of history. That belief remains the Bulletin's
              guiding principle today, and it should guide your response
              to the clock as well.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Start by staying informed. Follow the Bulletin of the
              Atomic Scientists and other organizations working on
              existential risk. Read beyond the headlines to understand
              the nuances of nuclear policy, climate science, and
              technology governance. Support organizations working on
              arms control, climate action, and responsible AI
              development — whether through donations, volunteering, or
              simply amplifying their work. These organizations are
              chronically underfunded relative to the scale of the
              threats they address, and public support makes a real
              difference.
            </p>
            <p className="text-foreground leading-relaxed">
              Most importantly, vote with these issues in mind. Elected
              officials respond to what their constituents care about,
              and existential risks rarely feature in political campaigns
              because voters rarely demand it. Make nuclear policy,
              climate action, and technology governance part of your
              criteria when evaluating candidates. Talk about these
              issues with your friends, your family, and your community.
              The Doomsday Clock reminds us that the threats are real,
              urgent, and within our power to address — but only if
              enough people decide to act. The hands of the clock can
              move backward. They have before. Whether they do again
              depends on what we do next.
            </p>
          </section>
        </div>

        <RelatedArticles
          currentSlug="why-is-doomsday-clock-important"
          slugs={[
            "how-is-doomsday-clock-calculated",
            "is-doomsday-clock-real-or-fake",
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
