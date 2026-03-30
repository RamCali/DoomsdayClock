import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  Zap,
  Droplets,
  Radio,
  Compass,
  Users,
  Brain,
  Heart,
  BookOpen,
  Download,
  Check,
  ChevronDown,
  Star,
  AlertTriangle,
  Battery,
  Flame,
  Map,
} from "lucide-react";
import { cn } from "../../lib/utils";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const GUMROAD_URL = "https://doomsdayclock.gumroad.com/l/the-vault";

interface Module {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const modules: Module[] = [
  { id: 0, title: "15-Minute Family Briefing", description: "A calm, no-jargon walkthrough you can share with your household tonight. Covers what to do in the first moments of a crisis, assigns roles, and eliminates panic.", icon: Users },
  { id: 1, title: "First 72 Hours", description: "The golden window. Step-by-step actions for the first three days after grid failure, covering shelter-in-place decisions, go/no-go criteria, and immediate resource triage.", icon: Zap },
  { id: 2, title: "Water Procurement & Purification", description: "Seven field-tested methods for finding, filtering, and purifying water when municipal supply fails. Includes our interactive Water Purification Matrix tool.", icon: Droplets },
  { id: 3, title: "Field Medicine & Trauma", description: "Practical first aid when hospitals are unreachable. Wound care, infection prevention, improvised splints, medication alternatives, and triage protocols.", icon: Heart },
  { id: 4, title: "Communication When Grid Is Down", description: "HAM radio basics, mesh networking, signal mirrors, dead drops, and encrypted analog methods. Includes our Frequency Reference tool with pre-programmed channels.", icon: Radio },
  { id: 5, title: "Food Security — 90-Day Runway", description: "Calorie-dense stockpiling, preservation techniques, foraging basics, and our Supply Calculator to build a customized 90-day food plan for your household.", icon: Flame },
  { id: 6, title: "Power Generation & Energy Management", description: "Solar, hand-crank, vehicle alternator, and improvised battery systems. How to keep critical devices running when the grid is permanently down.", icon: Battery },
  { id: 7, title: "Shelter — Hardening, Heating & Cooling", description: "Fortify your existing home or build improvised shelter. Insulation without power, passive cooling, and structural reinforcement against threats.", icon: Shield },
  { id: 8, title: "Navigation Without GPS", description: "Map reading, celestial navigation, terrain association, and dead reckoning. Never be lost when satellites go dark.", icon: Compass },
  { id: 9, title: "Community Defense & Organization", description: "Building trusted networks, establishing watch rotations, conflict de-escalation, and organizing neighborhood-level mutual aid.", icon: Users },
  { id: 10, title: "The Barter Economy", description: "What becomes valuable when currency fails. Trade goods, negotiation frameworks, and establishing fair exchange in a post-cash world.", icon: BookOpen },
  { id: 11, title: "Psychological Resilience & Crisis Leadership", description: "Managing fear, decision fatigue, and group morale. Evidence-based techniques from military and disaster psychology.", icon: Brain },
  { id: 12, title: "Children, Elderly & Special Needs", description: "Specialized protocols for vulnerable family members. Medication management, comfort strategies, and age-appropriate crisis communication.", icon: Heart },
  { id: 13, title: "Digital Fortress — OpSec & Data", description: "Protecting sensitive information, offline encryption, secure communication, and digital hygiene when networks become hostile.", icon: Lock },
  { id: 14, title: "Full Crisis Walkthroughs (3 Scenarios)", description: "Three complete scenario simulations — nuclear exchange, grid-down cyberattack, and pandemic collapse — with hour-by-hour decision trees.", icon: AlertTriangle },
  { id: 15, title: "Printable Emergency Binder", description: "Everything distilled into a physical binder you print and store. Checklists, contact sheets, maps, medical records, and quick-reference cards.", icon: Download },
];

interface Tool {
  name: string;
  description: string;
  route: string;
  icon: React.ElementType;
}

const tools: Tool[] = [
  { name: "Supply Calculator", description: "Calculate exactly how much food, water, and supplies your household needs for 30, 60, or 90 days. Customized by family size and dietary needs.", route: "/vault/supply-calculator", icon: Zap },
  { name: "Water Purification Matrix", description: "Compare purification methods by cost, portability, effectiveness, and volume. Find the right system for your situation.", route: "/vault/water-purification", icon: Droplets },
  { name: "Frequency Reference", description: "Pre-programmed HAM, FRS, GMRS, and MURS frequencies organized by use case. Print-ready channel cards for your go-bag.", route: "/vault/frequency-reference", icon: Radio },
  { name: "Emergency Binder Generator", description: "Input your family's information and generate a customized printable emergency binder with contacts, medical info, and protocols.", route: "/vault/emergency-binder", icon: Download },
  { name: "Threat Assessment", description: "Evaluate your region's specific risk profile across 12 threat vectors. Get a personalized preparedness priority list.", route: "/vault/threat-assessment", icon: Shield },
];

interface Testimonial {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { quote: "I've spent years piecing together survival info from forums and YouTube. The Vault organized everything I needed into one system I can actually use under stress. The printable binder alone is worth the price.", name: "Mark T.", location: "Colorado", rating: 5 },
  { quote: "My wife was skeptical about prepping until I showed her Module 0. The 15-minute family briefing made it real without being terrifying. Now we're both on the same page.", name: "Sarah K.", location: "Virginia", rating: 5 },
  { quote: "Former military here. This is the civilian equivalent of an operations manual. The crisis walkthroughs are especially well done — realistic scenarios with practical decision trees.", name: "James R.", location: "Texas", rating: 5 },
  { quote: "The Supply Calculator saved me hundreds of dollars. I was over-buying in some categories and completely missing others. Now my 90-day supply is actually balanced.", name: "Linda M.", location: "Oregon", rating: 5 },
];

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { question: "What format is The Vault?", answer: "The Vault is delivered as a comprehensive digital package. You receive PDF guides for all 15 modules, interactive web-based tools, printable reference cards, and the Emergency Binder templates. Everything is designed to work offline once downloaded." },
  { question: "Do I need internet to use it?", answer: "No. That's the entire point. Once you download The Vault, every guide, checklist, and reference works completely offline. The interactive tools are also designed to function without connectivity. Print the Emergency Binder and you have a fully analog backup." },
  { question: "What are the annual updates?", answer: "The threat landscape changes constantly. Your purchase includes free updates for the first year, covering new threat assessments, updated frequency allocations, revised supply recommendations, and new scenario walkthroughs as global conditions evolve." },
  { question: "Is there a refund policy?", answer: "Yes. If The Vault doesn't meet your expectations, you have 30 days to request a full refund through Gumroad. No questions asked. We're confident in the value, which is why we make this easy." },
  { question: "Can I share it with my family?", answer: "Absolutely. One purchase covers your entire household. In fact, we encourage it — Module 0 is specifically designed to brief family members. Share the digital files and print binders for everyone in your household." },
];

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function CTAButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  return (
    <a
      href={GUMROAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg bg-doom px-8 py-4 text-lg font-bold text-white shadow-lg shadow-doom/30 transition-all duration-300 hover:bg-red-600 hover:shadow-xl hover:shadow-doom/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-doom focus:ring-offset-2 focus:ring-offset-zinc-900",
        className,
      )}
    >
      {children ?? (
        <>
          <Lock className="h-5 w-5" />
          Get The Vault — $99
        </>
      )}
    </a>
  );
}

