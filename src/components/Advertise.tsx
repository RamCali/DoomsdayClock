import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Users,
  TrendingUp,
  BarChart3,
  FileText,
  Send,
  Monitor,
  Handshake,
  ChevronRight,
  Search,
} from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../lib/seo";

const stats = [
  { icon: Users, label: "Monthly Visitors", value: "100K+", note: "and growing" },
  { icon: TrendingUp, label: "Average CTR", value: "28%+", note: "across content" },
  { icon: Mail, label: "Email Subscribers", value: "200+", note: "and growing" },
  { icon: Search, label: "Google Ranking", value: "#1–2", note: 'for "doomsday clock"' },
];

const sponsorshipOptions = [
  {
    icon: FileText,
    title: "Sponsored Blog Post",
    price: "$500 – $1,000",
    features: [
      "Permanent placement on the site",
      "Full SEO optimization & internal linking",
      "Affiliate integration available",
      "Social media promotion included",
    ],
  },
  {
    icon: Send,
    title: "Newsletter Sponsorship",
    price: "$200 – $500 / send",
    features: [
      "Exclusive placement to engaged subscribers",
      "Custom copy written collaboratively",
      "Click-through tracking provided",
      "Reach a geopolitics-interested audience",
    ],
  },
  {
    icon: Monitor,
    title: "Banner Ad",
    price: "$300 – $800 / month",
    features: [
      "Above-the-fold placement on high-traffic pages",
      "Desktop & mobile responsive",
      "Monthly impression & click reports",
      "A/B creative testing available",
    ],
  },
  {
    icon: Handshake,
    title: "Custom Partnership",
    price: "Contact for pricing",
    features: [
      "Custom integrations & widgets",
      "Co-branded content campaigns",
      "Dedicated landing pages",
      "Long-term rate discounts",
    ],
  },
];

export function Advertise() {
  useEffect(() => {
    updateMetaTags({
      title:
        "Advertise on DoomsdayClock.net | Media Kit & Sponsorship",
      description:
        "Reach an engaged audience of 100K+ monthly visitors interested in geopolitics, science, and current events. Explore sponsorship options on DoomsdayClock.net.",
      path: "/advertise",
    });
    return () => resetToDefaults();
  }, []);

  return (
    <article className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-doom transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-foreground">Advertise</span>
      </nav>

      {/* Hero */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Advertise on{" "}
          <span className="text-doom">DoomsdayClock.net</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Reach a highly engaged audience passionate about geopolitics, science,
          nuclear security, and current events. Partner with the web's leading
          Doomsday Clock resource.
        </p>
      </header>

      {/* Audience Stats */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Our Audience at a Glance
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center rounded-xl"
            >
              <stat.icon className="w-8 h-8 text-doom mx-auto mb-3" />
              <div className="text-3xl font-bold text-doom mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audience Demographics */}
      <section className="mb-16 glass-card rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Who Visits DoomsdayClock.net?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Our audience skews toward educated, globally aware adults aged 25–54
          with deep interests in <strong className="text-foreground">geopolitics</strong>,{" "}
          <strong className="text-foreground">science &amp; technology</strong>,{" "}
          <strong className="text-foreground">emergency preparedness</strong>, and{" "}
          <strong className="text-foreground">current events</strong>. Visitors
          spend an average of 3+ minutes per session, frequently share articles,
          and actively engage with interactive features like polls, timelines, and
          scenario simulations. This is a high-intent audience that values
          trustworthy, well-researched content.
        </p>
      </section>

      {/* Sponsorship Options */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Sponsorship &amp; Advertising Options
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sponsorshipOptions.map((option) => (
            <div
              key={option.title}
              className="doom-accent-card rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <option.icon className="w-6 h-6 text-doom shrink-0" />
                <h3 className="text-lg font-semibold">{option.title}</h3>
              </div>
              <div className="text-2xl font-bold text-doom mb-4">
                {option.price}
              </div>
              <ul className="space-y-2 flex-1">
                {option.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <BarChart3 className="w-4 h-4 text-doom shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center glass-card rounded-xl p-10">
        <Mail className="w-10 h-10 text-doom mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-3">
          Ready to Reach Our Audience?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Get in touch to discuss sponsorship opportunities, request detailed
          analytics, or propose a custom partnership.
        </p>
        <a
          href="mailto:advertise@doomsdayclock.net"
          className="inline-flex items-center gap-2 bg-doom hover:bg-doom/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <Mail className="w-5 h-5" />
          advertise@doomsdayclock.net
        </a>
      </section>
    </article>
  );
}
