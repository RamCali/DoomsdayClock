import { Heart, Coffee } from "lucide-react";

export function SupportUs() {
  return (
    <div className="glass-card p-6 sm:p-8 max-w-md mx-auto text-center">
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-doom/10 border border-doom/30 mb-4">
        <Heart className="w-5 h-5 text-doom" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">
        Support DoomsdayClock.net
      </h3>
      <p className="text-sm text-muted-foreground mb-5">
        This site is independently maintained. If you find it useful, consider
        buying us a coffee to help keep it running.
      </p>
      <a
        href="https://ko-fi.com/doomsdayclock"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-doom hover:bg-doom/80 text-white text-sm font-semibold rounded-xl transition-colors"
      >
        <Coffee className="w-4 h-4" />
        Support Us on Ko-fi
      </a>
    </div>
  );
}
