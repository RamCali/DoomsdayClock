import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Shield } from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { ProductCard } from "./ProductCard";

export function SurvivalGear2026() {
  useEffect(() => {
    updateMetaTags({
      title: "Essential Survival Gear for 2026: A Preparedness Guide | DoomsdayClock.net",
      description: "Complete guide to essential survival gear for 2026. From bug-out bags to water filtration, the gear you need when the Doomsday Clock ticks closer to midnight.",
      path: "/blog/essential-survival-gear-2026",
      type: "article",
      publishedTime: "2026-03-07",
      modifiedTime: "2026-03-07",
      section: "gear",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Essential Survival Gear for 2026: A Preparedness Guide",
      datePublished: "2026-03-07",
      dateModified: "2026-03-07",
      author: { "@type": "Organization", name: "DoomsdayClock.net" },
      publisher: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        logo: {
          "@type": "ImageObject",
          url: "https://doomsdayclock.net/DoomsDayClock.net.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://doomsdayclock.net/blog/essential-survival-gear-2026",
      },
      description: "Comprehensive guide to essential survival and preparedness gear for 2026.",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "survival-gear");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-blog-schema="survival-gear"]');
      if (el) el.remove();
      resetToDefaults();
    };
  }, []);

  return (
    <article className="py-12 sm:py-16">
      <div className="container-tight">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-foreground">Survival Gear 2026</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <Shield className="w-3.5 h-3.5" />
            Gear Guide
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Essential <span className="text-doom">Survival Gear</span> for 2026: A Preparedness Guide
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              10 min read
            </span>
          </div>

          <AffiliateDisclosure />
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Preparedness in the Age of 85 Seconds
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The Doomsday Clock doesn't just track nuclear threats — it reflects the full spectrum of
              existential risks facing humanity, from climate disasters to pandemics to geopolitical
              instability. At 85 seconds to midnight, the message is clear: preparation isn't paranoia,
              it's prudence.
            </p>
            <p className="text-foreground leading-relaxed">
              This guide covers the essential gear categories for crisis preparedness, from basic
              bug-out bags to comprehensive home shelter setups. Whether you're building your first
              emergency kit or upgrading an existing one, these are the items that matter most.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Bug-Out Bags & Tactical Packs
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              A bug-out bag (BOB) is your grab-and-go survival kit — packed and ready for immediate
              evacuation. The bag itself is just as important as what goes in it.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER16"
              title="5.11 Tactical RUSH72 2.0 Backpack"
              description="55L tactical pack with MOLLE webbing, hydration-compatible design, and 20+ compartments. Used by military and first responders worldwide. Durable 1050D nylon construction."
              price="$180 - $220"
            />

            <ProductCard
              asin="B0PLACEHOLDER17"
              title="Mystery Ranch 2-Day Assault Pack"
              description="27L military-grade pack with the patented 3-ZIP design for instant access to all contents. BERRY-compliant (made to military spec). Adjustable yoke and harness system."
              price="$200 - $250"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Water Filtration & Purification
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Clean water is the #1 survival priority after shelter. In any crisis scenario — nuclear,
              natural disaster, or infrastructure failure — water treatment capability is non-negotiable.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER18"
              title="Sawyer Squeeze Water Filtration System"
              description="Filters 99.99999% of bacteria and 99.9999% of protozoa. Rated for 100,000 gallons — essentially a lifetime supply. Weighs only 3 oz. The gold standard for portable water filtration."
              price="$25 - $35"
            />

            <ProductCard
              asin="B0PLACEHOLDER19"
              title="LifeStraw Personal Water Filter"
              description="Drink directly from streams, lakes, and rivers. Removes 99.9999% of waterborne bacteria and 99.9% of parasites. Filters up to 1,000 gallons. Compact enough for any go-bag."
              price="$15 - $20"
            />

            <ProductCard
              asin="B0PLACEHOLDER20"
              title="Berkey BK4X2-BB Big Berkey Water Filter"
              description="Gravity-fed countertop water purifier for home/shelter use. Filters 2.75 gallons, removes viruses, bacteria, heavy metals, and pharmaceuticals. No electricity needed."
              price="$300 - $400"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Communication & Navigation
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When cell towers go down, you need alternative ways to receive information and navigate.
              These tools keep you connected and oriented when digital infrastructure fails.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER21"
              title="Midland ER310 Emergency Crank Weather Radio"
              description="NOAA weather alerts, AM/FM, hand crank + solar charging, built-in flashlight, USB charging port for phones. SOS beacon with strobe. The essential emergency communication device."
              price="$40 - $60"
            />

            <ProductCard
              asin="B0PLACEHOLDER22"
              title="Garmin GPSMAP 67i Satellite Communicator"
              description="GPS navigator with inReach satellite messaging — send texts and SOS from anywhere on Earth via Iridium network. Topo maps, 180-hour battery life. Works when everything else is down."
              price="$500 - $600"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              First Aid & Medical
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              A quality first aid kit goes beyond band-aids. In a serious emergency, you may not have
              access to medical care for days or weeks.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER23"
              title="MyMedic MyFAK First Aid Kit"
              description="Professional-grade trauma kit with tourniquet, QuikClot combat gauze, chest seal, and comprehensive wound care supplies. Organized in a compact MOLLE-compatible pouch."
              price="$100 - $150"
            />

            <ProductCard
              asin="B0PLACEHOLDER24"
              title="Adventure Medical Kits Sportsman 400"
              description="Comprehensive backcountry medical kit designed for groups of 1-7 people, 1-7 days. Includes wound care, medications, instruments, and a wilderness medicine guide."
              price="$60 - $80"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              The Complete Bug-Out Bag Checklist
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-medium text-doom mb-2">Essentials (Must-Have)</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Water filter + purification tablets
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    72-hour food supply (ration bars)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    First aid / trauma kit
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Fire starter (ferro rod + lighters)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Emergency shelter (tarp + emergency blankets)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Flashlight + extra batteries
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-medium text-foreground mb-2">Extended Kit</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Hand-crank radio (NOAA weather)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Solar phone charger
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Multi-tool (Leatherman or similar)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Paracord (100ft minimum)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Maps + compass (analog navigation)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Cash (small bills) + documents copies
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Monitor Global Threat Levels
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Stay informed about the events driving the Doomsday Clock and the risks they represent.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            View the Doomsday Clock
          </Link>
        </div>

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
