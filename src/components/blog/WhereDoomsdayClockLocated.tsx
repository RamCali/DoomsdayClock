import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  MapPin,
  Building2,
  Globe,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WhereDoomsdayClockLocated() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Where Is the Doomsday Clock Located? The Physical Clock Explained | DoomsdayClock.net",
      description:
        "Where is the Doomsday Clock physically located? Learn about the Bulletin of the Atomic Scientists headquarters in Chicago, where the clock is kept, and how to visit.",
      path: "/blog/where-is-doomsday-clock-located",
      newsKeywords:
        "where is doomsday clock located, where is doomsday clock kept, doomsday clock location, doomsday clock chicago, bulletin of atomic scientists headquarters",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Where Is the Doomsday Clock Located? The Physical Clock Explained",
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
          "https://doomsdayclock.net/blog/where-is-doomsday-clock-located",
      },
      description:
        "Where is the Doomsday Clock physically located? Learn about the Bulletin of the Atomic Scientists headquarters in Chicago, where the clock is kept, and how to visit.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "where is doomsday clock located",
        "where is doomsday clock kept",
        "doomsday clock location",
        "doomsday clock chicago",
        "bulletin of atomic scientists headquarters",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 1800,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "where-located");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="where-located"]'
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
            Where Is the Doomsday Clock Located
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <MapPin className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Where Is the{" "}
            <span className="text-doom">Doomsday Clock</span> Located?
            The Physical Clock Explained
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
              One of the most frequently asked questions about the
              Doomsday Clock is deceptively simple: where is it? People
              imagine a grand, ominous timepiece ticking away in a
              vault somewhere, counting down humanity's remaining
              moments. The reality is more nuanced — and in many ways,
              more interesting — than any single physical object could
              be. The Doomsday Clock is primarily a symbol, a concept
              that lives in the collective imagination of the world,
              though it has deep roots in a specific city, a specific
              institution, and a specific moment in scientific history.
            </p>
            <p className="text-foreground leading-relaxed">
              Currently set at {currentTime.display} to midnight, the
              clock's power comes not from gears and hands but from
              what it represents: the consensus judgment of leading
              scientists about how close humanity stands to
              self-inflicted catastrophe. Understanding where the clock
              "lives" means understanding the organization behind it
              and the history that gave it birth.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              Not a Single Physical Clock
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock as the world knows it began not as a
              physical timepiece but as a magazine illustration. In
              June 1947, artist{" "}
              <strong>Martyl Langsdorf</strong> — wife of Manhattan
              Project physicist Alexander Langsdorf Jr. — was asked to
              design the cover for the{" "}
              <em>Bulletin of the Atomic Scientists</em>. She created a
              stark, arresting image of a clock face showing seven
              minutes to midnight, using the universal symbol of a
              ticking clock to convey the urgency of the nuclear threat.
              That single illustration became one of the most recognized
              icons of the twentieth century.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              There is no single "Doomsday Clock" ticking away in a
              basement or behind glass in a museum. The clock is, at
              its core, a metaphor — a visual shorthand for a complex
              scientific assessment of global existential risk. When
              the Bulletin announces that the clock has moved forward
              or backward, they are updating a symbol, not adjusting a
              mechanical device. The power of the Doomsday Clock lies
              precisely in this abstraction: it translates enormously
              complex threat assessments into a simple, universally
              understood image that transcends language and culture.
            </p>
            <p className="text-foreground leading-relaxed">
              That said, the clock is far from imaginary. Physical
              representations of the clock have been created for press
              conferences, exhibitions, and media appearances over the
              decades. These tangible versions serve as props for the
              annual announcement and as visual anchors for news
              coverage, but none of them is "the" Doomsday Clock in
              the way that a particular watch belongs to a particular
              person. The icon is the clock.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              The Bulletin's Home: Chicago, Illinois
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              If the Doomsday Clock has a hometown, it is{" "}
              <strong>Chicago, Illinois</strong>. The Bulletin of the
              Atomic Scientists — the organization that created and
              maintains the clock — is headquartered at the{" "}
              <strong>University of Chicago</strong>. This is no
              coincidence. The university played a pivotal role in the
              dawn of the nuclear age: on December 2, 1942, beneath
              the stands of the university's Stagg Field stadium,
              physicist Enrico Fermi and his team achieved the world's
              first self-sustaining nuclear chain reaction as part of
              the Manhattan Project.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That experiment, known as Chicago Pile-1, proved that
              nuclear fission could be controlled — and, by extension,
              weaponized. The scientists who witnessed it understood
              immediately that they had unlocked a force capable of
              destroying civilization. Many of them, haunted by this
              knowledge, went on to found the Bulletin in 1945 as a
              way to warn the public and advocate for arms control.
              The Bulletin's offices on the University of Chicago
              campus became the intellectual home of the Doomsday
              Clock, where the organization's leadership and its
              Science and Security Board discuss global threats and
              make the annual decision about the clock's setting.
            </p>
            <p className="text-foreground leading-relaxed">
              Chicago's connection to the clock runs deeper than mere
              geography. The city's scientific community provided the
              early talent and moral urgency that gave the Bulletin
              its credibility. Albert Einstein, who lent his support
              to the Bulletin from its earliest days, had corresponded
              extensively with Chicago-based physicists. The university
              remains a center for nuclear policy research, and the
              Bulletin continues to draw on this academic ecosystem
              for expertise and institutional support.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              Where You Can See the Doomsday Clock
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While there is no permanent Doomsday Clock exhibit open
              to the general public, physical representations of the
              clock have appeared in a variety of settings over the
              years. The most prominent appearances occur during the
              Bulletin's annual press conferences, where a physical
              clock face is displayed as a backdrop for the
              announcement. Board members stand beside the clock as
              they unveil the new time, creating the dramatic imagery
              that news organizations around the world rely on for
              their coverage.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Beyond press conferences, the Doomsday Clock has been
              featured in museum exhibitions and art installations.
              The clock's iconic imagery has appeared at science
              museums, peace museums, and galleries exploring themes of
              nuclear history and existential risk. Artists and
              curators have created their own interpretations of the
              clock, ranging from large-scale sculptures to interactive
              digital installations that allow visitors to explore how
              the clock has moved over its nearly eight-decade history.
            </p>
            <p className="text-foreground leading-relaxed">
              The most accessible way to see the Doomsday Clock today
              is through the Bulletin's official website at{" "}
              <strong>thebulletin.org</strong>, where the current clock
              setting is prominently displayed alongside the detailed
              statement explaining the reasoning behind the most
              recent decision. The website also hosts an interactive
              timeline showing every clock change since 1947, archival
              materials, and the full text of each year's announcement
              statement. For most people, the Bulletin's digital
              presence is the primary way they encounter the clock.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
              The Annual Announcement Ceremony
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Each January, the Bulletin of the Atomic Scientists hosts
              a press conference to announce whether the Doomsday Clock
              has moved. This event has traditionally been held at the{" "}
              <strong>National Press Club in Washington, D.C.</strong>,
              a choice that underscores the clock's political
              significance and ensures maximum media coverage. The
              National Press Club, located just blocks from the White
              House, is a natural venue for an announcement intended
              to reach policymakers and the global public alike.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The ceremony follows a well-established format. Members
              of the Science and Security Board take the stage and
              deliver remarks summarizing the year's most significant
              developments in nuclear risk, climate change, and
              disruptive technologies. The tension builds as the
              audience waits for the key moment: the unveiling of the
              new clock setting. A physical clock face — often draped
              or covered before the reveal — is adjusted to show the
              updated time, and the board's chair reads the official
              statement explaining the decision.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              In recent years, the announcement has been livestreamed
              on the Bulletin's website and social media channels,
              making it accessible to a global audience in real time.
              The livestream typically draws tens of thousands of
              viewers, and clips from the announcement spread rapidly
              across news outlets and social media platforms. Major
              wire services, television networks, and newspapers from
              every continent cover the event, making the Doomsday
              Clock announcement one of the most widely reported
              science-related news events of each year.
            </p>
            <p className="text-foreground leading-relaxed">
              The January timing is deliberate. By announcing early in
              the year, the Bulletin sets a framework for public
              discussion of global risks that carries through the
              months ahead. The announcement often coincides with
              other January events in the policy calendar, amplifying
              its impact and ensuring that existential threats remain
              part of the broader conversation about national and
              international priorities.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
              Can You Visit the Doomsday Clock?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              This is perhaps the most common question people ask after
              learning about the clock, and the honest answer is: not
              in the way you might hope. There is no museum, visitor
              center, or public exhibit where you can walk up to "the"
              Doomsday Clock and see it ticking. The Bulletin of the
              Atomic Scientists is a nonprofit policy and media
              organization, not a museum or tourist attraction. Its
              offices are working spaces, not public galleries.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              That said, a visit to the{" "}
              <strong>University of Chicago</strong> campus offers a
              meaningful connection to the clock's origins. The site
              of the Chicago Pile-1 experiment — where the nuclear age
              began — is marked by a sculpture called{" "}
              <em>Nuclear Energy</em> by Henry Moore, located at the
              corner of South Ellis Avenue and East 57th Street.
              Unveiled in 1967 on the 25th anniversary of Fermi's
              achievement, the bronze sculpture is a haunting and
              powerful memorial to the moment that ultimately inspired
              the creation of the Doomsday Clock. The campus itself is
              open to visitors and offers a tangible link to the
              scientific community that gave birth to both nuclear
              weapons and the movement to control them.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For those who want to engage with the Doomsday Clock
              more directly, the best avenues are digital. The
              Bulletin's website provides extensive resources,
              including its peer-reviewed journal, opinion pieces by
              board members and experts, and detailed archives of
              every clock announcement since 1947. The organization
              also hosts public events, webinars, and panel
              discussions throughout the year, many of which are free
              and open to online audiences. Following the Bulletin on
              social media provides regular updates on the global
              threats that inform the clock's setting.
            </p>
            <p className="text-foreground leading-relaxed">
              Ultimately, the Doomsday Clock's location is everywhere
              and nowhere. It exists wherever people are paying
              attention to the existential risks facing humanity —
              in classrooms, newsrooms, policy briefings, and living
              rooms around the world. Its lack of a single physical
              home is, in a sense, its greatest strength: the clock
              belongs to everyone, and its warning is directed at all
              of us. The next time the Bulletin announces a new
              setting, expected in{" "}
              <span className="text-doom font-semibold">
                {currentTime.nextUpdate}
              </span>
              , the clock will be wherever you are when you hear
              the news.
            </p>
          </section>
        </div>

        {/* Internal cross-links */}
        <div className="mt-8 doom-card p-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Related Articles
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              to="/blog/who-controls-doomsday-clock"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                Who Controls the Doomsday Clock?
              </h4>
              <p className="text-xs text-muted-foreground">
                Inside the Bulletin of the Atomic Scientists and the
                board that decides the clock's time.
              </p>
            </Link>
            <Link
              to="/blog/doomsday-clock-history-timeline"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                Doomsday Clock History Timeline
              </h4>
              <p className="text-xs text-muted-foreground">
                Every movement of the clock from 1947 to today,
                with the events that drove each change.
              </p>
            </Link>
            <Link
              to="/blog/what-happens-doomsday-clock-midnight"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
            >
              <h4 className="font-medium text-foreground group-hover:text-doom transition-colors mb-1">
                What Happens If the Clock Hits Midnight?
              </h4>
              <p className="text-xs text-muted-foreground">
                Exploring what the clock's ultimate warning would
                mean for civilization.
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
          </div>
        </div>

        <RelatedArticles
          currentSlug="where-is-doomsday-clock-located"
          slugs={[
            "who-controls-doomsday-clock",
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
