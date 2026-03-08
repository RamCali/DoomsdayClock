import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { clockHistory, currentTime, type ClockEvent } from "../data/clockHistory";
import { updateMetaTags, resetToDefaults } from "../lib/seo";

// Years that get dedicated pages (high-volume search queries)
const YEAR_PAGES = [2015, 2017, 2018, 2020, 2021, 2022, 2023, 2024, 2025, 2026];

function getEventForYear(year: number): ClockEvent | undefined {
  return clockHistory.find((e) => e.year === year);
}

function getPreviousEvent(year: number): ClockEvent | undefined {
  const idx = clockHistory.findIndex((e) => e.year === year);
  return idx > 0 ? clockHistory[idx - 1] : undefined;
}

function getAdjacentYearPages(year: number) {
  const idx = YEAR_PAGES.indexOf(year);
  return {
    prev: idx > 0 ? YEAR_PAGES[idx - 1] : null,
    next: idx < YEAR_PAGES.length - 1 ? YEAR_PAGES[idx + 1] : null,
  };
}

function DirectionIcon({ direction }: { direction: ClockEvent["direction"] }) {
  if (direction === "forward") return <TrendingUp className="w-5 h-5 text-doom" />;
  if (direction === "backward") return <TrendingDown className="w-5 h-5 text-emerald-400" />;
  return <Minus className="w-5 h-5 text-muted-foreground" />;
}

function directionLabel(direction: ClockEvent["direction"]) {
  if (direction === "forward") return "Moved closer to midnight";
  if (direction === "backward") return "Moved further from midnight";
  return "Initial setting";
}

