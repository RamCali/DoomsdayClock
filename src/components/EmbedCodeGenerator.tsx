import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Copy, Check, Code, ExternalLink } from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../lib/seo";

const EMBED_BASE = "https://doomsdayclock.net/embed/clock";

const SIZE_OPTIONS = [
  { value: "sm", label: "Small", width: 200, height: 240 },
  { value: "md", label: "Medium", width: 300, height: 360 },
  { value: "lg", label: "Large", width: 400, height: 480 },
] as const;

const THEME_OPTIONS = [
  { value: "dark", label: "Dark" },
  { value: "light", label: "Light" },
] as const;

export function EmbedCodeGenerator() {
  const [size, setSize] = useState<string>("md");
  const [theme, setTheme] = useState<string>("dark");
  const [showTime, setShowTime] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    updateMetaTags({
      title: "Free Doomsday Clock Widget — Embed on Your Website | DoomsdayClock.net",
      description:
        "Add a live Doomsday Clock widget to your website for free. Customizable size and theme with a simple embed code. Shows real-time status.",
      path: "/embed",
      type: "website",
    });
    return () => resetToDefaults();
  }, []);

  const sizeConfig = SIZE_OPTIONS.find((s) => s.value === size) || SIZE_OPTIONS[1];
  const src = `${EMBED_BASE}?size=${size}&theme=${theme}&showTime=${showTime}`;
  const embedCode = `<iframe src="${src}" width="${sizeConfig.width}" height="${sizeConfig.height}" frameborder="0" style="border:none;overflow:hidden;border-radius:12px;" title="Doomsday Clock Widget" loading="lazy"></iframe>`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="container-tight">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-foreground">Embed Widget</span>
        </nav>

        {/* Header */}
        <div className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-xs sm:text-sm font-medium">
            <Code className="w-4 h-4" />
            Free Widget
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Embed the{" "}
            <span className="text-doom">Doomsday Clock</span> on Your
            Website
          </h1>

          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Add a live Doomsday Clock widget to your blog, news site, or
            educational page. Free to use, customizable, and always shows the
            current time to midnight.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Controls */}
          <div className="space-y-6">
            {/* Size selector */}
            <div className="doom-card p-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Size
              </h3>
              <div className="flex gap-3">
                {SIZE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setSize(opt.value)}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      size === opt.value
                        ? "bg-doom text-white"
                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                    <span className="block text-xs opacity-70 mt-0.5">
                      {opt.width}&times;{opt.height}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Theme selector */}
            <div className="doom-card p-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Theme
              </h3>
              <div className="flex gap-3">
                {THEME_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setTheme(opt.value)}
                    className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      theme === opt.value
                        ? "bg-doom text-white"
                        : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Options */}
            <div className="doom-card p-6">
              <h3 className="text-sm font-semibold text-foreground mb-3">
                Options
              </h3>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showTime}
                  onChange={(e) => setShowTime(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-doom focus:ring-doom"
                />
                <span className="text-sm text-foreground">
                  Show time display
                </span>
              </label>
            </div>

            {/* Embed code */}
            <div className="doom-card p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-foreground">
                  Embed Code
                </h3>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-doom hover:bg-doom-dark text-white text-xs font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Code
                    </>
                  )}
                </button>
              </div>
              <pre className="bg-black/60 rounded-lg p-4 text-xs text-green-400 font-mono overflow-x-auto whitespace-pre-wrap break-all">
                {embedCode}
              </pre>
            </div>
          </div>

          {/* Right: Preview */}
          <div>
            <div className="doom-card p-6 sticky top-24">
              <h3 className="text-sm font-semibold text-foreground mb-4">
                Live Preview
              </h3>
              <div
                className="flex items-center justify-center rounded-lg bg-white/5 p-6"
                style={{ minHeight: sizeConfig.height + 40 }}
              >
                <iframe
                  src={`/embed/clock?size=${size}&theme=${theme}&showTime=${showTime}`}
                  width={sizeConfig.width}
                  height={sizeConfig.height}
                  frameBorder="0"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    borderRadius: "12px",
                  }}
                  title="Doomsday Clock Widget Preview"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SEO internal links section */}
        <div className="mt-12 doom-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground mb-4">
            Why Embed the Doomsday Clock?
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            The Doomsday Clock is the world&apos;s most recognized symbol of
            existential risk. Currently at{" "}
            <span className="text-doom font-semibold">85 seconds</span> to
            midnight &mdash; the closest it has ever been &mdash; it serves as a
            powerful visual for any site covering nuclear threats, climate
            change, geopolitics, or science education.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <Link
              to="/blog/doomsday-clock-history-timeline"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-medium text-foreground text-sm mb-1">
                Complete History Timeline
              </h4>
              <p className="text-xs text-muted-foreground">
                Every clock change from 1947 to 2026
              </p>
            </Link>
            <Link
              to="/blog/doomsday-clock-2027-prediction"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-medium text-foreground text-sm mb-1">
                2027 Prediction
              </h4>
              <p className="text-xs text-muted-foreground">
                Will the clock move closer to midnight?
              </p>
            </Link>
            <Link
              to="/#timeline"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-medium text-foreground text-sm mb-1">
                Interactive Timeline
              </h4>
              <p className="text-xs text-muted-foreground">
                Explore 79 years of clock history
              </p>
            </Link>
            <a
              href="https://thebulletin.org/doomsday-clock/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <h4 className="font-medium text-foreground text-sm mb-1 flex items-center gap-1">
                Official Bulletin
                <ExternalLink className="w-3 h-3" />
              </h4>
              <p className="text-xs text-muted-foreground">
                The Bulletin of the Atomic Scientists
              </p>
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Doomsday Clock
          </Link>
        </div>
      </div>
    </div>
  );
}
