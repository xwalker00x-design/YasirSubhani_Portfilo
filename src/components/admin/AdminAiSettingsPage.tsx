import { useState } from "react";
import { motion } from "framer-motion";
import {
  defaultAiSettings,
  loadAiSettings,
  saveAiSettings,
  type AiSettings,
} from "../../services/aiChat";

const AdminAiSettingsPage = () => {
  const [settings, setSettings] = useState<AiSettings>(() => loadAiSettings());
  const [saved, setSaved] = useState(false);

  const update = <K extends keyof AiSettings>(key: K, value: AiSettings[K]) => {
    setSettings((s) => ({ ...s, [key]: value }));
    setSaved(false);
  };

  const handleSave = () => {
    saveAiSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-2xl">
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-white text-3xl font-bold mb-2"
      >
        AI Assistant
      </motion.h1>
      <p className="text-secondary mb-8">
        Configure the portfolio AI chat widget shown on yasirsubhani.me.
      </p>

      <div className="space-y-6 rounded-xl border border-white/10 bg-black-100/40 p-6">
        <label className="flex items-center gap-3 text-white cursor-pointer">
          <input
            type="checkbox"
            checked={settings.enabled}
            onChange={(e) => update("enabled", e.target.checked)}
            className="w-4 h-4"
          />
          Enable AI assistant on main website
        </label>

        <div>
          <label className="text-secondary text-sm block mb-2">OpenRouter API key</label>
          <input
            type="password"
            value={settings.apiKey}
            onChange={(e) => update("apiKey", e.target.value)}
            placeholder={defaultAiSettings.apiKey ? "Using env key" : "sk-or-..."}
            className="w-full bg-primary text-white rounded-lg border border-gray-800 px-4 py-3 focus:border-[#915EFF] focus:outline-none"
          />
          <p className="text-secondary text-xs mt-2">
            Get a key at openrouter.ai. Or set VITE_OPENROUTER_API_KEY in Vercel env.
          </p>
        </div>

        <div>
          <label className="text-secondary text-sm block mb-2">Model</label>
          <input
            value={settings.model}
            onChange={(e) => update("model", e.target.value)}
            className="w-full bg-primary text-white rounded-lg border border-gray-800 px-4 py-3 focus:border-[#915EFF] focus:outline-none"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="px-6 py-3 rounded-lg font-semibold text-white bg-[#915EFF] hover:bg-[#7B4FD9]"
        >
          {saved ? "Saved ✓" : "Save AI settings"}
        </motion.button>
      </div>
    </div>
  );
};

export default AdminAiSettingsPage;
