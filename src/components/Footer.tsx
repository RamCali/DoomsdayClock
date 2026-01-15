import { ExternalLink, Bell } from "lucide-react";
import { currentTime } from "../data/clockHistory";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="inline-block group">
              <img
                src="/DoomsDayClock.net.svg"
                alt="Doomsday Clock"
                className="h-12 sm:h-14 w-auto group-hover:scale-105 transition-transform"
              />
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              Real-time tracking of the Doomsday Clock with complete history
              since 1947. Stay informed about humanity's existential risks.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#clock"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Current Time
              </a>
              <a
                href="#history"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Complete History
              </a>
              <a
                href="#faq"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Official Source
            </h3>
            <nav className="flex flex-col gap-2">
              <a
                href="https://thebulletin.org/doomsday-clock/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Bulletin of the Atomic Scientists
                <ExternalLink className="w-3 h-3" />
              </a>
              <p className="text-xs text-muted-foreground mt-2">
                Data sourced from the official Bulletin of the Atomic Scientists.
                This site is not affiliated with the Bulletin.
              </p>
            </nav>
          </div>
        </div>

        {/* Update notice */}
        <div className="mt-8 p-4 rounded-xl bg-atomic/10 border border-atomic/30">
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 text-atomic shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-1">
                When is the next update?
              </h4>
              <p className="text-xs text-muted-foreground">
                The Bulletin of the Atomic Scientists typically announces Doomsday Clock updates in January each year.
                We will update this site within 24 hours of any official announcement from{"TheBulletin.org "}
                <a
                  href="https://thebulletin.org/doomsday-clock/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-atomic hover:underline"
                >
                  thebulletin.org
                </a>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} DoomsdayClock. For educational purposes.
          </p>
          <p className="text-xs text-muted-foreground">
            Up-to-date as of {currentTime.lastUpdated}
          </p>
        </div>
      </div>
    </footer>
  );
}
