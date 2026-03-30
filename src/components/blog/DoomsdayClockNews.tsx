import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Bell, TrendingUp, Globe } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function DoomsdayClockNews() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Doomsday Clock News & Latest Updates (March 2026) | DoomsdayClock.net",
      description:
        "The latest Doomsday Clock news and updates for March 2026. The clock moved to 85 seconds to midnight — the closest ever. Get the latest developments affecting the clock.",
      path: "/blog/doomsday-clock-news-updates",
      newsKeywords:
        "doomsday clock news, doomsday clock update, doomsday clock latest, doomsday clock announcement, doomsday clock 2026 update, doomsday clock news today",
      publishedTime: "2026-03-15T00:00:00Z",
      modifiedTime: "2026-03-15T00:00:00Z",
      section: "News",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Doomsday Clock News & Latest Updates (March 2026)",
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
          "https://doomsdayclock.net/blog/doomsday-clock-news-updates",
      },
      description:
        "The latest Doomsday Clock news for March 2026. The clock is at 85 seconds to midnight — the closest ever.",
      image: "https://doomsdayclock.net/og-image.png",
      articleSection: "News",
      keywords: [
        "doomsday clock news",
        "doomsday clock update",
        "doomsday clock 2026",
        "doomsday clock latest",
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
          name: "What is the latest Doomsday Clock news?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As of March 2026, the Doomsday Clock is set at 85 seconds to midnight — the closest it has ever been. The Bulletin of the Atomic Scientists moved the clock forward by 4 seconds on February 4, 2026, citing escalating nuclear risks, climate change, AI threats, and the erosion of international cooperation.",
          },
        },
        {
          "@type": "Question",
          name: "When is the next Doomsday Clock update?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The next Doomsday Clock announcement is expected in January 2027. The Bulletin of the Atomic Scientists typically announces the clock's new setting in late January each year at a press conference in Washington D.C., though the exact date varies.",
          },
        },
        {
          "@type": "Question",
          name: "How often is the Doomsday Clock updated?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Doomsday Clock is updated once per year, typically in January. The Bulletin's Science and Security Board meets to evaluate global threats and decides whether to move the clock forward, backward, or hold it steady. In rare cases of extraordinary events, an interim adjustment could be made, though this has never happened.",
          },
        },
        {
          "@type": "Question",
          name: "Did the Doomsday Clock move in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. On February 4, 2026, the Bulletin moved the Doomsday Clock from 89 seconds to 85 seconds to midnight — a 4-second advance that was the largest single forward move since the clock entered the seconds range in 2020. The move was driven by nuclear escalation, climate change, and AI-related threats.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "dc-news");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "dc-news-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="dc-news"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="dc-news-faq"]'
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
            Doomsday Clock News
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs sm:text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
            </span>
            News
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Doomsday Clock News</span>{" "}
            &amp; Latest Updates (March 2026)
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
                to midnight &mdash; the closest it has ever been
              </p>
              <p className="text-xs text-muted-foreground">
                Last updated {currentTime.lastUpdated} &mdash; next
                announcement expected January 2027
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Latest Update: 85 Seconds to Midnight (February 2026)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              On February 4, 2026, the Bulletin of the Atomic Scientists
              announced that the Doomsday Clock had moved from 89 seconds
              to 85 seconds to midnight &mdash; a 4-second advance that
              set a new record for the closest the clock has ever been to
              midnight. The announcement was made at the Bulletin&apos;s
              annual press conference in Washington D.C., where the Science
              and Security Board presented their assessment of global
              existential threats.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The 4-second jump was the largest single forward move since
              the clock entered the seconds range in 2020, when it was set
              at 100 seconds to midnight. The Bulletin cited four primary
              drivers: escalating nuclear risks from the Russia-Ukraine
              war and broader geopolitical instability, accelerating
              climate change with 2025 confirmed as the hottest year on
              record, the proliferation of AI-enabled autonomous weapons
              without adequate governance, and the continued erosion of
              international institutions and diplomatic channels.
            </p>
            <p className="text-foreground leading-relaxed">
              For a complete breakdown of the 2026 announcement and its
              implications, read our{" "}
              <Link
                to="/blog/doomsday-clock-2026"
                className="text-doom hover:underline"
              >
                detailed 2026 analysis
              </Link>
              .
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Key Events Affecting the Clock (March 2026)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              While the Doomsday Clock is only formally adjusted once per
              year, global events continue to shape the threat landscape
              that the Bulletin evaluates. Several developments in early
              2026 are likely to influence the next assessment.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-doom" />
                  Nuclear &amp; Geopolitical
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Russia-Ukraine conflict continues into its fourth
                  year with no ceasefire in sight. Nuclear rhetoric from
                  multiple state actors remains elevated. Arms control
                  frameworks remain absent following the expiration of New
                  START without a successor agreement.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-doom" />
                  Climate &amp; Environment
                </h4>
                <p className="text-sm text-muted-foreground">
                  Early 2026 temperature data suggests the planet may be on
                  track for another record-breaking year. Arctic sea ice
                  extent hit new lows in the winter months. Major emitters
                  continue to fall short of their COP30 commitments.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                  <Bell className="w-4 h-4 text-doom" />
                  Technology &amp; AI
                </h4>
                <p className="text-sm text-muted-foreground">
                  AI capabilities continue advancing rapidly without
                  binding international governance. Several nations have
                  deployed AI-assisted military systems in active conflict
                  zones. Deepfake technology continues to undermine
                  democratic processes globally.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              These developments do not change the clock&apos;s current
              setting &mdash; that can only happen at the Bulletin&apos;s
              annual announcement &mdash; but they form the backdrop
              against which the next assessment will be made.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              When Is the Next Doomsday Clock Update?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The next Doomsday Clock announcement is expected in{" "}
              <span className="text-doom font-semibold">
                January 2027
              </span>
              . The Bulletin of the Atomic Scientists typically reveals the
              clock&apos;s new setting at a press conference held in late
              January, though the exact date varies from year to year.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The process works as follows: the Bulletin&apos;s Science and
              Security Board &mdash; a group of experts including Nobel
              laureates and leading researchers in nuclear policy, climate
              science, and emerging technologies &mdash; convenes in the
              weeks before the announcement to evaluate global threats.
              They consult with the Bulletin&apos;s Board of Sponsors,
              which includes additional Nobel laureates, before making
              their final decision.
            </p>
            <p className="text-foreground leading-relaxed">
              The Board considers whether conditions have improved,
              worsened, or remained stable since the previous year&apos;s
              assessment. They can move the clock forward (indicating
              increased danger), move it backward (indicating improved
              safety), or hold it steady. The decision is then announced
              publicly, accompanied by a detailed statement explaining the
              reasoning.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Recent Doomsday Clock Changes
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The clock has moved forward in four consecutive years, a
              sustained deterioration not seen since the peak of the Cold
              War arms race. Here is the recent trajectory:
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2023
                  </span>
                  <span className="text-sm text-muted-foreground">
                    90 seconds &mdash; 10-second jump (Ukraine war)
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2024
                  </span>
                  <span className="text-sm text-muted-foreground">
                    90 seconds &mdash; unchanged
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2025
                  </span>
                  <span className="text-sm text-muted-foreground">
                    89 seconds &mdash; 1-second move
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-doom">
                    2026
                  </span>
                  <span className="text-sm text-doom font-medium">
                    85 seconds &mdash; 4-second jump (current)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              The acceleration from a 1-second move in 2025 to a 4-second
              jump in 2026 is significant. It signals that the Bulletin
              sees threats compounding faster than in previous years, with
              multiple existential risks reinforcing each other. For the
              complete history of every Doomsday Clock change, see our{" "}
              <Link
                to="/blog/doomsday-clock-current-time-today"
                className="text-doom hover:underline"
              >
                current time tracker
              </Link>
              .
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Could Move the Clock Next
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The January 2027 announcement could see the clock move
              forward, backward, or hold steady. Here are the scenarios
              that could influence the Board&apos;s decision.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2">
                  Could Push Clock Forward
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Escalation of nuclear threats or use of tactical
                    nuclear weapons in any conflict
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Further collapse of arms control diplomacy or new
                    nuclear weapons programs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Climate tipping points being crossed or confirmed
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    AI-related incidents with catastrophic consequences
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <h4 className="font-semibold text-green-400 mb-2">
                  Could Pull Clock Backward
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#9679;</span>
                    Ceasefire or peace agreement in the Russia-Ukraine war
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#9679;</span>
                    New bilateral or multilateral arms control agreements
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#9679;</span>
                    Binding international AI governance framework
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#9679;</span>
                    Major climate breakthrough or emissions reduction
                    commitment
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              For a detailed analysis of what the Bulletin might decide,
              read our{" "}
              <Link
                to="/blog/doomsday-clock-2027-prediction"
                className="text-doom hover:underline"
              >
                2027 Doomsday Clock prediction
              </Link>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How to Stay Informed
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Staying up to date on Doomsday Clock developments is
              straightforward. Here are the best sources for reliable,
              timely information about the clock and the threats it tracks.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Bulletin of the Atomic Scientists
                </h4>
                <p className="text-sm text-muted-foreground">
                  The official source for all Doomsday Clock announcements.
                  Visit{" "}
                  <a
                    href="https://thebulletin.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-doom hover:underline"
                  >
                    thebulletin.org
                  </a>{" "}
                  for expert analysis on nuclear weapons, climate change,
                  and disruptive technologies year-round.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  DoomsdayClock.net
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our site provides real-time tracking, historical context,
                  and analysis of every Doomsday Clock change. Bookmark
                  this page for updates, or explore our{" "}
                  <Link
                    to="/blog"
                    className="text-doom hover:underline"
                  >
                    full blog archive
                  </Link>{" "}
                  for in-depth articles on every aspect of the clock.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Annual Press Conference
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Bulletin&apos;s annual announcement is typically
                  livestreamed and covered by major news outlets worldwide.
                  Watch for the January 2027 announcement for the next
                  official update.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              Understanding the Doomsday Clock requires more than just
              knowing the current time &mdash; it means understanding the
              context behind each setting. For a comprehensive overview,
              start with our guide on{" "}
              <Link
                to="/blog/doomsday-clock-current-time-today"
                className="text-doom hover:underline"
              >
                the current Doomsday Clock time
              </Link>{" "}
              or explore the{" "}
              <Link
                to="/blog/doomsday-clock-2026"
                className="text-doom hover:underline"
              >
                2026 analysis
              </Link>
              .
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
                  What is the latest Doomsday Clock news?
                </h3>
                <p className="text-sm text-muted-foreground">
                  As of March 2026, the Doomsday Clock stands at 85
                  seconds to midnight, set on February 4, 2026. This is
                  the closest the clock has ever been to midnight in its
                  79-year history.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  When is the next Doomsday Clock update?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The next announcement is expected in January 2027. The
                  Bulletin of the Atomic Scientists announces the
                  clock&apos;s new setting annually, typically in late
                  January.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  How often is the Doomsday Clock updated?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The clock is updated once per year by the Bulletin&apos;s
                  Science and Security Board, which evaluates global
                  existential threats across nuclear, climate, technology,
                  and biosecurity domains.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Did the Doomsday Clock move in 2026?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes. The clock moved from 89 seconds to 85 seconds to
                  midnight on February 4, 2026 &mdash; a 4-second advance
                  that was the largest single forward move since the clock
                  entered the seconds range.
                </p>
              </div>
            </div>
          </section>
        </div>

        <RelatedArticles
          currentSlug="doomsday-clock-news-updates"
          slugs={[
            "doomsday-clock-2026",
            "doomsday-clock-2027-prediction",
            "doomsday-clock-current-time-today",
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
