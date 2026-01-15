import { currentTime } from "../data/clockHistory";

/**
 * OG Image Preview Component - "High Tech / Official" Design
 *
 * Features:
 * 1. "Kill Zone" wedge - red glow showing the 89-second danger zone
 * 2. Centered "89 SECONDS" text over clock pivot point
 * 3. Clean minimal design that differentiates from Marvel's Avengers: Doomsday
 *
 * Access at: /og-preview
 * Screenshot at 1200x630 to create og-image-2026.png
 */
export function OGImagePreview() {
  // Calculate days until next update
  const nextUpdate = new Date("2026-01-27");
  const today = new Date();
  const daysUntil = Math.ceil((nextUpdate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  // Clock calculations
  // 89 seconds = 1.4833 minutes before midnight
  // Each minute on the clock = 6 degrees
  // Hand angle from 12 o'clock: -8.9 degrees (counterclockwise)
  const secondsToMidnight = currentTime.seconds;
  const handAngle = -(secondsToMidnight / 60) * 6; // Degrees from 12

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      {/* OG Image Container - 1200x630 */}
      <div
        className="relative overflow-hidden"
        style={{
          width: '1200px',
          height: '630px',
          fontFamily: 'Inter, system-ui, sans-serif',
          background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 50%, #050505 100%)'
        }}
      >
        {/* Subtle vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)'
          }}
        />

        {/* Content - Clock Centered */}
        <div className="relative h-full flex flex-col items-center justify-center">

          {/* Top: Eyebrow - Official Source */}
          <div className="absolute top-8 left-0 right-0 flex justify-center">
            <div
              className="text-[13px] tracking-[4px] text-zinc-500 uppercase"
            >
              Bulletin of the Atomic Scientists
            </div>
          </div>

          {/* Main Clock */}
          <div className="relative">
            <svg width="420" height="420" viewBox="0 0 420 420">
              {/* Definitions for gradients and filters */}
              <defs>
                {/* Red glow filter */}
                <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                {/* Kill zone gradient */}
                <radialGradient id="killZoneGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="60%" stopColor="transparent"/>
                  <stop offset="85%" stopColor="rgba(234, 56, 76, 0.3)"/>
                  <stop offset="100%" stopColor="rgba(234, 56, 76, 0.15)"/>
                </radialGradient>

                {/* Pulsing animation for kill zone */}
                <radialGradient id="killZonePulse" cx="50%" cy="50%" r="50%">
                  <stop offset="70%" stopColor="transparent"/>
                  <stop offset="90%" stopColor="rgba(234, 56, 76, 0.4)"/>
                  <stop offset="100%" stopColor="rgba(234, 56, 76, 0.2)"/>
                </radialGradient>
              </defs>

              {/* Outer glow ring */}
              <circle cx="210" cy="210" r="200" fill="none" stroke="#ea384c" strokeWidth="2" opacity="0.3"/>

              {/* Main clock face */}
              <circle cx="210" cy="210" r="195" fill="#0a0a0a"/>

              {/* Inner ring */}
              <circle cx="210" cy="210" r="190" fill="none" stroke="#ea384c" strokeWidth="3" opacity="0.5"/>

              {/* KILL ZONE WEDGE - The 89-second danger slice */}
              {/* Arc from current hand position to 12 o'clock */}
              <path
                d={`M 210 210 L 210 20 A 190 190 0 0 0 ${210 + 190 * Math.sin(handAngle * Math.PI / 180)} ${210 - 190 * Math.cos(handAngle * Math.PI / 180)} Z`}
                fill="url(#killZoneGradient)"
              />

              {/* Animated pulse overlay on kill zone */}
              <path
                d={`M 210 210 L 210 20 A 190 190 0 0 0 ${210 + 190 * Math.sin(handAngle * Math.PI / 180)} ${210 - 190 * Math.cos(handAngle * Math.PI / 180)} Z`}
                fill="url(#killZonePulse)"
                opacity="0.5"
              >
                <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite"/>
              </path>

              {/* Hour markers */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 - 90) * (Math.PI / 180);
                const x1 = 210 + Math.cos(angle) * 165;
                const y1 = 210 + Math.sin(angle) * 165;
                const x2 = 210 + Math.cos(angle) * 180;
                const y2 = 210 + Math.sin(angle) * 180;
                const isNoon = i === 0;
                return (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke={isNoon ? "#ea384c" : "#4a4a4a"}
                    strokeWidth={isNoon ? "4" : "2"}
                    strokeLinecap="round"
                  />
                );
              })}

              {/* 12 marker */}
              <text
                x="210"
                y="60"
                textAnchor="middle"
                fill="#ea384c"
                fontSize="28"
                fontWeight="bold"
                fontFamily="Inter, system-ui, sans-serif"
              >
                12
              </text>

              {/* MIDNIGHT label at bottom */}
              <text
                x="210"
                y="365"
                textAnchor="middle"
                fill="#6b7280"
                fontSize="16"
                letterSpacing="6"
                fontFamily="Inter, system-ui, sans-serif"
              >
                MIDNIGHT
              </text>

              {/* Clock hand */}
              <line
                x1="210"
                y1="210"
                x2="210"
                y2="40"
                stroke="#ea384c"
                strokeWidth="5"
                strokeLinecap="round"
                transform={`rotate(${handAngle} 210 210)`}
                filter="url(#redGlow)"
              />

              {/* Center pivot - outer ring */}
              <circle cx="210" cy="210" r="12" fill="#ea384c" opacity="0.3"/>

              {/* Center pivot - inner */}
              <circle cx="210" cy="210" r="8" fill="#ea384c" filter="url(#redGlow)"/>

              {/* CENTER DATA - The key SEO element */}
              {/* Background for text readability */}
              <circle cx="210" cy="210" r="70" fill="rgba(0,0,0,0.7)"/>

              {/* 89 SECONDS text - centered on pivot */}
              <text
                x="210"
                y="200"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="48"
                fontWeight="900"
                fontFamily="Inter, system-ui, sans-serif"
                style={{ filter: 'drop-shadow(0 0 20px rgba(234, 56, 76, 0.5))' }}
              >
                {secondsToMidnight}
              </text>
              <text
                x="210"
                y="230"
                textAnchor="middle"
                fill="#ea384c"
                fontSize="14"
                fontWeight="bold"
                letterSpacing="3"
                fontFamily="Inter, system-ui, sans-serif"
              >
                SECONDS
              </text>
            </svg>
          </div>

          {/* Bottom: Urgency + Branding */}
          <div className="absolute bottom-8 left-10 right-10 flex justify-between items-center">
            {/* Urgency Pill */}
            <div className="flex items-center gap-3 bg-[#ea384c]/10 border border-[#ea384c]/30 rounded-full px-5 py-2.5">
              <span className="w-2.5 h-2.5 bg-[#ea384c] rounded-full" style={{ animation: 'pulse 2s infinite' }}/>
              <span className="text-[14px] font-semibold text-white tracking-wide">
                NEXT UPDATE: JAN 27, 2026
              </span>
              {daysUntil > 0 && (
                <span className="text-[12px] text-zinc-400">
                  ({daysUntil} days)
                </span>
              )}
            </div>

            {/* Branding */}
            <div className="text-[16px] font-medium text-zinc-500 tracking-wide">
              DoomsdayClock.net
            </div>
          </div>

          {/* "The Closest Ever" label */}
          <div className="absolute bottom-20 left-0 right-0 flex justify-center">
            <div className="text-[12px] tracking-[3px] text-zinc-600 uppercase">
              The Closest It Has Ever Been to Midnight
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Alternative: Clock-only version for smaller displays
 */
