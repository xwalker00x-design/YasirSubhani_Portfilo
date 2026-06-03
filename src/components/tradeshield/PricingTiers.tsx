import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  sourceCodePricing,
  freelanceRates,
  pricingDisclaimer,
} from "../../constants/tradeshield";
import TradeShieldSectionHeader from "./TradeShieldSectionHeader";

interface PricingTiersProps {
  compact?: boolean;
}

const PricingTiers = ({ compact = false }: PricingTiersProps) => (
  <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-white/5">
    <TradeShieldSectionHeader
      title="How"
      highlight="pricing works"
      subtitle={
        compact
          ? "Hourly and custom jobs — packages above cover typical work."
          : "Packages cover most jobs. Hourly rates and your own source files below."
      }
    />

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 max-w-4xl mx-auto"
    >
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
        {freelanceRates.map((rate) => (
          <div key={rate.label}>
            <p className="text-gray-500 text-xs mb-1">{rate.label}</p>
            <p className="text-emerald-300 font-bold text-lg tabular-nums">{rate.value}</p>
          </div>
        ))}
        <div className="sm:col-span-2 pt-2 border-t border-white/5">
          <p className="text-gray-500 text-xs mb-1">{sourceCodePricing.title}</p>
          <p className="text-cyan-300/90 text-sm">{sourceCodePricing.options.join(" · ")}</p>
        </div>
      </div>
    </motion.div>

    <p className="text-gray-500 text-sm text-center mt-6 max-w-lg mx-auto">{pricingDisclaimer}</p>

    {!compact && (
      <p className="text-center mt-6">
        <Link
          to="/trading#quote"
          className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
        >
          Request a quote →
        </Link>
      </p>
    )}

    {compact && (
      <p className="text-center text-sm text-gray-500 mt-6">
        <Link to="/trading#packages" className="text-emerald-400 hover:text-emerald-300 font-medium">
          Back to packages
        </Link>
      </p>
    )}
  </section>
);

export default PricingTiers;
