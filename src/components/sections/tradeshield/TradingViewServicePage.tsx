import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { tradingViewSections } from "../../../constants/tradeshield/servicePages";
import {
  TradeShieldPageShell,
  TradeShieldSectionHeader,
  TradeShieldSiteFooter,
} from "../../tradeshield";
import { PineOverlayPreview } from "../../tradeshield/charts/ChartPreviews";
import { usePageTitle } from "../../../hooks/usePageTitle";

const TradingViewServicePage = () => {
  usePageTitle(
    "TradingView & Pine Script | TradeShield",
    "Custom Pine Script indicators, strategies, and conversions — TradeShield by Yasir Subhani."
  );

  return (
    <TradeShieldPageShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
          <div>
            <TradeShieldSectionHeader
              title="TradingView &"
              highlight="Pine Script"
              subtitle="Custom indicators, alert logic, and strategy scripts—written for your chart setup and TradingView plan limits."
              align="left"
            />
            <p className="text-gray-400 text-sm leading-relaxed -mt-6 mb-6">
              I use TradingView daily, so session boxes, HTF levels, and non-repainting rules are
              discussed before build. Same clear INR quotes as MT5 work.
            </p>
            <Link
              to="/trading#quote"
              className="inline-flex px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-semibold text-sm"
            >
              Get a Pine Script quote
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-[#020617]"
          >
            <PineOverlayPreview className="w-full h-48 sm:h-56" />
          </motion.div>
        </div>

        <div className="space-y-8">
          {tradingViewSections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
              className="rounded-2xl border border-white/10 bg-[#0a0f1a]/80 p-6 sm:p-8"
            >
              <h3 className="text-white font-bold text-xl mb-3">{section.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">{section.description}</p>
            </motion.section>
          ))}
        </div>

        <p className="text-gray-600 text-xs leading-relaxed border-t border-white/5 pt-6 mt-12 mb-8">
          TradingView® is a trademark of TradingView, Inc. TradeShield is not associated with
          TradingView, Inc.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/trading/tools/tradingview"
            className="px-6 py-3 rounded-lg border border-white/15 text-gray-300 hover:text-white hover:border-emerald-500/30 text-sm"
          >
            TradingView tool examples →
          </Link>
          <Link
            to="/trading/services/metatrader"
            className="px-6 py-3 rounded-lg border border-white/15 text-gray-300 hover:text-white text-sm"
          >
            MetaTrader programming →
          </Link>
        </div>
      </div>
      <TradeShieldSiteFooter />
    </TradeShieldPageShell>
  );
};

export default TradingViewServicePage;
