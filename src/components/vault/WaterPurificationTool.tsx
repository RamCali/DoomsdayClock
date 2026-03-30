import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Droplets,
  AlertTriangle,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Flame,
  Sun,
  Home,
  Info,
} from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

// ---------- Types ----------

type WaterSource =
  | "rainwater"
  | "deep-well"
  | "spring"
  | "stream"
  | "lake"
  | "stagnant-pond"
  | "urban-runoff"
  | "tap-stored";

type PurificationMethod =
  | "boiling"
  | "commercial-filter"
  | "bleach"
  | "tablets"
  | "iodine"
  | "none";

type RiskLevel = "low" | "moderate" | "high";

interface SourceOption {
  id: WaterSource;
  label: string;
  icon: React.ReactNode;
  baseRisk: RiskLevel;
}

interface MethodOption {
  id: PurificationMethod;
  label: string;
  description: string;
}

// ---------- Data ----------

const SOURCE_OPTIONS: SourceOption[] = [
  { id: "rainwater", label: "Rainwater", icon: <Droplets className="w-5 h-5" />, baseRisk: "low" },
  { id: "deep-well", label: "Deep Well", icon: <Shield className="w-5 h-5" />, baseRisk: "low" },
  { id: "spring", label: "Spring", icon: <Droplets className="w-5 h-5" />, baseRisk: "low" },
  { id: "stream", label: "Flowing Stream / River", icon: <Droplets className="w-5 h-5" />, baseRisk: "moderate" },
  { id: "lake", label: "Lake", icon: <Droplets className="w-5 h-5" />, baseRisk: "moderate" },
  { id: "stagnant-pond", label: "Stagnant Pond", icon: <AlertTriangle className="w-5 h-5" />, baseRisk: "high" },
  { id: "urban-runoff", label: "Urban Runoff", icon: <AlertTriangle className="w-5 h-5" />, baseRisk: "high" },
  { id: "tap-stored", label: "Tap Water (stored)", icon: <Home className="w-5 h-5" />, baseRisk: "low" },
];

const METHOD_OPTIONS: MethodOption[] = [
  { id: "boiling", label: "Fire / fuel for boiling", description: "Heat source available" },
  { id: "commercial-filter", label: "Commercial filter (Sawyer, LifeStraw, etc.)", description: "Portable or gravity filter" },
  { id: "bleach", label: "Unscented liquid bleach", description: "Regular household bleach" },
  { id: "tablets", label: "Water purification tablets", description: "Chlorine dioxide or similar" },
  { id: "iodine", label: "Iodine (2% tincture)", description: "Liquid iodine solution" },
  { id: "none", label: "None of the above", description: "No supplies available" },
];