function ModuleAccordion({ module }: { module: Module }) {
  const [open, setOpen] = useState(false);
  const Icon = module.icon;

  return (
    <div className="doom-card overflow-hidden rounded-lg border border-zinc-800 transition-colors hover:border-doom/40">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 px-5 py-4 text-left"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-doom/10 text-doom">
          <Icon className="h-5 w-5" />
        </span>
        <span className="flex-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-doom/80">Module {module.id}</span>
          <span className="block text-sm font-semibold text-white sm:text-base">{module.title}</span>
        </span>
        <ChevronDown className={cn("h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300", open && "rotate-180 text-doom")} />
      </button>
      <div className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-zinc-400">{module.description}</p>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  const Icon = tool.icon;
  return (
    <div className="glass-card group flex flex-col rounded-xl border border-zinc-800 p-6 transition-all duration-300 hover:border-atomic/40 hover:shadow-lg hover:shadow-atomic/10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-atomic/10 text-atomic transition-transform duration-300 group-hover:scale-110">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{tool.name}</h3>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">{tool.description}</p>
      <Link
        to={tool.route}
        className="inline-flex items-center gap-2 rounded-lg border border-atomic/30 px-4 py-2.5 text-sm font-semibold text-atomic transition-all duration-300 hover:bg-atomic/10 hover:border-atomic"
      >
        <Zap className="h-4 w-4" />
        Try Free Demo
      </Link>
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function VaultLanding() {
  useEffect(() => {
    document.title = "The Vault: Offline Knowledge System — Complete Survival Guide | Doomsday Clock";
    const meta = document.querySelector('meta[name="description"]');
    const content = "The Vault is a comprehensive offline survival knowledge system with 15 modules, 5 interactive tools, and printable emergency binders. Everything you need when the grid goes down. $99 one-time purchase.";
    if (meta) {
      meta.setAttribute("content", content);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = content;
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Breadcrumb */}
      <nav className="container-wide pt-4 pb-2" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-zinc-500">
          <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
          <li>/</li>
          <li><Link to="/store" className="transition-colors hover:text-white">Store</Link></li>
          <li>/</li>
          <li className="text-doom font-medium">The Vault</li>
        </ol>
      </nav>

      {/* ============================================================= */}
      {/*  HERO                                                          */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-doom/10 via-zinc-900 to-zinc-900" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-doom/5 blur-[120px]" />

        <div className="container-wide relative z-10 flex flex-col items-center py-20 text-center lg:py-28">
          {/* Urgency badge */}
          <div className="mb-6 inline-flex animate-pulse items-center gap-2 rounded-full border border-doom/40 bg-doom/10 px-4 py-1.5 text-sm font-semibold text-doom">
            <AlertTriangle className="h-4 w-4" />
            89 Seconds to Midnight — Are You Ready?
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            The Vault:{" "}
            <span className="bg-gradient-to-r from-doom to-red-400 bg-clip-text text-transparent">
              Offline Knowledge System
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            15 comprehensive modules. 5 interactive tools. 3 full crisis walkthroughs.
            Everything your family needs to survive when the grid goes down —{" "}
            <span className="font-semibold text-white">no internet required.</span>
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <CTAButton />
            <span className="text-sm text-zinc-500">One-time purchase &middot; Instant download &middot; Free updates for 1 year</span>
          </div>

          {/* Price badge */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-6 py-3 backdrop-blur">
            <span className="text-3xl font-extrabold text-white">$99</span>
            <span className="text-left text-sm leading-tight text-zinc-500">
              <span className="block">one-time payment</span>
              <span className="block text-zinc-600 line-through">$199 launch price</span>
            </span>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  PROBLEM / AGITATION                                           */}
      {/* ============================================================= */}
      <section className="relative border-y border-zinc-800 bg-zinc-950/50 py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              When the Grid Goes Down,{" "}
              <span className="text-doom">Everything You Know Disappears</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              In an instant, the systems you rely on every day become unavailable. No backup. No warning. No second chance.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, label: "No Internet", detail: "No Google, no YouTube tutorials, no online guides." },
              { icon: Map, label: "No GPS", detail: "No navigation, no location sharing, no maps." },
              { icon: Radio, label: "No Communication", detail: "No cell service, no messaging, no 911." },
              { icon: Heart, label: "No Medical Info", detail: "No WebMD, no dosage lookup, no emergency contacts." },
            ].map((item) => (
              <div key={item.label} className="doom-card rounded-xl border border-red-900/30 bg-red-950/20 p-6 text-center">
                <item.icon className="mx-auto mb-3 h-8 w-8 text-doom" />
                <h3 className="text-lg font-bold text-white">{item.label}</h3>
                <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-zinc-300">
            The Vault puts <span className="text-doom font-bold">critical survival knowledge</span> in your hands —
            printed, downloaded, and ready — <span className="text-white">before</span> you need it.
          </p>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  PRODUCT OVERVIEW                                              */}
      {/* ============================================================= */}
      <section className="py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Everything Inside <span className="text-doom">The Vault</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              A complete offline knowledge system built by researchers, reviewed by field experts, and designed for real people — not doomsday fantasists.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: BookOpen, value: "15", label: "Comprehensive Modules", detail: "From first-hour protocols to long-term resilience" },
              { icon: Zap, value: "5", label: "Interactive Tools", detail: "Calculators, matrices, and generators you can use today" },
              { icon: AlertTriangle, value: "3", label: "Crisis Walkthroughs", detail: "Full scenario simulations with decision trees" },
              { icon: Download, value: "200+", label: "Printable Pages", detail: "Emergency binder system ready to print and store" },
              { icon: BookOpen, value: "50+", label: "Reference Cards", detail: "Laminate-ready quick-reference for your go-bag" },
              { icon: Shield, value: "1 Year", label: "Free Updates", detail: "Threat assessments and content updated as conditions change" },
            ].map((item) => (
              <div key={item.label} className="glass-card flex items-start gap-4 rounded-xl border border-zinc-800 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-doom/10 text-doom">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-2xl font-extrabold text-white">{item.value}</span>
                  <h3 className="text-sm font-bold text-white">{item.label}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  MODULE BREAKDOWN                                              */}
      {/* ============================================================= */}
      <section className="border-t border-zinc-800 bg-zinc-950/40 py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              16 Modules. <span className="text-doom">Zero Fluff.</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Every module is action-oriented, field-tested, and designed to work without electricity or internet access.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
            {modules.map((m) => (
              <ModuleAccordion key={m.id} module={m} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  INTERACTIVE TOOLS PREVIEW                                     */}
      {/* ============================================================= */}
      <section className="py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              5 Interactive Tools —{" "}
              <span className="text-atomic">Try Them Free</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Each tool is included in The Vault with full functionality. Preview the demo versions below to see what's inside.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.route} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  SOCIAL PROOF                                                  */}
      {/* ============================================================= */}
      <section className="border-t border-zinc-800 bg-zinc-950/40 py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by <span className="text-doom">Families Who Take This Seriously</span>
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-xl border border-zinc-800 p-6">
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 text-sm leading-relaxed text-zinc-300 italic">
                  "{t.quote}"
                </blockquote>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-doom/10 text-sm font-bold text-doom">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  WHAT YOU GET                                                   */}
      {/* ============================================================= */}
      <section className="py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Everything You Get for <span className="text-doom">$99</span>
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              A fraction of what a single emergency kit costs — and infinitely more valuable when knowledge is the difference between survival and panic.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8">
            <ul className="space-y-4">
              {[
                "15 comprehensive survival modules (200+ pages)",
                "5 interactive planning & reference tools",
                "3 full crisis scenario walkthroughs with decision trees",
                "Printable Emergency Binder system",
                "50+ laminate-ready quick-reference cards",
                "Curated offline reference library",
                "1 year of free content updates",
                "30-day money-back guarantee",
                "Family-wide license — share with your entire household",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center gap-2 border-t border-zinc-800 pt-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">$99</span>
                <span className="text-lg text-zinc-600 line-through">$199</span>
              </div>
              <span className="text-sm text-zinc-500">One-time payment. No subscription. No upsells.</span>
              <CTAButton className="mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  FAQ                                                           */}
      {/* ============================================================= */}
      <section className="border-t border-zinc-800 bg-zinc-950/40 py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-3">
            {faqItems.map((item) => (
              <FAQAccordion key={item.question} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  FINAL CTA                                                     */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-doom/10 via-zinc-900 to-zinc-900" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-doom/5 blur-[100px]" />

        <div className="container-wide relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex animate-pulse items-center gap-2 rounded-full border border-doom/40 bg-doom/10 px-4 py-1.5 text-sm font-semibold text-doom">
            <AlertTriangle className="h-4 w-4" />
            The Clock Is Ticking
          </div>

          <h2 className="max-w-3xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Knowledge You Can't Google{" "}
            <span className="text-doom">When the Internet Is Gone</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            The Vault is the last resource you'll download — and the first one you'll reach for.
            Don't wait until it's too late to prepare.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <CTAButton>
              <Lock className="h-5 w-5" />
              Get The Vault Now — $99
            </CTAButton>
            <p className="text-sm text-zinc-500">
              30-day money-back guarantee &middot; Instant digital delivery
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6 text-zinc-600">
            <span className="flex items-center gap-1.5 text-sm">
              <Shield className="h-4 w-4" />
              Secure checkout
            </span>
            <span className="flex items-center gap-1.5 text-sm">
              <Download className="h-4 w-4" />
              Instant access
            </span>
            <span className="flex items-center gap-1.5 text-sm">
              <Lock className="h-4 w-4" />
              Offline-ready
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQ Accordion (local to this file)                                 */
/* ------------------------------------------------------------------ */

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-zinc-800 transition-colors hover:border-zinc-700">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-white sm:text-base">{item.question}</span>
        <ChevronDown className={cn("h-5 w-5 shrink-0 text-zinc-500 transition-transform duration-300", open && "rotate-180 text-doom")} />
      </button>
      <div className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
        <div className="overflow-hidden">
          <p className="px-5 pb-4 text-sm leading-relaxed text-zinc-400">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
