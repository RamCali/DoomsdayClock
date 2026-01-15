import { useState, useEffect } from "react";
import { Clock, Bell, Calendar, AlertTriangle } from "lucide-react";

// Target date: January 27, 2026 at 10:00 AM EST (typical announcement time)
const ANNOUNCEMENT_DATE = new Date("2026-01-27T10:00:00-05:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const difference = ANNOUNCEMENT_DATE.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    total: difference,
  };
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [isUrgent, setIsUrgent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      // Mark as urgent when less than 7 days remain
      setIsUrgent(newTimeLeft.days < 7 && newTimeLeft.total > 0);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  // If countdown is complete
  if (timeLeft.total <= 0) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-doom/20 via-zinc-900 to-doom/20 border border-doom/30 p-8 text-center">
            <div className="absolute inset-0 bg-doom/5 animate-pulse" />
            <div className="relative z-10">
              <AlertTriangle className="w-12 h-12 text-doom mx-auto mb-4 animate-bounce" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                The 2026 Announcement is <span className="text-doom">LIVE</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Check back for the updated Doomsday Clock time!
              </p>
              <a
                href="https://thebulletin.org/doomsday-clock/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-doom hover:bg-doom/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                View Official Announcement
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-2xl border p-6 md:p-8 transition-all ${
            isUrgent
              ? "bg-gradient-to-r from-doom/10 via-zinc-900 to-doom/10 border-doom/30"
              : "bg-zinc-800/30 border-white/5"
          }`}
        >
          {/* Background glow for urgent state */}
          {isUrgent && (
            <div className="absolute inset-0 bg-doom/5 animate-pulse" />
          )}

          <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    isUrgent ? "bg-doom/20" : "bg-atomic/20"
                  }`}
                >
                  <Clock
                    className={`w-5 h-5 ${isUrgent ? "text-doom" : "text-atomic"}`}
                  />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">
                    Next Announcement
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>January 27, 2026 at 10:00 AM EST</span>
                  </div>
                </div>
              </div>

              {isUrgent && (
                <div className="flex items-center gap-2 bg-doom/20 rounded-full px-4 py-2 animate-pulse">
                  <Bell className="w-4 h-4 text-doom" />
                  <span className="text-sm font-medium text-doom">
                    Less than a week!
                  </span>
                </div>
              )}
            </div>

            {/* Countdown Grid */}
            <div className="grid grid-cols-4 gap-3 md:gap-4">
              {/* Days */}
              <div className="text-center">
                <div
                  className={`relative rounded-xl p-3 md:p-4 ${
                    isUrgent ? "bg-doom/10 border border-doom/20" : "bg-zinc-800/50"
                  }`}
                >
                  <span
                    className={`text-3xl md:text-5xl font-bold font-mono ${
                      isUrgent ? "text-doom" : "text-white"
                    }`}
                  >
                    {formatNumber(timeLeft.days)}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground mt-2 block">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="text-center">
                <div
                  className={`rounded-xl p-3 md:p-4 ${
                    isUrgent ? "bg-doom/10 border border-doom/20" : "bg-zinc-800/50"
                  }`}
                >
                  <span
                    className={`text-3xl md:text-5xl font-bold font-mono ${
                      isUrgent ? "text-doom" : "text-white"
                    }`}
                  >
                    {formatNumber(timeLeft.hours)}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground mt-2 block">
                  Hours
                </span>
              </div>

              {/* Minutes */}
              <div className="text-center">
                <div
                  className={`rounded-xl p-3 md:p-4 ${
                    isUrgent ? "bg-doom/10 border border-doom/20" : "bg-zinc-800/50"
                  }`}
                >
                  <span
                    className={`text-3xl md:text-5xl font-bold font-mono ${
                      isUrgent ? "text-doom" : "text-white"
                    }`}
                  >
                    {formatNumber(timeLeft.minutes)}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground mt-2 block">
                  Minutes
                </span>
              </div>

              {/* Seconds */}
              <div className="text-center">
                <div
                  className={`rounded-xl p-3 md:p-4 ${
                    isUrgent ? "bg-doom/10 border border-doom/20" : "bg-zinc-800/50"
                  }`}
                >
                  <span
                    className={`text-3xl md:text-5xl font-bold font-mono ${
                      isUrgent ? "text-doom animate-pulse" : "text-white"
                    }`}
                  >
                    {formatNumber(timeLeft.seconds)}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground mt-2 block">
                  Seconds
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 text-center">
              <a
                href="#notify"
                className={`inline-flex items-center gap-2 font-medium text-sm transition-colors ${
                  isUrgent
                    ? "text-doom hover:text-doom/80"
                    : "text-atomic hover:text-atomic/80"
                }`}
              >
                <Bell className="w-4 h-4" />
                Get notified when results are announced
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
