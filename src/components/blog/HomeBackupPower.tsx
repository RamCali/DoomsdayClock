import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Zap } from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { ProductCard } from "./ProductCard";

export function HomeBackupPower() {
  useEffect(() => {
    updateMetaTags({
      title: "Best Home Backup Power Systems for Extended Outages (2026) | DoomsdayClock.net",
      description: "Complete guide to home backup power systems for extended outages. Solar generators, battery stations, and whole-home systems compared.",
      path: "/blog/best-home-backup-power-systems",
      type: "article",
      publishedTime: "2026-03-07",
      modifiedTime: "2026-03-07",
      section: "gear",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Best Home Backup Power Systems for Extended Outages",
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
        "@id": "https://doomsdayclock.net/blog/best-home-backup-power-systems",
      },
      description: "Comprehensive comparison of home backup power systems for emergency preparedness.",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "backup-power");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-blog-schema="backup-power"]');
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
          <span className="text-foreground">Home Backup Power</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <Zap className="w-3.5 h-3.5" />
            Gear Guide
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Best <span className="text-doom">Home Backup Power</span> Systems for Extended Outages
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              8 min read
            </span>
          </div>

          <AffiliateDisclosure />
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why Backup Power Is a Preparedness Priority
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Modern life runs on electricity. When the grid goes down — whether from extreme weather,
              infrastructure attacks, or the cascading failures that could accompany a major geopolitical
              crisis — everything from refrigeration to communication to medical equipment stops working.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              The US power grid is aging and increasingly vulnerable. In 2025 alone, there were over 1,000
              reported grid disturbances and emergency alerts. With the Doomsday Clock at 85 seconds to
              midnight, investing in backup power isn't about fear — it's about resilience.
            </p>
            <p className="text-foreground leading-relaxed">
              We've compared the leading backup power solutions across three categories: portable solar
              generators, whole-home battery systems, and traditional fuel generators. Each has its place
              depending on your needs, budget, and scenario planning.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Best Portable Solar Generators
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Solar generators combine battery storage with solar panel charging for indefinite renewable
              power. No fuel needed, silent operation, and zero emissions. Ideal for apartments, bug-out
              scenarios, and moderate power needs.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER25"
              title="EcoFlow DELTA 2 Max Portable Power Station"
              description="2,048Wh LFP battery expandable to 6,144Wh. Powers 99% of home appliances with 2,400W output. Charges 0-80% in 43 minutes via AC. X-Stream fast charging technology."
              price="$1,500 - $2,000"
            />

            <ProductCard
              asin="B0PLACEHOLDER26"
              title="Jackery Explorer 1000 Plus"
              description="1,264Wh capacity with 2,000W output. LFP battery rated for 4,000+ cycles (10+ year lifespan). Pairs with Jackery SolarSaga 100W panels for indefinite off-grid power."
              price="$800 - $1,200"
            />

            <ProductCard
              asin="B0PLACEHOLDER27"
              title="Bluetti AC200MAX Expandable Power Station"
              description="2,048Wh LFP battery expandable to 8,192Wh with external batteries. 2,200W pure sine wave inverter. Dual MPPT solar input charges via panels in 3 hours."
              price="$1,500 - $1,800"
            />

            <ProductCard
              asin="B0PLACEHOLDER28"
              title="Goal Zero Yeti 500X Portable Power Station"
              description="505Wh lithium battery in a compact package. Perfect starter unit for charging phones, laptops, routers, and small medical devices. Chainable with Goal Zero solar panels."
              price="$400 - $500"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Best Whole-Home Battery Systems
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              For homeowners who want seamless backup power that kicks in automatically during outages,
              whole-home battery systems are the gold standard. They integrate with your electrical panel
              and can pair with rooftop solar for energy independence.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER29"
              title="Tesla Powerwall 3"
              description="13.5kWh capacity with built-in inverter and automatic transfer switch. Powers your entire home during outages. Integrates with Tesla Solar or any existing solar system. Storm Watch feature pre-charges before severe weather."
              price="$8,000 - $12,000 (installed)"
            />

            <ProductCard
              asin="B0PLACEHOLDER30"
              title="Enphase IQ Battery 5P"
              description="5kWh modular battery that scales to 60kWh+. Microinverter-based architecture for maximum reliability — no single point of failure. Works with any solar array. 15-year warranty."
              price="$5,000 - $7,000 (installed)"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Best Fuel Generators (Gas & Dual-Fuel)
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When you need raw power output and can store fuel, traditional generators remain unmatched
              for high-demand applications. Dual-fuel models offer flexibility between gasoline and propane.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER31"
              title="Honda EU2200i Portable Inverter Generator"
              description="2,200W peak output, whisper-quiet operation (48-57 dB), and Honda's legendary reliability. Inverter technology provides clean power safe for electronics. 8+ hours runtime on a single tank."
              price="$1,000 - $1,200"
            />

            <ProductCard
              asin="B0PLACEHOLDER32"
              title="DuroMax XP13000HX Dual Fuel Generator"
              description="13,000W peak output on gas or propane. Powers an entire home including well pumps and central AC. Electric start, CO alert safety shutoff. Runs 8.5 hours at 50% load."
              price="$1,200 - $1,500"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Choosing the Right System
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-medium text-doom mb-2">Solar Generators Best For</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Apartments and rentals (no installation)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Extended outages (unlimited solar recharging)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Quiet operation (no noise, no fumes)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Bug-out scenarios (portable)
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-medium text-foreground mb-2">Fuel Generators Best For</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    High-power demands (AC, well pumps, tools)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Immediate power (no charging time)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Budget-friendly high wattage
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Short-term outages with fuel access
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-foreground leading-relaxed">
              For comprehensive preparedness, many experts recommend a hybrid approach: a portable solar
              generator for daily essentials and quiet nighttime power, plus a fuel generator for
              high-demand situations. This combination covers virtually any scenario, from a weekend
              storm outage to a prolonged grid failure.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Stay Informed, Stay Prepared
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Track the Doomsday Clock in real time and understand the threats shaping our world.
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