const METHOD_INSTRUCTIONS: Record<PurificationMethod, { title: string; steps: string[]; warnings?: string[]; effectiveness: string }> = {
  boiling: {
    title: "Boiling — Gold Standard",
    steps: [
      "Bring water to a full rolling boil.",
      "Maintain the rolling boil for at least 1 minute.",
      "At elevations above 6,500 feet (2,000 m), boil for 3 minutes.",
      "Let water cool naturally — do not add ice.",
      "To improve flat taste, pour water back and forth between two clean containers.",
    ],
    effectiveness: "Kills all pathogens: bacteria, viruses, parasites, and cysts.",
  },
  "commercial-filter": {
    title: "Commercial Filter",
    steps: [
      "Follow your specific filter's instructions for priming and use.",
      "Ensure the filter is rated to at least 0.2 microns for bacteria removal.",
      "Replace filter cartridge per manufacturer's recommended lifespan.",
      "If water may contain sewage or viral contamination, filter FIRST, then follow up with chemical treatment (bleach or tablets).",
    ],
    warnings: [
      "Most portable filters do NOT remove viruses. If sewage contamination is suspected, combine filtration with chemical disinfection.",
    ],
    effectiveness: "Removes bacteria and parasites. Most do NOT remove viruses unless specifically rated.",
  },
  bleach: {
    title: "Bleach Disinfection",
    steps: [
      "Use regular unscented liquid household bleach.",
      "For 8.25% concentration (standard): add 6 drops per gallon of clear water.",
      "For 6% concentration (older formula): add 8 drops per gallon of clear water.",
      "For cloudy water: DOUBLE the dosage.",
      "Stir and let stand for 30 minutes.",
      "Water should have a slight chlorine smell after 30 minutes. If not, repeat the dose and wait another 15 minutes.",
    ],
    warnings: [
      "Only use regular unscented bleach — no additives, no 'splashless' formulas.",
      "Bleach loses potency over time. Check the manufacture date.",
    ],
    effectiveness: "Kills bacteria and most viruses. Less effective against Cryptosporidium and Giardia cysts.",
  },
  tablets: {
    title: "Water Purification Tablets",
    steps: [
      "Add 1 tablet per liter (quart) of water.",
      "For cloudy water, use 2 tablets per liter.",
      "Wait at least 30 minutes before drinking.",
      "For cold water (below 40°F / 4°C), wait 4 hours.",
      "Follow the specific instructions on your tablet packaging — formulations vary.",
    ],
    effectiveness: "Kills bacteria, viruses, and Giardia. Chlorine dioxide tablets also kill Cryptosporidium (with 4-hour wait).",
  },
  iodine: {
    title: "Iodine Treatment (2% Tincture)",
    steps: [
      "For clear water: add 5 drops per quart (liter).",
      "For cloudy water: add 10 drops per quart (liter).",
      "Mix thoroughly and let stand for 30 minutes.",
      "For very cold or very cloudy water, wait at least 60 minutes.",
    ],
    warnings: [
      "Do NOT use if pregnant or nursing.",
      "Do NOT use if you have thyroid conditions.",
      "Not recommended for long-term use (more than a few weeks).",
      "Some people are allergic to iodine.",
    ],
    effectiveness: "Kills bacteria and viruses. Less effective against Cryptosporidium.",
  },
  none: {
    title: "SODIS — Solar Disinfection (Emergency Method)",
    steps: [
      "Fill a clean, clear PET plastic bottle (check for recycling symbol #1 on the bottom).",
      "Water MUST be pre-filtered to be visually clear for SODIS to work.",
      "Remove the cap and squeeze the bottle to remove air, then recap.",
      "Place the bottle on a dark or reflective surface (e.g., metal roof) in direct sunlight.",
      "Full sun: leave for at least 6 hours.",
      "Overcast / partly cloudy: leave for 2 full days.",
      "If heavily overcast or raining, SODIS will not work — find another method.",
    ],
    warnings: [
      "This is a last-resort method — less reliable than any other option.",
      "Only works with clear water in clear PET bottles.",
      "Does NOT work with glass or colored plastic bottles.",
      "UV radiation diminishes at higher latitudes and during winter months.",
    ],
    effectiveness: "UV radiation kills most bacteria and viruses. Less effective against parasitic cysts. Reliability depends on sun intensity.",
  },
};

function getRiskLevel(source: WaterSource, method: PurificationMethod): RiskLevel {
  // Source risk baseline
  const sourceRiskMap: Record<WaterSource, number> = {
    "tap-stored": 0,
    "deep-well": 0,
    rainwater: 1,
    spring: 1,
    stream: 2,
    lake: 2,
    "stagnant-pond": 3,
    "urban-runoff": 3,
  };

  // Method effectiveness (lower = better)
  const methodRiskReduction: Record<PurificationMethod, number> = {
    boiling: 3,
    "commercial-filter": 2,
    bleach: 2,
    tablets: 2,
    iodine: 1,
    none: 0,
  };

  const sourceRisk = sourceRiskMap[source];
  const reduction = methodRiskReduction[method];
  const finalRisk = sourceRisk - reduction;

  if (finalRisk <= 0) return "low";
  if (finalRisk <= 1) return "moderate";
  return "high";
}

function getRiskColor(risk: RiskLevel): string {
  switch (risk) {
    case "low": return "text-green-400";
    case "moderate": return "text-yellow-400";
    case "high": return "text-doom";
  }
}

function getRiskBg(risk: RiskLevel): string {
  switch (risk) {
    case "low": return "bg-green-500/10 border-green-500/30";
    case "moderate": return "bg-yellow-500/10 border-yellow-500/30";
    case "high": return "bg-doom/10 border-doom/30";
  }
}

function getRiskIcon(risk: RiskLevel) {
  switch (risk) {
    case "low": return <ShieldCheck className="w-6 h-6 text-green-400" />;
    case "moderate": return <Shield className="w-6 h-6 text-yellow-400" />;
    case "high": return <ShieldAlert className="w-6 h-6 text-doom" />;
  }
}

function getRiskLabel(risk: RiskLevel): string {
  switch (risk) {
    case "low": return "Low Risk";
    case "moderate": return "Moderate Risk";
    case "high": return "High Risk — Exercise Extreme Caution";
  }
}

function getBestMethod(methods: PurificationMethod[]): PurificationMethod {
  const priority: PurificationMethod[] = ["boiling", "commercial-filter", "bleach", "tablets", "iodine", "none"];
  for (const m of priority) {
    if (methods.includes(m)) return m;
  }
  return "none";
}

