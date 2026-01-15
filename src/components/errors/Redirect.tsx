import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Clock } from "lucide-react";

interface RedirectProps {
  to: string;
  delay?: number; // seconds before auto-redirect
  message?: string;
}

export function Redirect({ to, delay = 5, message }: RedirectProps) {
  const [countdown, setCountdown] = useState(delay);

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = to;
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, to]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Redirect Clock Animation */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-4 border-atomic/50 bg-black/50 backdrop-blur-lg">
            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-white/10"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-atomic"
                strokeDasharray={`${((delay - countdown) / delay) * 283} 283`}
                strokeLinecap="round"
                style={{ transition: "stroke-dasharray 1s linear" }}
              />
            </svg>

            {/* Countdown number */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold font-mono text-atomic">
                {countdown}
              </span>
            </div>
          </div>

          {/* Orbiting arrow */}
          <div
            className="absolute w-8 h-8 text-atomic"
            style={{
              top: "50%",
              left: "50%",
              animation: "orbit 3s linear infinite",
              transformOrigin: "0 0",
            }}
          >
            <ArrowRight className="w-full h-full" />
          </div>
        </div>

        {/* Redirect message */}
        <div className="space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-atomic/10 border border-atomic/30 text-atomic text-sm font-medium">
            <Clock className="w-4 h-4" />
            303 - See Other
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            <span className="text-atomic">Redirecting</span> You
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            {message || "The content you're looking for has moved to a new location."}
          </p>
        </div>

        {/* Destination info */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 max-w-md mx-auto mb-8">
          <p className="text-sm text-muted-foreground mb-2">Redirecting to:</p>
          <p className="text-atomic font-mono text-sm break-all">{to}</p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={to}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-atomic hover:bg-atomic-dark text-white font-medium rounded-lg transition-colors"
          >
            Go Now
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={() => setCountdown(0)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-foreground font-medium rounded-lg transition-colors"
          >
            Skip Countdown
          </button>
        </div>
      </div>

      {/* CSS for orbit animation */}
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
}
