import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  Smartphone,
  Antenna,
  Waves,
  Eye,
  Flag,
  Search,
  Printer,
  ChevronRight,
  AlertTriangle,
  Shield,
  Clock,
  Users,
  BookOpen,
  Info,
  Signal,
} from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

interface NOAAFrequency {
  freq: string;
  channel: number;
  description: string;
}

const noaaFrequencies: NOAAFrequency[] = [
  { freq: "162.400", channel: 1, description: "Primary broadcast — most common NOAA channel nationwide" },
  { freq: "162.425", channel: 2, description: "Secondary broadcast — used in areas where Ch 1 overlaps" },
  { freq: "162.450", channel: 3, description: "Tertiary broadcast — fills coverage gaps in rural areas" },
  { freq: "162.475", channel: 4, description: "Supplementary — used in densely populated metro regions" },
  { freq: "162.500", channel: 5, description: "Supplementary — common in coastal and Great Lakes zones" },
  { freq: "162.525", channel: 6, description: "Supplementary — fills remaining gaps in central US" },
  { freq: "162.550", channel: 7, description: "Supplementary — least common, used for final gap-fill" },
];

interface FRSChannel {
  channel: number;
  freq: string;
  power: string;
  service: string;
  note: string;
}

const frsGmrsChannels: FRSChannel[] = [
  { channel: 1, freq: "462.5625", power: "2W FRS / 5W GMRS", service: "Shared", note: "General use" },
  { channel: 2, freq: "462.5875", power: "2W FRS / 5W GMRS", service: "Shared", note: "General use" },
  { channel: 3, freq: "462.6125", power: "2W FRS / 5W GMRS", service: "Shared", note: "General use" },
  { channel: 4, freq: "462.6375", power: "2W FRS / 5W GMRS", service: "Shared", note: "General use" },
  { channel: 5, freq: "462.6625", power: "2W FRS / 5W GMRS", service: "Shared", note: "General use" },
  { channel: 6, freq: "462.6875", power: "2W FRS / 5W GMRS", service: "Shared", note: "General use" },
  { channel: 7, freq: "462.7125", power: "2W FRS / 5W GMRS", service: "Shared", note: "General use" },
  { channel: 8, freq: "467.5625", power: "0.5W FRS", service: "FRS Only", note: "Low power — short range" },
  { channel: 9, freq: "467.5875", power: "0.5W FRS", service: "FRS Only", note: "Low power — short range" },
  { channel: 10, freq: "467.6125", power: "0.5W FRS", service: "FRS Only", note: "Low power — short range" },
  { channel: 11, freq: "467.6375", power: "0.5W FRS", service: "FRS Only", note: "Low power — short range" },
  { channel: 12, freq: "467.6625", power: "0.5W FRS", service: "FRS Only", note: "Low power — short range" },
  { channel: 13, freq: "467.6875", power: "0.5W FRS", service: "FRS Only", note: "Low power — short range" },
  { channel: 14, freq: "467.7125", power: "0.5W FRS", service: "FRS Only", note: "Low power — short range" },
  { channel: 15, freq: "462.5500", power: "50W GMRS", service: "GMRS Only", note: "Repeater input capable" },
  { channel: 16, freq: "462.5750", power: "50W GMRS", service: "GMRS Only", note: "Repeater input capable" },
  { channel: 17, freq: "462.6000", power: "50W GMRS", service: "GMRS Only", note: "Repeater input capable" },
  { channel: 18, freq: "462.6250", power: "50W GMRS", service: "GMRS Only", note: "Repeater input capable" },
  { channel: 19, freq: "462.6500", power: "50W GMRS", service: "GMRS Only", note: "Repeater input capable" },
  { channel: 20, freq: "462.6750", power: "50W GMRS", service: "GMRS Only", note: "Emergency Calling Channel" },
  { channel: 21, freq: "462.7000", power: "50W GMRS", service: "GMRS Only", note: "Repeater input capable" },
  { channel: 22, freq: "462.7250", power: "50W GMRS", service: "GMRS Only", note: "Repeater input capable" },
];

