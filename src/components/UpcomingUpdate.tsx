import { Bell, Calendar, ExternalLink } from "lucide-react";
import { currentTime } from "../data/clockHistory";

export function UpcomingUpdate() {
  // Calculate days until expected January 2026 announcement (typically late January)
  const expectedDate = new Date("2026-01-28"); // Bulletin typically announces late January
  const today = new Date();
  const daysUntil = Math.ceil(
    (expectedDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  const isUpcomingSoon = daysUntil <= 60 && daysUntil > 0;
  const isPast = daysUntil < 0;

  if (isPast) return null; // Hide after announcement date passes

  return (
    <section className="py-12 sm:py-16" id="upcoming-update">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Main announcement card */}
          <div className="doom-accent-card p-6 sm:p-8 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-doom via-transparent to-transparent" />
            </div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-doom/20">
                  <Calendar className="w-6 h-6 text-doom" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    January 2026 Update Expected
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Bulletin of the Atomic Scientists Annual Announcement
                  </p>
                </div>
              </div>

              {/* Countdown */}
              {isUpcomingSoon && (
                <div className="mb-6 p-4 rounded-lg bg-doom/10 border border-doom/30">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        Expected in approximately
                      </p>
                      <p className="text-3xl sm:text-4xl font-bold font-mono text-doom">
                        {daysUntil} days
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground mb-1">
                        Current time
                      </p>
                      <p className="text-2xl font-bold text-foreground">
                        {currentTime.display}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* What to expect */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  What to Expect in the 2026 Announcement
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5">
                    <h4 className="font-medium text-doom mb-2">
                      Factors Being Evaluated
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ongoing Russia-Ukraine conflict status</li>
                      <li>• Nuclear arms control developments</li>
                      <li>• Climate change policy progress</li>
                      <li>• AI and emerging technology risks</li>
                      <li>• Global geopolitical tensions</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5">
                    <h4 className="font-medium text-atomic mb-2">
                      Possible Outcomes
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Clock moves closer to midnight</li>
                      <li>• Clock stays at 90 seconds</li>
                      <li>• Clock moves back (if tensions ease)</li>
                      <li>• First time at 60 seconds or less?</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Historical context */}
              <div className="p-4 rounded-lg bg-white/5 mb-6">
                <h4 className="font-medium text-foreground mb-2">
                  Historical January Announcements
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-doom">2023</p>
                    <p className="text-xs text-muted-foreground">
                      Moved to 90 sec
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-atomic">2024</p>
                    <p className="text-xs text-muted-foreground">
                      Stayed at 90 sec
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-muted-foreground">
                      2026
                    </p>
                    <p className="text-xs text-muted-foreground">TBD</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://thebulletin.org/doomsday-clock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-doom hover:bg-doom-dark text-white font-medium rounded-lg transition-colors"
                >
                  <Bell className="w-4 h-4" />
                  Follow Official Updates
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-muted-foreground self-center">
                  We update this site within 24 hours of any official
                  announcement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
