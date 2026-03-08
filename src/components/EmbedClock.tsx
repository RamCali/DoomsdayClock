import { useEffect, useState } from "react";
import { currentTime } from "../data/clockHistory";

const DOOM_RED = "#ea384c";

export function EmbedClock() {
  const params = new URLSearchParams(window.location.search);
  const theme = params.get("theme") || "dark";
  const size = params.get("size") || "md";
  const showTime = params.get("showTime") !== "false";
  const showLink = params.get("showLink") !== "false";

  const [pulseIntensity, setPulseIntensity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIntensity((prev) => (prev === 1 ? 0.85 : 1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const minutesToMidnight = currentTime.seconds / 60;
  const handAngle = -minutesToMidnight * 6;

  const sizeMap: Record<string, { clock: number; fontSize: string; padding: string }> = {
    sm: { clock: 120, fontSize: "text-xs", padding: "p-2" },
    md: { clock: 180, fontSize: "text-sm", padding: "p-3" },
    lg: { clock: 240, fontSize: "text-base", padding: "p-4" },
  };

  const s = sizeMap[size] || sizeMap.md;
  const isDark = theme === "dark";
  const bg = isDark ? "#0a0a0f" : "#ffffff";
  const mutedColor = isDark ? "#a1a1aa" : "#71717a";

  // Wedge calculations
  const wedgeAngleRad = (minutesToMidnight * 6 * Math.PI) / 180;
  const outerRadius = 32;
  const handTipX = 50 - outerRadius * Math.sin(wedgeAngleRad);
  const handTipY = 50 - outerRadius * Math.cos(wedgeAngleRad);
  const midnightX = 50;
  const midnightY = 50 - outerRadius;

  return (
    <div
      style={{
        background: bg,
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
      className={s.padding}
    >
      {/* Clock */}
      <div style={{ position: "relative", width: s.clock, height: s.clock }}>
        {/* Outer glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            filter: "blur(24px)",
            background: `radial-gradient(circle, rgba(234, 56, 76, ${0.3 * pulseIntensity}) 0%, transparent 70%)`,
            transition: "opacity 1s",
          }}
        />

        {/* Clock face */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.8)",
            border: `3px solid rgba(234, 56, 76, 0.5)`,
            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
          }}
        >
          {/* Inner ring */}
          <div
            style={{
              position: "absolute",
              inset: "12%",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />

          {/* Hour markers */}
          {Array.from({ length: 12 }).map((_, i) => {
            if (i === 0 || i === 6) return null;
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const radius = 42;
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "2px",
                  height: "8px",
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg)`,
                  background: "rgba(255,255,255,0.4)",
                }}
              />
            );
          })}

          {/* Red wedge */}
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
            viewBox="0 0 100 100"
          >
            <path
              d={`M 50 50 L ${handTipX} ${handTipY} A ${outerRadius} ${outerRadius} 0 0 1 ${midnightX} ${midnightY} Z`}
              fill={`rgba(234, 56, 76, ${0.25 * pulseIntensity})`}
              style={{ transition: "all 1s" }}
            />
            <path
              d={`M ${handTipX} ${handTipY} A ${outerRadius} ${outerRadius} 0 0 1 ${midnightX} ${midnightY}`}
              fill="none"
              stroke={`rgba(234, 56, 76, ${0.7 * pulseIntensity})`}
              strokeWidth="2"
              style={{ transition: "all 1s" }}
            />
          </svg>

          {/* 12 label */}
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "50%",
              transform: "translateX(-50%)",
              color: DOOM_RED,
              fontWeight: 700,
              fontSize: s.clock > 150 ? "18px" : "14px",
              fontFamily: "'Roboto Mono', monospace",
              letterSpacing: "0.1em",
              zIndex: 10,
            }}
          >
            12
          </div>

          {/* Center dot */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "10px",
              height: "10px",
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              background: DOOM_RED,
              boxShadow: `0 0 20px rgba(234, 56, 76, 0.4)`,
              zIndex: 20,
            }}
          />

          {/* Minute hand */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "3px",
              height: "38%",
              marginLeft: "-1.5px",
              marginTop: "-38%",
              transformOrigin: "bottom center",
              transform: `rotate(${handAngle}deg)`,
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                background: `linear-gradient(to top, ${DOOM_RED}, #ff6b6b)`,
                borderRadius: "9999px",
                boxShadow: `0 0 ${20 * pulseIntensity}px rgba(234, 56, 76, ${0.8 * pulseIntensity})`,
                transition: "all 1s",
              }}
            />
          </div>

          {/* MIDNIGHT label */}
          <div
            style={{
              position: "absolute",
              bottom: s.clock > 150 ? "10%" : "8%",
              left: "50%",
              transform: "translateX(-50%)",
              color: mutedColor,
              fontSize: s.clock > 150 ? "10px" : "8px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              fontWeight: 500,
              zIndex: 10,
            }}
          >
            Midnight
          </div>
        </div>
      </div>

      {/* Time display */}
      {showTime && (
        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <p
            style={{
              color: DOOM_RED,
              fontWeight: 700,
              fontSize: s.clock > 150 ? "18px" : "14px",
              fontFamily: "'Roboto Mono', monospace",
              margin: 0,
            }}
          >
            {currentTime.display} to midnight
          </p>
          <p style={{ color: mutedColor, fontSize: "11px", marginTop: "2px" }}>
            Set {currentTime.lastUpdated}
          </p>
        </div>
      )}

      {/* Attribution link */}
      {showLink && (
        <a
          href="https://doomsdayclock.net"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: mutedColor,
            fontSize: "10px",
            textDecoration: "none",
            marginTop: "8px",
            opacity: 0.7,
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
        >
          Powered by DoomsdayClock.net
        </a>
      )}
    </div>
  );
}
