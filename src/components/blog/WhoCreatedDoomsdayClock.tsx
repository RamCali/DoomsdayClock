import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Users,
  Landmark,
  Pen,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WhoCreatedDoomsdayClock() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Who Created the Doomsday Clock? The Founders Behind the Symbol | DoomsdayClock.net",
      description:
        "Who founded and created the Doomsday Clock? The story of the Manhattan Project scientists, the Bulletin of the Atomic Scientists, and artist Martyl Langsdorf.",
      path: "/blog/who-created-doomsday-clock",
      newsKeywords:
        "who created doomsday clock, who founded doomsday clock, who invented doomsday clock, who made doomsday clock, doomsday clock creator, martyl langsdorf",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Who Created the Doomsday Clock? The Founders Behind the Symbol",
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
          "https://doomsdayclock.net/blog/who-created-doomsday-clock",
      },
      description:
        "Who founded and created the Doomsday Clock? The story of the Manhattan Project scientists, the Bulletin of the Atomic Scientists, and artist Martyl Langsdorf.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "who created doomsday clock",
        "who founded doomsday clock",
        "who invented doomsday clock",
        "who made doomsday clock",
        "doomsday clock creator",
        "martyl langsdorf",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2000,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "who-created");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="who-created"]'
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
            Who Created the Doomsday Clock
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <Landmark className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Who Created the{" "}
            <span className="text-doom">Doomsday Clock?</span> The
            Founders Behind the Symbol
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
              The Doomsday Clock is the most recognized symbol of
              existential risk in the world — a stark visual warning that
              humanity stands perilously close to self-destruction.
              Currently set at {currentTime.display} to midnight, it has
              appeared on magazine covers, in presidential briefings, and
              across countless news broadcasts for nearly eight decades.
              But who actually created it? The answer involves a group of
              guilt-stricken nuclear physicists, a visionary artist, and
              a university campus where the atomic age was born.
            </p>
            <p className="text-foreground leading-relaxed">
              The story of the Doomsday Clock's creation is inseparable
              from the story of the atomic bomb itself. The same people
              who helped unleash nuclear energy on the world became its
              most urgent voices of caution — and the symbol they created
              continues to shape how we think about humanity's survival.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />
              Born from the Bomb
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock was created by scientists who had worked
              on the Manhattan Project — the secret wartime program that
              developed the first nuclear weapons. When the United States
              dropped atomic bombs on Hiroshima on August 6, 1945, and
              Nagasaki three days later, the world witnessed destruction
              on a scale previously unimaginable. Entire cities were
              obliterated in seconds. Tens of thousands of civilians died
              instantly, with tens of thousands more perishing in the
              weeks and months that followed from radiation sickness and
              injuries.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For the scientists who had made these weapons possible, the
              bombings were a moment of profound moral reckoning. Many
              had joined the Manhattan Project believing they were racing
              against Nazi Germany to develop the bomb first. When
              Germany surrendered in May 1945, the original justification
              evaporated — yet the project continued, and the bombs were
              used against Japan. The gap between scientific achievement
              and its devastating human consequences haunted these
              researchers.
            </p>
            <p className="text-foreground leading-relaxed">
              This guilt and sense of responsibility drove many Manhattan
              Project veterans to become advocates for nuclear arms
              control. They believed that if the public understood the
              true nature of the weapons they had created, democratic
              societies would demand restraint. Out of this conviction
              came both the Bulletin of the Atomic Scientists and,
              eventually, the Doomsday Clock — a symbol designed to
              communicate nuclear danger in terms anyone could
              understand.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              The Bulletin of the Atomic Scientists
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Bulletin of the Atomic Scientists was founded in
              December 1945 at the University of Chicago by two
              scientists:{" "}
              <strong>Hyman Goldsmith</strong> and{" "}
              <strong>Eugene Rabinowitch</strong>. Originally called the
              "Bulletin of the Atomic Scientists of Chicago," it began as
              a simple mimeographed newsletter circulated among
              physicists who had worked on the bomb. The publication was
              modest — just a few pages stapled together and passed from
              hand to hand in university hallways and laboratory break
              rooms.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The newsletter's purpose was straightforward but urgent: to
              inform fellow scientists and, increasingly, the general
              public about the dangers posed by nuclear weapons. Goldsmith
              and Rabinowitch believed that the scientific community had
              a unique obligation to speak out. They had the technical
              knowledge to understand what nuclear weapons could do, and
              they felt duty-bound to share that understanding with a
              world that was only beginning to grasp the implications of
              the atomic age.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Albert Einstein was an early and prominent supporter of the
              Bulletin. His famous letter to President Roosevelt in 1939
              had helped launch the Manhattan Project, and he felt a
              deep personal responsibility for its consequences. Einstein
              lent his name, his prestige, and his voice to the
              Bulletin's mission, helping to elevate it from an
              obscure physics newsletter to a publication with national
              and eventually international reach.
            </p>
            <p className="text-foreground leading-relaxed">
              Over the years, the Bulletin evolved from that humble
              newsletter into a respected journal of science and global
              security. It expanded its scope beyond nuclear weapons to
              encompass climate change, biosecurity, and emerging
              technologies. But its core mission — bridging the gap
              between scientific knowledge and public understanding of
              existential threats — has remained constant since 1945.
              Today, the Bulletin is headquartered in Chicago and
              continues to publish analysis, host events, and maintain
              the Doomsday Clock as its most visible and influential
              project.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Pen className="w-5 h-5 sm:w-6 sm:h-6" />
              Martyl Langsdorf: The Artist Who Designed the Clock
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The iconic Doomsday Clock image was created by artist{" "}
              <strong>Martyl Langsdorf</strong>, known professionally
              simply as <strong>Martyl</strong>, for the June 1947 cover
              of the Bulletin of the Atomic Scientists. Martyl was a
              landscape painter based in Chicago and the wife of
              Manhattan Project physicist{" "}
              <strong>Alexander Langsdorf Jr.</strong>, who had worked on
              the development of nuclear reactors during the war. Through
              her husband, Martyl was intimately connected to the
              community of scientists grappling with the moral aftermath
              of the bomb.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              When asked to design a cover for the Bulletin, Martyl made
              a striking artistic choice: rather than depicting the full
              face of a clock, she showed only the upper-left quadrant,
              with the minute hand positioned near midnight. The design
              was elegant in its simplicity — no numbers, no second hand,
              just the stark geometry of clock hands approaching the top
              of the hour. The color scheme was austere: black and white
              with an orange background, creating a sense of urgency that
              needed no words to convey.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Martyl set the initial time at seven minutes to midnight.
              This was an aesthetic decision, not a scientific one — she
              later explained that she chose the position because it
              "looked good" on the cover. There was no formal methodology
              or threat assessment behind the original placement. The
              clock's power came not from its precision but from its
              metaphor: midnight as catastrophe, the minute hand as
              humanity's proximity to it.
            </p>
            <p className="text-foreground leading-relaxed">
              What was intended as a one-time magazine cover illustration
              became the most recognizable symbol of nuclear danger in
              history. Martyl could not have foreseen that her design
              would endure for nearly eight decades, outlasting the Cold
              War, surviving the fall of the Soviet Union, and adapting
              to encompass threats that did not exist when she first put
              pen to paper. She continued to paint and exhibit her work
              until her death in 2013 at the age of 96, but nothing she
              created matched the cultural impact of that single
              magazine cover from 1947.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
              Eugene Rabinowitch: The First Clock Setter
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              After Martyl created the clock's visual design, the
              question arose: who would decide when to move the hands?
              That responsibility fell to{" "}
              <strong>Eugene Rabinowitch</strong>, the Russian-born
              American biophysicist who had co-founded the Bulletin.
              Rabinowitch became the sole arbiter of the clock's
              position, making decisions about when to advance or retreat
              the minute hand based on his own assessment of global
              nuclear danger.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Rabinowitch was uniquely qualified for this role. Born in
              St. Petersburg in 1901, he had studied chemistry in Berlin
              before fleeing Nazi Germany in 1933. He eventually settled
              in the United States, where he became a professor at the
              University of Illinois. His background gave him an unusual
              combination of scientific expertise and geopolitical
              awareness — he understood both the physics of nuclear
              weapons and the political dynamics that governed their use.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For over two decades, Rabinowitch made these decisions
              alone. He moved the clock forward as the Cold War
              intensified and back when diplomatic breakthroughs offered
              hope. The first major move came in 1949, when the Soviet
              Union tested its first nuclear weapon — Rabinowitch
              advanced the clock from seven minutes to three minutes to
              midnight. He later moved it back to twelve minutes in 1963
              after the United States and the Soviet Union signed the
              Partial Nuclear Test Ban Treaty, the furthest from midnight
              the clock had been up to that point.
            </p>
            <p className="text-foreground leading-relaxed">
              Rabinowitch continued as the clock's sole decision-maker
              until his death in 1973. After his passing, the
              responsibility was transferred to the Bulletin's Science
              and Security Board, a panel of experts who now deliberate
              collectively to set the clock each year. The transition
              from one person's judgment to a board-level process
              reflected the growing complexity of global threats and the
              recognition that no single individual could adequately
              assess all the factors involved.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4 flex items-center gap-2">
              <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />
              The Manhattan Project Connection
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The University of Chicago was not just the birthplace of
              the Bulletin — it was central to the Manhattan Project
              itself. On December 2, 1942, physicist{" "}
              <strong>Enrico Fermi</strong> and his team achieved the
              first self-sustaining nuclear chain reaction beneath the
              stands of Stagg Field, the university's abandoned football
              stadium. This experiment, known as Chicago Pile-1, proved
              that a controlled nuclear reaction was possible and paved
              the way for both nuclear power and nuclear weapons.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Many of the Bulletin's founders had participated in or were
              directly adjacent to this work. They had walked the same
              hallways, attended the same seminars, and collaborated in
              the same laboratories where the fundamental science of
              nuclear fission was being translated into weapons of mass
              destruction. The connection between creating the bomb and
              creating its most famous warning symbol is deeply ironic
              and deeply human — the same institution that helped make
              nuclear annihilation possible also produced the most
              enduring call for nuclear restraint.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Chicago's role extended beyond the initial chain reaction.
              The university's Metallurgical Laboratory, or "Met Lab,"
              was one of the key research sites for the Manhattan
              Project, employing hundreds of scientists and engineers who
              contributed to the development of plutonium production
              methods. When the war ended, many of these researchers
              stayed at Chicago and channeled their expertise into arms
              control advocacy rather than weapons development.
            </p>
            <p className="text-foreground leading-relaxed">
              This geographic and intellectual concentration made Chicago
              the natural home for the Bulletin and the Doomsday Clock.
              The scientists who created both had literally worked on the
              bomb — they were not outside critics but insiders who
              understood the technology at its deepest level. Their
              warnings carried the authority of firsthand experience,
              and that authority continues to lend weight to the
              Doomsday Clock today.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              A Legacy That Endures
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Nearly eighty years after Martyl Langsdorf sketched a clock
              face for a small scientific newsletter, the Doomsday Clock
              remains the most recognized symbol of existential risk
              worldwide. It has been referenced by presidents and prime
              ministers, featured in Hollywood films and comic books, and
              cited in United Nations debates. From a simple magazine
              illustration to a global icon, the clock has far exceeded
              anything its creators could have imagined.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The founders' original vision — to educate the public about
              nuclear dangers so that democratic societies could make
              informed decisions about their survival — has proven
              remarkably durable. The threats have evolved: climate
              change, artificial intelligence, and engineered pandemics
              now join nuclear weapons on the list of existential risks.
              But the fundamental insight behind the clock remains the
              same. Complex, abstract dangers become real and urgent when
              they are expressed as a countdown to midnight.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock also stands as a testament to the power
              of scientists engaging with the public. Goldsmith,
              Rabinowitch, Einstein, and their colleagues refused to
              retreat into their laboratories after the war. They
              believed that scientific knowledge carried civic
              responsibility, and they acted on that belief by creating
              institutions and symbols that brought expert knowledge to
              public attention. The Bulletin and the clock represent one
              of the most successful examples of science communication
              in history.
            </p>
            <p className="text-foreground leading-relaxed">
              Today, as the clock stands at{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight — the closest it has ever been — the legacy of
              its creators carries a particular urgency. The Manhattan
              Project scientists who founded the Bulletin understood that
              the weapons they had built could end civilization. The
              clock they created continues to remind us that this danger
              has not passed, and that the responsibility for pulling the
              hands back from midnight belongs to every generation,
              including our own.
            </p>
          </section>
        </div>

        <RelatedArticles
          currentSlug="who-created-doomsday-clock"
          slugs={[
            "who-controls-doomsday-clock",
            "where-is-doomsday-clock-located",
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
