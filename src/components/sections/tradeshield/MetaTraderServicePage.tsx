import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  metaTraderBuildTypes,
  metaTraderPlatforms,
  metaTraderTrustPoints,
} from "../../../constants/tradeshield/servicePages";
import {
  TradeShieldPageShell,
  TradeShieldSectionHeader,
  TradeShieldSiteFooter,
} from "../../tradeshield";
import { usePageTitle } from "../../../hooks/usePageTitle";

const MetaTraderServicePage = () => {
  usePageTitle(
    "MetaTrader Programming | TradeShield",
    "Custom MT5 indicators, EAs, and MQL5 development by Yasir Subhani — TradeShield."
  );

  return (
    <TradeShieldPageShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <TradeShieldSectionHeader
          title="Programming for"
          highlight="MetaTrader®"
          subtitle="Indicators, EAs, and MQL5 work for traders who need code that runs on their broker setup—not generic templates."
          align="left"
        />

        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {metaTraderPlatforms.map((platform, index) => (
            <motion.article
              key={platform.id}
              id={platform.id === "mt4" ? "mt4" : platform.id === "mt5" ? "mt5" : undefined}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border border-white/10 bg-[#0a0f1a]/90 p-6 hover:border-emerald-500/25 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-white font-bold text-lg">{platform.name}</h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400/90 border border-emerald-500/25 px-2 py-0.5 rounded">
                  {platform.language}
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{platform.description}</p>
              {!platform.available && (
                <p className="text-amber-400/90 text-xs font-medium">Available on request</p>
              )}
              {platform.available && (
                <p className="text-emerald-400/90 text-xs font-medium">Active delivery platform</p>
              )}
            </motion.article>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">What I can build</h3>
            <ul className="space-y-3">
              {metaTraderBuildTypes.map((item) => (
                <li key={item} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                  <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-6 sm:p-8">
            <h3 className="text-white font-bold text-xl mb-6">Why TradeShield</h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {metaTraderTrustPoints.map((point) => (
                <div key={point.label} className="text-center">
                  <p className="text-2xl font-black text-emerald-400">{point.value}</p>
                  <p className="text-gray-500 text-[10px] sm:text-xs mt-1 leading-snug">{point.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              I review your brief or existing source before quoting. Delivery includes compiled builds
              and agreed source files—timeline depends on complexity.
            </p>
          </div>
        </div>

        <p className="text-gray-600 text-xs leading-relaxed border-t border-white/5 pt-6 mb-8">
          MetaTrader®, MetaTrader 4®, MetaTrader 5®, MT4®, MT5®, and MQL® are trademarks of
          MetaQuotes Software Corp. TradeShield / yasirsubhani.tech is not affiliated with MetaQuotes.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/trading#quote"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold text-sm"
          >
            Request a quote
          </Link>
          <Link
            to="/trading/tools/mt5"
            className="px-6 py-3 rounded-lg border border-white/15 text-gray-300 hover:text-white hover:border-emerald-500/30 text-sm"
          >
            MT5 tool examples →
          </Link>
        </div>
      </div>
      <TradeShieldSiteFooter />
    </TradeShieldPageShell>
  );
};

export default MetaTraderServicePage;
