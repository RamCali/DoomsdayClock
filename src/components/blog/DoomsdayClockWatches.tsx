import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Watch } from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { ProductCard } from "./ProductCard";

export function DoomsdayClockWatches() {
  useEffect(() => {
    updateMetaTags({
      title: "Best Doomsday Clock Watches & Atomic-Age Timepieces | DoomsdayClock.net",
      description: "Discover the best doomsday clock-themed watches and atomic-age timepieces. From nuclear-inspired designs to survival watches built for any scenario.",
      path: "/blog/best-doomsday-clock-watches",
      type: "article",
      publishedTime: "2026-03-07",
      modifiedTime: "2026-03-07",
      section: "gear",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Best Doomsday Clock Watches & Atomic-Age Timepieces",
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
        "@id": "https://doomsdayclock.net/blog/best-doomsday-clock-watches",
      },
      description: "Curated guide to doomsday clock-themed watches and rugged survival timepieces.",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "watches");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-blog-schema="watches"]');
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
          <span className="text-foreground">Doomsday Clock Watches</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <Watch className="w-3.5 h-3.5" />
            Gear Guide
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Best <span className="text-doom">Doomsday Clock</span> Watches & Atomic-Age Timepieces
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              March 7, 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              7 min read
            </span>
          </div>

          <AffiliateDisclosure />
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why Doomsday Clock Watches Are Having a Moment
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              With the Doomsday Clock sitting at just 85 seconds to midnight — the closest it has ever been to
              catastrophe — interest in nuclear-age aesthetics and survival timepieces has surged. Whether you're
              a collector drawn to atomic iconography or someone who wants a rugged watch built for worst-case
              scenarios, these timepieces blend style with a stark reminder of the times we live in.
            </p>
            <p className="text-foreground leading-relaxed">
              We've curated a selection of watches that range from nuclear-themed collector's pieces to
              military-grade survival watches trusted by armed forces worldwide. Each pick is evaluated for
              build quality, functionality, and how well it fits the doomsday aesthetic.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Best Nuclear-Themed & Collectible Watches
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              These watches feature designs inspired by the atomic age — radiation symbols, countdown motifs,
              and Cold War aesthetics that capture the tension of the nuclear era.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER1"
              title="Casio G-Shock Mudmaster GWG-2000"
              description="Triple-sensor tough watch with barometer, compass, and thermometer. Built to MIL-STD-810 spec — the same standard used by the US military. Solar-powered with atomic timekeeping."
              price="$350 - $450"
            />

            <ProductCard
              asin="B0PLACEHOLDER2"
              title="Luminox Navy SEAL XS.3501"
              description="Swiss-made tactical watch with self-powered tritium illumination that glows for 25 years without charging. Carbon compound case, 200m water resistance. The official watch of the Navy SEALs."
              price="$350 - $500"
            />

            <ProductCard
              asin="B0PLACEHOLDER3"
              title="Marathon TSAR Military Diver's Watch"
              description="Government-issued dive watch built for the US military. Tritium tubes for always-on visibility, 300m water resistance, unidirectional bezel. Designed to survive anything."
              price="$500 - $700"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Best Survival & Tactical Watches
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              When reliability matters more than aesthetics, these watches deliver. Solar-powered,
              ABC (altimeter-barometer-compass) sensors, and builds that can take a beating.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER4"
              title="Casio Pro Trek PRW-3500"
              description="Triple sensor with altimeter, barometer, and digital compass. Tough Solar power, atomic timekeeping, 100m water resistance. Perfect for wilderness survival scenarios."
              price="$200 - $300"
            />

            <ProductCard
              asin="B0PLACEHOLDER5"
              title="Garmin Instinct 2X Solar - Tactical Edition"
              description="GPS smartwatch with unlimited solar battery life. Night vision compatibility, stealth mode, dual-position format. Built-in navigation, weather alerts, and health monitoring."
              price="$350 - $450"
            />

            <ProductCard
              asin="B0PLACEHOLDER6"
              title="Suunto Core All Black Military"
              description="Outdoor watch with altimeter, barometer, compass, and storm alarm. Known for its minimalist design and extreme durability. A favorite among preppers and outdoor enthusiasts."
              price="$150 - $250"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Budget-Friendly Options
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              You don't need to spend a fortune to get a reliable doomsday-ready watch. These affordable
              options deliver excellent value with proven durability.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER7"
              title="Casio G-Shock DW5600E"
              description="The original G-Shock square — virtually indestructible, 200m water resistance, 10-year battery. Worn by special forces operators worldwide. The best value in survival watches, period."
              price="$40 - $60"
            />

            <ProductCard
              asin="B0PLACEHOLDER8"
              title="Timex Expedition Scout"
              description="Affordable field watch with Indiglo backlight, date display, and a NATO strap. Simple, reliable, and easy to read in any condition. Great entry point for a preparedness kit."
              price="$35 - $50"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              What to Look for in a Doomsday Watch
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              If the clock ever does strike midnight, your smartphone won't save you. A reliable analog or
              solar-powered watch becomes essential when infrastructure fails. Here's what matters:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-medium text-doom mb-2">Must-Have Features</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Solar or long-life battery (no charging needed)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Water resistance (200m+ for serious use)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Shock resistance (MIL-STD-810 rated)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Lume or tritium illumination
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-medium text-foreground mb-2">Nice-to-Have Features</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    ABC sensors (altimeter, barometer, compass)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    GPS navigation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Atomic timekeeping (auto-sync)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Sapphire crystal (scratch-proof)
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Track the Clock in Real Time
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Check where the Doomsday Clock stands right now and explore the full history since 1947.
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
