import { useState, useEffect } from "react";
import {
  Trophy,
  Medal,
  Star,
  Flame,
  Target,
  Award,
  TrendingUp,
  Clock,
  Share2,
  Lock,
  CheckCircle,
  Zap,
} from "lucide-react";
import { clockHistory, currentTime } from "../data/clockHistory";

// Badge definitions
interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  requirement: string;
  unlocked: boolean;
}

// Achievements system
const BADGES: Badge[] = [
  {
    id: "first_visit",
    name: "Doomsday Discoverer",
    description: "Visited DoomsdayClock.net for the first time",
    icon: <Star className="w-6 h-6" />,
    color: "text-yellow-500 bg-yellow-500/20",
    requirement: "Visit the site",
    unlocked: true, // Always unlocked on visit
  },
  {
    id: "prediction_made",
    name: "Future Forecaster",
    description: "Made a prediction for the 2026 Doomsday Clock",
    icon: <Target className="w-6 h-6" />,
    color: "text-blue-500 bg-blue-500/20",
    requirement: "Submit a prediction",
    unlocked: false,
  },
  {
    id: "history_explorer",
    name: "History Buff",
    description: "Explored the complete Doomsday Clock timeline",
    icon: <Clock className="w-6 h-6" />,
    color: "text-purple-500 bg-purple-500/20",
    requirement: "View timeline section",
    unlocked: false,
  },
  {
    id: "scenario_tester",
    name: "What-If Wizard",
    description: "Tested 3 different scenarios",
    icon: <Zap className="w-6 h-6" />,
    color: "text-cyan-500 bg-cyan-500/20",
    requirement: "Use What-If feature 3 times",
    unlocked: false,
  },
  {
    id: "newsletter_sub",
    name: "Doomsday Insider",
    description: "Subscribed to email notifications",
    icon: <Medal className="w-6 h-6" />,
    color: "text-atomic bg-atomic/20",
    requirement: "Subscribe to newsletter",
    unlocked: false,
  },
  {
    id: "social_sharer",
    name: "Doomsday Ambassador",
    description: "Shared your prediction on social media",
    icon: <Share2 className="w-6 h-6" />,
    color: "text-green-500 bg-green-500/20",
    requirement: "Share prediction",
    unlocked: false,
  },
];

// Trivia questions about Doomsday Clock
const TRIVIA_QUESTIONS = [
  {
    id: 1,
    question: "What year was the Doomsday Clock created?",
    options: ["1945", "1947", "1950", "1953"],
    correct: 1,
    explanation: "The Doomsday Clock was created in 1947 by scientists who worked on the Manhattan Project.",
  },
  {
    id: 2,
    question: "What was the furthest the clock has ever been from midnight?",
    options: ["10 minutes", "14 minutes", "17 minutes", "20 minutes"],
    correct: 2,
    explanation: "The clock was set to 17 minutes in 1991 after the Cold War ended and the START treaty was signed.",
  },
  {
    id: 3,
    question: "What does midnight represent on the Doomsday Clock?",
    options: ["Nuclear war only", "Climate catastrophe only", "Global catastrophe", "Economic collapse"],
    correct: 2,
    explanation: "Midnight represents global catastrophe - including nuclear war, climate collapse, and other existential threats.",
  },
  {
    id: 4,
    question: "Who sets the Doomsday Clock?",
    options: ["The UN", "US Government", "Bulletin of Atomic Scientists", "NATO"],
    correct: 2,
    explanation: "The Science and Security Board of the Bulletin of the Atomic Scientists, including 13 Nobel Laureates, sets the clock.",
  },
  {
    id: 5,
    question: `How many times has the clock been adjusted since 1947?`,
    options: ["15 times", "24 times", `${clockHistory.length} times`, "30 times"],
    correct: 2,
    explanation: `The clock has been adjusted ${clockHistory.length} times since its creation in 1947.`,
  },
];

