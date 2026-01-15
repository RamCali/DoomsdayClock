import { DoomsdayClock } from "./DoomsdayClock";
import { currentTime } from "../data/clockHistory";
import { AlertTriangle, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16" id="clock">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-doom/5 via-transparent to-transparent pointer-events-none" />

      <div className="container-wide py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-doom/10 border border-doom/30 text-doom text-xs sm:text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-doom opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-doom"></span>
              </span>
              Up-to-date as of {currentTime.lastUpdated}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-doom">Doomsday Clock</span>
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
              What Is, History, Interactive & What If Simulation
            </h2>

            {/* Speakable content for voice search / AEO */}
            <p className="speakable-current-time text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              The Doomsday Clock is currently at <span className="text-doom font-bold">{currentTime.display}</span> to midnight —
              the closest it has ever been to global catastrophe since its creation in 1947.
            </p>
            <p className="speakable-quick-answer sr-only">
              As of {currentTime.lastUpdated}, the Doomsday Clock time is {currentTime.display} to midnight. This is the closest humanity has ever been to symbolic catastrophe.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 pt-4">
              <div className="doom-accent-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-doom" />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Current Time
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-doom">
                  {currentTime.seconds}s
                </p>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-atomic" />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    Since 1947
                  </span>
                </div>
                <p className="text-2xl sm:text-3xl font-bold font-mono text-atomic">
                  77 years
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#history"
                className="inline-flex items-center justify-center px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
              >
                View Full History
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-foreground font-medium rounded-lg transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Clock */}
          <div className="flex justify-center lg:justify-end animate-slide-up">
            <DoomsdayClock />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex justify-center pt-12">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <div className="w-1.5 h-1.5 rounded-full bg-doom animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
