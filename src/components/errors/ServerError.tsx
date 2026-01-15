import { AlertOctagon, RefreshCw, Home, Zap } from "lucide-react";

export function ServerError() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Broken Clock Animation */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          {/* Clock face - cracked effect */}
          <div className="absolute inset-0 rounded-full border-4 border-doom bg-black/50 backdrop-blur-lg overflow-hidden">
            {/* Glitch effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-doom/20 via-transparent to-doom/10 animate-pulse" />

            {/* Static/noise effect */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* SYSTEM FAILURE label */}
            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[8px] font-bold text-doom tracking-wider animate-pulse">
              SYSTEM FAILURE
            </span>

            {/* 500 in center with glitch */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold font-mono text-doom relative">
                500
                {/* Glitch layers */}
                <span className="absolute inset-0 text-cyan-500 opacity-50 animate-pulse" style={{ clipPath: "inset(20% 0 30% 0)", transform: "translateX(-2px)" }}>
                  500
                </span>
                <span className="absolute inset-0 text-red-500 opacity-50 animate-pulse" style={{ clipPath: "inset(50% 0 10% 0)", transform: "translateX(2px)" }}>
                  500
                </span>
              </span>
            </div>

            {/* Broken clock hands */}
            {/* Hour hand - tilted wrong */}
            <div
              className="absolute w-1.5 h-10 bg-white/60 rounded-full left-1/2 bottom-1/2"
              style={{
                transformOrigin: "50% 100%",
                transform: "translateX(-50%) rotate(45deg)",
              }}
            />
            {/* Minute hand - broken off */}
            <div
              className="absolute w-1 h-8 bg-doom/60 rounded-full"
              style={{
                left: "65%",
                top: "60%",
                transform: "rotate(120deg)",
              }}
            />
            {/* Center dot - sparking */}
            <div className="absolute w-4 h-4 bg-doom rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping" />
            <div className="absolute w-3 h-3 bg-yellow-500 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

          {/* Electricity sparks */}
          <Zap className="absolute -top-2 -right-2 w-8 h-8 text-yellow-400 animate-pulse" />
          <Zap className="absolute -bottom-1 -left-1 w-6 h-6 text-yellow-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
        </div>

        {/* Error message */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-doom/10 border border-doom/30 text-doom text-sm font-medium animate-pulse">
            <AlertOctagon className="w-4 h-4" />
            Internal Server Error
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Clock <span className="text-doom">Malfunction</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Our servers experienced a critical failure. The Doomsday Clock monitoring systems are temporarily offline.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-foreground font-medium rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </a>
        </div>

        {/* Status indicator */}
        <div className="mt-12 p-4 rounded-xl bg-doom/5 border border-doom/20 max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">System Status</span>
            <span className="flex items-center gap-2 text-doom">
              <span className="w-2 h-2 rounded-full bg-doom animate-pulse" />
              Recovering
            </span>
          </div>
          <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-doom rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
