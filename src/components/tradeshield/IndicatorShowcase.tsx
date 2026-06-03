import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { tradingTools } from "../../constants/tradeshield";
import type { ToolType } from "../../constants/tradeshield";
import TradeShieldSectionHeader from "./TradeShieldSectionHeader";
import ToolCard from "./ToolCard";

const filters: Array<{ id: "all" | ToolType; label: string }> = [
  { id: "all", label: "All" },
  { id: "indicator", label: "Indicators" },
  { id: "ea", label: "Expert Advisors" },
  { id: "pine", label: "Pine Script" },
];

const IndicatorShowcase = () => {
  const [filter, setFilter] = useState<"all" | ToolType>("all");

  const showcased = tradingTools.filter(
    (t) => t.featured && (filter === "all" || t.type === filter)
  );

  return (
    <section id="indicators" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-300 text-xs font-bold uppercase tracking-[0.2em]">
            Showcase
          </span>
        </div>
      </div>
      <TradeShieldSectionHeader
        title="Custom"
        highlight="indicators & tools"
        subtitle="Portfolio-style previews of the kinds of MT5 and TradingView work I build for clients."
      />

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              filter === f.id
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                : "text-gray-400 border border-white/10 hover:border-white/25 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {showcased.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {showcased.length === 0 && (
        <p className="text-center text-gray-500 py-12">No tools in this category yet.</p>
      )}

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-14 text-center"
      >
        <p className="text-gray-500 text-sm mb-4">
          Need something custom? Most builds include source delivery and revision rounds.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/trading/tools"
            className="px-6 py-3 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-emerald-500/30 transition-colors"
          >
            Browse all platforms
          </Link>
          <Link
            to="/trading#quote"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold hover:scale-[1.02] transition-transform"
          >
            Get a quote
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default IndicatorShowcase;
