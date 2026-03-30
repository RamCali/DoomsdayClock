import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Users,
  Shield,
  FlaskConical,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WhoControlsClock() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Who Controls the Doomsday Clock? Inside the Bulletin of the Atomic Scientists | DoomsdayClock.net",
      description:
        "Who decides the Doomsday Clock time? Learn about the Bulletin of the Atomic Scientists, their Science and Security Board, and the process behind each clock setting.",
      path: "/blog/who-controls-doomsday-clock",
      newsKeywords:
        "who controls doomsday clock, bulletin of atomic scientists, doomsday clock decision, science security board, who sets doomsday clock, who runs doomsday clock, who moves doomsday clock, who updates doomsday clock, who decides doomsday clock",
      publishedTime: "2026-03-07T00:00:00Z",
      modifiedTime: "2026-03-07T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Who Controls the Doomsday Clock? Inside the Bulletin of the Atomic Scientists",
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
          "https://doomsdayclock.net/blog/who-controls-doomsday-clock",
      },
      description:
        "Who decides the Doomsday Clock time? Inside the Bulletin of the Atomic Scientists and their Science and Security Board.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "who controls doomsday clock",
        "bulletin of atomic scientists",
        "science security board",
        "doomsday clock decision",
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
          name: "Who controls the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock is set by the Science and Security Board of the Bulletin of the Atomic Scientists, a nonprofit organization founded in 1945 by Manhattan Project scientists. The board includes Nobel Laureates and world-renowned experts in nuclear policy, climate science, and emerging technologies.",
          },
        },
        {
          "@type": "Question",
          name: "Who sets the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Science and Security Board (SASB) of the Bulletin of the Atomic Scientists sets the clock through an annual process of assessment, consultation with external experts, deliberation, and consensus-building. The decision is announced each January at a press conference.",
          },
        },
        {
          "@type": "Question",
          name: "Who runs the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Bulletin of the Atomic Scientists, headquartered in Chicago, Illinois, runs the Doomsday Clock. It was founded in 1945 by scientists who worked on the Manhattan Project, including early supporters Albert Einstein and J. Robert Oppenheimer.",
          },
        },
        {
          "@type": "Question",
          name: "Who moves the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Science and Security Board moves the clock based on their assessment of nuclear risks, climate change, and disruptive technologies. The board does not receive government funding and operates independently to maintain credibility.",
          },
        },
        {
          "@type": "Question",
          name: "Who updates the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Bulletin's Science and Security Board updates the clock annually, typically in January. The process involves months of research, external consultations, and deliberation before a consensus is reached on the new setting.",
          },
        },
        {
          "@type": "Question",
          name: "Who decides the Doomsday Clock time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Science and Security Board decides the time through a consensus process. Board members independently evaluate global threats, consult with external experts and intelligence professionals, then convene to debate and reach agreement on the clock setting.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "who-controls");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "who-controls-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="who-controls"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="who-controls-faq"]'
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
          <span className="text-foreground">
            Who Controls the Doomsday Clock
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <FlaskConical className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Who Controls the{" "}
            <span className="text-doom">Doomsday Clock?</span> Inside the
            Bulletin of the Atomic Scientists
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
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
              Every January, the world holds its breath as a group of
              scientists announces how close humanity stands to
              self-destruction. The Doomsday Clock — currently set at{" "}
              {currentTime.display} to midnight, the closest it has ever
              been — is the most recognized symbol of existential risk on
              the planet. But who actually decides where the clock hands
              land? The answer involves a unique organization born from
              the ashes of Hiroshima, a board of world-class experts, and
              a deliberation process that weighs threats most of us
              prefer not to think about.
            </p>
            <p className="text-foreground leading-relaxed">
              Understanding who controls the Doomsday Clock matters
              because it reveals how some of the world's brightest minds
              assess the dangers we face — and whether we are paying
              enough attention.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              The Bulletin of the Atomic Scientists
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is owned and operated by the{" "}
              <strong>Bulletin of the Atomic Scientists</strong>, a
              nonprofit organization founded in 1945 by scientists who
              had worked on the Manhattan Project — the secret wartime
              effort that produced the first nuclear weapons. Among the
              Bulletin's early supporters were Albert Einstein and J.
              Robert Oppenheimer, both of whom recognized that the
              technology they had helped create posed an unprecedented
              threat to human civilization.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Originally launched as a one-page newsletter circulated
              among physicists at the University of Chicago, the Bulletin
              quickly grew into a respected publication covering nuclear
              policy, arms control, and global security. Its founding
              mission was simple but urgent: inform the public and
              policymakers about the dangers of nuclear weapons so that
              humanity might avoid catastrophe.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Today, the Bulletin is headquartered in Chicago, Illinois,
              and operates as a media and policy organization. It
              publishes a peer-reviewed academic journal, hosts public
              events, and maintains the Doomsday Clock as its most
              visible public-facing project. Over eight decades, it has
              evolved from a nuclear-focused group into a broader
              organization that addresses multiple categories of
              existential risk.
            </p>
            <p className="text-foreground leading-relaxed">
              The clock itself was created in 1947 by artist{" "}
              <strong>Martyl Langsdorf</strong>, wife of Manhattan
              Project physicist Alexander Langsdorf Jr. She designed the
              now-iconic image for the cover of the Bulletin's June 1947
              issue, setting the initial time at 7 minutes to midnight.
              What was intended as a one-time magazine cover became the
              most enduring symbol of nuclear danger in history.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
              The Science and Security Board
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While the Bulletin of the Atomic Scientists is the parent
              organization, the body that actually sets the Doomsday
              Clock is its{" "}
              <strong>Science and Security Board (SASB)</strong>. This
              board is composed of world-renowned scientists, policy
              experts, and former government officials who possess deep
              expertise in the specific threat areas the clock is
              designed to measure.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Board members bring credentials in nuclear physics, weapons
              policy, climate science, biosecurity, cybersecurity, and
              emerging technology. Many hold positions at leading
              universities and research institutions. The board's
              composition is deliberately interdisciplinary — the
              Bulletin recognizes that modern existential threats do not
              respect traditional academic boundaries.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The SASB is supported by a group of sponsors that includes
              Nobel Prize laureates. These sponsors serve as advisors and
              lend their expertise to the annual threat assessment. Over
              the years, multiple Nobel Prize winners in physics,
              chemistry, and peace have served on or advised the board,
              giving the clock-setting process a level of scientific
              credibility that few other public risk assessments can
              match.
            </p>
            <p className="text-foreground leading-relaxed">
              The board does not receive government funding, and its
              members serve in a voluntary capacity. This independence is
              considered essential to the clock's credibility — it allows
              the board to make assessments free from political pressure
              or national bias.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              How the Decision Is Made
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Setting the Doomsday Clock is not a casual exercise. The
              annual process unfolds over several months and involves
              multiple stages of research, consultation, and debate. Here
              is how it works.
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
                      Assessment Phase
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Board members independently evaluate the current
                      state of global threats across nuclear risk,
                      climate change, and disruptive technologies. Each
                      member reviews the latest data, research, and
                      geopolitical developments within their area of
                      expertise. This phase typically begins in the fall
                      and continues through late autumn, generating
                      individual written assessments that form the basis
                      of group discussion.
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
                      Consultation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The board consults with external experts,
                      government officials, and intelligence
                      professionals. In some cases, board members receive
                      classified briefings on matters of national
                      security. They also review analyses from other
                      organizations, think tanks, and academic
                      institutions. This consultation phase ensures that
                      the board's assessment reflects the broadest
                      possible range of expert opinion rather than
                      relying on any single perspective.
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
                      Deliberation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The full Science and Security Board convenes to
                      debate the evidence and reach a consensus on the
                      clock setting. These deliberations can be intense
                      — board members may disagree about the relative
                      weight of different threats or whether the overall
                      risk level has changed enough to justify moving the
                      clock. The goal is not unanimity but consensus: a
                      shared judgment that the majority of experts can
                      support. The board also drafts the statement that
                      will accompany the announcement, explaining the
                      reasoning behind the decision.
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
                      Announcement
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      The results are announced each January at a press
                      conference, traditionally held in Washington, D.C.
                      (though recent announcements have included virtual
                      components). The event features remarks from board
                      members, a formal unveiling of the new clock
                      setting, and a detailed explanation of the threats
                      that informed the decision. The announcement
                      generates worldwide media coverage and often sparks
                      renewed public discussion about existential risk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 sm:w-6 sm:h-6" />
              The Three Threat Categories
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The Science and Security Board evaluates global risk across
              three primary categories. While nuclear weapons were the
              original and sole focus when the clock was created in 1947,
              the scope has expanded to reflect the full spectrum of
              existential threats facing humanity today.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {/* Nuclear Weapons */}
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2 text-sm sm:text-base">
                  Nuclear Weapons
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  The board assesses the state of global nuclear
                  arsenals, arms races between major powers,
                  proliferation risks, the status of arms control
                  treaties, modernization programs, and regional
                  conflicts with a nuclear dimension. The collapse of
                  treaties like the INF and the suspension of New START
                  inspections have been significant factors in recent
                  clock settings.
                </p>
              </div>

              {/* Climate Change */}
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2 text-sm sm:text-base">
                  Climate Change
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Global emissions trends, progress toward climate
                  commitments, tipping point research, policy failures,
                  and the increasing frequency of extreme weather events
                  all factor into the assessment. The board evaluates
                  whether the world is on track to avoid the most
                  catastrophic warming scenarios and whether political
                  will exists to make necessary changes.
                </p>
              </div>

              {/* Disruptive Technologies */}
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2 text-sm sm:text-base">
                  Disruptive Technologies
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  This rapidly evolving category covers AI-enabled
                  weapons systems, cyber threats to nuclear command and
                  control infrastructure, biosecurity risks from
                  synthetic biology, and other emerging technologies that
                  could amplify existing threats or create entirely new
                  ones. The board has increasingly emphasized the risks
                  of autonomous weapons and AI-driven decision-making in
                  military contexts.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Criticism and Controversy
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is not without its critics. Some argue
              that the clock has become too alarmist, pointing out that
              it has moved steadily closer to midnight over the past
              decade without the world actually ending. By staying so
              close to midnight for so long, critics contend, the clock
              risks losing its power as a warning — a boy-who-cried-wolf
              effect that could lead the public to tune out rather than
              pay attention.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Others have argued that the clock focuses too heavily on
              US-Russia dynamics, reflecting a Cold War-era framework
              that may not fully capture the complexity of modern threats.
              Emerging nuclear powers, non-state actors, and novel
              technological risks sometimes receive less attention than
              the traditional superpower rivalry, though the Bulletin has
              worked to broaden its analysis in recent years.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The addition of climate change and disruptive technologies
              to the assessment framework in the 2000s was itself
              controversial. Purists argued that including non-nuclear
              threats diluted the clock's original meaning and made it
              harder to interpret. Supporters countered that existential
              risk is existential risk, regardless of its source, and
              that a modern threat assessment must account for all
              pathways to catastrophe.
            </p>
            <p className="text-foreground leading-relaxed">
              Despite these criticisms, the Doomsday Clock remains the
              most recognized symbol of existential risk in the world.
              Each January announcement generates substantial media
              coverage, and policymakers, diplomats, and military leaders
              continue to reference the clock in discussions about global
              security. No alternative has come close to matching its
              cultural impact or public awareness.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why It Matters
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              In an era of information overload, where threats compete
              for attention alongside celebrity gossip and social media
              trends, the Doomsday Clock serves an irreplaceable
              function: it distills enormously complex global risks into
              a single, powerful, universally understood symbol. When the
              clock moves, people notice. When it does not, that itself
              becomes a statement.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For nearly eight decades, the clock has influenced policy
              discussions at the highest levels. Its annual announcement
              generates global media coverage, reaching audiences who
              might never read a technical paper on nuclear
              proliferation, climate tipping points, or autonomous
              weapons systems. It forces a moment of collective
              reckoning — are we safer or less safe than we were a year
              ago?
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The clock also serves as a reminder that existential
              threats require ongoing attention. Unlike a natural
              disaster, which strikes and recedes, the dangers measured
              by the Doomsday Clock are persistent and cumulative. Arms
              races do not stop because the news cycle moves on. Climate
              change does not pause because an election distracts us. The
              clock keeps these threats visible.
            </p>
            <p className="text-foreground leading-relaxed">
              The next Doomsday Clock announcement is expected in{" "}
              <span className="text-doom font-semibold">
                {currentTime.nextUpdate}
              </span>
              . When the Science and Security Board gathers to make its
              assessment, they will weigh the same categories of risk
              that have guided the clock since its founding — updated for
              a world that the Manhattan Project scientists who started
              this tradition could scarcely have imagined. Whether the
              clock moves forward, backward, or holds steady, the
              announcement will remind us that the responsibility for
              avoiding midnight belongs to all of us.
            </p>
          </section>
        </div>

        {/* CTA: Explore the complete history */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Explore the Complete History
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            From 7 minutes in 1947 to {currentTime.display} today —
            trace every movement of the Doomsday Clock across nearly
            eight decades.
          </p>
          <Link
            to="/blog/doomsday-clock-history-timeline"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View the Full Timeline
          </Link>
        </div>

        {/* Internal cross-links */}
        <div className="mt-8 doom-card p-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Related Articles
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/blog/what-happens-doomsday-clock-midnight"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                What Happens If the Clock Hits Midnight?
              </h4>
              <p className="text-xs text-muted-foreground">
                Exploring what the clock's ultimate warning would mean
                for civilization.
              </p>
            </Link>
            <Link
              to="/blog/doomsday-clock-2027-prediction"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                Doomsday Clock 2027 Prediction
              </h4>
              <p className="text-xs text-muted-foreground">
                What could the next announcement bring? Analysis of
                the factors that will shape the 2027 decision.
              </p>
            </Link>
            <Link
              to="/embed"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                Embed the Doomsday Clock
              </h4>
              <p className="text-xs text-muted-foreground">
                Add a live Doomsday Clock widget to your website or
                blog.
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
          currentSlug="who-controls-doomsday-clock"
          slugs={[
            "doomsday-clock-history-timeline",
            "doomsday-clock-2026",
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
