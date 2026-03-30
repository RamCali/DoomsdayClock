import { useState, useEffect } from "react";
import { Users, Eye, TrendingUp, Globe, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

interface VisitorStats {
  currentViewers: number;
  todayVisitors: number;
  totalPredictions: number;
  totalIdeas: number;
}

function formatCount(value: unknown) {
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n.toLocaleString() : "0";
}

function generateRealisticStats(realTotal: number, ideaCount: number): VisitorStats {
  const hour = new Date().getHours();
  const baseViewers = hour >= 9 && hour <= 21 ? 45 : 15;
  const variance = Math.floor(Math.random() * 20) - 10;

  return {
    currentViewers: Math.max(5, baseViewers + variance),
    todayVisitors: 1247 + Math.floor(Math.random() * 200),
    totalPredictions: realTotal + Math.floor(Math.random() * 5),
    totalIdeas: ideaCount,
  };
}

export function SocialProof() {
  const [stats, setStats] = useState<VisitorStats>({ currentViewers: 0, todayVisitors: 0, totalPredictions: 0, totalIdeas: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [recentActivity, setRecentActivity] = useState<string | null>(null);

  useEffect(() => {
    let realTotal = 0;
    let ideaCount = 0;

    // Fetch real prediction count and forum post count
    Promise.all([
      fetch("/api/votes").then((res) => res.ok ? res.json() : null).catch(() => null),
      fetch("/api/posts?sort=new&limit=1").then((res) => res.ok ? res.json() : null).catch(() => null),
    ]).then(([votesData, postsData]) => {
      realTotal = votesData?.total || 0;
      ideaCount = postsData?.total || 0;
      setStats(generateRealisticStats(realTotal, ideaCount));
    });

    const showTimer = setTimeout(() => setIsVisible(true), 1500);

    const statsInterval = setInterval(() => {
      setStats(generateRealisticStats(realTotal, ideaCount));
    }, 30000);

    const activities = [
      "Someone from California just made a prediction",
      "A visitor from London is viewing the timeline",
      "Someone subscribed to notifications",
      "New prediction: Clock will move closer",
      "Someone from Tokyo completed the quiz",
      "A visitor shared their prediction",
    ];

    const firstActivityTimer = setTimeout(() => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      setRecentActivity(randomActivity);
      setTimeout(() => setRecentActivity(null), 4000);
    }, 5000);

    const activityInterval = setInterval(() => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      setRecentActivity(randomActivity);
      setTimeout(() => setRecentActivity(null), 4000);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(firstActivityTimer);
      clearInterval(statsInterval);
      clearInterval(activityInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto z-[100]">
      <div className="flex flex-col gap-2 items-start md:items-end">
        {/* Activity notification */}
        {recentActivity && (
          <div className="bg-zinc-900 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              <span className="text-sm text-gray-300">{recentActivity}</span>
            </div>
          </div>
        )}

        {/* Live viewers count */}
        <div className="bg-zinc-900 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-white">
                {stats.currentViewers}
              </span>
              <span className="text-sm text-gray-400 hidden sm:inline">
                viewing now
              </span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-gray-400">
                {stats.totalPredictions > 0 ? `${formatCount(stats.totalPredictions)} predictions` : ""}
              </span>
            </div>
            {stats.totalIdeas > 0 && (
              <>
                <div className="w-px h-4 bg-white/10 hidden sm:block" />
                <Link to="/forum" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <Lightbulb className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-gray-400">
                    {stats.totalIdeas} idea{stats.totalIdeas !== 1 ? "s" : ""} shared
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline stats component for embedding in sections
export function InlineSocialStats() {
  const [stats, setStats] = useState<VisitorStats>({ currentViewers: 0, todayVisitors: 0, totalPredictions: 0, totalIdeas: 0 });

  useEffect(() => {
    let realTotal = 0;
    let ideaCount = 0;

    Promise.all([
      fetch("/api/votes").then((res) => res.ok ? res.json() : null).catch(() => null),
      fetch("/api/posts?sort=new&limit=1").then((res) => res.ok ? res.json() : null).catch(() => null),
    ]).then(([votesData, postsData]) => {
      realTotal = votesData?.total || 0;
      ideaCount = postsData?.total || 0;
      setStats(generateRealisticStats(realTotal, ideaCount));
    });

    const interval = setInterval(() => {
      setStats(generateRealisticStats(realTotal, ideaCount));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
          </span>
        </div>
        <span className="text-muted-foreground">
          <span className="text-white font-medium">{stats.currentViewers}</span> people viewing
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-atomic" />
        <span className="text-muted-foreground">
          <span className="text-white font-medium">{formatCount(stats.todayVisitors)}</span> visitors today
        </span>
      </div>
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-purple-500" />
        <span className="text-muted-foreground">
          <span className="text-white font-medium">{formatCount(stats.totalPredictions)}</span> predictions made
        </span>
      </div>
    </div>
  );
}