export function Gamification() {
  const [badges, setBadges] = useState<Badge[]>(BADGES);
  const [currentTrivia, setCurrentTrivia] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [triviaComplete, setTriviaComplete] = useState(false);
  const [streak, setStreak] = useState(0);

  // Load saved progress
  useEffect(() => {
    const savedBadges = localStorage.getItem("doomsday-badges");
    const savedScore = localStorage.getItem("doomsday-trivia-score");
    const savedStreak = localStorage.getItem("doomsday-streak");

    if (savedBadges) {
      setBadges(JSON.parse(savedBadges));
    } else {
      // First visit - unlock first badge
      unlockBadge("first_visit");
    }

    if (savedScore) setScore(parseInt(savedScore));
    if (savedStreak) setStreak(parseInt(savedStreak));

    // Check for prediction badge
    if (localStorage.getItem("doomsday-prediction-2026")) {
      unlockBadge("prediction_made");
    }

    // Check for newsletter badge
    const subscribers = localStorage.getItem("doomsday-subscribers");
    if (subscribers && JSON.parse(subscribers).length > 0) {
      unlockBadge("newsletter_sub");
    }
  }, []);

  const unlockBadge = (badgeId: string) => {
    setBadges((prev) => {
      const updated = prev.map((b) => (b.id === badgeId ? { ...b, unlocked: true } : b));
      localStorage.setItem("doomsday-badges", JSON.stringify(updated));
      return updated;
    });
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    const isCorrect = answerIndex === TRIVIA_QUESTIONS[currentTrivia].correct;
    if (isCorrect) {
      const newScore = score + 1;
      setScore(newScore);
      setStreak(streak + 1);
      localStorage.setItem("doomsday-trivia-score", newScore.toString());
      localStorage.setItem("doomsday-streak", (streak + 1).toString());
    } else {
      setStreak(0);
      localStorage.setItem("doomsday-streak", "0");
    }
  };

  const nextQuestion = () => {
    if (currentTrivia < TRIVIA_QUESTIONS.length - 1) {
      setCurrentTrivia(currentTrivia + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setTriviaComplete(true);
      // Unlock history badge if they completed trivia
      unlockBadge("history_explorer");
    }
  };

  const resetTrivia = () => {
    setCurrentTrivia(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTriviaComplete(false);
  };

  const unlockedCount = badges.filter((b) => b.unlocked).length;

  return (
    <section id="challenge" className="py-20 px-4 bg-gradient-to-b from-zinc-900/30 to-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-1.5 mb-4">
            <Trophy className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-500">Doomsday Challenge</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Test Your Knowledge
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            How much do you know about the Doomsday Clock? Take the quiz, earn badges, and compete with others.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Trivia Section */}
          <div className="lg:col-span-2">
            <div className="bg-zinc-800/30 rounded-2xl border border-white/5 p-6 md:p-8">
              {/* Score header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-zinc-700/50 rounded-full px-4 py-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="font-medium text-white">{score}/{TRIVIA_QUESTIONS.length}</span>
                  </div>
                  {streak >= 2 && (
                    <div className="flex items-center gap-2 bg-orange-500/20 rounded-full px-4 py-2">
                      <Flame className="w-4 h-4 text-orange-500" />
                      <span className="font-medium text-orange-500">{streak} streak!</span>
                    </div>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">
                  Question {currentTrivia + 1} of {TRIVIA_QUESTIONS.length}
                </div>
              </div>

              {!triviaComplete ? (
                <>
                  {/* Question */}
                  <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                      {TRIVIA_QUESTIONS[currentTrivia].question}
                    </h3>

                    {/* Options */}
                    <div className="grid gap-3">
                      {TRIVIA_QUESTIONS[currentTrivia].options.map((option, index) => {
                        const isSelected = selectedAnswer === index;
                        const isCorrect = index === TRIVIA_QUESTIONS[currentTrivia].correct;
                        const showResult = selectedAnswer !== null;

                        return (
                          <button
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            disabled={selectedAnswer !== null}
                            className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                              showResult
                                ? isCorrect
                                  ? "border-green-500 bg-green-500/10"
                                  : isSelected
                                  ? "border-red-500 bg-red-500/10"
                                  : "border-white/5 bg-zinc-800/30"
                                : "border-white/10 hover:border-white/30 bg-zinc-800/30 hover:bg-zinc-800/50"
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className={showResult && isCorrect ? "text-green-400" : showResult && isSelected ? "text-red-400" : "text-white"}>
                                {option}
                              </span>
                              {showResult && isCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Explanation */}
                  {showExplanation && (
                    <div className="mb-6 p-4 bg-zinc-900/50 rounded-xl border border-white/5">
                      <p className="text-muted-foreground">
                        <span className="text-white font-medium">Explanation:</span>{" "}
                        {TRIVIA_QUESTIONS[currentTrivia].explanation}
                      </p>
                    </div>
                  )}

                  {/* Next button */}
                  {selectedAnswer !== null && (
                    <button
                      onClick={nextQuestion}
                      className="w-full bg-atomic hover:bg-atomic/90 text-white font-semibold py-3 rounded-xl transition-colors"
                    >
                      {currentTrivia < TRIVIA_QUESTIONS.length - 1 ? "Next Question" : "See Results"}
                    </button>
                  )}
                </>
              ) : (
                /* Results */
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Quiz Complete!</h3>
                  <p className="text-4xl font-bold text-atomic mb-4">{score}/{TRIVIA_QUESTIONS.length}</p>
                  <p className="text-muted-foreground mb-6">
                    {score === TRIVIA_QUESTIONS.length
                      ? "Perfect score! You're a Doomsday Clock expert!"
                      : score >= 3
                      ? "Great job! You know your Doomsday Clock history."
                      : "Keep learning! The Doomsday Clock has a fascinating history."}
                  </p>
                  <button
                    onClick={resetTrivia}
                    className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Badges Section */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-800/30 rounded-2xl border border-white/5 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Your Badges</h3>
                <span className="text-sm text-muted-foreground">{unlockedCount}/{badges.length}</span>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-zinc-700 rounded-full mb-6 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${(unlockedCount / badges.length) * 100}%` }}
                />
              </div>

              {/* Badge list */}
              <div className="space-y-3">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      badge.unlocked
                        ? "bg-zinc-700/30 border border-white/5"
                        : "bg-zinc-800/50 opacity-50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${badge.color}`}>
                      {badge.unlocked ? badge.icon : <Lock className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white text-sm truncate">{badge.name}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {badge.unlocked ? badge.description : badge.requirement}
                      </div>
                    </div>
                    {badge.unlocked && <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />}
                  </div>
                ))}
              </div>

              {/* Leaderboard teaser */}
              <div className="mt-6 p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium text-purple-400">Coming Soon</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Global leaderboard to see how you rank against other Doomsday Clock enthusiasts!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
