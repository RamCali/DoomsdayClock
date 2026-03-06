import { ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface VoteButtonProps {
  score: number;
  userVote: number;
  onVote: (value: 1 | -1) => void;
  size?: "sm" | "md";
  horizontal?: boolean;
}

export function VoteButton({ score, userVote, onVote, size = "md", horizontal = false }: VoteButtonProps) {
  const iconSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <div className={cn(
      "flex items-center gap-0.5",
      horizontal ? "flex-row" : "flex-col"
    )}>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onVote(1); }}
        className={cn(
          "p-1 rounded-md transition-colors",
          userVote === 1
            ? "text-doom bg-doom/10"
            : "text-muted-foreground hover:text-doom hover:bg-doom/5"
        )}
        title="Upvote"
      >
        <ChevronUp className={iconSize} />
      </button>
      <span className={cn(
        "font-semibold tabular-nums",
        size === "sm" ? "text-xs min-w-[1.5rem]" : "text-sm min-w-[2rem]",
        "text-center",
        userVote === 1 ? "text-doom" : userVote === -1 ? "text-atomic" : "text-foreground"
      )}>
        {score}
      </span>
      <button
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); onVote(-1); }}
        className={cn(
          "p-1 rounded-md transition-colors",
          userVote === -1
            ? "text-atomic bg-atomic/10"
            : "text-muted-foreground hover:text-atomic hover:bg-atomic/5"
        )}
        title="Downvote"
      >
        <ChevronDown className={iconSize} />
      </button>
    </div>
  );
}
