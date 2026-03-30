import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  BookOpen,
  Shield,
  AlertTriangle,
  CheckCircle,
  Download,
  ExternalLink,
  Clock,
  Droplets,
  Radio,
  Heart,
  Users,
  Zap,
  MapPin,
  FileText,
} from "lucide-react";
import { currentTime } from "../../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

export function NuclearSurvivalGuide() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Nuclear Emergency Survival Guide — 80-Page Digital Guide | DoomsdayClock.net",
      description:
        "The complete 80-page nuclear emergency survival guide. 12 chapters covering shelter-in-place, evacuation, radiation exposure, decontamination, KI dosage, water safety, first aid, and family emergency planning. Based on FEMA, CDC, and NRC guidelines. Instant PDF download for $9.99.",
      path: "/store/nuclear-survival-guide",
      newsKeywords:
        "nuclear survival guide, nuclear emergency preparedness, radiation survival, shelter in place nuclear, nuclear emergency kit, radiation exposure guide, potassium iodide guide, nuclear fallout survival",
      publishedTime: "2026-03-15T00:00:00Z",
      modifiedTime: "2026-03-30T00:00:00Z",
      section: "Products",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Nuclear Emergency Survival Guide — Complete 80-Page Digital Guide",
      datePublished: "2026-03-15T00:00:00Z",
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
        "@id": "https://doomsdayclock.net/store/nuclear-survival-guide",
      },
      description:
        "Complete 80-page nuclear emergency survival guide with 12 chapters, printable checklists, and actionable protocols based on FEMA and CDC guidelines.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Products",
      keywords: [
        "nuclear survival guide",
        "nuclear emergency preparedness",
        "radiation survival",
        "shelter in place nuclear",
        "potassium iodide guide",
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
          name: "Is the Nuclear Emergency Survival Guide a physical book or digital?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Nuclear Emergency Survival Guide is a digital product. You will receive an instant PDF download after purchase. There is no physical book shipped to you.",
          },
        },
        {
          "@type": "Question",
          name: "Can I print the Nuclear Emergency Survival Guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The guide is formatted for standard US Letter paper (8.5 x 11 inches) and is designed to be printed. We recommend printing and storing a physical copy in your emergency kit so it is accessible even without power or internet.",
          },
        },
        {
          "@type": "Question",
          name: "Is the guide based on official government sources?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All recommendations are sourced from FEMA (Federal Emergency Management Agency), the CDC (Centers for Disease Control and Prevention), the Nuclear Regulatory Commission (NRC), and the Department of Homeland Security's Ready.gov program. Scientific data on radiation exposure references published research from the National Academy of Sciences.",
          },
        },
        {
          "@type": "Question",
          name: "Do I get free updates to the Nuclear Survival Guide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. All future updates to the guide are included with your purchase at no extra cost. When we release a new version, you will be able to re-download the latest edition from Gumroad.",
          },
        },
        {
          "@type": "Question",
          name: "What format is the Nuclear Emergency Survival Guide in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The guide is delivered as a PDF file that can be read on any device — computer, tablet, phone, or e-reader. It is optimized for both screen reading and printing.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "nuclear-survival-guide");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "nuclear-survival-guide-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="nuclear-survival-guide"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="nuclear-survival-guide-faq"]'
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
            Nuclear Emergency Survival Guide
          </span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <Download className="w-3.5 h-3.5" />
            Digital Guide — Instant Download
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Nuclear Emergency</span> Survival Guide
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            The complete 80-page guide to surviving a nuclear emergency. From
            shelter-in-place decisions to long-term recovery — based on FEMA,
            CDC, and NRC guidelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-foreground">$9.99</span>
              <span className="text-sm text-muted-foreground">
                one-time purchase
              </span>
            </div>
            <a
              href="https://doomsdayclock.gumroad.com/l/nuclear-survival-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-doom hover:bg-doom/80 text-white font-semibold rounded-lg transition-colors text-base"
            >
              Buy Now on Gumroad
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* What's Inside */}
          <div className="glass-card p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              What's Inside
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-doom">12</div>
                <div className="text-xs text-muted-foreground">Chapters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-doom">80+</div>
                <div className="text-xs text-muted-foreground">Pages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-doom">
                  <CheckCircle className="w-6 h-6 inline" />
                </div>
                <div className="text-xs text-muted-foreground">
                  Printable Checklists
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-doom">
                  <Shield className="w-6 h-6 inline" />
                </div>
                <div className="text-xs text-muted-foreground">
                  Actionable Protocols
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Current Doomsday Clock context */}
        <div className="doom-accent-card p-4 sm:p-6 rounded-xl mb-10">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-doom mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                The Doomsday Clock is at {currentTime.display} to midnight.
              </p>
              <p className="text-xs text-muted-foreground">
                Nuclear threats are at their highest level since the clock's
                creation in 1947. Being prepared is no longer optional — it's
                essential.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Table of Contents
          </h2>
          <div className="glass-card p-6 sm:p-8">
            <ol className="space-y-4">
              {[
                {
                  icon: <Zap className="w-4 h-4" />,
                  title: "Understanding Nuclear Threats",
                  desc: "Types of detonation, blast radius, radiation zones",
                },
                {
                  icon: <AlertTriangle className="w-4 h-4" />,
                  title: "The First 15 Minutes",
                  desc: "What to do immediately when you hear an alert",
                },
                {
                  icon: <Shield className="w-4 h-4" />,
                  title: "Shelter-in-Place Protocol",
                  desc: "Best rooms, sealing doors/windows, air filtration",
                },
                {
                  icon: <MapPin className="w-4 h-4" />,
                  title: "Evacuation Decision Tree",
                  desc: "When to stay vs. when to go, route planning",
                },
                {
                  icon: <AlertTriangle className="w-4 h-4" />,
                  title: "Radiation Exposure Basics",
                  desc: "Types (alpha, beta, gamma), safe dose limits, symptoms",
                },
                {
                  icon: <Droplets className="w-4 h-4" />,
                  title: "Decontamination Procedures",
                  desc: "Personal, clothing, food, water",
                },
                {
                  icon: <Heart className="w-4 h-4" />,
                  title: "Potassium Iodide (KI) Guide",
                  desc: "Dosage by age, timing, where to get it",
                },
                {
                  icon: <Droplets className="w-4 h-4" />,
                  title: "Emergency Water & Food",
                  desc: "Contamination testing, safe consumption, storage",
                },
                {
                  icon: <Heart className="w-4 h-4" />,
                  title: "First Aid for Radiation Exposure",
                  desc: "Acute radiation syndrome, wound care",
                },
                {
                  icon: <Radio className="w-4 h-4" />,
                  title: "Communication & Information",
                  desc: "NOAA frequencies, emergency broadcasts, HAM radio",
                },
                {
                  icon: <Clock className="w-4 h-4" />,
                  title: "Long-Term Recovery",
                  desc: "Fallout decay timeline, when it's safe to go outside",
                },
                {
                  icon: <Users className="w-4 h-4" />,
                  title: "Family Emergency Plan Template",
                  desc: "Printable worksheets, contact sheets, checklists",
                },
              ].map((ch, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-doom">{ch.icon}</span>
                      <span className="font-semibold text-foreground">
                        {ch.title}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{ch.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            FULL GUIDE CONTENT — 12 CHAPTERS
        ═══════════════════════════════════════════════════════ */}

        <div className="space-y-12">
          {/* Chapter 1 */}
          <section id="chapter-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                1
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Understanding Nuclear Threats
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Nuclear threats come in several forms, and understanding the
                differences is critical to responding effectively. The three
                primary scenarios are a nuclear weapon detonation (either
                strategic or tactical), a radiological dispersal device (commonly
                called a "dirty bomb"), and a nuclear power plant accident.
                Each scenario produces different types and levels of radiation,
                different blast effects, and requires different responses.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                A strategic nuclear weapon — the type carried by ICBMs — produces
                a blast radius that can level reinforced concrete structures
                within 1-2 miles of ground zero. The thermal pulse can cause
                third-degree burns up to 5 miles away, and the initial nuclear
                radiation (gamma rays and neutrons) is lethal within
                approximately 1.5 miles. However, the greatest long-term danger
                comes from radioactive fallout: irradiated debris lifted into
                the atmosphere that settles over a much larger area, potentially
                hundreds of miles downwind. Tactical nuclear weapons are smaller
                (0.1-50 kilotons versus 100+ kilotons for strategic weapons) but
                produce proportionally similar effects at reduced ranges.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                A dirty bomb uses conventional explosives to scatter radioactive
                material. The blast radius is small — comparable to any
                conventional bomb — but the contamination zone can span several
                city blocks. While unlikely to cause acute radiation sickness,
                dirty bombs create lasting contamination that requires
                professional decontamination. A nuclear plant accident (like
                Chernobyl in 1986 or Fukushima in 2011) can release radioactive
                isotopes including iodine-131, cesium-137, and strontium-90 over
                a wide area, with contamination persisting for years to decades
                depending on the isotope.
              </p>

              <div className="doom-accent-card p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-doom mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Key Radiation Zones
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>
                        <strong>Severe Damage Zone (0-1 mi):</strong> Total
                        destruction. Survival unlikely without deep underground
                        shelter.
                      </li>
                      <li>
                        <strong>Moderate Damage Zone (1-3 mi):</strong>{" "}
                        Significant structural damage, fires, dangerous
                        radiation levels. Immediate shelter required.
                      </li>
                      <li>
                        <strong>Light Damage Zone (3-10 mi):</strong> Broken
                        windows, minor structural damage. Fallout is primary
                        threat.
                      </li>
                      <li>
                        <strong>Fallout Zone (10-100+ mi downwind):</strong>{" "}
                        Radioactive particles settle over hours to days.
                        Shelter-in-place is essential.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 2 */}
          <section id="chapter-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                2
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                The First 15 Minutes
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The first 15 minutes after a nuclear alert or detonation are the
                most critical window for survival. According to FEMA's Nuclear
                Detonation Response Communications guidelines, the actions you
                take in these minutes can mean the difference between life and
                death — particularly regarding radiation exposure. If you see a
                bright flash (brighter than the sun), do NOT look at it. Turn
                away, drop to the ground, and cover your head. If you are within
                a few miles, the shockwave will arrive within seconds; stay down
                until it passes.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                If you receive a Wireless Emergency Alert (WEA) or hear an
                Emergency Alert System (EAS) broadcast warning of an incoming
                nuclear threat, you have minutes — not hours — to act. Your
                single priority is getting to the best available shelter
                immediately. Do not try to drive away. Traffic gridlock will
                trap you outdoors with zero protection. The best shelter is the
                center of a large, solid building — a concrete or brick
                structure with multiple floors. Basements are ideal. The more
                mass (concrete, earth, brick) between you and the outside, the
                more radiation is blocked.
              </p>

              <div className="glass-card p-5 rounded-xl">
                <p className="text-sm font-semibold text-foreground mb-3">
                  15-Minute Action Checklist:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "GET INSIDE the nearest solid building immediately — do not stay in a car",
                    "Go to the basement or the center of the building, away from windows",
                    "If outdoors when detonation occurs: drop, cover, and stay down until the shockwave passes",
                    "Remove outer clothing and bag it — this removes up to 90% of radioactive particles",
                    "Shower or wash exposed skin with soap and water (do not use conditioner)",
                    "Do NOT use conditioner — it binds radioactive particles to hair",
                    "Seal windows and doors with plastic sheeting and duct tape if available",
                    "Turn off HVAC systems and fans that pull air from outside",
                    "Tune to NOAA Weather Radio (162.400-162.550 MHz) or local emergency broadcasts",
                    "Account for all family members; text (do not call) to preserve network capacity",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="doom-accent-card p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-doom mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Critical Warning:</strong>{" "}
                    Do not go outside to look for family members immediately
                    after a detonation. Fallout begins arriving within 15-20
                    minutes. Going outside during active fallout dramatically
                    increases your radiation dose. Wait at least 24 hours before
                    venturing out unless instructed by authorities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 3 */}
          <section id="chapter-3">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                3
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Shelter-in-Place Protocol
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Sheltering in place is your primary survival strategy during and
                after a nuclear event. According to the Department of Homeland
                Security (Ready.gov), even a basic shelter — the interior rooms
                of a standard house — can reduce your radiation exposure by a
                factor of 10. A basement reduces it by a factor of 100-200, and
                the center floors of a large concrete building can reduce
                exposure by a factor of 200 or more. The key principle is
                "mass and distance" — the more material between you and the
                fallout, and the farther you are from contaminated surfaces
                (roof, outer walls, ground), the safer you are.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                The ideal shelter room is an interior room (no exterior walls)
                on a lower floor, preferably a basement. Avoid rooms with large
                windows. If you must shelter above ground, choose a room in the
                center of the building on a middle floor — radiation comes from
                the roof as well as the ground, so the middle floors of a
                multi-story building provide the most shielding. Seal all
                openings: use plastic sheeting and duct tape to cover windows,
                doors, and vents. Turn off all forced-air heating, air
                conditioning, and ventilation systems that draw air from outside.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                You should plan to shelter for a minimum of 24 hours, and
                ideally 48-72 hours. Radioactive fallout decays rapidly: the
                "7-10 Rule" states that for every 7-fold increase in time after
                detonation, the radiation intensity decreases by a factor of 10.
                This means that at 7 hours post-detonation, radiation is 10% of
                the initial level; at 49 hours (7x7), it is 1%; and at 343
                hours (~2 weeks), it is 0.1%. After 48-72 hours, radiation
                levels are typically low enough to allow brief outdoor
                excursions if necessary.
              </p>

              <div className="glass-card p-5 rounded-xl">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Shelter Room Setup Checklist:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Choose an interior room without windows — basement is ideal",
                    "Seal windows and doors with 4-mil (or thicker) plastic sheeting and duct tape",
                    "Cover vents and any openings with plastic and tape",
                    "Shut off HVAC systems that pull outside air",
                    "Bring water (1 gallon per person per day for at least 3 days)",
                    "Bring non-perishable food, can opener, utensils",
                    "Battery-powered or hand-crank NOAA weather radio",
                    "Flashlights and extra batteries",
                    "First aid kit and essential medications (7-day supply minimum)",
                    "Sanitation supplies: garbage bags, ties, bucket for toilet use",
                    "Potassium iodide (KI) tablets if available",
                    "Phone charger (battery pack — wall power may be out)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="doom-accent-card p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-doom mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">
                      Improvised Air Filtration:
                    </strong>{" "}
                    If you do not have a HEPA filter, a wet towel or multiple
                    layers of T-shirt material placed over an air intake can
                    filter out a significant portion of radioactive particles
                    (which are mostly larger dust-size particles, not gases).
                    This is not perfect but is far better than unfiltered air.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 4 */}
          <section id="chapter-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                4
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Evacuation Decision Tree
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The decision to shelter in place or evacuate is one of the most
                consequential choices you will make during a nuclear emergency.
                In most scenarios, sheltering in place for the first 24-72 hours
                is the correct decision. FEMA's official guidance is clear:
                "Get inside, stay inside, stay tuned." The only exception is if
                authorities issue an explicit evacuation order, or if your
                shelter is so inadequate (e.g., a vehicle or a building with
                extensive window damage) that you are receiving significant
                radiation exposure.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                After the initial 24-72 hours, evacuation may become necessary
                or advisable, particularly if you are in a heavy fallout zone
                and your shelter provides limited protection. Before evacuating,
                gather information from emergency broadcasts about: which
                direction the fallout plume is moving, which roads are passable,
                and where official evacuation shelters have been established.
                Plan your route to travel perpendicular to the prevailing wind
                direction (crosswind), not directly upwind or downwind.
              </p>

              <div className="glass-card p-5 rounded-xl">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Evacuate IF:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {[
                    "Authorities issue an official evacuation order via EAS or WEA",
                    "Your shelter is severely damaged (collapsed walls, no roof, open to outside)",
                    "You are in a vehicle or outdoors and a better shelter is reachable within 10-15 minutes",
                    "You have a personal dosimeter and it shows your cumulative dose approaching 100 mSv",
                    "You are within the Severe Damage Zone and still alive — move to better shelter immediately",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowLeft className="w-4 h-4 text-doom mt-0.5 shrink-0 rotate-180" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm font-semibold text-foreground mb-3">
                  Stay Sheltered IF:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "You are in a solid building with a basement or interior rooms",
                    "It has been less than 24 hours since the detonation",
                    "You have no reliable information about safe evacuation routes",
                    "Roads are gridlocked or impassable",
                    "You have adequate water, food, and medical supplies for 72 hours",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Shield className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                If you decide to evacuate, protect yourself during travel. Wear
                long sleeves, long pants, boots, gloves, and a mask or damp
                cloth over your nose and mouth. Cover as much skin as possible.
                Travel in a sealed vehicle with windows up and ventilation set to
                recirculate (not pulling outside air). If driving through visible
                fallout (ash-like particles), do not stop. Move as quickly and
                safely as possible through the contaminated area. Once you reach
                clean territory, remove and bag all outer clothing before
                entering a clean building.
              </p>
            </div>
          </section>

          {/* Chapter 5 */}
          <section id="chapter-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                5
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Radiation Exposure Basics
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Understanding the three types of ionizing radiation is essential
                for protecting yourself. Alpha particles are the largest and
                least penetrating — a sheet of paper or your outer skin layer
                stops them. They are dangerous only if inhaled or ingested
                (internal contamination). Beta particles are smaller and can
                penetrate skin, causing "beta burns" similar to severe sunburn.
                Clothing provides partial protection. Gamma rays are
                electromagnetic radiation (like X-rays but more energetic) that
                can pass through the body entirely. Only dense materials like
                lead, concrete, or packed earth effectively block gamma rays.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Radiation dose is measured in millisieverts (mSv) or rem (1 rem
                = 10 mSv). For context, a chest X-ray delivers about 0.1 mSv.
                The typical annual background radiation dose is 3 mSv. According
                to the Nuclear Regulatory Commission, the general public dose
                limit is 1 mSv per year above background. In an emergency,
                different thresholds apply. FEMA's guidelines for emergency
                workers allow up to 50 mSv for property protection and up to
                250 mSv for lifesaving activities. For the general public in a
                nuclear emergency, doses below 100 mSv total are considered
                low-risk for long-term health effects.
              </p>

              <div className="glass-card p-5 rounded-xl overflow-x-auto">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Radiation Dose Effects (Acute Whole-Body Exposure):
                </p>
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">
                        Dose (mSv)
                      </th>
                      <th className="text-left py-2 text-foreground font-semibold">
                        Effects
                      </th>
                    </tr>
                  </thead>
                  <tbody className="space-y-1">
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">0-100</td>
                      <td className="py-2">
                        No immediate symptoms. Slight increase in lifetime
                        cancer risk.
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">100-500</td>
                      <td className="py-2">
                        Nausea, fatigue within hours. Reduced blood cell counts.
                        Recovery likely with medical care.
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">500-1,000</td>
                      <td className="py-2">
                        Severe nausea, vomiting, hair loss. Significant risk of
                        death without medical treatment. Bone marrow suppression.
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">1,000-2,000</td>
                      <td className="py-2">
                        Severe acute radiation syndrome (ARS). Internal bleeding,
                        infection. Fatal in majority of cases even with treatment.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">2,000+</td>
                      <td className="py-2">
                        Rapid onset of symptoms. Cardiovascular and
                        neurological collapse. Almost always fatal within days
                        to weeks.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="doom-accent-card p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-doom mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">
                      The ALARA Principle:
                    </strong>{" "}
                    Keep radiation exposure <strong>A</strong>s{" "}
                    <strong>L</strong>ow <strong>A</strong>s{" "}
                    <strong>R</strong>easonably <strong>A</strong>chievable.
                    There is no "safe" threshold — all radiation exposure
                    carries some risk. Minimize time spent in contaminated
                    areas, maximize distance from radiation sources, and
                    maximize shielding between you and the source.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 6 */}
          <section id="chapter-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                6
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Decontamination Procedures
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Decontamination — removing radioactive particles from your body,
                clothing, and immediate environment — is one of the most
                effective actions you can take to reduce your radiation dose. The
                CDC recommends that simply removing your outer layer of clothing
                can eliminate up to 90% of external radioactive contamination.
                This should be your first action after reaching shelter if you
                were outdoors during fallout.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                For personal decontamination, remove all outer clothing and shoes
                before entering your shelter area if possible. Place contaminated
                clothing in a plastic bag and seal it. Place that bag inside a
                second bag and seal it. Keep the bags away from people and
                animals. Shower or wash with warm water and soap as soon as
                possible. Wash your hair with shampoo only — do NOT use
                conditioner, as it binds radioactive particles to hair. Gently
                wash your body; do not scrub or scratch your skin, as breaks in
                the skin allow radioactive particles to enter your body. Clean
                under fingernails. Blow your nose gently and wipe your eyelids
                and eyelashes with a clean damp cloth.
              </p>

              <div className="glass-card p-5 rounded-xl">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Decontamination Steps (In Order):
                </p>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>
                    Remove outer clothing and shoes at the entrance — do not
                    bring them inside living areas
                  </li>
                  <li>
                    Double-bag contaminated clothing in sealed plastic bags
                  </li>
                  <li>
                    Shower with warm water and soap (shampoo only, no
                    conditioner)
                  </li>
                  <li>
                    Gently wash all exposed skin — do not scrub or abrade
                  </li>
                  <li>Clean under fingernails thoroughly</li>
                  <li>
                    Blow nose, wipe eyes and ears with damp cloth
                  </li>
                  <li>
                    Put on clean clothing from inside the shelter
                  </li>
                  <li>
                    If no shower is available, wipe exposed skin with wet wipes
                    or damp cloths
                  </li>
                </ol>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                For food and water decontamination: any food that was in sealed
                containers (cans, sealed packages, bottles) during the event is
                safe to consume after the outside of the container is washed.
                Wipe containers down with a damp cloth or rinse with clean water
                before opening. Exposed food — anything that was open to the air
                during fallout — should be discarded. Water from a covered or
                enclosed source (sealed bottles, a covered well, hot water
                heater tank) is safe. Municipal water from underground pipes is
                generally safe. Open bodies of water, rainwater collected after
                the event, and water from uncovered tanks should be considered
                contaminated.
              </p>
            </div>
          </section>

          {/* Chapter 7 */}
          <section id="chapter-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                7
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Potassium Iodide (KI) Guide
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Potassium iodide (KI) is one of the few over-the-counter
                medications specifically designed for nuclear emergencies. It
                works by saturating your thyroid gland with stable (non-
                radioactive) iodine, preventing the thyroid from absorbing
                radioactive iodine-131 (I-131). This is important because the
                thyroid is the organ most vulnerable to radioactive iodine, and
                I-131 is one of the primary isotopes released during nuclear
                events and reactor accidents. The CDC and FDA both recommend KI
                as part of a nuclear emergency preparedness kit.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Timing is critical. KI is most effective when taken within 3-4
                hours before or immediately after exposure to radioactive iodine.
                It provides about 24 hours of protection per dose. KI only
                protects the thyroid — it does not protect against other types of
                radiation or other radioactive isotopes. It is not a general
                radiation treatment. Do NOT take KI unless there is a confirmed
                or highly likely release of radioactive iodine (nuclear
                detonation, reactor accident, or official guidance to take it).
              </p>

              <div className="glass-card p-5 rounded-xl overflow-x-auto">
                <p className="text-sm font-semibold text-foreground mb-3">
                  FDA-Recommended KI Dosage by Age:
                </p>
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">
                        Age Group
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">
                        Dose (mg)
                      </th>
                      <th className="text-left py-2 text-foreground font-semibold">
                        130mg Tablets
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">Adults (18+)</td>
                      <td className="py-2 pr-4">130 mg</td>
                      <td className="py-2">1 tablet</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">Adolescents (12-17, 150+ lbs)</td>
                      <td className="py-2 pr-4">130 mg</td>
                      <td className="py-2">1 tablet</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">Children (3-12)</td>
                      <td className="py-2 pr-4">65 mg</td>
                      <td className="py-2">1/2 tablet</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">Toddlers (1 month - 3 years)</td>
                      <td className="py-2 pr-4">32 mg</td>
                      <td className="py-2">1/4 tablet</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">Newborns (birth - 1 month)</td>
                      <td className="py-2 pr-4">16 mg</td>
                      <td className="py-2">1/8 tablet</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="doom-accent-card p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-doom mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Important KI Warnings:
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>
                        People with iodine allergies or thyroid conditions
                        (Graves' disease, thyroiditis) should consult a doctor
                        before taking KI.
                      </li>
                      <li>
                        Do not take more than the recommended dose — excess
                        iodine can cause thyroid damage.
                      </li>
                      <li>
                        KI has a shelf life of 5-7 years. Check expiration dates
                        on your supply.
                      </li>
                      <li>
                        Available without prescription at pharmacies and online
                        (brands: IOSAT, ThyroSafe).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 8 */}
          <section id="chapter-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                8
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Emergency Water & Food
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Water is your most critical resource. The human body can survive
                weeks without food but only about 3 days without water. FEMA
                recommends storing a minimum of 1 gallon per person per day for
                at least 3 days, and ideally 2 weeks. In a nuclear emergency,
                dehydration is a more immediate threat than radiation for most
                people. Your shelter should have a water plan before an
                emergency occurs.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Safe water sources during a nuclear event include: sealed
                commercial bottled water, your home's hot water heater tank
                (40-80 gallons in a typical home), water from your home's pipes
                (let faucets drain into containers before shutting off the main
                valve), toilet tanks (not bowls) if no chemical cleaners have
                been used, and sealed rain barrels that were covered before the
                event. Municipal tap water is generally safe if it comes from
                underground pipes and was not contaminated at the treatment
                plant. Listen to emergency broadcasts for information about
                municipal water safety.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                If you must purify questionable water: boiling kills biological
                contaminants but does NOT remove radioactive particles.
                Filtering through activated charcoal or a quality water filter
                (look for NSF/ANSI 53 or 58 certified filters) can remove many
                radioactive particles. Reverse osmosis systems are the most
                effective at removing radioactive contamination. In an
                emergency, filtering through multiple layers of cloth, followed
                by boiling, is better than no treatment — it removes larger
                particles that may carry radiation.
              </p>

              <div className="glass-card p-5 rounded-xl">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Emergency Food Priorities (in order):
                </p>
                <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>
                    Eat perishables first (refrigerator food — safe for 4 hours
                    without power, freezer food safe for 24-48 hours)
                  </li>
                  <li>
                    Sealed canned goods (wipe exterior with damp cloth before
                    opening)
                  </li>
                  <li>
                    Sealed dry goods: rice, pasta, oats, dried beans
                  </li>
                  <li>
                    Protein bars, meal replacement drinks, peanut butter
                  </li>
                  <li>
                    Freeze-dried or dehydrated emergency meals
                  </li>
                  <li>
                    MREs (Meals Ready to Eat) — 5-year shelf life, no
                    preparation needed
                  </li>
                </ol>
              </div>

              <div className="doom-accent-card p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-doom mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Food Safety Rule:</strong>{" "}
                    Any food that was exposed to the open air during fallout
                    should be discarded. If you are unsure whether food was
                    sealed during the event, discard it. The risk of internal
                    contamination from ingesting radioactive particles is far
                    greater than the risk from external exposure.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 9 */}
          <section id="chapter-9">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                9
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                First Aid for Radiation Exposure
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Acute Radiation Syndrome (ARS) occurs when a person receives a
                large dose of radiation over a short period (typically more than
                500 mSv). ARS progresses through four phases: the prodromal
                phase (nausea, vomiting, diarrhea within minutes to hours), the
                latent phase (a deceptive period of apparent improvement lasting
                hours to weeks), the manifest illness phase (the full impact of
                radiation damage to bone marrow, GI tract, or cardiovascular
                system), and either recovery or death.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                First aid priorities for radiation casualties differ from normal
                first aid. The most important principle: treat life-threatening
                injuries first, radiation second. Bleeding, airway compromise,
                and shock are more immediately lethal than radiation exposure.
                Do not delay treating a wound because the person is
                contaminated. Wear gloves when treating contaminated individuals,
                but do not withhold aid if gloves are unavailable.
              </p>

              <div className="glass-card p-5 rounded-xl">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Radiation First Aid Protocol:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Treat life-threatening injuries (bleeding, breathing, shock) FIRST",
                    "Decontaminate the person: remove clothing, wash with soap and water",
                    "Cover open wounds with clean bandages to prevent radioactive particles from entering",
                    "For nausea/vomiting (prodromal symptoms): offer small sips of water, keep person comfortable",
                    "Do NOT induce vomiting unless specifically instructed by medical personnel",
                    "Monitor for signs of ARS: persistent vomiting, bloody diarrhea, fever, hair loss, skin reddening",
                    "Keep the person warm — radiation injury can impair thermoregulation",
                    "Record the time and duration of exposure if known — this information is critical for medical treatment",
                    "If available, administer anti-nausea medication (ondansetron/Zofran if you have it)",
                    "Seek professional medical care as soon as it becomes safely accessible",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="doom-accent-card p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-doom mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">
                      Beta Burns:
                    </strong>{" "}
                    Exposed skin can develop "beta burns" from beta radiation —
                    these look like severe sunburn and may not appear for hours
                    or days. Treat like thermal burns: keep clean, apply sterile
                    dressings, do NOT pop blisters. Beta burns on more than 20%
                    of body surface area are a medical emergency.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 10 */}
          <section id="chapter-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                10
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Communication & Information
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Reliable information can be as critical as physical shelter
                during a nuclear emergency. The electromagnetic pulse (EMP) from
                a nuclear detonation can damage electronics within a significant
                radius, and power infrastructure may be down for days, weeks, or
                longer. Your communication plan must not depend solely on
                smartphones and the internet. The most reliable source of
                official emergency information is NOAA Weather Radio All
                Hazards, which broadcasts continuously on seven frequencies
                (162.400, 162.425, 162.450, 162.475, 162.500, 162.525, and
                162.550 MHz).
              </p>

              <p className="text-muted-foreground leading-relaxed">
                A battery-powered or hand-crank AM/FM/NOAA radio is the single
                most important communication device for a nuclear emergency.
                The Emergency Alert System (EAS) broadcasts on all AM and FM
                stations. AM radio signals travel farther than FM, especially at
                night, making AM your best option if NOAA frequencies are not
                available. A hand-crank radio with a built-in flashlight and USB
                charging port is an ideal multi-function emergency device.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                For personal communications: text messages are far more likely
                to go through than voice calls during a crisis because they use
                minimal bandwidth. If cell networks are down, a HAM (amateur)
                radio can provide communication capabilities ranging from local
                to worldwide. The entry-level Technician class HAM license
                requires passing a 35-question exam and is valid for 10 years.
                HAM radio operators are often the first communication link in
                disaster zones. Even without a license, in a life-threatening
                emergency, anyone may legally transmit on HAM frequencies.
              </p>

              <div className="glass-card p-5 rounded-xl">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Communication Kit Essentials:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Hand-crank or battery-powered AM/FM/NOAA weather radio",
                    "Extra batteries (store in Faraday bag for EMP protection)",
                    "Portable battery bank (fully charged, stored in Faraday bag)",
                    "Written list of emergency contacts (don't rely on phone memory)",
                    "Paper map of your area with evacuation routes marked",
                    "Whistle for signaling rescuers if trapped",
                    "Ham radio (Baofeng UV-5R or similar) — even for receive-only monitoring",
                    "NOAA frequencies written down: 162.400 - 162.550 MHz",
                    "Local AM/FM emergency broadcast stations written down",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Radio className="w-4 h-4 text-doom mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="doom-accent-card p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-doom mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">
                      EMP Protection:
                    </strong>{" "}
                    A nuclear detonation produces an electromagnetic pulse that
                    can damage unshielded electronics. Protect backup devices by
                    storing them in a Faraday cage or bag. A simple DIY option:
                    wrap the device in plastic, then wrap in aluminum foil, then
                    in another layer of plastic and foil. A sealed metal
                    container (such as a metal garbage can with a tight lid and
                    cardboard lining) also works as a Faraday cage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Chapter 11 */}
          <section id="chapter-11">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                11
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Long-Term Recovery
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Understanding fallout decay is essential for planning your
                emergence from shelter and your long-term recovery. The "7-10
                Rule" is the most important concept: for every 7-fold increase
                in time after a nuclear detonation, the radiation intensity
                decreases by a factor of 10. If the radiation level is 1,000
                R/hr at 1 hour after detonation, it will be approximately 100
                R/hr at 7 hours, 10 R/hr at 49 hours (about 2 days), and 1 R/hr
                at 343 hours (about 2 weeks). This rapid decay means that the
                danger from fallout decreases dramatically in the first few
                days.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                After the initial 48-72 hour shelter period, you may need to
                make brief excursions for water, supplies, or to assess your
                situation. Limit outdoor time to 30 minutes or less during the
                first week. Wear full protective clothing (long sleeves, pants,
                boots, mask, gloves). When you return inside, decontaminate
                immediately — remove outer clothing, shower, and change. As
                radiation levels continue to drop, you can gradually increase
                your time outdoors. By 2 weeks after the event, outdoor
                radiation is typically at 0.1% of initial levels.
              </p>

              <div className="glass-card p-5 rounded-xl overflow-x-auto">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Fallout Decay Timeline:
                </p>
                <table className="w-full text-sm text-muted-foreground">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">
                        Time After Detonation
                      </th>
                      <th className="text-left py-2 pr-4 text-foreground font-semibold">
                        Radiation Level
                      </th>
                      <th className="text-left py-2 text-foreground font-semibold">
                        Recommended Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">1 hour</td>
                      <td className="py-2 pr-4">100%</td>
                      <td className="py-2">
                        Stay in shelter. Do not go outside for any reason.
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">7 hours</td>
                      <td className="py-2 pr-4">~10%</td>
                      <td className="py-2">
                        Remain sheltered. Monitor emergency broadcasts.
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">49 hours (~2 days)</td>
                      <td className="py-2 pr-4">~1%</td>
                      <td className="py-2">
                        Brief excursions possible if necessary. Full protective
                        gear required.
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 pr-4">2 weeks</td>
                      <td className="py-2 pr-4">~0.1%</td>
                      <td className="py-2">
                        Limited outdoor activity with precautions. Avoid
                        hotspots.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4">1 month+</td>
                      <td className="py-2 pr-4">&lt;0.05%</td>
                      <td className="py-2">
                        Normal outdoor activity in most areas. Monitor for
                        contamination hotspots.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Long-term health monitoring is important for anyone who received
                significant radiation exposure. Keep a record of your estimated
                dose, the time and duration of exposure, and any symptoms. The
                primary long-term health risk from moderate radiation exposure
                is an increased risk of cancer, which may not manifest for years
                or decades. Regular medical checkups, including blood work and
                thyroid screening, are recommended. Mental health support is also
                critical — the psychological impact of a nuclear event is
                profound and long-lasting. Seek counseling and community support
                as services become available.
              </p>
            </div>
          </section>

          {/* Chapter 12 */}
          <section id="chapter-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-doom/20 border border-doom/40 text-doom text-sm font-bold">
                12
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Family Emergency Plan Template
              </h2>
            </div>

            <div className="prose-doom space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Every household needs a documented emergency plan that every
                family member understands before an emergency occurs. The time
                to plan is now — not during a crisis. The following template
                covers the essential elements of a family nuclear emergency plan.
                Print this section, fill it out, and keep copies in your
                emergency kit, your car, and at your workplace.
              </p>

              <div className="glass-card p-5 rounded-xl">
                <p className="text-sm font-semibold text-foreground mb-4">
                  Family Emergency Plan Worksheet:
                </p>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      1. Meeting Points
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Primary Shelter Location (home): ___________________
                      </li>
                      <li>
                        Best room in home for sheltering: ___________________
                      </li>
                      <li>
                        Secondary Shelter (if home is unsuitable):
                        ___________________
                      </li>
                      <li>
                        Out-of-area meeting point (if separated and evacuating):
                        ___________________
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      2. Emergency Contacts
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Out-of-state contact (relay point): Name: ________
                        Phone: ________
                      </li>
                      <li>
                        Local emergency services: ___________________
                      </li>
                      <li>
                        Nearest hospital: ___________________
                      </li>
                      <li>Poison control: 1-800-222-1222</li>
                      <li>FEMA: 1-800-621-3362</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      3. Family Member Information
                    </p>
                    <p className="text-xs italic mb-2">
                      (Fill out for each family member)
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>Name: _________________ Blood Type: _________</li>
                      <li>
                        Medications: ___________________ Dosage: ___________
                      </li>
                      <li>Allergies: ___________________</li>
                      <li>
                        Special needs: ___________________
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      4. Supply Inventory Checklist
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>
                        ☐ Water: ____ gallons (need {"{"}1 gal/person/day x 14
                        days{"}"})
                      </li>
                      <li>
                        ☐ Food: ____ days of non-perishable supplies
                      </li>
                      <li>
                        ☐ KI tablets: ____ (count) Expiration: ____
                      </li>
                      <li>☐ First aid kit: Last checked: ____</li>
                      <li>☐ NOAA radio: Battery status: ____</li>
                      <li>☐ Flashlights: ____ Battery status: ____</li>
                      <li>☐ Plastic sheeting and duct tape: ☐ Yes ☐ No</li>
                      <li>☐ N95/P100 masks: ____ (count)</li>
                      <li>☐ Battery bank: Charge level: ____</li>
                      <li>
                        ☐ Cash (small bills): $____ (ATMs may be down)
                      </li>
                      <li>☐ Important documents (copies in waterproof bag)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-2">
                      5. Evacuation Routes
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Primary route (perpendicular to prevailing winds):
                        ___________________
                      </li>
                      <li>
                        Secondary route: ___________________
                      </li>
                      <li>
                        Destination: ___________________
                      </li>
                      <li>
                        Distance / estimated travel time: ___________________
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Review and update this plan every 6 months. Check supply
                expiration dates, update contact information, and practice your
                shelter-in-place procedure at least once a year. Every family
                member old enough to understand should know where the shelter
                room is, where the emergency supplies are stored, and what to do
                if they are away from home when an alert sounds. Designate an
                out-of-state contact person who can serve as a central point of
                communication — after a disaster, long-distance calls often go
                through more reliably than local ones.
              </p>

              <div className="doom-accent-card p-4 rounded-xl">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-doom mt-0.5 shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">
                      Children and Elderly:
                    </strong>{" "}
                    Make age-appropriate versions of the plan. Young children
                    should memorize their full name, address, and a parent's
                    phone number. Elderly family members may need help with
                    mobility during shelter-in-place or evacuation. If anyone in
                    your household requires electrically powered medical
                    equipment (oxygen concentrators, CPAP, etc.), have a
                    battery backup or manual alternative ready.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ═══════════════════════════════════════════════════════
            PURCHASE CTA
        ═══════════════════════════════════════════════════════ */}

        <section className="mt-16">
          <div className="glass-card p-8 sm:p-10 text-center border border-doom/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Get the Full Guide
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Download the complete 80-page Nuclear Emergency Survival Guide.
              Instant PDF delivery. Print it, save it, share it with your family.
            </p>

            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">
                  $9.99
                </span>
                <span className="text-sm text-muted-foreground">
                  one-time purchase
                </span>
              </div>
              <a
                href="https://doomsdayclock.gumroad.com/l/nuclear-survival-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-doom hover:bg-doom/80 text-white font-bold rounded-lg transition-colors text-lg"
              >
                <BookOpen className="w-5 h-5" />
                Buy Now on Gumroad
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground max-w-xl mx-auto mb-6">
              <div className="flex items-center justify-center gap-2">
                <Download className="w-4 h-4 text-doom" />
                Instant PDF Download
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                Free Lifetime Updates
              </div>
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-doom" />
                30-Day Money-Back Guarantee
              </div>
            </div>

            <p className="text-xs text-muted-foreground">
              Not satisfied? Get a full refund within 30 days, no questions
              asked.
            </p>
          </div>
        </section>

        {/* Related Products */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass-card p-5 hover:border-doom/30 transition-all">
              <div className="flex items-start gap-4">
                <FileText className="w-8 h-8 text-doom/60 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    Family Emergency Plan Template
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Editable PDF template for your family's complete emergency
                    action plan. Includes contact sheets, meeting points, and
                    go-bag checklists.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foreground">$4.99</span>
                    <a
                      href="https://doomsdayclock.gumroad.com/l/family-emergency-plan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-doom/20 hover:bg-doom/30 text-doom text-xs font-semibold rounded-lg transition-colors"
                    >
                      View Guide
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-5 hover:border-doom/30 transition-all">
              <div className="flex items-start gap-4">
                <BookOpen className="w-8 h-8 text-doom/60 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    90-Day Emergency Food Planning Guide
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3">
                    Complete meal planning for 90 days of emergency food
                    storage. Shopping lists, rotation schedules, and calorie
                    calculations.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-foreground">$7.99</span>
                    <a
                      href="https://doomsdayclock.gumroad.com/l/food-planning-guide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-doom/20 hover:bg-doom/30 text-doom text-xs font-semibold rounded-lg transition-colors"
                    >
                      View Guide
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            FAQ SECTION
        ═══════════════════════════════════════════════════════ */}

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Is this a physical book or digital?",
                a: "The Nuclear Emergency Survival Guide is a digital product. After purchase, you will receive an instant PDF download via Gumroad. There is no physical book shipped. You can read it on any device and print your own physical copy.",
              },
              {
                q: "Can I print it?",
                a: "Yes. The guide is formatted for standard US Letter paper (8.5\" x 11\") and is designed to be printed. We strongly recommend printing a copy and keeping it in your emergency kit — in a real emergency, you may not have power or internet access to view a digital file.",
              },
              {
                q: "Is the information based on official sources?",
                a: "Yes. All recommendations and protocols in this guide are sourced from FEMA (Federal Emergency Management Agency), the CDC (Centers for Disease Control and Prevention), the Nuclear Regulatory Commission (NRC), the Department of Homeland Security's Ready.gov program, and peer-reviewed scientific literature on radiation health effects.",
              },
              {
                q: "Do I get updates?",
                a: "Yes. All future updates to the guide are included with your purchase at no extra cost. When we release updated editions (such as when new government guidelines are issued), you can re-download the latest version from your Gumroad library.",
              },
              {
                q: "What format is it in?",
                a: "The guide is delivered as a high-quality PDF file. It is optimized for both screen reading (with clickable table of contents and hyperlinks) and printing. The PDF is compatible with all major devices and operating systems.",
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card p-5">
                <h3 className="font-semibold text-foreground mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Back to Store */}
        <div className="mt-12">
          <Link
            to="/store"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Store
          </Link>
        </div>
      </div>
    </article>
  );
}
