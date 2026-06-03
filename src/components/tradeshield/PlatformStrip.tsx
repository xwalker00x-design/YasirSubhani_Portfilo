import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { platforms } from "../../constants/tradeshield";
import type { ChartPreviewVariant } from "../../constants/tradeshield/types";
import { ChartPreviewByVariant } from "./charts/ChartPreviews";
import TradeShieldLogo from "./TradeShieldLogo";
import { TradeShieldIcon } from "./TradeShieldIcons";

const platformPreview: Partial<Record<string, ChartPreviewVariant>> = {
  mt5: "mtf-panel",
  tradingview: "pine-overlay",
  mt4: "generic",
  ninjatrader: "ea",
  ctrader: "sessions",
  forextester: "rsi",
};

const PlatformStrip = () => (
  <section className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
    <p className="text-gray-500 text-center text-xs font-semibold uppercase tracking-[0.25em] mb-3">
      Platforms we work with
    </p>
    <p className="text-gray-400 text-center text-sm max-w-xl mx-auto mb-10">
      Tap a platform to see example indicators and request a custom build.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {platforms.map((platform, index) => (
        <motion.div
          key={platform.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ y: -8 }}
        >
          <Link
            to={platform.route}
            className={`group block h-full rounded-2xl overflow-hidden border transition-all duration-300 ${
              platform.primary
                ? "border-emerald-500/45 shadow-lg shadow-emerald-900/25 hover:border-emerald-400/70 hover:shadow-emerald-900/40"
                : "border-white/10 hover:border-white/25 opacity-90 hover:opacity-100"
            }`}
          >
            <div className="relative h-24 sm:h-28 overflow-hidden bg-[#020617]">
              <ChartPreviewByVariant
                variant={platformPreview[platform.id] ?? "generic"}
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
              {platform.primary && (
                <TradeShieldLogo
                  glow="none"
                  alt=""
                  className="absolute bottom-2 right-2 w-7 h-7 opacity-70"
                />
              )}
            </div>
            <div className="p-3 sm:p-4 bg-[#0a0f1a] text-center">
              <span className="flex justify-center mb-2 text-emerald-400">
                <TradeShieldIcon name={platform.icon} className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <span className="text-white font-bold text-xs sm:text-sm block">
                {platform.shortName}
              </span>
              {!platform.available ? (
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wide mt-1 block">
                  On request
                </span>
              ) : (
                <span className="text-[9px] sm:text-[10px] text-emerald-500/80 mt-1 block">
                  View tools →
                </span>
              )}
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default PlatformStrip;