const ctcssCodes = [
  67.0, 71.9, 74.4, 77.0, 79.7, 82.5, 85.4, 88.5, 91.5, 94.8,
  97.4, 100.0, 103.5, 107.2, 110.9, 114.8, 118.8, 123.0, 127.3, 131.8,
  136.5, 141.3, 146.2, 151.4, 156.7, 162.2, 167.9, 173.8, 179.9, 186.2,
  192.8, 203.5, 210.7, 218.1, 225.7, 233.6, 241.8, 250.3,
];

interface DistressFreq {
  service: string;
  freq: string;
  designation: string;
  notes: string;
}

const distressFrequencies: DistressFreq[] = [
  { service: "Marine VHF", freq: "156.800 MHz", designation: "Channel 16", notes: "International distress, safety, and calling — monitored by Coast Guard 24/7" },
  { service: "Marine HF", freq: "2.182 MHz", designation: "HF Distress", notes: "Long-range marine distress — effective over hundreds of miles" },
  { service: "Aviation (Civilian)", freq: "121.500 MHz", designation: "Guard", notes: "Emergency and distress for all civilian aircraft" },
  { service: "Aviation (Military)", freq: "243.000 MHz", designation: "Military Guard", notes: "UHF military emergency — monitored by military aircraft" },
  { service: "Land (CB)", freq: "27.065 MHz", designation: "CB Channel 9", notes: "Unofficial emergency channel — no license required" },
];

interface HamRadio {
  name: string;
  type: string;
  bands: string;
  power: string;
  price: string;
  notes: string;
}

const recommendedRadios: HamRadio[] = [
  { name: "Baofeng UV-5R", type: "Handheld", bands: "VHF/UHF", power: "5W", price: "~$25", notes: "Best budget option. Dual-band, programmable. The go-to starter radio." },
  { name: "Yaesu FT-60R", type: "Handheld", bands: "VHF/UHF", power: "5W", price: "~$160", notes: "Rugged, reliable, military-grade build quality." },
  { name: "Yaesu FT-891", type: "Mobile/Base", bands: "HF/50MHz", power: "100W", price: "~$650", notes: "Full HF capability — nationwide and global reach." },
  { name: "ICOM IC-7300", type: "Base", bands: "HF/50MHz", power: "100W", price: "~$1,100", notes: "Touchscreen SDR, excellent receiver. Top-tier base station." },
];

type TabId = "hierarchy" | "noaa" | "frs" | "distress" | "ham" | "sop";

