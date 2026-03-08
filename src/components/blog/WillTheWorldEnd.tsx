import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  BookOpen,
  AlertTriangle,
  Globe,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WillTheWorldEnd() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Will the World End? What the Doomsday Clock Actually Predicts | DoomsdayClock.net",
      description:
        "Will the world end in 2026? What the Doomsday Clock actually predicts, the difference between the climate clock and the Doomsday Clock, and what science says about humanity's future.",
      path: "/blog/will-the-world-end-doomsday-clock",
      newsKeywords:
        "will the world end, doomsday clock 2026, world end 2026, climate clock, will the world survive 2050, doomsday predictions",
      publishedTime: "2026-03-07T00:00:00Z",
      modifiedTime: "2026-03-07T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "Will the World End? What the Doomsday Clock Actually Predicts",
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
          "https://doomsdayclock.net/blog/will-the-world-end-doomsday-clock",
      },
      description:
        "Will the world end? What the Doomsday Clock actually predicts, what happens when it reaches midnight, and what science says about humanity's future.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "will the world end",
        "doomsday clock prediction",
        "world end 2026",
        "climate clock",
        "humanity future",
        "existential risk",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2400,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "world-end");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="world-end"]'
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
          <span className="text-foreground">Will the World End?</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs sm:text-sm font-medium">
            <BookOpen className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Will the World <span className="text-doom">End?</span> What the
            Doomsday Clock Actually Predicts
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>

          {/* Current clock context */}
          <div className="doom-accent-card p-4 flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                The Doomsday Clock is at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight &mdash; a warning, not a prediction
              </p>
              <p className="text-xs text-muted-foreground">
                Set on {currentTime.lastUpdated} &mdash; the closest it has
                ever been
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Section 1: The Direct Answer */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Would the World End in 2026?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              No. No credible scientific body, government agency, or research
              institution predicts the world will end in 2026 &mdash; or on any
              specific date. The Doomsday Clock&apos;s setting of{" "}
              <span className="text-doom font-semibold">
                {currentTime.display} to midnight
              </span>{" "}
              is a symbolic warning about the level of existential risk
              humanity faces. It is not a countdown to an expiration date.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The distinction matters. &quot;Will the world end?&quot; and
              &quot;How much danger is humanity in?&quot; are fundamentally
              different questions. The Doomsday Clock answers the second one.
              It measures the severity and proximity of threats that
              <em> could</em> cause civilizational catastrophe if left
              unaddressed. It does not predict that such catastrophe{" "}
              <em>will</em> occur.
            </p>
            <p className="text-foreground leading-relaxed">
              Throughout its{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-doom hover:underline"
              >
                79-year history
              </Link>
              , the clock has been as close as 85 seconds (today) and as far as
              17 minutes (1991). It has moved forward and backward many times
              &mdash; proof that the threats it measures are not inevitable.
              The world did not end when the clock was at 2 minutes in 1953,
              and it will not end because the clock is at 85 seconds today.
            </p>
          </section>

          {/* Section 2: What Is the Estimated Time That the World Will End? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Is the Estimated Time That the World Will End?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              There is no scientifically established date for the &quot;end of
              the world.&quot; The concept itself is ambiguous &mdash; the
              physical planet Earth will persist for billions of years (until
              the Sun enters its red giant phase in approximately 5 billion
              years). What the Doomsday Clock and related warnings address is
              not the end of the planet, but threats to human civilization and
              the biosphere that supports it.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Here is what science actually says about different time horizons:
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-doom/5 border border-doom/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Near-term (2026&ndash;2030)
                </h4>
                <p className="text-sm text-muted-foreground">
                  The primary near-term existential risks are nuclear conflict
                  and pandemic-scale biological threats. These could cause
                  civilizational collapse within hours to months but are not
                  predicted to be inevitable. The Doomsday Clock&apos;s current
                  setting of {currentTime.display} reflects elevated risk, not
                  certainty.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Medium-term (2030&ndash;2050)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Climate change impacts will intensify significantly. The IPCC
                  projects 1.5&ndash;2&deg;C of warming by mid-century, bringing
                  more extreme weather, rising seas, and agricultural stress.
                  These are severe challenges but not civilization-ending if
                  addressed. The greater risk is the compounding effect of
                  climate stress combined with nuclear proliferation and
                  technology disruption.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Long-term (2050&ndash;2100)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Without significant action on climate change, temperatures
                  could rise 3&ndash;4&deg;C by 2100, with cascading effects on
                  food systems, water supplies, and ecosystems. Combined with
                  continued nuclear proliferation and unregulated AI
                  development, the threat landscape grows more complex. But
                  again: these are risks to manage, not an inevitable end.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Geological timescale (billions of years)
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Earth itself will persist for approximately 4.5 billion
                  more years. The Sun will eventually expand into a red giant,
                  rendering Earth uninhabitable in roughly 1 billion years and
                  engulfing it in about 5 billion. These are natural endpoints
                  unrelated to human activity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Doomsday Clock vs Climate Clock */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Happens When the Climate Clock Hits 00:00?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              People frequently confuse the Doomsday Clock with the Climate
              Clock &mdash; they are different projects with different purposes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-5 rounded-lg bg-doom/5 border border-doom/20">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-doom" />
                  <h4 className="font-semibold text-doom">Doomsday Clock</h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Created 1947 by the Bulletin of the Atomic Scientists
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Measures <strong className="text-foreground">overall
                    existential risk</strong> (nuclear, climate, AI, bio)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Set by expert judgment, not a formula
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Currently at {currentTime.display} to midnight
                  </li>
                </ul>
              </div>
              <div className="p-5 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-5 h-5 text-green-400" />
                  <h4 className="font-semibold text-foreground">
                    Climate Clock
                  </h4>
                </div>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#9679;</span>
                    Created 2020 by artists and scientists
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#9679;</span>
                    Counts down to <strong className="text-foreground">
                    1.5&deg;C carbon budget</strong> depletion
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#9679;</span>
                    Based on emissions data and IPCC calculations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">&#9679;</span>
                    Counts down in real-time (currently ~5 years remaining)
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              When the Climate Clock reaches 00:00, it means the world&apos;s
              remaining carbon budget for limiting warming to 1.5&deg;C has been
              exhausted at current emission rates. This does not mean the world
              ends &mdash; it means that avoiding the worst climate impacts
              becomes significantly harder. Tipping points like permafrost
              methane release, ice sheet collapse, and Amazon dieback become
              more likely, and the economic and human costs of adaptation
              escalate dramatically.
            </p>
            <p className="text-foreground leading-relaxed">
              The Doomsday Clock incorporates climate risk as one of several
              factors, alongside nuclear threats, emerging technologies, and
              biosecurity. Climate change has been part of the clock&apos;s
              assessment since 2007, and it has contributed to every forward
              move since then. In this sense, the two clocks are complementary:
              the Climate Clock measures one specific climate threshold, while
              the Doomsday Clock assesses the broader landscape of existential
              risk.
            </p>
          </section>

          {/* Section 4: Will the World Survive in 2050? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Will the World Survive in 2050?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Yes, with very high probability. But the <em>quality</em> of life
              in 2050 depends heavily on decisions made today. The question is
              not survival of the planet &mdash; Earth will be fine &mdash; but
              the stability of human civilization and the ecosystems that
              support it.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              By 2050, climate models project:
            </p>
            <ul className="text-foreground space-y-3 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-doom mt-0.5">&#9679;</span>
                <span>
                  Global temperatures 1.5&ndash;2.5&deg;C above pre-industrial
                  levels, depending on emissions pathways
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-doom mt-0.5">&#9679;</span>
                <span>
                  Sea levels rising 15&ndash;30cm, threatening coastal cities
                  home to hundreds of millions of people
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-doom mt-0.5">&#9679;</span>
                <span>
                  More frequent and intense extreme weather events: heat waves,
                  hurricanes, droughts, and floods
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-doom mt-0.5">&#9679;</span>
                <span>
                  Significant pressure on global food and water systems,
                  particularly in tropical and subtropical regions
                </span>
              </li>
            </ul>
            <p className="text-foreground leading-relaxed mb-4">
              These are serious challenges, but they are not apocalyptic. The
              distinction between &quot;the world ends&quot; and &quot;the
              world changes significantly for the worse&quot; is important.
              Climate change will make life harder, more expensive, and more
              dangerous for billions of people. It will accelerate migration,
              strain economies, and increase geopolitical tensions. But it does
              not, by itself, end human civilization.
            </p>
            <p className="text-foreground leading-relaxed">
              The greater risk is <em>compounding</em> threats. Climate stress
              combined with nuclear proliferation, AI disruption, and weakened
              international institutions creates a more volatile and
              unpredictable world. That compound risk is precisely what the
              Doomsday Clock measures &mdash; and why it currently stands at{" "}
              <span className="text-doom font-semibold">
                {currentTime.display} to midnight
              </span>
              .
            </p>
          </section>

          {/* Section 5: What Can Be Done */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What Can Be Done?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock is fundamentally about human agency. It is a
              warning, not a prophecy. The clock has moved backward eight times
              in its history, and every reversal followed concrete action:
              treaties signed, arsenals reduced, cooperation restored. Here is
              what the Bulletin of the Atomic Scientists says would move the
              clock away from midnight:
            </p>
            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Renewed arms control
                </h4>
                <p className="text-sm text-muted-foreground">
                  Restart US-Russia nuclear negotiations, extend or replace
                  expired treaties, and establish new frameworks that include
                  China. Every major backward move in the clock&apos;s history
                  followed an arms control agreement.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Accelerated climate action
                </h4>
                <p className="text-sm text-muted-foreground">
                  Dramatically reduce greenhouse gas emissions, invest in
                  renewable energy and adaptation, and honor international
                  climate commitments. The gap between pledges and action
                  remains the primary driver of climate risk.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Technology governance
                </h4>
                <p className="text-sm text-muted-foreground">
                  Establish international frameworks for AI safety, ban
                  autonomous lethal weapons, and regulate dual-use biological
                  research. The current pace of technological development far
                  outstrips the governance structures meant to manage it.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
                <h4 className="font-semibold text-foreground mb-1">
                  Diplomatic resolution of conflicts
                </h4>
                <p className="text-sm text-muted-foreground">
                  End the Russia-Ukraine war through negotiation, de-escalate
                  Middle East tensions, and address North Korea&apos;s nuclear
                  program through dialogue. Active conflicts are the primary
                  near-term drivers of nuclear risk.
                </p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              The world is not ending. But it is becoming more dangerous.
              The Doomsday Clock exists to make sure we pay attention to that
              difference &mdash; and to remind us that the outcome is still in
              our hands.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Explore What Could Move the Clock
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Use our What If simulator to model how different global scenarios
            could push the Doomsday Clock forward or backward.
          </p>
          <Link
            to="/#what-if"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            Try the What If Simulator
          </Link>
        </div>

        {/* Related articles */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <Link
            to="/blog/what-happens-doomsday-clock-midnight"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              What Happens at Midnight?
            </h4>
            <p className="text-sm text-muted-foreground">
              What midnight symbolizes and the catastrophic scenarios it
              represents.
            </p>
          </Link>
          <Link
            to="/blog/what-does-89-seconds-to-midnight-mean"
            className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-doom/30 transition-colors group"
          >
            <h4 className="font-semibold text-foreground group-hover:text-doom transition-colors mb-1">
              What Does 89 Seconds Mean?
            </h4>
            <p className="text-sm text-muted-foreground">
              The significance of the 2025 setting and how it compares to
              today&apos;s record.
            </p>
          </Link>
        </div>

        <RelatedArticles
          currentSlug="will-the-world-end-doomsday-clock"
          slugs={[
            "what-happens-doomsday-clock-midnight",
            "doomsday-clock-2027-prediction",
            "who-controls-doomsday-clock",
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
