import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Package } from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";
import { AffiliateDisclosure } from "./AffiliateDisclosure";
import { ProductCard } from "./ProductCard";

export function EmergencyFoodSupply() {
  useEffect(() => {
    updateMetaTags({
      title: "Best Emergency Food Supplies for Long-Term Storage (2026) | DoomsdayClock.net",
      description: "Expert guide to the best emergency food supplies for long-term storage. From freeze-dried meals to survival food kits rated for 25+ years of shelf life.",
      path: "/blog/emergency-food-supply-guide",
      type: "article",
      publishedTime: "2026-03-07",
      modifiedTime: "2026-03-07",
      section: "gear",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Best Emergency Food Supplies for Long-Term Storage",
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
        "@id": "https://doomsdayclock.net/blog/emergency-food-supply-guide",
      },
      description: "Comprehensive guide to emergency food supplies for long-term storage and crisis preparedness.",
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "emergency-food");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.querySelector('script[data-blog-schema="emergency-food"]');
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
          <span className="text-foreground">Emergency Food Supply</span>
        </nav>

        {/* Article header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <Package className="w-3.5 h-3.5" />
            Gear Guide
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Best <span className="text-doom">Emergency Food Supplies</span> for Long-Term Storage
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

          <AffiliateDisclosure />
        </header>

        {/* Article body */}
        <div className="doom-card p-6 sm:p-8 md:p-10 space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Why Emergency Food Storage Matters Now
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              At 85 seconds to midnight, the Doomsday Clock reflects a world facing multiple existential
              threats — nuclear proliferation, climate instability, and geopolitical fragmentation. While we
              hope the worst never comes, the principle of preparedness is simple: it's better to have it and
              not need it than to need it and not have it.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              Emergency food storage isn't just for doomsday preppers. FEMA recommends every household
              maintain at least a 72-hour food supply, and many emergency management experts suggest
              extending that to 2-4 weeks. For those concerned about longer-term disruptions — supply
              chain breakdowns, economic instability, or natural disasters — a 3-6 month supply provides
              genuine peace of mind.
            </p>
            <p className="text-foreground leading-relaxed">
              We've tested and researched the leading emergency food options to help you build a supply
              that's nutritious, shelf-stable, and actually tastes decent when you need it most.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Best Complete Emergency Food Kits
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              These all-in-one kits are the easiest way to build an emergency food supply. Just add water
              and heat — each kit provides balanced nutrition with shelf lives of 25-30 years.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER9"
              title="Mountain House 14-Day Emergency Food Supply"
              description="Premium freeze-dried meals with the best taste in the category. 100+ servings, 25-year shelf life. Includes breakfast, lunch, and dinner options. Just add boiling water. Made in the USA."
              price="$250 - $350"
            />

            <ProductCard
              asin="B0PLACEHOLDER10"
              title="Augason Farms 30-Day Emergency Food Supply"
              description="307 servings across 47 food pouches. Includes oatmeal, soups, pasta, rice, and drinks. 25-year shelf life in resealable pouches packed inside stackable pails. Best value per calorie."
              price="$150 - $200"
            />

            <ProductCard
              asin="B0PLACEHOLDER11"
              title="ReadyWise Emergency Food Supply - 120 Servings"
              description="Grab-and-go emergency food bucket with breakfast and entree options. Lightweight, portable design perfect for bug-out scenarios. 25-year shelf life."
              price="$80 - $120"
            />

            <ProductCard
              asin="B0PLACEHOLDER12"
              title="4Patriots 3-Month Emergency Food Kit"
              description="2,000+ calories per day for 3 months. Compact, stackable packaging. Includes a variety of breakfasts, lunches, dinners, and snacks. Up to 25-year shelf life."
              price="$800 - $1,200"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Best Individual Survival Food Items
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              Building a custom emergency pantry? These individual items let you mix and match based on
              your dietary needs and preferences.
            </p>

            <ProductCard
              asin="B0PLACEHOLDER13"
              title="SOS Food Labs Emergency Ration Bars (3600 Cal)"
              description="US Coast Guard approved emergency rations. 3,600 calories per pack, 5-year shelf life. No preparation needed — eat straight from the package. Compact enough for go-bags."
              price="$8 - $12"
            />

            <ProductCard
              asin="B0PLACEHOLDER14"
              title="Augason Farms Dehydrated Potato Shreds (10 lb)"
              description="Versatile base for dozens of meals. Makes hash browns, mashed potatoes, soups, and stews. 20-year shelf life in a sealed #10 can. One of the best calorie-per-dollar options."
              price="$25 - $35"
            />

            <ProductCard
              asin="B0PLACEHOLDER15"
              title="Mountain House Freeze-Dried Ground Beef (#10 Can)"
              description="Shelf-stable protein that actually tastes like real beef. 30-year shelf life. Rehydrates in minutes. Essential for balanced nutrition in extended emergencies."
              price="$45 - $65"
            />
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              Emergency Food Storage Tips
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-lg bg-doom/10 border border-doom/30">
                <h4 className="font-medium text-doom mb-2">Storage Best Practices</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Store in a cool, dry, dark location (50-70°F ideal)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Keep off concrete floors (use pallets or shelves)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Rotate stock using FIFO (first in, first out)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-doom mt-0.5">&#9679;</span>
                    Don't forget water: 1 gallon per person per day
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-medium text-foreground mb-2">Common Mistakes</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Storing food you've never tasted (try it first)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Ignoring nutritional balance (don't just stock carbs)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Forgetting cooking fuel and utensils
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground/50 mt-0.5">&#9679;</span>
                    Not accounting for dietary restrictions
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-doom mb-4">
              How Much Should You Store?
            </h2>
            <p className="text-foreground leading-relaxed mb-4">
              The right amount depends on your household size, budget, and risk tolerance. Here's a
              practical framework:
            </p>
            <div className="space-y-4 my-6">
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Starter: 72-Hour Kit ($50-100/person)
                </h4>
                <p className="text-sm text-muted-foreground">
                  FEMA minimum recommendation. Emergency ration bars, water pouches, and basic supplies.
                  Good for short-term evacuations and natural disasters.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Intermediate: 2-4 Week Supply ($200-500/person)
                </h4>
                <p className="text-sm text-muted-foreground">
                  Covers supply chain disruptions, extended storms, and infrastructure failures.
                  Freeze-dried meals plus pantry staples. The sweet spot for most families.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-foreground mb-1">
                  Comprehensive: 3-6 Month Supply ($800-2000/person)
                </h4>
                <p className="text-sm text-muted-foreground">
                  For serious preparedness against economic collapse, prolonged emergencies, or regional
                  instability. A combination of #10 cans, freeze-dried meals, and bulk staples (rice,
                  beans, wheat).
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-8 glass-card p-6 text-center animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            How Close Are We to Midnight?
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Check the current Doomsday Clock time and explore the threats driving it forward.
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
