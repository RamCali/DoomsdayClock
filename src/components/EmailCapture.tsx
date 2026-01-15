import { useState } from "react";
import { Mail, Bell, CheckCircle, AlertCircle, Loader2, Shield } from "lucide-react";
import { currentTime } from "../data/clockHistory";

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    // Simulate API call - replace with actual endpoint
    // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Store in localStorage for now (replace with actual backend)
      const subscribers = JSON.parse(localStorage.getItem("doomsday-subscribers") || "[]");
      if (!subscribers.includes(email)) {
        subscribers.push(email);
        localStorage.setItem("doomsday-subscribers", JSON.stringify(subscribers));
      }

      setStatus("success");
      setEmail("");

      // Track conversion (if GTM is set up)
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "newsletter_signup",
          email_domain: email.split("@")[1],
        });
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="notify" className="py-20 px-4 bg-gradient-to-b from-background to-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-atomic/20 via-zinc-900 to-zinc-900 border border-atomic/20 p-8 md:p-12">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-atomic/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-atomic/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-atomic/20 flex items-center justify-center">
                <Bell className="w-8 h-8 text-atomic" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Be First to Know
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get notified the moment the Bulletin announces the <span className="text-white font-semibold">2026 Doomsday Clock</span> update.
                Will it move past {currentTime.seconds} seconds?
              </p>
            </div>

            {/* Countdown hint */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 bg-zinc-800/50 rounded-full px-4 py-2 border border-white/5">
                <span className="w-2 h-2 bg-atomic rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">
                  Next announcement: <span className="text-white font-medium">January 27, 2026</span>
                </span>
              </div>
            </div>

            {/* Form */}
            {status === "success" ? (
              <div className="max-w-md mx-auto">
                <div className="flex flex-col items-center text-center p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
                  <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                  <p className="text-muted-foreground">
                    We'll email you the moment the 2026 clock is announced.
                    Check your inbox for a confirmation.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === "error") setStatus("idle");
                      }}
                      placeholder="Enter your email"
                      className={`w-full pl-12 pr-4 py-4 bg-zinc-800/50 border rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-all ${
                        status === "error"
                          ? "border-red-500 focus:ring-red-500/50"
                          : "border-white/10 focus:ring-atomic/50 focus:border-atomic/50"
                      }`}
                      disabled={status === "loading"}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 bg-atomic hover:bg-atomic/90 disabled:bg-atomic/50 text-white font-semibold px-6 py-4 rounded-xl transition-colors whitespace-nowrap"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <Bell className="w-5 h-5" />
                        <span>Notify Me</span>
                      </>
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 mt-3 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            )}

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>1-2 emails per year</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>

            {/* What you'll get */}
            <div className="mt-10 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-zinc-800/30 rounded-xl border border-white/5">
                <div className="text-atomic font-bold mb-1">Instant Alert</div>
                <p className="text-sm text-muted-foreground">
                  Email within minutes of the official announcement
                </p>
              </div>
              <div className="p-4 bg-zinc-800/30 rounded-xl border border-white/5">
                <div className="text-atomic font-bold mb-1">Expert Analysis</div>
                <p className="text-sm text-muted-foreground">
                  Breakdown of why the clock moved (or didn't)
                </p>
              </div>
              <div className="p-4 bg-zinc-800/30 rounded-xl border border-white/5">
                <div className="text-atomic font-bold mb-1">Prediction Results</div>
                <p className="text-sm text-muted-foreground">
                  See if your prediction was correct
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