export function OGImageMinimal() {
  const secondsToMidnight = currentTime.seconds;
  const handAngle = -(secondsToMidnight / 60) * 6;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      <div
        className="relative"
        style={{
          width: '630px',
          height: '630px',
          background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #050505 100%)'
        }}
      >
        <svg width="630" height="630" viewBox="0 0 630 630">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <radialGradient id="dangerZone" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="transparent"/>
              <stop offset="90%" stopColor="rgba(234, 56, 76, 0.35)"/>
              <stop offset="100%" stopColor="rgba(234, 56, 76, 0.15)"/>
            </radialGradient>
          </defs>

          {/* Outer ring */}
          <circle cx="315" cy="315" r="290" fill="none" stroke="#ea384c" strokeWidth="3" opacity="0.4"/>
          <circle cx="315" cy="315" r="285" fill="#0a0a0a"/>

          {/* Kill zone wedge */}
          <path
            d={`M 315 315 L 315 30 A 285 285 0 0 0 ${315 + 285 * Math.sin(handAngle * Math.PI / 180)} ${315 - 285 * Math.cos(handAngle * Math.PI / 180)} Z`}
            fill="url(#dangerZone)"
          />

          {/* Hour markers */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const x1 = 315 + Math.cos(angle) * 250;
            const y1 = 315 + Math.sin(angle) * 250;
            const x2 = 315 + Math.cos(angle) * 270;
            const y2 = 315 + Math.sin(angle) * 270;
            return (
              <line
                key={i}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={i === 0 ? "#ea384c" : "#4a4a4a"}
                strokeWidth={i === 0 ? "4" : "2"}
              />
            );
          })}

          {/* 12 */}
          <text x="315" y="75" textAnchor="middle" fill="#ea384c" fontSize="32" fontWeight="bold">12</text>

          {/* MIDNIGHT */}
          <text x="315" y="560" textAnchor="middle" fill="#6b7280" fontSize="18" letterSpacing="6">MIDNIGHT</text>

          {/* Hand */}
          <line
            x1="315" y1="315" x2="315" y2="50"
            stroke="#ea384c"
            strokeWidth="6"
            strokeLinecap="round"
            transform={`rotate(${handAngle} 315 315)`}
            filter="url(#glow)"
          />

          {/* Center */}
          <circle cx="315" cy="315" r="10" fill="#ea384c" filter="url(#glow)"/>

          {/* Center text */}
          <circle cx="315" cy="315" r="90" fill="rgba(0,0,0,0.8)"/>
          <text x="315" y="305" textAnchor="middle" fill="#ffffff" fontSize="64" fontWeight="900">
            {secondsToMidnight}
          </text>
          <text x="315" y="345" textAnchor="middle" fill="#ea384c" fontSize="18" fontWeight="bold" letterSpacing="4">
            SECONDS
          </text>
        </svg>
      </div>
    </div>
  );
}
