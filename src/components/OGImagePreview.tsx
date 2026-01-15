import { currentTime } from "../data/clockHistory";

/**
 * OG Image Preview Component
 *
 * This component renders a preview of the Open Graph image for social sharing.
 * Use this to:
 * 1. Preview the OG image design in the browser
 * 2. Screenshot at 1200x630 to create the actual PNG
 * 3. Reference for designers recreating in Figma/Canva
 *
 * Access at: /#og-preview (add route if needed)
 */
export function OGImagePreview() {
  // Calculate days until next update
  const nextUpdate = new Date("2026-01-27");
  const today = new Date();
  const daysUntil = Math.ceil((nextUpdate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950 p-8">
      {/* OG Image Container - 1200x630 at scale */}
      <div
        className="relative bg-[#09090b] overflow-hidden"
        style={{
          width: '1200px',
          height: '630px',
          fontFamily: 'Inter, system-ui, sans-serif'
        }}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-[#09090b] to-zinc-900" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
        />

        {/* Red glow effect behind clock */}
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #ea384c 0%, transparent 70%)' }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-between p-10">

          {/* Top: Eyebrow - Marvel Shield */}
          <div className="flex justify-center">
            <div
              className="text-[14px] tracking-[3px] text-zinc-500 uppercase"
              style={{ letterSpacing: '3px' }}
            >
              Bulletin of the Atomic Scientists Assessment
            </div>
          </div>

          {/* Middle: Clock + Data */}
          <div className="flex items-center justify-center gap-16">

            {/* Clock Visual */}
            <div className="relative">
              {/* Clock face */}
              <svg width="280" height="280" viewBox="0 0 280 280">
                {/* Outer ring */}
                <circle cx="140" cy="140" r="135" fill="none" stroke="#ea384c" strokeWidth="3" opacity="0.6" />
                <circle cx="140" cy="140" r="130" fill="#0a0a0a" />

                {/* Hour markers */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i * 30 - 90) * (Math.PI / 180);
                  const x1 = 140 + Math.cos(angle) * 110;
                  const y1 = 140 + Math.sin(angle) * 110;
                  const x2 = 140 + Math.cos(angle) * 120;
                  const y2 = 140 + Math.sin(angle) * 120;
                  return (
                    <line
                      key={i}
                      x1={x1} y1={y1} x2={x2} y2={y2}
                      stroke={i === 0 ? "#ea384c" : "#4a4a4a"}
                      strokeWidth={i === 0 ? "3" : "2"}
                    />
                  );
                })}

                {/* 12 marker text */}
                <text x="140" y="50" textAnchor="middle" fill="#ea384c" fontSize="24" fontWeight="bold">12</text>

                {/* MIDNIGHT text */}
                <text x="140" y="230" textAnchor="middle" fill="#6b7280" fontSize="12" letterSpacing="4">MIDNIGHT</text>

                {/* Clock hand - pointing to ~11:58:31 (89 seconds to midnight) */}
                {/* 89 seconds = 1.483 minutes before 12 */}
                {/* Angle: 12 o'clock is -90deg, each minute is 6deg */}
                {/* 1.483 min before 12 = -90 - (1.483 * 6) = -98.9deg */}
                <line
                  x1="140" y1="140"
                  x2="140" y2="35"
                  stroke="#ea384c"
                  strokeWidth="4"
                  strokeLinecap="round"
                  transform="rotate(-8.9 140 140)"
                  style={{ filter: 'drop-shadow(0 0 8px #ea384c)' }}
                />

                {/* Center dot */}
                <circle cx="140" cy="140" r="8" fill="#ea384c" style={{ filter: 'drop-shadow(0 0 6px #ea384c)' }} />
              </svg>
            </div>

            {/* Data */}
            <div className="text-center">
              <div
                className="text-[96px] font-black text-white leading-none"
                style={{ textShadow: '0 0 40px rgba(234, 56, 76, 0.3)' }}
              >
                {currentTime.seconds}
              </div>
              <div className="text-[32px] font-bold text-zinc-400 uppercase tracking-wider -mt-2">
                Seconds
              </div>
              <div className="text-[28px] font-bold text-[#ea384c] uppercase tracking-widest mt-2">
                To Midnight
              </div>
              <div className="text-[16px] text-zinc-500 mt-4 uppercase tracking-wider">
                The Closest It Has Ever Been
              </div>
            </div>
          </div>

          {/* Bottom: Urgency + Branding */}
          <div className="flex justify-between items-center">
            {/* Urgency Pill */}
            <div className="flex items-center gap-3 bg-[#ea384c]/10 border border-[#ea384c]/30 rounded-full px-5 py-2.5">
              <span className="w-2.5 h-2.5 bg-[#ea384c] rounded-full animate-pulse" />
              <span className="text-[15px] font-semibold text-white">
                NEXT UPDATE: JAN 27, 2026
              </span>
              {daysUntil > 0 && (
                <span className="text-[13px] text-zinc-400">
                  ({daysUntil} days)
                </span>
              )}
            </div>

            {/* Branding */}
            <div className="text-[18px] font-medium text-zinc-400">
              DoomsdayClock.net
            </div>
          </div>
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
          <div
            className="absolute -top-16 -right-16 w-32 h-32 bg-[#ea384c]/10 rotate-45"
          />
        </div>
      </div>
    </div>
  );
}

/**
 * Compact version for Twitter card (1200x628)
 */
export function TwitterImagePreview() {
  return (
    <div style={{ transform: 'scaleY(0.997)' }}>
      <OGImagePreview />
    </div>
  );
}
