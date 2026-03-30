import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";
import { currentTime, clockHistory } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function HowLongIs89Seconds() {
  useEffect(() => {
    updateMetaTags({
      title:
        "How Long Is 89 Seconds on the Doomsday Clock in Real Time? | DoomsdayClock.net",
      description:
        "How long is 89 seconds on the Doomsday Clock in real time? The Doomsday Clock doesn't work like a real countdown. Learn what the seconds actually represent and why it's a metaphor, not a timer.",
      path: "/blog/how-long-is-89-seconds-doomsday-clock",
      newsKeywords:
        "how long is 89 seconds on the doomsday clock, how long is 90 seconds on the doomsday clock, how long is 100 seconds, doomsday clock to real time, how long is a second on the doomsday clock",
      publishedTime: "2026-03-14T00:00:00Z",
      modifiedTime: "2026-03-14T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "How Long Is 89 Seconds on the Doomsday Clock in Real Time?",
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
          "https://doomsdayclock.net/blog/how-long-is-89-seconds-doomsday-clock",
      },
      description:
        "How long is 89 seconds on the Doomsday Clock in real time? The Doomsday Clock doesn't work like a real countdown. Learn what the seconds actually represent.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "how long is 89 seconds doomsday clock",
        "doomsday clock real time",
        "doomsday clock seconds meaning",
        "90 seconds doomsday clock",
        "100 seconds doomsday clock",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2200,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long is 89 seconds on the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "89 seconds on the Doomsday Clock is simply 89 seconds — 1 minute and 29 seconds. But this is not the right question to ask. The Doomsday Clock is not a literal countdown. There is no conversion rate between Doomsday Clock seconds and real-world time. The clock measures the level of existential risk, not a timeline to destruction.",
          },
        },
        {
          "@type": "Question",
          name: "How long is 90 seconds on the Doomsday Clock in real time?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "90 seconds on the Doomsday Clock has no real-time equivalent. The clock is a metaphorical assessment of existential risk, not a countdown timer. There is no formula to convert Doomsday Clock time into years, months, or days until catastrophe.",
          },
        },
        {
          "@type": "Question",
          name: "Does 1 second on the Doomsday Clock equal 1 year?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. There is no conversion between Doomsday Clock seconds and real-world years. The clock has been at various settings for different durations — it was at 17 minutes for 4 years (1991-1995) and at 90 seconds for 2 years (2023-2024). The seconds measure the assessed level of danger, not a timeline.",
          },
        },
        {
          "@type": "Question",
          name: "How long until midnight on the Doomsday Clock?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `The Doomsday Clock is currently set at ${currentTime.display} to midnight, but midnight is not scheduled for a specific date. Midnight represents a catastrophe — such as nuclear war or civilizational collapse — that could happen at any moment or never. The clock measures risk, not a timeline.`,
          },
        },
        {
          "@type": "Question",
          name: "Is the Doomsday Clock a real countdown?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. The Doomsday Clock is a symbolic metaphor maintained by the Bulletin of the Atomic Scientists. It communicates the level of existential danger humanity faces based on expert assessment of nuclear weapons, climate change, and emerging technologies. It is not a predictive countdown to any specific event.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "how-long-89");
    script.textContent = JSON.stringify([articleSchema, faqSchema]);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="how-long-89"]'
      );
      if (el) el.remove();
      resetToDefaults();
    };
  }, []);

  const secondsEntries = clockHistory.filter((e) => e.time.includes("seconds"));

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
          <span className="text-foreground">How Long Is 89 Seconds?</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            How Long Is <span className="text-doom">89 Seconds</span> on the
            Doomsday Clock in Real Time?
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
            <AlertTriangle className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                <strong>Update:</strong> The clock has since moved to{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight (February 2026)
              </p>
              <p className="text-xs text-muted-foreground">
                89 seconds was the 2025 setting &mdash; the current setting
                is even closer to midnight
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The Short Answer */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Short Answer
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              89 seconds on the Doomsday Clock is... just 89 seconds. One
              minute and 29 seconds. But that is not the right question to
              ask, because the Doomsday Clock is not a literal countdown.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              There is no conversion rate between Doomsday Clock seconds and
              real-world time. You cannot multiply 89 seconds by some factor
              to get years, months, or days until catastrophe. The Doomsday
              Clock does not predict <em>when</em> something will happen. It
              measures <em>how much danger</em> humanity is in right now.
            </p>
            <div className="p-4 rounded-lg bg-doom/5 border border-doom/20 my-4">
              <h4 className="font-semibold text-foreground mb-1">
                <HelpCircle className="w-4 h-4 inline mr-2 text-doom" />
                The bottom line
              </h4>
              <p className="text-sm text-muted-foreground">
                The Doomsday Clock is a metaphor, not a timer. Midnight is
                not scheduled. It represents a catastrophe that could happen
                at any moment or never. The seconds measure the{" "}
                <em>level of existential risk</em>, not a timeline to
                destruction.
              </p>
            </div>
          </section>

          {/* Section 2: Why There's No Real-Time Equivalent */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why There&apos;s No Real-Time Equivalent
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is a metaphor maintained by the{" "}
              <Link
                to="/blog/who-controls-doomsday-clock"
                className="text-doom hover:underline"
              >
                Bulletin of the Atomic Scientists
              </Link>{" "}
              since 1947. Its purpose is to communicate the level of
              existential risk facing humanity in a way that anyone can
              immediately understand. A clock approaching midnight is
              universally recognized as running out of time &mdash; and that
              visceral emotional response is exactly the point.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But the metaphor has a limit: it leads people to think the
              clock works like a real countdown, with each second ticking
              down toward a specific moment. It does not. Consider the
              evidence:
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  The clock stayed at 17 minutes for 4 years (1991&ndash;1995)
                </h4>
                <p className="text-sm text-muted-foreground">
                  If minutes equaled years, the world should have been safe
                  for 17 years. Instead, it stayed at the same level for 4
                  years before deteriorating.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  The clock was at 2 minutes for 67 years without midnight
                  arriving
                </h4>
                <p className="text-sm text-muted-foreground">
                  The clock was set to 2 minutes in 1953. If 2 minutes
                  corresponded to 2 real minutes (or 2 real years), midnight
                  should have arrived long ago. It did not &mdash; because
                  the clock does not work that way.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  The clock has moved both forward and backward
                </h4>
                <p className="text-sm text-muted-foreground">
                  A real countdown only moves in one direction. The Doomsday
                  Clock has moved{" "}
                  <Link
                    to="/blog/can-doomsday-clock-go-backwards"
                    className="text-doom hover:underline"
                  >
                    backward 8 times
                  </Link>
                  . This alone proves it is not a countdown to a fixed event.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              The Bulletin has explicitly stated that the clock is not
              predictive. It does not forecast when catastrophe will occur. It
              communicates the <em>assessed probability and severity</em> of
              existential threats based on the expert judgment of some of the
              world&apos;s leading scientists in nuclear policy, climate
              science, and emerging technologies.
            </p>
          </section>

          {/* Section 3: What the Seconds Actually Represent */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What the Seconds Actually Represent
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Each second on the Doomsday Clock represents a marginal increase
              or decrease in the assessed level of existential danger. The
              shift from minutes to seconds in 2020 was itself one of the most
              significant changes in the clock&apos;s history.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              For 73 years &mdash; from 1947 to 2019 &mdash; the clock was
              always measured in whole minutes. The closest it got was 2
              minutes (in 1953 and 2018). When the Bulletin broke the minutes
              barrier in January 2020, setting the clock at 100 seconds, it
              was a deliberate signal: the level of danger had become so acute
              that whole minutes were too coarse a measurement to capture the
              urgency.
            </p>
            <div className="space-y-3 my-6">
              {secondsEntries.map((event) => (
                <div
                  key={event.year}
                  className={`p-4 rounded-lg border ${
                    event.year === 2026
                      ? "bg-doom/10 border-doom/30"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">
                      {event.year}: {event.time} to midnight
                    </h4>
                    {event.year === 2026 && (
                      <span className="text-xs text-doom font-medium px-2 py-0.5 rounded-full bg-doom/20">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.details}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-foreground leading-relaxed">
              The progression from 100 seconds to {currentTime.display} in
              just six years represents the fastest sustained deterioration in
              the clock&apos;s history. But none of these numbers correspond
              to a specific real-world timeline. They represent the
              Bulletin&apos;s assessment that the margin of safety is
              vanishingly thin &mdash; not that catastrophe is X years away.
            </p>
          </section>

          {/* Section 4: Comparing Clock Settings to Real Events */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Comparing Clock Settings to Real Events
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              To understand what the seconds represent, it helps to compare
              clock settings to the real-world conditions they reflected:
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  17 minutes (1991)
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Cold War had just ended. The START treaty was signed.
                  The Soviet Union dissolved peacefully. The existential
                  confrontation that created the clock was over. This was the
                  safest the world had been since the dawn of the nuclear age.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  2 minutes (1953, 2018)
                </h4>
                <p className="text-sm text-muted-foreground">
                  In 1953: both superpowers had hydrogen bombs. In 2018:
                  North Korean nuclear tests, US withdrawal from the Iran
                  deal, and the failure to address nuclear modernization or
                  climate change. Both were assessed as extremely dangerous.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-doom/5 border border-doom/20">
                <h4 className="font-semibold text-foreground mb-1">
                  {currentTime.display} ({currentTime.year})
                </h4>
                <p className="text-sm text-muted-foreground">
                  Multiple simultaneous existential threats: the
                  Russia-Ukraine war with nuclear escalation risks, the
                  collapse of arms control, record global temperatures,
                  AI-enabled weapons proliferation, and rising geopolitical
                  tensions across multiple regions. The assessed danger level
                  exceeds anything previously recorded.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              Notice what these comparisons reveal: the seconds do not
              correlate to years. They correlate to danger levels. The
              distance between 17 minutes and 85 seconds is not about time
              passing &mdash; it is about the world becoming dramatically
              more dangerous across multiple dimensions simultaneously.
            </p>
          </section>

          {/* Section 5: The Common Misconception */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Common Misconception
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Many people search &quot;how long is 89 seconds on the Doomsday
              Clock in real time&quot; expecting to find a conversion formula
              &mdash; something like &quot;89 Doomsday Clock seconds equals 5
              years&quot; or &quot;each second equals 6 months.&quot; No such
              conversion exists, and the Bulletin has explicitly stated that
              the clock is not designed to work this way.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The misconception arises from the power of the clock metaphor
              itself. Clocks measure time. A clock approaching midnight
              naturally suggests a countdown. But the Doomsday Clock measures
              something fundamentally different from time: it measures the
              expert-assessed probability that humanity will inflict
              catastrophic, potentially irreversible harm on itself.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Think of it this way: if you go to the doctor and your blood
              pressure is 180/120, the number tells you how much danger you
              are in right now. It does not tell you the exact date you will
              have a heart attack. You might have one tomorrow, or you might
              never have one if you change your behavior. The number measures
              risk, not a timeline. The Doomsday Clock works the same way.
            </p>
            <p className="text-foreground leading-relaxed">
              The important question is not &quot;how long is 89 seconds in
              real time?&quot; The important question is: &quot;what does it
              mean that the world&apos;s leading experts on existential risk
              have assessed humanity to be closer to self-inflicted
              catastrophe than at any point in the clock&apos;s{" "}
              {currentTime.year - 1947}-year history?&quot; For a deeper
              exploration of what the current setting means, see our{" "}
              <Link
                to="/blog/what-does-89-seconds-to-midnight-mean"
                className="text-doom hover:underline"
              >
                analysis of what 89 seconds to midnight means
              </Link>
              .
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Track the Doomsday Clock in Real Time
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            See the current clock setting, interactive timeline, and countdown
            to the next announcement.
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
            to="/blog/what-does-89-seconds-to-midnight-mean"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              What Does 89 Seconds to Midnight Mean?
            </h4>
            <p className="text-sm text-muted-foreground">
              The significance of the 2025 setting explained in full context.
            </p>
          </Link>
          <Link
            to="/blog/what-is-the-doomsday-clock"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              What Is the Doomsday Clock?
            </h4>
            <p className="text-sm text-muted-foreground">
              The complete guide to the clock &mdash; what it is, how it works,
              and why it matters.
            </p>
          </Link>
        </div>

        <RelatedArticles
          currentSlug="how-long-is-89-seconds-doomsday-clock"
          slugs={[
            "what-does-89-seconds-to-midnight-mean",
            "what-is-the-doomsday-clock",
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
