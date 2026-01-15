import { useState, useRef } from "react";
import { cn } from "../lib/utils";
import { currentTime } from "../data/clockHistory";
import {
  Radiation,
  Leaf,
  Shield,
  Zap,
  Globe,
  Bug,
  Flame,
  Wind,
  RotateCcw,
  ChevronRight,
} from "lucide-react";

interface Scenario {
  id: string;
  title: string;
  description: string;
  impact: number; // negative = closer to midnight, positive = further
  impactLabel: string;
  icon: React.ElementType;
  category: "danger" | "hope";
}

const scenarios: Scenario[] = [
  // Danger scenarios
  {
    id: "nuclear-war",
    title: "Nuclear War",
    description: "Direct nuclear exchange between major powers",
    impact: -1.5, // Would hit midnight
    impactLabel: "MIDNIGHT",
    icon: Radiation,
    category: "danger",
  },
  {
    id: "nuclear-escalation",
    title: "Nuclear Escalation",
    description: "Tactical nuclear weapon used in regional conflict",
    impact: -0.5,
    impactLabel: "-30 seconds",
    icon: Flame,
    category: "danger",
  },
  {
    id: "climate-tipping",
    title: "Climate Tipping Point",
    description: "Major climate tipping point crossed (e.g., ice sheet collapse)",
    impact: -0.33,
    impactLabel: "-20 seconds",
    icon: Globe,
    category: "danger",
  },
  {
    id: "bioweapon",
    title: "Bioweapon Attack",
    description: "AI-designed pathogen released accidentally or deliberately",
    impact: -0.5,
    impactLabel: "-30 seconds",
    icon: Bug,
    category: "danger",
  },
  {
    id: "cyber-nuclear",
    title: "Cyber Attack on Nukes",
    description: "Major cyber attack compromises nuclear command systems",
    impact: -0.33,
    impactLabel: "-20 seconds",
    icon: Zap,
    category: "danger",
  },
  // Hope scenarios
  {
    id: "disarmament",
    title: "Nuclear Disarmament",
    description: "Major powers agree to eliminate nuclear arsenals",
    impact: 5,
    impactLabel: "+5 minutes",
    icon: Shield,
    category: "hope",
  },
  {
    id: "climate-action",
    title: "Global Climate Action",
    description: "World achieves net-zero emissions ahead of schedule",
    impact: 3,
    impactLabel: "+3 minutes",
    icon: Leaf,
    category: "hope",
  },
  {
    id: "renewable-transition",
    title: "Renewable Energy Revolution",
    description: "Clean energy becomes cheaper than fossil fuels globally",
    impact: 2,
    impactLabel: "+2 minutes",
    icon: Wind,
    category: "hope",
  },
];

