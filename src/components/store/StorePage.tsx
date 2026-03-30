import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, ExternalLink, Filter, Clock, Shield, Home, Shirt, Download, FileText, BookOpen } from "lucide-react";
import { cn } from "../../lib/utils";

type Category = "all" | "apparel" | "home" | "survival";

interface MerchProduct {
  id: string;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  badge?: string;
  storeUrl: string;
}

// Placeholder store URL — replace with your actual Printful/Spring/Redbubble storefront
const STORE_BASE_URL = "https://doomsdayclock.creator-spring.com";

const products: MerchProduct[] = [
  // Apparel
  {
    id: "tee-midnight",
    name: "Minutes to Midnight Tee",
    description: "Premium cotton tee featuring the iconic Doomsday Clock face at 89 seconds to midnight. Available in black and charcoal.",
    price: "$29.99",
    category: "apparel",
    image: "/store/tee-midnight.png",
    badge: "Best Seller",
    storeUrl: `${STORE_BASE_URL}/minutes-to-midnight-tee`,
  },
  {
    id: "hoodie-atomic",
    name: "Atomic Age Hoodie",
    description: "Heavyweight hoodie with retro atomic-era Doomsday Clock graphic. Fleece-lined for warmth when the world gets cold.",
    price: "$49.99",
    category: "apparel",
    image: "/store/hoodie-atomic.png",
    storeUrl: `${STORE_BASE_URL}/atomic-age-hoodie`,
  },
  {
    id: "tee-bulletin",
    name: "It Is 89 Seconds Tee",
    description: "Minimalist typography tee with the current Doomsday Clock reading. A conversation starter about existential risk.",
    price: "$27.99",
    category: "apparel",
    image: "/store/tee-bulletin.png",
    storeUrl: `${STORE_BASE_URL}/89-seconds-tee`,
  },
  {
    id: "hat-doom",
    name: "Doomsday Clock Cap",
    description: "Embroidered dad cap with the clock-at-midnight logo. Adjustable strap, one size fits all.",
    price: "$24.99",
    category: "apparel",
    image: "/store/hat-doom.png",
    storeUrl: `${STORE_BASE_URL}/doomsday-cap`,
  },
  {
    id: "tee-timeline",
    name: "1947-2025 Timeline Tee",
    description: "The complete Doomsday Clock timeline printed on the back. Every setting change since 1947.",
    price: "$32.99",
    category: "apparel",
    image: "/store/tee-timeline.png",
    badge: "New",
    storeUrl: `${STORE_BASE_URL}/timeline-tee`,
  },
  {
    id: "phone-case",
    name: "Clock Face Phone Case",
    description: "Durable snap-on case with the Doomsday Clock design. Available for iPhone and Samsung Galaxy models.",
    price: "$19.99",
    category: "apparel",
    image: "/store/phone-case.png",
    storeUrl: `${STORE_BASE_URL}/clock-phone-case`,
  },
  // Home & Office
  {
    id: "mug-midnight",
    name: "Minutes to Midnight Mug",
    description: "11oz ceramic mug with heat-reactive clock design — the clock hand moves closer to midnight as your coffee cools.",
    price: "$18.99",
    category: "home",
    image: "/store/mug-midnight.png",
    badge: "Popular",
    storeUrl: `${STORE_BASE_URL}/midnight-mug`,
  },
  {
    id: "poster-timeline",
    name: "Timeline Wall Poster",
    description: "18x24 high-quality print of the complete Doomsday Clock timeline from 1947 to present. Museum-quality paper.",
    price: "$22.99",
    category: "home",
    image: "/store/poster-timeline.png",
    storeUrl: `${STORE_BASE_URL}/timeline-poster`,
  },
  {
    id: "sticker-pack",
    name: "Doomsday Sticker Pack",
    description: "Set of 10 vinyl stickers featuring clock faces, atomic symbols, and iconic Doomsday Clock quotes.",
    price: "$12.99",
    category: "home",
    image: "/store/sticker-pack.png",
    storeUrl: `${STORE_BASE_URL}/sticker-pack`,
  },
  {
    id: "desk-clock",
    name: "Mini Desk Clock",
    description: "Acrylic desk clock replica set to 89 seconds to midnight. Perfect for your office or study.",
    price: "$34.99",
    category: "home",
    image: "/store/desk-clock.png",
    badge: "Limited",
    storeUrl: `${STORE_BASE_URL}/desk-clock`,
  },
  {
    id: "mousepad",
    name: "Clock Face Mousepad",
    description: "Large gaming mousepad with the Doomsday Clock face. Anti-slip rubber base, smooth fabric surface.",
    price: "$16.99",
    category: "home",
    image: "/store/mousepad.png",
    storeUrl: `${STORE_BASE_URL}/clock-mousepad`,
  },
  {
    id: "canvas",
    name: "Atomic Era Canvas Print",
    description: "Gallery-wrapped canvas with retro atomic-age Doomsday Clock artwork. Ready to hang, 16x20 inches.",
    price: "$44.99",
    category: "home",
    image: "/store/canvas.png",
    storeUrl: `${STORE_BASE_URL}/atomic-canvas`,
  },
  // Survival & Preparedness
  {
    id: "survival-kit",
    name: "72-Hour Emergency Kit",
    description: "Complete 72-hour survival kit with food, water purification, first aid, and emergency shelter. Be prepared.",
    price: "$89.99",
    category: "survival",
    image: "/store/survival-kit.png",
    badge: "Essential",
    storeUrl: `${STORE_BASE_URL}/survival-kit`,
  },
  {
    id: "solar-charger",
    name: "Solar Power Bank",
    description: "20,000mAh solar-powered charger with flashlight. Keep your devices charged when the grid goes down.",
    price: "$39.99",
    category: "survival",
    image: "/store/solar-charger.png",
    storeUrl: `${STORE_BASE_URL}/solar-charger`,
  },
  {
    id: "water-filter",
    name: "Portable Water Filter",
    description: "Personal water filtration system. Removes 99.99% of bacteria and parasites. Filters up to 1,000 gallons.",
    price: "$24.99",
    category: "survival",
    image: "/store/water-filter.png",
    storeUrl: `${STORE_BASE_URL}/water-filter`,
  },
  {
    id: "emergency-radio",
    name: "Hand-Crank Emergency Radio",
    description: "NOAA weather radio with hand-crank and solar charging. AM/FM, flashlight, and USB charging port.",
    price: "$34.99",
    category: "survival",
    image: "/store/emergency-radio.png",
    storeUrl: `${STORE_BASE_URL}/emergency-radio`,
  },
];