export function YearPage() {
  const { year: yearParam } = useParams<{ year: string }>();
  const year = Number(yearParam);
  const event = getEventForYear(year);

  useEffect(() => {
    if (!event) return;

    const title = `Doomsday Clock ${year}: ${event.time} to Midnight | DoomsdayClock.net`;
    const description = `In ${year}, the Doomsday Clock was set to ${event.time} to midnight. ${event.details} View the full Doomsday Clock ${year} timeline, history, and analysis.`;

    updateMetaTags({
      title,
      description,
      path: `/doomsday-clock-${year}`,
      newsKeywords: `doomsday clock ${year}, doomsday clock ${year} time, doomsday clock ${year} prediction, doomsday clock ${year} date`,
    });

    // Inject year-specific structured data
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `Doomsday Clock ${year}: ${event.time} to Midnight`,
      description,
      datePublished: `${year}-01-25`,
      dateModified: currentTime.lastUpdated,
      author: { "@type": "Organization", name: "DoomsdayClock.net" },
      publisher: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        logo: { "@type": "ImageObject", url: "https://doomsdayclock.net/DoomsDayClock.net.png" },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://doomsdayclock.net/doomsday-clock-${year}`,
      },
      about: {
        "@type": "Thing",
        name: "Doomsday Clock",
        sameAs: "https://en.wikipedia.org/wiki/Doomsday_Clock",
      },
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://doomsdayclock.net" },
        { "@type": "ListItem", position: 2, name: "History", item: "https://doomsdayclock.net/#history" },
        { "@type": "ListItem", position: 3, name: `Doomsday Clock ${year}`, item: `https://doomsdayclock.net/doomsday-clock-${year}` },
      ],
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.setAttribute("data-year-schema", String(year));
    script1.textContent = JSON.stringify(schema);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.setAttribute("data-year-breadcrumb", String(year));
    script2.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script2);

    return () => {
      document.querySelector(`script[data-year-schema="${year}"]`)?.remove();
      document.querySelector(`script[data-year-breadcrumb="${year}"]`)?.remove();
      resetToDefaults();
    };
  }, [year, event]);

  // Redirect invalid years to 404
  if (!event || !YEAR_PAGES.includes(year)) {
    return <Navigate to="/404" replace />;
  }

  const prevEvent = getPreviousEvent(year);
  const { prev, next } = getAdjacentYearPages(year);

  // Build context about what changed
  const changeDescription = prevEvent
    ? `The clock moved from ${prevEvent.time} (${prevEvent.year}) to ${event.time} to midnight.`
    : `The clock was initially set to ${event.time} to midnight.`;

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/#history" className="hover:text-foreground transition-colors">History</Link>
          <span>/</span>
          <span className="text-foreground">Doomsday Clock {year}</span>
        </nav>

        {/* Header */}
        <header className="mb-10 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
            <Clock className="w-3.5 h-3.5" />
            <span>{event.time} to midnight</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Doomsday Clock <span className="text-doom">{year}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            In {year}, the Doomsday Clock was set to <strong className="text-foreground">{event.time} to midnight</strong> — {event.reason.toLowerCase()}.
          </p>
        </header>

        {/* Key facts card */}
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 mb-10 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
            <Calendar className="w-5 h-5 text-doom" />
            Key Facts — {year}
          </h2>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/[0.03] p-4">
              <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Clock Time</dt>
              <dd className="text-2xl font-bold text-doom">{event.time}</dd>
            </div>
            <div className="rounded-lg bg-white/[0.03] p-4">
              <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Direction</dt>
              <dd className="flex items-center gap-2 text-lg font-medium">
                <DirectionIcon direction={event.direction} />
                {directionLabel(event.direction)}
              </dd>
            </div>
            {prevEvent && (
              <div className="rounded-lg bg-white/[0.03] p-4 sm:col-span-2">
                <dt className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Change from {prevEvent.year}</dt>
                <dd className="text-base text-foreground/90">{changeDescription}</dd>
              </div>
            )}
          </dl>
        </div>

        {/* Detailed analysis */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">What Happened in {year}?</h2>
          <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
            {event.details}
          </p>
          <p className="text-foreground/80 leading-relaxed text-base sm:text-lg">
            The Bulletin of the Atomic Scientists, founded in 1945 by Manhattan Project scientists, evaluates existential threats including nuclear weapons, climate change, and disruptive technologies when setting the clock each year.
          </p>
        </section>

        {/* Historical context */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">Historical Context</h2>
          <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Year</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium">Time</th>
                  <th className="text-left py-3 px-4 text-muted-foreground font-medium hidden sm:table-cell">Reason</th>
                </tr>
              </thead>
              <tbody>
                {clockHistory
                  .filter((e) => Math.abs(e.year - year) <= 5 || e.year === 1947 || e.year === 1991)
                  .sort((a, b) => a.year - b.year)
                  .map((e) => (
                    <tr
                      key={e.year}
                      className={`border-b border-white/5 ${e.year === year ? "bg-doom/10" : "hover:bg-white/[0.02]"}`}
                    >
                      <td className="py-2.5 px-4 font-medium">
                        {YEAR_PAGES.includes(e.year) && e.year !== year ? (
                          <Link to={`/doomsday-clock-${e.year}`} className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                            {e.year}
                          </Link>
                        ) : (
                          <span className={e.year === year ? "text-doom font-bold" : ""}>{e.year}</span>
                        )}
                      </td>
                      <td className="py-2.5 px-4">{e.time}</td>
                      <td className="py-2.5 px-4 text-muted-foreground hidden sm:table-cell">{e.reason}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Other years navigation */}
        <section className="mb-10 space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">Doomsday Clock by Year</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {YEAR_PAGES.filter((y) => y !== year).map((y) => {
              const ev = getEventForYear(y);
              return (
                <Link
                  key={y}
                  to={`/doomsday-clock-${y}`}
                  className="rounded-lg border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors p-3 text-center"
                >
                  <div className="font-bold text-lg">{y}</div>
                  <div className="text-xs text-muted-foreground">{ev?.time}</div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Prev/Next navigation */}
        <div className="flex items-center justify-between gap-4 pt-8 border-t border-white/10">
          {prev ? (
            <Link
              to={`/doomsday-clock-${prev}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Doomsday Clock {prev}</span>
            </Link>
          ) : (
            <div />
          )}
          <Link
            to="/#history"
            className="text-sm text-doom hover:text-doom/80 transition-colors"
          >
            Full Timeline
          </Link>
          {next ? (
            <Link
              to={`/doomsday-clock-${next}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span>Doomsday Clock {next}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* Back to home */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Doomsday Clock Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export { YEAR_PAGES };
