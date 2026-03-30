import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, BookOpen, Tv, Sparkles } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockWatchmenComic() {
  useEffect(() => {
    updateMetaTags({
      title: "Doomsday Clock & Watchmen: The Comic Series vs the Real Clock | DoomsdayClock.net",
      description: "Is Doomsday Clock a sequel to Watchmen? Is it canon? Everything about the DC Comics series versus the real nuclear threat clock by the Bulletin of Atomic Scientists.",
      path: "/blog/doomsday-clock-watchmen-comic",
      newsKeywords: "doomsday clock comic, is doomsday clock canon, doomsday clock watchmen, is doomsday clock sequel to watchmen, doomsday clock dc comics, is doomsday clock worth reading",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Doomsday Clock & Watchmen: The Comic Series vs the Real Clock",
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
        "@id": "https://doomsdayclock.net/blog/doomsday-clock-watchmen-comic",
      },
      description: "Is Doomsday Clock a sequel to Watchmen? Is it canon? Everything about the DC Comics series versus the real nuclear threat clock by the Bulletin of Atomic Scientists.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "doomsday clock comic",
        "is doomsday clock canon",
        "doomsday clock watchmen",
        "is doomsday clock sequel to watchmen",
        "doomsday clock dc comics",
        "is doomsday clock worth reading",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2000,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "watchmen-comic");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="watchmen-comic"]'
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
            Doomsday Clock &amp; Watchmen: Comic vs Real Clock
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock &amp; Watchmen:</span>{" "}
            The Comic Series vs the Real Clock
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 14, 2026
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
          {/* Section 1: Two Doomsday Clocks */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              Two Doomsday Clocks
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When you search &quot;Doomsday Clock,&quot; you might be looking for one of two completely
              different things. The first is the nuclear threat assessment maintained by the Bulletin of
              the Atomic Scientists &mdash; a symbolic clock that has measured humanity&apos;s proximity
              to self-destruction since 1947. The second is the DC Comics graphic novel series that took
              its name from the real clock and became one of the most talked-about comic events of the
              late 2010s.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Both are significant cultural artifacts. Both deal with themes of annihilation, human
              frailty, and the ticking passage of time toward potential catastrophe. Both have shaped
              how millions of people think about existential risk. But they are completely different
              things &mdash; one is a scientific warning system backed by Nobel laureates, and the
              other is a work of fiction featuring superheroes and parallel universes.
            </p>
            <p className="text-foreground leading-relaxed">
              This article untangles the two. Whether you arrived here looking for comic book lore or
              genuine nuclear threat data, you will leave understanding how these two Doomsday Clocks
              relate to each other, where <em>Watchmen</em> fits into the picture, and why the real
              clock &mdash; currently at{" "}
              <span className="text-doom font-semibold">{currentTime.display}</span> to midnight
              &mdash; deserves your attention alongside any fictional counterpart.
            </p>
          </section>

          {/* Section 2: The Real Doomsday Clock (1947) */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              The Real Doomsday Clock (1947)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The original Doomsday Clock was created in 1947 by the{" "}
              <strong>Bulletin of the Atomic Scientists</strong>, a nonprofit organization founded
              two years earlier by researchers who had worked on the Manhattan Project. Artist Martyl
              Langsdorf designed the now-iconic clock face for the cover of the Bulletin&apos;s
              magazine, setting the minute hand at seven minutes to midnight. Midnight represented
              global catastrophe &mdash; nuclear war and the end of civilization.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The clock is not a countdown. It does not tick in real time. Instead, it is a symbolic
              risk assessment, adjusted annually &mdash; typically each January &mdash; by the
              Bulletin&apos;s Science and Security Board. This panel includes Nobel laureate scientists
              and leading experts in nuclear policy, climate science, biosecurity, and emerging
              technologies. They evaluate the state of the world across multiple threat categories and
              set the clock forward, backward, or leave it unchanged based on their assessment.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The clock currently stands at{" "}
              <span className="text-doom font-semibold">{currentTime.display}</span> to midnight,
              set on {currentTime.lastUpdated}. That is the closest the clock has ever been to
              midnight in its entire {currentTime.year - 1947}-year history, reflecting the
              Bulletin&apos;s judgment that the convergence of nuclear escalation, accelerating
              climate change, and ungoverned artificial intelligence poses an unprecedented existential
              danger.
            </p>
            <p className="text-foreground leading-relaxed">
              This is the real Doomsday Clock. It predates all comic book versions by nearly four
              decades, and it remains the authoritative symbol of humanity&apos;s collective risk.
              Everything that came after &mdash; the graphic novels, the films, the television
              series &mdash; borrowed from this original concept.
            </p>
          </section>

          {/* Section 3: Watchmen (1986-1987) */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              Watchmen (1986&ndash;1987)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              In 1986, writer Alan Moore and artist Dave Gibbons published <em>Watchmen</em>, a
              12-issue limited series that would become widely considered one of the greatest graphic
              novels ever created. Set during an alternate-history Cold War where costumed vigilantes
              are real, Richard Nixon is still president, and the United States won the Vietnam War
              thanks to the godlike Doctor Manhattan, <em>Watchmen</em> is a meditation on power,
              paranoia, moral compromise, and the ever-present threat of nuclear annihilation.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The ticking clock is central to the entire work. Each issue opens and closes with a
              clock face, its hands inching closer to midnight as the story progresses toward its
              devastating conclusion. The clock motif directly references the real Doomsday Clock
              maintained by the Bulletin of the Atomic Scientists &mdash; and for good reason. When
              Moore was writing <em>Watchmen</em> in 1984&ndash;1985, the real Doomsday Clock stood
              at just 3 minutes to midnight, its closest Cold War position. The nuclear dread
              saturating <em>Watchmen</em> was not invented &mdash; it was transcribed directly
              from the atmosphere of its time.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <em>Watchmen</em> did something extraordinary for public awareness of the Doomsday
              Clock concept. Before 1986, the Bulletin&apos;s clock was primarily known within
              academic, scientific, and policy circles. After <em>Watchmen</em>, the image of a
              clock counting down to midnight became embedded in mainstream popular culture. An
              entire generation encountered the idea that humanity could destroy itself &mdash; and
              that serious people were tracking how close we stood to doing so &mdash; through a
              comic book rather than a science journal.
            </p>
            <p className="text-foreground leading-relaxed">
              The work&apos;s influence cannot be overstated. <em>Watchmen</em> appeared on
              TIME magazine&apos;s list of the 100 best English-language novels, won the Hugo Award,
              and fundamentally changed the comic book industry. It made the Doomsday Clock part of
              pop culture in a way the Bulletin never could have achieved on its own.
            </p>
          </section>

          {/* Section 4: Doomsday Clock: The DC Comics Series (2017-2019) */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              Doomsday Clock: The DC Comics Series (2017&ndash;2019)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Three decades after <em>Watchmen</em>, DC Comics returned to its world. In November
              2017, writer Geoff Johns and artist Gary Frank launched <em>Doomsday Clock</em>, a
              12-issue limited series that served as a direct sequel to Moore and Gibbons&apos;
              original work. The series was ambitious in scope: it explicitly crossed{" "}
              <em>Watchmen</em> characters &mdash; most notably Doctor Manhattan &mdash; into the
              main DC Universe, pitting them against Superman, Batman, and the Justice League.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The premise picks up where <em>Watchmen</em> ends. Adrian Veidt&apos;s conspiracy has
              been exposed, and the <em>Watchmen</em> world is on the brink of nuclear war. Veidt
              travels to the DC Universe seeking Doctor Manhattan, who has been quietly reshaping DC
              continuity from behind the scenes. The series grapples with themes of hope versus
              cynicism, using Superman as a foil to Doctor Manhattan&apos;s detached nihilism.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The series ran through December 2019, plagued by significant delays between issues, and
              is now collected as <em>Doomsday Clock: The Complete Collection</em>. It was one of
              DC&apos;s most high-profile publishing events of the decade, generating extensive
              discussion and debate across the comics community.
            </p>
            <p className="text-foreground leading-relaxed">
              The reception was deeply divided. Fans of <em>Watchmen</em> as a standalone work
              questioned whether a sequel was necessary or respectful to the original. Fans of the
              DC Universe appreciated the ambitious crossover and the way the series attempted to
              reconcile decades of continuity changes. Almost everyone agreed on one thing: Gary
              Frank&apos;s artwork was extraordinary, meticulously echoing the nine-panel grid
              structure that Dave Gibbons established in the original.
            </p>
          </section>

          {/* Section 5: Is Doomsday Clock Canon? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
              Is Doomsday Clock Canon?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Yes &mdash; within DC continuity. When <em>Doomsday Clock</em> was published, it was
              positioned as a cornerstone of DC&apos;s overarching narrative, intended to explain why
              the DC Universe had undergone so many reboots and continuity shifts over the decades.
              The series revealed that Doctor Manhattan had been manipulating DC&apos;s timeline,
              removing characters and altering history. Its conclusion was meant to set the stage for
              DC&apos;s future publishing direction.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              However, subsequent editorial decisions complicated that status. DC&apos;s{" "}
              <em>Infinite Frontier</em> initiative (2021) and the later <em>Dawn of DC</em> era
              largely sidelined the events and implications of <em>Doomsday Clock</em>. While the
              series has never been explicitly decanonized, its plot points are rarely referenced in
              ongoing DC titles. In practice, its impact on the larger DC Universe has faded
              considerably since its conclusion.
            </p>
            <p className="text-foreground leading-relaxed">
              It is also worth noting that Alan Moore, the creator of <em>Watchmen</em>, distanced
              himself from all sequels, prequels, and adaptations of his work. Moore did not endorse{" "}
              <em>Doomsday Clock</em>, just as he did not endorse the <em>Before Watchmen</em>{" "}
              prequel series (2012) or the HBO <em>Watchmen</em> series (2019). For purists who
              consider Moore&apos;s original 12 issues the definitive and complete <em>Watchmen</em>{" "}
              story, <em>Doomsday Clock</em> exists in a separate creative category regardless of
              its official canon status.
            </p>
          </section>

          {/* Section 6: Is It Worth Reading? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Tv className="w-5 h-5 sm:w-6 sm:h-6" />
              Is It Worth Reading?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The answer depends on what you are looking for. <em>Doomsday Clock</em> received
              mixed-to-positive reviews from critics and fans alike, and opinion tends to split
              along a clear line: how you feel about it depends largely on whether you approach it
              as a <em>Watchmen</em> sequel or as a DC Comics event.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The art is universally praised. Gary Frank&apos;s detailed, expressive linework and
              Brad Anderson&apos;s coloring are stunning throughout all twelve issues. Frank
              faithfully reproduces the nine-panel grid structure of the original <em>Watchmen</em>{" "}
              while bringing his own sensibility to the DC characters. Visually, the book is a
              triumph and stands among the best-looking DC publications of its era.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The story is ambitious but divisive. Geoff Johns tackles enormous themes &mdash; hope
              versus nihilism, the power of storytelling, the nature of heroism &mdash; and the
              series has genuinely moving moments, particularly in its treatment of Superman as the
              embodiment of optimism in the face of existential despair. But the pacing suffered from
              publication delays, the plot sometimes struggles under the weight of its own ambition,
              and the crossover mechanics can feel contrived.
            </p>
            <p className="text-foreground leading-relaxed">
              The consensus among most readers: <em>Doomsday Clock</em> works better as a DC event
              comic than as a <em>Watchmen</em> sequel. If you go in expecting the thematic depth
              and literary precision of Moore and Gibbons&apos; original, you will likely be
              disappointed. If you approach it as an ambitious, beautifully illustrated DC crossover
              that asks interesting questions about what superheroes mean in a world of real threats,
              you may find a lot to appreciate.
            </p>
          </section>

          {/* Section 7: How the Comic Boosted Awareness of the Real Clock */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              How the Comic Boosted Awareness of the Real Clock
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Here is the irony that ties all of this together: the fictional Doomsday Clock may have
              done more for public awareness of the real one than decades of academic publications
              ever could. Every major <em>Watchmen</em> adaptation has driven a measurable spike in
              public interest in the actual Bulletin of the Atomic Scientists.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              When Zack Snyder&apos;s <em>Watchmen</em> film released in 2009, Google searches for
              the real Doomsday Clock surged. When HBO launched its critically acclaimed{" "}
              <em>Watchmen</em> limited series in 2019 &mdash; which went on to win 11 Emmy Awards
              &mdash; interest in the real clock spiked again. When DC published the{" "}
              <em>Doomsday Clock</em> comic series from 2017 to 2019, the phrase entered mainstream
              cultural conversation in ways the Bulletin&apos;s annual press conferences rarely
              achieve on their own.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              This pattern creates a valuable pipeline. People discover the concept through
              entertainment, search online for more information, and find the real Doomsday Clock.
              A teenager who reads <em>Watchmen</em> and then looks up the actual clock has just been
              introduced to the Bulletin of the Atomic Scientists, nuclear nonproliferation, and
              climate policy in a way that no textbook or classroom lecture could match. Fiction
              serves as a gateway to understanding genuine existential threats.
            </p>
            <p className="text-foreground leading-relaxed">
              The Bulletin itself has acknowledged this relationship. Their communications team
              recognizes that pop culture keeps the Doomsday Clock relevant in public discourse,
              especially among younger audiences who might never encounter the Bulletin through
              traditional channels. The real challenge is not to compete with fiction but to ensure
              that when fiction drives people to search for the Doomsday Clock, they find accurate
              information about the real threats &mdash; and understand why the real clock, currently
              at{" "}
              <span className="text-doom font-semibold">{currentTime.display}</span> to midnight,
              matters far more than any comic book panel.
            </p>
          </section>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-watchmen-comic"
          slugs={[
            "doomsday-clock-comic-vs-real",
            "where-is-doomsday-clock-located",
            "why-is-doomsday-clock-important",
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
