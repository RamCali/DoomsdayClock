import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { clockHistory } from "../data/clockHistory";
import { TrendingUp, TrendingDown, Clock } from "lucide-react";

// Transform data for the chart - invert so closer to midnight = higher on chart
const chartData = clockHistory.map((event) => ({
  year: event.year,
  minutes: event.minutes,
  // Invert: closer to midnight = more danger = higher value
  danger: 20 - event.minutes,
  time: event.time,
  reason: event.reason,
  direction: event.direction,
}));

// Custom tooltip
function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="glass-card p-4 border border-doom/30 max-w-xs">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl font-bold font-mono text-foreground">
            {data.year}
          </span>
          <span className="text-lg font-bold font-mono text-doom">
            {data.time}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{data.reason}</p>
        <div className="flex items-center gap-1 mt-2 text-xs">
          {data.direction === "forward" ? (
            <>
              <TrendingUp className="w-3 h-3 text-doom" />
              <span className="text-doom">Closer to midnight</span>
            </>
          ) : data.direction === "backward" ? (
            <>
              <TrendingDown className="w-3 h-3 text-green" />
              <span className="text-green">Further from midnight</span>
            </>
          ) : (
            <>
              <Clock className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">Initial setting</span>
            </>
          )}
        </div>
      </div>
    );
  }
  return null;
}

export function TimelineChart() {
  // Key events to highlight
  const keyEvents = [
    { year: 1953, label: "H-bomb" },
    { year: 1991, label: "Cold War ends" },
    { year: 2023, label: "Closest ever" },
  ];

  return (
    <section className="py-12 sm:py-16" id="timeline-chart">
      <div className="container-wide">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How the Clock Has <span className="text-doom">Changed</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Visualizing 77 years of the Doomsday Clock. Higher peaks mean closer
            to midnight — and greater danger for humanity.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-doom" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              Danger level (closer to midnight = higher)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 border-t-2 border-dashed border-white/30" />
            <span className="text-xs sm:text-sm text-muted-foreground">
              Midnight (catastrophe)
            </span>
          </div>
        </div>

        {/* Chart */}
        <div className="doom-card p-4 sm:p-6 overflow-hidden">
          <div className="h-[300px] sm:h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="dangerGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ea384c" stopOpacity={0.8} />
                    <stop offset="50%" stopColor="#ea384c" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#ea384c" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="year"
                  stroke="#a1a1aa"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: "#27272a" }}
                  tick={{ fill: "#a1a1aa" }}
                  interval="preserveStartEnd"
                  tickFormatter={(value) => value.toString()}
                />

                <YAxis
                  stroke="#a1a1aa"
                  fontSize={12}
                  tickLine={false}
                  axisLine={{ stroke: "#27272a" }}
                  tick={{ fill: "#a1a1aa" }}
                  domain={[0, 20]}
                  ticks={[0, 5, 10, 15, 20]}
                  tickFormatter={(value) => {
                    const mins = 20 - value;
                    if (mins === 0) return "Midnight";
                    if (mins <= 2) return `${Math.round(mins * 60)}s`;
                    return `${mins}m`;
                  }}
                />

                {/* Midnight reference line */}
                <ReferenceLine
                  y={20}
                  stroke="#ffffff"
                  strokeDasharray="5 5"
                  strokeOpacity={0.3}
                  label={{
                    value: "MIDNIGHT",
                    position: "right",
                    fill: "#a1a1aa",
                    fontSize: 10,
                  }}
                />

                <Tooltip content={<CustomTooltip />} />

                <Area
                  type="monotone"
                  dataKey="danger"
                  stroke="#ea384c"
                  strokeWidth={2}
                  fill="url(#dangerGradient)"
                  dot={{
                    fill: "#ea384c",
                    strokeWidth: 0,
                    r: 4,
                  }}
                  activeDot={{
                    fill: "#ea384c",
                    stroke: "#fff",
                    strokeWidth: 2,
                    r: 6,
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Key events markers */}
          <div className="flex flex-wrap justify-center gap-4 mt-6 pt-4 border-t border-white/10">
            {keyEvents.map((event) => {
              const eventData = clockHistory.find((e) => e.year === event.year);
              return (
                <div key={event.year} className="text-center px-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {event.label}
                  </p>
                  <p className="text-lg font-bold font-mono text-doom">
                    {event.year}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {eventData?.time}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="glass-card p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Times moved forward
            </p>
            <p className="text-2xl sm:text-3xl font-bold font-mono text-doom">
              {clockHistory.filter((e) => e.direction === "forward").length}
            </p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Times moved back
            </p>
            <p className="text-2xl sm:text-3xl font-bold font-mono text-green">
              {clockHistory.filter((e) => e.direction === "backward").length}
            </p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Closest ever
            </p>
            <p className="text-2xl sm:text-3xl font-bold font-mono text-doom">
              90s
            </p>
          </div>
          <div className="glass-card p-4 text-center">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
              Furthest ever
            </p>
            <p className="text-2xl sm:text-3xl font-bold font-mono text-green">
              17m
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
