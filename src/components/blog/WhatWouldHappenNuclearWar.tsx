import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Calendar,
  AlertTriangle,
  Flame,
  Thermometer,
  Wheat,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function WhatWouldHappenNuclearWar() {
  useEffect(() => {
    updateMetaTags({
      title:
        "What Would Happen in a Nuclear War? Science-Based Effects & Aftermath | DoomsdayClock.net",
      description:
        "What would actually happen if nuclear war broke out? From the initial blast to nuclear winter, the science-based effects on cities, climate, food supply, and civilization.",
      path: "/blog/what-would-happen-in-a-nuclear-war",
      newsKeywords:
        "what would happen in nuclear war, nuclear war effects, nuclear war aftermath, nuclear winter, nuclear bomb effects, what happens if nuclear war",
      publishedTime: "2026-03-15T00:00:00Z",
      modifiedTime: "2026-03-15T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "What Would Happen in a Nuclear War? Science-Based Effects & Aftermath",
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
          "https://doomsdayclock.net/blog/what-would-happen-in-a-nuclear-war",
      },
      description:
        "What would actually happen if nuclear war broke out? Science-based analysis of blast effects, radiation, nuclear winter, and long-term aftermath.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "nuclear war effects",
        "nuclear winter",
        "nuclear war aftermath",
        "nuclear bomb effects",
        "doomsday clock",
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
          name: "What would happen if nuclear war broke out today?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A full-scale nuclear war between major powers would cause hundreds of millions of immediate deaths from blast, heat, and radiation. Within weeks, soot from burning cities would block sunlight, triggering a nuclear winter that could drop global temperatures by 10-15°C. Agricultural collapse would follow, potentially causing billions of additional deaths from famine over the following years.",
          },
        },
        {
          "@type": "Question",
          name: "What is nuclear winter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nuclear winter is a hypothesized climate effect of nuclear war. Firestorms from nuclear detonations would inject millions of tons of soot into the stratosphere, blocking sunlight and causing dramatic cooling of the Earth's surface. Models by Robock et al. (2007) and subsequent studies suggest global temperatures could drop by 10-15°C, persisting for years to decades, devastating agriculture worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "How many people would die in a nuclear war?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 2022 study published in Nature Food estimated that a full-scale nuclear war between the US and Russia could kill approximately 360 million people directly and cause over 5 billion deaths from famine due to nuclear winter effects on agriculture. Even a limited regional nuclear war between India and Pakistan (using ~100 weapons) could kill 2 billion people from famine alone.",
          },
        },
        {
          "@type": "Question",
          name: "Could civilization survive a nuclear war?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A limited nuclear exchange involving fewer than 100 warheads might be survivable at a civilizational level, though it would cause catastrophic regional destruction and global climate effects. A full-scale exchange between major powers, involving thousands of warheads, would likely end modern civilization as we know it. Some human populations would survive, but recovery to pre-war levels of organization could take centuries.",
          },
        },
        {
          "@type": "Question",
          name: "How far away from a nuclear blast is safe?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For a typical modern warhead (300-800 kilotons), the immediate kill zone extends roughly 5-8 km from ground zero. Severe injuries and structural damage extend to about 13 km. Fallout can travel hundreds of kilometers downwind. However, there is no truly 'safe' distance in a full-scale nuclear war due to fallout patterns, nuclear winter, and agricultural collapse affecting the entire planet.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "nuclear-war-effects");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "nuclear-war-effects-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="nuclear-war-effects"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="nuclear-war-effects-faq"]'
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
            What Would Happen in a Nuclear War
          </span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <AlertTriangle className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What Would Happen in a Nuclear War?{" "}
            <span className="text-doom">
              Science-Based Effects &amp; Aftermath
            </span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 15, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              10 min read
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
                to midnight &mdash; the closest it has ever been
              </p>
              <p className="text-xs text-muted-foreground">
                Set on {currentTime.lastUpdated} &mdash; nuclear risk remains
                the primary driver
              </p>
            </div>
          </div>
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          {/* Introduction */}
          <section>
            <p className="text-foreground leading-relaxed mb-4">
              The question &quot;what would happen if nuclear war broke
              out?&quot; is not hypothetical speculation. It is one of the
              most studied scenarios in modern science. For over seven
              decades, physicists, climatologists, medical researchers, and
              military strategists have modeled the effects of nuclear war
              with increasing precision. The results are consistent across
              studies: a large-scale nuclear conflict would be the worst
              catastrophe in human history, by an enormous margin.
            </p>
            <p className="text-foreground leading-relaxed">
              This article summarizes what the scientific literature tells us
              about the effects of nuclear war &mdash; from the first
              microsecond of detonation to the decades-long aftermath. The
              findings are drawn from peer-reviewed research, including
              studies by Alan Robock, Owen Brian Toon, and colleagues on
              nuclear winter; data from the International Campaign to Abolish
              Nuclear Weapons (ICAN); and medical assessments from the
              International Physicians for the Prevention of Nuclear War
              (IPPNW). The intent is not to be sensationalist but to
              present, as clearly as possible, what the evidence shows.
            </p>
          </section>

          {/* Section 1: The Initial Blast */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Initial Blast
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              A modern strategic nuclear warhead has a yield typically
              ranging from 100 kilotons to 800 kilotons &mdash; roughly 7 to
              53 times the power of the bomb dropped on Hiroshima (15
              kilotons). When a nuclear weapon detonates, it releases its
              energy in several distinct forms, each devastating in its own
              way.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2 flex items-center gap-2">
                  <Flame className="w-4 h-4" />
                  Fireball &amp; Thermal Radiation
                </h4>
                <p className="text-sm text-muted-foreground">
                  The detonation creates a fireball with temperatures
                  exceeding 100 million degrees Celsius &mdash; hotter than
                  the core of the sun. For a 300-kiloton weapon, the
                  fireball extends roughly 600 meters in diameter. Thermal
                  radiation travels outward at the speed of light, causing
                  third-degree burns on exposed skin at distances up to 8-10
                  kilometers. Flammable materials ignite spontaneously,
                  triggering mass fires that can merge into a firestorm
                  &mdash; a self-sustaining inferno with wind speeds
                  exceeding 200 km/h that consumes all available oxygen.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Blast Wave (Overpressure)
                </h4>
                <p className="text-sm text-muted-foreground">
                  The expanding fireball creates a shockwave that travels
                  outward faster than the speed of sound. At 2 km from
                  ground zero of a 300-kiloton detonation, overpressure
                  exceeds 20 psi &mdash; enough to demolish reinforced
                  concrete buildings. At 5 km, overpressure of 5-10 psi
                  collapses most residential structures and causes
                  near-universal fatalities from flying debris and
                  structural collapse. Windows shatter at distances of 15 km
                  or more.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Electromagnetic Pulse (EMP)
                </h4>
                <p className="text-sm text-muted-foreground">
                  A high-altitude detonation (above 30 km) generates an
                  electromagnetic pulse that can disable electronic systems
                  across thousands of square kilometers. A single weapon
                  detonated at altitude over the central United States could
                  damage power grids, communication networks, and digital
                  infrastructure across the entire continent. Modern
                  societies, dependent on electronics for everything from
                  water treatment to food distribution, would be severely
                  disrupted.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Immediate Casualties
                </h4>
                <p className="text-sm text-muted-foreground">
                  A single 300-kiloton weapon detonated over a major city
                  would kill an estimated 500,000 to 1.5 million people
                  instantly, depending on population density. Within the
                  first 24 hours, deaths from burns, blast injuries, and
                  acute radiation exposure would push the total significantly
                  higher. Medical infrastructure within the blast zone would
                  be completely destroyed, and surrounding hospitals would be
                  overwhelmed beyond any capacity to respond.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              In a full-scale exchange between the US and Russia, current
              war plans are estimated to target hundreds of cities and
              military installations. Studies published in the journal{" "}
              <em>Nature Food</em> (2022) estimate that immediate deaths
              from blast and burns alone could reach approximately 360
              million people. This is before accounting for radiation,
              fallout, or the longer-term effects that follow.
            </p>
          </section>

          {/* Section 2: Radiation & Fallout */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Radiation &amp; Fallout
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Nuclear detonations produce two distinct categories of
              radiation exposure: initial radiation released during the
              explosion itself, and residual radiation from fallout &mdash;
              radioactive particles that are carried into the atmosphere
              and then settle back to Earth over hours, days, and weeks.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Initial radiation</strong> extends to roughly 3-4 km
              from ground zero for a typical strategic weapon. Within this
              radius, radiation doses are lethal within hours or days. At
              greater distances, sub-lethal doses cause acute radiation
              syndrome &mdash; nausea, vomiting, immune system suppression,
              and internal bleeding &mdash; with symptoms appearing within
              hours and death potentially following within weeks.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Fallout</strong> poses a wider and more persistent
              threat. A ground-burst detonation (used against hardened
              targets like missile silos) vaporizes soil and debris, which
              mixes with radioactive fission products and is lofted into
              the atmosphere. This material settles downwind in a plume
              that can extend hundreds of kilometers. Within the heaviest
              fallout zones, outdoor exposure for even a few hours can
              deliver lethal radiation doses. Fallout from a single
              ground-burst weapon can contaminate an area of several
              thousand square kilometers.
            </p>
            <p className="text-foreground leading-relaxed">
              In a large-scale exchange involving hundreds of ground
              bursts, overlapping fallout plumes would contaminate vast
              regions. Modeling by the US Department of Defense and
              independent researchers suggests that in a full-scale
              US-Russia exchange, lethal fallout zones could cover much of
              the northern hemisphere within the first two weeks. Long-term
              contamination from isotopes like cesium-137 (half-life: 30
              years) and strontium-90 (half-life: 29 years) would render
              large areas uninhabitable for decades.
            </p>
          </section>

          {/* Section 3: Nuclear Winter */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Nuclear Winter: The Climate Catastrophe
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Nuclear winter is perhaps the most consequential effect of
              large-scale nuclear war &mdash; and the one that transforms
              a regional catastrophe into a global one. The concept was
              first proposed in the 1980s and has since been refined
              through increasingly sophisticated climate modeling.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The mechanism is straightforward: nuclear detonations over
              cities ignite massive firestorms that inject millions of
              tons of soot (black carbon) into the upper atmosphere.
              Unlike ordinary smoke, which is rained out within weeks,
              soot lofted into the stratosphere above the rain layer can
              persist for years. This soot absorbs sunlight before it
              reaches the surface, heating the stratosphere while cooling
              the ground.
            </p>

            <div className="doom-accent-card p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <Thermometer className="w-6 h-6 text-doom shrink-0" />
                <h3 className="text-lg font-semibold text-doom">
                  Key Findings from Climate Models
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Based on Robock et al. (2007), Toon et al. (2019), and
                subsequent peer-reviewed studies:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <strong>Full-scale US-Russia exchange (~4,400 weapons):</strong>{" "}
                  150 million tons of soot injected into the stratosphere.
                  Global average temperatures drop by 10-15&deg;C within
                  the first year. Recovery takes 10-15 years. This
                  temperature drop exceeds the difference between today and
                  the last Ice Age.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <strong>Regional war (~100 weapons, India-Pakistan scenario):</strong>{" "}
                  5 million tons of soot. Global temperatures drop by
                  1-2&deg;C. Growing seasons shorten by 10-40 days across
                  major agricultural regions. This &quot;limited&quot;
                  scenario still threatens global food security for
                  billions.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <strong>Ozone depletion:</strong> Stratospheric heating
                  from soot accelerates ozone destruction. UV radiation at
                  the surface could increase by 30-80%, causing widespread
                  damage to ecosystems, crops, and human health.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  <strong>Precipitation collapse:</strong> Global
                  precipitation decreases by 20-35% in full-scale
                  scenarios, devastating rain-fed agriculture that feeds
                  most of the world&apos;s population.
                </li>
              </ul>
            </div>

            <p className="text-foreground leading-relaxed">
              It is important to note that nuclear winter models carry
              uncertainties &mdash; particularly regarding the amount of
              soot that firestorms would actually inject and how long it
              would persist. However, the fundamental physics is well
              established, and even the more conservative estimates
              describe climate disruptions severe enough to threaten global
              food production. As Robock and Toon have emphasized, the
              question is not whether nuclear winter would occur, but how
              severe it would be.
            </p>
          </section>

          {/* Section 4: The Humanitarian Catastrophe */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Humanitarian Catastrophe
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Beyond the immediate physics of blast, radiation, and climate
              disruption, a nuclear war would trigger a cascading
              humanitarian crisis on a scale without precedent in human
              history. The effects would compound in ways that make each
              individual consequence more devastating than it would be in
              isolation.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Medical systems would collapse.</strong> The
              International Physicians for the Prevention of Nuclear War
              (IPPNW) have documented that even a single nuclear detonation
              over a major city would produce casualties far exceeding the
              capacity of any medical system. Burn victims alone would
              overwhelm every burn unit on a continent. In a full-scale
              war, most hospitals in targeted regions would be destroyed,
              and those remaining would lack power, water, supplies, and
              personnel.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Infrastructure would disintegrate.</strong> Modern
              cities depend on interconnected systems &mdash; electricity,
              water treatment, sewage, telecommunications, transportation,
              supply chains &mdash; that are fragile and interdependent.
              The destruction of any one system cascades to the others.
              Without electricity, water treatment plants stop. Without
              clean water, disease spreads. Without transportation, food
              and medical supplies cannot reach survivors.
            </p>
            <p className="text-foreground leading-relaxed">
              <strong>Governance would fracture.</strong> National and
              local governments would lose the ability to communicate,
              coordinate, and enforce order. The breakdown of social
              institutions that maintain stability in normal times would
              create conditions for secondary conflicts over remaining
              resources, compounding the initial catastrophe.
            </p>
          </section>

          {/* Section 5: Effects on Global Food Supply */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Effects on Global Food Supply
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The most far-reaching consequence of nuclear war may be its
              impact on food production. Even countries far from the
              conflict zones would face severe food crises due to nuclear
              winter effects on agriculture.
            </p>

            <div className="doom-accent-card p-5 my-6">
              <div className="flex items-center gap-3 mb-3">
                <Wheat className="w-6 h-6 text-doom shrink-0" />
                <h3 className="text-lg font-semibold text-doom">
                  Famine Projections from Peer-Reviewed Research
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                A landmark 2022 study published in <em>Nature Food</em> by
                Xia et al. modeled the impact of nuclear war on global
                food production across six scenarios:
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  A regional nuclear war (India-Pakistan, ~100 weapons)
                  could reduce global caloric production by 7-10% in the
                  first five years, putting approximately 2 billion people
                  at risk of famine.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  A full-scale US-Russia exchange could reduce global
                  caloric production by 90% within four years, threatening
                  the survival of over 5 billion people.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  Major grain-producing regions in North America, Europe,
                  and East Asia would see the most severe declines due to
                  shortened growing seasons and reduced sunlight.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-doom mt-0.5">&#9679;</span>
                  Marine fisheries would also decline as reduced sunlight
                  disrupts phytoplankton productivity, collapsing ocean
                  food chains from the bottom up.
                </li>
              </ul>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The study&apos;s authors emphasized that current global food
              reserves &mdash; typically enough for only 60-90 days of
              consumption &mdash; would be wholly inadequate to bridge the
              gap. Even with aggressive rationing, existing stocks would
              be depleted within months. The countries most vulnerable
              would be those that depend heavily on food imports, including
              many nations in the Middle East, North Africa, and East
              Asia.
            </p>
            <p className="text-foreground leading-relaxed">
              This is the mechanism by which nuclear war becomes a truly
              global catastrophe. Even nations that are not directly
              targeted would face starvation on a massive scale. There is
              no country on Earth that is self-sufficient enough to feed
              its population through a multi-year nuclear winter.
            </p>
          </section>

          {/* Section 6: Could Civilization Recover? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Could Civilization Recover?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The question of recovery depends entirely on the scale of
              the conflict. The scenarios range from devastating but
              recoverable to civilizational collapse with uncertain
              prospects for rebuilding.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Limited exchange (fewer than 100 weapons):</strong>{" "}
              A regional conflict, such as a hypothetical India-Pakistan
              exchange, would cause catastrophic destruction in the
              affected region and global climate disruption. But the
              broader framework of global civilization &mdash; governance,
              infrastructure, knowledge, industrial capacity &mdash; would
              largely survive. Recovery would take decades but would be
              achievable.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              <strong>Full-scale exchange (thousands of weapons):</strong>{" "}
              A US-Russia or broader multi-party exchange involving
              thousands of warheads presents a fundamentally different
              picture. The combination of massive direct casualties,
              infrastructure destruction, fallout contamination, nuclear
              winter, agricultural collapse, and societal breakdown would
              push humanity into genuinely uncharted territory.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Human beings would almost certainly survive as a species.
              Populations in the southern hemisphere, particularly in
              Australia, New Zealand, and parts of South America, would be
              least directly affected by blast and fallout. But even these
              regions would face severe food shortages from nuclear winter
              effects. The survivors would inhabit a world with shattered
              supply chains, contaminated water and soil, degraded
              infrastructure, and drastically reduced agricultural
              productivity.
            </p>
            <p className="text-foreground leading-relaxed">
              Whether those survivors could rebuild anything resembling
              modern civilization is an open question. Much of the
              industrial infrastructure that took centuries to develop
              would be destroyed. Critical knowledge, while not entirely
              lost, would be fragmented and difficult to apply without
              functioning institutions. Some researchers have suggested
              that recovery to pre-war levels of technological
              civilization could take centuries &mdash; if it happens at
              all. The{" "}
              <Link
                to="/blog/what-happens-doomsday-clock-midnight"
                className="text-doom hover:underline"
              >
                Doomsday Clock&apos;s concept of midnight
              </Link>{" "}
              &mdash; the point of no return &mdash; captures this
              threshold between recoverable catastrophe and irreversible
              civilizational collapse.
            </p>
          </section>

          {/* Section 7: Why the Doomsday Clock Exists */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why the Doomsday Clock Exists
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock was created in 1947 by scientists who had
              worked on the Manhattan Project &mdash; the people who had
              built the first nuclear weapons and understood their
              destructive potential better than anyone. They created the
              Bulletin of the Atomic Scientists and its iconic clock not
              to predict doom, but to prevent it.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The scenarios described in this article are precisely what
              the Doomsday Clock warns about. When the Bulletin sets the
              clock at{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, it is communicating that the conditions for
              these scenarios &mdash; the weapons, the tensions, the
              eroding safeguards &mdash; are at their most dangerous
              point in the clock&apos;s{" "}
              <Link
                to="/blog/doomsday-clock-2026"
                className="text-doom hover:underline"
              >
                79-year history
              </Link>
              .
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              But the clock is a warning, not a forecast. Its purpose is
              to galvanize action &mdash; to remind policymakers, military
              leaders, and citizens that the consequences of nuclear war
              are so catastrophic, so irreversible, and so far beyond
              anything humanity has experienced, that preventing it must
              remain the highest priority. The clock has moved backward
              eight times in its history, proving that progress is
              possible when leaders choose diplomacy, arms control, and
              cooperation.
            </p>
            <p className="text-foreground leading-relaxed">
              Understanding what would happen in a nuclear war is not
              about fear. It is about informed engagement with the most
              consequential issue of our time. The scientific evidence is
              clear: nuclear war would be a catastrophe beyond
              comprehension. The{" "}
              <Link
                to="/blog/why-is-doomsday-clock-important"
                className="text-doom hover:underline"
              >
                Doomsday Clock exists
              </Link>{" "}
              to ensure that this understanding translates into action
              before it is too late.
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
                  What would happen if nuclear war broke out today?
                </h3>
                <p className="text-sm text-muted-foreground">
                  A full-scale nuclear war between major powers would cause
                  hundreds of millions of immediate deaths from blast,
                  heat, and radiation. Within weeks, soot from burning
                  cities would block sunlight, triggering a nuclear winter
                  that could drop global temperatures by 10-15&deg;C.
                  Agricultural collapse would follow, potentially causing
                  billions of additional deaths from famine over the
                  following years.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  What is nuclear winter?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nuclear winter is a climate effect of nuclear war.
                  Firestorms from nuclear detonations would inject millions
                  of tons of soot into the stratosphere, blocking sunlight
                  and causing dramatic cooling of the Earth&apos;s surface.
                  Models by Robock et al. (2007) and subsequent studies
                  suggest global temperatures could drop by 10-15&deg;C,
                  persisting for years to decades, devastating agriculture
                  worldwide.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  How many people would die in a nuclear war?
                </h3>
                <p className="text-sm text-muted-foreground">
                  A 2022 study published in <em>Nature Food</em> estimated
                  that a full-scale nuclear war between the US and Russia
                  could kill approximately 360 million people directly and
                  cause over 5 billion deaths from famine due to nuclear
                  winter effects on agriculture. Even a limited regional
                  nuclear war between India and Pakistan (using ~100
                  weapons) could kill 2 billion people from famine alone.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Could civilization survive a nuclear war?
                </h3>
                <p className="text-sm text-muted-foreground">
                  A limited nuclear exchange involving fewer than 100
                  warheads might be survivable at a civilizational level,
                  though it would cause catastrophic regional destruction
                  and global climate effects. A full-scale exchange between
                  major powers, involving thousands of warheads, would
                  likely end modern civilization as we know it. Some human
                  populations would survive, but recovery to pre-war levels
                  of organization could take centuries.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  How far away from a nuclear blast is safe?
                </h3>
                <p className="text-sm text-muted-foreground">
                  For a typical modern warhead (300-800 kilotons), the
                  immediate kill zone extends roughly 5-8 km from ground
                  zero. Severe injuries and structural damage extend to
                  about 13 km. Fallout can travel hundreds of kilometers
                  downwind. However, there is no truly &quot;safe&quot;
                  distance in a full-scale nuclear war due to fallout
                  patterns, nuclear winter, and agricultural collapse
                  affecting the entire planet.
                </p>
              </div>
            </div>
          </section>
        </div>

        <RelatedArticles
          currentSlug="what-would-happen-in-a-nuclear-war"
          slugs={[
            "what-happens-doomsday-clock-midnight",
            "doomsday-clock-2026",
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
