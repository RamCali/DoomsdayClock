import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { currentTime } from "../data/clockHistory";

interface DoomsdayClockProps {
  className?: string;
}

export function DoomsdayClock({ className }: DoomsdayClockProps) {
  const [pulseIntensity, setPulseIntensity] = useState(1);

  // Subtle pulse animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIntensity((prev) => (prev === 1 ? 0.85 : 1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Calculate the angle for the minute hand (90 seconds = 1.5 minutes to midnight)
  // At midnight (12 o'clock), the hand points up (0 degrees from vertical)
  // 90 seconds to midnight means 1.5 minutes before, so the hand should be slightly before 12
  const minutesToMidnight = currentTime.seconds / 60;
  // Each minute is 6 degrees (360/60), 1.5 minutes = 9 degrees before 12
  const handAngle = -minutesToMidnight * 6;

  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle, rgba(234, 56, 76, ${0.3 * pulseIntensity}) 0%, transparent 70%)`,
        }}
      />

      {/* Clock container */}
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
        {/* Clock face */}
        <div className="absolute inset-0 rounded-full bg-black/80 backdrop-blur-lg border-4 border-doom/50 shadow-2xl">
          {/* Inner ring */}
          <div className="absolute inset-4 rounded-full border border-white/10" />

          {/* Hour markers (skip 12 o'clock position - we use the label instead) */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const isMidnight = i === 0;
            const isSix = i === 6;
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            // Skip 12 o'clock (midnight) position - we show "12" label instead
            // Skip 6 o'clock position - we show "MIDNIGHT" label instead
            if (isMidnight || isSix) return null;

            return (
              <div
                key={i}
                className="absolute w-1 h-4 -translate-x-1/2 -translate-y-1/2 bg-white/40"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                }}
              />
            );
          })}

          {/* Pulsating red wedge between minute hand and midnight */}
          {(() => {
            // Wedge goes from the hand position (counter-clockwise from 12) to 12 o'clock
            const wedgeAngleDeg = minutesToMidnight * 6; // positive angle in degrees
            const wedgeAngleRad = (wedgeAngleDeg * Math.PI) / 180;
            // Only show wedge in the upper portion of clock (between hand tip and 12)
            const outerRadius = 32; // Match hand length roughly
            // Hand tip position (counter-clockwise from 12)
            const handTipX = 50 - outerRadius * Math.sin(wedgeAngleRad);
            const handTipY = 50 - outerRadius * Math.cos(wedgeAngleRad);
            // Midnight position (12 o'clock)
            const midnightX = 50;
            const midnightY = 50 - outerRadius;

            return (
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
              >
                {/* Simple pie wedge from center to outer arc */}
                <path
                  d={`M 50 50 L ${handTipX} ${handTipY} A ${outerRadius} ${outerRadius} 0 0 1 ${midnightX} ${midnightY} Z`}
                  fill={`rgba(234, 56, 76, ${0.25 * pulseIntensity})`}
                  className="transition-all duration-1000"
                />
                {/* Glowing outer arc edge */}
                <path
                  d={`M ${handTipX} ${handTipY} A ${outerRadius} ${outerRadius} 0 0 1 ${midnightX} ${midnightY}`}
                  fill="none"
                  stroke={`rgba(234, 56, 76, ${0.7 * pulseIntensity})`}
                  strokeWidth="2"
                  className="transition-all duration-1000"
                />
              </svg>
            );
          })()}

          {/* 12 (Midnight) label */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
            <span className="text-doom font-bold text-lg sm:text-xl font-mono tracking-wider">
              12
            </span>
          </div>

          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-doom glow-doom z-20" />

          {/* Minute hand - pointing to current position */}
          <div
            className="absolute top-1/2 left-1/2 origin-bottom z-10"
            style={{
              width: "4px",
              height: "38%",
              marginLeft: "-2px",
              marginTop: "-38%",
              transform: `rotate(${handAngle}deg)`,
            }}
          >
            <div
              className="w-full h-full bg-gradient-to-t from-doom via-doom to-doom-light rounded-full transition-all duration-1000"
              style={{
                boxShadow: `0 0 ${20 * pulseIntensity}px rgba(234, 56, 76, ${0.8 * pulseIntensity})`,
              }}
            />
          </div>

          {/* "MIDNIGHT" text at bottom */}
          <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-10">
            <span className="text-muted-foreground text-[10px] sm:text-xs uppercase tracking-[0.25em] font-medium">
              Midnight
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