const categories: { key: Category; label: string; icon: typeof Clock }[] = [
  { key: "all", label: "All Products", icon: ShoppingBag },
  { key: "apparel", label: "Apparel & Accessories", icon: Shirt },
  { key: "home", label: "Home & Office", icon: Home },
  { key: "survival", label: "Survival & Prep", icon: Shield },
];

function ProductImage({ name }: { name: string }) {
  // Placeholder image with initials since actual product images aren't available yet
  return (
    <div className="w-full aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl flex items-center justify-center border border-white/5">
      <div className="text-center">
        <Clock className="w-10 h-10 text-doom/40 mx-auto mb-2" />
        <span className="text-xs text-muted-foreground/60 font-medium">{name}</span>
      </div>
    </div>
  );
}

function StoreProductCard({ product }: { product: MerchProduct }) {
  return (
    <div className="group glass-card overflow-hidden flex flex-col h-full hover:border-doom/30 transition-all duration-300">
      <div className="relative">
        <ProductImage name={product.name} />
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-doom text-white rounded-md">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-doom transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-3 flex-1 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-foreground">{product.price}</span>
          <a
            href={product.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-doom hover:bg-doom/80 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            Shop Now
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function StorePage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="container-wide py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8">
        <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span className="text-foreground">Store</span>
      </nav>

      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs font-medium mb-4">
          <ShoppingBag className="w-3.5 h-3.5" />
          Official Merchandise
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Doomsday Clock Store
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Wear the warning. From apparel to survival gear, represent the mission to turn back the clock.
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                activeCategory === cat.key
                  ? "bg-doom text-white shadow-lg shadow-doom/20"
                  : "bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 border border-white/10"
              )}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Product count */}
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <StoreProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* The Vault — Premium Product Feature */}
      <div className="mt-16">
        <div className="relative overflow-hidden rounded-2xl border border-doom/30 bg-gradient-to-br from-doom/10 via-zinc-900 to-zinc-900 p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-doom/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-doom/20 border border-doom/40 text-doom text-xs font-bold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              Premium Digital Product
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  The Vault: Offline Knowledge System
                </h2>
                <p className="text-muted-foreground mb-6">
                  Your complete tactical operating system for grid-down scenarios. 15 modules, 5 interactive tools, 3 full crisis walkthroughs, and a printable emergency binder. Works offline. Updated annually.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "15 comprehensive survival modules with SOPs",
                    "5 interactive tools (calculators, decision trees, generators)",
                    "3 realistic crisis scenario walkthroughs",
                    "Printable emergency binder system",
                    "Annual threat briefing updates",
                    "Lifetime access + community forum",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Clock className="w-4 h-4 text-doom mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <Link
                    to="/vault"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-doom hover:bg-doom/80 text-white font-bold rounded-xl transition-colors text-sm"
                  >
                    Learn More & Buy — $99
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                  <span className="text-xs text-muted-foreground line-through">$199</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Supply Calculator", href: "/vault/supply-calculator", icon: "📊" },
                  { label: "Water Purification", href: "/vault/water-purification", icon: "💧" },
                  { label: "Frequency Reference", href: "/vault/frequency-reference", icon: "📻" },
                  { label: "Emergency Binder", href: "/vault/emergency-binder", icon: "📋" },
                  { label: "Threat Assessment", href: "/vault/threat-assessment", icon: "🎯" },
                  { label: "View All Modules", href: "/vault", icon: "📖" },
                ].map((tool) => (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className="glass-card p-3 text-center hover:border-doom/30 transition-all group"
                  >
                    <div className="text-2xl mb-1">{tool.icon}</div>
                    <div className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                      {tool.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Digital Downloads */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs font-medium mb-4">
            <Download className="w-3.5 h-3.5" />
            Digital Guides
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Individual Guides
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Standalone guides for specific preparedness topics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Free Lead Magnet */}
          <div className="glass-card overflow-hidden flex flex-col h-full hover:border-green-500/30 transition-all duration-300 group">
            <div className="relative">
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-green-900/30 to-zinc-900 rounded-t-xl flex items-center justify-center border-b border-white/5">
                <FileText className="w-12 h-12 text-green-400/50" />
              </div>
              <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-green-500 text-white rounded-md">
                FREE
              </span>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-green-400 transition-colors">
                Complete Emergency Preparedness Checklist
              </h3>
              <p className="text-xs text-muted-foreground mb-3 flex-1">
                40-page printable checklist covering food, water, shelter, communications, and medical supplies. Updated for 2026.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-green-400">FREE</span>
                <a
                  href="#email-signup"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Download Free
                  <Download className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Nuclear Emergency Survival Guide */}
          <div className="glass-card overflow-hidden flex flex-col h-full hover:border-doom/30 transition-all duration-300 group">
            <div className="relative">
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-t-xl flex items-center justify-center border-b border-white/5">
                <BookOpen className="w-12 h-12 text-doom/40" />
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-doom transition-colors">
                Nuclear Emergency Survival Guide
              </h3>
              <p className="text-xs text-muted-foreground mb-3 flex-1">
                Comprehensive 80-page guide on surviving a nuclear emergency. Covers shelter-in-place, evacuation routes, radiation exposure, and long-term recovery.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-foreground">$9.99</span>
                <a
                  href="https://doomsdayclock.gumroad.com/l/nuclear-survival-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-doom hover:bg-doom/80 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Buy on Gumroad
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Family Emergency Plan Template */}
          <div className="glass-card overflow-hidden flex flex-col h-full hover:border-doom/30 transition-all duration-300 group">
            <div className="relative">
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-t-xl flex items-center justify-center border-b border-white/5">
                <FileText className="w-12 h-12 text-doom/40" />
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-doom transition-colors">
                Family Emergency Plan Template
              </h3>
              <p className="text-xs text-muted-foreground mb-3 flex-1">
                Editable PDF template for creating your family's emergency action plan. Includes contact sheets, meeting points, supply inventory, and go-bag checklists.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-foreground">$4.99</span>
                <a
                  href="https://doomsdayclock.gumroad.com/l/family-emergency-plan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-doom hover:bg-doom/80 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Buy on Gumroad
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* 90-Day Emergency Food Planning Guide */}
          <div className="glass-card overflow-hidden flex flex-col h-full hover:border-doom/30 transition-all duration-300 group">
            <div className="relative">
              <div className="w-full aspect-[16/9] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-t-xl flex items-center justify-center border-b border-white/5">
                <BookOpen className="w-12 h-12 text-doom/40" />
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-doom transition-colors">
                90-Day Emergency Food Planning Guide
              </h3>
              <p className="text-xs text-muted-foreground mb-3 flex-1">
                Complete meal planning guide for 90 days of emergency food storage. Includes shopping lists, rotation schedules, calorie calculations, and recipes.
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-lg font-bold text-foreground">$7.99</span>
                <a
                  href="https://doomsdayclock.gumroad.com/l/food-planning-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-doom hover:bg-doom/80 text-white text-xs font-semibold rounded-lg transition-colors"
                >
                  Buy on Gumroad
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center glass-card p-8 sm:p-12">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
          Want custom or bulk orders?
        </h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
          Planning a fundraiser, event, or group order? We offer custom designs and bulk pricing for organizations working on nuclear risk awareness.
        </p>
        <a
          href="mailto:store@doomsdayclock.net"
          className="inline-flex items-center gap-2 px-6 py-3 bg-doom hover:bg-doom/80 text-white font-semibold rounded-xl transition-colors"
        >
          Contact Us
        </a>
      </div>

      {/* Affiliate blog callout */}
      <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10">
        <h3 className="text-sm font-semibold text-foreground mb-2">
          Looking for survival gear reviews?
        </h3>
        <p className="text-xs text-muted-foreground mb-3">
          Check out our in-depth guides on emergency preparedness and doomsday watches.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/blog/best-doomsday-clock-watches"
            className="text-xs text-doom hover:text-doom/80 underline underline-offset-2"
          >
            Best Doomsday Watches
          </Link>
          <Link
            to="/blog/essential-survival-gear-2026"
            className="text-xs text-doom hover:text-doom/80 underline underline-offset-2"
          >
            Essential Survival Gear
          </Link>
          <Link
            to="/blog/emergency-food-supply-guide"
            className="text-xs text-doom hover:text-doom/80 underline underline-offset-2"
          >
            Emergency Food Guide
          </Link>
          <Link
            to="/blog/best-home-backup-power-systems"
            className="text-xs text-doom hover:text-doom/80 underline underline-offset-2"
          >
            Backup Power Systems
          </Link>
        </div>
      </div>
    </div>
  );
}
