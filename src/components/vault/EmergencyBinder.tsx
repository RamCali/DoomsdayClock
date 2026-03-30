import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Phone,
  MapPin,
  Heart,
  PawPrint,
  FileCheck,
  Eye,
  Printer,
  Download,
  Upload,
  Save,
  Plus,
  Trash2,
  CheckSquare,
  Square,
  Shield,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { updateMetaTags, resetToDefaults } from "../../lib/seo";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface FamilyMember {
  id: string;
  name: string;
  age: string;
  bloodType: string;
  medicalConditions: string;
  medications: string;
  allergies: string;
}

interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  phone: string;
  altPhone: string;
  address: string;
  isOutOfState: boolean;
}

interface RallyPoint {
  name: string;
  address: string;
  description: string;
  signalMethod: string;
  notes: string;
}

interface MedicalInfo {
  doctorName: string;
  doctorPhone: string;
  doctorAddress: string;
  hospitalName: string;
  hospitalPhone: string;
  hospitalAddress: string;
  pharmacyName: string;
  pharmacyPhone: string;
  pharmacyAddress: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  insurancePhone: string;
  specialEquipment: string;
}

interface Pet {
  id: string;
  name: string;
  species: string;
  breed: string;
  vetName: string;
  vetPhone: string;
  medications: string;
  microchipNumber: string;
  emergencyKitNotes: string;
}

