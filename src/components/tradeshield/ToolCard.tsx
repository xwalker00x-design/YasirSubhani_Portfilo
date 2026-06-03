import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { TradingTool } from "../../constants/tradeshield";
import { toolTypeLabels } from "../../constants/tradeshield";
import { ChartPreviewByVariant } from "./charts/ChartPreviews";

interface ToolCardProps {
  tool: TradingTool;
  index?: number;
}

const ToolCard = ({ tool, index = 0 }: ToolCardProps) => {
  const href = "/trading#quote";
  const variant = tool.previewVariant ?? "generic";
  const tags = tool.tags ?? [tool.platform.toUpperCase(), toolTypeLabels[tool.type]];

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      whileHover={{ y: -10 }}
      className="group relative bg-[#0a0f1a] rounded-[1.75rem] overflow-hidden border border-white/5 hover:border-emerald-500/35 transition-all shadow-2xl shadow-black/40"
    >
      <div className="relative h-48 sm:h-52 overflow-hidden bg-[#020617]">
        <ChartPreviewByVariant
          variant={variant}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/20 to-transparent" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
            {tool.platform === "tradingview" ? "TradingView" : "MT5"}
          </span>
          {tool.featured && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-amber-500/20 border border-amber-500/40 text-amber-200">
              Popular
            </span>
          )}
        </div>
        <span className="absolute top-3 right-3 text-2xl drop-shadow-lg">{tool.icon}</span>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-white font-black text-xl mb-2 group-hover:text-emerald-400 transition-colors">
          {tool.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-5">
          {tool.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-gray-400 group-hover:text-emerald-300/90 group-hover:border-emerald-500/20 transition-colors"
            >
              #{tag.replace(/\s+/g, "")}
            </span>
          ))}
        </div>
        <Link
          to={href}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white shadow-lg shadow-emerald-900/30 transition-all group-hover:scale-[1.02]"
        >
          {tool.cta === "contact" ? "Contact for estimate" : "Order custom tool"}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
};

export default ToolCard;
