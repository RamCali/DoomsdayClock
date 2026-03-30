import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  AlertTriangle,
  Shield,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockColdWar() {
  useEffect(() => {
    updateMetaTags({
      title:
        "The Doomsday Clock During the Cold War & Cuban Missile Crisis | DoomsdayClock.net",
      description:
        "How did the Doomsday Clock move during the Cold War? From hydrogen bomb tests to the Cuban Missile Crisis to the fall of the Berlin Wall — the complete Cold War clock history.",
      path: "/blog/doomsday-clock-cold-war",
      newsKeywords:
        "doomsday clock cold war, doomsday clock cuban missile crisis, doomsday clock 1953, doomsday clock 1991, doomsday clock closest to midnight, doomsday clock farthest from midnight",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "The Doomsday Clock During the Cold War & Cuban Missile Crisis",
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
          "https://doomsdayclock.net/blog/doomsday-clock-cold-war",
      },
      description:
        "How did the Doomsday Clock move during the Cold War? From hydrogen bomb tests to the Cuban Missile Crisis to the fall of the Berlin Wall.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "doomsday clock cold war",
        "doomsday clock cuban missile crisis",
        "doomsday clock 1953",
        "doomsday clock 1991",
        "doomsday clock farthest from midnight",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2600,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What was the Doomsday Clock during the Cuban Missile Crisis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "During the Cuban Missile Crisis in October 1962, the Doomsday Clock was set at 7 minutes to midnight. The clock had been at 7 minutes since 1960. Surprisingly, the Bulletin did not move the clock during the crisis itself because the clock is adjusted annually, not in real-time response to events.",
          },
        },
        {
          "@type": "Question",
          name: "What was the closest the Doomsday Clock got during the Cold War?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The closest the Doomsday Clock came to midnight during the Cold War was 2 minutes, set in 1953 after the United States and Soviet Union both tested thermonuclear (hydrogen) weapons. This remained the closest setting in the clock's history until the modern era.",
          },
        },
        {
          "@type": "Question",
          name: "When was the Doomsday Clock farthest from midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock reached its farthest point from midnight — 17 minutes — in 1991, after the end of the Cold War. The Strategic Arms Reduction Treaty (START) and the dissolution of the Soviet Union drove the clock to its safest-ever position. It has never returned to that level since.",
          },
        },
        {
          "@type": "Question",
          name: "Did the Doomsday Clock move during the Cuban Missile Crisis?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Doomsday Clock did not move during the Cuban Missile Crisis of October 1962. The Bulletin of the Atomic Scientists adjusts the clock annually based on long-term trends, not in real-time response to individual crises. The clock was at 7 minutes when the crisis began and stayed there until it moved to 12 minutes in 1963 after the Partial Test Ban Treaty was signed.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "cold-war");
    script.textContent = JSON.stringify([articleSchema, faqSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="cold-war"]'
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
          <span className="text-foreground">Cold War &amp; the Doomsday Clock</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            The Doomsday Clock During the{" "}
            <span className="text-doom">Cold War</span> &amp; Cuban Missile
            Crisis
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 14, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              10 min read
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
                The Cold War clock ranged from 2 to 17 minutes &mdash;
                today&apos;s setting is measured in seconds
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The Birth of the Clock: 1947 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Birth of the Clock: 1947
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock was born in the shadow of Hiroshima and
              Nagasaki. In June 1947, just two years after the atomic bombings
              that killed over 200,000 people and ended World War II, the
              Bulletin of the Atomic Scientists placed a clock on its magazine
              cover set at 7 minutes to midnight. The artist was Martyl
              Langsdorf, whose husband had worked on the Manhattan Project.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The scientists behind the Bulletin &mdash; many of them veterans
              of the Manhattan Project, including figures like Albert Einstein
              and J. Robert Oppenheimer &mdash; had witnessed firsthand what
              nuclear weapons could do. They created the clock as a
              communication tool: a way to convey the existential danger of
              nuclear weapons to a public that was still grappling with the
              implications of the atomic age.
            </p>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 my-4">
              <h4 className="font-semibold text-foreground mb-1">
                1947: 7 minutes to midnight
              </h4>
              <p className="text-sm text-muted-foreground">
                The initial setting. The United States was the world&apos;s
                only nuclear power. The clock reflected the danger of the
                atomic age itself &mdash; the knowledge that humanity now
                possessed the means to destroy civilization.
              </p>
            </div>
            <p className="text-foreground leading-relaxed">
              At this point, the Cold War was just beginning. The Iron Curtain
              was descending across Europe, the Truman Doctrine had just been
              announced, and the Marshall Plan was being developed. The Soviet
              Union did not yet have nuclear weapons, but the arms race that
              would define the next four decades was already taking shape. The
              clock would not stay at 7 minutes for long.
            </p>
          </section>

          {/* Section 2: The Hydrogen Bomb Era */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Hydrogen Bomb Era: 2 Minutes to Midnight (1953)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The clock&apos;s first major forward move came in 1949, when the
              Soviet Union detonated its first atomic bomb &mdash; years
              earlier than Western intelligence had predicted. The nuclear
              monopoly was over, and the arms race began in earnest. The clock
              jumped from 7 minutes to 3.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Then, in 1953, the clock reached what would be its closest
              setting for over six decades:{" "}
              <span className="text-doom font-semibold">
                2 minutes to midnight
              </span>
              . Both the United States and the Soviet Union had tested
              thermonuclear (hydrogen) weapons, devices hundreds or thousands
              of times more powerful than the bombs that destroyed Hiroshima
              and Nagasaki. A single hydrogen bomb could obliterate an entire
              city. Arsenals of such weapons could end civilization.
            </p>
            <div className="p-4 rounded-lg bg-doom/10 border border-doom/30 my-4">
              <h4 className="font-semibold text-foreground mb-1">
                1953: 2 minutes to midnight
              </h4>
              <p className="text-sm text-muted-foreground">
                The US and Soviet Union both test thermonuclear devices within
                months of each other, ushering in the age of hydrogen bombs.
              </p>
              <p className="text-xs text-doom mt-2 font-medium">
                This remained the closest the clock had ever been until the
                seconds era began in 2020. It was matched in 2018 but not
                surpassed for 67 years.
              </p>
            </div>
            <p className="text-foreground leading-relaxed">
              The hydrogen bomb era changed the nature of the nuclear threat.
              It was no longer a question of whether nuclear weapons could
              destroy a city &mdash; that had already happened. The question
              was whether they could destroy everything. With thermonuclear
              weapons, the answer was yes. The concept of &quot;mutually
              assured destruction&quot; had not yet been formally articulated,
              but its terrifying logic was already taking shape.
            </p>
          </section>

          {/* Section 3: The Cuban Missile Crisis */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              <Shield className="w-6 h-6 inline mr-2" />
              The Cuban Missile Crisis: A Surprising Absence
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              One of the most surprising facts in the Doomsday Clock&apos;s
              history is that the clock was <em>not</em> at its closest during
              the Cuban Missile Crisis of October 1962 &mdash; arguably the
              moment when the world came nearest to actual nuclear war.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              During those 13 days in October when Soviet nuclear missiles
              were discovered in Cuba and the US imposed a naval blockade, the
              Doomsday Clock stood at{" "}
              <span className="text-doom font-semibold">
                7 minutes to midnight
              </span>
              . It had been at 7 minutes since 1960, when the Bulletin moved
              it backward from 2 minutes in recognition of growing scientific
              cooperation between East and West. The Bulletin did not adjust
              the clock during the crisis.
            </p>
            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/30 my-4">
              <h4 className="font-semibold text-foreground mb-1">
                Why didn&apos;t the clock move?
              </h4>
              <p className="text-sm text-muted-foreground">
                The Doomsday Clock is adjusted annually based on long-term
                trends and structural risks, not in real-time response to
                individual crises. The Bulletin&apos;s Science and Security
                Board deliberates over months, evaluating the overall
                trajectory of existential threats. A crisis that erupts and
                resolves within two weeks &mdash; however terrifying &mdash;
                does not necessarily change the board&apos;s assessment of
                the underlying risk landscape.
              </p>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              This is an important point about the clock&apos;s design. It is
              not a seismograph that reacts to every tremor. It is a
              barometer that measures the sustained pressure of existential
              risk. The Cuban Missile Crisis was an acute event, but the
              structural conditions &mdash; two superpowers with growing
              nuclear arsenals, no arms control agreements, no direct
              communication hotline &mdash; had been in place before the
              crisis and remained after it.
            </p>
            <p className="text-foreground leading-relaxed">
              Ironically, the aftermath of the Cuban Missile Crisis actually
              moved the clock <em>backward</em>. The crisis so terrified both
              sides that it catalyzed the first real arms control effort of the
              nuclear age. In 1963, the United States, Soviet Union, and United
              Kingdom signed the Partial Test Ban Treaty, and the Bulletin
              moved the clock to 12 minutes &mdash; a 5-minute jump that
              reflected genuine hope. The hotline between Washington and Moscow
              was established. The path toward the Nuclear Non-Proliferation
              Treaty was set in motion.
            </p>
          </section>

          {/* Section 4: The Darkest Days: 1981-1984 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Darkest Days: 1981&ndash;1984
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              After the relative optimism of the d&eacute;tente era in the
              1970s, the early 1980s saw a dramatic deterioration in
              US-Soviet relations. The decade of SALT treaties and arms
              limitations gave way to the most confrontational period since
              the worst days of the 1950s.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Soviet Union invaded Afghanistan in December 1979, prompting
              the US to boycott the Moscow Olympics and shelve the SALT II
              treaty. Ronald Reagan entered office in 1981 with a massive
              military buildup, including plans for the Strategic Defense
              Initiative (&quot;Star Wars&quot;). The rhetoric was apocalyptic:
              Reagan called the Soviet Union an &quot;evil empire,&quot; and
              Soviet leadership genuinely believed the US was preparing a
              first strike.
            </p>
            <div className="p-4 rounded-lg bg-doom/5 border border-doom/20 my-4">
              <h4 className="font-semibold text-foreground mb-1">
                1984: 3 minutes to midnight
              </h4>
              <p className="text-sm text-muted-foreground">
                US-Soviet relations reach their iciest point. An accelerating
                nuclear arms race, the breakdown of arms control talks, and
                hostile rhetoric on both sides push the clock to 3 minutes.
              </p>
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              What the public did not know at the time was how close the
              world actually came to nuclear war. In September 1983, Soviet
              officer Stanislav Petrov received a satellite warning that five
              US intercontinental ballistic missiles were inbound. He judged
              it a false alarm and did not report it up the chain of command
              &mdash; a decision that likely prevented a nuclear retaliatory
              strike. Just weeks later, NATO conducted the Able Archer 83
              exercise, which Soviet intelligence interpreted as possible
              cover for an actual nuclear first strike.
            </p>
            <p className="text-foreground leading-relaxed">
              The clock at 3 minutes reflected the Bulletin&apos;s assessment
              that the structural conditions for nuclear war were dangerously
              in place. The near-misses of 1983 &mdash; which were not
              publicly known for years &mdash; showed that the Bulletin&apos;s
              judgment was, if anything, conservative. The world was closer to
              midnight than the clock suggested.
            </p>
          </section>

          {/* Section 5: Treaties and Hope */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Treaties and Hope: The Clock Moves Back
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The remarkable thaw that began in the mid-1980s produced the most
              dramatic backward movement in the Doomsday Clock&apos;s history.
              The transformation was driven by two factors: Mikhail
              Gorbachev&apos;s policies of glasnost and perestroika, and a
              genuine recognition on both sides that the arms race had become
              unsustainable and existentially dangerous.
            </p>
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">
                    1988: 6 minutes to midnight
                  </h4>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                    3 min &rarr; 6 min
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The Intermediate-Range Nuclear Forces (INF) Treaty, signed
                  by Reagan and Gorbachev, eliminated an entire class of
                  nuclear weapons for the first time. Roughly 2,700 missiles
                  were destroyed with unprecedented on-site verification.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-foreground">
                    1990: 10 minutes to midnight
                  </h4>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                    6 min &rarr; 10 min
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The Berlin Wall fell in November 1989. The Iron Curtain
                  collapsed across Eastern Europe. The ideological divide that
                  had driven the nuclear arms race for four decades began to
                  dissolve.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-doom">
                    1991: 17 minutes to midnight
                  </h4>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                    10 min &rarr; 17 min (farthest ever)
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  The Cold War ended. The Strategic Arms Reduction Treaty
                  (START) was signed, requiring deep cuts to nuclear arsenals.
                  The Soviet Union dissolved peacefully. The clock reached
                  17 minutes to midnight &mdash; the farthest it has ever been
                  and a record that still stands today.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              In just seven years, the clock moved from 3 minutes to 17
              &mdash; a 14-minute swing that remains the most dramatic arc in
              the clock&apos;s history. It proves something essential about
              the Doomsday Clock that is easy to forget in the current era of
              record-close settings: the clock can go back. Diplomacy works.
              Treaties matter. The farthest the clock has ever been from
              midnight came immediately after the greatest diplomatic
              achievements of the nuclear age. For more on every time the
              clock has reversed, see our{" "}
              <Link
                to="/blog/can-doomsday-clock-go-backwards"
                className="text-doom hover:underline"
              >
                complete history of reversals
              </Link>
              .
            </p>
          </section>

          {/* Section 6: Lessons from the Cold War */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Lessons from the Cold War
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Cold War era of the Doomsday Clock offers lessons that are
              directly relevant to the current moment. The clock now stands at{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight &mdash; closer than it ever was during the Cold War,
              including during the hydrogen bomb era. But the Cold War also
              showed that even the most dangerous periods can be navigated
              through sustained diplomatic effort.
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-doom/5 border border-doom/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Diplomacy works &mdash; even with adversaries
                </h4>
                <p className="text-sm text-muted-foreground">
                  The INF Treaty was negotiated between Reagan and Gorbachev
                  at a time when US-Soviet relations were among the worst in
                  history. The Partial Test Ban Treaty came within months of
                  the Cuban Missile Crisis. The lesson: the worst moments
                  can catalyze the best agreements.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Arms control is the mechanism of safety
                </h4>
                <p className="text-sm text-muted-foreground">
                  Every significant backward movement of the clock during the
                  Cold War followed a specific, verifiable arms control
                  agreement. Not rhetoric, not good intentions &mdash; signed
                  treaties with verification mechanisms.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  The clock&apos;s farthest point followed its darkest period
                </h4>
                <p className="text-sm text-muted-foreground">
                  The 17-minute setting of 1991 came just seven years after
                  the 3-minute setting of 1984. The speed of the reversal
                  shows that geopolitical transformation is possible even
                  from the most dangerous positions.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              Today, the arms control framework that drove those Cold War
              reversals has been largely dismantled. The INF Treaty is dead.
              New START has collapsed. No bilateral or multilateral agreement
              currently limits the nuclear arsenals of the world&apos;s major
              powers. The lesson of the Cold War is not that we are doomed
              &mdash; it is that the tools exist to pull back from the brink,
              if the political will can be found to use them.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Explore the Full Doomsday Clock Timeline
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See every change from 1947 to 2026 on our interactive timeline
            with detailed analysis for each year.
          </p>
          <Link
            to="/#timeline"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View Interactive Timeline
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Link
            to="/blog/doomsday-clock-history-timeline"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              Complete Doomsday Clock Timeline (1947&ndash;2026)
            </h4>
            <p className="text-sm text-muted-foreground">
              Every change in the clock&apos;s history with detailed analysis.
            </p>
          </Link>
          <Link
            to="/blog/can-doomsday-clock-go-backwards"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              Can the Doomsday Clock Go Backwards?
            </h4>
            <p className="text-sm text-muted-foreground">
              Every time the clock moved away from midnight and what caused it.
            </p>
          </Link>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-cold-war"
          slugs={[
            "doomsday-clock-history-timeline",
            "doomsday-clock-timeline-graph",
            "can-doomsday-clock-go-backwards",
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