interface BinderData {
  familyName: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  members: FamilyMember[];
  contacts: EmergencyContact[];
  alphaPoint: RallyPoint;
  bravoPoint: RallyPoint;
  charliePoint: RallyPoint;
  medical: MedicalInfo;
  pets: Pet[];
  documentChecklist: Record<string, boolean>;
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const STORAGE_KEY = "doomsdayclock-emergency-binder";

const BLOOD_TYPES = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const DOCUMENT_ITEMS = [
  "Photo IDs (copies)",
  "Passports (copies)",
  "Birth certificates (copies)",
  "Social Security cards (copies)",
  "Insurance policies",
  "Property deed/lease",
  "Vehicle titles/registration",
  "Bank account information",
  "Investment account information",
  "Will/trust documents",
  "Power of attorney",
  "Medical records",
  "Prescription list",
  "Family photos (for identification)",
  "Pet vaccination records",
];

const STEPS = [
  { label: "Family", icon: Users },
  { label: "Contacts", icon: Phone },
  { label: "Rally Points", icon: MapPin },
  { label: "Medical", icon: Heart },
  { label: "Pets", icon: PawPrint },
  { label: "Documents", icon: FileCheck },
  { label: "Review", icon: Eye },
];

function uid(): string {
  return Math.random().toString(36).slice(2, 10);
}

function emptyMember(): FamilyMember {
  return { id: uid(), name: "", age: "", bloodType: "", medicalConditions: "", medications: "", allergies: "" };
}

function emptyContact(isOutOfState = false): EmergencyContact {
  return { id: uid(), name: "", relationship: "", phone: "", altPhone: "", address: "", isOutOfState };
}

function emptyRallyPoint(): RallyPoint {
  return { name: "", address: "", description: "", signalMethod: "", notes: "" };
}

function emptyMedical(): MedicalInfo {
  return {
    doctorName: "", doctorPhone: "", doctorAddress: "",
    hospitalName: "", hospitalPhone: "", hospitalAddress: "",
    pharmacyName: "", pharmacyPhone: "", pharmacyAddress: "",
    insuranceProvider: "", insurancePolicyNumber: "", insurancePhone: "",
    specialEquipment: "",
  };
}

function emptyPet(): Pet {
  return { id: uid(), name: "", species: "", breed: "", vetName: "", vetPhone: "", medications: "", microchipNumber: "", emergencyKitNotes: "" };
}

function defaultData(): BinderData {
  return {
    familyName: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    members: [emptyMember()],
    contacts: [emptyContact(), emptyContact(), emptyContact(true)],
    alphaPoint: { ...emptyRallyPoint(), name: "Home" },
    bravoPoint: emptyRallyPoint(),
    charliePoint: emptyRallyPoint(),
    medical: emptyMedical(),
    pets: [],
    documentChecklist: Object.fromEntries(DOCUMENT_ITEMS.map((d) => [d, false])),
  };
}

/* ------------------------------------------------------------------ */
/*  Print styles (injected once)                                       */
/* ------------------------------------------------------------------ */

const PRINT_STYLE_ID = "emergency-binder-print-styles";

function injectPrintStyles() {
  if (document.getElementById(PRINT_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = PRINT_STYLE_ID;
  style.textContent = `
    @media print {
      /* Hide everything except the binder */
      body > *:not(#root) { display: none !important; }
      header, footer, nav, .no-print, [data-no-print] { display: none !important; }

      /* Reset backgrounds for print */
      body, html, #root { background: white !important; color: black !important; }

      .print-binder { display: block !important; }
      .print-binder * { color: black !important; border-color: #333 !important; }

      .print-section {
        page-break-inside: avoid;
        border: 1px solid #333;
        padding: 16px;
        margin-bottom: 16px;
        border-radius: 4px;
      }

      .print-section h2 {
        font-size: 18px;
        font-weight: bold;
        border-bottom: 2px solid #333;
        padding-bottom: 4px;
        margin-bottom: 12px;
      }

      .print-table {
        width: 100%;
        border-collapse: collapse;
        margin: 8px 0;
      }
      .print-table th, .print-table td {
        border: 1px solid #666;
        padding: 4px 8px;
        text-align: left;
        font-size: 12px;
      }
      .print-table th {
        background: #eee !important;
        font-weight: bold;
      }

      .wallet-card {
        border: 2px dashed #333;
        padding: 12px;
        max-width: 3.5in;
        font-size: 9px;
        page-break-inside: avoid;
      }

      .wallet-card h3 { font-size: 11px; margin-bottom: 4px; }
    }
  `;
  document.head.appendChild(style);
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function Input({ label, value, onChange, required, placeholder, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void;
  required?: boolean; placeholder?: string; type?: string;
}) {
  const missing = required && !value.trim();
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1">
        {label} {required && <span className="text-doom">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-zinc-800 border ${missing ? "border-doom/60" : "border-zinc-700"} rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-atomic/50 transition-colors`}
      />
    </div>
  );
}

function TextArea({ label, value, onChange, placeholder, rows = 2 }: {
  label: string; value: string; onChange: (v: string) => void;
  placeholder?: string; rows?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-atomic/50 transition-colors resize-y"
      />
    </div>
  );
}

function Select({ label, value, onChange, options, required }: {
  label: string; value: string; onChange: (v: string) => void; options: string[]; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1">
        {label} {required && <span className="text-doom">*</span>}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-atomic/50 transition-colors"
      >
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function EmergencyBinder() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BinderData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch { /* ignore */ }
    return defaultData();
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  // SEO
  useEffect(() => {
    updateMetaTags({
      title: "Family Emergency Binder Generator | Free Printable | DoomsdayClock.net",
      description: "Create a comprehensive, printable family emergency binder with contacts, rally points, medical info, and document checklists. Free interactive generator with auto-save.",
      path: "/vault/emergency-binder",
      newsKeywords: "emergency binder, family emergency plan, printable emergency binder, disaster preparedness binder, emergency contact sheet, family rally point",
      section: "The Vault",
      author: "DoomsdayClock.net",
    });
    injectPrintStyles();
    return () => resetToDefaults();
  }, []);

  // Auto-save
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch { /* storage full */ }
  }, [data]);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  /* helpers */
  const update = <K extends keyof BinderData>(key: K, value: BinderData[K]) =>
    setData((prev) => ({ ...prev, [key]: value }));

  const updateMember = (id: string, field: keyof FamilyMember, value: string) =>
    update("members", data.members.map((m) => (m.id === id ? { ...m, [field]: value } : m)));

  const updateContact = (id: string, field: keyof EmergencyContact, value: string | boolean) =>
    update("contacts", data.contacts.map((c) => (c.id === id ? { ...c, [field]: value } : c)));

  const updatePet = (id: string, field: keyof Pet, value: string) =>
    update("pets", data.pets.map((p) => (p.id === id ? { ...p, [field]: value } : p)));

  const updateRally = (point: "alphaPoint" | "bravoPoint" | "charliePoint", field: keyof RallyPoint, value: string) =>
    update(point, { ...data[point], [field]: value });

  const updateMedical = (field: keyof MedicalInfo, value: string) =>
    update("medical", { ...data.medical, [field]: value });

  const toggleDoc = (doc: string) =>
    update("documentChecklist", { ...data.documentChecklist, [doc]: !data.documentChecklist[doc] });

  /* validation */
  const validateStep = (s: number): boolean => {
    switch (s) {
      case 0: return !!data.familyName.trim() && data.members.length > 0 && data.members.every((m) => m.name.trim());
      case 1: return data.contacts.length >= 3 && data.contacts.slice(0, 3).every((c) => c.name.trim() && c.phone.trim());
      case 2: return !!data.alphaPoint.address.trim();
      default: return true;
    }
  };

  /* export / import */
  const exportJson = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.familyName || "emergency"}-binder-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target?.result as string) as BinderData;
        setData(parsed);
        setStep(6);
      } catch {
        alert("Invalid binder file. Please select a valid .json export.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  /* ---------------------------------------------------------------- */
  /*  Step Renderers                                                    */
  /* ---------------------------------------------------------------- */

  const renderStep0 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Users className="w-6 h-6 text-atomic" /> Family Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="Family Name" value={data.familyName} onChange={(v) => update("familyName", v)} required placeholder="e.g. Johnson" />
        <div />
        <Input label="Street Address" value={data.street} onChange={(v) => update("street", v)} required placeholder="123 Main St" />
        <Input label="City" value={data.city} onChange={(v) => update("city", v)} required placeholder="Springfield" />
        <Input label="State" value={data.state} onChange={(v) => update("state", v)} required placeholder="MO" />
        <Input label="ZIP Code" value={data.zip} onChange={(v) => update("zip", v)} required placeholder="65801" />
      </div>

      <div className="border-t border-zinc-700 pt-4">
        <h3 className="text-lg font-semibold text-white mb-3">Family Members</h3>
        {data.members.map((m, i) => (
          <div key={m.id} className="glass-card p-4 mb-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-atomic font-semibold">Member {i + 1}</span>
              {data.members.length > 1 && (
                <button onClick={() => update("members", data.members.filter((x) => x.id !== m.id))} className="text-zinc-500 hover:text-doom transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Input label="Full Name" value={m.name} onChange={(v) => updateMember(m.id, "name", v)} required placeholder="Jane Johnson" />
              <Input label="Age" value={m.age} onChange={(v) => updateMember(m.id, "age", v)} placeholder="34" />
              <Select label="Blood Type" value={m.bloodType} onChange={(v) => updateMember(m.id, "bloodType", v)} options={BLOOD_TYPES} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <TextArea label="Medical Conditions" value={m.medicalConditions} onChange={(v) => updateMember(m.id, "medicalConditions", v)} placeholder="Asthma, diabetes..." />
              <TextArea label="Medications" value={m.medications} onChange={(v) => updateMember(m.id, "medications", v)} placeholder="Albuterol inhaler..." />
              <TextArea label="Allergies" value={m.allergies} onChange={(v) => updateMember(m.id, "allergies", v)} placeholder="Penicillin, peanuts..." />
            </div>
          </div>
        ))}
        <button onClick={() => update("members", [...data.members, emptyMember()])} className="flex items-center gap-2 text-atomic hover:text-atomic/80 transition-colors text-sm font-medium">
          <Plus className="w-4 h-4" /> Add Family Member
        </button>
      </div>
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Phone className="w-6 h-6 text-atomic" /> Emergency Contacts</h2>
      <p className="text-zinc-400 text-sm">Minimum 3 contacts required. Include at least one out-of-state contact — in a disaster, local phone lines may be jammed but long-distance calls often still work.</p>
      {data.contacts.map((c, i) => (
        <div key={c.id} className="glass-card p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-atomic font-semibold">
              Contact {i + 1}
              {c.isOutOfState && <span className="ml-2 text-xs bg-atomic/20 text-atomic px-2 py-0.5 rounded-full">Out-of-State</span>}
            </span>
            {data.contacts.length > 3 && (
              <button onClick={() => update("contacts", data.contacts.filter((x) => x.id !== c.id))} className="text-zinc-500 hover:text-doom transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Input label="Name" value={c.name} onChange={(v) => updateContact(c.id, "name", v)} required placeholder="John Smith" />
            <Input label="Relationship" value={c.relationship} onChange={(v) => updateContact(c.id, "relationship", v)} placeholder="Uncle" />
            <Input label="Phone" value={c.phone} onChange={(v) => updateContact(c.id, "phone", v)} required placeholder="(555) 123-4567" type="tel" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Input label="Alt Phone" value={c.altPhone} onChange={(v) => updateContact(c.id, "altPhone", v)} placeholder="(555) 987-6543" type="tel" />
            <div className="md:col-span-2">
              <Input label="Address" value={c.address} onChange={(v) => updateContact(c.id, "address", v)} placeholder="456 Oak Ave, Springfield, MO 65801" />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-zinc-400 cursor-pointer">
            <input type="checkbox" checked={c.isOutOfState} onChange={() => updateContact(c.id, "isOutOfState", !c.isOutOfState)} className="accent-atomic" />
            Out-of-State Contact
          </label>
        </div>
      ))}
      {data.contacts.length < 10 && (
        <button onClick={() => update("contacts", [...data.contacts, emptyContact()])} className="flex items-center gap-2 text-atomic hover:text-atomic/80 transition-colors text-sm font-medium">
          <Plus className="w-4 h-4" /> Add Contact
        </button>
      )}
    </div>
  );

  const renderRallyPoint = (key: "alphaPoint" | "bravoPoint" | "charliePoint", title: string, subtitle: string) => (
    <div className="glass-card p-4 space-y-3">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-zinc-400 text-xs">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {key !== "alphaPoint" && <Input label="Location Name" value={data[key].name} onChange={(v) => updateRally(key, "name", v)} placeholder="Riverside Park Pavilion" />}
        <Input label="Address" value={data[key].address} onChange={(v) => updateRally(key, "address", v)} required={key === "alphaPoint"} placeholder="123 Main St, Springfield, MO" />
      </div>
      <TextArea label="Description / Landmarks" value={data[key].description} onChange={(v) => updateRally(key, "description", v)} placeholder="Near the large oak tree on the south side..." />
      {key === "alphaPoint" && (
        <TextArea label="How to Signal Arrival" value={data[key].signalMethod} onChange={(v) => updateRally(key, "signalMethod", v)} placeholder="Place red cloth on mailbox, leave chalk mark on sidewalk..." />
      )}
      <TextArea label="Additional Notes / Instructions" value={data[key].notes} onChange={(v) => updateRally(key, "notes", v)} placeholder="If home is compromised, proceed to Bravo Point..." />
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2"><MapPin className="w-6 h-6 text-atomic" /> Rally Points</h2>
      <p className="text-zinc-400 text-sm">Pre-designated meeting locations if your family is separated during an emergency. Memorize these locations.</p>
      {renderRallyPoint("alphaPoint", "Alpha Point (Home)", "Your primary residence. Where you meet first.")}
      {renderRallyPoint("bravoPoint", "Bravo Point (Local, 1-3 miles)", "A nearby location outside your neighborhood if home is inaccessible.")}
      {renderRallyPoint("charliePoint", "Charlie Point (Regional, 20-50 miles)", "A distant rally point if the entire local area must be evacuated.")}
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Heart className="w-6 h-6 text-atomic" /> Medical Information</h2>

      <div className="glass-card p-4 space-y-3">
        <h3 className="text-lg font-semibold text-white">Family Doctor</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Input label="Name" value={data.medical.doctorName} onChange={(v) => updateMedical("doctorName", v)} placeholder="Dr. Sarah Williams" />
          <Input label="Phone" value={data.medical.doctorPhone} onChange={(v) => updateMedical("doctorPhone", v)} placeholder="(555) 111-2222" type="tel" />
          <Input label="Address" value={data.medical.doctorAddress} onChange={(v) => updateMedical("doctorAddress", v)} placeholder="100 Medical Blvd" />
        </div>
      </div>

      <div className="glass-card p-4 space-y-3">
        <h3 className="text-lg font-semibold text-white">Hospital</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Input label="Name" value={data.medical.hospitalName} onChange={(v) => updateMedical("hospitalName", v)} placeholder="Memorial Hospital" />
          <Input label="Phone" value={data.medical.hospitalPhone} onChange={(v) => updateMedical("hospitalPhone", v)} placeholder="(555) 333-4444" type="tel" />
          <Input label="Address" value={data.medical.hospitalAddress} onChange={(v) => updateMedical("hospitalAddress", v)} placeholder="500 Hospital Dr" />
        </div>
      </div>

      <div className="glass-card p-4 space-y-3">
        <h3 className="text-lg font-semibold text-white">Pharmacy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Input label="Name" value={data.medical.pharmacyName} onChange={(v) => updateMedical("pharmacyName", v)} placeholder="Walgreens #1234" />
          <Input label="Phone" value={data.medical.pharmacyPhone} onChange={(v) => updateMedical("pharmacyPhone", v)} placeholder="(555) 555-6666" type="tel" />
          <Input label="Address" value={data.medical.pharmacyAddress} onChange={(v) => updateMedical("pharmacyAddress", v)} placeholder="200 Pharmacy Rd" />
        </div>
      </div>

      <div className="glass-card p-4 space-y-3">
        <h3 className="text-lg font-semibold text-white">Insurance</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Input label="Provider" value={data.medical.insuranceProvider} onChange={(v) => updateMedical("insuranceProvider", v)} placeholder="Blue Cross Blue Shield" />
          <Input label="Policy Number" value={data.medical.insurancePolicyNumber} onChange={(v) => updateMedical("insurancePolicyNumber", v)} placeholder="BCBS-123456789" />
          <Input label="Phone" value={data.medical.insurancePhone} onChange={(v) => updateMedical("insurancePhone", v)} placeholder="1-800-555-0000" type="tel" />
        </div>
      </div>

      <div className="glass-card p-4 space-y-3">
        <h3 className="text-lg font-semibold text-white">Special Medical Equipment</h3>
        <TextArea label="Equipment Dependencies" value={data.medical.specialEquipment} onChange={(v) => updateMedical("specialEquipment", v)} placeholder="CPAP machine, insulin pump, oxygen concentrator, wheelchair..." rows={3} />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2"><PawPrint className="w-6 h-6 text-atomic" /> Pet Information <span className="text-zinc-500 text-sm font-normal">(Optional)</span></h2>
      {data.pets.map((p, i) => (
        <div key={p.id} className="glass-card p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-atomic font-semibold">Pet {i + 1}</span>
            <button onClick={() => update("pets", data.pets.filter((x) => x.id !== p.id))} className="text-zinc-500 hover:text-doom transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Input label="Name" value={p.name} onChange={(v) => updatePet(p.id, "name", v)} placeholder="Buddy" />
            <Input label="Species" value={p.species} onChange={(v) => updatePet(p.id, "species", v)} placeholder="Dog" />
            <Input label="Breed" value={p.breed} onChange={(v) => updatePet(p.id, "breed", v)} placeholder="Golden Retriever" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Input label="Vet Name" value={p.vetName} onChange={(v) => updatePet(p.id, "vetName", v)} placeholder="Dr. Pawson" />
            <Input label="Vet Phone" value={p.vetPhone} onChange={(v) => updatePet(p.id, "vetPhone", v)} placeholder="(555) 777-8888" type="tel" />
            <Input label="Microchip Number" value={p.microchipNumber} onChange={(v) => updatePet(p.id, "microchipNumber", v)} placeholder="985112345678901" />
          </div>
          <TextArea label="Medications" value={p.medications} onChange={(v) => updatePet(p.id, "medications", v)} placeholder="Heartworm prevention monthly..." />
          <TextArea label="Emergency Kit Notes" value={p.emergencyKitNotes} onChange={(v) => updatePet(p.id, "emergencyKitNotes", v)} placeholder="3 days of food, leash, carrier, vaccination records..." />
        </div>
      ))}
      <button onClick={() => update("pets", [...data.pets, emptyPet()])} className="flex items-center gap-2 text-atomic hover:text-atomic/80 transition-colors text-sm font-medium">
        <Plus className="w-4 h-4" /> Add Pet
      </button>
    </div>
  );

  const renderStep5 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2"><FileCheck className="w-6 h-6 text-atomic" /> Important Documents Checklist</h2>
      <p className="text-zinc-400 text-sm">Check off documents you have gathered (or plan to gather) for your physical emergency binder. Store copies in a waterproof bag.</p>
      <div className="glass-card p-4 space-y-2">
        {DOCUMENT_ITEMS.map((doc) => (
          <button
            key={doc}
            onClick={() => toggleDoc(doc)}
            className="w-full flex items-center gap-3 text-left px-3 py-2 rounded-lg hover:bg-zinc-800/50 transition-colors"
          >
            {data.documentChecklist[doc] ? (
              <CheckSquare className="w-5 h-5 text-green-400 shrink-0" />
            ) : (
              <Square className="w-5 h-5 text-zinc-600 shrink-0" />
            )}
            <span className={data.documentChecklist[doc] ? "text-white" : "text-zinc-400"}>{doc}</span>
          </button>
        ))}
      </div>
      <p className="text-zinc-500 text-xs">
        Checked: {Object.values(data.documentChecklist).filter(Boolean).length} / {DOCUMENT_ITEMS.length}
      </p>
    </div>
  );

  /* ---------------------------------------------------------------- */
  /*  Review / Print Step                                              */
  /* ---------------------------------------------------------------- */

  const renderReviewSection = (title: string, children: React.ReactNode) => (
    <div className="print-section glass-card p-5 space-y-3">
      <h2 className="text-xl font-bold text-white border-b border-zinc-700 pb-2">{title}</h2>
      {children}
    </div>
  );

  const infoRow = (label: string, value: string) =>
    value ? <div className="flex gap-2 text-sm"><span className="text-zinc-400 shrink-0 w-36">{label}:</span><span className="text-white">{value}</span></div> : null;

  const renderStep6 = () => (
    <div className="space-y-6 print-binder">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2 no-print"><Eye className="w-6 h-6 text-atomic" /> Review & Generate</h2>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 no-print">
        <button onClick={() => window.print()} className="flex items-center gap-2 bg-doom hover:bg-doom/80 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">
          <Printer className="w-4 h-4" /> Print Binder
        </button>
        <button onClick={exportJson} className="flex items-center gap-2 bg-atomic hover:bg-atomic/80 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">
          <Download className="w-4 h-4" /> Save Data (.json)
        </button>
        <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">
          <Upload className="w-4 h-4" /> Load Previous Data
        </button>
        <input ref={fileInputRef} type="file" accept=".json" onChange={importJson} className="hidden" />
      </div>

      {/* Print header */}
      <div className="print-section hidden print:block text-center">
        <h1 className="text-2xl font-bold">{data.familyName || "Family"} Emergency Binder</h1>
        <p className="text-sm">Generated {new Date().toLocaleDateString()} via DoomsdayClock.net</p>
      </div>

      {/* Family Info */}
      {renderReviewSection("Family Information", (
        <>
          {infoRow("Family Name", data.familyName)}
          {infoRow("Address", [data.street, data.city, data.state, data.zip].filter(Boolean).join(", "))}
          {data.members.length > 0 && (
            <div className="mt-3 overflow-x-auto">
              <table className="print-table w-full text-sm">
                <thead><tr className="bg-zinc-800">
                  <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Name</th>
                  <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Age</th>
                  <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Blood</th>
                  <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Conditions</th>
                  <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Medications</th>
                  <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Allergies</th>
                </tr></thead>
                <tbody>
                  {data.members.map((m) => (
                    <tr key={m.id} className="border-t border-zinc-700">
                      <td className="px-3 py-2 text-white">{m.name || "-"}</td>
                      <td className="px-3 py-2 text-zinc-300">{m.age || "-"}</td>
                      <td className="px-3 py-2 text-zinc-300">{m.bloodType || "-"}</td>
                      <td className="px-3 py-2 text-zinc-300">{m.medicalConditions || "-"}</td>
                      <td className="px-3 py-2 text-zinc-300">{m.medications || "-"}</td>
                      <td className="px-3 py-2 text-zinc-300">{m.allergies || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ))}

      {/* Contacts */}
      {renderReviewSection("Emergency Contacts", (
        <div className="overflow-x-auto">
          <table className="print-table w-full text-sm">
            <thead><tr className="bg-zinc-800">
              <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Name</th>
              <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Relation</th>
              <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Phone</th>
              <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Alt Phone</th>
              <th className="px-3 py-2 text-left text-zinc-300 font-semibold">Address</th>
            </tr></thead>
            <tbody>
              {data.contacts.map((c) => (
                <tr key={c.id} className="border-t border-zinc-700">
                  <td className="px-3 py-2 text-white">{c.name || "-"}{c.isOutOfState ? " *" : ""}</td>
                  <td className="px-3 py-2 text-zinc-300">{c.relationship || "-"}</td>
                  <td className="px-3 py-2 text-zinc-300">{c.phone || "-"}</td>
                  <td className="px-3 py-2 text-zinc-300">{c.altPhone || "-"}</td>
                  <td className="px-3 py-2 text-zinc-300">{c.address || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-zinc-500 text-xs mt-1">* = Out-of-State Contact</p>
        </div>
      ))}

      {/* Rally Points */}
      {renderReviewSection("Rally Points", (
        <div className="space-y-4">
          {([
            ["Alpha (Home)", data.alphaPoint],
            ["Bravo (Local)", data.bravoPoint],
            ["Charlie (Regional)", data.charliePoint],
          ] as [string, RallyPoint][]).map(([label, rp]) => (
            <div key={label} className="border border-zinc-700 rounded-lg p-3">
              <h3 className="text-atomic font-semibold text-sm mb-1">{label}{rp.name && rp.name !== "Home" ? ` - ${rp.name}` : ""}</h3>
              {infoRow("Address", rp.address)}
              {infoRow("Description", rp.description)}
              {rp.signalMethod && infoRow("Signal", rp.signalMethod)}
              {infoRow("Notes", rp.notes)}
            </div>
          ))}
        </div>
      ))}

      {/* Medical */}
      {renderReviewSection("Medical Information", (
        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-semibold text-atomic mb-1">Family Doctor</h4>
              {infoRow("Name", data.medical.doctorName)}
              {infoRow("Phone", data.medical.doctorPhone)}
              {infoRow("Address", data.medical.doctorAddress)}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-atomic mb-1">Hospital</h4>
              {infoRow("Name", data.medical.hospitalName)}
              {infoRow("Phone", data.medical.hospitalPhone)}
              {infoRow("Address", data.medical.hospitalAddress)}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-atomic mb-1">Pharmacy</h4>
              {infoRow("Name", data.medical.pharmacyName)}
              {infoRow("Phone", data.medical.pharmacyPhone)}
              {infoRow("Address", data.medical.pharmacyAddress)}
            </div>
            <div>
              <h4 className="text-sm font-semibold text-atomic mb-1">Insurance</h4>
              {infoRow("Provider", data.medical.insuranceProvider)}
              {infoRow("Policy #", data.medical.insurancePolicyNumber)}
              {infoRow("Phone", data.medical.insurancePhone)}
            </div>
          </div>
          {data.medical.specialEquipment && (
            <div>
              <h4 className="text-sm font-semibold text-doom mb-1">Special Equipment Dependencies</h4>
              <p className="text-zinc-300 text-sm">{data.medical.specialEquipment}</p>
            </div>
          )}
        </div>
      ))}

      {/* Pets */}
      {data.pets.length > 0 && renderReviewSection("Pet Information", (
        <div className="space-y-3">
          {data.pets.map((p, i) => (
            <div key={p.id} className="border border-zinc-700 rounded-lg p-3">
              <h4 className="text-atomic font-semibold text-sm mb-1">Pet {i + 1}: {p.name || "Unnamed"}</h4>
              {infoRow("Species / Breed", [p.species, p.breed].filter(Boolean).join(" / "))}
              {infoRow("Vet", p.vetName)}
              {infoRow("Vet Phone", p.vetPhone)}
              {infoRow("Microchip", p.microchipNumber)}
              {infoRow("Medications", p.medications)}
              {infoRow("Kit Notes", p.emergencyKitNotes)}
            </div>
          ))}
        </div>
      ))}

      {/* Documents Checklist */}
      {renderReviewSection("Documents Checklist", (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {DOCUMENT_ITEMS.map((doc) => (
            <div key={doc} className="flex items-center gap-2 text-sm py-0.5">
              {data.documentChecklist[doc] ? (
                <CheckSquare className="w-4 h-4 text-green-400 shrink-0" />
              ) : (
                <Square className="w-4 h-4 text-zinc-600 shrink-0" />
              )}
              <span className={data.documentChecklist[doc] ? "text-white" : "text-zinc-500"}>{doc}</span>
            </div>
          ))}
        </div>
      ))}

      {/* FEP Wallet Card */}
      {renderReviewSection("Family Emergency Plan — Wallet Card", (
        <div className="wallet-card border-2 border-dashed border-zinc-600 rounded-lg p-4 max-w-sm">
          <h3 className="text-sm font-bold text-atomic mb-2">FAMILY EMERGENCY CARD</h3>
          <div className="space-y-1 text-xs">
            <p className="text-white font-semibold">{data.familyName || "___"} Family</p>
            <p className="text-zinc-300">Home: {data.street || "___"}, {data.city || "___"} {data.state || "__"} {data.zip || "_____"}</p>
            <div className="border-t border-zinc-700 my-1 pt-1">
              <p className="font-semibold text-zinc-300">Emergency Contacts:</p>
              {data.contacts.slice(0, 3).map((c, i) => (
                <p key={i} className="text-zinc-400">{c.name || "___"}: {c.phone || "___"}{c.isOutOfState ? " (OOS)" : ""}</p>
              ))}
            </div>
            <div className="border-t border-zinc-700 my-1 pt-1">
              <p className="font-semibold text-zinc-300">Rally Points:</p>
              <p className="text-zinc-400">A: {data.alphaPoint.address || "Home address"}</p>
              <p className="text-zinc-400">B: {data.bravoPoint.name || data.bravoPoint.address || "___"}</p>
              <p className="text-zinc-400">C: {data.charliePoint.name || data.charliePoint.address || "___"}</p>
            </div>
            <div className="border-t border-zinc-700 my-1 pt-1">
              <p className="text-zinc-400">Doctor: {data.medical.doctorPhone || "___"}</p>
              <p className="text-zinc-400">Hospital: {data.medical.hospitalPhone || "___"}</p>
              <p className="text-zinc-400">Insurance: {data.medical.insurancePolicyNumber || "___"}</p>
            </div>
          </div>
          <p className="text-[8px] text-zinc-600 mt-2">Cut along dashed line. Laminate and keep in wallet.</p>
        </div>
      ))}

      {/* CTA */}
      <div className="glass-card p-6 border border-atomic/30 text-center no-print">
        <Shield className="w-10 h-10 text-atomic mx-auto mb-3" />
        <h3 className="text-lg font-bold text-white mb-2">Want the Full Emergency Binder?</h3>
        <p className="text-zinc-400 text-sm mb-4">Get the complete Binder Generator with professional PDF export and 20+ additional pages in The Vault.</p>
        <Link to="/vault" className="inline-flex items-center gap-2 bg-atomic hover:bg-atomic/80 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
          Unlock The Vault <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );

  const stepRenderers = [renderStep0, renderStep1, renderStep2, renderStep3, renderStep4, renderStep5, renderStep6];

  /* ---------------------------------------------------------------- */
  /*  Main Render                                                      */
  /* ---------------------------------------------------------------- */

  return (
    <div className="min-h-screen bg-zinc-900 pt-20 pb-16">
      <div className="container-wide px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-zinc-400 mb-6 no-print">
          <Link to="/" className="hover:text-atomic transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/vault" className="hover:text-atomic transition-colors">The Vault</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">Emergency Binder</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-8 no-print">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            <span className="text-doom">Emergency</span> Binder Generator
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Build a comprehensive, printable family emergency binder. Your data is saved automatically in your browser and never sent to any server.
          </p>
        </div>

        {/* Load Previous Data (top-level shortcut) */}
        {step === 0 && (
          <div className="flex justify-center gap-3 mb-6 no-print">
            <button onClick={() => fileInputRef.current?.click()} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-atomic transition-colors">
              <Upload className="w-4 h-4" /> Load Previous Binder (.json)
            </button>
            <input ref={fileInputRef} type="file" accept=".json" onChange={importJson} className="hidden" />
          </div>
        )}

        {/* Step Indicator */}
        <div className="flex items-center justify-center gap-1 mb-8 no-print overflow-x-auto pb-2">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === step;
            const isComplete = i < step;
            return (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-atomic/20 text-atomic border border-atomic/40"
                    : isComplete
                    ? "bg-zinc-800 text-green-400 border border-green-400/20"
                    : "bg-zinc-800/50 text-zinc-500 border border-zinc-700/50"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{s.label}</span>
                <span className="sm:hidden">{i + 1}</span>
              </button>
            );
          })}
        </div>

        {/* Progress bar */}
        <div className="w-full max-w-2xl mx-auto mb-8 no-print">
          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-atomic to-doom rounded-full transition-all duration-500"
              style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
            />
          </div>
          <p className="text-zinc-500 text-xs text-center mt-1">Step {step + 1} of {STEPS.length}</p>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto">
          {stepRenderers[step]()}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between max-w-4xl mx-auto mt-8 no-print">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          >
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>

          {step < STEPS.length - 1 ? (
            <button
              onClick={() => {
                if (!validateStep(step)) {
                  alert("Please fill in all required fields before proceeding.");
                  return;
                }
                setStep((s) => s + 1);
              }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-colors bg-atomic hover:bg-atomic/80 text-white"
            >
              Next <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-colors bg-doom hover:bg-doom/80 text-white"
            >
              <Printer className="w-4 h-4" /> Print Binder
            </button>
          )}
        </div>

        {/* Auto-save indicator */}
        <div className="flex items-center justify-center gap-2 mt-6 text-xs text-zinc-600 no-print">
          <Save className="w-3 h-3" /> Data auto-saved to browser
        </div>

        {/* Security notice */}
        <div className="max-w-2xl mx-auto mt-8 p-4 rounded-lg border border-zinc-700/50 bg-zinc-800/30 no-print">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-doom shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">Privacy Notice</h4>
              <p className="text-xs text-zinc-400">Your emergency binder data is stored <strong className="text-zinc-300">only in your browser's local storage</strong>. It is never transmitted to any server. For maximum security, print your binder and clear browser data when done. Use the "Save Data" button to create a backup file you control.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
