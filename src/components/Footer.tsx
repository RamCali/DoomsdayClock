import { ExternalLink, Bell, Heart, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
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
                loading="lazy"
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
              <Link
                to="/store"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Store
              </Link>
              <Link
                to="/forum"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Forum
              </Link>
              <Link
                to="/advertise"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Advertise
              </Link>
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

        {/* Support Us */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Heart className="w-5 h-5 text-doom shrink-0" />
            <p className="text-sm text-muted-foreground">
              This site is independently maintained. If you find it useful, consider supporting us.
            </p>
          </div>
          <a
            href="https://ko-fi.com/doomsdayclock"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-doom/10 hover:bg-doom/20 border border-doom/30 text-doom text-sm font-medium rounded-lg transition-colors shrink-0"
          >
            <Coffee className="w-4 h-4" />
            Support Us on Ko-fi
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} DoomsdayClock. For educational purposes.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="text-xs text-muted-foreground">
              Up-to-date as of {currentTime.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
