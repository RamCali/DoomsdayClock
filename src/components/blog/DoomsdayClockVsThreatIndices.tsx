import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  AlertTriangle,
  BarChart3,
  Scale,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockVsThreatIndices() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Doomsday Clock vs Other Global Threat Indices: How Do They Compare? | DoomsdayClock.net",
      description:
        "How does the Doomsday Clock compare to the Climate Clock, Global Peace Index, Nuclear Threat Initiative, and other threat assessments? A comprehensive comparison.",
      path: "/blog/doomsday-clock-vs-other-threat-indices",
      newsKeywords:
        "doomsday clock vs climate clock, doomsday clock comparison, global threat indices, nuclear threat initiative, global peace index, climate clock vs doomsday clock",
      publishedTime: "2026-03-15T00:00:00Z",
      modifiedTime: "2026-03-15T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Doomsday Clock vs Other Global Threat Indices: How Do They Compare?",
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
          "https://doomsdayclock.net/blog/doomsday-clock-vs-other-threat-indices",
      },
      description:
        "How does the Doomsday Clock compare to the Climate Clock, Global Peace Index, Nuclear Threat Initiative, and other threat assessments? A comprehensive comparison.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "doomsday clock vs climate clock",
        "doomsday clock comparison",
        "global threat indices",
        "nuclear threat initiative",
        "global peace index",
        "climate clock vs doomsday clock",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 1800,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between the Doomsday Clock and the Climate Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock measures overall existential risk to humanity from nuclear weapons, climate change, and disruptive technologies. The Climate Clock, displayed on buildings in New York City and other cities, counts down the estimated time remaining before the global carbon budget is exhausted and 1.5°C of warming becomes locked in. The Doomsday Clock is a qualitative assessment by a panel of scientists, while the Climate Clock is a quantitative countdown based on emissions data.",
          },
        },
        {
          "@type": "Question",
          name: "How does the Global Peace Index relate to the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Global Peace Index (GPI), published annually by the Institute for Economics and Peace, ranks 163 countries based on measures of peace including conflict, militarization, and societal safety. While it does not directly measure existential risk like the Doomsday Clock, the two indices often align: years when the GPI shows declining global peace tend to coincide with the Doomsday Clock moving closer to midnight.",
          },
        },
        {
          "@type": "Question",
          name: "What is the Nuclear Threat Initiative (NTI) Index?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The NTI Nuclear Security Index assesses nuclear and radiological security conditions in 175 countries and Taiwan. Unlike the Doomsday Clock, which provides a single symbolic time setting, the NTI Index produces detailed country-by-country scores covering theft and sabotage risks for nuclear materials. It is more technical and less symbolic than the Doomsday Clock but provides complementary data.",
          },
        },
        {
          "@type": "Question",
          name: "Why is the Doomsday Clock the most well-known threat index?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock's cultural prominence comes from its simplicity, longevity, and powerful metaphor. The countdown-to-midnight concept is instantly understood worldwide. Its 79-year history makes it the longest-running threat assessment in existence. And its annual announcements generate significant media coverage, giving it reach that more technical indices rarely achieve.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "dc-vs-indices");
    script.textContent = JSON.stringify(articleSchema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "dc-vs-indices-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="dc-vs-indices"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="dc-vs-indices-faq"]'
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
            Doomsday Clock vs Other Threat Indices
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock</span> vs Other Global
            Threat Indices
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 15, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
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
                But how does it compare to other global threat assessments?
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: What the Doomsday Clock Measures */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What the Doomsday Clock Measures
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The{" "}
              <Link
                to="/blog/what-is-the-doomsday-clock"
                className="text-doom hover:underline"
              >
                Doomsday Clock
              </Link>{" "}
              is a symbolic timepiece maintained by the Bulletin of the Atomic
              Scientists since 1947. It represents humanity&apos;s proximity to
              self-inflicted global catastrophe, with midnight symbolizing the
              end of civilization. The clock&apos;s position is set annually by
              the Bulletin&apos;s Science and Security Board, a panel of
              experts who evaluate three categories of existential threat:
              nuclear weapons, climate change, and disruptive technologies
              including AI.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              What makes the Doomsday Clock distinctive is its approach: it
              produces a single, highly symbolic output &mdash; a time setting
              &mdash; that captures the board&apos;s qualitative judgment about
              the overall state of existential risk. It is not a quantitative
              index with scores and rankings. It is a metaphor translated into
              a number, designed to communicate urgency to the broadest
              possible audience.
            </p>
            <p className="text-foreground leading-relaxed">
              At{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, the clock stands at its closest-ever position
              &mdash; but it is far from the only tool that attempts to measure
              global threats. Several other indices and assessments offer
              complementary perspectives. Understanding how they differ helps
              clarify what the Doomsday Clock uniquely provides and where its
              limitations lie.
            </p>
          </section>

          {/* Section 2: The Climate Clock */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Climate Clock
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Climate Clock is a large-scale public art installation and
              digital countdown that shows the estimated time remaining before
              the world exhausts its carbon budget for limiting global warming
              to 1.5&deg;C above pre-industrial levels. First displayed on the
              Metronome building in New York City&apos;s Union Square in
              September 2020, it has since been replicated in cities worldwide
              including Berlin, Seoul, and Glasgow.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Unlike the Doomsday Clock, the Climate Clock is a quantitative
              countdown derived from hard data. It calculates the remaining
              carbon budget based on current global emissions rates, drawing on
              data from the IPCC and the Mercator Research Institute on Global
              Commons and Climate Change. As emissions continue, the countdown
              decreases in real time. As of early 2026, the Climate Clock
              shows roughly five years remaining before the 1.5&deg;C carbon
              budget is exhausted at current rates.
            </p>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 my-4">
              <h4 className="font-semibold text-foreground mb-2">
                Key Differences from the Doomsday Clock
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <strong>Scope:</strong> The Climate Clock measures only
                  climate change; the Doomsday Clock covers nuclear, climate,
                  and technology risks
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <strong>Methodology:</strong> The Climate Clock uses
                  quantitative emissions data; the Doomsday Clock uses expert
                  qualitative judgment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <strong>Update frequency:</strong> The Climate Clock updates
                  continuously in real time; the Doomsday Clock is set once per
                  year
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <strong>What midnight means:</strong> The Climate Clock
                  reaches zero when the carbon budget is exhausted; the
                  Doomsday Clock&apos;s midnight represents civilizational
                  catastrophe
                </li>
              </ul>
            </div>
            <p className="text-foreground leading-relaxed">
              The Climate Clock and the Doomsday Clock are complementary rather
              than competing. The Climate Clock provides precision about one
              specific threat; the Doomsday Clock provides a holistic view of
              the overall existential risk landscape. Both serve as public
              communication tools, but they operate at different levels of
              specificity.
            </p>
          </section>

          {/* Section 3: Global Peace Index */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              <BarChart3 className="w-6 h-6 inline mr-2" />
              Global Peace Index (GPI)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Global Peace Index, published annually since 2007 by the
              Institute for Economics and Peace (IEP), ranks 163 countries
              based on 23 indicators of peace. These indicators span three
              domains: the level of societal safety and security, the extent
              of ongoing domestic and international conflict, and the degree
              of militarization. Each country receives a score, and the
              aggregate data provides a snapshot of global peacefulness.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The GPI does not measure existential risk directly. A country
              can score poorly on the GPI due to high incarceration rates or
              domestic violence without any implication for civilizational
              survival. However, the GPI&apos;s aggregate trends often track
              with the Doomsday Clock&apos;s direction. The GPI has shown
              deteriorating global peace for much of the past decade, with the
              2025 report identifying the highest levels of global conflict
              since the index began. This period coincides with the Doomsday
              Clock&apos;s movement from 100 seconds in 2020 to its current
              record-close position.
            </p>
            <p className="text-foreground leading-relaxed">
              Where the GPI excels is granularity. While the Doomsday Clock
              produces a single global number, the GPI provides country-level
              data that researchers and policymakers can use to identify
              specific regions of concern. It also quantifies the economic
              cost of violence, estimating that global violence cost the
              world economy over $17 trillion in 2024. The Doomsday Clock
              does not attempt this kind of granular analysis &mdash; its
              power lies in synthesis rather than detail.
            </p>
          </section>

          {/* Section 4: Nuclear Threat Initiative Index */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Nuclear Threat Initiative (NTI) Index
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The NTI Nuclear Security Index, published biennially by the
              Nuclear Threat Initiative in partnership with the Economist
              Intelligence Unit, assesses nuclear and radiological security
              conditions in 175 countries and Taiwan. It evaluates the
              security of nuclear materials against theft and sabotage,
              covering areas such as physical protection of facilities,
              regulatory frameworks, and international commitments.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The NTI Index is the most technically specialized of the indices
              considered here. It does not measure the overall existential
              threat landscape &mdash; it drills deep into one specific aspect
              of nuclear risk: the security of materials. This makes it an
              invaluable resource for nuclear policy experts and governments
              but less accessible to the general public than the Doomsday
              Clock&apos;s simple metaphor.
            </p>
            <p className="text-foreground leading-relaxed">
              The NTI Index and the Doomsday Clock share a common concern
              &mdash; nuclear risk &mdash; but approach it from opposite
              directions. The Doomsday Clock asks &quot;how close is humanity
              to catastrophe?&quot; and factors in nuclear risk as one
              component. The NTI Index asks &quot;how secure are nuclear
              materials in each country?&quot; and provides granular,
              actionable data. Both are essential perspectives, but they serve
              different audiences and purposes.
            </p>
          </section>

          {/* Section 5: Global Catastrophic Risk Index */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Global Catastrophic Risk Assessments
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Beyond the well-known indices, several academic and research
              institutions produce their own assessments of global
              catastrophic risk. The Global Challenges Foundation, based in
              Stockholm, publishes an annual report on global catastrophic
              risks that covers nuclear war, climate change, pandemics,
              ecological collapse, asteroid impact, supervolcanic eruption,
              and emerging technologies. Cambridge University&apos;s Centre
              for the Study of Existential Risk (CSER) and Oxford&apos;s
              Future of Humanity Institute (FHI) have produced influential
              research on existential risk frameworks.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              These academic assessments tend to be more methodologically
              rigorous than the Doomsday Clock, often employing formal risk
              analysis frameworks with probability estimates and uncertainty
              ranges. They also tend to cover a wider range of threats,
              including some &mdash; such as asteroid impact and
              supervolcanoes &mdash; that the Doomsday Clock does not
              address because they are not influenced by human policy
              decisions.
            </p>
            <p className="text-foreground leading-relaxed">
              However, these academic assessments lack the Doomsday
              Clock&apos;s public communication power. A 200-page report on
              global catastrophic risk, however rigorous, will never achieve
              the cultural penetration of a single number expressed as time to
              midnight. The Doomsday Clock succeeds as a communication tool
              precisely because it sacrifices nuance for impact &mdash; a
              tradeoff that academic assessments cannot and should not make.
            </p>
          </section>

          {/* Section 6: Comparison Table */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              <Scale className="w-6 h-6 inline mr-2" />
              How They All Compare
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              The following table summarizes the key differences between the
              major global threat indices and the Doomsday Clock.
            </p>
            <div className="overflow-x-auto -mx-2">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left p-3 text-foreground font-semibold">
                      Index
                    </th>
                    <th className="text-left p-3 text-foreground font-semibold">
                      Scope
                    </th>
                    <th className="text-left p-3 text-foreground font-semibold">
                      Methodology
                    </th>
                    <th className="text-left p-3 text-foreground font-semibold">
                      Frequency
                    </th>
                    <th className="text-left p-3 text-foreground font-semibold">
                      Since
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-white/10 bg-doom/5">
                    <td className="p-3 font-medium text-doom">
                      Doomsday Clock
                    </td>
                    <td className="p-3">
                      Nuclear, climate, technology
                    </td>
                    <td className="p-3">Expert qualitative judgment</td>
                    <td className="p-3">Annual</td>
                    <td className="p-3">1947</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3 font-medium text-foreground">
                      Climate Clock
                    </td>
                    <td className="p-3">Climate change only</td>
                    <td className="p-3">Quantitative (emissions data)</td>
                    <td className="p-3">Real-time</td>
                    <td className="p-3">2020</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3 font-medium text-foreground">
                      Global Peace Index
                    </td>
                    <td className="p-3">
                      Conflict, militarization, safety
                    </td>
                    <td className="p-3">Quantitative (23 indicators)</td>
                    <td className="p-3">Annual</td>
                    <td className="p-3">2007</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3 font-medium text-foreground">
                      NTI Nuclear Security Index
                    </td>
                    <td className="p-3">Nuclear materials security</td>
                    <td className="p-3">
                      Quantitative (country scores)
                    </td>
                    <td className="p-3">Biennial</td>
                    <td className="p-3">2012</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-3 font-medium text-foreground">
                      Global Challenges Foundation
                    </td>
                    <td className="p-3">
                      All catastrophic risks
                    </td>
                    <td className="p-3">
                      Academic risk analysis
                    </td>
                    <td className="p-3">Annual</td>
                    <td className="p-3">2016</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 7: Why the Doomsday Clock Stands Apart */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why the Doomsday Clock Stands Apart
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Despite the existence of more quantitative and technically
              rigorous indices, the Doomsday Clock remains the world&apos;s
              most recognized and influential threat assessment. Its annual
              announcement generates global media coverage, is discussed in
              legislative bodies, and is referenced in academic papers, films,
              and popular culture. No other threat index comes close to its
              cultural footprint.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Several factors explain this staying power. First is
              <strong> simplicity</strong>. The countdown-to-midnight metaphor
              is universally understood. You do not need to know what a
              &quot;carbon budget&quot; is or how the GPI weights its 23
              indicators. You only need to understand that closer to midnight
              means more danger. This simplicity is the Doomsday Clock&apos;s
              greatest strength as a communication tool.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Second is <strong>longevity</strong>. The Doomsday Clock has been
              tracking global risk since 1947 &mdash; 79 years of continuous
              assessment that spans the entire nuclear age. No other threat
              index has anything approaching this historical depth. The
              clock&apos;s{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-doom hover:underline"
              >
                timeline of changes
              </Link>{" "}
              provides a unique longitudinal record of how humanity&apos;s
              relationship with existential risk has evolved over nearly eight
              decades.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Third is <strong>authority</strong>. The clock is set by a board
              that includes Nobel laureates and leading researchers in nuclear
              policy, climate science, and technology. This expert authority
              gives the Doomsday Clock a credibility that purely data-driven
              indices, which can be challenged on methodological grounds,
              sometimes lack.
            </p>
            <p className="text-foreground leading-relaxed">
              Finally, there is the power of <strong>metaphor</strong>. The
              idea of a clock counting down to midnight taps into something
              primal &mdash; the sense that time is running out, that humanity
              is on a deadline. This emotional resonance is why the Doomsday
              Clock appears in Hollywood films, comic books like{" "}
              <em>Watchmen</em>, and protest signs around the world. It has
              transcended its origins as a scientific assessment to become a
              cultural symbol of existential urgency. At{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, that urgency has never been greater.
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
                  What is the difference between the Doomsday Clock and the
                  Climate Clock?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Doomsday Clock measures overall existential risk to
                  humanity from nuclear weapons, climate change, and disruptive
                  technologies. The Climate Clock counts down the estimated
                  time remaining before the global carbon budget for 1.5&deg;C
                  of warming is exhausted. The Doomsday Clock uses expert
                  qualitative judgment; the Climate Clock uses quantitative
                  emissions data and updates in real time.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  How does the Global Peace Index relate to the Doomsday Clock?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Global Peace Index ranks 163 countries based on measures
                  of peace including conflict, militarization, and societal
                  safety. While it does not directly measure existential risk
                  like the Doomsday Clock, the two indices often align: years
                  when the GPI shows declining global peace tend to coincide
                  with the Doomsday Clock moving closer to midnight.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  What is the Nuclear Threat Initiative (NTI) Index?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The NTI Nuclear Security Index assesses nuclear and
                  radiological security conditions in 175 countries and Taiwan.
                  Unlike the Doomsday Clock, which provides a single symbolic
                  time setting, the NTI Index produces detailed
                  country-by-country scores covering theft and sabotage risks
                  for nuclear materials. It is more technical and less symbolic
                  but provides complementary data on nuclear security.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Why is the Doomsday Clock the most well-known threat index?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The Doomsday Clock&apos;s cultural prominence comes from its
                  simplicity, longevity, and powerful metaphor. The
                  countdown-to-midnight concept is instantly understood
                  worldwide. Its 79-year history makes it the longest-running
                  threat assessment in existence. And its annual announcements
                  generate significant media coverage, giving it reach that
                  more technical indices rarely achieve.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Track the Doomsday Clock in Real Time
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See the current clock time, interactive timeline, and countdown to
            the next announcement.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View Live Clock
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Link
            to="/blog/what-is-the-doomsday-clock"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              What Is the Doomsday Clock?
            </h4>
            <p className="text-sm text-muted-foreground">
              The complete guide to the Doomsday Clock &mdash; what it is, how
              it works, and why it matters.
            </p>
          </Link>
          <Link
            to="/blog/doomsday-clock-history-timeline"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              Doomsday Clock History: Every Change from 1947 to 2026
            </h4>
            <p className="text-sm text-muted-foreground">
              The full timeline of the Doomsday Clock across nearly eight
              decades.
            </p>
          </Link>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-vs-other-threat-indices"
          slugs={[
            "what-is-the-doomsday-clock",
            "doomsday-clock-climate-change",
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
