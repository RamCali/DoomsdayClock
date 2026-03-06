import { useState, useEffect } from "react";
import { Mail, Bell, CheckCircle, AlertCircle, Loader2, X } from "lucide-react";
import { currentTime } from "../data/clockHistory";

const DISMISSED_KEY = "doomsday-popup-dismissed";
const POPUP_DELAY_MS = 15000; // Show after 15 seconds
const DISMISS_DAYS = 7; // Don't show again for 7 days after dismiss

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function EmailPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISSED_KEY);
    if (dismissed && Date.now() < Number(dismissed)) return;

    const timer = setTimeout(() => setVisible(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    const expiry = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
    localStorage.setItem(DISMISSED_KEY, String(expiry));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzq3sGl2yAYK_L5_aVTIhm4-Dkz1rBvMsm0oyXWpaaRObQnTI_vob9Tsa7LD0lwaQgsMg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            timestamp: new Date().toISOString(),
            source: "doomsdayclock-popup",
          }),
        }
      );

      setStatus("success");
      setEmail("");

      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "newsletter_signup",
          email_domain: email.split("@")[1],
          source: "popup",
        });
      }

      // Auto-close after success
      setTimeout(() => {
        handleDismiss();
      }, 3000);
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-slide-up">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-atomic/20 via-zinc-900 to-zinc-900 border border-atomic/20 p-6 sm:p-8 shadow-2xl">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-atomic/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-doom/5 rounded-full blur-2xl" />

          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-atomic/20 flex items-center justify-center">
                <Bell className="w-7 h-7 text-atomic" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-5">
              <h3 className="text-2xl font-bold text-white mb-2">
                Don't Miss the Next Update
              </h3>
              <p className="text-sm text-muted-foreground">
                The clock is at{" "}
                <span className="text-doom font-bold">
                  {currentTime.display}
                </span>{" "}
                to midnight. Get alerted when the{" "}
                <span className="text-white font-semibold">2027 announcement</span>{" "}
                drops.
              </p>
            </div>

            {/* Form */}
            {status === "success" ? (
              <div className="flex flex-col items-center text-center p-5 bg-green-500/10 rounded-xl border border-green-500/20">
                <CheckCircle className="w-10 h-10 text-green-500 mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">
                  You're on the list!
                </h4>
                <p className="text-sm text-muted-foreground">
                  We'll email you the moment it's announced.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Enter your email"
                      className={`w-full pl-10 pr-4 py-3 bg-zinc-800/50 border rounded-xl text-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                        status === "error"
                          ? "border-red-500 focus:ring-red-500/50"
                          : "border-white/10 focus:ring-atomic/50 focus:border-atomic/50"
                      }`}
                      disabled={status === "loading"}
                      autoFocus
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 bg-atomic hover:bg-atomic/90 disabled:bg-atomic/50 text-white font-semibold px-5 py-3 rounded-xl transition-colors whitespace-nowrap text-sm"
                  >
                    {status === "loading" ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <Bell className="w-4 h-4" />
                        <span>Notify Me</span>
                      </>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 mt-2.5 text-red-400 text-xs">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            )}

            {/* Trust signal */}
            <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>No spam. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
