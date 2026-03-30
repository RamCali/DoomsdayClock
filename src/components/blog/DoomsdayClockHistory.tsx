import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, BookOpen } from "lucide-react";
import { currentTime, clockHistory } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockHistory() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Doomsday Clock History: Complete Timeline of Every Change (1947-2026) | DoomsdayClock.net",
      description:
        "Explore the complete history of every Doomsday Clock change from 1947 to 2026. See all 27 time adjustments, the reasons behind each move, and key historical events.",
      path: "/blog/doomsday-clock-history-timeline",
      newsKeywords:
        "doomsday clock history, doomsday clock timeline, doomsday clock changes, nuclear threat history, doomsday clock 1947, doomsday clock 1991, doomsday clock through the years, when was doomsday clock created, when did doomsday clock start, doomsday clock farthest from midnight",
      publishedTime: "2026-03-07T00:00:00Z",
      modifiedTime: "2026-03-07T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Doomsday Clock History: Complete Timeline of Every Change (1947-2026)",
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
          "https://doomsdayclock.net/blog/doomsday-clock-history-timeline",
      },
      description:
        "Complete history of every Doomsday Clock change from 1947 to 2026 with detailed analysis.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "doomsday clock history",
        "doomsday clock timeline",
        "nuclear threat",
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
          name: "When was the Doomsday Clock created?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock was created in 1947 by the Bulletin of the Atomic Scientists, founded by Manhattan Project scientists. Artist Martyl Langsdorf designed the iconic clock image for the Bulletin's June 1947 cover, setting the initial time at 7 minutes to midnight.",
          },
        },
        {
          "@type": "Question",
          name: "When did the Doomsday Clock start?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock started in 1947 at 7 minutes to midnight. It was created by scientists who worked on the Manhattan Project to communicate the dangers of nuclear weapons to the public.",
          },
        },
        {
          "@type": "Question",
          name: "What was the Doomsday Clock in 1947?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In 1947, the Doomsday Clock was set at 7 minutes to midnight — its initial setting when created by the Bulletin of the Atomic Scientists to convey threats to humanity from nuclear weapons.",
          },
        },
        {
          "@type": "Question",
          name: "What was the Doomsday Clock in 1991?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In 1991, the Doomsday Clock was set to 17 minutes to midnight — the farthest it has ever been from midnight. This followed the signing of the Strategic Arms Reduction Treaty (START) and the end of the Cold War.",
          },
        },
        {
          "@type": "Question",
          name: "How many times has the Doomsday Clock changed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock has been adjusted 27 times since its creation in 1947, with the most recent change in February 2026 when it moved to 85 seconds to midnight. It has moved forward 19 times and backward 8 times.",
          },
        },
        {
          "@type": "Question",
          name: "What is the farthest the Doomsday Clock has been from midnight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The farthest the Doomsday Clock has ever been from midnight was 17 minutes, set in 1991 after the US and Soviet Union signed the Strategic Arms Reduction Treaty (START), marking the end of the Cold War.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "history");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "history-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="history"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="history-faq"]'
      );
      if (faqEl) faqEl.remove();
      resetToDefaults();
    };
  }, []);

  // Group clock history into eras for dynamic rendering
  const coldWarEarly = clockHistory.filter(
    (e) => e.year >= 1947 && e.year <= 1953
  );
  const coldWarTreaties = clockHistory.filter(
    (e) => e.year >= 1960 && e.year <= 1974
  );
  const coldWarLate = clockHistory.filter(
    (e) => e.year >= 1980 && e.year <= 1991
  );
  const postColdWarEra = clockHistory.filter(
    (e) => e.year >= 1995 && e.year <= 2010
  );
  const modernEra = clockHistory.filter((e) => e.year >= 2012);

  const farthestEvent = clockHistory.reduce((max, e) =>
    e.minutes > max.minutes ? e : max
  );
  const closestEvent = clockHistory.reduce((min, e) =>
    e.minutes < min.minutes ? e : min
  );
  const forwardMoves = clockHistory.filter(
    (e) => e.direction === "forward"
  ).length;
  const backwardMoves = clockHistory.filter(
    (e) => e.direction === "backward"
  ).length;

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
          <span className="text-foreground">Doomsday Clock History</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock History:</span>{" "}
            Complete Timeline of Every Change (1947&ndash;2026)
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
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
                Set on {currentTime.lastUpdated} &mdash;{" "}
                {clockHistory.length} time settings across{" "}
                {currentTime.year - 1947} years of history
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The Birth of the Doomsday Clock */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Birth of the Doomsday Clock (1947)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              In June 1947, just two years after the atomic bombings of
              Hiroshima and Nagasaki, a striking image appeared on the cover
              of the <em>Bulletin of the Atomic Scientists</em>: a clock
              face with its minute hand set at seven minutes to midnight.
              The artist was Martyl Langsdorf, the wife of Alexander
              Langsdorf Jr., a physicist who had worked on the Manhattan
              Project. What began as a magazine cover illustration would
              become the most recognizable symbol of existential risk in
              human history.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin of the Atomic Scientists had been founded in 1945 by scientists who had worked on the
              Manhattan Project, including Albert Einstein and J. Robert
              Oppenheimer. Having witnessed firsthand the destructive power
              they had unleashed, these scientists felt a moral obligation
              to educate the public about the dangers of nuclear weapons.
              The Doomsday Clock became their most powerful communication
              tool &mdash; a simple visual metaphor that anyone could
              understand.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Langsdorf chose the clock metaphor deliberately. Midnight
              represents global catastrophe &mdash; the point of no return.
              The initial setting of seven minutes was, in her own words,
              chosen because &quot;it looked good to my eye.&quot; But the
              concept immediately resonated with a public living under the
              new shadow of nuclear annihilation. The clock gave an abstract
              threat a tangible, visceral measure that transcended language
              and political barriers.
            </p>
            <p className="text-foreground leading-relaxed">
              Since that first setting, the Doomsday Clock has been adjusted{" "}
              {clockHistory.length - 1} times by the Bulletin&apos;s
              Science and Security Board, a group of experts that now
              includes Nobel laureates and leading researchers in nuclear
              policy, climate science, and emerging technologies. Each
              adjustment reflects the Board&apos;s assessment of how close
              humanity stands to self-inflicted destruction. Here is the
              complete record of every change, the reasons behind each move,
              and the historical events that shaped them.
            </p>
          </section>

          {/* Section 2: The Cold War Era */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Cold War Era (1947&ndash;1991)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Cold War defined the Doomsday Clock&apos;s first four
              decades. The relentless nuclear arms race between the United
              States and Soviet Union dominated every assessment, driving
              the clock to some of its most alarming positions &mdash; and,
              ultimately, to its most hopeful one. This era established the
              pattern that still holds today: arms races and brinkmanship
              push the clock forward, while treaties and diplomacy pull it
              back.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">
              The Nuclear Arms Race Begins (1947&ndash;1953)
            </h3>
            <div className="space-y-4 my-6">
              {coldWarEarly.map((event) => (
                <div
                  key={event.year}
                  className={`p-4 rounded-lg border ${
                    event.year === 1953
                      ? "bg-doom/10 border-doom/30"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {event.year}: {event.time} to midnight{" "}
                    {event.direction === "forward" && (
                      <span className="text-doom text-sm">
                        (moved closer)
                      </span>
                    )}
                    {event.direction === "initial" && (
                      <span className="text-blue-400 text-sm">
                        (initial setting)
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {event.details}
                  </p>
                  {event.year === 1953 && (
                    <p className="text-xs text-doom mt-2 font-medium">
                      This 2-minute setting would remain the closest the
                      clock had ever been for over 60 years, until 2018
                      tied it and 2020 surpassed it.
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              In just six years, the world went from one nuclear power to
              two, and from atomic bombs to thermonuclear weapons thousands
              of times more powerful. The Soviet Union&apos;s first atomic
              test in 1949 &mdash; years earlier than Western intelligence
              expected &mdash; shattered the illusion of American nuclear
              monopoly and launched a frantic arms race. When both
              superpowers tested hydrogen bombs in 1952-1953, scientists
              understood that humanity now possessed the power to destroy
              civilization itself. The 1953 setting of 2 minutes to midnight
              reflected a genuine belief among the world&apos;s leading
              scientists that nuclear catastrophe was imminent.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">
              Treaties and Tensions (1960&ndash;1974)
            </h3>
            <div className="space-y-4 my-6">
              {coldWarTreaties.map((event) => (
                <div
                  key={event.year}
                  className="p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {event.year}: {event.time} to midnight{" "}
                    {event.direction === "forward" ? (
                      <span className="text-doom text-sm">
                        (moved closer)
                      </span>
                    ) : (
                      <span className="text-green-400 text-sm">
                        (moved back)
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {event.details}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              This period illustrates a crucial dynamic that repeats
              throughout the clock&apos;s history: diplomacy and arms
              control can genuinely move the clock backward. The 1963
              Partial Test Ban Treaty, signed in the wake of the Cuban
              Missile Crisis, pushed the clock to 12 minutes &mdash; a
              clear signal that even amid the Cold War, cooperation was
              possible and meaningful. The Nuclear Non-Proliferation Treaty
              of 1968 and the SALT I and ABM Treaty agreements of 1972
              reinforced this trend.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But proliferation kept pulling the clock forward. France
              tested its first nuclear weapon in 1960, China followed in
              1964, and India conducted a &quot;peaceful nuclear
              explosion&quot; in 1974. Each new nuclear state expanded the
              web of potential conflicts and made arms control more complex.
              The clock oscillated between 7 and 12 minutes throughout this
              period, reflecting the constant tug-of-war between diplomacy
              and proliferation.
            </p>

            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">
              The Dangerous Eighties and the End of the Cold War
              (1980&ndash;1991)
            </h3>
            <div className="space-y-4 my-6">
              {coldWarLate.map((event) => (
                <div
                  key={event.year}
                  className={`p-4 rounded-lg border ${
                    event.year === 1991
                      ? "bg-green-500/10 border-green-500/30"
                      : event.year === 1984
                      ? "bg-doom/10 border-doom/30"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {event.year}: {event.time} to midnight{" "}
                    {event.direction === "forward" ? (
                      <span className="text-doom text-sm">
                        (moved closer)
                      </span>
                    ) : (
                      <span className="text-green-400 text-sm">
                        (moved back)
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {event.details}
                  </p>
                  {event.year === 1991 && (
                    <p className="text-xs text-green-400 mt-2 font-medium">
                      17 minutes to midnight &mdash; the FARTHEST the
                      Doomsday Clock has EVER been from midnight. This
                      remains the high-water mark of human safety, a
                      record that has never been approached since.
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed">
              The early 1980s were among the most dangerous years in nuclear
              history. The Soviet invasion of Afghanistan in 1979 shattered
              the detente of the 1970s. Ronald Reagan&apos;s massive
              military buildup, the shooting down of Korean Air Lines
              Flight 007 in 1983, and the near-catastrophic Soviet nuclear
              false alarm of September 1983 &mdash; when officer Stanislav
              Petrov likely prevented nuclear war by correctly identifying a
              false alarm &mdash; all contributed to pushing the clock to 3
              minutes in 1984. But the remarkable thaw that followed,
              driven by Mikhail Gorbachev&apos;s reforms and a genuine
              desire for peace on both sides, produced the most dramatic
              reversal in the clock&apos;s history. The fall of the Berlin
              Wall in 1989, German reunification, and the signing of the
              Strategic Arms Reduction Treaty (START) in 1991 pushed the
              clock all the way back to 17 minutes to midnight &mdash; its
              safest position ever, and one we have never returned to since.
            </p>
          </section>

          {/* Section 3: Post-Cold War Uncertainty */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Post-Cold War Uncertainty (1995&ndash;2010)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The optimism of the early 1990s proved tragically short-lived.
              With the Soviet Union dissolved, new threats emerged that the
              clock&apos;s creators had never anticipated: poorly secured
              nuclear materials scattered across former Soviet states, the
              proliferation of weapons technology to new nations, the
              specter of nuclear terrorism after 9/11, and a growing
              scientific recognition that climate change posed its own
              existential risk to civilization.
            </p>
            <div className="space-y-4 my-6">
              {postColdWarEra.map((event) => (
                <div
                  key={event.year}
                  className={`p-4 rounded-lg border ${
                    event.year === 2007
                      ? "bg-blue-500/10 border-blue-500/30"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {event.year}: {event.time} to midnight{" "}
                    {event.direction === "forward" ? (
                      <span className="text-doom text-sm">
                        (moved closer)
                      </span>
                    ) : (
                      <span className="text-green-400 text-sm">
                        (moved back)
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {event.details}
                  </p>
                  {event.year === 2007 && (
                    <p className="text-xs text-blue-400 mt-2 font-medium">
                      A landmark moment: for the first time, climate
                      change became a factor in setting the Doomsday
                      Clock, reflecting a broader understanding of
                      existential threats beyond nuclear weapons.
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              The 1998 nuclear tests by India and Pakistan were a watershed
              moment. For the first time since China in 1964, new nations
              had openly declared themselves nuclear powers, and these two
              were long-standing adversaries with a history of armed
              conflict along a contested border. The tests demonstrated
              that the end of the Cold War had not ended the nuclear threat
              &mdash; it had merely changed its character from a
              superpower standoff to a more diffuse and unpredictable
              landscape.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The aftermath of September 11, 2001, brought new anxieties.
              The US withdrawal from the Anti-Ballistic Missile Treaty in
              2002, combined with fears of nuclear terrorism, pushed the
              clock back to 7 minutes. North Korea&apos;s nuclear tests
              beginning in 2006 added yet another dimension of risk.
            </p>
            <p className="text-foreground leading-relaxed">
              The 2007 decision to incorporate climate change into the
              clock&apos;s calculus was equally significant. It reflected a
              growing scientific consensus that nuclear war was not the only
              pathway to civilizational collapse. Rising global
              temperatures, accelerating species extinction, rising sea
              levels, and extreme weather events posed their own existential
              risks &mdash; slower-moving than a nuclear exchange, but
              potentially just as devastating. This broader view of
              existential threats has shaped the clock&apos;s setting ever
              since. The brief moment of optimism in 2010, when the New
              START treaty negotiations pushed the clock back to 6 minutes,
              would prove to be the last backward movement in the
              clock&apos;s history.
            </p>
          </section>

          {/* Section 4: The Modern Crisis */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Modern Crisis (2012&ndash;2026)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Since 2012, the Doomsday Clock has moved in only one
              direction: forward. The modern era has been defined by a
              convergence of threats that the Bulletin&apos;s founders could
              scarcely have imagined &mdash; nuclear modernization programs
              costing trillions of dollars, accelerating climate change,
              cyber warfare capable of disrupting critical infrastructure,
              weaponized disinformation undermining democratic institutions,
              and the rapid rise of artificial intelligence with the
              potential to destabilize military decision-making. The result
              has been a relentless march toward midnight unlike anything
              in the clock&apos;s history.
            </p>
            <div className="space-y-4 my-6">
              {modernEra.map((event) => (
                <div
                  key={event.year}
                  className={`p-4 rounded-lg border ${
                    event.year === 2020
                      ? "bg-orange-500/10 border-orange-500/30"
                      : event.year === 2026
                      ? "bg-doom/10 border-doom/30"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <h4 className="font-semibold text-foreground mb-1">
                    {event.year}: {event.time} to midnight{" "}
                    {event.direction === "forward" ? (
                      <span className="text-doom text-sm">
                        (moved closer)
                      </span>
                    ) : (
                      <span className="text-green-400 text-sm">
                        (moved back)
                      </span>
                    )}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {event.details}
                  </p>
                  {event.year === 2020 && (
                    <p className="text-xs text-orange-400 mt-2 font-medium">
                      An unprecedented shift: for the first time in the
                      clock&apos;s 73-year history, the setting broke
                      through the minutes barrier and was expressed in
                      seconds. This was not merely symbolic &mdash; it
                      reflected the Bulletin&apos;s judgment that threats
                      had converged to a degree never previously seen.
                    </p>
                  )}
                  {event.year === 2026 && (
                    <p className="text-xs text-doom mt-2 font-medium">
                      The current setting &mdash;{" "}
                      {currentTime.display} to midnight &mdash; is the
                      closest the Doomsday Clock has EVER been. Set on{" "}
                      {currentTime.lastUpdated}.
                    </p>
                  )}
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-4">
              The progression from 2017 to 2026 is striking. In just nine
              years, the clock moved from 2.5 minutes to 85 seconds
              &mdash; a pace of decline without precedent in the
              clock&apos;s nearly eight-decade history. The 2020 shift to
              seconds was a deliberate choice by the Bulletin to
              communicate that the level of danger had entered genuinely
              uncharted territory. When the clock had been set at 2 minutes
              in 1953 and 2018, those were isolated peaks of danger during
              specific crises. The modern era represents something
              different: a sustained, escalating emergency driven by
              multiple compounding threats.
            </p>
            <p className="text-foreground leading-relaxed">
              Russia&apos;s 2022 invasion of Ukraine and the explicit
              nuclear threats that followed brought the clock to 90 seconds
              in 2023. It has not moved backward since. The 2025 adjustment
              to 89 seconds and the 2026 move to 85 seconds reflect an
              accumulation of compounding threats: the ongoing
              Russia-Ukraine war, escalating conflict in the Middle East,
              the collapse of nuclear arms control frameworks, accelerating
              climate impacts, and the rapid advance of AI systems with the
              potential to destabilize military decision-making.
            </p>
          </section>

          {/* Section 5: Key Patterns and Insights */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Key Patterns and Insights
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Looking across {clockHistory.length} settings spanning{" "}
              {currentTime.year - 1947} years, several patterns emerge that
              reveal how the world&apos;s leading scientists assess
              existential risk &mdash; and what those assessments tell us
              about the trajectory of human civilization.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-medium text-foreground mb-2">
                  By the Numbers
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span>
                      <strong className="text-foreground">
                        {clockHistory.length}
                      </strong>{" "}
                      total settings in{" "}
                      {currentTime.year - 1947} years
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span>
                      <strong className="text-foreground">
                        Farthest from midnight:
                      </strong>{" "}
                      {farthestEvent.time} ({farthestEvent.year})
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span>
                      <strong className="text-foreground">
                        Closest to midnight:
                      </strong>{" "}
                      {closestEvent.time} ({closestEvent.year})
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span>
                      <strong className="text-foreground">
                        Times moved closer:
                      </strong>{" "}
                      {forwardMoves}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span>
                      <strong className="text-foreground">
                        Times moved back:
                      </strong>{" "}
                      {backwardMoves}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-medium text-foreground mb-2">
                  Key Takeaways
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span>
                      Diplomacy works: every backward move followed a
                      major treaty or diplomatic breakthrough
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span>
                      The clock has not moved backward since 2010
                      &mdash; the longest sustained forward march in
                      its history
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span>
                      The 2020 shift from minutes to seconds was
                      unprecedented and reflected a qualitatively new
                      category of danger
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span>
                      Threats have multiplied: nuclear risk alone set
                      the clock until 2007, when climate was added; AI
                      joined the assessment in 2025
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              Perhaps the most important pattern across the clock&apos;s
              entire history is the decisive role of arms control and
              diplomacy. Every significant backward movement of the clock
              &mdash; in 1963, 1969, 1972, 1988, 1991, and 2010 &mdash;
              followed the signing of a major international agreement. The
              Partial Test Ban Treaty, the Non-Proliferation Treaty, SALT I,
              the INF Treaty, START, and New START all demonstrated that
              when nations choose cooperation over confrontation, the
              existential threat to humanity genuinely recedes. The clock
              moved backward {backwardMoves} times in its history, and
              every single instance was tied to institutional progress.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Conversely, the collapse of arms control frameworks has
              consistently preceded forward movements. The US withdrawal
              from the ABM Treaty in 2002, the collapse of the INF Treaty
              in 2019, the failure to renew or replace New START, and the
              broader erosion of the rules-based international order have
              all contributed to the clock&apos;s relentless advance in the
              modern era. The lesson is clear: the institutional
              architecture of arms control is not merely bureaucratic
              overhead &mdash; it is the primary mechanism through which
              humanity has historically managed existential risk.
            </p>
            <p className="text-foreground leading-relaxed">
              The general trend of the Doomsday Clock tells a sobering
              story. After reaching its safest point of 17 minutes in 1991,
              the clock has deteriorated almost continuously for over three
              decades. The shift from minutes to seconds in 2020 was not
              just a change in measurement &mdash; it was an acknowledgment
              that the world had entered a fundamentally more dangerous
              period than anything in the clock&apos;s previous 73 years.
            </p>
          </section>

          {/* Section 6: What Comes Next */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Comes Next
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin of the Atomic Scientists will announce the next
              Doomsday Clock setting in{" "}
              <Link
                to="/#countdown"
                className="text-doom hover:underline font-semibold"
              >
                {currentTime.nextUpdate}
              </Link>
              . Given the current trajectory &mdash; the clock has moved
              forward or held steady for 16 consecutive years &mdash; the
              question facing the Science and Security Board is not whether
              the world remains dangerous, but whether the convergence of
              threats has intensified enough to warrant yet another forward
              move.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The factors that will shape the 2027 assessment are already in
              motion. On the nuclear front, the ongoing Russia-Ukraine
              conflict, the collapse of bilateral arms control between the
              US and Russia, North Korea&apos;s expanding arsenal, and
              escalating tensions in the Middle East continue to drive risk
              upward. Climate change is accelerating, with record global
              temperatures and extreme weather events intensifying worldwide.
              And the rapid development of AI systems &mdash; particularly
              their application to autonomous weapons, cyber warfare,
              deepfake disinformation, and biological research &mdash; has
              introduced a new and poorly understood category of existential
              concern that the Bulletin is still working to fully assess.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But the Doomsday Clock has always been about human agency. It
              is not a prediction &mdash; it is a warning. The clock can
              move backward, as it has {backwardMoves} times before. What
              it requires is the same thing it has always required:
              political will, international cooperation, and a genuine
              commitment to addressing the threats that put all of humanity
              at risk. The scientists who created this clock in 1947 did so
              not out of despair, but out of a belief that informed
              citizens could demand better of their leaders. That belief
              remains as relevant today as it was {currentTime.year - 1947}{" "}
              years ago.
            </p>
            <p className="text-foreground leading-relaxed">
              Want to explore the scenarios that could move the clock
              forward or backward? Try our{" "}
              <Link
                to="/#what-if"
                className="text-doom hover:underline"
              >
                What If Simulator
              </Link>{" "}
              to model different outcomes.
            </p>
          </section>
        </div>

        {/* CTA: Interactive Timeline */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Explore the Interactive Timeline
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See every Doomsday Clock change visualized on our interactive
            timeline with detailed analysis for each year.
          </p>
          <Link
            to="/#timeline"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View the Full Timeline
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
              Deep dive on the February 2026 announcement &mdash; from 89 to 85 seconds.
            </p>
          </Link>
          <Link
            to="/blog/doomsday-clock-2027-prediction"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              Doomsday Clock 2027 Prediction
            </h4>
            <p className="text-sm text-muted-foreground">
              What could move the clock forward or backward in 2027? Our scenario analysis.
            </p>
          </Link>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-history-timeline"
          slugs={[
            "doomsday-clock-2026",
            "who-controls-doomsday-clock",
            "doomsday-clock-comic-vs-real",
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
