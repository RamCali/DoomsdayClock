/**
 * AdSlot — Reusable Google AdSense ad placement component.
 *
 * HOW TO ACTIVATE:
 * 1. Get approved for Google AdSense at https://adsense.google.com
 * 2. Add the AdSense script tag to index.html:
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
 * 3. Set AD_CLIENT below to your publisher ID (e.g., "ca-pub-1234567890123456")
 * 4. Pass real ad unit slot IDs via the `slot` prop wherever <AdSlot /> is used
 * 5. Remove the placeholder fallback once ads are live
 */

// Fill in your AdSense publisher ID once approved
const AD_CLIENT = "";

interface AdSlotProps {
  slot?: string;
  format?: "horizontal" | "vertical" | "rectangle" | "in-article";
  className?: string;
}

const formatToStyle: Record<string, React.CSSProperties> = {
  horizontal: { display: "block", width: "100%", height: "90px" },
  vertical: { display: "block", width: "160px", height: "600px" },
  rectangle: { display: "block", width: "336px", height: "280px" },
  "in-article": { display: "block", textAlign: "center" as const },
};

export function AdSlot({ slot, format = "horizontal", className = "" }: AdSlotProps) {
  // When AdSense is configured, render the real ad unit
  if (AD_CLIENT && slot) {
    return (
      <div className={`ad-slot my-4 ${className}`}>
        <ins
          className="adsbygoogle"
          style={formatToStyle[format] || formatToStyle.horizontal}
          data-ad-client={AD_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format === "in-article" ? "fluid" : "auto"}
          data-ad-layout={format === "in-article" ? "in-article" : undefined}
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Placeholder — subtle, non-intrusive container shown until AdSense is set up
  const placeholderHeight: Record<string, string> = {
    horizontal: "h-[90px]",
    vertical: "h-[600px] w-[160px]",
    rectangle: "h-[280px] w-[336px] max-w-full",
    "in-article": "h-[250px]",
  };

  return (
    <div
      className={`ad-slot my-4 flex items-center justify-center rounded border border-white/5 bg-white/[0.02] ${placeholderHeight[format] || "h-[90px]"} ${className}`}
    >
      <span className="text-[10px] uppercase tracking-widest text-white/15 select-none">
        Ad
      </span>
    </div>
  );
}
