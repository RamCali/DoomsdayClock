import { clockHistory, type ClockEvent } from "../data/clockHistory";
import { cn } from "../lib/utils";
import { ArrowUp, ArrowDown, Clock } from "lucide-react";

function TimelineItem({ event, index }: { event: ClockEvent; index: number }) {
  const isLatest = index === clockHistory.length - 1;

  const DirectionIcon = () => {
    if (event.direction === "initial") return <Clock className="w-4 h-4" />;
    if (event.direction === "forward") return <ArrowUp className="w-4 h-4 text-doom" />;
    return <ArrowDown className="w-4 h-4 text-green" />;
  };

  return (
    <div
      className={cn(
        "relative pl-8 pb-8 border-l-2 last:border-l-0 last:pb-0",
        event.direction === "forward" ? "border-doom/30" : "border-green/30",
        isLatest && "border-doom"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Timeline dot */}
      <div
        className={cn(
          "absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2",
          event.direction === "forward"
            ? "bg-doom/20 border-doom"
            : event.direction === "backward"
            ? "bg-green/20 border-green"
            : "bg-white/20 border-white",
          isLatest && "glow-doom"
        )}
      />

      {/* Content */}
      <div
        className={cn(
          "glass-card p-4 sm:p-6",
          isLatest && "doom-accent-card"
        )}
      >
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
          <span className="text-2xl sm:text-3xl font-bold font-mono text-foreground">
            {event.year}
          </span>
          <span
            className={cn(
              "text-lg sm:text-xl font-bold font-mono",
              event.direction === "forward" ? "text-doom" : "text-green"
            )}
          >
            {event.time}
          </span>
          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <DirectionIcon />
            <span>
              {event.direction === "initial"
                ? "Initial setting"
                : event.direction === "forward"
                ? "Closer to midnight"
                : "Further from midnight"}
            </span>
          </div>
        </div>

        <h3 className="text-base sm:text-lg font-semibold mb-2 text-foreground">
          {event.reason}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {event.details}
        </p>

        {isLatest && (
          <div className="mt-4 pt-4 border-t border-doom/30">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-doom uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-doom animate-pulse-slow" />
              Current Time
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function Timeline() {
  // Show events in reverse chronological order (newest first)
  const reversedHistory = [...clockHistory].reverse();

  return (
    <section className="py-12 sm:py-16" id="history">
      <div className="container-wide">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="text-green">COMPLETE</span> History of the Doomsday Clock
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Every adjustment from 1947 to present. See how global events have moved
            humanity closer to — or further from — midnight.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {reversedHistory.map((event, index) => (
            <TimelineItem
              key={event.year}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
