import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Atom, Timer, Scale } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockVsAtomicClock() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Doomsday Clock vs Atomic Clock: What's the Difference? | DoomsdayClock.net",
      description:
        "Doomsday Clock vs atomic clock — they share a name but nothing else. Learn the difference between the symbolic threat clock and the world's most precise timekeeping device.",
      path: "/blog/doomsday-clock-vs-atomic-clock",
      newsKeywords:
        "doomsday clock vs atomic clock, atomic clock vs doomsday clock, what is atomic clock, how atomic clock works, difference between doomsday clock and atomic clock",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Doomsday Clock vs Atomic Clock: What's the Difference?",
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
          "https://doomsdayclock.net/blog/doomsday-clock-vs-atomic-clock",
      },
      description:
        "Doomsday Clock vs atomic clock — they share a name but nothing else. Learn the difference between the symbolic threat clock and the world's most precise timekeeping device.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "doomsday clock vs atomic clock",
        "atomic clock vs doomsday clock",
        "what is atomic clock",
        "how atomic clock works",
        "difference between doomsday clock and atomic clock",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2000,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "vs-atomic-clock");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="vs-atomic-clock"]'
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
            Doomsday Clock vs Atomic Clock
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <Scale className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Doomsday Clock vs Atomic Clock:{" "}
            <span className="text-doom">What's the Difference?</span>
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
          {/* Section 1: Two Clocks, One Confusion */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Timer className="w-5 h-5 sm:w-6 sm:h-6" />
              Two Clocks, One Confusion
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Search for "Doomsday Clock" online and you will inevitably
              encounter results about atomic clocks. Google "how atomic
              clock works" or "what's atomic clock" and the Doomsday Clock
              often appears in the sidebar. The two concepts are tangled
              together in search results, news headlines, and everyday
              conversation — yet they could hardly be more different.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The confusion is understandable. Both have the word "clock"
              in their names. Both are associated with the word "atomic."
              Both emerged from the same era of nuclear science. But one
              is a feat of precision engineering that defines how we
              measure time itself, and the other is a symbolic warning
              about humanity's potential for self-destruction.
            </p>
            <p className="text-foreground leading-relaxed">
              This article breaks down the difference clearly, so the
              next time someone asks whether the Doomsday Clock "runs on
              atoms," you will have a thorough answer ready.
            </p>
          </section>

          {/* Section 2: What Is an Atomic Clock? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Atom className="w-5 h-5 sm:w-6 sm:h-6" />
              What Is an Atomic Clock?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              An atomic clock is a timekeeping device that uses the
              natural vibrations of atoms to measure time with
              extraordinary precision. Most atomic clocks rely on
              cesium-133 atoms, which oscillate at exactly 9,192,631,770
              cycles per second. This frequency is so stable and
              predictable that in 1967 the International System of Units
              redefined the second itself based on it. In other words,
              the cesium atom does not merely keep good time — it{" "}
              <em>defines</em> what a second is.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The precision of modern atomic clocks is staggering.
              NIST-F2, the United States' primary time and frequency
              standard located at the National Institute of Standards and
              Technology in Boulder, Colorado, is accurate to within one
              second over 300 million years. Newer optical lattice clocks
              currently in development push that figure even further —
              some would not gain or lose a second over the entire age of
              the universe.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Atomic clocks are not exotic laboratory curiosities. They
              underpin technologies you use every day. The Global
              Positioning System (GPS) depends on a network of atomic
              clocks aboard satellites to calculate your position to
              within a few meters. Financial markets rely on atomic
              clock-synchronized timestamps to sequence trades happening
              in microseconds. Internet protocols, telecommunications
              networks, and power grids all depend on the precision that
              only atomic timekeeping can provide.
            </p>
            <p className="text-foreground leading-relaxed">
              The first accurate cesium atomic clock was built in 1955 at
              the National Physical Laboratory in England by Louis Essen
              and Jack Parry. Since then, atomic clocks have become the
              backbone of modern civilization's timekeeping
              infrastructure, quietly running in laboratories and
              satellites around the world with a reliability that no
              mechanical or quartz clock can approach.
            </p>
          </section>

          {/* Section 3: What Is the Doomsday Clock? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              What Is the Doomsday Clock?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is a symbolic clock face maintained by
              the{" "}
              <strong>Bulletin of the Atomic Scientists</strong>, a
              nonprofit organization founded in 1945 by scientists who
              had worked on the Manhattan Project. First published on the
              cover of the Bulletin's magazine in 1947, the clock
              represents how close humanity stands to catastrophic
              destruction — with midnight symbolizing global catastrophe.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Unlike an atomic clock, the Doomsday Clock does not measure
              actual time. It is a risk assessment tool, a metaphor
              rendered as a clock face to make abstract existential
              threats visceral and immediate. The clock's position is set
              by the Bulletin's Science and Security Board, a group of
              world-renowned scientists and policy experts who evaluate
              threats from nuclear weapons, climate change, and
              disruptive technologies such as AI and biosecurity risks.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The clock is currently set at{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight — the closest it has ever been. This setting
              reflects the board's judgment about the compounding dangers
              of nuclear escalation, the accelerating climate crisis, and
              the rapid development of technologies that could amplify
              existing risks.
            </p>
            <p className="text-foreground leading-relaxed">
              The Doomsday Clock has been adjusted 28 times since its
              creation. It has moved both forward (closer to midnight)
              and backward (further from midnight), responding to events
              like the development of the hydrogen bomb, the signing of
              arms control treaties, and the end of the Cold War. It is
              set by expert consensus, not by any measurement device, and
              its authority rests entirely on the credibility and
              expertise of the people who set it.
            </p>
          </section>

          {/* Section 4: Side-by-Side Comparison */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6" />
              Side-by-Side Comparison
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The differences become even clearer when placed next to
              each other. Here is a direct comparison of the two clocks
              across every major dimension.
            </p>

            <div className="grid grid-cols-3 gap-0 rounded-lg overflow-hidden border border-white/10">
              {/* Header row */}
              <div className="p-3 sm:p-4 bg-white/10 border-b border-white/10">
                <span className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Category
                </span>
              </div>
              <div className="p-3 sm:p-4 bg-atomic/10 border-b border-white/10">
                <span className="text-xs sm:text-sm font-semibold text-atomic uppercase tracking-wider">
                  Atomic Clock
                </span>
              </div>
              <div className="p-3 sm:p-4 bg-doom/10 border-b border-white/10">
                <span className="text-xs sm:text-sm font-semibold text-doom uppercase tracking-wider">
                  Doomsday Clock
                </span>
              </div>

              {/* Purpose */}
              <div className="p-3 sm:p-4 bg-white/5 border-b border-white/10">
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Purpose
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Precision timekeeping
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Existential risk assessment
                </span>
              </div>

              {/* Accuracy */}
              <div className="p-3 sm:p-4 bg-white/5 border-b border-white/10">
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Accuracy
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Nanosecond precision
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Symbolic (not a measurement)
                </span>
              </div>

              {/* Created */}
              <div className="p-3 sm:p-4 bg-white/5 border-b border-white/10">
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Created
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  1955 (first accurate cesium clock)
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  1947
                </span>
              </div>

              {/* Set by */}
              <div className="p-3 sm:p-4 bg-white/5 border-b border-white/10">
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Set by
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Laws of physics
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Expert consensus
                </span>
              </div>

              {/* Location */}
              <div className="p-3 sm:p-4 bg-white/5 border-b border-white/10">
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Location
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  NIST labs, observatories worldwide
                </span>
              </div>
              <div className="p-3 sm:p-4 border-b border-white/10">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Bulletin of the Atomic Scientists, Chicago
                </span>
              </div>

              {/* Changes */}
              <div className="p-3 sm:p-4 bg-white/5">
                <span className="text-xs sm:text-sm font-medium text-foreground">
                  Changes
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Never (constant physics)
                </span>
              </div>
              <div className="p-3 sm:p-4">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  28 times since 1947
                </span>
              </div>
            </div>
          </section>

          {/* Section 5: The Ironic Connection */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Atom className="w-5 h-5 sm:w-6 sm:h-6" />
              The Ironic Connection
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Despite being fundamentally different, the Doomsday Clock
              and the atomic clock share a common origin: the atomic age.
              Both are products of the same era of nuclear physics that
              reshaped the 20th century, and both trace their lineage
              back to the scientists who unlocked the power of the atom.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Manhattan Project scientists who helped build the first
              nuclear weapons were peers — and in some cases close
              colleagues — of the physicists who were advancing atomic
              timekeeping. The same understanding of quantum mechanics
              and atomic structure that made nuclear fission possible also
              revealed the extraordinarily precise oscillation frequencies
              of atoms like cesium-133. Nuclear physics gave humanity
              both the most precise way to measure time and the most
              potent threat to human survival.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This irony runs deep. The Bulletin of the Atomic Scientists
              was founded in 1945 by researchers who had worked at the
              University of Chicago's Metallurgical Laboratory — the same
              institution where Enrico Fermi achieved the first
              self-sustaining nuclear chain reaction in 1942. These
              scientists created the Doomsday Clock because they
              understood, better than anyone, the destructive potential
              of the forces they had helped unleash. Meanwhile, their
              colleagues in physics laboratories around the world were
              harnessing those same atomic properties to build clocks of
              unprecedented accuracy.
            </p>
            <p className="text-foreground leading-relaxed">
              The atomic age, in other words, produced both the ultimate
              tool of precision and the ultimate symbol of peril. One
              clock counts seconds with inhuman exactness. The other
              counts down to a midnight that humanity has the power — but
              not always the wisdom — to prevent. That duality sits at
              the heart of the nuclear era and everything it has given
              us.
            </p>
          </section>

          {/* Section 6: Why People Confuse Them */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Timer className="w-5 h-5 sm:w-6 sm:h-6" />
              Why People Confuse Them
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The word "atomic" is the primary bridge between these two
              concepts. In everyday language, "atomic" carries a dual
              meaning — it refers both to the physics of atoms and to the
              destructive power of nuclear weapons. When someone hears
              "atomic clock," their mind may jump to nuclear danger
              rather than precision timekeeping, especially if they have
              recently encountered the Doomsday Clock in the news.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Media headlines often make the confusion worse. A headline
              reading "Atomic Clock Moves Closer to Midnight" could refer
              to either concept, and journalists do not always clarify
              which one they mean. Search engines compound the problem by
              surfacing both topics together — if you search for
              information about one, algorithms assume you might be
              interested in the other. The result is a feedback loop
              where the two concepts become increasingly entangled in
              people's minds.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Both concepts also involve the language of precision and
              seconds. Atomic clocks measure time in billionths of a
              second. The Doomsday Clock is expressed in seconds and
              minutes to midnight. Both use the imagery of counting, of
              exactness, of time running out or being measured with
              extreme care. These linguistic overlaps create a cognitive
              bridge that makes it easy to blur the two together.
            </p>
            <p className="text-foreground leading-relaxed">
              Understanding the difference matters for scientific
              literacy. Confusing a precision instrument with a symbolic
              warning system reflects a broader tendency to conflate
              science with metaphor — and that confusion can undermine
              public understanding of both real technological
              achievements and genuine existential risks. The atomic
              clock deserves to be understood as one of humanity's
              greatest scientific accomplishments. The Doomsday Clock
              deserves to be understood as one of its most urgent
              warnings. They are not the same thing, and knowing why
              makes us better equipped to appreciate both.
            </p>
          </section>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-vs-atomic-clock"
          slugs={[
            "who-controls-doomsday-clock",
            "how-is-doomsday-clock-calculated",
            "doomsday-clock-history-timeline",
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
