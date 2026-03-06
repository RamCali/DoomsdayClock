import { Flame, Clock, TrendingUp } from "lucide-react";
import { cn } from "../../lib/utils";

export type SortOption = "hot" | "new" | "top";
export type PeriodOption = "day" | "week" | "all";

interface SortTabsProps {
  sort: SortOption;
  period: PeriodOption;
  onSortChange: (sort: SortOption) => void;
  onPeriodChange: (period: PeriodOption) => void;
}

const sortOptions: { value: SortOption; label: string; icon: React.ReactNode }[] = [
  { value: "hot", label: "Hot", icon: <Flame className="w-4 h-4" /> },
  { value: "new", label: "New", icon: <Clock className="w-4 h-4" /> },
  { value: "top", label: "Top", icon: <TrendingUp className="w-4 h-4" /> },
];

const periodOptions: { value: PeriodOption; label: string }[] = [
  { value: "day", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "all", label: "All Time" },
];

export function SortTabs({ sort, period, onSortChange, onPeriodChange }: SortTabsProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex bg-white/5 rounded-xl p-1 gap-0.5">
        {sortOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSortChange(opt.value)}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
              sort === opt.value
                ? "bg-doom/20 text-doom border border-doom/30"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {opt.icon}
            {opt.label}
          </button>
        ))}
      </div>

      {sort === "top" && (
        <div className="flex bg-white/5 rounded-xl p-1 gap-0.5">
          {periodOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onPeriodChange(opt.value)}
              className={cn(
                "px-3 py-1.5 rounded-lg text-xs font-medium transition-all",
                period === opt.value
                  ? "bg-atomic/20 text-atomic border border-atomic/30"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
