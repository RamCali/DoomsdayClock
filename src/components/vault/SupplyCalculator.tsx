import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Lock,
  Calculator,
  Plus,
  Trash2,
  Users,
  Package,
  BarChart3,
  AlertTriangle,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

/* ------------------------------------------------------------------ */
/*  Types & Constants                                                 */
/* ------------------------------------------------------------------ */

type AgeCategory =
  | "adult-male"
  | "adult-female"
  | "child-6-12"
  | "child-1-5"
  | "elderly-65"
  | "pregnant-nursing";

type ActivityLevel = "active" | "sedentary";

interface Person {
  id: string;
  name: string;
  ageCategory: AgeCategory;
  activityLevel: ActivityLevel;
}

interface FoodItem {
  id: string;
  name: string;
  unit: string;
  caloriesPerUnit: number;
  quantity: number;
  isCustom?: boolean;
}

const AGE_LABELS: Record<AgeCategory, string> = {
  "adult-male": "Adult Male",
  "adult-female": "Adult Female",
  "child-6-12": "Child 6-12",
  "child-1-5": "Child 1-5",
  "elderly-65": "Elderly 65+",
  "pregnant-nursing": "Pregnant/Nursing",
};

const CALORIE_TABLE: Record<AgeCategory, Record<ActivityLevel, number>> = {
  "adult-male": { active: 2200, sedentary: 1600 },
  "adult-female": { active: 1800, sedentary: 1400 },
  "child-6-12": { active: 1600, sedentary: 1200 },
  "child-1-5": { active: 1200, sedentary: 1000 },
  "elderly-65": { active: 1600, sedentary: 1200 },
  "pregnant-nursing": { active: 2200, sedentary: 1800 },
};

const DEFAULT_FOODS: Omit<FoodItem, "id">[] = [
  { name: "White Rice", unit: "lb", caloriesPerUnit: 1650, quantity: 0 },
  { name: "Dried Beans", unit: "lb", caloriesPerUnit: 1500, quantity: 0 },
  { name: "Rolled Oats", unit: "lb", caloriesPerUnit: 1750, quantity: 0 },
  { name: "Peanut Butter", unit: "16oz jar", caloriesPerUnit: 2600, quantity: 0 },
  { name: "Honey", unit: "lb", caloriesPerUnit: 1380, quantity: 0 },
  { name: "Canned Tuna", unit: "5oz can", caloriesPerUnit: 200, quantity: 0 },
  { name: "Canned Vegetables", unit: "15oz can", caloriesPerUnit: 150, quantity: 0 },
  { name: "Canned Fruit", unit: "15oz can", caloriesPerUnit: 275, quantity: 0 },
  { name: "Pasta", unit: "lb", caloriesPerUnit: 1680, quantity: 0 },
  { name: "Powdered Milk", unit: "lb", caloriesPerUnit: 1600, quantity: 0 },
  { name: "Sugar", unit: "lb", caloriesPerUnit: 1725, quantity: 0 },
  { name: "Cooking Oil", unit: "cup", caloriesPerUnit: 1900, quantity: 0 },
  { name: "Freeze-Dried Meals", unit: "serving", caloriesPerUnit: 350, quantity: 0 },
];

let nextId = 1;
function uid() {
  return `id-${Date.now()}-${nextId++}`;
}

function getCalories(person: Person): number {
  return CALORIE_TABLE[person.ageCategory][person.activityLevel];
}

/* ------------------------------------------------------------------ */
/*  Animated Counter                                                  */
/* ------------------------------------------------------------------ */

