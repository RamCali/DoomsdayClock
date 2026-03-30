import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, History } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function SevenMinutesToMidnight() {
  useEffect(() => {
    updateMetaTags({
      title:
        "What Is 7 Minutes to Midnight on the Doomsday Clock? | DoomsdayClock.net",
      description:
        "Seven minutes to midnight was the Doomsday Clock's original 1947 setting. Learn what 7 minutes meant, how it compares to today's 85 seconds, and the history behind the original time.",
      path: "/blog/seven-minutes-to-midnight-doomsday-clock",
      newsKeywords:
        "7 minutes to midnight, seven minutes to midnight, what is 7 minutes to midnight, doomsday clock 7 minutes, doomsday clock original time, doomsday clock 1947",
      publishedTime: "2026-03-15T00:00:00Z",
      modifiedTime: "2026-03-15T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "What Is 7 Minutes to Midnight on the Doomsday Clock?",
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
          "https://doomsdayclock.net/blog/seven-minutes-to-midnight-doomsday-clock",
      },
      description:
        "Seven minutes to midnight was the Doomsday Clock's original 1947 setting. Learn what 7 minutes meant and how it compares to today.",
      image: "https://doomsdayclock.net/og-image.png",
      articleSection: "Explainer",
      keywords: [
        "7 minutes to midnight",
        "doomsday clock 1947",
        "doomsday clock original time",
        "seven minutes to midnight",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 1500,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does 7 minutes to midnight mean on the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seven minutes to midnight was the Doomsday Clock's original setting when it was created in 1947. It represented the existential danger posed by nuclear weapons in the early atomic age, after the bombings of Hiroshima and Nagasaki but before the development of hydrogen bombs or large nuclear arsenals.",
          },
        },
        {
          "@type": "Question",
          name: "Why was the Doomsday Clock originally set to 7 minutes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Artist Martyl Langsdorf chose 7 minutes to midnight primarily for its visual impact on the Bulletin of the Atomic Scientists magazine cover. The position of the minute hand at 7 minutes to 12 created a striking, urgent image. The exact number was an aesthetic choice, but it reflected the genuine concern of Manhattan Project scientists about nuclear weapons.",
          },
        },
        {
          "@type": "Question",
          name: "How does 7 minutes compare to the current Doomsday Clock time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seven minutes to midnight (420 seconds) is dramatically safer than the current setting of 85 seconds to midnight. The clock has moved nearly 335 seconds closer to midnight since 1947, reflecting the Bulletin's assessment that existential threats today — including nuclear proliferation, climate change, and AI — far exceed those of the early atomic age.",
          },
        },
        {
          "@type": "Question",
          name: "When was the Doomsday Clock at 7 minutes to midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock was set at 7 minutes to midnight from its creation in 1947 until 1949, when the Soviet Union's first nuclear test prompted the Bulletin to move it to 3 minutes to midnight. The clock has also been near 7 minutes at other points: it was at 7 minutes in 1968 and again from 2007 to 2009.",
          },
        },
        {
          "@type": "Question",
          name: "Could the Doomsday Clock ever go back to 7 minutes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While theoretically possible, returning to 7 minutes to midnight would require extraordinary progress on multiple fronts — significant nuclear disarmament, binding climate action, international AI governance, and a renewal of multilateral cooperation. The Bulletin has moved the clock backward before (most notably to 17 minutes in 1991), but current trends make a return to 7 minutes unlikely in the near term.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "seven-minutes");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "seven-minutes-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="seven-minutes"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="seven-minutes-faq"]'
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
            7 Minutes to Midnight
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <History className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">What Is 7 Minutes to Midnight</span>{" "}
            on the Doomsday Clock?
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 15, 2026
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
                to midnight &mdash; far closer than its original 7-minute
                setting
              </p>
              <p className="text-xs text-muted-foreground">
                The clock has moved 335 seconds closer to midnight since
                1947
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Original Setting: 7 Minutes to Midnight (1947)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When the Doomsday Clock first appeared on the cover of the{" "}
              <em>Bulletin of the Atomic Scientists</em> in June 1947, its
              minute hand stood at seven minutes to midnight. The image was
              created by artist Martyl Langsdorf, whose husband Alexander
              Langsdorf had worked on the Manhattan Project. She chose the
              position of the minute hand primarily for its visual impact
              &mdash; the hands at 11:53 created a striking, urgent
              composition that immediately communicated danger.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But the choice was not purely aesthetic. The scientists who
              founded the Bulletin had witnessed the destructive power of
              atomic weapons firsthand. Just two years earlier, the bombings
              of Hiroshima and Nagasaki had killed over 200,000 people and
              ushered in the nuclear age. These scientists understood that
              the weapons they had helped create posed an existential threat
              to civilization, and the clock was their way of communicating
              that danger to the public.
            </p>
            <p className="text-foreground leading-relaxed">
              The seven-minute setting reflected a world that was dangerous
              but not yet at the brink. The United States was the only
              nuclear power. There were no hydrogen bombs, no
              intercontinental ballistic missiles, no vast arsenals capable
              of destroying the planet many times over. The threat was real
              but contained &mdash; a single nation with a small stockpile
              of atomic weapons. That relative containment is what seven
              minutes represented. To learn more about the clock&apos;s
              origins, read our article on{" "}
              <Link
                to="/blog/who-created-doomsday-clock"
                className="text-doom hover:underline"
              >
                who created the Doomsday Clock
              </Link>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Did 7 Minutes Mean?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              In 1947, the threat landscape was fundamentally different from
              today. The atomic bombs dropped on Japan, while devastating,
              were small by modern standards &mdash; roughly 15 and 21
              kilotons respectively. The US arsenal numbered fewer than a
              dozen weapons. There was no nuclear arms race yet, because no
              other nation had the bomb.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Seven minutes to midnight represented a world where the
              existential threat was singular and identifiable: atomic
              weapons existed, and their use had already been demonstrated.
              The scientists worried about proliferation &mdash; they
              correctly predicted that other nations would develop their own
              nuclear weapons &mdash; but in 1947, that remained a future
              concern rather than a present reality.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bulletin&apos;s founders were also focused on the
              political dimension. They advocated for international control
              of atomic energy through the Baruch Plan, which proposed
              placing all nuclear materials under the authority of a United
              Nations body. The failure of that proposal &mdash; vetoed by
              the Soviet Union in 1946 &mdash; had already dimmed hopes for
              a cooperative solution, contributing to the sense of urgency
              that the clock conveyed. For a deeper dive into the full
              history, see our{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-doom hover:underline"
              >
                complete Doomsday Clock timeline
              </Link>
              .
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How 7 Minutes Compares to Today&apos;s 85 Seconds
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The contrast between seven minutes (420 seconds) and
              today&apos;s 85 seconds is stark. The clock has moved 335
              seconds closer to midnight over 79 years &mdash; a journey
              from cautious concern to unprecedented alarm. To put this in
              perspective, the clock is now almost five times closer to
              midnight than when it was created.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-between">
                <span className="text-sm font-medium text-green-400">
                  1947 (original)
                </span>
                <span className="text-sm text-green-400">
                  7 minutes (420 seconds) to midnight
                </span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  1953 (Cold War peak)
                </span>
                <span className="text-sm text-muted-foreground">
                  2 minutes (120 seconds) to midnight
                </span>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-between">
                <span className="text-sm font-medium text-green-400">
                  1991 (safest ever)
                </span>
                <span className="text-sm text-green-400">
                  17 minutes (1,020 seconds) to midnight
                </span>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  2020 (broke minutes barrier)
                </span>
                <span className="text-sm text-muted-foreground">
                  100 seconds to midnight
                </span>
              </div>
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30 flex items-center justify-between">
                <span className="text-sm font-bold text-doom">
                  2026 (current)
                </span>
                <span className="text-sm text-doom font-medium">
                  85 seconds to midnight
                </span>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              The 79-year journey from 7 minutes to 85 seconds reflects a
              world that has grown exponentially more dangerous. In 1947,
              the Bulletin tracked a single threat: nuclear weapons. Today,
              the Science and Security Board evaluates nuclear weapons,
              climate change, disruptive technologies including artificial
              intelligence, and biosecurity threats. The multiplication of
              existential risks &mdash; and their interaction with one
              another &mdash; is what has driven the clock to its current
              historic low.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Every Time the Clock Was Near 7 Minutes
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Seven minutes to midnight is not just a historical curiosity
              &mdash; the clock has returned to or near that position
              several times in its history, each time reflecting a specific
              geopolitical context.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  1947 &mdash; 7 minutes (original setting)
                </h4>
                <p className="text-sm text-muted-foreground">
                  The dawn of the atomic age. The US alone possessed nuclear
                  weapons, but scientists feared proliferation.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  1960 &mdash; 7 minutes
                </h4>
                <p className="text-sm text-muted-foreground">
                  Scientific cooperation between the US and Soviet Union
                  increased, and public concern about nuclear fallout led to
                  growing pressure for arms control. The Pugwash Conferences
                  offered hope for dialogue.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  1968 &mdash; 7 minutes
                </h4>
                <p className="text-sm text-muted-foreground">
                  France and China had acquired nuclear weapons, but the
                  signing of the Nuclear Non-Proliferation Treaty (NPT)
                  provided a framework to limit the spread of nuclear arms.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  2007&ndash;2009 &mdash; 5 minutes
                </h4>
                <p className="text-sm text-muted-foreground">
                  Close to 7 minutes but reflecting growing concerns about
                  nuclear ambitions in North Korea and Iran, plus emerging
                  climate change threats.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              The pattern is notable: seven minutes has historically
              represented a world where serious threats exist but meaningful
              diplomatic efforts are underway to contain them. It is a
              position of concern, not crisis &mdash; a world where
              institutions are functioning and international cooperation
              remains possible.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Clock&apos;s Full Range: 17 Minutes to 85 Seconds
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              To fully understand what seven minutes means, it helps to see
              it in the context of the clock&apos;s entire range. Since
              1947, the Doomsday Clock has swung from a high of 17 minutes
              to midnight (in 1991, after the Cold War ended and the US and
              Soviet Union signed the Strategic Arms Reduction Treaty) to
              its current all-time low of 85 seconds.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              At 17 minutes, the world seemed to be on a path toward
              nuclear disarmament and lasting peace. At 85 seconds, the
              Bulletin sees existential threats converging from multiple
              directions with no adequate institutional response. Seven
              minutes sits roughly in the middle of this range &mdash; a
              position that reflects real danger but also real capacity for
              human action.
            </p>
            <p className="text-foreground leading-relaxed">
              The clock&apos;s most dangerous prior setting before the
              seconds era was 2 minutes to midnight, reached in 1953 when
              both the US and Soviet Union tested thermonuclear weapons, and
              again in 2018 amid North Korean nuclear tests and the
              unraveling of arms control agreements. Seven minutes, by
              contrast, represents a world where the threats are acknowledged
              but not yet spiraling beyond control. For a visual exploration
              of every setting, see our{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-doom hover:underline"
              >
                interactive history timeline
              </Link>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Would It Take to Get Back to 7 Minutes?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Returning to seven minutes to midnight would require a
              dramatic reversal of current trends across every threat domain
              the Bulletin evaluates. The clock has moved backward before
              &mdash; most significantly in 1991, when it jumped from 10
              minutes to 17 minutes after the Cold War ended. But the
              conditions that enabled that historic retreat are far more
              difficult to envision today.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              At minimum, a return to seven minutes would likely require:
              significant reductions in nuclear arsenals through new arms
              control treaties; a binding international framework for
              climate action that puts the world on track for the Paris
              Agreement targets; meaningful governance of artificial
              intelligence and autonomous weapons; and a renewal of
              multilateral cooperation and institutional trust.
            </p>
            <p className="text-foreground leading-relaxed">
              None of these developments is impossible, but none appears
              imminent. The Bulletin has{" "}
              <Link
                to="/blog/can-doomsday-clock-go-back"
                className="text-doom hover:underline"
              >
                moved the clock backward
              </Link>{" "}
              eight times in its history, proving that progress is possible.
              But each of those reversals came after sustained, coordinated
              international effort &mdash; the kind of effort that is
              conspicuously absent in the current geopolitical environment.
              The journey from 85 seconds back to seven minutes would be
              the most dramatic reversal in the clock&apos;s history, and it
              would require a level of global cooperation not seen since the
              end of the Cold War.
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
                  What does 7 minutes to midnight mean on the Doomsday
                  Clock?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seven minutes to midnight was the Doomsday Clock&apos;s
                  original setting in 1947, representing the existential
                  danger of nuclear weapons in the early atomic age. It
                  reflected a world where the threat was real but relatively
                  contained &mdash; only one nation had the bomb, and
                  arsenals were small.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Why was the Doomsday Clock originally set to 7 minutes?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Artist Martyl Langsdorf chose the 7-minute position
                  primarily for its visual impact on the Bulletin&apos;s
                  magazine cover. The hands at 11:53 created a compelling,
                  urgent image that immediately communicated danger to
                  readers.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  How does 7 minutes compare to the current Doomsday Clock
                  time?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seven minutes (420 seconds) is dramatically farther from
                  midnight than today&apos;s setting of{" "}
                  {currentTime.display}. The clock has moved 335 seconds
                  closer to midnight since 1947 &mdash; nearly five times
                  closer than its original position.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  When was the Doomsday Clock at 7 minutes to midnight?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The clock was at 7 minutes in 1947 (its original
                  setting), 1960, and 1968. Each instance reflected a
                  moment where threats were real but diplomatic efforts
                  provided grounds for cautious engagement.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Could the Doomsday Clock ever go back to 7 minutes?
                </h3>
                <p className="text-sm text-muted-foreground">
                  While theoretically possible, returning to 7 minutes would
                  require extraordinary progress: significant nuclear
                  disarmament, binding climate action, AI governance, and
                  renewed multilateral cooperation. The clock has moved
                  backward before, but never by this magnitude from its
                  current position.
                </p>
              </div>
            </div>
          </section>
        </div>

        <RelatedArticles
          currentSlug="seven-minutes-to-midnight-doomsday-clock"
          slugs={[
            "doomsday-clock-history-timeline",
            "what-is-the-doomsday-clock",
            "can-doomsday-clock-go-back",
            "who-created-doomsday-clock",
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
