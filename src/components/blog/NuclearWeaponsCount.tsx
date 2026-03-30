import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Globe, Shield } from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { RelatedArticles } from "./RelatedArticles";

export function NuclearWeaponsCount() {
  useEffect(() => {
    updateMetaTags({
      title:
        "How Many Nuclear Weapons Exist in 2026? Country-by-Country Breakdown | DoomsdayClock.net",
      description:
        "There are approximately 12,100 nuclear warheads worldwide in 2026. See the complete country-by-country breakdown, who has the most, and how stockpiles affect the Doomsday Clock.",
      path: "/blog/how-many-nuclear-weapons-exist-2026",
      newsKeywords:
        "how many nuclear weapons in the world 2026, nuclear weapons by country, nuclear warheads count, how many nukes does russia have, nuclear arsenal 2026, nuclear weapons stockpile",
      publishedTime: "2026-03-15T00:00:00Z",
      modifiedTime: "2026-03-15T00:00:00Z",
      section: "Explainer",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline:
        "How Many Nuclear Weapons Exist in 2026? Country-by-Country Breakdown",
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
          "https://doomsdayclock.net/blog/how-many-nuclear-weapons-exist-2026",
      },
      description:
        "There are approximately 12,100 nuclear warheads worldwide in 2026. Complete country-by-country breakdown and how stockpiles affect the Doomsday Clock.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Explainer",
      keywords: [
        "nuclear weapons count 2026",
        "nuclear warheads by country",
        "nuclear arsenal",
        "nuclear stockpile",
        "doomsday clock",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 2000,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many nuclear weapons are there in the world in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "As of 2026, there are approximately 12,100 nuclear warheads in the world. This includes both deployed and stockpiled weapons held by nine nuclear-armed states. Russia and the United States together possess roughly 88% of all nuclear weapons.",
          },
        },
        {
          "@type": "Question",
          name: "Which country has the most nuclear weapons in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Russia has the most nuclear weapons in 2026, with approximately 5,580 total warheads. The United States is second with approximately 5,044 warheads. Together, these two countries hold about 88% of the global nuclear arsenal.",
          },
        },
        {
          "@type": "Question",
          name: "How many nukes does Russia have?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Russia has approximately 5,580 nuclear warheads as of 2026. Of these, roughly 1,710 are strategically deployed on intercontinental ballistic missiles, submarine-launched missiles, and heavy bomber bases. The rest are in military stockpile or awaiting dismantlement.",
          },
        },
        {
          "@type": "Question",
          name: "Is the number of nuclear weapons increasing or decreasing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The global total has decreased dramatically from its Cold War peak of approximately 70,000 warheads in 1986 to about 12,100 in 2026. However, the pace of reductions has stalled in recent years, and several countries — including China, India, Pakistan, and North Korea — are actively expanding their arsenals.",
          },
        },
        {
          "@type": "Question",
          name: "Does China have nuclear weapons?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. China has approximately 500 nuclear warheads as of 2026, making it the third-largest nuclear arsenal in the world. China is in the midst of a significant nuclear buildup, with the Pentagon estimating the arsenal could grow to over 1,000 warheads by 2030 and 1,500 by 2035.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "nuclear-weapons-count");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "nuclear-weapons-count-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="nuclear-weapons-count"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="nuclear-weapons-count-faq"]'
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
          <span className="text-foreground">Nuclear Weapons Count 2026</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <Globe className="w-3.5 h-3.5" />
            Explainer
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            How Many Nuclear Weapons Exist in 2026?{" "}
            <span className="text-doom">Country-by-Country Breakdown</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 15, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              9 min read
            </span>
          </div>

          {/* Current clock context */}
          <div className="doom-accent-card p-4 flex items-center gap-4">
            <Shield className="w-8 h-8 text-doom shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">
                The Doomsday Clock is currently at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight &mdash; nuclear weapons remain the primary driver
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
          {/* Section 1: Total Nuclear Weapons in 2026 */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Total Nuclear Weapons in 2026
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              As of early 2026, there are approximately{" "}
              <strong>12,100 nuclear warheads</strong> in the world, held by
              nine countries. This figure includes warheads that are
              operationally deployed, held in military stockpiles, and those
              retired but awaiting dismantlement. The estimate comes from the
              Federation of American Scientists (FAS), the Stockholm
              International Peace Research Institute (SIPRI), and other
              open-source intelligence analyses.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              While 12,100 is a staggering number, it represents a dramatic
              reduction from the Cold War peak. At the height of the nuclear
              arms race in 1986, the global stockpile exceeded 70,000 warheads.
              The reductions since then are largely the result of bilateral
              treaties between the United States and the Soviet Union (later
              Russia), including START I, START II, SORT, and New START. But
              the era of large-scale reductions appears to be over. The pace
              of disarmament has slowed to a near halt, and several
              nuclear-armed states are actively expanding their arsenals.
            </p>
            <p className="text-foreground leading-relaxed">
              Understanding these numbers matters because nuclear weapons
              remain the single most immediate existential threat to
              civilization. The Bulletin of the Atomic Scientists consistently
              identifies nuclear risk as the primary factor in setting the{" "}
              <Link
                to="/blog/doomsday-clock-2026"
                className="text-doom hover:underline"
              >
                Doomsday Clock
              </Link>
              . At{" "}
              <span className="text-doom font-semibold">
                {currentTime.display}
              </span>{" "}
              to midnight, the clock reflects a world where these arsenals are
              not just maintained but modernized, expanded, and increasingly
              entangled with geopolitical conflicts.
            </p>
          </section>

          {/* Section 2: Country-by-Country Breakdown */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Nuclear Weapons by Country: The Full Breakdown
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Nine countries are known to possess nuclear weapons. Five are
              recognized as nuclear-weapon states under the Nuclear
              Non-Proliferation Treaty (NPT): the United States, Russia, the
              United Kingdom, France, and China. Four others &mdash; India,
              Pakistan, Israel, and North Korea &mdash; developed weapons
              outside the NPT framework.
            </p>

            {/* Country table */}
            <div className="overflow-x-auto my-6">
              <div className="grid grid-cols-1 gap-3">
                {/* Header */}
                <div className="hidden sm:grid sm:grid-cols-4 gap-4 px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <span>Country</span>
                  <span className="text-right">Total Warheads</span>
                  <span className="text-right">Deployed</span>
                  <span className="text-right">% of Global</span>
                </div>

                {/* Russia */}
                <div className="p-4 rounded-lg bg-doom/10 border border-doom/30 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-bold text-doom">
                    Russia
                  </span>
                  <span className="text-sm text-foreground sm:text-right">
                    ~5,580
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    ~1,710
                  </span>
                  <span className="text-sm text-doom font-medium sm:text-right">
                    46.1%
                  </span>
                </div>

                {/* United States */}
                <div className="p-4 rounded-lg bg-doom/10 border border-doom/30 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-bold text-doom">
                    United States
                  </span>
                  <span className="text-sm text-foreground sm:text-right">
                    ~5,044
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    ~1,670
                  </span>
                  <span className="text-sm text-doom font-medium sm:text-right">
                    41.7%
                  </span>
                </div>

                {/* China */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-semibold text-foreground">
                    China
                  </span>
                  <span className="text-sm text-foreground sm:text-right">
                    ~500
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    ~24 (est.)
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    4.1%
                  </span>
                </div>

                {/* France */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-semibold text-foreground">
                    France
                  </span>
                  <span className="text-sm text-foreground sm:text-right">
                    290
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    ~280
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    2.4%
                  </span>
                </div>

                {/* United Kingdom */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-semibold text-foreground">
                    United Kingdom
                  </span>
                  <span className="text-sm text-foreground sm:text-right">
                    225
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    ~120
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    1.9%
                  </span>
                </div>

                {/* India */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-semibold text-foreground">
                    India
                  </span>
                  <span className="text-sm text-foreground sm:text-right">
                    ~172
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    N/A
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    1.4%
                  </span>
                </div>

                {/* Pakistan */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-semibold text-foreground">
                    Pakistan
                  </span>
                  <span className="text-sm text-foreground sm:text-right">
                    ~170
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    N/A
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    1.4%
                  </span>
                </div>

                {/* Israel */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-semibold text-foreground">
                    Israel
                  </span>
                  <span className="text-sm text-foreground sm:text-right">
                    ~90
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    N/A
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    0.7%
                  </span>
                </div>

                {/* North Korea */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/10 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-semibold text-foreground">
                    North Korea
                  </span>
                  <span className="text-sm text-foreground sm:text-right">
                    ~50
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    N/A
                  </span>
                  <span className="text-sm text-muted-foreground sm:text-right">
                    0.4%
                  </span>
                </div>

                {/* Total */}
                <div className="p-4 rounded-lg bg-doom/20 border border-doom/40 sm:grid sm:grid-cols-4 sm:gap-4 sm:items-center">
                  <span className="text-sm font-bold text-doom">
                    TOTAL
                  </span>
                  <span className="text-sm font-bold text-doom sm:text-right">
                    ~12,121
                  </span>
                  <span className="text-sm text-doom sm:text-right">
                    ~3,804
                  </span>
                  <span className="text-sm text-doom font-bold sm:text-right">
                    100%
                  </span>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground italic mb-4">
              Sources: Federation of American Scientists (FAS), SIPRI Yearbook
              2025, Arms Control Association. Figures are estimates as of early
              2026. &quot;Deployed&quot; refers to warheads placed on missiles
              or located at operational bases. Israel maintains a policy of
              nuclear ambiguity and has never officially confirmed its arsenal.
            </p>

            <p className="text-foreground leading-relaxed">
              The concentration of nuclear weapons is striking. Russia and
              the United States together hold approximately 10,624 warheads
              &mdash; about 88% of the global total. This duopoly has defined
              the nuclear age since the 1940s. But the landscape is shifting.
              China&apos;s rapid buildup, the India-Pakistan rivalry, North
              Korea&apos;s advancing capabilities, and Iran&apos;s nuclear
              ambitions are making the picture increasingly complex and
              multipolar.
            </p>
          </section>

          {/* Section 3: Deployed vs Stockpiled vs Retired */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Deployed vs. Stockpiled vs. Retired: Understanding the Categories
            </h2>
            <p className="text-foreground leading-relaxed mb-6">
              Not all 12,100 warheads are ready to launch at a moment&apos;s
              notice. Nuclear weapons exist in several categories, each with
              different levels of readiness and strategic significance.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2">
                  Deployed (~3,800)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Warheads placed on intercontinental ballistic missiles
                  (ICBMs), submarine-launched ballistic missiles (SLBMs), or
                  stored at bases with operational heavy bombers. These are
                  the weapons that can be launched within minutes. Only the
                  US, Russia, France, and the UK are believed to maintain
                  deployed warheads in this category.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Stockpiled (~9,500)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Warheads in military custody but not currently mounted on
                  delivery systems. These include reserve warheads that can
                  be deployed relatively quickly, as well as tactical nuclear
                  weapons stored at military facilities. All nine
                  nuclear-armed states maintain stockpiles. This category
                  also includes warheads undergoing maintenance or awaiting
                  deployment to delivery systems.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-2">
                  Retired (~2,600)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Warheads removed from active military service and awaiting
                  dismantlement. Although these weapons are no longer
                  considered part of the operational arsenal, the fissile
                  material they contain could theoretically be reused.
                  Dismantlement is a slow process &mdash; the US, for
                  example, dismantles only a few hundred warheads per year.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              The distinction matters because headlines about &quot;total
              warheads&quot; can be misleading. Russia&apos;s 5,580 total
              includes roughly 1,500 warheads awaiting dismantlement. But even
              the &quot;active&quot; stockpiles of Russia and the United States
              are far larger than what would be needed to cause civilizational
              collapse. Studies suggest that a nuclear exchange involving as few
              as 100 warheads could trigger a nuclear winter severe enough to
              threaten global food production.
            </p>
          </section>

          {/* Section 4: How Nuclear Stockpiles Have Changed */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How Nuclear Stockpiles Have Changed Over Time
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The history of nuclear weapons stockpiles is a story of
              explosive growth followed by gradual, treaty-driven reduction
              &mdash; and then stagnation. Understanding this trajectory is
              essential context for the current moment.
            </p>

            <div className="space-y-3 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    1945
                  </span>
                  <span className="text-sm text-muted-foreground">
                    2 warheads &mdash; US only (Trinity test + Hiroshima/Nagasaki)
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    1955
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ~2,636 &mdash; US and Soviet Union racing to stockpile
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    1965
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ~38,000 &mdash; peak US stockpile of ~31,000
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-doom">
                    1986
                  </span>
                  <span className="text-sm text-doom font-medium">
                    ~70,300 &mdash; all-time peak (Cold War apex)
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-green-400">
                    1991
                  </span>
                  <span className="text-sm text-green-400">
                    ~55,000 &mdash; START I signed, reductions begin
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2000
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ~31,500 &mdash; continued post-Cold War reductions
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2010
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ~22,000 &mdash; New START signed, further cuts
                  </span>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    2026
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ~12,100 &mdash; reductions stalled, modernization ongoing
                  </span>
                </div>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The reduction from 70,300 to 12,100 &mdash; an 83% decrease
              &mdash; is one of the great diplomatic achievements of the 20th
              and 21st centuries. It was driven primarily by a series of
              bilateral treaties between the US and Russia that set
              verifiable limits on deployed warheads and delivery systems.
              The{" "}
              <Link
                to="/blog/doomsday-clock-cold-war"
                className="text-doom hover:underline"
              >
                Cold War era
              </Link>{" "}
              saw the most dramatic swings, with the Doomsday Clock
              reflecting both the terrifying buildup and the hopeful
              wind-down of nuclear stockpiles.
            </p>
            <p className="text-foreground leading-relaxed">
              But the trajectory has flattened. Annual reductions that once
              numbered in the thousands have slowed to the hundreds, and in
              some years the numbers have barely moved at all. Meanwhile, all
              nine nuclear-armed states are investing heavily in modernizing
              their arsenals &mdash; developing new warheads, new delivery
              systems, and new capabilities that make the weapons faster,
              more accurate, and harder to intercept.
            </p>
          </section>

          {/* Section 5: How Nuclear Weapons Affect the Doomsday Clock */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How Nuclear Weapons Affect the Doomsday Clock
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Nuclear weapons have been the primary factor in setting the
              Doomsday Clock since its creation in 1947. The Bulletin of the
              Atomic Scientists was founded by Manhattan Project scientists
              who understood the destructive potential of the weapons they
              had helped create. From the beginning, the clock was designed
              to communicate the danger of nuclear annihilation to the
              public.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              While the Bulletin now considers climate change and
              disruptive technologies alongside nuclear threats, nuclear
              weapons remain the most acute risk. The reasoning is
              straightforward: nuclear war is the only threat category that
              could end civilization in a matter of hours. Climate change
              and AI pose existential risks, but they unfold over years or
              decades. A nuclear exchange could kill hundreds of millions
              of people and trigger a nuclear winter before most people
              even know what has happened.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The relationship between stockpile size and the Doomsday
              Clock is not linear. The clock has been closer to midnight
              with 12,100 warheads in 2026 than it was with 70,000
              warheads in 1986. This reflects the Bulletin&apos;s
              assessment that <em>context</em> matters as much as raw
              numbers. In 1986, despite massive arsenals, there were
              functioning arms control treaties, hotline communications
              between superpowers, and a shared understanding of mutual
              assured destruction that constrained behavior.
            </p>
            <p className="text-foreground leading-relaxed">
              In 2026, many of those guardrails have eroded. New START
              expired in February 2026 without a successor. Russia has
              suspended participation in remaining inspection regimes.
              The US and China have no bilateral arms control agreement of
              any kind. North Korea continues to test increasingly
              capable missiles. And the{" "}
              <Link
                to="/blog/doomsday-clock-history-timeline"
                className="text-doom hover:underline"
              >
                Doomsday Clock&apos;s history
              </Link>{" "}
              shows that it is this erosion of the diplomatic
              infrastructure &mdash; more than the weapons themselves
              &mdash; that drives the clock closer to midnight.
            </p>
          </section>

          {/* Section 6: The Arms Control Gap */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Arms Control Gap: Collapsed Treaties and Modernization
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The framework of treaties that once constrained nuclear arsenals
              has largely collapsed. Understanding what has been lost is
              critical to grasping the current danger.
            </p>

            <div className="space-y-4 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2">
                  Anti-Ballistic Missile (ABM) Treaty
                </h4>
                <p className="text-sm text-muted-foreground">
                  Signed in 1972 between the US and Soviet Union. Withdrawn
                  by the US in 2002. The ABM Treaty limited missile defense
                  systems, preserving the logic of mutual assured
                  destruction. Its collapse opened the door to a new arms
                  race in missile defense and hypersonic weapons.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-doom mb-2">
                  Intermediate-Range Nuclear Forces (INF) Treaty
                </h4>
                <p className="text-sm text-muted-foreground">
                  Signed in 1987, eliminated an entire class of nuclear
                  missiles. The US withdrew in 2019, citing Russian
                  violations. Both countries have since tested and deployed
                  missiles that would have been prohibited under the treaty.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-semibold text-doom mb-2">
                  New START Treaty
                </h4>
                <p className="text-sm text-muted-foreground">
                  The last remaining bilateral arms control treaty between
                  the US and Russia. Limited each side to 1,550 deployed
                  strategic warheads. Russia suspended its participation in
                  2023, and the treaty expired in February 2026 without a
                  successor. For the first time since the 1970s, there are
                  no legally binding limits on US or Russian nuclear
                  arsenals.
                </p>
              </div>
            </div>

            <p className="text-foreground leading-relaxed mb-4">
              The collapse of arms control has been accompanied by
              unprecedented modernization programs. The United States has
              committed over $1.7 trillion over 30 years to rebuild its
              entire nuclear triad &mdash; new ICBMs (Sentinel), new
              ballistic missile submarines (Columbia-class), new stealth
              bombers (B-21 Raider), and new warheads. Russia is deploying
              novel systems including the Sarmat heavy ICBM, Poseidon
              nuclear-powered torpedo, and Avangard hypersonic glide vehicle.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              China&apos;s buildup is the most significant change in the
              nuclear balance. The Pentagon estimates China could have over
              1,000 warheads by 2030 and 1,500 by 2035 &mdash; tripling its
              current arsenal. China is constructing hundreds of new ICBM
              silos, developing submarine-launched missiles, and building a
              nuclear triad for the first time. This expansion is
              fundamentally changing the calculus of nuclear deterrence,
              which for decades operated as a primarily bilateral
              US-Russia dynamic.
            </p>
            <p className="text-foreground leading-relaxed">
              The combination of collapsed treaties and active modernization
              creates what arms control experts call a &quot;strategic
              instability spiral.&quot; Without transparency measures and
              verified limits, each side interprets the other&apos;s
              modernization as threatening, driving further buildup. This is
              the dynamic that pushed the Doomsday Clock into seconds
              territory in 2020 and continues to push it closer to midnight
              today.
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
                  How many nuclear weapons are there in the world in 2026?
                </h3>
                <p className="text-sm text-muted-foreground">
                  As of 2026, there are approximately 12,100 nuclear
                  warheads in the world. This includes both deployed and
                  stockpiled weapons held by nine nuclear-armed states.
                  Russia and the United States together possess roughly 88%
                  of all nuclear weapons.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Which country has the most nuclear weapons in 2026?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Russia has the most nuclear weapons in 2026, with
                  approximately 5,580 total warheads. The United States is
                  second with approximately 5,044 warheads. Together, these
                  two countries hold about 88% of the global nuclear
                  arsenal.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  How many nukes does Russia have?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Russia has approximately 5,580 nuclear warheads as of
                  2026. Of these, roughly 1,710 are strategically deployed
                  on intercontinental ballistic missiles, submarine-launched
                  missiles, and heavy bomber bases. The rest are in military
                  stockpile or awaiting dismantlement.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Is the number of nuclear weapons increasing or decreasing?
                </h3>
                <p className="text-sm text-muted-foreground">
                  The global total has decreased dramatically from its Cold
                  War peak of approximately 70,000 warheads in 1986 to
                  about 12,100 in 2026. However, the pace of reductions has
                  stalled in recent years, and several countries &mdash;
                  including China, India, Pakistan, and North Korea &mdash;
                  are actively expanding their arsenals.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h3 className="font-semibold text-foreground mb-2">
                  Does China have nuclear weapons?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yes. China has approximately 500 nuclear warheads as of
                  2026, making it the third-largest nuclear arsenal in the
                  world. China is in the midst of a significant nuclear
                  buildup, with the Pentagon estimating the arsenal could
                  grow to over 1,000 warheads by 2030 and 1,500 by 2035.
                </p>
              </div>
            </div>
          </section>
        </div>

        <RelatedArticles
          currentSlug="how-many-nuclear-weapons-exist-2026"
          slugs={[
            "doomsday-clock-2026",
            "doomsday-clock-cold-war",
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
