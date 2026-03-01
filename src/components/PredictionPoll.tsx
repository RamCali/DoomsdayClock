import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, Minus, Users, Clock, Trophy, Share2, Loader2 } from "lucide-react";
import { currentTime } from "../data/clockHistory";

type PredictionChoice = "closer" | "same" | "farther" | null;

interface PollResults {
  closer: number;
  same: number;
  farther: number;
  total: number;
}

const FALLBACK_RESULTS: PollResults = { closer: 0, same: 0, farther: 0, total: 0 };

export function PredictionPoll() {
  const [userPrediction, setUserPrediction] = useState<PredictionChoice>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [results, setResults] = useState<PollResults>(FALLBACK_RESULTS);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch current results and check localStorage for existing vote
  useEffect(() => {
    const saved = localStorage.getItem("doomsday-prediction-2027");
    if (saved) {
      setUserPrediction(saved as PredictionChoice);
      setHasVoted(true);
      setShowResults(true);
    }

    fetch("/api/votes")
      .then((res) => res.json())
      .then((data: PollResults) => setResults(data))
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, []);

  const handleVote = async (choice: PredictionChoice) => {
    if (hasVoted || !choice) return;

    setIsAnimating(true);
    setUserPrediction(choice);
    localStorage.setItem("doomsday-prediction-2027", choice);

    try {
      const res = await fetch("/api/votes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice }),
      });
      if (res.ok) {
        const data: PollResults = await res.json();
        setResults(data);
      }
    } catch {
      // Vote saved to localStorage even if API fails
    }

    setTimeout(() => {
      setHasVoted(true);
      setShowResults(true);
      setIsAnimating(false);
    }, 800);
  };

  const getPercentage = (count: number) => {
    if (results.total === 0) return 0;
    return Math.round((count / results.total) * 100);
  };

  const shareResult = () => {
    const text = `I predict the 2027 Doomsday Clock will move ${userPrediction === "closer" ? "CLOSER to midnight ⚠️" : userPrediction === "farther" ? "FARTHER from midnight 🕊️" : "STAY THE SAME ⏸️"}. What do you think? #DoomsdayClock`;
    const url = "https://doomsdayclock.net";

    if (navigator.share) {
      navigator.share({ title: "Doomsday Clock Prediction", text, url });
    } else {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        "_blank"
      );
    }
  };

  return (
    <section id="prediction" className="py-20 px-4 bg-gradient-to-b from-zinc-900/50 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-4">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-amber-500">Community Prediction</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Will the 2027 Clock Show?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The Bulletin announces the new time in <span className="text-white font-semibold">January 2027</span>.
            {results.total > 0
              ? <> Join {results.total.toLocaleString()}+ others in predicting whether we move closer to—or further from—midnight.</>
              : <> Predict whether we move closer to—or further from—midnight.</>
            }
          </p>
        </div>

        {/* Current Time Reference */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-zinc-800/50 rounded-full px-6 py-3 border border-white/5">
            <Clock className="w-5 h-5 text-atomic" />
            <span className="text-muted-foreground">Current time:</span>
            <span className="text-2xl font-bold text-white">{currentTime.seconds} seconds</span>
          </div>
        </div>

        {/* Voting Options */}
        {!showResults ? (
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {/* Closer Option */}
            <button
              onClick={() => handleVote("closer")}
              disabled={hasVoted}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                isAnimating && userPrediction === "closer"
                  ? "border-red-500 bg-red-500/20 scale-105"
                  : "border-white/10 hover:border-red-500/50 hover:bg-red-500/5"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                  isAnimating && userPrediction === "closer" ? "bg-red-500" : "bg-red-500/20 group-hover:bg-red-500/30"
                }`}>
                  <TrendingUp className={`w-8 h-8 ${isAnimating && userPrediction === "closer" ? "text-white" : "text-red-500"}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Closer</h3>
                <p className="text-sm text-muted-foreground">
                  Less than 85 seconds
                </p>
                <p className="text-xs text-red-400 mt-2">More dangerous</p>
              </div>
            </button>

            {/* Same Option */}
            <button
              onClick={() => handleVote("same")}
              disabled={hasVoted}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                isAnimating && userPrediction === "same"
                  ? "border-yellow-500 bg-yellow-500/20 scale-105"
                  : "border-white/10 hover:border-yellow-500/50 hover:bg-yellow-500/5"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                  isAnimating && userPrediction === "same" ? "bg-yellow-500" : "bg-yellow-500/20 group-hover:bg-yellow-500/30"
                }`}>
                  <Minus className={`w-8 h-8 ${isAnimating && userPrediction === "same" ? "text-white" : "text-yellow-500"}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Unchanged</h3>
                <p className="text-sm text-muted-foreground">
                  Stays at 85 seconds
                </p>
                <p className="text-xs text-yellow-400 mt-2">Status quo</p>
              </div>
            </button>

            {/* Farther Option */}
            <button
              onClick={() => handleVote("farther")}
              disabled={hasVoted}
              className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                isAnimating && userPrediction === "farther"
                  ? "border-green-500 bg-green-500/20 scale-105"
                  : "border-white/10 hover:border-green-500/50 hover:bg-green-500/5"
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors ${
                  isAnimating && userPrediction === "farther" ? "bg-green-500" : "bg-green-500/20 group-hover:bg-green-500/30"
                }`}>
                  <TrendingDown className={`w-8 h-8 ${isAnimating && userPrediction === "farther" ? "text-white" : "text-green-500"}`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Farther</h3>
                <p className="text-sm text-muted-foreground">
                  More than 85 seconds
                </p>
                <p className="text-xs text-green-400 mt-2">Less dangerous</p>
              </div>
            </button>
          </div>
        ) : (
          /* Results View */
          <div className="bg-zinc-800/30 rounded-2xl border border-white/5 p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin inline" />
                  ) : (
                    <>{results.total.toLocaleString()} predictions</>
                  )}
                </span>
              </div>
              <button
                onClick={shareResult}
                className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Results Bars */}
            <div className="space-y-4">
              {/* Closer */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-red-500" />
                    <span className={`font-medium ${userPrediction === "closer" ? "text-white" : "text-muted-foreground"}`}>
                      Closer to midnight
                    </span>
                    {userPrediction === "closer" && (
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">Your pick</span>
                    )}
                  </div>
                  <span className="font-bold text-white">{getPercentage(results.closer)}%</span>
                </div>
                <div className="h-3 bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-1000"
                    style={{ width: `${getPercentage(results.closer)}%` }}
                  />
                </div>
              </div>

              {/* Same */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Minus className="w-4 h-4 text-yellow-500" />
                    <span className={`font-medium ${userPrediction === "same" ? "text-white" : "text-muted-foreground"}`}>
                      Unchanged
                    </span>
                    {userPrediction === "same" && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full">Your pick</span>
                    )}
                  </div>
                  <span className="font-bold text-white">{getPercentage(results.same)}%</span>
                </div>
                <div className="h-3 bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-full transition-all duration-1000"
                    style={{ width: `${getPercentage(results.same)}%` }}
                  />
                </div>
              </div>

              {/* Farther */}
              <div className="relative">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-green-500" />
                    <span className={`font-medium ${userPrediction === "farther" ? "text-white" : "text-muted-foreground"}`}>
                      Farther from midnight
                    </span>
                    {userPrediction === "farther" && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Your pick</span>
                    )}
                  </div>
                  <span className="font-bold text-white">{getPercentage(results.farther)}%</span>
                </div>
                <div className="h-3 bg-zinc-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-600 to-green-500 rounded-full transition-all duration-1000"
                    style={{ width: `${getPercentage(results.farther)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Insight */}
            <div className="mt-6 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
              <p className="text-sm text-muted-foreground">
                <span className="text-white font-medium">Community insight:</span> {getPercentage(results.closer)}% believe
                global threats will intensify, pushing the clock closer to midnight. Historically, the clock has moved
                closer 16 times and farther 8 times since 1947.
              </p>
            </div>
          </div>
        )}

        {/* CTA to email signup */}
        {showResults && (
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Want to know if your prediction was right?
            </p>
            <a
              href="#notify"
              className="inline-flex items-center gap-2 bg-atomic hover:bg-atomic/90 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Get Notified When Results Are Announced
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
