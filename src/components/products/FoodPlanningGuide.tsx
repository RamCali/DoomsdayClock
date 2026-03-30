import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  Download,
  BookOpen,
  CheckCircle,
  Droplets,
  Flame,
  Package,
  ClipboardList,
  DollarSign,
  UtensilsCrossed,
  Thermometer,
  AlertTriangle,
  ArrowRight,
  Clock,
  Users,
} from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

const GUMROAD_URL = "https://doomsdayclock.gumroad.com/l/food-planning-guide";

export function FoodPlanningGuide() {
  useEffect(() => {
    updateMetaTags({
      title:
        "90-Day Emergency Food Planning Guide — Complete Meal Plans, Shopping Lists & Recipes | $7.99",
      description:
        "Complete 90-day emergency food planning guide with calorie calculations, week-by-week shopping lists, 30+ shelf-stable recipes, storage methods, rotation schedules, and budget planning. Instant digital download.",
      path: "/store/food-planning-guide",
      newsKeywords:
        "emergency food planning, 90 day food supply, emergency food storage guide, emergency meal plan, survival food list, emergency food shopping list, prepper food guide, food storage shelf life",
      publishedTime: "2026-03-30T00:00:00Z",
      modifiedTime: "2026-03-30T00:00:00Z",
      section: "Products",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "90-Day Emergency Food Planning Guide",
      datePublished: "2026-03-30T00:00:00Z",
      dateModified: "2026-03-30T00:00:00Z",
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
        "@id": "https://doomsdayclock.net/store/food-planning-guide",
      },
      description:
        "Complete 90-day emergency food planning guide with calorie calculations, shopping lists, recipes, storage methods, and budget planning.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Products",
      keywords: [
        "emergency food planning",
        "90 day food supply",
        "emergency food storage",
        "survival food guide",
        "prepper meal plan",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: false,
      wordCount: 4500,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much food do I need for a 90-day emergency supply?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A single adult needs roughly 1,500-2,200 calories per day depending on activity level, totaling 135,000-198,000 calories over 90 days. In practical terms, this translates to approximately 150-200 lbs of stored food per person, costing $300-500. The guide provides exact quantities for every household configuration.",
          },
        },
        {
          "@type": "Question",
          name: "What foods last the longest in emergency storage?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "White rice, dried beans, rolled oats, honey, salt, sugar, and freeze-dried foods can last 25-30+ years when stored properly in Mylar bags with oxygen absorbers inside 5-gallon buckets. Canned goods typically last 2-5 years. The guide includes a full shelf-life reference table for 30+ common items.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a 90-day food supply cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 90-day food supply costs $300-500 for one person, $500-800 for two people, and $800-1,200 for a family of four when buying in bulk. The guide includes a 12-week phased purchasing plan at $30-50 per week so you can build your supply gradually without straining your budget.",
          },
        },
        {
          "@type": "Question",
          name: "Can I build an emergency food supply on a tight budget?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The cheapest calories come from bulk rice ($0.03/100 cal), dried beans ($0.05/100 cal), and rolled oats ($0.04/100 cal). By focusing on these staples first and adding variety over time, you can build a full 90-day supply for under $400 per person. The guide includes cost-per-calorie comparisons and budget strategies.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best way to store emergency food long-term?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The gold standard for long-term food storage is Mylar bags with oxygen absorbers sealed inside food-grade 5-gallon buckets, stored in a cool (50-70F), dark, dry location. This method protects against the five enemies of food storage: heat, light, moisture, oxygen, and pests. The guide walks through every step of the process.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "food-planning-guide");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "food-planning-guide-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="food-planning-guide"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="food-planning-guide-faq"]'
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
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/store" className="hover:text-foreground transition-colors">
            Store
          </Link>
          <span>/</span>
          <span className="text-foreground">
            90-Day Emergency Food Planning Guide
          </span>
        </nav>

        {/* =========================================================
            HERO SECTION
        ========================================================= */}
        <header className="mb-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium">
            <Download className="w-3.5 h-3.5" />
            Digital Guide — Instant Download
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">90-Day Emergency</span> Food Planning
            Guide
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Complete meal planning for 90 days of emergency food storage.
            Shopping lists, rotation schedules, calorie calculations, recipes,
            and storage best practices — everything you need in one
            comprehensive guide.
          </p>

          {/* Price + CTA */}
          <div className="doom-accent-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex-1 space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-doom">$7.99</span>
                <span className="text-sm text-muted-foreground line-through">
                  $14.99
                </span>
                <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full font-medium">
                  47% OFF
                </span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" /> 8 chapters
                </span>
                <span className="flex items-center gap-1.5">
                  <UtensilsCrossed className="w-4 h-4" /> 30+ recipes
                </span>
                <span className="flex items-center gap-1.5">
                  <ClipboardList className="w-4 h-4" /> Shopping lists included
                </span>
                <span className="flex items-center gap-1.5">
                  <Download className="w-4 h-4" /> Instant PDF download
                </span>
              </div>
            </div>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-doom hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-base whitespace-nowrap"
            >
              <ShoppingCart className="w-5 h-5" />
              Buy Now on Gumroad
            </a>
          </div>
        </header>

        {/* =========================================================
            TABLE OF CONTENTS
        ========================================================= */}
        <section className="mb-16">
          <div className="glass-card p-6 sm:p-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-doom" />
              Table of Contents
            </h2>
            <ol className="grid sm:grid-cols-2 gap-2 text-sm sm:text-base">
              {[
                {
                  icon: <Users className="w-4 h-4" />,
                  label: "Calorie Planning by Household",
                },
                {
                  icon: <Package className="w-4 h-4" />,
                  label: "The Pantry Foundation — Bulk Staples",
                },
                {
                  icon: <ShoppingCart className="w-4 h-4" />,
                  label: "Week-by-Week Shopping Lists",
                },
                {
                  icon: <Thermometer className="w-4 h-4" />,
                  label: "Storage Methods & Shelf Life",
                },
                {
                  icon: <Droplets className="w-4 h-4" />,
                  label: "Water Storage & Purification for Cooking",
                },
                {
                  icon: <UtensilsCrossed className="w-4 h-4" />,
                  label: "30-Day Meal Plan with Recipes",
                },
                {
                  icon: <ClipboardList className="w-4 h-4" />,
                  label: "Rotation Schedule & Inventory Tracking",
                },
                {
                  icon: <DollarSign className="w-4 h-4" />,
                  label: "Budget Planning & Cost Optimization",
                },
              ].map((ch, i) => (
                <li key={i}>
                  <a
                    href={`#chapter-${i + 1}`}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground"
                  >
                    <span className="text-doom font-bold min-w-[1.5rem]">
                      {i + 1}.
                    </span>
                    {ch.icon}
                    {ch.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* =========================================================
            CHAPTER 1: CALORIE PLANNING
        ========================================================= */}
        <section id="chapter-1" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/20 text-doom font-bold text-lg">
              1
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Calorie Planning by Household
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              The single most important step in emergency food planning is
              knowing exactly how many calories your household needs each day.
              Under-estimate and you risk malnutrition during a crisis;
              over-estimate and you waste money and storage space. This chapter
              gives you precise numbers and a simple worksheet to calculate your
              90-day total.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Daily Calorie Needs by Age, Gender & Activity Level
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-3 text-foreground font-semibold">
                      Person
                    </th>
                    <th className="text-right py-2 px-3 text-foreground font-semibold">
                      Active (cal/day)
                    </th>
                    <th className="text-right py-2 px-3 text-foreground font-semibold">
                      Sedentary (cal/day)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["Adult male (19-64)", "2,200", "1,600"],
                    ["Adult female (19-64)", "1,800", "1,400"],
                    ["Child 6-12", "1,600", "1,200"],
                    ["Child 1-5", "1,200", "1,000"],
                    ["Elderly 65+", "1,600", "1,200"],
                    ["Pregnant / nursing", "2,200", "1,800"],
                  ].map(([person, active, sedentary], i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className="py-2 px-3">{person}</td>
                      <td className="py-2 px-3 text-right font-mono text-doom">
                        {active}
                      </td>
                      <td className="py-2 px-3 text-right font-mono">
                        {sedentary}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              How to Calculate Your Household Total
            </h3>
            <div className="doom-card p-4 space-y-2 text-sm font-mono">
              <p>
                <span className="text-doom">Step 1:</span> List every household
                member and their daily calorie need from the table above.
              </p>
              <p>
                <span className="text-doom">Step 2:</span> Add all individual
                needs to get your{" "}
                <strong className="text-foreground">
                  household daily total
                </strong>
                .
              </p>
              <p>
                <span className="text-doom">Step 3:</span> Multiply by 90 days
                for your{" "}
                <strong className="text-foreground">
                  90-day calorie target
                </strong>
                .
              </p>
              <p>
                <span className="text-doom">Step 4:</span> Add a 10% buffer for
                waste, spoilage, and guests.
              </p>
            </div>

            <h4 className="text-base font-semibold text-foreground">
              Example: Family of Four
            </h4>
            <div className="glass-card p-4 text-sm font-mono space-y-1">
              <p>
                Adult male (active): 2,200 cal/day
              </p>
              <p>
                Adult female (active): 1,800 cal/day
              </p>
              <p>
                Child age 10: 1,400 cal/day
              </p>
              <p>
                Child age 6: 1,200 cal/day
              </p>
              <p className="border-t border-white/10 pt-1 text-foreground">
                Daily total: <span className="text-doom">6,600 cal/day</span>
              </p>
              <p className="text-foreground">
                90-day total: 6,600 x 90 ={" "}
                <span className="text-doom">594,000 cal</span>
              </p>
              <p className="text-foreground">
                With 10% buffer:{" "}
                <span className="text-doom font-bold">653,400 cal</span>
              </p>
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Stress & Cold-Weather Multipliers
            </h3>
            <p>
              In a real emergency, calorie needs increase. Physical labor,
              stress, and cold temperatures all raise your metabolic rate. Apply
              these multipliers to your baseline:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-foreground">
                  Cold weather (below 40 F):
                </strong>{" "}
                +15-25% more calories needed
              </li>
              <li>
                <strong className="text-foreground">
                  Heavy physical labor:
                </strong>{" "}
                +20-30% more calories needed
              </li>
              <li>
                <strong className="text-foreground">High stress / illness:</strong>{" "}
                +10-15% more calories needed
              </li>
              <li>
                <strong className="text-foreground">
                  Combined (cold + labor):
                </strong>{" "}
                +30-50% more calories needed
              </li>
            </ul>
            <p>
              For most planning purposes, the 10% buffer is sufficient. If you
              live in a cold climate or anticipate heavy physical demands, plan
              for the higher multipliers.
            </p>
          </div>
        </section>

        {/* =========================================================
            CHAPTER 2: PANTRY FOUNDATION
        ========================================================= */}
        <section id="chapter-2" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/20 text-doom font-bold text-lg">
              2
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              The Pantry Foundation — Bulk Staples
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Your emergency food supply should be built in three tiers. This
              tiered approach ensures you have the caloric backbone you need
              first, then layers in nutrition and morale-boosting variety. Think
              of it as a pyramid: the base is big, cheap, and calorie-dense.
            </p>

            {/* Tier 1 */}
            <div className="doom-accent-card p-5 space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Flame className="w-5 h-5 text-doom" />
                Tier 1: Backbone Foods (60% of calories)
              </h3>
              <p>
                These are your calorie workhorses — cheap, shelf-stable for
                decades when stored properly, and the foundation of nearly every
                emergency meal.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-3 text-foreground">
                        Item
                      </th>
                      <th className="text-right py-2 px-3 text-foreground">
                        Cal/lb
                      </th>
                      <th className="text-right py-2 px-3 text-foreground">
                        Cost/lb
                      </th>
                      <th className="text-right py-2 px-3 text-foreground">
                        Shelf Life
                      </th>
                      <th className="text-left py-2 px-3 text-foreground">
                        Storage
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      [
                        "White rice",
                        "1,650",
                        "$0.50-0.80",
                        "25-30 yrs",
                        "Mylar + O2 absorbers",
                      ],
                      [
                        "Dried pinto beans",
                        "1,550",
                        "$0.60-1.00",
                        "25-30 yrs",
                        "Mylar + O2 absorbers",
                      ],
                      [
                        "Rolled oats",
                        "1,740",
                        "$0.50-0.90",
                        "20-25 yrs",
                        "Mylar + O2 absorbers",
                      ],
                      [
                        "Hard wheat berries",
                        "1,530",
                        "$0.40-0.70",
                        "30+ yrs",
                        "Mylar + O2 absorbers",
                      ],
                      [
                        "Dried pasta",
                        "1,680",
                        "$0.60-1.00",
                        "20-25 yrs",
                        "Mylar + O2 absorbers",
                      ],
                    ].map(([item, cal, cost, shelf, storage], i) => (
                      <tr key={i} className="hover:bg-white/5">
                        <td className="py-2 px-3 text-foreground font-medium">
                          {item}
                        </td>
                        <td className="py-2 px-3 text-right font-mono text-doom">
                          {cal}
                        </td>
                        <td className="py-2 px-3 text-right font-mono">
                          {cost}
                        </td>
                        <td className="py-2 px-3 text-right">{shelf}</td>
                        <td className="py-2 px-3 text-xs">{storage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h4 className="text-base font-semibold text-foreground mt-3">
                Quantities per Person for 90 Days
              </h4>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>
                  White rice: <strong className="text-foreground">30 lbs</strong>{" "}
                  (49,500 cal)
                </li>
                <li>
                  Dried beans: <strong className="text-foreground">20 lbs</strong>{" "}
                  (31,000 cal)
                </li>
                <li>
                  Rolled oats: <strong className="text-foreground">15 lbs</strong>{" "}
                  (26,100 cal)
                </li>
                <li>
                  Wheat berries: <strong className="text-foreground">10 lbs</strong>{" "}
                  (15,300 cal)
                </li>
                <li>
                  Dried pasta: <strong className="text-foreground">15 lbs</strong>{" "}
                  (25,200 cal)
                </li>
                <li className="text-doom font-semibold">
                  Tier 1 total per person: ~90 lbs, ~147,100 cal ($55-80)
                </li>
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="glass-card p-5 space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                Tier 2: Nutrition & Variety (25% of calories)
              </h3>
              <p>
                These items fill critical nutritional gaps (protein, fats,
                vitamins) and add variety to prevent "appetite fatigue" — a real
                problem in emergencies where people stop eating because meals are
                too monotonous.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 px-3 text-foreground">
                        Item
                      </th>
                      <th className="text-right py-2 px-3 text-foreground">
                        Cal/lb
                      </th>
                      <th className="text-right py-2 px-3 text-foreground">
                        Cost/lb
                      </th>
                      <th className="text-right py-2 px-3 text-foreground">
                        Shelf Life
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      ["Canned chicken/tuna", "500-600", "$3.00-5.00", "3-5 yrs"],
                      ["Canned vegetables", "150-250", "$0.80-1.50", "3-5 yrs"],
                      ["Peanut butter", "2,660", "$1.50-2.50", "2-3 yrs"],
                      ["Powdered milk", "1,650", "$2.00-4.00", "20-25 yrs"],
                      ["Honey", "1,380", "$3.00-6.00", "Indefinite"],
                      ["Cooking oil", "4,000", "$1.50-3.00", "1-2 yrs"],
                      ["Canned fruit", "200-400", "$1.00-2.00", "3-5 yrs"],
                    ].map(([item, cal, cost, shelf], i) => (
                      <tr key={i} className="hover:bg-white/5">
                        <td className="py-2 px-3 text-foreground font-medium">
                          {item}
                        </td>
                        <td className="py-2 px-3 text-right font-mono text-doom">
                          {cal}
                        </td>
                        <td className="py-2 px-3 text-right font-mono">
                          {cost}
                        </td>
                        <td className="py-2 px-3 text-right">{shelf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <h4 className="text-base font-semibold text-foreground mt-3">
                Quantities per Person for 90 Days
              </h4>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>
                  Canned meat (chicken/tuna):{" "}
                  <strong className="text-foreground">24 cans</strong> (12 oz
                  each)
                </li>
                <li>
                  Canned vegetables:{" "}
                  <strong className="text-foreground">36 cans</strong> (15 oz
                  each)
                </li>
                <li>
                  Peanut butter:{" "}
                  <strong className="text-foreground">6 jars</strong> (16 oz
                  each)
                </li>
                <li>
                  Powdered milk:{" "}
                  <strong className="text-foreground">5 lbs</strong>
                </li>
                <li>
                  Honey:{" "}
                  <strong className="text-foreground">3 lbs</strong>
                </li>
                <li>
                  Cooking oil:{" "}
                  <strong className="text-foreground">2 gallons</strong>
                </li>
                <li>
                  Canned fruit:{" "}
                  <strong className="text-foreground">18 cans</strong> (15 oz
                  each)
                </li>
                <li className="text-emerald-400 font-semibold">
                  Tier 2 total per person: ~60 lbs, ~61,000 cal ($80-140)
                </li>
              </ul>
            </div>

            {/* Tier 3 */}
            <div className="doom-card p-5 space-y-3">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-400" />
                Tier 3: Comfort & Morale (15% of calories)
              </h3>
              <p>
                Do not skip morale food. In every documented long-term emergency
                — from WWII rationing to Hurricane Katrina aftermath —
                psychological well-being directly affected survival outcomes.
                Familiar comfort foods reduce stress and maintain the will to
                keep going.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
                <li>
                  Coffee and tea (instant, vacuum-sealed): 1-2 lbs each
                </li>
                <li>
                  Chocolate (dark bars, cocoa powder): 2-3 lbs
                </li>
                <li>
                  Spice kit (salt, pepper, garlic powder, chili powder, cumin,
                  cinnamon, oregano, bouillon cubes): 2-3 lbs total
                </li>
                <li>
                  Condiments (hot sauce, soy sauce, vinegar — small bottles): 3-4
                  bottles
                </li>
                <li>
                  Comfort snacks (hard candy, dried fruit, granola bars,
                  crackers): 5-8 lbs
                </li>
                <li>Sugar: 5 lbs</li>
                <li>
                  Multivitamins: 1 bottle (90+ count)
                </li>
                <li className="text-amber-400 font-semibold">
                  Tier 3 total per person: ~20 lbs, ~36,000 cal ($40-70)
                </li>
              </ul>
            </div>

            <div className="doom-accent-card p-4 text-center text-sm">
              <strong className="text-foreground">Grand total per person:</strong>{" "}
              ~170 lbs of food | ~244,100 calories | ~$175-290 at bulk prices
            </div>
          </div>
        </section>

        {/* =========================================================
            CHAPTER 3: WEEK-BY-WEEK SHOPPING LISTS
        ========================================================= */}
        <section id="chapter-3" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/20 text-doom font-bold text-lg">
              3
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Week-by-Week Shopping Lists
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Building a 90-day supply all at once is expensive and overwhelming.
              This 12-week phased plan spreads the cost to{" "}
              <strong className="text-foreground">$30-50 per week</strong> and
              ensures you buy the most critical items first. Each week is a
              standalone shopping list you can take to the store.
            </p>

            {/* Weeks 1-4 */}
            <div className="doom-accent-card p-5 space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                Weeks 1-4: Foundation Staples
              </h3>
              <p>
                Focus entirely on Tier 1 calorie-dense basics. These four weeks
                establish the backbone of your supply.
              </p>
              {[
                {
                  week: "Week 1",
                  items: [
                    "25 lb bag white rice ($12-15)",
                    "10 lb bag pinto beans ($8-10)",
                    "Salt, 2 lbs ($1)",
                  ],
                  cost: "$21-26",
                },
                {
                  week: "Week 2",
                  items: [
                    "10 lb bag rolled oats ($8-12)",
                    "10 lb bag dried pasta ($6-10)",
                    "5 lb bag sugar ($3-4)",
                  ],
                  cost: "$17-26",
                },
                {
                  week: "Week 3",
                  items: [
                    "25 lb bag white rice ($12-15)",
                    "10 lb bag black beans ($8-10)",
                    "10 lb bag lentils ($8-12)",
                  ],
                  cost: "$28-37",
                },
                {
                  week: "Week 4",
                  items: [
                    "10 lb bag wheat berries ($5-8)",
                    "10 lb bag dried pasta ($6-10)",
                    "5 lb bag rolled oats ($4-6)",
                    "Cornmeal, 5 lbs ($3-5)",
                  ],
                  cost: "$18-29",
                },
              ].map((w) => (
                <div key={w.week} className="glass-card p-3 space-y-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-foreground text-sm">
                      {w.week}
                    </h4>
                    <span className="text-doom font-mono text-sm">
                      {w.cost}
                    </span>
                  </div>
                  <ul className="text-sm space-y-0.5">
                    {w.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Weeks 5-8 */}
            <div className="glass-card p-5 space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                Weeks 5-8: Canned Goods, Proteins & Fats
              </h3>
              <p>
                Now layer in Tier 2 nutrition items — proteins, fats, and canned
                produce.
              </p>
              {[
                {
                  week: "Week 5",
                  items: [
                    "12 cans tuna or chicken ($18-24)",
                    "Peanut butter, 3 jars ($9-12)",
                    "Cooking oil, 1 gallon ($6-8)",
                  ],
                  cost: "$33-44",
                },
                {
                  week: "Week 6",
                  items: [
                    "18 cans vegetables (corn, green beans, peas, tomatoes) ($14-22)",
                    "Powdered milk, 2.5 lbs ($6-10)",
                    "Honey, 2 lbs ($8-12)",
                  ],
                  cost: "$28-44",
                },
                {
                  week: "Week 7",
                  items: [
                    "12 cans chicken or SPAM ($18-30)",
                    "18 cans fruit (peaches, pears, applesauce) ($14-22)",
                    "Peanut butter, 3 jars ($9-12)",
                  ],
                  cost: "$41-64",
                },
                {
                  week: "Week 8",
                  items: [
                    "18 cans vegetables ($14-22)",
                    "Powdered milk, 2.5 lbs ($6-10)",
                    "Cooking oil, 1 gallon ($6-8)",
                    "Honey, 1 lb ($4-6)",
                  ],
                  cost: "$30-46",
                },
              ].map((w) => (
                <div key={w.week} className="doom-card p-3 space-y-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-foreground text-sm">
                      {w.week}
                    </h4>
                    <span className="text-doom font-mono text-sm">
                      {w.cost}
                    </span>
                  </div>
                  <ul className="text-sm space-y-0.5">
                    {w.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Weeks 9-12 */}
            <div className="doom-card p-5 space-y-4">
              <h3 className="text-lg font-bold text-foreground">
                Weeks 9-12: Specialty, Comfort & Supplements
              </h3>
              <p>
                Finish with Tier 3 morale items, fill any gaps, and buy storage
                supplies.
              </p>
              {[
                {
                  week: "Week 9",
                  items: [
                    "Spice kit (8-10 spices) ($10-15)",
                    "Coffee/tea ($5-10)",
                    "Chocolate/cocoa powder ($5-8)",
                    "Hot sauce, soy sauce ($4-6)",
                  ],
                  cost: "$24-39",
                },
                {
                  week: "Week 10",
                  items: [
                    "Dried fruit, 3 lbs ($8-12)",
                    "Granola bars, 2 boxes ($7-10)",
                    "Hard candy, 2 lbs ($4-6)",
                    "Crackers, 4 boxes ($6-10)",
                  ],
                  cost: "$25-38",
                },
                {
                  week: "Week 11",
                  items: [
                    "Multivitamins, 1 bottle ($8-12)",
                    "Vitamin C, 1 bottle ($5-8)",
                    "Electrolyte powder ($8-12)",
                    "Any gap-fill items from previous weeks ($10-15)",
                  ],
                  cost: "$31-47",
                },
                {
                  week: "Week 12",
                  items: [
                    "Mylar bags + oxygen absorbers ($15-25)",
                    "5-gallon buckets with lids, 4x ($20-30)",
                    "Labels and permanent marker ($3-5)",
                  ],
                  cost: "$38-60",
                },
              ].map((w) => (
                <div key={w.week} className="glass-card p-3 space-y-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-foreground text-sm">
                      {w.week}
                    </h4>
                    <span className="text-doom font-mono text-sm">
                      {w.cost}
                    </span>
                  </div>
                  <ul className="text-sm space-y-0.5">
                    {w.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Where to Buy in Bulk
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>
                <strong className="text-foreground">Costco / Sam's Club:</strong>{" "}
                Best for rice, beans, oats, canned goods, and cooking oil
              </li>
              <li>
                <strong className="text-foreground">LDS Home Storage Centers:</strong>{" "}
                Open to everyone; some of the lowest bulk prices for wheat, rice,
                beans, and oats — often pre-packed in #10 cans
              </li>
              <li>
                <strong className="text-foreground">Amazon Subscribe & Save:</strong>{" "}
                Good for canned meats, peanut butter, and spices with 5-15%
                discounts
              </li>
              <li>
                <strong className="text-foreground">Restaurant supply stores:</strong>{" "}
                Excellent prices on 50-lb bags of rice, flour, and sugar
              </li>
              <li>
                <strong className="text-foreground">Walmart Grocery:</strong>{" "}
                Competitive on Great Value canned goods and basics
              </li>
            </ul>
          </div>
        </section>

        {/* =========================================================
            CHAPTER 4: STORAGE METHODS & SHELF LIFE
        ========================================================= */}
        <section id="chapter-4" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/20 text-doom font-bold text-lg">
              4
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Storage Methods & Shelf Life
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Proper storage is what separates a 2-year food supply from a 30-year
              food supply. The method you choose can extend (or dramatically
              shorten) the life of every item in your pantry.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              The Five Enemies of Food Storage
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                {
                  icon: <Thermometer className="w-5 h-5 text-red-400" />,
                  name: "Heat",
                  desc: "Every 10F above 70F cuts shelf life in half. Keep storage below 70F.",
                },
                {
                  icon: <Flame className="w-5 h-5 text-amber-400" />,
                  name: "Light",
                  desc: "UV radiation degrades vitamins and fats. Store in opaque containers in dark areas.",
                },
                {
                  icon: <Droplets className="w-5 h-5 text-blue-400" />,
                  name: "Moisture",
                  desc: "Target below 15% humidity. Moisture breeds mold and bacteria. Use desiccant packs.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-orange-400" />,
                  name: "Oxygen",
                  desc: "Oxidation degrades fats and nutrients. Oxygen absorbers remove 99.9% of O2.",
                },
                {
                  icon: <AlertTriangle className="w-5 h-5 text-rose-400" />,
                  name: "Pests",
                  desc: "Rodents and insects can breach cardboard and thin plastic. Use food-grade buckets.",
                },
              ].map((enemy) => (
                <div key={enemy.name} className="doom-card p-3 space-y-1">
                  <div className="flex items-center gap-2 text-foreground font-semibold text-sm">
                    {enemy.icon}
                    {enemy.name}
                  </div>
                  <p className="text-xs">{enemy.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Mylar Bags + Oxygen Absorbers (Recommended Method)
            </h3>
            <div className="doom-accent-card p-4 space-y-3">
              <p>
                This is the gold standard for dry goods. Properly sealed Mylar
                bags with oxygen absorbers can preserve rice, beans, oats, and
                wheat for 25-30+ years.
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-2 text-sm">
                <li>
                  <strong className="text-foreground">Get supplies:</strong> 1-gallon
                  or 5-gallon Mylar bags (5+ mil thickness), 300cc oxygen absorbers
                  (1 per gallon bag, 2-3 per 5-gallon bag), a clothes iron or
                  hair straightener, and a food-grade 5-gallon bucket with
                  gamma-seal lid.
                </li>
                <li>
                  <strong className="text-foreground">Fill the bag:</strong> Place
                  the Mylar bag inside the bucket. Pour in your dry goods, leaving
                  3-4 inches at the top.
                </li>
                <li>
                  <strong className="text-foreground">Add oxygen absorbers:</strong>{" "}
                  Drop them on top of the food. Work quickly — absorbers activate
                  on contact with air.
                </li>
                <li>
                  <strong className="text-foreground">Seal the bag:</strong> Use a
                  clothes iron on the highest setting. Seal across the top, leaving
                  a 1-inch opening. Squeeze out excess air, then seal the opening
                  completely.
                </li>
                <li>
                  <strong className="text-foreground">Label everything:</strong>{" "}
                  Item name, date packed, quantity, and calorie count per cup on
                  the outside.
                </li>
                <li>
                  <strong className="text-foreground">Close the bucket:</strong>{" "}
                  Snap on the lid. Store in a cool, dark location off the ground.
                </li>
              </ol>
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              5-Gallon Bucket Storage System
            </h3>
            <p>
              Food-grade HDPE buckets (look for the recycling symbol #2) are your
              outer shell. They protect against pests and physical damage. Each
              5-gallon bucket holds approximately:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>33 lbs of white rice</li>
              <li>33 lbs of dried beans</li>
              <li>20 lbs of rolled oats</li>
              <li>33 lbs of wheat berries</li>
              <li>25 lbs of pasta</li>
            </ul>
            <p className="text-sm">
              <strong className="text-foreground">Cost:</strong> $4-7 per bucket
              at hardware stores or free from bakeries and restaurants (ask for
              food-grade frosting or pickle buckets).
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              #10 Can Storage (25+ Years)
            </h3>
            <p>
              #10 cans (the large restaurant-size cans) are factory-sealed and
              offer the longest shelf life with zero effort. LDS Home Storage
              Centers sell pre-packed #10 cans of wheat, rice, beans, oats,
              powdered milk, and more at cost. You can also purchase them from
              Augason Farms, Mountain House, or Nutristore on Amazon.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Shelf Life Reference Table
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-3 text-foreground">
                      Item
                    </th>
                    <th className="text-right py-2 px-3 text-foreground">
                      Pantry
                    </th>
                    <th className="text-right py-2 px-3 text-foreground">
                      Mylar/Bucket
                    </th>
                    <th className="text-right py-2 px-3 text-foreground">
                      #10 Can
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["White rice", "4-5 yrs", "25-30 yrs", "30+ yrs"],
                    ["Brown rice", "6-12 mo", "2-3 yrs", "3-5 yrs"],
                    ["Dried beans", "2-3 yrs", "25-30 yrs", "30+ yrs"],
                    ["Rolled oats", "1-2 yrs", "20-25 yrs", "30 yrs"],
                    ["Wheat berries", "2-3 yrs", "30+ yrs", "30+ yrs"],
                    ["Dried pasta", "2-3 yrs", "20-25 yrs", "25+ yrs"],
                    ["Powdered milk", "1-2 yrs", "20-25 yrs", "25 yrs"],
                    ["Sugar", "Indefinite", "Indefinite", "Indefinite"],
                    ["Salt", "Indefinite", "Indefinite", "Indefinite"],
                    ["Honey", "Indefinite", "Indefinite", "Indefinite"],
                    ["Canned meat", "3-5 yrs", "N/A", "N/A"],
                    ["Canned vegetables", "3-5 yrs", "N/A", "N/A"],
                    ["Canned fruit", "3-5 yrs", "N/A", "N/A"],
                    ["Peanut butter", "2-3 yrs", "N/A", "5+ yrs"],
                    ["Cooking oil", "1-2 yrs", "N/A", "N/A"],
                    ["Instant coffee", "2-3 yrs", "20+ yrs", "25 yrs"],
                    ["Freeze-dried food", "N/A", "25 yrs", "25-30 yrs"],
                  ].map(([item, pantry, mylar, can], i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className="py-1.5 px-3 text-foreground">{item}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-xs">
                        {pantry}
                      </td>
                      <td className="py-1.5 px-3 text-right font-mono text-xs text-doom">
                        {mylar}
                      </td>
                      <td className="py-1.5 px-3 text-right font-mono text-xs">
                        {can}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Signs of Spoilage — When to Discard
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>
                <strong className="text-foreground">Canned goods:</strong> Bulging
                lids, rust penetrating the can, hissing when opened, off-odor,
                or visible mold — discard immediately
              </li>
              <li>
                <strong className="text-foreground">Dry goods:</strong> Visible
                insect activity, webbing, musty smell, or clumping from moisture
                — discard or re-assess
              </li>
              <li>
                <strong className="text-foreground">Oils and fats:</strong>{" "}
                Rancid smell (sharp, paint-like odor) — discard
              </li>
              <li>
                <strong className="text-foreground">General rule:</strong> When in
                doubt, throw it out. Food poisoning during an emergency with no
                medical access can be fatal
              </li>
            </ul>
          </div>
        </section>

        {/* =========================================================
            CHAPTER 5: WATER STORAGE & PURIFICATION
        ========================================================= */}
        <section id="chapter-5" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/20 text-doom font-bold text-lg">
              5
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Water Storage & Purification for Cooking
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Food is useless without water. You need water to drink, cook rice
              and beans, rehydrate freeze-dried foods, and maintain basic
              hygiene. The standard planning figure is{" "}
              <strong className="text-foreground">
                1 gallon per person per day
              </strong>{" "}
              — and most people underestimate this number.
            </p>

            <div className="doom-accent-card p-5">
              <h3 className="text-lg font-bold text-foreground mb-3">
                90-Day Water Calculation
              </h3>
              <div className="font-mono text-sm space-y-1">
                <p>
                  1 person: 1 gal/day x 90 days ={" "}
                  <span className="text-doom font-bold">90 gallons</span> (750
                  lbs)
                </p>
                <p>
                  2 people: 2 gal/day x 90 days ={" "}
                  <span className="text-doom font-bold">180 gallons</span>{" "}
                  (1,500 lbs)
                </p>
                <p>
                  Family of 4: 4 gal/day x 90 days ={" "}
                  <span className="text-doom font-bold">360 gallons</span>{" "}
                  (3,000 lbs)
                </p>
              </div>
              <p className="text-xs mt-3 text-muted-foreground">
                Breakdown: ~0.5 gal drinking, ~0.25 gal cooking, ~0.25 gal
                hygiene per person per day. Increase to 1.5 gal/day in hot
                climates.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Container Options
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>
                <strong className="text-foreground">WaterBOB (100 gal):</strong>{" "}
                $35. Fills your bathtub before an emergency. Single-use but
                holds 100 gallons of clean water. Best for short-warning events.
              </li>
              <li>
                <strong className="text-foreground">
                  Stackable water bricks (3.5 gal each):
                </strong>{" "}
                $15-20 each. Space-efficient, stackable, and portable. 26 bricks
                = 91 gallons for one person.
              </li>
              <li>
                <strong className="text-foreground">
                  55-gallon water drums:
                </strong>{" "}
                $50-80 each. Most cost-effective per gallon but heavy (460 lbs
                full) and require a siphon pump. Two drums = 110 gallons.
              </li>
              <li>
                <strong className="text-foreground">
                  160-320 gallon stackable tanks:
                </strong>{" "}
                $150-300. Best for dedicated storage space. One tank covers one
                person for the full 90 days with surplus.
              </li>
              <li>
                <strong className="text-foreground">
                  Store-bought bottled water:
                </strong>{" "}
                Cases of 1-gallon jugs are the easiest option but take the most
                space. ~90 one-gallon jugs per person.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground">
              Purification Methods for Cooking Water
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  method: "Boiling",
                  desc: "Rolling boil for 1 minute (3 minutes above 6,500 ft). Kills all pathogens. Uses fuel.",
                  cost: "Free (needs fuel)",
                },
                {
                  method: "Bleach (8.25% sodium hypochlorite)",
                  desc: "8 drops per gallon of clear water. Wait 30 minutes. Cheap and effective.",
                  cost: "$4 per bottle (treats 3,800 gal)",
                },
                {
                  method: "Gravity filtration (Berkey, ProOne)",
                  desc: "Filters bacteria, viruses, chemicals. No power needed. Filters 6,000+ gallons.",
                  cost: "$250-350",
                },
                {
                  method: "Purification tablets (Aquamira, Katadyn)",
                  desc: "Chlorine dioxide tablets. 1 tablet per liter. Lightweight for bug-out bags.",
                  cost: "$10-15 per 50 tablets",
                },
              ].map((m) => (
                <div key={m.method} className="glass-card p-3 space-y-1">
                  <h4 className="font-semibold text-foreground text-sm">
                    {m.method}
                  </h4>
                  <p className="text-xs">{m.desc}</p>
                  <p className="text-xs text-doom font-mono">{m.cost}</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Rainwater Collection Basics
            </h3>
            <p>
              A 1,000 sq ft roof collects about 600 gallons per inch of rain.
              Even a simple tarp-and-barrel setup can supplement your stored
              water. Check local regulations — rainwater collection is legal in
              most US states but some require permits.
            </p>
            <p className="text-sm">
              <strong className="text-foreground">Important:</strong> Always
              purify rainwater before drinking or cooking. Roof runoff contains
              dust, bird droppings, and chemicals from roofing materials. A
              Berkey filter or boiling is recommended.
            </p>
          </div>
        </section>

        {/* =========================================================
            CHAPTER 6: 30-DAY MEAL PLAN WITH RECIPES
        ========================================================= */}
        <section id="chapter-6" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/20 text-doom font-bold text-lg">
              6
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              30-Day Meal Plan with Recipes
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              This meal plan uses only the shelf-stable ingredients from Chapters
              2 and 3. Every day targets 2,000 calories for one adult. Scale up
              or down using the multipliers from Chapter 1. The plan rotates
              through varied meals to prevent appetite fatigue.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Sample Daily Schedule
            </h3>
            <div className="doom-accent-card p-5 space-y-3">
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    meal: "Breakfast",
                    example:
                      "Oatmeal with powdered milk, honey, and cinnamon",
                    cal: "450",
                  },
                  {
                    meal: "Lunch",
                    example:
                      "Rice and beans with canned vegetables and hot sauce",
                    cal: "650",
                  },
                  {
                    meal: "Dinner",
                    example:
                      "Pasta with canned tuna, tomato sauce, and garlic powder",
                    cal: "600",
                  },
                  {
                    meal: "Snack",
                    example: "Peanut butter on crackers with dried fruit",
                    cal: "300",
                  },
                ].map((m) => (
                  <div key={m.meal} className="glass-card p-3">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-semibold text-foreground text-sm">
                        {m.meal}
                      </h4>
                      <span className="text-doom font-mono text-xs">
                        {m.cal} cal
                      </span>
                    </div>
                    <p className="text-xs">{m.example}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-foreground font-semibold">
                Daily total:{" "}
                <span className="text-doom">2,000 calories</span>
              </p>
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              30-Day Rotation Overview
            </h3>
            <p>
              The full meal plan rotates through 10 breakfasts, 10 lunches, and
              10 dinners on a 10-day cycle, repeated 3 times. Each cycle
              features different combinations of the recipes below to keep meals
              varied. Here is the 10-day rotation pattern:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-2 text-foreground">Day</th>
                    <th className="text-left py-2 px-2 text-foreground">
                      Breakfast
                    </th>
                    <th className="text-left py-2 px-2 text-foreground">
                      Lunch
                    </th>
                    <th className="text-left py-2 px-2 text-foreground">
                      Dinner
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["1", "Oatmeal Power Bowl", "Rice & beans", "Tuna Pasta Casserole"],
                    ["2", "Emergency Pancakes", "Lentil Soup", "Emergency Fried Rice"],
                    ["3", "Oatmeal w/ peanut butter", "Bean & Rice Burritos", "Canned Chicken Stew"],
                    ["4", "Cornbread + honey", "Rice & canned vegetables", "Pasta w/ peanut sauce"],
                    ["5", "Oatmeal Power Bowl", "Lentil Soup", "Bean & Rice Burritos"],
                    ["6", "Emergency Pancakes", "Tuna & crackers", "Emergency Fried Rice"],
                    ["7", "Oatmeal w/ dried fruit", "Rice & beans", "Tuna Pasta Casserole"],
                    ["8", "Cornbread + peanut butter", "Canned Chicken Stew", "Pasta w/ tomato sauce"],
                    ["9", "Oatmeal Power Bowl", "Bean & Rice Burritos", "Lentil Soup w/ cornbread"],
                    ["10", "Emergency Pancakes", "Rice & canned meat", "Emergency Fried Rice"],
                  ].map(([day, b, l, d]) => (
                    <tr key={day} className="hover:bg-white/5">
                      <td className="py-1.5 px-2 text-doom font-bold">{day}</td>
                      <td className="py-1.5 px-2">{b}</td>
                      <td className="py-1.5 px-2">{l}</td>
                      <td className="py-1.5 px-2">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-foreground mt-6">
              10 Shelf-Stable Recipes
            </h3>

            {/* Recipe cards */}
            {[
              {
                num: 1,
                name: "Emergency Fried Rice",
                time: "20 min",
                cal: "550",
                serves: "2",
                ingredients: [
                  "2 cups cooked white rice",
                  "1 can mixed vegetables, drained",
                  "2 tbsp cooking oil",
                  "2 tbsp soy sauce",
                  "1/2 tsp garlic powder",
                  "1/4 tsp black pepper",
                  "Optional: 1/2 can chicken or SPAM, diced",
                ],
                instructions:
                  "Heat oil in a large skillet or wok. Add drained vegetables and optional protein — cook 3-4 minutes. Add cooked rice, soy sauce, garlic powder, and pepper. Stir-fry on high heat for 5-7 minutes until rice is slightly crispy. Serve immediately.",
              },
              {
                num: 2,
                name: "Bean and Rice Burritos",
                time: "25 min",
                cal: "600",
                serves: "2",
                ingredients: [
                  "1 can pinto or black beans, drained",
                  "2 cups cooked white rice",
                  "1/2 tsp cumin",
                  "1/2 tsp chili powder",
                  "Hot sauce to taste",
                  "Salt to taste",
                  "Tortillas (or use flatbread — see Hardtack recipe)",
                ],
                instructions:
                  "Mash half the beans with a fork. Combine with whole beans, rice, cumin, chili powder, and salt in a pot. Heat until warmed through, about 5 minutes. Spoon onto tortillas or flatbread, add hot sauce, and roll up. Each burrito provides roughly 300 calories.",
              },
              {
                num: 3,
                name: "Tuna Pasta Casserole",
                time: "20 min",
                cal: "600",
                serves: "2",
                ingredients: [
                  "2 cups cooked pasta (any shape)",
                  "1 can tuna, drained",
                  "1/2 can cream of mushroom soup (or make white sauce from powdered milk + flour)",
                  "1/4 cup powdered milk mixed with 1/2 cup water",
                  "1/2 tsp garlic powder",
                  "Salt and pepper to taste",
                ],
                instructions:
                  "Combine all ingredients in a pot. Stir well and heat on medium for 8-10 minutes until bubbly. If mixture is too thick, add a splash of water. Season with salt, pepper, and garlic powder. Serves 2 generous portions.",
              },
              {
                num: 4,
                name: "Oatmeal Power Bowls",
                time: "10 min",
                cal: "450",
                serves: "1",
                ingredients: [
                  "1 cup rolled oats",
                  "2 cups water",
                  "2 tbsp powdered milk",
                  "1 tbsp honey",
                  "1 tbsp peanut butter",
                  "Pinch of cinnamon",
                  "Pinch of salt",
                ],
                instructions:
                  "Bring water to a boil with salt. Add oats and reduce heat to medium-low. Cook 5 minutes, stirring occasionally. Remove from heat and stir in powdered milk, honey, peanut butter, and cinnamon. Let stand 2 minutes. This is one of the most nutrient-dense emergency breakfasts you can make.",
              },
              {
                num: 5,
                name: "Lentil Soup",
                time: "35 min",
                cal: "500",
                serves: "3",
                ingredients: [
                  "1 cup dried red lentils",
                  "4 cups water",
                  "1 can diced tomatoes",
                  "1 tsp cumin",
                  "1/2 tsp garlic powder",
                  "1/2 tsp chili powder",
                  "2 bouillon cubes",
                  "Salt and pepper to taste",
                ],
                instructions:
                  "Rinse lentils. Combine all ingredients in a pot and bring to a boil. Reduce heat and simmer 25-30 minutes until lentils are soft and soup has thickened. Red lentils break down naturally, creating a creamy texture without dairy. Adjust seasoning. Stores well for 2-3 days if refrigeration is available.",
              },
              {
                num: 6,
                name: "Hardtack (Long-Term Emergency Bread)",
                time: "90 min",
                cal: "100/piece",
                serves: "20 pieces",
                ingredients: [
                  "4 cups all-purpose flour (or wheat flour from ground wheat berries)",
                  "2 tsp salt",
                  "1.5-2 cups water",
                ],
                instructions:
                  "Mix flour and salt. Slowly add water until dough forms a stiff ball — it should not be sticky. Roll out to 1/2 inch thickness on a floured surface. Cut into 3x3 inch squares. Poke holes in each piece with a fork (prevents puffing). Bake at 350F for 30 minutes per side (60 minutes total). Let cool completely. Hardtack will be rock-hard — that is correct. Store in an airtight container. Lasts years. Soften by soaking in water, broth, or coffee before eating.",
              },
              {
                num: 7,
                name: "Peanut Butter Energy Balls",
                time: "15 min (no cook)",
                cal: "150/ball",
                serves: "12 balls",
                ingredients: [
                  "1 cup rolled oats",
                  "1/2 cup peanut butter",
                  "1/3 cup honey",
                  "1/4 cup powdered milk",
                  "Optional: 1/4 cup chocolate chips or dried fruit",
                ],
                instructions:
                  "Combine all ingredients in a bowl and mix thoroughly. If mixture is too dry, add a tablespoon of water. If too wet, add more oats. Roll into 1-inch balls. No cooking required. Each ball provides approximately 150 calories of dense, portable nutrition. Store in an airtight container for up to 2 weeks at room temperature.",
              },
              {
                num: 8,
                name: "Canned Chicken Stew",
                time: "25 min",
                cal: "550",
                serves: "2",
                ingredients: [
                  "1 large can chicken (12.5 oz), drained",
                  "1 can mixed vegetables, drained",
                  "1 can diced potatoes or 1 cup cooked rice",
                  "2 bouillon cubes dissolved in 2 cups water",
                  "1/2 tsp garlic powder",
                  "1/2 tsp black pepper",
                  "1 tsp dried oregano",
                ],
                instructions:
                  "Combine broth, chicken, vegetables, and potatoes (or rice) in a pot. Add garlic powder, pepper, and oregano. Bring to a boil, then reduce heat and simmer 15 minutes. Adjust seasoning. This is a warming, protein-rich meal that uses entirely canned ingredients — no prep beyond opening cans.",
              },
              {
                num: 9,
                name: "Cornbread (from Cornmeal)",
                time: "35 min",
                cal: "200/piece",
                serves: "8 pieces",
                ingredients: [
                  "1.5 cups cornmeal",
                  "1/2 cup all-purpose flour",
                  "1 tbsp sugar",
                  "2 tsp baking powder",
                  "1/2 tsp salt",
                  "1/4 cup powdered milk + 1 cup water (or 1 cup reconstituted milk)",
                  "2 tbsp cooking oil",
                ],
                instructions:
                  "Mix dry ingredients. Add reconstituted milk and oil, stir until just combined — do not overmix. Pour into a greased 8-inch cast iron skillet or baking pan. Bake at 400F for 20-25 minutes until golden and a toothpick comes out clean. Can also be cooked in a covered skillet on a camp stove: grease skillet, pour in batter, cover, cook on low heat 15-20 minutes.",
              },
              {
                num: 10,
                name: "Emergency Pancakes",
                time: "15 min",
                cal: "400 (3 pancakes)",
                serves: "2",
                ingredients: [
                  "1 cup flour",
                  "2 tbsp powdered milk",
                  "1 tbsp sugar",
                  "1 tsp baking powder",
                  "1/4 tsp salt",
                  "3/4 cup water",
                  "1 tbsp cooking oil (plus more for the pan)",
                ],
                instructions:
                  "Mix all dry ingredients. Add water and oil, stir until just combined (lumps are fine). Heat a greased skillet over medium heat. Pour 1/4 cup batter per pancake. Cook until bubbles form on the surface, flip, cook 1-2 more minutes. Serve with honey, peanut butter, or canned fruit. These use no eggs or fresh milk — entirely shelf-stable ingredients.",
              },
            ].map((recipe) => (
              <div
                key={recipe.num}
                className="doom-card p-5 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-base font-bold text-foreground flex items-center gap-2">
                    <span className="text-doom">#{recipe.num}</span>{" "}
                    {recipe.name}
                  </h4>
                  <div className="flex gap-3 text-xs text-muted-foreground shrink-0">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {recipe.time}
                    </span>
                    <span className="text-doom font-mono">{recipe.cal} cal</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">
                  Serves: {recipe.serves}
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div>
                    <h5 className="font-semibold text-foreground text-xs mb-1">
                      Ingredients
                    </h5>
                    <ul className="space-y-0.5">
                      {recipe.ingredients.map((ing, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-1.5 text-xs"
                        >
                          <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-foreground text-xs mb-1">
                      Instructions
                    </h5>
                    <p className="text-xs leading-relaxed">
                      {recipe.instructions}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================
            CHAPTER 7: ROTATION SCHEDULE & INVENTORY TRACKING
        ========================================================= */}
        <section id="chapter-7" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/20 text-doom font-bold text-lg">
              7
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Rotation Schedule & Inventory Tracking
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              A food supply you never rotate is a food supply that slowly
              expires. The FIFO system (First In, First Out) ensures you always
              consume the oldest items first and replace them with fresh stock.
              This turns your emergency supply into a living pantry rather than a
              forgotten stockpile.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              FIFO (First In, First Out) System
            </h3>
            <div className="doom-accent-card p-4 space-y-2 text-sm">
              <p>
                <strong className="text-foreground">Rule 1:</strong> New items go
                to the back of the shelf. Oldest items stay in front.
              </p>
              <p>
                <strong className="text-foreground">Rule 2:</strong> Always cook
                from the front of the shelf.
              </p>
              <p>
                <strong className="text-foreground">Rule 3:</strong> When you
                consume an item, add it to your shopping list immediately.
              </p>
              <p>
                <strong className="text-foreground">Rule 4:</strong> Write the
                purchase date on every item with a permanent marker when it
                enters storage.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Monthly Rotation Checklist
            </h3>
            <div className="glass-card p-4 text-sm space-y-2">
              {[
                "Check all canned goods for damage, rust, or bulging",
                "Verify Mylar bag seals are intact (bag should feel vacuum-tight)",
                "Check bucket lids for cracks or gaps",
                "Inspect for signs of pests (droppings, chew marks, webbing)",
                "Consume any items expiring within the next 3 months",
                "Replace consumed items on your next shopping trip",
                "Verify temperature and humidity in storage area",
                "Update your inventory tracking sheet",
              ].map((item, i) => (
                <label key={i} className="flex items-center gap-2">
                  <span className="w-4 h-4 border border-white/20 rounded flex-shrink-0" />
                  {item}
                </label>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Inventory Tracking Worksheet
            </h3>
            <p>
              Use this format for every item in your supply. A simple spreadsheet
              or even a paper notebook works. The key is consistency.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-2 text-foreground">
                      Item
                    </th>
                    <th className="text-center py-2 px-2 text-foreground">
                      Qty
                    </th>
                    <th className="text-center py-2 px-2 text-foreground">
                      Purchased
                    </th>
                    <th className="text-center py-2 px-2 text-foreground">
                      Expires
                    </th>
                    <th className="text-left py-2 px-2 text-foreground">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["White rice (25 lb)", "2 buckets", "03/2026", "03/2056", "Garage shelf A"],
                    ["Pinto beans (10 lb)", "3 bags", "03/2026", "03/2056", "Garage shelf A"],
                    ["Canned tuna (12 oz)", "24 cans", "03/2026", "03/2031", "Pantry shelf 2"],
                    ["Peanut butter (16 oz)", "6 jars", "04/2026", "04/2029", "Pantry shelf 1"],
                    ["Rolled oats (5 lb)", "3 bags", "03/2026", "03/2051", "Garage shelf B"],
                  ].map(([item, qty, purchased, expires, location], i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className="py-1.5 px-2 text-foreground">{item}</td>
                      <td className="py-1.5 px-2 text-center">{qty}</td>
                      <td className="py-1.5 px-2 text-center font-mono">
                        {purchased}
                      </td>
                      <td className="py-1.5 px-2 text-center font-mono text-doom">
                        {expires}
                      </td>
                      <td className="py-1.5 px-2">{location}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Quarterly Audit Procedure
            </h3>
            <ol className="list-decimal list-inside space-y-1 ml-2 text-sm">
              <li>
                Print or open your inventory sheet. Walk through every storage
                location.
              </li>
              <li>
                Physically verify every item matches the sheet — count cans,
                check bucket seals, confirm labels.
              </li>
              <li>
                Flag any items expiring within 6 months. Plan to consume and
                replace these.
              </li>
              <li>
                Note any items below target quantity and add to your shopping
                list.
              </li>
              <li>
                Update the sheet with any changes. Save a digital backup.
              </li>
            </ol>

            <h3 className="text-lg font-semibold text-foreground">
              What to Do With Expiring Items
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>
                <strong className="text-foreground">6+ months to expiry:</strong>{" "}
                Incorporate into regular meals
              </li>
              <li>
                <strong className="text-foreground">3-6 months to expiry:</strong>{" "}
                Prioritize for weekly cooking
              </li>
              <li>
                <strong className="text-foreground">Still sealed and within date:</strong>{" "}
                Donate to a food bank
              </li>
              <li>
                <strong className="text-foreground">Past date but sealed and no spoilage signs:</strong>{" "}
                Most canned goods are safe 1-2 years past the "best by" date. Use
                your judgment.
              </li>
              <li>
                <strong className="text-foreground">Damaged, open, or showing spoilage:</strong>{" "}
                Discard safely
              </li>
            </ul>
          </div>
        </section>

        {/* =========================================================
            CHAPTER 8: BUDGET PLANNING & COST OPTIMIZATION
        ========================================================= */}
        <section id="chapter-8" className="mb-16 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/20 text-doom font-bold text-lg">
              8
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Budget Planning & Cost Optimization
            </h2>
          </div>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Emergency food storage does not have to break the bank. By buying
              strategically, timing your purchases around sales, and focusing on
              the cheapest calorie sources first, you can build a full 90-day
              supply for a fraction of what most people expect.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Full 90-Day Cost Estimates by Household Size
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  size: "1 Person",
                  range: "$300-500",
                  weekly: "$25-42/wk",
                  detail: "170 lbs food + 90 gal water",
                },
                {
                  size: "2 People",
                  range: "$500-800",
                  weekly: "$42-67/wk",
                  detail: "340 lbs food + 180 gal water",
                },
                {
                  size: "Family of 4",
                  range: "$800-1,200",
                  weekly: "$67-100/wk",
                  detail: "680 lbs food + 360 gal water",
                },
                {
                  size: "Family of 6",
                  range: "$1,100-1,700",
                  weekly: "$92-142/wk",
                  detail: "1,020 lbs food + 540 gal water",
                },
              ].map((h) => (
                <div key={h.size} className="doom-accent-card p-4 text-center">
                  <h4 className="font-semibold text-foreground text-sm">
                    {h.size}
                  </h4>
                  <p className="text-2xl font-bold text-doom mt-1">
                    {h.range}
                  </p>
                  <p className="text-xs mt-1">({h.weekly} over 12 weeks)</p>
                  <p className="text-xs mt-1 text-muted-foreground">
                    {h.detail}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Cost per Calorie Comparison
            </h3>
            <p>
              This is the single most useful metric for budget food storage. The
              cheapest calories should be your foundation.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 px-3 text-foreground">
                      Item
                    </th>
                    <th className="text-right py-2 px-3 text-foreground">
                      Cost per 100 cal
                    </th>
                    <th className="text-right py-2 px-3 text-foreground">
                      Cost per day (2,000 cal)
                    </th>
                    <th className="text-right py-2 px-3 text-foreground">
                      Cost for 90 days
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["White rice (bulk)", "$0.03", "$0.60", "$54"],
                    ["Rolled oats (bulk)", "$0.04", "$0.80", "$72"],
                    ["Dried beans (bulk)", "$0.05", "$1.00", "$90"],
                    ["Dried pasta", "$0.05", "$1.00", "$90"],
                    ["Wheat berries", "$0.03", "$0.60", "$54"],
                    ["Peanut butter", "$0.07", "$1.40", "$126"],
                    ["Cooking oil", "$0.05", "$1.00", "$90"],
                    ["Powdered milk", "$0.15", "$3.00", "$270"],
                    ["Canned chicken", "$0.50", "$10.00", "$900"],
                    ["Freeze-dried meals", "$0.60", "$12.00", "$1,080"],
                  ].map(([item, per100, perDay, per90], i) => (
                    <tr key={i} className="hover:bg-white/5">
                      <td className="py-1.5 px-3 text-foreground">{item}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-doom">
                        {per100}
                      </td>
                      <td className="py-1.5 px-3 text-right font-mono">
                        {perDay}
                      </td>
                      <td className="py-1.5 px-3 text-right font-mono">
                        {per90}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="doom-accent-card p-4 text-sm">
              <strong className="text-foreground">Key takeaway:</strong> A
              diet based entirely on rice, beans, and oats costs about{" "}
              <span className="text-doom font-bold">$2.40/day</span> ($216 for
              90 days). Adding variety with canned proteins, peanut butter, and
              powdered milk raises it to about{" "}
              <span className="text-doom font-bold">$3.50-4.50/day</span>{" "}
              ($315-405 for 90 days). Relying heavily on freeze-dried meals
              pushes costs to $10+/day.
            </div>

            <h3 className="text-lg font-semibold text-foreground">
              Sales & Bulk Buying Strategies
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-2 text-sm">
              <li>
                <strong className="text-foreground">Case lot sales:</strong>{" "}
                Most grocery stores run case lot sales 2-4 times per year (often
                January and September). Canned goods can be 30-50% off.
              </li>
              <li>
                <strong className="text-foreground">Loss leaders:</strong> Check
                weekly flyers for loss-leader deals on rice, beans, and canned
                goods. Stock up when prices are below normal.
              </li>
              <li>
                <strong className="text-foreground">Costco Business Center:</strong>{" "}
                Even better prices than regular Costco on bulk dry goods and
                #10 cans.
              </li>
              <li>
                <strong className="text-foreground">Online bulk retailers:</strong>{" "}
                WebstaurantStore, Azure Standard, and Pleasant Hill Grain offer
                competitive pricing on 25-50 lb bags.
              </li>
              <li>
                <strong className="text-foreground">Coupon stacking:</strong>{" "}
                Combine manufacturer coupons with store sales for canned goods.
                Apps like Ibotta and Checkout 51 offer cash back on staples.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-foreground">
              Growing Your Own: Sprouting for Fresh Nutrition
            </h3>
            <p>
              Sprouting is the single easiest way to produce fresh, vitamin-rich
              food from your dry storage — no soil, no sunlight, and no
              experience needed. Seeds like mung beans, lentils, and wheat
              berries can be sprouted in a mason jar in 3-5 days, providing fresh
              vitamins A, C, and E when canned goods cannot.
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>
                Mung beans: Sprout in 3-4 days. Mild flavor, crunchy texture.
              </li>
              <li>
                Lentils: Sprout in 2-3 days. Nutty flavor, high in protein.
              </li>
              <li>
                Wheat berries: Sprout in 2-3 days. Sweet, chewy — great in
                salads or bread dough.
              </li>
              <li>
                Alfalfa seeds: Sprout in 4-6 days. Classic sandwich sprout.
              </li>
            </ul>
            <p className="text-sm">
              <strong className="text-foreground">Method:</strong> Soak 2
              tablespoons of seeds in a mason jar with water overnight. Drain,
              rinse twice daily, keep in a warm dark spot. Harvest when sprouts
              are 1-2 inches long. One tablespoon of dry seeds produces roughly
              1 cup of sprouts.
            </p>

            <h3 className="text-lg font-semibold text-foreground">
              Free / Low-Cost Preservation Methods
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-2 text-sm">
              <li>
                <strong className="text-foreground">Sun drying:</strong> Fruits,
                herbs, and jerky can be sun-dried on screens in hot, dry
                climates. Zero cost.
              </li>
              <li>
                <strong className="text-foreground">Salt curing:</strong> Salt
                is one of the oldest preservatives. Heavily salted meats and
                fish last months without refrigeration.
              </li>
              <li>
                <strong className="text-foreground">Vinegar pickling:</strong>{" "}
                White vinegar ($2/gallon) can preserve vegetables for 1-2 years
                in mason jars.
              </li>
              <li>
                <strong className="text-foreground">Root cellaring:</strong> If
                you have a basement, root vegetables (potatoes, carrots, onions)
                store for 3-6 months at 32-40F with 90% humidity.
              </li>
            </ul>
          </div>
        </section>

        {/* =========================================================
            PURCHASE CTA
        ========================================================= */}
        <section className="mb-16">
          <div className="doom-accent-card p-8 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Get the Complete Guide
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Download the full 90-Day Emergency Food Planning Guide as a
              beautifully formatted PDF. Includes printable shopping lists,
              inventory tracking worksheets, and all 30+ recipes in a
              printer-friendly format.
            </p>
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-4xl font-bold text-doom">$7.99</span>
              <span className="text-sm text-muted-foreground line-through">
                $14.99
              </span>
            </div>
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-doom hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              Buy Now on Gumroad
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-xs text-muted-foreground">
              Instant download after purchase. PDF format. No subscription required.
            </p>
          </div>
        </section>

        {/* =========================================================
            RELATED PRODUCTS
        ========================================================= */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Emergency Food Supply Guide",
                desc: "Learn about the best emergency food brands and how to evaluate pre-made kits.",
                to: "/blog/emergency-food-supply",
              },
              {
                title: "Water Purification Systems",
                desc: "Detailed comparison of the best water filtration and purification options for emergencies.",
                to: "/blog/water-purification-systems",
              },
              {
                title: "Supply Calculator",
                desc: "Interactive tool to calculate exactly how much food and water your household needs.",
                to: "/vault/supply-calculator",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className="glass-card p-4 hover:bg-white/10 transition-colors block"
              >
                <h3 className="font-semibold text-foreground text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
                <span className="text-doom text-xs font-medium mt-2 inline-flex items-center gap-1">
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================
            FAQ SECTION
        ========================================================= */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "How much food do I need for a 90-day emergency supply?",
                a: "A single adult needs roughly 1,500-2,200 calories per day depending on activity level, totaling 135,000-198,000 calories over 90 days. In practical terms, this translates to approximately 150-200 lbs of stored food per person, costing $300-500 when buying in bulk. The guide provides exact quantities broken down by item for every household configuration.",
              },
              {
                q: "What foods last the longest in emergency storage?",
                a: "White rice, dried beans, rolled oats, honey, salt, sugar, and freeze-dried foods can last 25-30+ years when stored properly in Mylar bags with oxygen absorbers inside food-grade 5-gallon buckets. Canned goods typically last 2-5 years past their printed date. The key factors are temperature (below 70F), darkness, low humidity, and absence of oxygen.",
              },
              {
                q: "How much does a 90-day food supply cost?",
                a: "A 90-day food supply costs $300-500 for one person, $500-800 for two people, and $800-1,200 for a family of four when buying staples in bulk. The guide includes a 12-week phased purchasing plan at $30-50 per week so you can build your supply gradually without straining your budget. Focusing on rice, beans, and oats first gives you the most calories per dollar.",
              },
              {
                q: "Can I build an emergency food supply on a tight budget?",
                a: "Absolutely. The cheapest calories come from bulk white rice ($0.03/100 cal), dried beans ($0.05/100 cal), and rolled oats ($0.04/100 cal). A diet based entirely on these three staples costs about $2.40/day or $216 for 90 days. Adding canned proteins and peanut butter raises it to $3.50-4.50/day. The phased shopping plan in this guide spreads costs over 12 weeks to make it manageable on any budget.",
              },
              {
                q: "What is the best way to store emergency food long-term?",
                a: "The gold standard is Mylar bags (5+ mil thickness) with oxygen absorbers, sealed inside food-grade HDPE 5-gallon buckets with gamma-seal lids, stored in a cool (50-70F), dark, dry location off the ground. This method protects against heat, light, moisture, oxygen, and pests — the five enemies of food storage. For canned goods, simply store in a cool, dark pantry and practice FIFO rotation.",
              },
            ].map((faq, i) => (
              <div key={i} className="doom-card p-4">
                <h3 className="font-semibold text-foreground text-sm mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Back link */}
        <div className="text-center">
          <Link
            to="/store"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Store
          </Link>
        </div>
      </div>
    </article>
  );
}
