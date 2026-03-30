import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Download,
  FileText,
  Users,
  MapPin,
  Package,
  Heart,
  FolderLock,
  AlertTriangle,
  CheckSquare,
  Phone,
  Navigation,
  ClipboardList,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

const GUMROAD_URL = "https://doomsdayclock.gumroad.com/l/family-emergency-plan";

export function FamilyEmergencyPlan() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Family Emergency Plan Template — Editable Printable Kit | $4.99 Instant Download",
      description:
        "Complete family emergency plan template with contact sheets, evacuation routes, go-bag checklists, medical info, document checklist, and scenario-specific action plans. Printable, fillable, and ready to use. $4.99 instant download.",
      path: "/store/family-emergency-plan",
      newsKeywords:
        "family emergency plan template, emergency preparedness checklist, go bag checklist, evacuation plan template, emergency contact sheet, family emergency kit, disaster preparedness plan",
      publishedTime: "2026-03-30T00:00:00Z",
      modifiedTime: "2026-03-30T00:00:00Z",
      section: "Products",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: "Family Emergency Plan Template — Complete Printable Kit",
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
        "@id": "https://doomsdayclock.net/store/family-emergency-plan",
      },
      description:
        "Complete family emergency plan template with contact sheets, evacuation routes, go-bag checklists, medical info, and scenario action plans.",
      image: "https://doomsdayclock.net/og-image-2026.png",
      articleSection: "Products",
      keywords: [
        "family emergency plan",
        "emergency preparedness template",
        "go bag checklist",
        "evacuation plan",
        "emergency contacts template",
      ],
      inLanguage: "en-US",
      isAccessibleForFree: true,
      wordCount: 3500,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is included in the Family Emergency Plan Template?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The template includes 6 comprehensive sections: Emergency Contacts & Communication Plan, Meeting Points & Evacuation Routes, Supply Inventory & Go-Bag Checklist, Medical Information & Special Needs, Important Documents Checklist, and Scenario-Specific Action Plans covering nuclear emergencies, natural disasters, power grid failures, chemical/biological threats, and civil unrest.",
          },
        },
        {
          "@type": "Question",
          name: "Is the family emergency plan template printable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The template is designed to be printed, filled in by hand, and stored in a binder or go-bag. You can also fill in the digital version on your device before printing. All sections use clear formatting with fillable fields, checkboxes, and organized tables.",
          },
        },
        {
          "@type": "Question",
          name: "How often should I update my family emergency plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You should review and update your family emergency plan at least twice per year — once in spring and once in fall. Additionally, update it whenever there is a major life change such as a new family member, a move, a change in medical conditions, or new emergency contact information.",
          },
        },
        {
          "@type": "Question",
          name: "Why do I need a family emergency plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "During an emergency, stress and panic make it nearly impossible to think clearly. A pre-made plan ensures every family member knows exactly what to do, where to go, and who to contact. FEMA and the Red Cross both recommend that every household maintain a written emergency plan. With the Doomsday Clock at 85 seconds to midnight, preparedness has never been more important.",
          },
        },
        {
          "@type": "Question",
          name: "Can I customize the template for my family's specific needs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. The template is fully editable. Every field is designed to be filled in with your family's specific information — your contacts, your evacuation routes, your medical details, and your local emergency numbers. The scenario action plans can also be adapted to threats most relevant to your geographic area.",
          },
        },
      ],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-blog-schema", "family-emergency-plan");
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.setAttribute("data-blog-schema", "family-emergency-plan-faq");
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      const el = document.querySelector(
        'script[data-blog-schema="family-emergency-plan"]'
      );
      if (el) el.remove();
      const faqEl = document.querySelector(
        'script[data-blog-schema="family-emergency-plan-faq"]'
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
          <Link
            to="/store"
            className="hover:text-foreground transition-colors"
          >
            Store
          </Link>
          <span>/</span>
          <span className="text-foreground">Family Emergency Plan Template</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12 space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium">
            <Download className="w-3.5 h-3.5" />
            Digital Template &mdash; Instant Download
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            <span className="text-doom">Family Emergency Plan</span> Template
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Editable emergency action plan for your family. Includes contact
            sheets, meeting points, supply inventory, go-bag checklists, and
            step-by-step protocols.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <FileText className="w-4 h-4" /> 6 Sections
            </span>
            <span className="flex items-center gap-1.5">
              <ClipboardList className="w-4 h-4" /> Printable Worksheets
            </span>
            <span className="flex items-center gap-1.5">
              <CheckSquare className="w-4 h-4" /> Fillable Fields
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-doom text-white font-bold text-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
            >
              Buy Now on Gumroad &mdash; $4.99
              <ExternalLink className="w-4 h-4" />
            </a>
            <span className="text-muted-foreground text-sm">
              Instant PDF download. No subscription.
            </span>
          </div>
        </header>

        {/* Table of Contents */}
        <section className="doom-card p-6 sm:p-8 mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-doom" />
            What&rsquo;s Inside
          </h2>
          <ol className="space-y-3 text-muted-foreground">
            {[
              {
                icon: Phone,
                label: "Emergency Contacts & Communication Plan",
                anchor: "#contacts",
              },
              {
                icon: MapPin,
                label: "Meeting Points & Evacuation Routes",
                anchor: "#meeting-points",
              },
              {
                icon: Package,
                label: "Supply Inventory & Go-Bag Checklist",
                anchor: "#supplies",
              },
              {
                icon: Heart,
                label: "Medical Information & Special Needs",
                anchor: "#medical",
              },
              {
                icon: FolderLock,
                label: "Important Documents Checklist",
                anchor: "#documents",
              },
              {
                icon: AlertTriangle,
                label: "Scenario-Specific Action Plans",
                anchor: "#scenarios",
              },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.anchor}
                  className="flex items-center gap-3 hover:text-foreground transition-colors group"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-doom/10 text-doom text-sm font-bold shrink-0">
                    {i + 1}
                  </span>
                  <item.icon className="w-4 h-4 shrink-0 text-doom/60 group-hover:text-doom transition-colors" />
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* ================================================================ */}
        {/* SECTION 1: Emergency Contacts & Communication Plan                */}
        {/* ================================================================ */}
        <section id="contacts" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/10 text-doom font-bold text-lg">
              1
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Emergency Contacts & Communication Plan
            </h2>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            During a crisis, local phone lines jam within minutes. Having an
            out-of-state contact is critical because long-distance calls often
            route through different networks. Fill in every row below and keep a
            printed copy in your go-bag, at work, and at home.
          </p>

          {/* Out-of-state contact */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Users className="w-4 h-4 text-doom" />
              Out-of-State Contact (Primary Rally Point for Information)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Choose someone who lives at least 200 miles away. All family
              members call this person to check in. They act as a central hub
              when local communication fails.
            </p>
            <FillableField
              rows={[
                ["Name", ""],
                ["Relationship", ""],
                ["Phone (Mobile)", ""],
                ["Phone (Landline)", ""],
                ["Address", ""],
                ["Email", ""],
                ["Alternate contact method", ""],
              ]}
            />
          </div>

          {/* Communication tree */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-3">Communication Tree</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Define the order: who calls whom. Person A calls B and C. B calls
              D. This prevents everyone dialing the same number at once.
            </p>
            <FillableField
              rows={[
                ["Person 1 (caller)", "Calls:"],
                ["Person 2 (caller)", "Calls:"],
                ["Person 3 (caller)", "Calls:"],
                ["Person 4 (caller)", "Calls:"],
              ]}
            />
          </div>

          {/* Primary contact table */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-3">
              Family & Household Contacts
            </h3>
            <ContactTable
              rows={[
                "Family Member 1",
                "Family Member 2",
                "Family Member 3",
                "Family Member 4",
                "Family Member 5",
              ]}
            />
          </div>

          {/* Neighbor network */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-3">Neighbor Contact Network</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Neighbors are your first responders. Exchange info with at least 3
              nearby households.
            </p>
            <ContactTable
              rows={[
                "Neighbor 1 (nearest)",
                "Neighbor 2",
                "Neighbor 3",
              ]}
            />
          </div>

          {/* Key numbers */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-3">
              Essential Numbers Beyond 911
            </h3>
            <FillableField
              rows={[
                ["Local police (non-emergency)", ""],
                ["Fire department (non-emergency)", ""],
                ["Poison control", "(800) 222-1222"],
                ["Nearest hospital ER", ""],
                ["School / daycare", ""],
                ["Workplace 1", ""],
                ["Workplace 2", ""],
                ["Electric company emergency", ""],
                ["Gas company emergency", ""],
                ["Water utility emergency", ""],
                ["Homeowner/renter insurance", "Policy #:"],
                ["Auto insurance", "Policy #:"],
                ["Health insurance", "Policy #:"],
                ["Veterinarian / pet ER", ""],
              ]}
            />
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 2: Meeting Points & Evacuation Routes                     */}
        {/* ================================================================ */}
        <section id="meeting-points" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/10 text-doom font-bold text-lg">
              2
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Meeting Points & Evacuation Routes
            </h2>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Every family member must know three meeting points by heart. Practice
            driving or walking each evacuation route at least once. If you
            cannot reach one point, proceed to the next in order.
          </p>

          <div className="grid gap-6 md:grid-cols-3 mb-6">
            {[
              {
                title: "Primary Meeting Point",
                subtitle: "Near Home (walking distance)",
                hint: "Example: front yard mailbox, specific street corner, community park entrance",
              },
              {
                title: "Secondary Meeting Point",
                subtitle: "Outside Neighborhood",
                hint: "Example: library parking lot, specific church, friend's house 2+ miles away",
              },
              {
                title: "Tertiary Meeting Point",
                subtitle: "Outside City / Region",
                hint: "Example: relative's home in neighboring state, specific rest stop on highway",
              },
            ].map((point, i) => (
              <div key={i} className="glass-card p-5 border-dashed border-2 border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-doom" />
                  <h3 className="font-semibold">{point.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-3">
                  {point.subtitle}
                </p>
                <div className="space-y-2">
                  <FillableRow label="Location name" />
                  <FillableRow label="Address" />
                  <FillableRow label="Landmarks / how to find" />
                  <FillableRow label="GPS coordinates" />
                </div>
                <p className="text-xs text-muted-foreground/60 mt-3 italic">
                  {point.hint}
                </p>
              </div>
            ))}
          </div>

          {/* Evacuation routes */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Navigation className="w-4 h-4 text-doom" />
              Evacuation Routes (define 3 different routes)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Plan routes that avoid common bottlenecks (bridges, tunnels, major
              highway on-ramps). Print paper maps — GPS may not work.
            </p>
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="glass-card p-4 border-dashed border-2 border-white/10 mb-4 last:mb-0"
              >
                <h4 className="font-medium mb-2 text-doom">Route {n}</h4>
                <FillableField
                  rows={[
                    ["Starting point", ""],
                    ["Key roads / highways", ""],
                    ["Destination", ""],
                    ["Estimated drive time (normal)", ""],
                    ["Estimated drive time (heavy traffic)", ""],
                    ["Fuel stops along route", ""],
                    ["Alternate detour if blocked", ""],
                  ]}
                />
              </div>
            ))}
          </div>

          {/* Rally point procedures */}
          <div className="doom-accent-card p-5">
            <h3 className="font-semibold text-lg mb-3">
              Rally Point Procedures
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm leading-relaxed">
              <li>
                If you arrive at a meeting point and no one is there, wait{" "}
                <strong className="text-foreground">30 minutes</strong> before
                moving to the next point.
              </li>
              <li>
                Leave a physical note at each meeting point indicating your
                departure time and next destination.
              </li>
              <li>
                Use the agreed-upon marking system (chalk arrow, ribbon on tree,
                etc.) to signal direction of travel.
              </li>
              <li>
                Always approach meeting points from the pre-agreed direction so
                other members know where to look.
              </li>
              <li>
                If separated for more than 24 hours, check in with the
                out-of-state contact every 6 hours.
              </li>
            </ul>
            <div className="glass-card p-4 border-dashed border-2 border-white/10 mt-4">
              <FillableField
                rows={[
                  ["Our marking system", ""],
                  ["Code word (all clear)", ""],
                  ["Code word (under duress)", ""],
                ]}
              />
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 3: Supply Inventory & Go-Bag Checklist                    */}
        {/* ================================================================ */}
        <section id="supplies" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/10 text-doom font-bold text-lg">
              3
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Supply Inventory & Go-Bag Checklist
            </h2>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            A 72-hour go-bag keeps your family self-sufficient for the critical
            first three days of any emergency. Check off each item as you pack
            it, and note the expiration or replacement date.
          </p>

          {/* 72-hour go-bag */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Package className="w-4 h-4 text-doom" />
              72-Hour Go-Bag Checklist
            </h3>

            <ChecklistCategory
              title="Water"
              items={[
                "1 gallon per person per day x 3 days",
                "Water purification tablets or filter",
                "Collapsible water container",
              ]}
            />
            <ChecklistCategory
              title="Food (non-perishable, 3 days)"
              items={[
                "Energy bars / granola bars (12+)",
                "Freeze-dried meals (6+)",
                "Canned food with pull-tab lids",
                "Peanut butter / nut butter packets",
                "Dried fruit and nuts",
                "Electrolyte powder packets",
                "Manual can opener",
                "Eating utensils, plate, cup",
              ]}
            />
            <ChecklistCategory
              title="First Aid Kit"
              items={[
                "Adhesive bandages (assorted sizes)",
                "Sterile gauze pads and medical tape",
                "Elastic bandage / ACE wrap",
                "Antiseptic wipes and antibiotic ointment",
                "Tweezers, scissors, safety pins",
                "Pain relievers (ibuprofen, acetaminophen)",
                "Anti-diarrheal medication",
                "Antihistamines (Benadryl)",
                "Prescription medications (7-day supply)",
                "CPR face shield",
                "Tourniquet",
                "Burn cream",
                "Eye wash solution",
              ]}
            />
            <ChecklistCategory
              title="Clothing & Shelter"
              items={[
                "Change of clothes per person (weather-appropriate)",
                "Sturdy shoes / boots",
                "Rain poncho or waterproof jacket",
                "Emergency mylar blankets (2 per person)",
                "Lightweight tarp or emergency tent",
                "Sleeping bag or bivvy sack",
                "Work gloves",
                "Warm hat and sun hat",
              ]}
            />
            <ChecklistCategory
              title="Tools & Supplies"
              items={[
                "Flashlight + extra batteries (or hand-crank)",
                "Multi-tool or Swiss Army knife",
                "Duct tape (small roll)",
                "Paracord (50 ft)",
                "Lighter + waterproof matches",
                "N95 / KN95 masks (10+)",
                "Plastic sheeting (for shelter-in-place seal)",
                "Garbage bags (heavy duty, 3+)",
                "Whistle (for signaling)",
                "Compass",
                "Sewing kit",
              ]}
            />
            <ChecklistCategory
              title="Documents (copies)"
              items={[
                "IDs and passports (photocopies)",
                "Insurance cards",
                "Emergency contact list (this plan!)",
                "Cash in small bills ($200+)",
                "Local area map (paper)",
                "USB drive with digital copies of critical docs",
              ]}
            />
            <ChecklistCategory
              title="Communication Devices"
              items={[
                "Fully charged cell phone + charger",
                "Portable battery bank (10,000+ mAh)",
                "Hand-crank or solar emergency radio (AM/FM/NOAA)",
                "Two-way radios / walkie-talkies (if family has them)",
                "Notepad and pen/pencil",
              ]}
            />
            <ChecklistCategory
              title="Personal Items"
              items={[
                "Prescription glasses / contacts (spare)",
                "Sanitation supplies (toilet paper, hand sanitizer, wipes)",
                "Feminine hygiene products",
                "Toothbrush and toothpaste",
                "Sunscreen and insect repellent",
                "Entertainment for children (small toy, cards, book)",
                "Pet supplies if applicable (see Section 4)",
              ]}
            />
          </div>

          {/* Home shelter-in-place supplies */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-4">
              Home Shelter-in-Place Supply List
            </h3>
            <ChecklistCategory
              title="Essentials (14-day minimum)"
              items={[
                "Water: 1 gallon per person per day x 14 days",
                "Non-perishable food for 14 days",
                "Manual can opener (backup)",
                "Plastic sheeting and duct tape (to seal windows/doors)",
                "Battery-powered or hand-crank radio",
                "Flashlights and lanterns with extra batteries",
                "Full first aid kit",
                "Fire extinguisher",
                "Wrench or pliers (to turn off gas/water)",
                "Whistle",
                "Garbage bags and ties",
                "5-gallon bucket with lid + heavy-duty bags (sanitation)",
                "Bleach (unscented, for water purification — 8 drops/gallon)",
                "Board games, books, cards (morale is survival)",
              ]}
            />
          </div>

          {/* Vehicle emergency kit */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-4">Vehicle Emergency Kit</h3>
            <ChecklistCategory
              title="Keep in car at all times"
              items={[
                "Jumper cables or portable jump starter",
                "Tire repair kit and portable air compressor",
                "Reflective warning triangles or flares",
                "Basic tool kit (screwdrivers, pliers, wrench)",
                "Tow strap",
                "Blanket",
                "Bottled water (3 liters)",
                "Energy bars",
                "Small first aid kit",
                "Flashlight",
                "Phone charger (car adapter)",
                "Paper maps of your state and neighboring states",
                "Ice scraper / window breaker tool",
              ]}
            />
          </div>

          {/* Rotation schedule */}
          <div className="doom-accent-card p-5">
            <h3 className="font-semibold text-lg mb-3">
              Supply Rotation Schedule
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Track expiration dates. Replace items before they expire. Check
              your kits every 6 months (set a calendar reminder for April and
              October).
            </p>
            <div className="glass-card p-4 border-dashed border-2 border-white/10">
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-muted-foreground mb-2">
                <span>Item</span>
                <span>Expiration Date</span>
                <span>Replaced On</span>
              </div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <div
                  key={n}
                  className="grid grid-cols-3 gap-2 py-2 border-t border-dashed border-white/10"
                >
                  <div className="h-5 border-b border-dashed border-white/20" />
                  <div className="h-5 border-b border-dashed border-white/20" />
                  <div className="h-5 border-b border-dashed border-white/20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 4: Medical Information & Special Needs                     */}
        {/* ================================================================ */}
        <section id="medical" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/10 text-doom font-bold text-lg">
              4
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Medical Information & Special Needs
            </h2>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            In an emergency, first responders and family members need immediate
            access to medical information. Complete one card per family member
            and keep copies in every go-bag.
          </p>

          {/* Per-member medical cards */}
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="glass-card p-5 border-dashed border-2 border-white/10 mb-6"
            >
              <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <Heart className="w-4 h-4 text-doom" />
                Family Member {n} &mdash; Medical Card
              </h3>
              <FillableField
                rows={[
                  ["Full name", ""],
                  ["Date of birth", ""],
                  ["Blood type", ""],
                  ["Allergies (drugs, food, environmental)", ""],
                  ["Current medications & dosages", ""],
                  ["Medical conditions", ""],
                  ["Special equipment needed", ""],
                  ["Primary care doctor", ""],
                  ["Doctor phone", ""],
                  ["Pharmacy name & phone", ""],
                  ["Health insurance provider", ""],
                  ["Policy / Member ID", ""],
                  ["Preferred hospital", ""],
                ]}
              />
            </div>
          ))}

          {/* Pet emergency plan */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-3">
              Pet / Animal Emergency Plan
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Many shelters do not accept animals. Plan ahead for pet care
              during evacuations.
            </p>
            <FillableField
              rows={[
                ["Pet name, species, breed", ""],
                ["Microchip ID #", ""],
                ["Veterinarian name & phone", ""],
                ["Medications / special diet", ""],
                ["Pet-friendly shelter or boarding facility", ""],
                ["Trusted person who can take your pet", ""],
                ["Carrier/crate location in home", ""],
              ]}
            />
            <div className="mt-3 text-sm text-muted-foreground">
              <strong className="text-foreground">Go-bag additions for pets:</strong>{" "}
              3 days of food & water, medication, leash/harness, waste bags,
              vaccination records, recent photo, comfort item.
            </div>
          </div>

          {/* Elderly / disabled considerations */}
          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-3">
              Elderly / Disabled Family Member Considerations
            </h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm leading-relaxed">
              <li>
                Store backup power supplies for medical equipment (oxygen
                concentrators, CPAP, electric wheelchairs).
              </li>
              <li>
                Pre-register with your local utility company for priority
                restoration if someone is electricity-dependent.
              </li>
              <li>
                Identify at least 2 people who can assist with physical
                evacuation if needed.
              </li>
              <li>
                Keep mobility aids (walker, wheelchair, cane) accessible and
                near exits.
              </li>
              <li>
                Have written instructions for any specialized medical equipment
                so helpers can operate it.
              </li>
            </ul>
            <div className="glass-card p-4 border-dashed border-2 border-white/10 mt-4">
              <FillableField
                rows={[
                  ["Person needing special assistance", ""],
                  ["Specific needs / equipment", ""],
                  ["Helper 1 (name & phone)", ""],
                  ["Helper 2 (name & phone)", ""],
                  ["Power backup plan", ""],
                ]}
              />
            </div>
          </div>

          {/* Medication rotation */}
          <div className="doom-accent-card p-5">
            <h3 className="font-semibold text-lg mb-3">
              Medication Stockpile Rotation Guide
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Maintain a 30-day backup of all essential medications. Use the
              &ldquo;first in, first out&rdquo; method: use the oldest stock
              first and replace with new prescriptions.
            </p>
            <div className="glass-card p-4 border-dashed border-2 border-white/10">
              <div className="grid grid-cols-4 gap-2 text-xs font-semibold text-muted-foreground mb-2">
                <span>Medication</span>
                <span>Dosage</span>
                <span>Quantity</span>
                <span>Expiration</span>
              </div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div
                  key={n}
                  className="grid grid-cols-4 gap-2 py-2 border-t border-dashed border-white/10"
                >
                  <div className="h-5 border-b border-dashed border-white/20" />
                  <div className="h-5 border-b border-dashed border-white/20" />
                  <div className="h-5 border-b border-dashed border-white/20" />
                  <div className="h-5 border-b border-dashed border-white/20" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 5: Important Documents Checklist                          */}
        {/* ================================================================ */}
        <section id="documents" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/10 text-doom font-bold text-lg">
              5
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Important Documents Checklist
            </h2>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            After a disaster, replacing lost documents is one of the biggest
            headaches families face. Store physical copies in a waterproof,
            fireproof container and digital copies in encrypted cloud storage.
            Give a third copy to a trusted out-of-state contact.
          </p>

          <div className="doom-accent-card p-5 mb-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <FolderLock className="w-4 h-4 text-doom" />
              Documents to Copy (Physical + Digital)
            </h3>
            <ChecklistCategory
              title="Identification"
              items={[
                "Driver's licenses / state IDs (all family members)",
                "Passports",
                "Birth certificates",
                "Social Security cards",
                "Marriage certificate",
                "Adoption / custody papers",
                "Immigration / naturalization documents",
                "Military discharge papers (DD-214)",
              ]}
            />
            <ChecklistCategory
              title="Financial & Insurance"
              items={[
                "Homeowner's / renter's insurance policy",
                "Auto insurance policy",
                "Health insurance cards and policy",
                "Life insurance policies",
                "Bank account numbers and institution contact info",
                "Credit card numbers and company phone numbers",
                "Investment account information",
                "Recent tax returns (2 years)",
                "Property deed or lease agreement",
                "Vehicle titles and registration",
              ]}
            />
            <ChecklistCategory
              title="Medical"
              items={[
                "Immunization records (especially children)",
                "Prescription lists with dosages",
                "Medical history summaries",
                "Health insurance explanation of benefits",
                "Advance directive / living will",
                "Power of attorney (medical)",
              ]}
            />
            <ChecklistCategory
              title="Legal"
              items={[
                "Wills and trusts",
                "Power of attorney (financial)",
                "Guardianship documents",
                "Divorce decrees / custody agreements",
                "Business ownership documents",
              ]}
            />
          </div>

          {/* Storage locations */}
          <div className="doom-accent-card p-5">
            <h3 className="font-semibold text-lg mb-3">
              Where to Store Your Copies
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "At Home",
                  desc: "Fireproof, waterproof safe or lock box. Note the location below.",
                },
                {
                  title: "Digital / Cloud",
                  desc: "Encrypted USB drive in go-bag + encrypted cloud backup (e.g., Bitwarden, 1Password, or VeraCrypt volume).",
                },
                {
                  title: "Trusted Contact",
                  desc: "Give a sealed envelope of copies to your out-of-state contact person.",
                },
              ].map((loc, i) => (
                <div
                  key={i}
                  className="glass-card p-4 border-dashed border-2 border-white/10"
                >
                  <h4 className="font-medium text-doom mb-1">{loc.title}</h4>
                  <p className="text-xs text-muted-foreground mb-3">
                    {loc.desc}
                  </p>
                  <FillableRow label="Location / details" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 6: Scenario-Specific Action Plans                         */}
        {/* ================================================================ */}
        <section id="scenarios" className="mb-14 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-doom/10 text-doom font-bold text-lg">
              6
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Scenario-Specific Action Plans
            </h2>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            Different emergencies require different responses. Each plan below
            follows a four-phase framework:{" "}
            <strong className="text-foreground">Trigger</strong> (how you know
            it&rsquo;s happening),{" "}
            <strong className="text-foreground">Immediate Action</strong> (first
            0-60 minutes),{" "}
            <strong className="text-foreground">24-Hour Plan</strong>, and{" "}
            <strong className="text-foreground">72-Hour Plan</strong>.
          </p>

          {/* Nuclear Emergency */}
          <ScenarioCard
            title="Nuclear Emergency (Detonation or Fallout Warning)"
            icon={AlertTriangle}
            trigger="Emergency Alert System (EAS) warning, bright flash, mushroom cloud visible, or official shelter-in-place order."
            immediate={[
              "GET INSIDE the nearest solid building immediately. Basement is best. Interior rooms without windows.",
              "DO NOT look at the flash — it can cause permanent blindness.",
              "If outdoors and exposed, remove outer clothing and bag it. Shower or wipe down exposed skin.",
              "Seal all windows and doors with plastic sheeting and duct tape.",
              "Turn off HVAC systems to prevent drawing in contaminated air.",
              "Turn on battery-powered radio to NOAA Weather Radio or AM station for official updates.",
            ]}
            day1={[
              "Stay inside for at least 24 hours unless authorities say otherwise. Fallout is most dangerous in the first 24h.",
              "Ration water: 1/2 gallon per person per day minimum.",
              "Monitor radio for decontamination instructions and evacuation corridors.",
              "Take potassium iodide (KI) ONLY if instructed by authorities and the threat involves radioactive iodine.",
              "Cover food and water containers to prevent contamination.",
            ]}
            day3={[
              "If no evacuation order, continue sheltering. Fallout radiation decreases rapidly (7-10 rule: for every 7x increase in time, radiation drops 10x).",
              "If evacuating, follow official routes only. Cover skin completely.",
              "Move to secondary or tertiary meeting point if home is in fallout zone.",
              "Contact out-of-state contact to report status.",
              "Begin inventory of supplies and ration accordingly.",
            ]}
          />

          {/* Natural Disaster */}
          <ScenarioCard
            title="Natural Disaster (Earthquake, Hurricane, Tornado)"
            icon={AlertTriangle}
            trigger="Weather service warnings, ground shaking, tornado sirens, or hurricane watch/warning issued."
            immediate={[
              "EARTHQUAKE: Drop, Cover, Hold On. Get under sturdy furniture. Stay away from windows. If outside, move to an open area away from buildings.",
              "TORNADO: Move to basement or interior room on lowest floor. Get under heavy furniture. Cover yourself with a mattress or heavy blankets.",
              "HURRICANE: If not evacuated, move to interior room away from windows. Fill bathtubs with water for sanitation use.",
              "After shaking/storm stops, check for injuries. Provide first aid.",
              "Check for gas leaks (smell, hissing). If detected, leave building immediately and shut off gas at meter if safe.",
              "Put on sturdy shoes to protect against debris.",
            ]}
            day1={[
              "Assess structural damage to home. Do NOT enter if it appears unstable.",
              "Photograph all damage for insurance claims.",
              "Check on neighbors, especially elderly and disabled.",
              "If utilities are disrupted, switch to stored water and food supplies.",
              "Monitor emergency radio for updates on shelter locations and relief operations.",
            ]}
            day3={[
              "Contact insurance company to begin claims process.",
              "If home is uninhabitable, proceed to meeting points or official shelters.",
              "Continue monitoring official channels for boil-water advisories and road closures.",
              "Begin cleanup only when authorities confirm area is safe.",
              "Document everything (photos, receipts) for FEMA/insurance.",
            ]}
          />

          {/* Power Grid Failure */}
          <ScenarioCard
            title="Power Grid Failure (Extended Outage)"
            icon={AlertTriangle}
            trigger="Power out for more than 4 hours with no estimated restoration time. Reports of widespread outage affecting your region."
            immediate={[
              "Unplug sensitive electronics to prevent surge damage when power returns.",
              "Check on battery and fuel levels for backup power (generator, solar, battery bank).",
              "Open refrigerator/freezer as little as possible. A full freezer holds temperature for ~48 hours.",
              "Gather flashlights, candles (use with caution), and lanterns.",
              "Charge all phones and devices immediately if you have a generator or car charger.",
              "Fill bathtubs and large containers with water (water treatment plants may lose pressure).",
            ]}
            day1={[
              "Use perishable food first before it spoils.",
              "If water pressure drops, switch to stored water.",
              "Check on neighbors. Pool resources if needed.",
              "If using a generator, operate OUTDOORS ONLY — carbon monoxide is lethal.",
              "Conserve phone battery. Limit use to essential communication.",
              "Keep car fuel tanks above 3/4 full (gas stations need electricity for pumps).",
            ]}
            day3={[
              "If power is still out, consider relocating to a family member/friend with power or an official shelter.",
              "Discard refrigerated food that has been above 40 degrees F for more than 2 hours.",
              "Begin using shelf-stable food supplies.",
              "Monitor official channels for restoration estimates.",
              "If winter: consolidate family into one room, seal it, use body heat and blankets. NEVER use a gas stove for heating.",
            ]}
          />

          {/* Chemical/Biological Threat */}
          <ScenarioCard
            title="Chemical / Biological Threat"
            icon={AlertTriangle}
            trigger="Official emergency alert, unusual smells or clouds, multiple people showing sudden illness symptoms, or official HAZMAT warning."
            immediate={[
              "Move UPWIND, UPHILL, and UPSTREAM from the suspected source.",
              "If sheltering in place: seal all doors, windows, and vents with plastic sheeting and duct tape.",
              "Turn off all ventilation systems, fans, and air conditioning.",
              "If exposed: remove clothing, place in plastic bag, and shower with soap and water for at least 15 minutes.",
              "Cover mouth and nose with wet cloth or N95 mask.",
              "Do NOT eat or drink anything that may have been exposed.",
            ]}
            day1={[
              "Monitor official channels for decontamination instructions and identified agent.",
              "Maintain shelter seal. Do not open windows until authorities confirm all clear.",
              "If symptoms develop, call 911 or poison control. Do not drive yourself to the hospital if symptomatic.",
              "Take inventory of sealed food and water.",
              "Minimize water use — conserve sealed containers.",
            ]}
            day3={[
              "Continue sheltering until all-clear is given by official authorities.",
              "If evacuating, follow ONLY official routes to avoid contaminated areas.",
              "Seek medical screening even if asymptomatic — some agents have delayed effects.",
              "Dispose of exposed clothing and items per official guidance.",
              "Document exposure timeline for medical records.",
            ]}
          />

          {/* Civil Unrest / Evacuation Order */}
          <ScenarioCard
            title="Civil Unrest / Mandatory Evacuation Order"
            icon={AlertTriangle}
            trigger="Government-issued evacuation order, escalating unrest in your area, or direct threat to your neighborhood."
            immediate={[
              "Grab go-bags. You should be able to leave in under 10 minutes.",
              "Lock and secure home. Shut off gas and water at the main valves.",
              "Follow pre-planned evacuation route. If Route 1 is blocked, switch to Route 2.",
              "Keep car windows up and doors locked while driving.",
              "Avoid crowds and conflict areas. Do not stop for curiosity.",
              "Contact out-of-state contact to report your departure and destination.",
            ]}
            day1={[
              "Arrive at pre-designated meeting point or official evacuation shelter.",
              "Check in with all family members using the communication tree.",
              "Keep a low profile. Avoid sharing your plans or supply levels with strangers.",
              "Ration supplies carefully — you don't know how long displacement will last.",
              "Monitor news and official channels for return authorization.",
            ]}
            day3={[
              "If still displaced, contact insurance and employer to report situation.",
              "Register with Red Cross Safe and Well (safeandwell.communityos.org) so family can find you.",
              "Continue monitoring for return authorization.",
              "Begin planning for extended displacement if situation is not resolved (temporary housing, school enrollment for children).",
              "Maintain documentation of all expenses for potential FEMA reimbursement.",
            ]}
          />
        </section>

        {/* ================================================================ */}
        {/* PURCHASE CTA                                                      */}
        {/* ================================================================ */}
        <section className="doom-card p-8 sm:p-10 mb-14 text-center">
          <ShieldCheck className="w-12 h-12 text-doom mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Get the Complete Template
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6 leading-relaxed">
            Download the full Family Emergency Plan as a beautifully formatted,
            printable PDF with fillable fields. Print it, fill it in, and store
            it where your family can find it when it matters most.
          </p>
          <div className="flex flex-col items-center gap-3">
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-doom text-white font-bold text-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-500/20"
            >
              Buy Now &mdash; $4.99
              <ExternalLink className="w-5 h-5" />
            </a>
            <span className="text-sm text-muted-foreground">
              Instant PDF download via Gumroad. No subscription required.
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <Link
              to="/store"
              className="hover:text-foreground transition-colors underline underline-offset-4"
            >
              Browse all products
            </Link>
            <Link
              to="/vault/emergency-binder"
              className="hover:text-foreground transition-colors underline underline-offset-4"
            >
              Free Emergency Binder Tool
            </Link>
            <Link
              to="/vault/supply-calculator"
              className="hover:text-foreground transition-colors underline underline-offset-4"
            >
              Supply Calculator
            </Link>
          </div>
        </section>

        {/* ================================================================ */}
        {/* FAQ                                                               */}
        {/* ================================================================ */}
        <section className="mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FaqItem
              question="What is included in the Family Emergency Plan Template?"
              answer="The template includes 6 comprehensive sections: Emergency Contacts & Communication Plan, Meeting Points & Evacuation Routes, Supply Inventory & Go-Bag Checklist, Medical Information & Special Needs, Important Documents Checklist, and Scenario-Specific Action Plans covering nuclear emergencies, natural disasters, power grid failures, chemical/biological threats, and civil unrest."
            />
            <FaqItem
              question="Is the family emergency plan template printable?"
              answer="Yes. The template is designed to be printed, filled in by hand, and stored in a binder or go-bag. You can also fill in the digital version on your device before printing. All sections use clear formatting with fillable fields, checkboxes, and organized tables."
            />
            <FaqItem
              question="How often should I update my family emergency plan?"
              answer="You should review and update your family emergency plan at least twice per year — once in spring and once in fall. Additionally, update it whenever there is a major life change such as a new family member, a move, a change in medical conditions, or new emergency contact information."
            />
            <FaqItem
              question="Why do I need a family emergency plan?"
              answer="During an emergency, stress and panic make it nearly impossible to think clearly. A pre-made plan ensures every family member knows exactly what to do, where to go, and who to contact. FEMA and the Red Cross both recommend that every household maintain a written emergency plan. With the Doomsday Clock at 85 seconds to midnight, preparedness has never been more important."
            />
            <FaqItem
              question="Can I customize the template for my family's specific needs?"
              answer="Absolutely. The template is fully editable. Every field is designed to be filled in with your family's specific information — your contacts, your evacuation routes, your medical details, and your local emergency numbers. The scenario action plans can also be adapted to threats most relevant to your geographic area."
            />
          </div>
        </section>

        {/* Back to store */}
        <div className="flex justify-center">
          <Link
            to="/store"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            &larr; Back to Store
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ===================================================================== */
/* Reusable sub-components                                                */
/* ===================================================================== */

function FillableField({
  rows,
}: {
  rows: [string, string][];
}) {
  return (
    <div className="space-y-2">
      {rows.map(([label, placeholder], i) => (
        <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <span className="text-sm font-medium text-muted-foreground w-full sm:w-56 shrink-0">
            {label}
          </span>
          <div className="flex-1 h-8 border-b-2 border-dashed border-white/15 flex items-end pb-1">
            {placeholder && (
              <span className="text-xs text-muted-foreground/50 italic">
                {placeholder}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function FillableRow({ label }: { label: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
      <span className="text-sm font-medium text-muted-foreground w-full sm:w-44 shrink-0">
        {label}
      </span>
      <div className="flex-1 h-8 border-b-2 border-dashed border-white/15" />
    </div>
  );
}

function ContactTable({ rows }: { rows: string[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-muted-foreground text-xs">
            <th className="text-left py-2 pr-2 font-semibold">Name / Role</th>
            <th className="text-left py-2 pr-2 font-semibold">Phone</th>
            <th className="text-left py-2 pr-2 font-semibold hidden sm:table-cell">
              Address
            </th>
            <th className="text-left py-2 font-semibold hidden md:table-cell">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((role, i) => (
            <tr key={i} className="border-t border-dashed border-white/10">
              <td className="py-2.5 pr-2 text-muted-foreground/50 italic text-xs">
                {role}
              </td>
              <td className="py-2.5 pr-2">
                <div className="h-5 border-b border-dashed border-white/20" />
              </td>
              <td className="py-2.5 pr-2 hidden sm:table-cell">
                <div className="h-5 border-b border-dashed border-white/20" />
              </td>
              <td className="py-2.5 hidden md:table-cell">
                <div className="h-5 border-b border-dashed border-white/20" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ChecklistCategory({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="mb-5 last:mb-0">
      <h4 className="font-medium text-sm text-doom mb-2">{title}</h4>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
            <div className="w-4 h-4 mt-0.5 shrink-0 border border-white/20 rounded-sm" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ScenarioCard({
  title,
  icon: Icon,
  trigger,
  immediate,
  day1,
  day3,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  trigger: string;
  immediate: string[];
  day1: string[];
  day3: string[];
}) {
  return (
    <div className="doom-accent-card p-5 sm:p-6 mb-6">
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Icon className="w-5 h-5 text-doom" />
        {title}
      </h3>

      <div className="space-y-5">
        {/* Trigger */}
        <div>
          <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-red-500/20 text-red-400 mb-2">
            TRIGGER
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {trigger}
          </p>
        </div>

        {/* Immediate Action */}
        <div>
          <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-orange-500/20 text-orange-400 mb-2">
            IMMEDIATE ACTION (0-60 min)
          </span>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
            {immediate.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>

        {/* 24-Hour Plan */}
        <div>
          <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-yellow-500/20 text-yellow-400 mb-2">
            24-HOUR PLAN
          </span>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
            {day1.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>

        {/* 72-Hour Plan */}
        <div>
          <span className="inline-block px-2 py-0.5 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 mb-2">
            72-HOUR PLAN
          </span>
          <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground leading-relaxed">
            {day3.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="doom-card p-5 group">
      <summary className="cursor-pointer font-semibold text-foreground flex items-center gap-2 list-none">
        <ChevronRight className="w-4 h-4 text-doom shrink-0 transition-transform group-open:rotate-90" />
        {question}
      </summary>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-6">
        {answer}
      </p>
    </details>
  );
}