function AnimatedNumber({ value, duration = 600 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const start = display;
    const diff = value - start;
    if (diff === 0) return;
    const startTime = performance.now();

    let raf: number;
    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(start + diff * eased));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  return <>{display.toLocaleString()}</>;
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export function SupplyCalculator() {
  /* --- SEO --- */
  useEffect(() => {
    updateMetaTags({
      title: "Supply Runway Calculator - How Long Will Your Food Last? | Doomsday Clock",
      description:
        "Free interactive survival supply calculator. Enter your household and food inventory to see exactly how many days your emergency supplies will last. Plan smarter, survive longer.",
      path: "/vault/supply-calculator",
      newsKeywords:
        "survival supply calculator, emergency food calculator, how long will my food last, doomsday prepper calculator, food storage calculator, emergency preparedness tool",
    });
    return () => resetToDefaults();
  }, []);

  /* --- People state --- */
  const [people, setPeople] = useState<Person[]>([
    { id: uid(), name: "Person 1", ageCategory: "adult-male", activityLevel: "active" },
  ]);

  /* --- Food state --- */
  const [foods, setFoods] = useState<FoodItem[]>(
    DEFAULT_FOODS.map((f) => ({ ...f, id: uid() }))
  );

  /* --- Custom food form --- */
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customName, setCustomName] = useState("");
  const [customUnit, setCustomUnit] = useState("");
  const [customCalories, setCustomCalories] = useState("");
  const [customQuantity, setCustomQuantity] = useState("");

  /* --- Derived values --- */
  const dailyCaloriesPerPerson = useMemo(
    () => people.map((p) => ({ ...p, calories: getCalories(p) })),
    [people]
  );
  const totalDailyCalories = useMemo(
    () => dailyCaloriesPerPerson.reduce((sum, p) => sum + p.calories, 0),
    [dailyCaloriesPerPerson]
  );
  const totalStoredCalories = useMemo(
    () => foods.reduce((sum, f) => sum + f.quantity * f.caloriesPerUnit, 0),
    [foods]
  );
  const daysOfSurvival = useMemo(
    () => (totalDailyCalories > 0 ? totalStoredCalories / totalDailyCalories : 0),
    [totalStoredCalories, totalDailyCalories]
  );

  /* --- People handlers --- */
  function addPerson() {
    setPeople((prev) => [
      ...prev,
      {
        id: uid(),
        name: `Person ${prev.length + 1}`,
        ageCategory: "adult-male",
        activityLevel: "active",
      },
    ]);
  }
  function removePerson(id: string) {
    setPeople((prev) => prev.filter((p) => p.id !== id));
  }
  function updatePerson(id: string, field: keyof Person, value: string) {
    setPeople((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  }

  /* --- Food handlers --- */
  function updateFoodQty(id: string, qty: number) {
    setFoods((prev) =>
      prev.map((f) => (f.id === id ? { ...f, quantity: Math.max(0, qty) } : f))
    );
  }
  function removeFood(id: string) {
    setFoods((prev) => prev.filter((f) => f.id !== id));
  }
  function addCustomFood() {
    if (!customName || !customUnit || !customCalories) return;
    setFoods((prev) => [
      ...prev,
      {
        id: uid(),
        name: customName,
        unit: customUnit,
        caloriesPerUnit: Number(customCalories),
        quantity: Number(customQuantity) || 0,
        isCustom: true,
      },
    ]);
    setCustomName("");
    setCustomUnit("");
    setCustomCalories("");
    setCustomQuantity("");
    setShowCustomForm(false);
  }

  /* --- Helpers --- */
  function survivalColor(days: number) {
    if (days >= 30) return "text-green-400";
    if (days >= 14) return "text-yellow-400";
    if (days >= 7) return "text-orange-400";
    return "text-doom";
  }
  function survivalBarColor(days: number) {
    if (days >= 30) return "bg-green-500";
    if (days >= 14) return "bg-yellow-500";
    if (days >= 7) return "bg-orange-500";
    return "bg-doom";
  }
  function survivalLabel(days: number) {
    if (days >= 90) return "Excellent - 3+ month runway";
    if (days >= 30) return "Good - 1+ month runway";
    if (days >= 14) return "Moderate - 2+ weeks";
    if (days >= 7) return "Low - only 1-2 weeks";
    return "Critical - less than 1 week";
  }

  const recommendations = useMemo(() => {
    if (daysOfSurvival >= 14) return [];
    const recs: string[] = [];
    const riceItem = foods.find((f) => f.name === "White Rice");
    const beansItem = foods.find((f) => f.name === "Dried Beans");
    const oatsItem = foods.find((f) => f.name === "Rolled Oats");
    const pastaItem = foods.find((f) => f.name === "Pasta");

    if (!riceItem || riceItem.quantity < 20)
      recs.push("Buy 25 lb bag of white rice (~41,250 calories for ~$15)");
    if (!beansItem || beansItem.quantity < 10)
      recs.push("Buy 10 lbs of dried beans (~15,000 calories for ~$12)");
    if (!oatsItem || oatsItem.quantity < 10)
      recs.push("Buy 10 lbs of rolled oats (~17,500 calories for ~$10)");
    if (!pastaItem || pastaItem.quantity < 10)
      recs.push("Buy 10 lbs of pasta (~16,800 calories for ~$12)");
    recs.push("Add peanut butter - extremely calorie-dense and shelf-stable");
    recs.push("Stock cooking oil for high-calorie supplementation");
    return recs;
  }, [daysOfSurvival, foods]);

  /* ---------------------------------------------------------------- */
  /*  Render                                                          */
  /* ---------------------------------------------------------------- */

  return (
    <main className="min-h-screen bg-zinc-900 text-white">
      {/* Breadcrumb */}
      <div className="container-wide pt-6 pb-2">
        <nav className="flex items-center gap-1 text-sm text-zinc-400">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/vault" className="hover:text-white transition-colors flex items-center gap-1">
            <Lock className="w-3.5 h-3.5" />
            The Vault
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-white flex items-center gap-1">
            <Calculator className="w-3.5 h-3.5" />
            Supply Calculator
          </span>
        </nav>
      </div>

      {/* Header */}
      <header className="container-wide py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 flex items-center gap-3">
          <Calculator className="w-8 h-8 text-atomic" />
          Supply Runway Calculator
        </h1>
        <p className="text-zinc-400 max-w-2xl text-lg">
          Enter your household size and food inventory to calculate exactly how many days your
          emergency supplies will last. Plan smarter, survive longer.
        </p>
      </header>

      <div className="container-wide pb-16 space-y-8">
        {/* ============================================================ */}
        {/*  SECTION 1 — People                                         */}
        {/* ============================================================ */}
        <section className="glass-card p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Users className="w-5 h-5 text-atomic" />
              People in Your Group
            </h2>
            <button
              onClick={addPerson}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-atomic/20 text-atomic hover:bg-atomic/30 transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Person
            </button>
          </div>

          <div className="space-y-4">
            {people.map((person) => (
              <div
                key={person.id}
                className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto_auto] gap-3 items-end bg-zinc-800/60 rounded-lg p-4"
              >
                {/* Name */}
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Name</label>
                  <input
                    type="text"
                    value={person.name}
                    onChange={(e) => updatePerson(person.id, "name", e.target.value)}
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-atomic transition-colors"
                  />
                </div>

                {/* Age Category */}
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Age Category</label>
                  <select
                    value={person.ageCategory}
                    onChange={(e) => updatePerson(person.id, "ageCategory", e.target.value)}
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-atomic transition-colors"
                  >
                    {Object.entries(AGE_LABELS).map(([val, label]) => (
                      <option key={val} value={val}>
                        {label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Activity Level */}
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Activity Level</label>
                  <select
                    value={person.activityLevel}
                    onChange={(e) => updatePerson(person.id, "activityLevel", e.target.value)}
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-atomic transition-colors"
                  >
                    <option value="active">Active</option>
                    <option value="sedentary">Sedentary</option>
                  </select>
                </div>

                {/* Daily Cal */}
                <div className="text-center sm:text-right">
                  <span className="block text-xs text-zinc-400 mb-1">Daily Cal</span>
                  <span className="text-sm font-semibold text-atomic">
                    {getCalories(person).toLocaleString()}
                  </span>
                </div>

                {/* Remove */}
                <div>
                  <button
                    onClick={() => removePerson(person.id)}
                    disabled={people.length <= 1}
                    className="p-2 rounded-md text-zinc-500 hover:text-doom hover:bg-doom/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    title="Remove person"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Subtotal */}
          <div className="mt-6 flex items-center justify-between bg-zinc-800/80 rounded-lg px-5 py-3">
            <span className="text-zinc-300 text-sm font-medium">Total Daily Calories Needed</span>
            <span className="text-lg font-bold text-atomic">
              <AnimatedNumber value={totalDailyCalories} /> cal/day
            </span>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SECTION 2 — Food Inventory                                 */}
        {/* ============================================================ */}
        <section className="glass-card p-6 md:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Package className="w-5 h-5 text-atomic" />
              Food Inventory
            </h2>
            <button
              onClick={() => setShowCustomForm(!showCustomForm)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-atomic/20 text-atomic hover:bg-atomic/30 transition-colors text-sm font-medium"
            >
              <Plus className="w-4 h-4" />
              Add Custom Item
            </button>
          </div>

          {/* Custom food form */}
          {showCustomForm && (
            <div className="mb-6 bg-zinc-800/60 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-zinc-300 mb-3">Add Custom Food Item</h3>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-end">
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Name</label>
                  <input
                    type="text"
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="e.g. MRE"
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-atomic"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Unit</label>
                  <input
                    type="text"
                    value={customUnit}
                    onChange={(e) => setCustomUnit(e.target.value)}
                    placeholder="e.g. packet"
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-atomic"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Cal per Unit</label>
                  <input
                    type="number"
                    value={customCalories}
                    onChange={(e) => setCustomCalories(e.target.value)}
                    placeholder="1250"
                    className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-atomic"
                  />
                </div>
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Quantity</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={customQuantity}
                      onChange={(e) => setCustomQuantity(e.target.value)}
                      placeholder="0"
                      className="w-full bg-zinc-700 border border-zinc-600 rounded-md px-3 py-2 text-sm text-white focus:outline-none focus:border-atomic"
                    />
                    <button
                      onClick={addCustomFood}
                      className="px-4 py-2 bg-atomic text-white rounded-md hover:bg-atomic/80 transition-colors text-sm font-medium whitespace-nowrap"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Food table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-zinc-700 text-zinc-400 text-left">
                  <th className="pb-3 pr-4 font-medium">Item</th>
                  <th className="pb-3 pr-4 font-medium text-center">Cal / Unit</th>
                  <th className="pb-3 pr-4 font-medium text-center w-28">Quantity</th>
                  <th className="pb-3 pr-4 font-medium text-right">Total Cal</th>
                  <th className="pb-3 w-10"></th>
                </tr>
              </thead>
              <tbody>
                {foods.map((food) => {
                  const totalCal = food.quantity * food.caloriesPerUnit;
                  return (
                    <tr
                      key={food.id}
                      className="border-b border-zinc-800 hover:bg-zinc-800/40 transition-colors"
                    >
                      <td className="py-3 pr-4">
                        <div className="font-medium text-zinc-200">{food.name}</div>
                        <div className="text-xs text-zinc-500">per {food.unit}</div>
                      </td>
                      <td className="py-3 pr-4 text-center text-zinc-400">
                        {food.caloriesPerUnit.toLocaleString()}
                      </td>
                      <td className="py-3 pr-4">
                        <input
                          type="number"
                          min={0}
                          value={food.quantity}
                          onChange={(e) => updateFoodQty(food.id, Number(e.target.value))}
                          className="w-24 mx-auto block bg-zinc-700 border border-zinc-600 rounded-md px-3 py-1.5 text-sm text-center text-white focus:outline-none focus:border-atomic transition-colors"
                        />
                      </td>
                      <td className="py-3 pr-4 text-right font-semibold">
                        {totalCal > 0 ? (
                          <span className="text-atomic">{totalCal.toLocaleString()}</span>
                        ) : (
                          <span className="text-zinc-600">0</span>
                        )}
                      </td>
                      <td className="py-3">
                        {food.isCustom && (
                          <button
                            onClick={() => removeFood(food.id)}
                            className="p-1.5 rounded text-zinc-500 hover:text-doom hover:bg-doom/10 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Total */}
          <div className="mt-6 flex items-center justify-between bg-zinc-800/80 rounded-lg px-5 py-3">
            <span className="text-zinc-300 text-sm font-medium">Total Calories in Storage</span>
            <span className="text-lg font-bold text-atomic">
              <AnimatedNumber value={totalStoredCalories} /> cal
            </span>
          </div>
        </section>

        {/* ============================================================ */}
        {/*  SECTION 3 — Results Dashboard                              */}
        {/* ============================================================ */}
        <section className="glass-card p-6 md:p-8">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-8">
            <BarChart3 className="w-5 h-5 text-atomic" />
            Results Dashboard
          </h2>

          {/* Big numbers row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total stored */}
            <div className="bg-zinc-800/60 rounded-xl p-6 text-center">
              <div className="text-xs uppercase tracking-wider text-zinc-400 mb-2">
                Calories in Storage
              </div>
              <div className="text-3xl font-bold text-atomic">
                <AnimatedNumber value={totalStoredCalories} />
              </div>
            </div>

            {/* Daily need */}
            <div className="bg-zinc-800/60 rounded-xl p-6 text-center">
              <div className="text-xs uppercase tracking-wider text-zinc-400 mb-2">
                Daily Calories Needed
              </div>
              <div className="text-3xl font-bold text-white">
                <AnimatedNumber value={totalDailyCalories} />
              </div>
            </div>

            {/* Days of survival — HERO */}
            <div className="bg-zinc-800/60 rounded-xl p-6 text-center border border-zinc-700">
              <div className="text-xs uppercase tracking-wider text-zinc-400 mb-2">
                Days of Survival
              </div>
              <div className={`text-5xl font-black ${survivalColor(daysOfSurvival)}`}>
                <AnimatedNumber value={Math.floor(daysOfSurvival)} />
              </div>
              <div className={`text-xs mt-2 font-medium ${survivalColor(daysOfSurvival)}`}>
                {survivalLabel(daysOfSurvival)}
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
              <span>0 days</span>
              <span>30 days</span>
              <span>90 days</span>
            </div>
            <div className="w-full h-4 bg-zinc-800 rounded-full overflow-hidden relative">
              {/* 30-day marker */}
              <div
                className="absolute top-0 bottom-0 w-px bg-zinc-600"
                style={{ left: `${(30 / 90) * 100}%` }}
              />
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${survivalBarColor(daysOfSurvival)}`}
                style={{ width: `${Math.min((daysOfSurvival / 90) * 100, 100)}%` }}
              />
            </div>
          </div>

          {/* Per-person breakdown */}
          {people.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-zinc-300 mb-3">Per-Person Breakdown</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {dailyCaloriesPerPerson.map((p) => (
                    <div
                      key={p.id}
                      className="bg-zinc-800/40 rounded-lg px-4 py-3 flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-medium text-zinc-200">{p.name}</div>
                        <div className="text-xs text-zinc-500">
                          {AGE_LABELS[p.ageCategory]} &middot; {p.activityLevel} &middot;{" "}
                          {p.calories.toLocaleString()} cal/day
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${survivalColor(daysOfSurvival)}`}>
                          {Math.floor(daysOfSurvival)}d
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="bg-doom/10 border border-doom/30 rounded-xl p-5">
              <h3 className="text-sm font-semibold text-doom flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4" />
                Recommended Actions — Your Supplies Are Low
              </h3>
              <ul className="space-y-2">
                {recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <TrendingUp className="w-4 h-4 text-doom mt-0.5 flex-shrink-0" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* ============================================================ */}
        {/*  SECTION 4 — CTA                                            */}
        {/* ============================================================ */}
        <section className="glass-card p-6 md:p-8 border border-atomic/30 text-center">
          <ShieldCheck className="w-10 h-10 text-atomic mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Unlock the Full Supply Calculator</h2>
          <p className="text-zinc-400 max-w-xl mx-auto mb-6">
            Get the full Supply Calculator with export to PDF, meal planning, water calculations,
            expiration date tracking, and personalized shopping lists in{" "}
            <span className="text-atomic font-semibold">The Vault</span>.
          </p>
          <Link
            to="/vault"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-atomic text-white font-semibold hover:bg-atomic/80 transition-colors"
          >
            <Lock className="w-4 h-4" />
            Access The Vault
          </Link>
        </section>
      </div>
    </main>
  );
}
