import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { platforms } from "../../../constants/tradeshield";
import type { ChartPreviewVariant } from "../../../constants/tradeshield/types";
import {
  TradeShieldPageShell,
  TradeShieldSectionHeader,
  TradeShieldSiteFooter,
} from "../../tradeshield";
import { ChartPreviewByVariant } from "../../tradeshield/charts/ChartPreviews";
import { TradeShieldIcon } from "../../tradeshield/TradeShieldIcons";
import { usePageTitle } from "../../../hooks/usePageTitle";

const platformPreview: Partial<Record<string, ChartPreviewVariant>> = {
  mt5: "mtf-panel",
  tradingview: "pine-overlay",
  mt4: "generic",
  ninjatrader: "ea",
  ctrader: "sessions",
  forextester: "rsi",
};

const TradingToolsHub = () => {
  usePageTitle(
    "Trading Tools | TradeShield",
    "Custom indicators and EAs for MetaTrader 5, TradingView, and more — TradeShield by Yasir Subhani."
  );

  return (
    <TradeShieldPageShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <TradeShieldSectionHeader
          title="Trading"
          highlight="tools"
          subtitle="Custom indicators and automation by platform. Primary focus on MT5 and TradingView."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -10 }}
            >
              <Link
                to={platform.route}
                className={`group block rounded-[1.75rem] overflow-hidden border transition-all ${
                  platform.primary
                    ? "border-emerald-500/40 shadow-xl shadow-emerald-900/20 hover:border-emerald-400/60"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                <div className="relative h-44 overflow-hidden bg-[#020617]">
                  <ChartPreviewByVariant
                    variant={platformPreview[platform.id] ?? "generic"}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
                  <span className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-[#030712]/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 backdrop-blur-sm">
                    <TradeShieldIcon name={platform.icon} className="w-6 h-6" />
                  </span>
                </div>
                <div className="p-6 bg-[#0a0f1a]">
                  <h2 className="text-white font-black text-xl mb-2 group-hover:text-emerald-400 transition-colors">
                    {platform.name}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{platform.tagline}</p>
                  {!platform.available ? (
                    <span className="text-amber-400/90 text-xs font-bold uppercase tracking-wide">
                      Available on request
                    </span>
                  ) : (
                    <span className="text-emerald-400 text-sm font-semibold inline-flex items-center gap-1">
                      Explore tools <span aria-hidden>→</span>
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-center mt-12">
          <Link to="/trading" className="text-gray-500 hover:text-emerald-400 text-sm">
            ← Back to TradeShield home
          </Link>
        </p>
      </div>
      <TradeShieldSiteFooter />
    </TradeShieldPageShell>
  );
};

export default TradingToolsHub;
