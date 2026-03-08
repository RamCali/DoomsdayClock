import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, BookOpen } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockVsPopCulture() {
  useEffect(() => {
    updateMetaTags({
      title: "Doomsday Clock vs. Pop Culture: The Comic, The Symbol, The Movement | DoomsdayClock.net",
      description: "The real Doomsday Clock vs. the DC Comics series — what's the difference? How Watchmen borrowed nuclear anxiety, and why the real clock matters more than fiction.",
      path: "/blog/doomsday-clock-comic-vs-real",
      newsKeywords: "doomsday clock comic, doomsday clock watchmen, doomsday clock dc comics, doomsday clock real vs comic",
      publishedTime: "2026-03-07T00:00:00Z",
      modifiedTime: "2026-03-07T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Doomsday Clock vs. Pop Culture: The Comic, The Symbol, The Movement",
      datePublished: "2026-03-07T00:00:00Z",
      dateModified: "2026-03-07T00:00:00Z",
      author: { "@type": "Organization", name: "DoomsdayClock.net", url: "https://doomsdayclock.net" },
      publisher: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        logo: { "@type": "ImageObject", url: "https://doomsdayclock.net/DoomsDayClock.net.png", width: 1200, height: 1200 },
        url: "https://doomsdayclock.net",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://doomsdayclock.net/blog/doomsday-clock-comic-vs-real" },
      description: "The real Doomsday Clock vs. the DC Comics series. How Watchmen borrowed nuclear anxiety and why the real clock matters.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: ["doomsday clock comic", "doomsday clock watchmen", "doomsday clock dc comics", "doomsday clock meaning"],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 1500,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "comic-vs-real");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="comic-vs-real"]'
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
          <span className="text-foreground">Doomsday Clock vs. Pop Culture</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock vs. Pop Culture:</span>{" "}
            The Comic, The Symbol, The Movement
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              6 min read
            </span>
          </div>

          {/* Current clock context */}
          <div className="doom-accent-card p-4 flex items-center gap-4">
            <Clock className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                The real Doomsday Clock is currently at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight &mdash; the closest it has ever been
              </p>
              <p className="text-xs text-muted-foreground">
                Set on {currentTime.lastUpdated} by the Bulletin of the Atomic Scientists
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: Two Clocks, One Anxiety */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Two Clocks, One Anxiety
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              If you searched for &quot;Doomsday Clock&quot; and landed here expecting comic book panels, you
              are not alone. Millions of people every year search that exact phrase looking for the DC Comics
              series, the <em>Watchmen</em> graphic novel, or the HBO adaptation. And millions more search
              it looking for the real thing &mdash; the scientific warning system that has tracked humanity&apos;s
              proximity to self-destruction since 1947.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The confusion is understandable. Both &quot;Doomsday Clocks&quot; deal with nuclear annihilation.
              Both use the imagery of a clock ticking toward midnight. Both have become cultural touchstones in
              their own right. But they are fundamentally different things &mdash; and understanding the
              distinction matters, because the real Doomsday Clock predates the comics by nearly four decades.
            </p>
            <p className="text-foreground leading-relaxed">
              The real clock was created in 1947. The comic that borrowed its imagery arrived in 1986. The DC
              series that took its name came in 2017. This post explains the difference between them, how they
              are connected, and why the real Doomsday Clock &mdash; currently at{" "}
              <span className="text-doom font-semibold">{currentTime.display}</span> to midnight &mdash;
              deserves your attention far more than any fictional counterpart.
            </p>
          </section>

          {/* Section 2: The Original: A Scientific Warning (1947) */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Original: A Scientific Warning (1947)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Two years after the atomic bombings of Hiroshima and Nagasaki, a group of scientists who had
              worked on the Manhattan Project decided the world needed a wake-up call. They founded the{" "}
              <em>Bulletin of the Atomic Scientists</em> in 1945, and in June 1947, artist Martyl Langsdorf
              designed a clock face for the magazine&apos;s cover. The minute hand was set at seven minutes
              to midnight. Midnight represented global catastrophe &mdash; nuclear war, the end of civilization
              as we know it. The Doomsday Clock was born.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Langsdorf was the wife of physicist Alexander Langsdorf Jr., who had worked on the Manhattan
              Project at the University of Chicago. She chose the clock metaphor because it was immediately,
              viscerally understandable: everyone knows what happens when a clock strikes midnight. No technical
              background required. No policy expertise needed. The closer the hands to midnight, the closer
              humanity stands to destroying itself.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is not a countdown. It does not tick in real time. It is a symbolic indicator,
              adjusted annually &mdash; typically each January &mdash; by the Bulletin&apos;s Science and Security
              Board, a panel that includes Nobel laureates and leading experts in nuclear policy, climate science,
              biosecurity, and emerging technologies. Each year, the Board evaluates the state of the world across
              three primary threat categories: nuclear risk, climate change, and disruptive technologies (including
              AI and bioweapons). Based on that assessment, they set the clock forward, backward, or leave it
              unchanged.
            </p>
            <p className="text-foreground leading-relaxed">
              Since 1947, the clock has been adjusted{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-doom hover:underline"
              >
                28 times
              </Link>
              . It has ranged from 17 minutes to midnight (1991, after the Cold War ended) to its current
              record-setting position of {currentTime.display} to midnight, set on {currentTime.lastUpdated}.
              That current setting &mdash; less than a minute and a half from symbolic catastrophe &mdash;
              reflects the Bulletin&apos;s judgment that the convergence of nuclear escalation, accelerating
              climate change, and ungoverned AI poses the greatest existential danger in the clock&apos;s
              entire history.
            </p>
          </section>

          {/* Section 3: The Comic: Watchmen and the Clock Motif (1986) */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Comic: Watchmen and the Clock Motif (1986)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              In 1986, writer Alan Moore and artist Dave Gibbons published <em>Watchmen</em>, a 12-issue
              graphic novel that would become one of the most influential works in comic book history.
              Set in an alternate Cold War America where costumed vigilantes are real and Richard Nixon is
              still president, <em>Watchmen</em> is a meditation on power, paranoia, and the ever-present
              possibility of nuclear annihilation.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock imagery is central to the entire work. Each issue opens and closes with
              a clock face, its hands inching closer to midnight as the story progresses. The final
              chapter is literally titled &quot;A Stronger Loving World&quot; &mdash; but its resolution
              is anything but comforting. Moore borrowed the clock metaphor directly from the Bulletin
              of the Atomic Scientists, and for good reason: when he was writing <em>Watchmen</em> in
              1984&ndash;1985, the real Doomsday Clock stood at just 3 minutes to midnight, its closest
              Cold War position. The nuclear dread in <em>Watchmen</em> was not invented &mdash; it was
              transcribed from the atmosphere of its time.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Three decades later, DC Comics returned to this well. In November 2017, writer Geoff Johns
              and artist Gary Frank launched <em>Doomsday Clock</em>, a 12-issue limited series that
              served as a direct sequel to <em>Watchmen</em>. This series explicitly crossed
              <em> Watchmen</em> characters &mdash; most notably Doctor Manhattan &mdash; into the
              main DC Universe, pitting them against Superman and the Justice League. The series ran
              through December 2019 and is now collected as <em>Doomsday Clock: The Complete Collection</em>.
            </p>
            <p className="text-foreground leading-relaxed">
              The DC <em>Doomsday Clock</em> series cemented the phrase in pop culture. For many readers,
              especially younger ones who did not grow up during the Cold War, this comic series is their
              first and primary association with the term &quot;Doomsday Clock.&quot; That is both a
              testament to the power of fiction as a cultural force and a challenge for those trying to
              communicate the urgency of the real thing.
            </p>
          </section>

          {/* Section 4: Key Differences at a Glance */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Key Differences at a Glance
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {/* Real Clock card */}
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-medium text-doom mb-3 text-lg">The Real Doomsday Clock</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Created:</strong> 1947</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">By:</strong> Bulletin of the Atomic Scientists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Purpose:</strong> Scientific warning to humanity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Updated:</strong> Annually (January)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Current time:</strong> {currentTime.display} to midnight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Measures:</strong> Nuclear, climate, and tech threats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Significance:</strong> Influences policy discussions worldwide</span>
                  </li>
                </ul>
              </div>

              {/* Comic Clock card */}
              <div className="p-4 rounded-lg bg-atomic/10 border border-atomic/30">
                <h4 className="font-medium text-atomic mb-3 text-lg">The Comic / Fictional Clock</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-atomic mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Created:</strong> 1986 (Watchmen) / 2017 (DC series)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-atomic mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">By:</strong> Alan Moore &amp; Dave Gibbons / Geoff Johns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-atomic mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Purpose:</strong> Storytelling and social commentary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-atomic mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Updated:</strong> N/A (fixed in narrative)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-atomic mt-0.5">&#9679;</span>
                    <span><strong className="text-foreground">Significance:</strong> Cultural icon, introduced millions to nuclear anxiety</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: How Fiction Amplified the Message */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How Fiction Amplified the Message
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Here is the irony: the comics may have done the real Doomsday Clock a tremendous favor.{" "}
              <em>Watchmen</em> brought the concept of nuclear existential dread to an entire generation
              that did not live through the Cuban Missile Crisis or the thermonuclear tests of the 1950s.
              For many readers who first encountered <em>Watchmen</em> in the late 1980s, the graphic novel
              was their introduction to the idea that humanity could destroy itself &mdash; and that serious
              people were tracking how close we stood to doing so.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This pattern has repeated with every major <em>Watchmen</em> adaptation. When Zack Snyder&apos;s
              film adaptation released in 2009, searches for the real Doomsday Clock spiked. When HBO launched
              its critically acclaimed <em>Watchmen</em> limited series in 2019 &mdash; which won 11 Emmy
              Awards &mdash; interest in the real clock surged again. And when DC published its{" "}
              <em>Doomsday Clock</em> series from 2017 to 2019, the phrase entered mainstream cultural
              conversation in a way the Bulletin could never have achieved through press releases alone.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Each wave of fiction-driven attention creates a pipeline: people discover the concept through
              entertainment, search for more information, and find the real Doomsday Clock. This is not a
              problem &mdash; it is an opportunity. Fiction serves as a gateway to understanding real threats.
              A teenager who reads <em>Watchmen</em> and then looks up the actual Doomsday Clock has just
              been introduced to the Bulletin of the Atomic Scientists, nuclear proliferation, and climate
              policy in a way that no classroom lecture could match.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bulletin itself has acknowledged this cultural crossover. Their communications team
              recognizes that pop culture keeps the Doomsday Clock relevant in public discourse, especially
              among younger audiences. The challenge is not to compete with fiction but to ensure that when
              fiction drives people to search for the Doomsday Clock, they find the real information alongside
              the entertainment &mdash; and understand why the real clock matters.
            </p>
          </section>

          {/* Section 6: Why the Real Clock Matters More Than Ever */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why the Real Clock Matters More Than Ever
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Fiction is compelling, but the real threats are urgent. At{" "}
              <span className="text-doom font-semibold">{currentTime.display}</span> to midnight, the Doomsday
              Clock stands closer to catastrophe than at any point in its {currentTime.year - 1947}-year history.
              That is not a narrative device. It is the considered judgment of the world&apos;s leading experts
              in nuclear security, climate science, and emerging technology, based on their assessment of real-world
              conditions right now.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In <em>Watchmen</em>, Doctor Manhattan can reshape matter at will and teleport to Mars. In the DC{" "}
              <em>Doomsday Clock</em> series, Superman stands as an indestructible symbol of hope. These are
              comforting fantasies. The real Doomsday Clock does not have superheroes to save us. There is no
              Doctor Manhattan to disintegrate nuclear warheads, no Superman to reverse the climate crisis,
              no cosmic reset button to undo the damage of ungoverned artificial intelligence. The real clock
              ticks based on the decisions of real leaders &mdash; and the engagement of real citizens.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Understanding the real Doomsday Clock is the first step toward meaningful action. The clock has
              moved backward before &mdash; every time it did, it was because of diplomatic breakthroughs,
              arms control treaties, and genuine international cooperation. The clock is not a prophecy of
              inevitable doom. It is a warning that can be heeded. But it can only be heeded if people know it
              exists, understand what it measures, and care enough to demand that their leaders act.
            </p>
            <p className="text-foreground leading-relaxed">
              So whether you arrived here looking for the comic, the HBO show, or the real thing &mdash;
              welcome. Now you know the difference. And now you know where the real clock stands. Explore the{" "}
              <Link
                to="/#timeline"
                className="text-doom hover:underline"
              >
                interactive timeline
              </Link>{" "}
              to see how we got here, read our{" "}
              <Link
                to="/blog/doomsday-clock-2027-prediction"
                className="text-doom hover:underline"
              >
                2027 prediction analysis
              </Link>{" "}
              to see where we might be headed, or{" "}
              <Link
                to="/#clock"
                className="text-doom hover:underline"
              >
                view the live clock
              </Link>{" "}
              to see where we stand right now.
            </p>
          </section>
        </div>

        {/* CTA: Explore the Real Doomsday Clock */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Explore the Real Doomsday Clock
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See the live countdown, full historical timeline, threat analysis, and community predictions
            &mdash; all in one place.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View the Doomsday Clock
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-8 doom-card p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Related Articles
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link
              to="/blog/doomsday-clock-history-timeline"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock History: Every Change from 1947 to 2026
              </p>
              <p className="text-xs text-muted-foreground mt-1">Explainer</p>
            </Link>
            <Link
              to="/blog/doomsday-clock-2027-prediction"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock 2027 Prediction: Will It Move Closer to Midnight?
              </p>
              <p className="text-xs text-muted-foreground mt-1">Analysis</p>
            </Link>
            <Link
              to="/#timeline"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Interactive Doomsday Clock Timeline
              </p>
              <p className="text-xs text-muted-foreground mt-1">Tool</p>
            </Link>
            <Link
              to="/blog/doomsday-clock-2026"
              className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-doom/40 transition-colors group"
            >
              <p className="text-sm font-medium text-foreground group-hover:text-doom transition-colors">
                Doomsday Clock 2026: What Changed and Why
              </p>
              <p className="text-xs text-muted-foreground mt-1">Update</p>
            </Link>
          </div>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-comic-vs-real"
          slugs={[
            "doomsday-clock-history-timeline",
            "what-happens-doomsday-clock-midnight",
            "will-the-world-end-doomsday-clock",
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
