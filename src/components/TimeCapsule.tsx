import { useState, useEffect } from "react";
import { Clock, Lock, Send, Calendar, MessageSquare, Sparkles } from "lucide-react";
import { currentTime } from "../data/clockHistory";

interface TimeCapsuleMessage {
  message: string;
  prediction: "closer" | "same" | "farther";
  createdAt: string;
  revealDate: string;
}

// Reveal date: January 27, 2026
const REVEAL_DATE = new Date("2026-01-27T10:00:00-05:00");

export function TimeCapsule() {
  const [message, setMessage] = useState("");
  const [prediction, setPrediction] = useState<"closer" | "same" | "farther" | null>(null);
  const [savedCapsule, setSavedCapsule] = useState<TimeCapsuleMessage | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const MAX_CHARS = 280;
  const isRevealed = new Date() >= REVEAL_DATE;

  // Load saved capsule from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("doomsday-time-capsule-2026");
    if (saved) {
      setSavedCapsule(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !prediction) return;

    setIsSubmitting(true);

    // Simulate save delay
    setTimeout(() => {
      const capsule: TimeCapsuleMessage = {
        message: message.trim(),
        prediction,
        createdAt: new Date().toISOString(),
        revealDate: REVEAL_DATE.toISOString(),
      };

      localStorage.setItem("doomsday-time-capsule-2026", JSON.stringify(capsule));
      setSavedCapsule(capsule);
      setIsSubmitting(false);

      // Track event
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "time_capsule_created",
          prediction: prediction,
        });
      }
    }, 1000);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_CHARS) {
      setMessage(value);
      setCharCount(value.length);
    }
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getPredictionLabel = (pred: string) => {
    switch (pred) {
      case "closer":
        return "closer to midnight";
      case "farther":
        return "farther from midnight";
      default:
        return "unchanged";
    }
  };

  // If capsule exists and not yet revealed
  if (savedCapsule && !isRevealed) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 via-zinc-900 to-pink-500/10 border border-purple-500/20 p-8">
            {/* Locked icon */}
            <div className="absolute top-4 right-4">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <Lock className="w-5 h-5 text-purple-400" />
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Your Time Capsule is <span className="text-purple-400">Sealed</span>
              </h2>

              <p className="text-muted-foreground mb-6">
                Your message and prediction are locked until the 2026 Doomsday Clock announcement.
              </p>

              {/* Sealed info */}
              <div className="bg-zinc-800/50 rounded-xl p-6 text-left mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-muted-foreground">
                    Created on {formatDate(savedCapsule.createdAt)}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Your message:</p>
                      <div className="bg-zinc-900/50 rounded-lg p-3 border border-white/5">
                        <p className="text-white text-sm blur-sm select-none">
                          {savedCapsule.message}
                        </p>
                        <p className="text-xs text-purple-400 mt-2 text-center">
                          Message hidden until reveal
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Your prediction:</p>
                      <p className="text-white font-medium capitalize">
                        Clock will move {getPredictionLabel(savedCapsule.prediction)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="w-4 h-4" />
                <span>Opens on January 27, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // If capsule exists and IS revealed
  if (savedCapsule && isRevealed) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 via-zinc-900 to-emerald-500/10 border border-green-500/20 p-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center animate-pulse">
                <Sparkles className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Your Time Capsule is <span className="text-green-400">Open!</span>
              </h2>

              <p className="text-muted-foreground mb-6">
                Here's what you wrote on {formatDate(savedCapsule.createdAt)}
              </p>

              {/* Revealed content */}
              <div className="bg-zinc-800/50 rounded-xl p-6 text-left mb-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Your message:</p>
                    <div className="bg-zinc-900/50 rounded-lg p-4 border border-green-500/20">
                      <p className="text-white">{savedCapsule.message}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-zinc-900/50 rounded-lg border border-white/5">
                    <div>
                      <p className="text-sm text-muted-foreground">Your prediction:</p>
                      <p className="text-white font-medium capitalize">
                        {getPredictionLabel(savedCapsule.prediction)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Actual result:</p>
                      <p className="text-green-400 font-medium">Check above!</p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Thank you for being part of the Doomsday Clock community.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Create new capsule form
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 via-zinc-900 to-pink-500/10 border border-purple-500/20 p-8">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl" />

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Create Your <span className="text-purple-400">Time Capsule</span>
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Write a message to your future self. It will be sealed and revealed on
                January 27, 2026 when the new Doomsday Clock is announced.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Message input */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Your message to the future
                </label>
                <div className="relative">
                  <textarea
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="What do you think the world will look like? Any hopes or fears about global security? Make a record of this moment..."
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-white/10 rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 resize-none"
                  />
                  <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
                    {charCount}/{MAX_CHARS}
                  </div>
                </div>
              </div>

              {/* Prediction selection */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">
                  Your prediction for the 2026 clock
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPrediction("closer")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      prediction === "closer"
                        ? "border-red-500 bg-red-500/10"
                        : "border-white/10 hover:border-red-500/50 bg-zinc-800/30"
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-2xl mb-1 block">⚠️</span>
                      <span
                        className={`text-sm font-medium ${
                          prediction === "closer" ? "text-red-400" : "text-muted-foreground"
                        }`}
                      >
                        Closer
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPrediction("same")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      prediction === "same"
                        ? "border-yellow-500 bg-yellow-500/10"
                        : "border-white/10 hover:border-yellow-500/50 bg-zinc-800/30"
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-2xl mb-1 block">⏸️</span>
                      <span
                        className={`text-sm font-medium ${
                          prediction === "same" ? "text-yellow-400" : "text-muted-foreground"
                        }`}
                      >
                        Same
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPrediction("farther")}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      prediction === "farther"
                        ? "border-green-500 bg-green-500/10"
                        : "border-white/10 hover:border-green-500/50 bg-zinc-800/30"
                    }`}
                  >
                    <div className="text-center">
                      <span className="text-2xl mb-1 block">🕊️</span>
                      <span
                        className={`text-sm font-medium ${
                          prediction === "farther" ? "text-green-400" : "text-muted-foreground"
                        }`}
                      >
                        Farther
                      </span>
                    </div>
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Current time: {currentTime.seconds} seconds to midnight
                </p>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={!message.trim() || !prediction || isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-zinc-600 disabled:to-zinc-600 text-white font-semibold py-4 rounded-xl transition-all"
              >
                {isSubmitting ? (
                  <>
                    <Lock className="w-5 h-5 animate-pulse" />
                    <span>Sealing your capsule...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Seal Time Capsule</span>
                  </>
                )}
              </button>

              <p className="text-xs text-center text-muted-foreground">
                Your capsule will be stored locally and revealed on January 27, 2026
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
