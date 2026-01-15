import { useState, useRef, useEffect } from "react";
import { clockHistory } from "../data/clockHistory";
import { cn } from "../lib/utils";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export function InteractiveTimeline() {
  const [currentIndex, setCurrentIndex] = useState(clockHistory.length - 1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const playIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentEvent = clockHistory[currentIndex];
  const progress = (currentIndex / (clockHistory.length - 1)) * 100;

  // Calculate clock hand angle
  const minutesToMidnight = currentEvent.minutes;
  const handAngle = -minutesToMidnight * 6;

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= clockHistory.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => {
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
    };
  }, [isPlaying]);

  // Handle track click/drag
  const handleTrackInteraction = (clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, x / rect.width));
    const newIndex = Math.round(percentage * (clockHistory.length - 1));
    setCurrentIndex(newIndex);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPlaying(false);
    handleTrackInteraction(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleTrackInteraction(e.clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsPlaying(false);
    handleTrackInteraction(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      handleTrackInteraction(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalMouseUp);
    };
  }, []);

  return (
    <section className="py-12 sm:py-16" id="explore">
      <div className="container-wide">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="text-atomic">Interactive</span> Doomsday Clock
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Drag the timeline to see how the Doomsday Clock has moved through history.
            Watch the clock hand change in real-time.
          </p>
        </div>

        <div className="doom-card p-6 sm:p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Mini Clock */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl transition-all duration-500"
                  style={{
                    background: `radial-gradient(circle, rgba(234, 56, 76, ${0.2 + (1 - currentEvent.minutes / 17) * 0.3}) 0%, transparent 70%)`,
                  }}
                />

                {/* Clock face */}
                <div className="absolute inset-0 rounded-full bg-black/80 backdrop-blur-lg border-4 border-doom/50 shadow-2xl">
                  {/* Hour markers */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 - 90) * (Math.PI / 180);
                    const isNoon = i === 0;
                    const radius = 42;
                    const x = 50 + radius * Math.cos(angle);
                    const y = 50 + radius * Math.sin(angle);

                    return (
                      <div
                        key={i}
                        className={cn(
                          "absolute w-0.5 h-3 -translate-x-1/2 -translate-y-1/2",
                          isNoon ? "bg-doom h-4 w-1 glow-doom" : "bg-white/40"
                        )}
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                        }}
                      />
                    );
                  })}

                  {/* 12 label */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2">
                    <span className="text-doom font-bold text-sm font-mono">12</span>
                  </div>

                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-doom glow-doom z-20" />

                  {/* Minute hand */}
                  <div
                    className="absolute top-1/2 left-1/2 origin-bottom z-10 transition-transform duration-500"
                    style={{
                      width: "3px",
                      height: "35%",
                      marginLeft: "-1.5px",
                      marginTop: "-35%",
                      transform: `rotate(${handAngle}deg)`,
                    }}
                  >
                    <div
                      className="w-full h-full bg-gradient-to-t from-doom via-doom to-doom-light rounded-full"
                      style={{
                        boxShadow: `0 0 15px rgba(234, 56, 76, 0.8)`,
                      }}
                    />
                  </div>

                  {/* Time display */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      Midnight
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Event info */}
            <div className="text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30">
                <span className="text-2xl sm:text-3xl font-bold font-mono text-foreground">
                  {currentEvent.year}
                </span>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  Time to Midnight
                </p>
                <p className="text-3xl sm:text-4xl font-bold font-mono text-doom">
                  {currentEvent.time}
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                {currentEvent.reason}
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {currentEvent.details}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                {currentEvent.direction === "forward" ? (
                  <span className="inline-flex items-center gap-1 text-sm text-doom">
                    <span className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-8 border-b-doom" />
                    Moved closer to midnight
                  </span>
                ) : currentEvent.direction === "backward" ? (
                  <span className="inline-flex items-center gap-1 text-sm text-green">
                    <span className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-8 border-t-green" />
                    Moved further from midnight
                  </span>
                ) : (
                  <span className="text-sm text-muted-foreground">Initial setting</span>
                )}
              </div>
            </div>
          </div>

          {/* Timeline scrubber */}
          <div className="mt-8 pt-6 border-t border-white/10">
            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={() => setCurrentIndex(0)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Go to start"
              >
                <SkipBack className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-3 bg-doom/20 hover:bg-doom/30 text-doom rounded-full transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" />
                )}
              </button>
              <button
                onClick={() => setCurrentIndex(clockHistory.length - 1)}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Go to end"
              >
                <SkipForward className="w-5 h-5" />
              </button>
            </div>

            {/* Track */}
            <div
              ref={trackRef}
              className="relative h-12 cursor-pointer select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
            >
              {/* Track background */}
              <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 bg-white/10 rounded-full overflow-hidden">
                {/* Progress fill */}
                <div
                  className="h-full bg-gradient-to-r from-green via-doom-light to-doom rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Year markers */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-1">
                {clockHistory
                  .filter((_, i) => i % 5 === 0 || i === clockHistory.length - 1)
                  .map((event) => {
                    const idx = clockHistory.findIndex((e) => e.year === event.year);
                    const pos = (idx / (clockHistory.length - 1)) * 100;
                    return (
                      <div
                        key={event.year}
                        className="absolute flex flex-col items-center"
                        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
                      >
                        <div className="w-1 h-3 bg-white/30 rounded-full" />
                        <span className="text-[10px] text-muted-foreground mt-1 hidden sm:block">
                          {event.year}
                        </span>
                      </div>
                    );
                  })}
              </div>

              {/* Scrubber handle */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-150"
                style={{ left: `${progress}%` }}
              >
                <div
                  className={cn(
                    "w-5 h-5 rounded-full bg-doom border-2 border-white shadow-lg transition-transform",
                    isDragging && "scale-125"
                  )}
                  style={{ boxShadow: "0 0 10px rgba(234, 56, 76, 0.5)" }}
                />
              </div>
            </div>

            {/* Year range labels */}
            <div className="flex justify-between mt-2">
              <span className="text-xs text-muted-foreground">1947</span>
              <span className="text-xs text-muted-foreground">Present</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
