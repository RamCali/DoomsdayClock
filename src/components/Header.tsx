import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

const navLinks = [
  { href: "#clock", label: "Current Time" },
  { href: "#history", label: "History" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-[1.75rem] left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <img
              src="/DoomsDayClock.net.svg"
              alt="Doomsday Clock"
              className="h-10 sm:h-12 w-auto group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Live indicator */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green/10 border border-green/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
            </span>
            <span className="text-xs font-medium text-green uppercase tracking-wider">
              Live
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-48 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-4 pt-4 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <span className="text-xs font-medium text-green uppercase tracking-wider">
                Live Data
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
