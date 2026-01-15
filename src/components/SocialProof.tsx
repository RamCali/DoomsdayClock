import { useState, useEffect } from "react";
import { Users, Eye, TrendingUp, Globe } from "lucide-react";

interface VisitorStats {
  currentViewers: number;
  todayVisitors: number;
  totalPredictions: number;
}

// Simulated real-time stats (in production, connect to analytics API)
function generateRealisticStats(): VisitorStats {
  const hour = new Date().getHours();
  // Simulate traffic patterns - higher during US/EU business hours
  const baseViewers = hour >= 9 && hour <= 21 ? 45 : 15;
  const variance = Math.floor(Math.random() * 20) - 10;

  return {
    currentViewers: Math.max(5, baseViewers + variance),
    todayVisitors: 1247 + Math.floor(Math.random() * 200),
    totalPredictions: 8226 + Math.floor(Math.random() * 50),
  };
}

export function SocialProof() {
  const [stats, setStats] = useState<VisitorStats>(generateRealisticStats());
  const [isVisible, setIsVisible] = useState(false);
  const [recentActivity, setRecentActivity] = useState<string | null>(null);

  // Update stats periodically to simulate real-time
  useEffect(() => {
    // Initial delay before showing
    const showTimer = setTimeout(() => setIsVisible(true), 2000);

    // Update stats every 30 seconds
    const statsInterval = setInterval(() => {
      setStats(generateRealisticStats());
    }, 30000);

    // Show random activity notifications
    const activities = [
      "Someone from California just made a prediction",
      "A visitor from London is viewing the timeline",
      "Someone subscribed to notifications",
      "New prediction: Clock will move closer",
      "Someone from Tokyo completed the quiz",
      "A visitor shared their prediction",
    ];

    const activityInterval = setInterval(() => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      setRecentActivity(randomActivity);
      // Hide after 4 seconds
      setTimeout(() => setRecentActivity(null), 4000);
    }, 15000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(statsInterval);
      clearInterval(activityInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Social Proof Bar */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto z-40 pointer-events-none">
        <div className="flex flex-col gap-2 items-start md:items-end">
          {/* Activity notification */}
          {recentActivity && (
            <div className="pointer-events-auto animate-in slide-in-from-bottom-2 fade-in duration-300 bg-zinc-900/95 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
                </span>
                <span className="text-sm text-muted-foreground">{recentActivity}</span>
              </div>
            </div>
          )}

          {/* Live viewers count */}
          <div className="pointer-events-auto bg-zinc-900/95 backdrop-blur-lg border border-white/10 rounded-full px-4 py-2 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-green" />
                <span className="text-sm font-medium text-white">
                  {stats.currentViewers}
                </span>
                <span className="text-sm text-muted-foreground hidden sm:inline">
                  viewing now
                </span>
              </div>
              <div className="w-px h-4 bg-white/10 hidden sm:block" />
              <div className="hidden sm:flex items-center gap-2">
                <Globe className="w-4 h-4 text-atomic" />
                <span className="text-sm text-muted-foreground">
                  {stats.totalPredictions.toLocaleString()} predictions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Inline stats component for embedding in sections
export function InlineSocialStats() {
  const [stats, setStats] = useState<VisitorStats>(generateRealisticStats());

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(generateRealisticStats());
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
          <span className="text-white font-medium">{stats.todayVisitors.toLocaleString()}</span> visitors today
        </span>
      </div>
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-purple-500" />
        <span className="text-muted-foreground">
          <span className="text-white font-medium">{stats.totalPredictions.toLocaleString()}</span> predictions made
        </span>
      </div>
    </div>
  );
}