export function WhatIfScenarios() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const clockRef = useRef<HTMLDivElement>(null);

  // Current time: 90 seconds = 1.5 minutes
  const baseMinutes = currentTime.seconds / 60;

  // Calculate new time based on selected scenario
  const newMinutes = selectedScenario
    ? Math.max(0, Math.min(17, baseMinutes + selectedScenario.impact))
    : baseMinutes;

  // Clock hand angle calculation
  const handAngle = -newMinutes * 6;

  const handleScenarioClick = (scenario: Scenario) => {
    if (selectedScenario?.id === scenario.id) {
      setSelectedScenario(null);
    } else {
      setIsAnimating(true);
      setSelectedScenario(scenario);
      setTimeout(() => setIsAnimating(false), 600);

      // Scroll clock into view on mobile
      if (clockRef.current && window.innerWidth < 1024) {
        clockRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  const handleReset = () => {
    setSelectedScenario(null);
  };

  const formatTime = (minutes: number) => {
    if (minutes <= 0) return "MIDNIGHT";
    if (minutes < 2) return `${Math.round(minutes * 60)} seconds`;
    return `${Math.round(minutes)} minutes`;
  };

  return (
    <section className="py-12 sm:py-16" id="what-if">
      <div className="container-wide">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            <span className="text-doom">What If</span> Scenarios
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Explore hypothetical events and see how they might affect the Doomsday Clock.
            Click a scenario to visualize its potential impact.
          </p>
        </div>

        {/* Clock at top - always visible */}
        <div
          ref={clockRef}
          className={cn(
            "doom-card p-6 sm:p-8 mb-8 transition-all duration-500",
            selectedScenario?.category === "hope" && "border-green/30",
            newMinutes <= 0 && "border-doom glow-doom"
          )}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Clock */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0">
              {/* Glow effect */}
              <div
                className={cn(
                  "absolute inset-0 rounded-full blur-2xl transition-all duration-500",
                  newMinutes <= 0 && "animate-pulse"
                )}
                style={{
                  background:
                    newMinutes <= 0
                      ? "radial-gradient(circle, rgba(234, 56, 76, 0.6) 0%, transparent 70%)"
                      : selectedScenario?.category === "hope"
                      ? "radial-gradient(circle, rgba(76, 175, 80, 0.3) 0%, transparent 70%)"
                      : `radial-gradient(circle, rgba(234, 56, 76, ${0.2 + (1 - newMinutes / 17) * 0.3}) 0%, transparent 70%)`,
                }}
              />

              {/* Clock face */}
              <div
                className={cn(
                  "absolute inset-0 rounded-full bg-black/80 backdrop-blur-lg border-4 shadow-2xl transition-colors duration-500",
                  newMinutes <= 0
                    ? "border-doom glow-doom"
                    : selectedScenario?.category === "hope"
                    ? "border-green/50"
                    : "border-doom/50"
                )}
              >
                {/* Hour markers */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180);
                  const isNoon = i === 0;
                  const radius = 42;
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);

                  return (
                    <div
                      key={i}
                      className={cn(
                        "absolute w-0.5 h-2.5 -translate-x-1/2 -translate-y-1/2",
                        isNoon ? "bg-doom h-3 w-1 glow-doom" : "bg-white/40"
                      )}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                      }}
                    />
                  );
                })}

                {/* 12 label */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2">
                  <span className="text-doom font-bold text-xs font-mono">12</span>
                </div>

                {/* Center dot */}
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 w-2.5 h-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full z-20 transition-colors duration-500",
                    selectedScenario?.category === "hope"
                      ? "bg-green glow-green"
                      : "bg-doom glow-doom"
                  )}
                />

                {/* Minute hand */}
                <div
                  className={cn(
                    "absolute top-1/2 left-1/2 origin-bottom z-10 transition-transform duration-700",
                    isAnimating && "ease-out"
                  )}
                  style={{
                    width: "3px",
                    height: "35%",
                    marginLeft: "-1.5px",
                    marginTop: "-35%",
                    transform: `rotate(${handAngle}deg)`,
                  }}
                >
                  <div
                    className={cn(
                      "w-full h-full rounded-full transition-all duration-500",
                      selectedScenario?.category === "hope"
                        ? "bg-gradient-to-t from-green via-green to-green"
                        : "bg-gradient-to-t from-doom via-doom to-doom-light"
                    )}
                    style={{
                      boxShadow:
                        selectedScenario?.category === "hope"
                          ? "0 0 15px rgba(76, 175, 80, 0.8)"
                          : "0 0 15px rgba(234, 56, 76, 0.8)",
                    }}
                  />
                </div>

                {/* Midnight label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Midnight
                  </span>
                </div>
              </div>
            </div>

            {/* Time display and scenario info */}
            <div className="text-center md:text-left space-y-3 min-w-[200px]">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {selectedScenario ? "Hypothetical Time" : "Current Time"}
                </p>
                <p
                  className={cn(
                    "text-4xl sm:text-5xl font-bold font-mono transition-colors duration-500",
                    newMinutes <= 0
                      ? "text-doom animate-pulse"
                      : selectedScenario?.category === "hope"
                      ? "text-green"
                      : "text-doom"
                  )}
                >
                  {formatTime(newMinutes)}
                </p>
                <p className="text-sm text-muted-foreground">to midnight</p>
              </div>

              {selectedScenario ? (
                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <selectedScenario.icon
                      className={cn(
                        "w-4 h-4",
                        selectedScenario.category === "hope" ? "text-green" : "text-doom"
                      )}
                    />
                    <h4 className="font-semibold text-foreground">
                      {selectedScenario.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {selectedScenario.description}
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-xs bg-white/10 hover:bg-white/20 rounded-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" />
                  Select a scenario below
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Scenarios grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Danger scenarios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-doom mb-4 flex items-center gap-2">
              <Radiation className="w-4 h-4" />
              Threat Scenarios
            </h3>
            <div className="grid gap-3">
              {scenarios
                .filter((s) => s.category === "danger")
                .map((scenario) => {
                  const Icon = scenario.icon;
                  const isSelected = selectedScenario?.id === scenario.id;
                  return (
                    <button
                      key={scenario.id}
                      onClick={() => handleScenarioClick(scenario)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all duration-300",
                        isSelected
                          ? "bg-doom/20 border-doom/50 shadow-lg scale-[1.02]"
                          : "bg-black/30 border-white/10 hover:bg-black/50 hover:border-doom/30"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "p-2 rounded-lg transition-colors",
                            isSelected ? "bg-doom/30" : "bg-doom/10"
                          )}
                        >
                          <Icon className="w-5 h-5 text-doom" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-semibold text-foreground">
                              {scenario.title}
                            </h4>
                            <span
                              className={cn(
                                "text-xs font-mono font-bold whitespace-nowrap px-2 py-0.5 rounded",
                                isSelected
                                  ? "bg-doom text-white"
                                  : "text-doom"
                              )}
                            >
                              {scenario.impactLabel}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {scenario.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>

          {/* Hope scenarios */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Hope Scenarios
            </h3>
            <div className="grid gap-3">
              {scenarios
                .filter((s) => s.category === "hope")
                .map((scenario) => {
                  const Icon = scenario.icon;
                  const isSelected = selectedScenario?.id === scenario.id;
                  return (
                    <button
                      key={scenario.id}
                      onClick={() => handleScenarioClick(scenario)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all duration-300",
                        isSelected
                          ? "bg-green/20 border-green/50 shadow-lg scale-[1.02]"
                          : "bg-black/30 border-white/10 hover:bg-black/50 hover:border-green/30"
                      )}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={cn(
                            "p-2 rounded-lg transition-colors",
                            isSelected ? "bg-green/30" : "bg-green/10"
                          )}
                        >
                          <Icon className="w-5 h-5 text-green" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="font-semibold text-foreground">
                              {scenario.title}
                            </h4>
                            <span
                              className={cn(
                                "text-xs font-mono font-bold whitespace-nowrap px-2 py-0.5 rounded",
                                isSelected
                                  ? "bg-green text-white"
                                  : "text-green"
                              )}
                            >
                              {scenario.impactLabel}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {scenario.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-muted-foreground text-center">
          These are hypothetical scenarios for educational purposes.
          Actual clock changes are determined by the Bulletin of the Atomic Scientists.
        </p>
      </div>
    </section>
  );
}