const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: "hierarchy", label: "Comm Hierarchy", icon: <Signal className="w-4 h-4" /> },
  { id: "noaa", label: "NOAA Freqs", icon: <Waves className="w-4 h-4" /> },
  { id: "frs", label: "FRS/GMRS", icon: <Radio className="w-4 h-4" /> },
  { id: "distress", label: "Distress", icon: <AlertTriangle className="w-4 h-4" /> },
  { id: "ham", label: "Ham Radio", icon: <Antenna className="w-4 h-4" /> },
  { id: "sop", label: "SOP / 5-5-5", icon: <Clock className="w-4 h-4" /> },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export function FrequencyReference() {
  const [activeTab, setActiveTab] = useState<TabId>("hierarchy");
  const [searchTerm, setSearchTerm] = useState("");
  const [familyChannel, setFamilyChannel] = useState("");
  const [familyCtcss, setFamilyCtcss] = useState("");
  const [callSign, setCallSign] = useState("");
  const [checkInNotes, setCheckInNotes] = useState({ am: "", noon: "", pm: "" });

  useEffect(() => {
    updateMetaTags({
      title: "Communication Frequency Reference Guide | Emergency Radio Frequencies | DoomsdayClock.net",
      description:
        "Complete emergency communication frequency reference: NOAA weather radio, FRS/GMRS channels, ham radio quick start, international distress frequencies, and the 5-5-5 check-in protocol.",
      path: "/vault/frequency-reference",
      newsKeywords:
        "emergency radio frequencies, NOAA weather radio, FRS GMRS channels, ham radio emergency, distress frequencies, survival communication, emergency communication plan",
      publishedTime: "2026-03-30T00:00:00Z",
      modifiedTime: "2026-03-30T00:00:00Z",
      section: "The Vault",
      author: "DoomsdayClock.net",
    });

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Communication Frequency Reference Guide",
      datePublished: "2026-03-30T00:00:00Z",
      dateModified: "2026-03-30T00:00:00Z",
      author: { "@type": "Organization", name: "DoomsdayClock.net", url: "https://doomsdayclock.net" },
      publisher: {
        "@type": "Organization",
        name: "DoomsdayClock.net",
        logo: { "@type": "ImageObject", url: "https://doomsdayclock.net/DoomsDayClock.net.png", width: 1200, height: 1200 },
        url: "https://doomsdayclock.net",
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://doomsdayclock.net/vault/frequency-reference" },
      description: "Complete emergency communication frequency reference for survival preparedness.",
    };
    let script = document.querySelector('script[data-schema="frequency-reference"]') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "frequency-reference");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      resetToDefaults();
      script?.remove();
    };
  }, []);

  const handlePrint = () => window.print();

  /* ---- filtered data helpers ---- */
  const lc = searchTerm.toLowerCase();
  const filteredNOAA = noaaFrequencies.filter(
    (f) => f.freq.includes(lc) || f.description.toLowerCase().includes(lc) || String(f.channel).includes(lc),
  );
  const filteredFRS = frsGmrsChannels.filter(
    (c) =>
      c.freq.includes(lc) ||
      c.note.toLowerCase().includes(lc) ||
      c.service.toLowerCase().includes(lc) ||
      String(c.channel).includes(lc),
  );
  const filteredDistress = distressFrequencies.filter(
    (d) =>
      d.freq.toLowerCase().includes(lc) ||
      d.service.toLowerCase().includes(lc) ||
      d.designation.toLowerCase().includes(lc) ||
      d.notes.toLowerCase().includes(lc),
  );

  /* ---------------------------------------------------------------- */
  /*  Sub-sections                                                    */
  /* ---------------------------------------------------------------- */

  const renderHierarchy = () => (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white mb-6">Communication Hierarchy</h2>
      <p className="text-zinc-400 mb-6">
        In any crisis, communication infrastructure degrades in a predictable sequence. Plan your comms from most
        accessible to most resilient.
      </p>

      {[
        {
          tier: 1,
          title: "Cell Phone (Modified Use)",
          icon: <Smartphone className="w-6 h-6" />,
          color: "text-green-400 border-green-400/30 bg-green-400/5",
          range: "Tower-dependent",
          tips: [
            "Text messages require far less bandwidth than voice calls — texts may get through when calls fail",
            "Enable airplane mode between check-ins to conserve battery",
            "Pre-program ICE (In Case of Emergency) contacts",
            "Download offline maps before any crisis scenario",
            "Keep a battery bank charged at all times (20,000 mAh minimum)",
          ],
        },
        {
          tier: 2,
          title: "FRS / GMRS Radio",
          icon: <Radio className="w-6 h-6" />,
          color: "text-atomic border-atomic/30 bg-atomic/5",
          range: "1-5 miles (FRS) / 5-25 miles (GMRS)",
          tips: [
            "FRS requires no license — buy and use immediately",
            "GMRS requires an FCC license ($35, covers whole family, 10 years)",
            "Pre-designate a family channel + CTCSS code before any emergency",
            "Channel 20 is the unofficial GMRS emergency calling channel",
            "Elevated positions dramatically increase range — use hilltops or upper floors",
          ],
        },
        {
          tier: 3,
          title: "Ham (Amateur) Radio",
          icon: <Antenna className="w-6 h-6" />,
          color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
          range: "Local to Global",
          tips: [
            "Technician license required — 35 multiple-choice questions, $35 fee",
            "Baofeng UV-5R is the recommended starter radio (~$25)",
            "Join local ARES/RACES for emergency communication training",
            "Repeaters extend handheld range from 5 miles to 50+ miles",
            "HF bands (General license) enable continent-wide and global communication",
          ],
        },
        {
          tier: 4,
          title: "Passive Monitoring",
          icon: <Eye className="w-6 h-6" />,
          color: "text-orange-400 border-orange-400/30 bg-orange-400/5",
          range: "Receive only",
          tips: [
            "NOAA Weather Radio — 7 frequencies, continuous broadcast, SAME alerts",
            "AM radio travels farther at night due to ionospheric skip",
            "Shortwave radio receives international broadcasts (BBC, VOA, Radio Havana)",
            "No license needed for receive-only operation",
            "Crank-powered radios eliminate battery dependency",
          ],
        },
        {
          tier: 5,
          title: "Non-Electronic Signals",
          icon: <Flag className="w-6 h-6" />,
          color: "text-doom border-doom/30 bg-doom/5",
          range: "Line of sight to runner range",
          tips: [
            "Signal mirror — visible up to 10 miles in direct sunlight",
            "Smoke signals — 3 fires in a triangle = universal distress",
            "Runners / couriers — reliable but slow, use written messages",
            "Dead drops — pre-arranged locations for leaving coded messages",
            "Trail markers — use rocks, sticks, or chalk for directional signals",
          ],
        },
      ].map((tier) => (
        <div key={tier.tier} className={`glass-card p-5 border-l-4 ${tier.color}`}>
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Tier</span>
              <span className="text-2xl font-black text-white">{tier.tier}</span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {tier.icon}
                <h3 className="text-lg font-bold text-white">{tier.title}</h3>
              </div>
              <p className="text-sm text-zinc-400 mb-3">Range: {tier.range}</p>
              <ul className="space-y-1.5">
                {tier.tips.map((tip, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                    <ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderSearchBar = () => (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
      <input
        type="text"
        placeholder="Search frequencies, channels, or descriptions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-10 pr-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-atomic transition-colors"
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-xs"
        >
          Clear
        </button>
      )}
    </div>
  );

  const renderNOAA = () => (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">NOAA Weather Radio Frequencies</h2>
      <p className="text-zinc-400 mb-6 text-sm">
        All seven NOAA Weather Radio (NWR) frequencies. Your weather radio scans these automatically. Program all seven
        into any programmable radio for redundancy.
      </p>
      {renderSearchBar()}
      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-sm min-w-[500px]">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Channel</th>
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Frequency (MHz)</th>
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Description</th>
            </tr>
          </thead>
          <tbody>
            {filteredNOAA.map((f) => (
              <tr key={f.channel} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <td className="py-3 px-3 text-white font-mono">WX{f.channel}</td>
                <td className="py-3 px-3 text-atomic font-mono font-bold">{f.freq}</td>
                <td className="py-3 px-3 text-zinc-300">{f.description}</td>
              </tr>
            ))}
            {filteredNOAA.length === 0 && (
              <tr>
                <td colSpan={3} className="py-6 text-center text-zinc-500">
                  No frequencies match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderFRS = () => (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">FRS / GMRS Channel Chart</h2>
      <p className="text-zinc-400 mb-4 text-sm">
        All 22 FRS/GMRS channels. Channels 1-14 are available to FRS radios (no license). Channels 15-22 are GMRS-only
        and require an FCC license. Channel 20 is the recognized emergency calling channel.
      </p>

      <div className="flex flex-wrap gap-2 mb-4 text-xs">
        <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 border border-green-500/20">Shared FRS/GMRS (Ch 1-7)</span>
        <span className="px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">FRS Only (Ch 8-14)</span>
        <span className="px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20">GMRS Only (Ch 15-22)</span>
        <span className="px-2 py-1 rounded bg-doom/10 text-doom border border-doom/20">Emergency (Ch 20)</span>
      </div>

      {renderSearchBar()}
      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Ch</th>
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Frequency (MHz)</th>
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Max Power</th>
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Service</th>
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {filteredFRS.map((c) => {
              const isEmergency = c.channel === 20;
              const rowColor = isEmergency
                ? "bg-doom/10 border-doom/30"
                : c.channel <= 7
                  ? "hover:bg-green-500/5"
                  : c.channel <= 14
                    ? "hover:bg-blue-500/5"
                    : "hover:bg-yellow-500/5";
              return (
                <tr key={c.channel} className={`border-b border-zinc-800 transition-colors ${rowColor}`}>
                  <td className={`py-3 px-3 font-mono font-bold ${isEmergency ? "text-doom" : "text-white"}`}>
                    {c.channel}
                  </td>
                  <td className="py-3 px-3 text-atomic font-mono">{c.freq}</td>
                  <td className="py-3 px-3 text-zinc-300">{c.power}</td>
                  <td className="py-3 px-3 text-zinc-300">{c.service}</td>
                  <td className={`py-3 px-3 ${isEmergency ? "text-doom font-bold" : "text-zinc-400"}`}>
                    {isEmergency && <AlertTriangle className="w-3 h-3 inline mr-1 -mt-0.5" />}
                    {c.note}
                  </td>
                </tr>
              );
            })}
            {filteredFRS.length === 0 && (
              <tr>
                <td colSpan={5} className="py-6 text-center text-zinc-500">
                  No channels match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* CTCSS codes */}
      <div className="mt-8 glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
          <Shield className="w-5 h-5 text-atomic" />
          Common CTCSS Privacy Codes
        </h3>
        <p className="text-sm text-zinc-400 mb-4">
          CTCSS (Continuous Tone-Coded Squelch System) codes filter out transmissions not using your selected tone.
          They do not encrypt — anyone can still hear you — but they prevent your radio from breaking squelch on
          unrelated traffic. Agree on a code with your group in advance.
        </p>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
          {ctcssCodes.map((code, i) => (
            <div key={code} className="bg-zinc-800 rounded px-2 py-1.5 text-center">
              <span className="text-xs text-zinc-500 block">#{i + 1}</span>
              <span className="text-sm font-mono text-white">{code}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDistress = () => (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">International Distress Frequencies</h2>
      <p className="text-zinc-400 mb-6 text-sm">
        These frequencies are monitored 24/7 by government agencies worldwide. Know them by heart — they could save
        your life.
      </p>
      {renderSearchBar()}
      <div className="overflow-x-auto -mx-4 px-4">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Service</th>
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Frequency</th>
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Designation</th>
              <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Notes</th>
            </tr>
          </thead>
          <tbody>
            {filteredDistress.map((d) => (
              <tr key={d.freq} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                <td className="py-3 px-3 text-white font-semibold">{d.service}</td>
                <td className="py-3 px-3 text-doom font-mono font-bold">{d.freq}</td>
                <td className="py-3 px-3 text-atomic">{d.designation}</td>
                <td className="py-3 px-3 text-zinc-300">{d.notes}</td>
              </tr>
            ))}
            {filteredDistress.length === 0 && (
              <tr>
                <td colSpan={4} className="py-6 text-center text-zinc-500">
                  No frequencies match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 glass-card p-4 border-l-4 border-doom">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-doom flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-semibold mb-1">Transmitting on Distress Frequencies</p>
            <p className="text-sm text-zinc-400">
              Only transmit on distress frequencies in genuine life-threatening emergencies. False distress calls are a
              federal crime (up to $10,000 fine and 6 years imprisonment). Monitoring these frequencies is always legal
              and encouraged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderHam = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Ham Radio Quick Start</h2>
        <p className="text-zinc-400 mb-6 text-sm">
          Amateur (ham) radio is the gold standard for emergency communication. When cell towers fail and internet goes
          dark, ham operators keep information flowing.
        </p>
      </div>

      {/* License info */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-atomic" />
          Getting Your License
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-zinc-800/60 rounded-lg p-4">
            <h4 className="font-semibold text-atomic mb-2">Technician Class (Entry Level)</h4>
            <ul className="space-y-1.5 text-sm text-zinc-300">
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />35 multiple-choice questions from a public question pool</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />$35 FCC application fee — valid for 10 years</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />Grants VHF/UHF privileges (local/regional comms)</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />Study for free at hamstudy.org — most pass in 1-2 weeks</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />Take the exam at a local Volunteer Examiner session</li>
            </ul>
          </div>
          <div className="bg-zinc-800/60 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-400 mb-2">General Class (Upgrade)</h4>
            <ul className="space-y-1.5 text-sm text-zinc-300">
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />35 additional questions — take at the same exam session</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />Unlocks HF bands for nationwide and global communication</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />Essential for any serious emergency communications plan</li>
              <li className="flex items-start gap-2"><ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-zinc-500" />HF signals can travel thousands of miles via ionospheric skip</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Recommended radios */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Radio className="w-5 h-5 text-atomic" />
          Recommended Radios
        </h3>
        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Radio</th>
                <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Type</th>
                <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Bands</th>
                <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Power</th>
                <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Price</th>
                <th className="text-left py-3 px-3 text-zinc-400 font-semibold">Notes</th>
              </tr>
            </thead>
            <tbody>
              {recommendedRadios.map((r) => (
                <tr key={r.name} className="border-b border-zinc-800 hover:bg-zinc-800/50 transition-colors">
                  <td className="py-3 px-3 text-white font-semibold">{r.name}</td>
                  <td className="py-3 px-3 text-zinc-300">{r.type}</td>
                  <td className="py-3 px-3 text-atomic font-mono">{r.bands}</td>
                  <td className="py-3 px-3 text-zinc-300">{r.power}</td>
                  <td className="py-3 px-3 text-green-400 font-semibold">{r.price}</td>
                  <td className="py-3 px-3 text-zinc-400">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* How repeaters work */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
          <Signal className="w-5 h-5 text-atomic" />
          How Repeaters Work
        </h3>
        <div className="bg-zinc-800/60 rounded-lg p-4 text-sm text-zinc-300 space-y-2">
          <p>
            A repeater is an automated relay station, typically on a hilltop or tall building, that receives your signal
            on one frequency and simultaneously retransmits it on another at much higher power.
          </p>
          <p>
            With a 5W handheld, your direct range might be 3-5 miles. Through a repeater, that same handheld can reach
            50-100+ miles. Most metro areas have dozens of active repeaters.
          </p>
          <p>
            Find local repeaters at{" "}
            <span className="text-atomic font-semibold">repeaterbook.com</span> and program them into your radio before
            you need them.
          </p>
        </div>
      </div>

      {/* ARES/RACES */}
      <div className="glass-card p-5 border-l-4 border-atomic">
        <div className="flex items-start gap-3">
          <Users className="w-5 h-5 text-atomic flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-semibold mb-1">Join ARES/RACES</p>
            <p className="text-sm text-zinc-400">
              ARES (Amateur Radio Emergency Service) and RACES (Radio Amateur Civil Emergency Service) are volunteer
              organizations that provide emergency communication during disasters. They train regularly and coordinate
              with local emergency management. Search "ARES [your county]" to find your local group — most welcome
              newcomers even before you have a license.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSOP = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">Communication SOP: The 5-5-5 Protocol</h2>
        <p className="text-zinc-400 text-sm">
          A standardized check-in schedule ensures your group maintains contact without burning through batteries.
          Discipline saves lives.
        </p>
      </div>

      {/* Schedule */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-atomic" />
          Check-In Schedule
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { time: "05:00", label: "Morning Check-In", purpose: "Overnight status, supply levels, health check, plan for the day", color: "text-yellow-400 border-yellow-400/30" },
            { time: "12:00", label: "Midday Check-In", purpose: "Progress update, intelligence gathered, hazards encountered, resource needs", color: "text-atomic border-atomic/30" },
            { time: "17:00", label: "Evening Check-In", purpose: "End-of-day status, overnight plan, security posture, next-day intentions", color: "text-orange-400 border-orange-400/30" },
          ].map((slot) => (
            <div key={slot.time} className={`bg-zinc-800/60 rounded-lg p-4 border-t-2 ${slot.color}`}>
              <p className={`text-2xl font-mono font-bold ${slot.color.split(" ")[0]} mb-1`}>{slot.time}</p>
              <p className="text-white font-semibold text-sm mb-2">{slot.label}</p>
              <p className="text-xs text-zinc-400">{slot.purpose}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-zinc-800/40 rounded-lg p-3 text-sm text-zinc-400">
          <p>
            <strong className="text-white">Protocol:</strong> At check-in time, turn on radio, transmit your call sign
            and status code (below). Wait 2 minutes for responses. If no response after 3 attempts, log the missed
            check-in. Three consecutive missed check-ins triggers a welfare check if possible.
          </p>
        </div>
      </div>

      {/* Signal codes */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Info className="w-5 h-5 text-atomic" />
          Status Signal Codes
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { code: "|", name: "ALL CLEAR", meaning: "No issues, all personnel accounted for, continuing as planned", color: "text-green-400 bg-green-400/10 border-green-400/20" },
            { code: "\u2192", name: "MOVING", meaning: "Relocating to a new position — will update next check-in with new location", color: "text-atomic bg-atomic/10 border-atomic/20" },
            { code: "\u25CB", name: "NEED RESUPPLY", meaning: "Running low on critical supplies — specify what is needed (water, food, medical, ammo)", color: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20" },
            { code: "X", name: "EMERGENCY", meaning: "Immediate assistance required — all stations prioritize this transmission", color: "text-doom bg-doom/10 border-doom/20" },
          ].map((sig) => (
            <div key={sig.code} className={`rounded-lg p-4 border ${sig.color}`}>
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-3xl font-mono font-black ${sig.color.split(" ")[0]}`}>{sig.code}</span>
                <span className={`font-bold text-sm ${sig.color.split(" ")[0]}`}>{sig.name}</span>
              </div>
              <p className="text-xs text-zinc-400">{sig.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Family channel worksheet */}
      <div className="glass-card p-5">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Users className="w-5 h-5 text-atomic" />
          Family Channel Designation Worksheet
        </h3>
        <p className="text-sm text-zinc-400 mb-4">
          Fill in your family's pre-arranged communication plan. This information stays in your browser only — nothing
          is transmitted.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-zinc-300 mb-1">Primary Channel</label>
            <input
              type="text"
              placeholder="e.g., FRS Channel 7"
              value={familyChannel}
              onChange={(e) => setFamilyChannel(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-atomic transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-300 mb-1">CTCSS Privacy Code</label>
            <input
              type="text"
              placeholder="e.g., Code 14 (118.8 Hz)"
              value={familyCtcss}
              onChange={(e) => setFamilyCtcss(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-atomic transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-zinc-300 mb-1">Family Call Sign / Code Name</label>
            <input
              type="text"
              placeholder="e.g., FALCON or KD9XYZ"
              value={callSign}
              onChange={(e) => setCallSign(e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-atomic transition-colors"
            />
          </div>
          <div className="sm:col-span-2 grid sm:grid-cols-3 gap-4">
            {(["am", "noon", "pm"] as const).map((slot) => (
              <div key={slot}>
                <label className="block text-sm font-semibold text-zinc-300 mb-1">
                  {slot === "am" ? "05:00 Notes" : slot === "noon" ? "12:00 Notes" : "17:00 Notes"}
                </label>
                <textarea
                  placeholder="Rally point, backup freq, etc."
                  value={checkInNotes[slot]}
                  onChange={(e) => setCheckInNotes((prev) => ({ ...prev, [slot]: e.target.value }))}
                  rows={2}
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-atomic transition-colors resize-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const tabContent: Record<TabId, () => React.ReactNode> = {
    hierarchy: renderHierarchy,
    noaa: renderNOAA,
    frs: renderFRS,
    distress: renderDistress,
    ham: renderHam,
    sop: renderSOP,
  };

  /* ---------------------------------------------------------------- */
  /*  Render                                                          */
  /* ---------------------------------------------------------------- */

  return (
    <div className="min-h-screen bg-zinc-900">
      <div className="container-wide py-8 px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/vault" className="hover:text-white transition-colors">
            The Vault
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-zinc-300">Frequency Reference</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-3">
            Communication Frequency Reference
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            A comprehensive guide to emergency communication frequencies, protocols, and equipment.
            Bookmark this page, print it, and keep a copy in your go-bag.
          </p>
        </div>

        {/* Print button */}
        <div className="flex justify-end mb-6 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-sm text-white transition-colors"
          >
            <Printer className="w-4 h-4" />
            Print This Page
          </button>
        </div>

        {/* Tabs */}
        <div className="print:hidden mb-8">
          <div className="flex flex-wrap gap-1 bg-zinc-800/50 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchTerm("");
                }}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-atomic text-white shadow-lg shadow-atomic/20"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active tab content */}
        <div className="glass-card p-6 sm:p-8">{tabContent[activeTab]()}</div>

        {/* CTA */}
        <div className="mt-10 glass-card p-6 sm:p-8 border border-atomic/20 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Want the full printable Frequency Card?</h2>
          <p className="text-zinc-400 mb-4 max-w-lg mx-auto text-sm">
            Get the complete printable Frequency Reference Card plus the Base Station Setup Guide, radio programming
            cheat sheets, and more — all inside The Vault.
          </p>
          <Link
            to="/vault"
            className="inline-flex items-center gap-2 px-6 py-3 bg-atomic hover:bg-atomic/90 text-white font-bold rounded-lg transition-colors"
          >
            Access The Vault
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-8 print:hidden">
          <Link to="/vault" className="inline-flex items-center gap-2 text-atomic hover:underline text-sm">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to The Vault
          </Link>
        </div>
      </div>
    </div>
  );
}
