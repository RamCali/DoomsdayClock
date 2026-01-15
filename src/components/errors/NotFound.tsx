import { AlertTriangle, Home, ArrowLeft, Clock } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Clock showing 4:04 */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          {/* Clock face */}
          <div className="absolute inset-0 rounded-full border-4 border-doom/50 bg-black/50 backdrop-blur-lg">
            {/* Clock glow */}
            <div className="absolute inset-0 rounded-full animate-pulse opacity-30 bg-doom blur-xl" />

            {/* Hour markers */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-3 bg-white/30 left-1/2 -translate-x-1/2"
                style={{
                  top: "8px",
                  transformOrigin: "50% 88px",
                  transform: `translateX(-50%) rotate(${i * 30}deg)`,
                }}
              />
            ))}

            {/* MIDNIGHT label */}
            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-doom tracking-wider">
              MIDNIGHT
            </span>

            {/* 404 in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold font-mono text-doom">404</span>
            </div>

            {/* Clock hands pointing to 4:04 */}
            {/* Hour hand */}
            <div
              className="absolute w-1.5 h-12 bg-white/80 rounded-full left-1/2 bottom-1/2"
              style={{
                transformOrigin: "50% 100%",
                transform: "translateX(-50%) rotate(122deg)",
              }}
            />
            {/* Minute hand */}
            <div
              className="absolute w-1 h-16 bg-doom rounded-full left-1/2 bottom-1/2"
              style={{
                transformOrigin: "50% 100%",
                transform: "translateX(-50%) rotate(24deg)",
              }}
            />
            {/* Center dot */}
            <div className="absolute w-3 h-3 bg-doom rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Error message */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-doom/10 border border-doom/30 text-doom text-sm font-medium">
            <AlertTriangle className="w-4 h-4" />
            Page Not Found
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Lost in <span className="text-doom">Time</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for has vanished into the void—perhaps consumed by midnight itself.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Return Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-foreground font-medium rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>

        {/* Fun fact */}
        <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-atomic mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground text-left">
              <span className="text-atomic font-medium">Did you know?</span> The Doomsday Clock has been adjusted 25 times since 1947. Unlike this page, humanity's time can still be found.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
