import { motion } from "framer-motion";

type GearItem = {
  label: string;
  value: string;
};

const mobileDevItems: GearItem[] = [
  { label: "Device", value: "ASUS ROG Phone 3" },
  { label: "Display", value: "6.59\" AMOLED, 144Hz" },
  { label: "Chip", value: "Snapdragon 865+" },
  { label: "Battery", value: "6000mAh, 30W" },
];

const labelToEmoji: Record<string, string> = {
  Location: "📍",
  Build: "🛠️",
  CPU: "🧠",
  Motherboard: "🧩",
  "CPU Cooler": "❄️",
  RAM: "🧬",
  GPU: "🎮",
  Storage: "💾",
  PSU: "🔌",
  Case: "🖥️",
  "Operating System": "🪟",
  Monitors: "🖼️",
  Peripherals: "⌨️",
  "Editor/IDE": "📝",
  Terminal: ">_",
  Laptop: "💻",
  "Second Laptop": "💻",
  Device: "📱",
  Display: "📺",
  Chip: "⚙️",
  Battery: "🔋",
};

function getEmoji(label: string): string {
  return labelToEmoji[label] ?? "🔷";
}

const homePcItems: GearItem[] = [
  { label: "Location", value: "Home" },
  { label: "Build", value: "Custom PC (White RGB Build)" },
  { label: "CPU", value: "Intel Core i5-14600K" },
  { label: "Motherboard", value: "MSI B760M Gaming Plus WIFI (DDR5)" },
  { label: "CPU Cooler", value: "Cooler Master MasterLiquid 360L Core ARGB (White)" },
  { label: "RAM", value: "32GB DDR5 (Adata XPG Lancer RGB 6000MHz)" },
  { label: "GPU", value: "Sapphire PURE RX 7700 XT 12GB (White)" },
  { label: "Storage", value: "Adata XPG Gammix S70 Blade 1TB NVMe Gen4" },
  { label: "PSU", value: "Cooler Master MWE 850 V2 (80+ Gold, Fully Modular)" },
  { label: "Case", value: "Ant Esports Crystal ARGB (White)" },
  { label: "Operating System", value: "Windows 11" },
  { label: "Monitors", value: "LG 27\" 240Hz + Gigabyte 27\" 2K IPS" },
  { label: "Peripherals", value: "Cosmic Byte keyboard, Cosmic Byte Oxon headset, Boha mic" },
  { label: "Editor/IDE", value: "VS Code, Cursor, Android Studio" },
  { label: "Terminal", value: "PowerShell" },
];

const offsiteLaptopItems: GearItem[] = [
  { label: "Location", value: "Offsite" },
  { label: "Laptop", value: "HP Envy x360 13\" (Ryzen 5, 360° hinge, Windows 11)" },
];

export default function Gear() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/pc-setup.png"
          alt="PC Setup"
          className="w-10 h-10 rounded-md object-cover select-none"
          loading="lazy"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          PC Setup
        </motion.h2>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="text-secondary mb-10"
      >
        Split into my home PC and an offsite laptop setup.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.08 }}
        className="mb-10"
      >
        <img
          src="/pc-setup.png"
          alt="PC Setup showcase"
          className="w-full max-h-72 object-cover rounded-xl border border-white/10"
          loading="lazy"
        />
      </motion.div>

      <div className="space-y-12">
        {/* Home PC */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-semibold text-white mb-4"
          >
            Home PC
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homePcItems.map((item, idx) => (
              <motion.div
                key={`home-${item.label}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur px-5 py-4 shadow-sm hover:border-white/20 hover:shadow-white/10 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-white/10 grid place-items-center text-base group-hover:bg-white/15 transition">
                    {getEmoji(item.label)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-white/60">{item.label}</div>
                    <div className="text-white text-lg leading-tight break-words">{item.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Offsite Laptop */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-semibold text-white mb-4"
          >
            Offsite Laptop
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offsiteLaptopItems.map((item, idx) => (
              <motion.div
                key={`laptop-${item.label}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur px-5 py-4 shadow-sm hover:border-white/20 hover:shadow-white/10 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-white/10 grid place-items-center text-base group-hover:bg-white/15 transition">
                    {getEmoji(item.label)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-white/60">{item.label}</div>
                    <div className="text-white text-lg leading-tight break-words">{item.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Dev */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-semibold text-white mb-4"
          >
            Mobile Dev
          </motion.h3>

          <div className="mb-6">
            <img
              src="/rog-phone-3.png"
              alt="ASUS ROG Phone 3"
              className="w-full max-h-60 object-cover rounded-xl border border-white/10"
              loading="lazy"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mobileDevItems.map((item, idx) => (
              <motion.div
                key={`mobile-${item.label}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="group rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur px-5 py-4 shadow-sm hover:border-white/20 hover:shadow-white/10 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-white/10 grid place-items-center text-base group-hover:bg-white/15 transition">
                    {getEmoji(item.label)}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wide text-white/60">{item.label}</div>
                    <div className="text-white text-lg leading-tight break-words">{item.value}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