// ---------- Sub-components ----------

function StepIndicator({ currentStep, totalSteps, completedSteps }: { currentStep: number; totalSteps: number; completedSteps: number[] }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isCompleted = completedSteps.includes(step);
        const isCurrent = step === currentStep;
        return (
          <div key={step} className="flex items-center gap-2">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                isCurrent
                  ? "bg-atomic text-white ring-2 ring-atomic/50 ring-offset-2 ring-offset-zinc-900"
                  : isCompleted
                  ? "bg-green-500 text-white"
                  : "bg-zinc-700 text-zinc-400"
              }`}
            >
              {isCompleted ? <Check className="w-4 h-4" /> : step}
            </div>
            {i < totalSteps - 1 && (
              <div className={`w-8 h-0.5 ${isCompleted ? "bg-green-500" : "bg-zinc-700"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function PreFiltrationGuide({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white">Pre-Filtration Required</h3>
      <p className="text-zinc-300">Your water is not visually clear. Before purification, you must remove sediment and particulates. Follow these steps in order:</p>

      <div className="space-y-4">
        <div className="glass-card p-4 border-l-4 border-atomic">
          <h4 className="font-semibold text-atomic mb-2">Step A: Settle</h4>
          <p className="text-zinc-300 text-sm">Let the water sit undisturbed in a container for at least 2 hours. Heavier particles will sink to the bottom. Carefully pour or ladle the clearer water off the top without disturbing the sediment.</p>
        </div>

        <div className="glass-card p-4 border-l-4 border-atomic">
          <h4 className="font-semibold text-atomic mb-2">Step B: Cloth Filter</h4>
          <p className="text-zinc-300 text-sm">Pour the settled water through a clean cloth (cotton t-shirt, bandana, or coffee filters work well). Fold the cloth over several times for better filtration. Repeat 2-3 times if water is still cloudy.</p>
        </div>

        <div className="glass-card p-4 border-l-4 border-atomic">
          <h4 className="font-semibold text-atomic mb-2">Step C: Improvised Sand Filter (Best Results)</h4>
          <p className="text-zinc-300 text-sm">Cut the bottom off a large plastic bottle. Invert it (cap end down, loosely capped with a small hole). Layer from bottom to top:</p>
          <ul className="text-zinc-300 text-sm mt-2 space-y-1 ml-4">
            <li className="flex items-start gap-2"><span className="text-atomic font-bold">1.</span> Small pebbles or gravel (2 inches)</li>
            <li className="flex items-start gap-2"><span className="text-atomic font-bold">2.</span> Coarse sand (3 inches)</li>
            <li className="flex items-start gap-2"><span className="text-atomic font-bold">3.</span> Fine sand (3 inches)</li>
            <li className="flex items-start gap-2"><span className="text-atomic font-bold">4.</span> Crushed charcoal from a hardwood fire (2 inches)</li>
            <li className="flex items-start gap-2"><span className="text-atomic font-bold">5.</span> Fine sand (2 inches)</li>
            <li className="flex items-start gap-2"><span className="text-atomic font-bold">6.</span> Gravel on top to prevent displacement (1 inch)</li>
          </ul>
          <p className="text-zinc-400 text-xs mt-3">Pour water in the top and collect filtered water from the bottom. Discard the first batch — it primes the filter. This removes sediment and some chemicals but does NOT kill pathogens. You must still purify after filtering.</p>
        </div>
      </div>

      <div className="glass-card p-4 bg-yellow-500/5 border border-yellow-500/20">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
          <p className="text-yellow-200 text-sm">Pre-filtration removes sediment only. It does <strong>NOT</strong> make water safe to drink. You must still purify the water in the next step.</p>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="w-full py-3 px-6 bg-atomic hover:bg-atomic/80 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        I've pre-filtered, continue <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

function ExpandableSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="glass-card border border-zinc-700/50 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-zinc-800/50 transition-colors"
      >
        <span className="text-white font-semibold">{title}</span>
        {open ? <ChevronUp className="w-5 h-5 text-zinc-400" /> : <ChevronDown className="w-5 h-5 text-zinc-400" />}
      </button>
      {open && <div className="px-4 pb-4 border-t border-zinc-700/50 pt-4">{children}</div>}
    </div>
  );
}

function FlowchartVisual() {
  const nodes = [
    { label: "Water Source", color: "border-atomic bg-atomic/10" },
    { label: "Is it clear?", color: "border-yellow-500 bg-yellow-500/10" },
    { label: "Pre-filter", color: "border-orange-500 bg-orange-500/10", optional: true },
    { label: "Choose Method", color: "border-atomic bg-atomic/10" },
    { label: "Purify", color: "border-green-500 bg-green-500/10" },
    { label: "Safe to Drink", color: "border-green-400 bg-green-400/10" },
  ];

  return (
    <div className="flex flex-col items-center gap-2 py-4">
      {nodes.map((node, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className={`px-6 py-3 rounded-lg border-2 ${node.color} text-white text-sm font-semibold text-center min-w-[180px]`}>
            {node.label}
            {node.optional && <span className="block text-xs font-normal text-zinc-400 mt-0.5">(if cloudy)</span>}
          </div>
          {i < nodes.length - 1 && (
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-zinc-600" />
              <ChevronDown className="w-4 h-4 text-zinc-500 -mt-1" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ---------- Main Component ----------

export function WaterPurificationTool() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSource, setSelectedSource] = useState<WaterSource | null>(null);
  const [waterClear, setWaterClear] = useState<boolean | null>(null);
  const [preFiltered, setPreFiltered] = useState(false);
  const [selectedMethods, setSelectedMethods] = useState<PurificationMethod[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    updateMetaTags({
      title: "Water Purification Decision Tree — Interactive Survival Tool | DoomsdayClock.net",
      description:
        "Use this interactive decision tree to find the best water purification method based on your source and available supplies. Step-by-step survival instructions for boiling, bleach, tablets, iodine, filters, and SODIS.",
      path: "/vault/water-purification-tool",
      newsKeywords:
        "water purification, survival water, emergency water treatment, how to purify water, boiling water, bleach water purification, SODIS, water filter",
      publishedTime: "2026-03-30T00:00:00Z",
      modifiedTime: "2026-03-30T00:00:00Z",
      section: "tools",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "How to Purify Water in an Emergency",
      description:
        "Interactive decision tree for choosing the right water purification method based on your water source and available supplies.",
      step: [
        { "@type": "HowToStep", name: "Identify your water source", text: "Determine where your water is coming from: rainwater, well, stream, lake, etc." },
        { "@type": "HowToStep", name: "Check water clarity", text: "Determine if the water is visually clear or cloudy." },
        { "@type": "HowToStep", name: "Pre-filter if needed", text: "If water is cloudy, settle, cloth filter, or build an improvised sand filter." },
        { "@type": "HowToStep", name: "Choose purification method", text: "Select from boiling, commercial filters, bleach, tablets, iodine, or SODIS." },
        { "@type": "HowToStep", name: "Purify and verify", text: "Follow exact dosage and timing instructions for your chosen method." },
      ],
    };

    const scriptEl = document.createElement("script");
    scriptEl.type = "application/ld+json";
    scriptEl.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptEl);

    return () => {
      resetToDefaults();
      scriptEl.remove();
    };
  }, []);

  const completedSteps = (() => {
    const s: number[] = [];
    if (selectedSource) s.push(1);
    if (waterClear !== null) s.push(2);
    if (waterClear === false && preFiltered) s.push(3);
    if (selectedMethods.length > 0 && showResults) s.push(4);
    return s;
  })();

  const totalSteps = waterClear === false ? 5 : 4;

  const handleSourceSelect = useCallback((source: WaterSource) => {
    setSelectedSource(source);
    setCurrentStep(2);
  }, []);

  const handleClaritySelect = useCallback((clear: boolean) => {
    setWaterClear(clear);
    if (clear) {
      setPreFiltered(true);
      setCurrentStep(waterClear === false ? 4 : 3);
    } else {
      setCurrentStep(3);
    }
  }, [waterClear]);

  const handlePreFilterDone = useCallback(() => {
    setPreFiltered(true);
    setCurrentStep(4);
  }, []);

  const handleMethodToggle = useCallback((method: PurificationMethod) => {
    setSelectedMethods((prev) => {
      if (method === "none") {
        return prev.includes("none") ? [] : ["none"];
      }
      const without = prev.filter((m) => m !== "none");
      if (without.includes(method)) {
        return without.filter((m) => m !== method);
      }
      return [...without, method];
    });
  }, []);

  const handleShowResults = useCallback(() => {
    setShowResults(true);
    const step = waterClear === false ? 5 : 4;
    setCurrentStep(step);
  }, [waterClear]);

  const handleGoBack = useCallback(() => {
    if (showResults) {
      setShowResults(false);
      setCurrentStep(waterClear === false ? 4 : 3);
      return;
    }
    if (currentStep === 4 && waterClear === false) {
      setPreFiltered(false);
      setCurrentStep(3);
      return;
    }
    if ((currentStep === 3 && waterClear === true) || (currentStep === 4 && waterClear === true)) {
      setSelectedMethods([]);
      setCurrentStep(waterClear === false ? 4 : 3);
      if (currentStep === 3) {
        setWaterClear(null);
        setCurrentStep(2);
      }
      return;
    }
    if (currentStep === 3 && waterClear === false) {
      setWaterClear(null);
      setPreFiltered(false);
      setCurrentStep(2);
      return;
    }
    if (currentStep === 2) {
      setSelectedSource(null);
      setWaterClear(null);
      setCurrentStep(1);
      return;
    }
  }, [currentStep, showResults, waterClear]);

  const handleReset = useCallback(() => {
    setCurrentStep(1);
    setSelectedSource(null);
    setWaterClear(null);
    setPreFiltered(false);
    setSelectedMethods([]);
    setShowResults(false);
  }, []);

  // Determine which step the method selection is
  const methodStep = waterClear === false ? 4 : 3;
  const resultsStep = waterClear === false ? 5 : 4;

  const bestMethod = selectedMethods.length > 0 ? getBestMethod(selectedMethods) : null;
  const riskLevel = selectedSource && bestMethod ? getRiskLevel(selectedSource, bestMethod) : null;

  return (
    <div className="min-h-screen bg-zinc-900 pt-20 pb-16">
      <div className="container-wide px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-8 flex-wrap">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/vault" className="hover:text-white transition-colors">The Vault</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-zinc-200">Water Purification Guide</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-atomic/10 rounded-lg">
              <Droplets className="w-7 h-7 text-atomic" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Water Purification Decision Tree</h1>
          </div>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Answer a few questions about your water source and available supplies. We'll recommend the best purification method with exact, field-tested instructions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Interactive Area */}
          <div className="lg:col-span-2 space-y-6">
            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} completedSteps={completedSteps} />

            {/* Step 1: Water Source */}
            {currentStep === 1 && (
              <div className="glass-card p-6 space-y-5">
                <h2 className="text-xl font-bold text-white">What is your water source?</h2>
                <p className="text-zinc-400 text-sm">Select the source that best describes where your water is coming from.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SOURCE_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSourceSelect(opt.id)}
                      className="flex items-center gap-3 p-4 rounded-lg border border-zinc-700 hover:border-atomic bg-zinc-800/50 hover:bg-atomic/5 transition-all text-left group"
                    >
                      <div className="p-2 rounded-lg bg-zinc-700/50 group-hover:bg-atomic/10 transition-colors text-zinc-400 group-hover:text-atomic">
                        {opt.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium">{opt.label}</div>
                        <div className={`text-xs mt-0.5 ${getRiskColor(opt.baseRisk)}`}>
                          Base risk: {opt.baseRisk}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Water Clarity */}
            {currentStep === 2 && (
              <div className="glass-card p-6 space-y-5">
                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <span>Source:</span>
                  <span className="text-atomic font-medium">{SOURCE_OPTIONS.find((s) => s.id === selectedSource)?.label}</span>
                </div>
                <h2 className="text-xl font-bold text-white">Is the water visibly clear?</h2>
                <p className="text-zinc-400 text-sm">Look at the water in a clear container. Can you see through it without noticeable cloudiness, particles, or color?</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    onClick={() => handleClaritySelect(true)}
                    className="flex items-center justify-center gap-3 p-5 rounded-lg border border-zinc-700 hover:border-green-500 bg-zinc-800/50 hover:bg-green-500/5 transition-all text-white font-semibold"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    Yes, it's clear
                  </button>
                  <button
                    onClick={() => handleClaritySelect(false)}
                    className="flex items-center justify-center gap-3 p-5 rounded-lg border border-zinc-700 hover:border-yellow-500 bg-zinc-800/50 hover:bg-yellow-500/5 transition-all text-white font-semibold"
                  >
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                    No, it's cloudy / murky
                  </button>
                </div>
                <button onClick={handleGoBack} className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors mt-2">
                  <ArrowLeft className="w-4 h-4" /> Go back
                </button>
              </div>
            )}

            {/* Step 3 (cloudy water): Pre-filtration */}
            {currentStep === 3 && waterClear === false && !preFiltered && (
              <div className="glass-card p-6">
                <div className="flex items-center gap-2 text-sm text-zinc-400 mb-4">
                  <span>Source:</span>
                  <span className="text-atomic font-medium">{SOURCE_OPTIONS.find((s) => s.id === selectedSource)?.label}</span>
                  <span className="mx-1">|</span>
                  <span>Clarity:</span>
                  <span className="text-yellow-400 font-medium">Cloudy</span>
                </div>
                <PreFiltrationGuide onContinue={handlePreFilterDone} />
                <button onClick={handleGoBack} className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors mt-4">
                  <ArrowLeft className="w-4 h-4" /> Go back
                </button>
              </div>
            )}

            {/* Method Selection Step */}
            {currentStep === methodStep && preFiltered && !showResults && (
              <div className="glass-card p-6 space-y-5">
                <div className="flex items-center gap-2 text-sm text-zinc-400 flex-wrap">
                  <span>Source:</span>
                  <span className="text-atomic font-medium">{SOURCE_OPTIONS.find((s) => s.id === selectedSource)?.label}</span>
                  <span className="mx-1">|</span>
                  <span>Clarity:</span>
                  <span className={`font-medium ${waterClear ? "text-green-400" : "text-yellow-400"}`}>
                    {waterClear ? "Clear" : "Pre-filtered"}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-white">What purification methods do you have available?</h2>
                <p className="text-zinc-400 text-sm">Select all that apply. We'll recommend the most effective option.</p>
                <div className="space-y-3">
                  {METHOD_OPTIONS.map((opt) => {
                    const isSelected = selectedMethods.includes(opt.id);
                    const isDisabled = opt.id !== "none" && selectedMethods.includes("none");
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleMethodToggle(opt.id)}
                        disabled={isDisabled}
                        className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-all text-left ${
                          isSelected
                            ? "border-atomic bg-atomic/10"
                            : isDisabled
                            ? "border-zinc-800 bg-zinc-800/30 opacity-50 cursor-not-allowed"
                            : "border-zinc-700 bg-zinc-800/50 hover:border-zinc-500"
                        }`}
                      >
                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? "bg-atomic border-atomic" : "border-zinc-500"
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <div>
                          <div className="text-white font-medium">{opt.label}</div>
                          <div className="text-zinc-500 text-xs mt-0.5">{opt.description}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center gap-4 pt-2">
                  <button onClick={handleGoBack} className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Go back
                  </button>
                  <button
                    onClick={handleShowResults}
                    disabled={selectedMethods.length === 0}
                    className={`flex-1 py-3 px-6 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 ${
                      selectedMethods.length > 0
                        ? "bg-atomic hover:bg-atomic/80 text-white"
                        : "bg-zinc-700 text-zinc-500 cursor-not-allowed"
                    }`}
                  >
                    Show Recommendation <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Results */}
            {showResults && bestMethod && riskLevel && (
              <div className="space-y-6">
                {/* Risk Assessment */}
                <div className={`rounded-xl border p-5 ${getRiskBg(riskLevel)}`}>
                  <div className="flex items-center gap-3 mb-2">
                    {getRiskIcon(riskLevel)}
                    <h3 className={`text-lg font-bold ${getRiskColor(riskLevel)}`}>
                      {getRiskLabel(riskLevel)}
                    </h3>
                  </div>
                  <p className="text-zinc-300 text-sm">
                    Based on <span className="text-white font-medium">{SOURCE_OPTIONS.find((s) => s.id === selectedSource)?.label}</span> water
                    purified via <span className="text-white font-medium">{METHOD_INSTRUCTIONS[bestMethod].title.split("—")[0].trim()}</span>.
                    {riskLevel === "high" && " Consider finding a cleaner water source or additional purification methods if possible."}
                    {riskLevel === "moderate" && " This combination should be adequate for short-term survival. Monitor for symptoms of waterborne illness."}
                    {riskLevel === "low" && " This is a reliable combination. Follow the instructions carefully for best results."}
                  </p>
                </div>

                {/* Recommended Method */}
                <div className="glass-card p-6 border-l-4 border-atomic space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wider text-atomic font-semibold">Recommended Method</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{METHOD_INSTRUCTIONS[bestMethod].title}</h3>
                  <p className="text-zinc-400 text-sm">{METHOD_INSTRUCTIONS[bestMethod].effectiveness}</p>

                  <div className="space-y-3 mt-4">
                    {METHOD_INSTRUCTIONS[bestMethod].steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-atomic/20 text-atomic flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </div>
                        <p className="text-zinc-200 text-sm">{step}</p>
                      </div>
                    ))}
                  </div>

                  {METHOD_INSTRUCTIONS[bestMethod].warnings && (
                    <div className="mt-4 p-4 rounded-lg bg-doom/5 border border-doom/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-doom" />
                        <span className="text-doom font-semibold text-sm">Warnings</span>
                      </div>
                      <ul className="space-y-1">
                        {METHOD_INSTRUCTIONS[bestMethod].warnings!.map((w, i) => (
                          <li key={i} className="text-zinc-300 text-sm flex items-start gap-2">
                            <span className="text-doom mt-1">-</span> {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Other available methods */}
                {selectedMethods.filter((m) => m !== bestMethod && m !== "none").length > 0 && (
                  <div className="glass-card p-6 space-y-4">
                    <h3 className="text-lg font-bold text-white">Other Available Methods</h3>
                    <p className="text-zinc-400 text-sm">You also have access to these methods. They can serve as backups or be combined for additional safety.</p>
                    <div className="space-y-3">
                      {selectedMethods
                        .filter((m) => m !== bestMethod && m !== "none")
                        .map((m) => (
                          <ExpandableSection key={m} title={METHOD_INSTRUCTIONS[m].title}>
                            <div className="space-y-3">
                              {METHOD_INSTRUCTIONS[m].steps.map((step, i) => (
                                <div key={i} className="flex items-start gap-3">
                                  <div className="w-5 h-5 rounded-full bg-zinc-700 text-zinc-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                    {i + 1}
                                  </div>
                                  <p className="text-zinc-300 text-sm">{step}</p>
                                </div>
                              ))}
                              {METHOD_INSTRUCTIONS[m].warnings && (
                                <div className="p-3 rounded-lg bg-doom/5 border border-doom/20 mt-2">
                                  {METHOD_INSTRUCTIONS[m].warnings!.map((w, i) => (
                                    <p key={i} className="text-zinc-400 text-xs flex items-start gap-2">
                                      <AlertTriangle className="w-3 h-3 text-doom mt-0.5 shrink-0" /> {w}
                                    </p>
                                  ))}
                                </div>
                              )}
                            </div>
                          </ExpandableSection>
                        ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={handleGoBack} className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Change Methods
                  </button>
                  <button onClick={handleReset} className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-colors">
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Flowchart */}
            <div className="glass-card p-5">
              <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                <Info className="w-4 h-4 text-atomic" />
                Purification Process
              </h3>
              <FlowchartVisual />
            </div>

            {/* Sand Filter Build Guide */}
            <ExpandableSection title="Sand Filter Build Guide">
              <div className="space-y-4">
                <p className="text-zinc-400 text-sm">Build an effective improvised filter from common materials. This removes sediment and some contaminants but does not kill pathogens.</p>

                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Materials Needed:</h4>
                  <ul className="text-zinc-300 text-sm space-y-1">
                    <li className="flex items-start gap-2"><Check className="w-3 h-3 text-atomic mt-1 shrink-0" /> Large plastic bottle (2-liter or bigger)</li>
                    <li className="flex items-start gap-2"><Check className="w-3 h-3 text-atomic mt-1 shrink-0" /> Gravel or small pebbles</li>
                    <li className="flex items-start gap-2"><Check className="w-3 h-3 text-atomic mt-1 shrink-0" /> Coarse sand</li>
                    <li className="flex items-start gap-2"><Check className="w-3 h-3 text-atomic mt-1 shrink-0" /> Fine sand</li>
                    <li className="flex items-start gap-2"><Check className="w-3 h-3 text-atomic mt-1 shrink-0" /> Crushed charcoal (from hardwood fire)</li>
                    <li className="flex items-start gap-2"><Check className="w-3 h-3 text-atomic mt-1 shrink-0" /> Cloth or cotton (for the neck)</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-white font-semibold text-sm">Assembly (bottom to top):</h4>
                  <div className="relative">
                    {/* Visual filter diagram */}
                    <div className="border border-zinc-600 rounded-lg overflow-hidden">
                      {[
                        { label: "Gravel cap layer", color: "bg-zinc-600", height: "h-6" },
                        { label: "Fine sand", color: "bg-amber-800/60", height: "h-10" },
                        { label: "Crushed charcoal", color: "bg-zinc-800", height: "h-8" },
                        { label: "Fine sand", color: "bg-amber-800/60", height: "h-10" },
                        { label: "Coarse sand", color: "bg-amber-700/50", height: "h-10" },
                        { label: "Gravel base", color: "bg-zinc-600", height: "h-8" },
                      ].map((layer, i) => (
                        <div key={i} className={`${layer.color} ${layer.height} flex items-center justify-center border-b border-zinc-700/50 last:border-0`}>
                          <span className="text-xs text-zinc-200 font-medium">{layer.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center mt-2">
                      <div className="flex flex-col items-center">
                        <ChevronDown className="w-4 h-4 text-atomic" />
                        <span className="text-xs text-atomic font-medium">Clean water out</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
                  <p className="text-yellow-200 text-xs flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" />
                    Discard the first 2-3 batches of water — they prime the filter. This removes sediment only. Always purify after filtering.
                  </p>
                </div>
              </div>
            </ExpandableSection>

            {/* Water Storage Tips */}
            <ExpandableSection title="Water Storage Tips">
              <div className="space-y-3">
                <ul className="text-zinc-300 text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <Droplets className="w-4 h-4 text-atomic mt-0.5 shrink-0" />
                    Store 1 gallon per person per day, minimum 3-day supply (2 weeks recommended).
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplets className="w-4 h-4 text-atomic mt-0.5 shrink-0" />
                    Use food-grade containers. Never use containers that held chemicals.
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplets className="w-4 h-4 text-atomic mt-0.5 shrink-0" />
                    Add 1/8 teaspoon (8 drops) of unscented bleach per gallon for long-term storage.
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplets className="w-4 h-4 text-atomic mt-0.5 shrink-0" />
                    Store in a cool, dark place. Replace every 6 months if not chemically treated.
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplets className="w-4 h-4 text-atomic mt-0.5 shrink-0" />
                    Label containers with the date filled.
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplets className="w-4 h-4 text-atomic mt-0.5 shrink-0" />
                    Commercially bottled water (sealed) is safe indefinitely — ignore the "expiration" date.
                  </li>
                </ul>
              </div>
            </ExpandableSection>

            {/* Hidden Water Sources */}
            <ExpandableSection title="Hidden Water Sources in Your Home">
              <div className="space-y-3">
                <p className="text-zinc-400 text-sm">In an emergency, there are several water sources inside your home most people forget about:</p>
                <ul className="text-zinc-300 text-sm space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded bg-atomic/10 shrink-0 mt-0.5">
                      <Flame className="w-3 h-3 text-atomic" />
                    </div>
                    <div>
                      <span className="text-white font-medium">Water Heater Tank</span>
                      <p className="text-zinc-400 text-xs mt-0.5">30-80 gallons. Turn off power/gas first. Open the drain valve at the bottom. Let air in by opening a hot water faucet upstairs. Water may contain sediment — filter before drinking.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded bg-atomic/10 shrink-0 mt-0.5">
                      <Home className="w-3 h-3 text-atomic" />
                    </div>
                    <div>
                      <span className="text-white font-medium">Toilet Tanks (NOT bowls)</span>
                      <p className="text-zinc-400 text-xs mt-0.5">The tank on the back of the toilet holds clean water — typically 1.5-3 gallons. Safe if no chemical cleaners (blue tablets, etc.) have been used. Do NOT use water from the bowl.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded bg-atomic/10 shrink-0 mt-0.5">
                      <Droplets className="w-3 h-3 text-atomic" />
                    </div>
                    <div>
                      <span className="text-white font-medium">Pipe Drainage</span>
                      <p className="text-zinc-400 text-xs mt-0.5">Shut off the main water valve to preserve what's in your pipes. Open the highest faucet in the house to let air in, then collect water from the lowest faucet.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="p-1.5 rounded bg-atomic/10 shrink-0 mt-0.5">
                      <Sun className="w-3 h-3 text-atomic" />
                    </div>
                    <div>
                      <span className="text-white font-medium">Ice Cubes & Frozen Food</span>
                      <p className="text-zinc-400 text-xs mt-0.5">Melt ice trays and frozen vegetables/fruits. The liquid from canned fruits and vegetables is also drinkable.</p>
                    </div>
                  </li>
                </ul>
                <div className="p-3 bg-doom/5 border border-doom/20 rounded-lg mt-2">
                  <p className="text-zinc-300 text-xs flex items-start gap-2">
                    <AlertTriangle className="w-3 h-3 text-doom mt-0.5 shrink-0" />
                    NEVER drink water from swimming pools, hot tubs, radiators, or waterbeds. The chemicals used are toxic.
                  </p>
                </div>
              </div>
            </ExpandableSection>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 glass-card p-8 text-center border border-atomic/20 bg-gradient-to-b from-atomic/5 to-transparent">
          <Droplets className="w-10 h-10 text-atomic mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Get the Full Water Purification Matrix</h2>
          <p className="text-zinc-400 max-w-lg mx-auto mb-6">
            Download printable field cards with all purification methods, dosage tables, and risk assessments. Available exclusively in The Vault.
          </p>
          <Link
            to="/vault"
            className="inline-flex items-center gap-2 py-3 px-8 bg-atomic hover:bg-atomic/80 text-white font-semibold rounded-lg transition-colors"
          >
            Access The Vault <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
