import { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Shield,
  Droplets,
  Utensils,
  Heart,
  Radio,
  Zap,
  Home,
  Map,
  Users,
  AlertTriangle,
  CheckCircle,
  Copy,
  Printer,
  RotateCcw,
  Lock,
  Clock,
} from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

/* ─── Types ─── */

interface Question {
  label: string;
  options: string[];
}

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
  questions: [Question, Question];
}

type Answers = Record<string, [number, number]>;

/* ─── Data ─── */

const CATEGORIES: Category[] = [
  {
    id: "water",
    title: "Water Security",
    icon: <Droplets className="w-5 h-5" />,
    questions: [
      {
        label: "Do you have stored water?",
        options: [
          "None",
          "3 days",
          "1 week",
          "2 weeks",
          "1 month+",
        ],
      },
      {
        label: "Do you have water purification capability?",
        options: [
          "None",
          "Tablets only",
          "Filter",
          "Filter + chemicals",
          "Multiple redundant methods",
        ],
      },
    ],
  },
  {
    id: "food",
    title: "Food Security",
    icon: <Utensils className="w-5 h-5" />,
    questions: [
      {
        label: "How many days of food do you have stored?",
        options: [
          "0-3 days",
          "1 week",
          "2 weeks",
          "1 month",
          "3+ months",
        ],
      },
      {
        label: "Can you grow food?",
        options: [
          "No space/knowledge",
          "Some knowledge",
          "Small garden",
          "Active garden",
          "Extensive food production",
        ],
      },
    ],
  },
  {
    id: "medical",
    title: "Medical Preparedness",
    icon: <Heart className="w-5 h-5" />,
    questions: [
      {
        label: "Do you have a first aid kit?",
        options: [
          "None",
          "Basic bandages",
          "Comprehensive kit",
          "Trauma kit (tourniquet, chest seals)",
          "Advanced medical supplies + training",
        ],
      },
      {
        label: "Days of critical medications on hand?",
        options: [
          "0-7 days",
          "2 weeks",
          "1 month",
          "2 months",
          "3+ months",
        ],
      },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    icon: <Radio className="w-5 h-5" />,
    questions: [
      {
        label: "Do you have non-phone communication?",
        options: [
          "No",
          "Battery radio",
          "FRS radios",
          "Ham radio (unlicensed)",
          "Ham radio (licensed) + ARES membership",
        ],
      },
      {
        label: "Do you have a family communication plan?",
        options: [
          "No plan",
          "Vague plan",
          "Written plan",
          "Written + practiced",
          "Written + practiced + multiple backups",
        ],
      },
    ],
  },
  {
    id: "power",
    title: "Power & Energy",
    icon: <Zap className="w-5 h-5" />,
    questions: [
      {
        label: "Backup power capability?",
        options: [
          "None",
          "Batteries only",
          "Solar charger",
          "Generator",
          "Generator + solar + battery bank",
        ],
      },
      {
        label: "How long can you sustain critical electronics?",
        options: [
          "Hours",
          "1 day",
          "3 days",
          "1 week",
          "2+ weeks",
        ],
      },
    ],
  },
  {
    id: "shelter",
    title: "Shelter & Security",
    icon: <Home className="w-5 h-5" />,
    questions: [
      {
        label: "Home hardening level?",
        options: [
          "Standard doors/locks",
          "Reinforced locks",
          "Security system",
          "Hardened + supplies",
          "Full security + safe room",
        ],
      },
      {
        label: "Can you heat/cool without power?",
        options: [
          "No",
          "Fireplace only",
          "Fireplace + backup heat",
          "Multiple heating + cooling options",
          "Full off-grid capability",
        ],
      },
    ],
  },
  {
    id: "navigation",
    title: "Navigation & Mobility",
    icon: <Map className="w-5 h-5" />,
    questions: [
      {
        label: "Do you have physical maps?",
        options: [
          "No",
          "Phone only",
          "One road map",
          "Topo maps of area",
          "Topo maps + compass + skills",
        ],
      },
      {
        label: "Vehicle preparedness?",
        options: [
          "Often below 1/4 tank",
          "Usually half tank",
          "Always half tank + go bag in car",
          "Half tank + equipped vehicle",
          "Multiple vehicles + fuel storage",
        ],
      },
    ],
  },
  {
    id: "community",
    title: "Community & Planning",
    icon: <Users className="w-5 h-5" />,
    questions: [
      {
        label: "Do you know your neighbors?",
        options: [
          "No",
          "Wave occasionally",
          "Know names",
          "Active relationship",
          "Mutual aid agreement",
        ],
      },
      {
        label: "Written emergency plan?",
        options: [
          "None",
          "Mental plan",
          "Basic written",
          "Detailed written",
          "Detailed + practiced + family trained",
        ],
      },
    ],
  },
];

const STORAGE_KEY = "threat-assessment-progress";

const RATING_TIERS = [
  { min: 0, max: 20, label: "Critical — You are unprepared", color: "text-red-500", bg: "bg-red-500", border: "border-red-500", clockTime: "11:59 PM — Critical danger" },
  { min: 21, max: 35, label: "At Risk — Significant gaps", color: "text-orange-500", bg: "bg-orange-500", border: "border-orange-500", clockTime: "11:55 PM — Serious risk" },
  { min: 36, max: 50, label: "Developing — Good start, key gaps remain", color: "text-yellow-500", bg: "bg-yellow-500", border: "border-yellow-500", clockTime: "11:45 PM — Moderate risk" },
  { min: 51, max: 65, label: "Prepared — Solid foundation", color: "text-green-500", bg: "bg-green-500", border: "border-green-500", clockTime: "11:30 PM — Lower risk" },
  { min: 66, max: 80, label: "Fortress — Well above average", color: "text-atomic", bg: "bg-atomic", border: "border-atomic", clockTime: "11:00 PM — Well prepared" },
];

const RECOMMENDATIONS: Record<string, string[]> = {
  water: [
    "Store at least 1 gallon per person per day for 2 weeks minimum.",
    "Invest in a gravity-fed water filter like a Berkey or Sawyer system.",
    "Learn about local natural water sources and practice purification methods.",
  ],
  food: [
    "Build a 30-day supply of shelf-stable foods you actually eat (rotate stock).",
    "Start a small container garden, even on a balcony — herbs and greens are easy wins.",
    "Learn food preservation: canning, dehydrating, and vacuum sealing.",
  ],
  medical: [
    "Upgrade to a trauma-rated first aid kit with tourniquet and chest seals.",
    "Talk to your doctor about maintaining a 90-day supply of critical medications.",
    "Take a Stop the Bleed or Wilderness First Aid course.",
  ],
  communication: [
    "Get a hand-crank NOAA weather radio as your baseline.",
    "Create a written family communication plan with rally points and out-of-area contacts.",
    "Consider getting an amateur radio license — the Technician exam is straightforward.",
  ],
  power: [
    "Start with a quality solar power bank for charging phones and radios.",
    "Build a portable battery station (e.g., Jackery, EcoFlow) for essential devices.",
    "If budget allows, pair a generator with solar panels for redundancy.",
  ],
  shelter: [
    "Upgrade exterior door locks to Grade 1 deadbolts with 3-inch screws in strike plates.",
    "Stock a wood-burning heat source or at minimum a propane buddy heater (with ventilation).",
    "Designate a safe room and stock it with essentials for 72 hours.",
  ],
  navigation: [
    "Buy USGS topographic maps for your county and surrounding areas.",
    "Learn basic compass navigation — a $15 compass and a weekend of practice goes far.",
    "Keep your vehicle above half tank at all times and store a go bag in the trunk.",
  ],
  community: [
    "Introduce yourself to at least 5 nearest neighbors this month.",
    "Write a family emergency plan covering evacuation routes, communication, and rally points.",
    "Practice your plan quarterly with all household members.",
  ],
};

/* ─── Helpers ─── */

function getTier(total: number) {
  return RATING_TIERS.find((t) => total >= t.min && total <= t.max) ?? RATING_TIERS[0];
}

function categoryScore(answers: Answers, id: string): number {
  const a = answers[id];
  if (!a) return 0;
  return a[0] + a[1];
}

function totalScore(answers: Answers): number {
  return CATEGORIES.reduce((sum, cat) => sum + categoryScore(answers, cat.id), 0);
}

function barColor(score: number): string {
  if (score <= 3) return "bg-red-500";
  if (score <= 5) return "bg-orange-500";
  if (score <= 7) return "bg-yellow-500";
  if (score <= 9) return "bg-green-500";
  return "bg-atomic";
}

function loadProgress(): { step: number; answers: Answers } | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function saveProgress(step: number, answers: Answers) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, answers }));
  } catch {
    /* quota exceeded — ignore */
  }
}

function clearProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

/* ─── Component ─── */

export function ThreatAssessment() {
  const saved = useMemo(() => loadProgress(), []);
  const [step, setStep] = useState<number>(saved?.step ?? 0);
  const [answers, setAnswers] = useState<Answers>(saved?.answers ?? {});
  const [showResults, setShowResults] = useState(false);
  const [copied, setCopied] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  /* SEO */
  useEffect(() => {
    updateMetaTags({
      title: "Personal Threat Assessment Scorecard — How Prepared Are You? | DoomsdayClock.net",
      description:
        "Take the free 8-category survival preparedness quiz. Score your water, food, medical, communication, power, shelter, navigation, and community readiness. Get a personalized Doomsday Clock threat level and actionable recommendations.",
      path: "/vault/threat-assessment",
      newsKeywords:
        "threat assessment, preparedness quiz, survival scorecard, doomsday preparedness, emergency readiness quiz, how prepared am i",
      publishedTime: "2026-03-30T00:00:00Z",
      modifiedTime: "2026-03-30T00:00:00Z",
      section: "Preparedness",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "Quiz",
      name: "Personal Threat Assessment Scorecard",
      description:
        "An 8-category personal preparedness assessment covering water, food, medical, communication, power, shelter, navigation, and community readiness.",
      provider: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        url: "https://doomsdayclock.net",
      },
    };
    let script = document.querySelector('script[data-schema="threat-assessment"]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "threat-assessment");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      resetToDefaults();
      script?.remove();
    };
  }, []);

  /* Save on change */
  useEffect(() => {
    if (!showResults) saveProgress(step, answers);
  }, [step, answers, showResults]);

  /* Scroll to top on step change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, showResults]);

  const currentCategory = CATEGORIES[step];

  const handleAnswer = useCallback(
    (questionIndex: 0 | 1, value: number) => {
      setAnswers((prev) => {
        const existing = prev[currentCategory.id] ?? [0, 0];
        const updated: [number, number] = [...existing] as [number, number];
        updated[questionIndex] = value;
        return { ...prev, [currentCategory.id]: updated };
      });
    },
    [currentCategory],
  );

  const canProceed = answers[currentCategory?.id]?.[0] > 0 && answers[currentCategory?.id]?.[1] > 0;

  const navigateStep = useCallback(
    (direction: 1 | -1) => {
      setTransitioning(true);
      setTimeout(() => {
        if (direction === 1 && step === CATEGORIES.length - 1) {
          setShowResults(true);
        } else {
          setStep((s) => s + direction);
        }
        setTransitioning(false);
      }, 200);
    },
    [step],
  );

  const retake = useCallback(() => {
    clearProgress();
    setAnswers({});
    setStep(0);
    setShowResults(false);
  }, []);

  const generateShareText = useCallback(() => {
    const total = totalScore(answers);
    const tier = getTier(total);
    const lines = [
      `My Doomsday Clock Threat Assessment: ${total}/80`,
      `Rating: ${tier.label}`,
      `Personal Threat Level: ${tier.clockTime}`,
      "",
      "Category Scores:",
      ...CATEGORIES.map((c) => `  ${c.title}: ${categoryScore(answers, c.id)}/10`),
      "",
      "Take yours at doomsdayclock.net/vault/threat-assessment",
    ];
    return lines.join("\n");
  }, [answers]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(generateShareText()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [generateShareText]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  /* ─── Render: Results ─── */
  if (showResults) {
    const total = totalScore(answers);
    const tier = getTier(total);
    const pct = Math.round((total / 80) * 100);

    const categoryScores = CATEGORIES.map((c) => ({
      ...c,
      score: categoryScore(answers, c.id),
    })).sort((a, b) => a.score - b.score);

    const weakest = categoryScores.slice(0, 3);

    return (
      <div className="min-h-screen bg-zinc-900 pt-24 pb-16 print:bg-white print:text-black print:pt-4">
        <div className="container-wide max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8 print:text-zinc-600">
            <Link to="/" className="hover:text-white transition-colors print:text-black">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/vault" className="hover:text-white transition-colors print:text-black">The Vault</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-zinc-200 print:text-black">Threat Assessment</span>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 print:text-black">
            Your Threat Assessment Results
          </h1>
          <p className="text-zinc-400 mb-10 print:text-zinc-600">
            Personal preparedness scorecard based on 8 critical survival categories.
          </p>

          {/* Overall Score Card */}
          <div className="glass-card p-8 mb-8 text-center">
            <div className="mb-4">
              <span className="text-6xl md:text-7xl font-black tabular-nums text-white print:text-black">
                {total}
              </span>
              <span className="text-2xl text-zinc-400 print:text-zinc-600">/80</span>
            </div>

            {/* Score bar */}
            <div className="w-full max-w-md mx-auto h-4 bg-zinc-700 rounded-full overflow-hidden mb-4 print:bg-zinc-300">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${tier.bg}`}
                style={{ width: `${pct}%` }}
              />
            </div>

            <p className={`text-xl font-bold ${tier.color} mb-1`}>{tier.label}</p>
            <p className="text-zinc-400 text-sm print:text-zinc-600">{pct}% overall preparedness</p>
          </div>

          {/* Personal Threat Level Clock */}
          <div className="glass-card p-6 mb-8 flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${tier.border} border-2`}>
              <Clock className={`w-7 h-7 ${tier.color}`} />
            </div>
            <div>
              <p className="text-zinc-400 text-sm print:text-zinc-600">Your Doomsday Clock Personal Threat Level</p>
              <p className={`text-lg font-bold ${tier.color}`}>{tier.clockTime}</p>
            </div>
          </div>

          {/* Category Breakdown */}
          <h2 className="text-xl font-bold text-white mb-4 print:text-black">Category Breakdown</h2>
          <div className="grid gap-3 mb-8">
            {CATEGORIES.map((cat) => {
              const score = categoryScore(answers, cat.id);
              const width = (score / 10) * 100;
              return (
                <div key={cat.id} className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-white print:text-black">
                      {cat.icon}
                      <span className="font-medium">{cat.title}</span>
                    </div>
                    <span className="font-bold text-white tabular-nums print:text-black">
                      {score}<span className="text-zinc-500">/10</span>
                    </span>
                  </div>
                  <div className="w-full h-2.5 bg-zinc-700 rounded-full overflow-hidden print:bg-zinc-300">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${barColor(score)}`}
                      style={{ width: `${width}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Weakest Areas */}
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 print:text-black">
            <AlertTriangle className="w-5 h-5 text-doom" />
            Top 3 Areas to Improve
          </h2>
          <div className="space-y-4 mb-8">
            {weakest.map((cat, i) => (
              <div key={cat.id} className="glass-card p-5 border-l-4 border-doom">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-doom font-bold text-lg">#{i + 1}</span>
                  {cat.icon}
                  <h3 className="font-bold text-white print:text-black">
                    {cat.title} — <span className="text-doom">{cat.score}/10</span>
                  </h3>
                </div>
                <ul className="space-y-1.5 ml-8">
                  {RECOMMENDATIONS[cat.id].map((rec, j) => (
                    <li key={j} className="text-zinc-300 text-sm flex items-start gap-2 print:text-zinc-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Prioritized Action List */}
          <h2 className="text-xl font-bold text-white mb-4 print:text-black">Prioritized Action Plan</h2>
          <div className="glass-card p-5 mb-8">
            <ol className="space-y-3">
              {categoryScores.map((cat, i) => (
                <li key={cat.id} className="flex items-start gap-3 text-zinc-300 print:text-zinc-700">
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      i < 3 ? "bg-doom text-white" : "bg-zinc-700 text-zinc-300 print:bg-zinc-300 print:text-black"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-medium text-white print:text-black">{cat.title}</span>
                    <span className="text-zinc-500 ml-2">({cat.score}/10)</span>
                    {i < 3 && (
                      <p className="text-sm text-zinc-400 mt-0.5 print:text-zinc-600">
                        {RECOMMENDATIONS[cat.id][0]}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Vault CTA */}
          <div className="glass-card p-6 mb-8 border border-atomic/30 bg-atomic/5">
            <div className="flex items-start gap-4">
              <Lock className="w-8 h-8 text-atomic flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1 print:text-black">
                  Want a deeper analysis?
                </h3>
                <p className="text-zinc-300 text-sm mb-3 print:text-zinc-600">
                  Get the full Threat Assessment with personalized action plans, quarterly tracking,
                  and gear recommendations in The Vault.
                </p>
                <Link
                  to="/vault"
                  className="inline-flex items-center gap-2 bg-atomic hover:bg-atomic/80 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors print:hidden"
                >
                  <Shield className="w-4 h-4" />
                  Unlock The Vault
                </Link>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 print:hidden">
            <button
              onClick={retake}
              className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2.5 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Retake Assessment
            </button>
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2.5 rounded-lg transition-colors"
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copied!" : "Share Results"}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2.5 rounded-lg transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print Results
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Render: Quiz Steps ─── */
  const progress = ((step + 1) / CATEGORIES.length) * 100;
  const currentAnswers = answers[currentCategory.id] ?? [0, 0];

  return (
    <div className="min-h-screen bg-zinc-900 pt-24 pb-16">
      <div className="container-wide max-w-3xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/vault" className="hover:text-white transition-colors">The Vault</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-zinc-200">Threat Assessment</span>
        </nav>

        {/* Header (only on first step) */}
        {step === 0 && (
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Personal Threat Assessment Scorecard
            </h1>
            <p className="text-zinc-400 max-w-2xl">
              Rate your preparedness across 8 critical survival categories.
              Answer honestly — this assessment is for your eyes only and is stored locally on your device.
            </p>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-zinc-400 mb-2">
            <span>
              Category {step + 1} of {CATEGORIES.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-atomic rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Category pills */}
          <div className="flex gap-1.5 mt-3">
            {CATEGORIES.map((cat, i) => {
              const answered = answers[cat.id]?.[0] > 0 && answers[cat.id]?.[1] > 0;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setStep(i); }}
                  className={`flex-1 h-1.5 rounded-full transition-colors ${
                    i === step
                      ? "bg-atomic"
                      : answered
                        ? "bg-green-500/60"
                        : "bg-zinc-700"
                  }`}
                  title={cat.title}
                  aria-label={`Go to ${cat.title}`}
                />
              );
            })}
          </div>
        </div>

        {/* Question Card */}
        <div
          className={`glass-card p-6 md:p-8 transition-opacity duration-200 ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-atomic/20 flex items-center justify-center text-atomic">
              {currentCategory.icon}
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white">
              {currentCategory.title}
            </h2>
          </div>

          {/* Questions */}
          {currentCategory.questions.map((question, qIdx) => (
            <div key={qIdx} className={qIdx === 0 ? "mb-8" : ""}>
              <p className="text-white font-medium mb-3">
                {qIdx + 1}. {question.label}
              </p>
              <div className="space-y-2">
                {question.options.map((option, oIdx) => {
                  const value = oIdx + 1;
                  const selected = currentAnswers[qIdx as 0 | 1] === value;
                  return (
                    <label
                      key={oIdx}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all border ${
                        selected
                          ? "border-atomic bg-atomic/10 text-white"
                          : "border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q-${currentCategory.id}-${qIdx}`}
                        className="hidden sr-only"
                        checked={selected}
                        onChange={() => handleAnswer(qIdx as 0 | 1, value)}
                      />
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                          selected ? "border-atomic" : "border-zinc-500"
                        }`}
                      >
                        {selected && <div className="w-2.5 h-2.5 rounded-full bg-atomic" />}
                      </div>
                      <span className="flex-1 text-sm">{option}</span>
                      <span className="text-xs text-zinc-500 tabular-nums">{value}/5</span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => navigateStep(-1)}
            disabled={step === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors ${
              step === 0
                ? "text-zinc-600 cursor-not-allowed"
                : "bg-zinc-700 hover:bg-zinc-600 text-white"
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </button>

          <button
            onClick={() => navigateStep(1)}
            disabled={!canProceed}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors ${
              canProceed
                ? step === CATEGORIES.length - 1
                  ? "bg-doom hover:bg-doom/80 text-white"
                  : "bg-atomic hover:bg-atomic/80 text-white"
                : "bg-zinc-700 text-zinc-500 cursor-not-allowed"
            }`}
          >
            {step === CATEGORIES.length - 1 ? "View Results" : "Next"}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
