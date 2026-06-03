import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { programmingForStrip } from "../../constants/tradeshield/servicePages";
import TradeShieldSectionHeader from "./TradeShieldSectionHeader";

const ServicesGrid = () => (
  <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
    <TradeShieldSectionHeader
      title="What I"
      highlight="build"
      subtitle="MT5 and TradingView — full details on each service page."
    />

    <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {programmingForStrip.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
        >
          <Link
            to={item.href}
            className="group flex flex-col h-full rounded-2xl border border-white/10 bg-[#0a0f1a]/50 p-8 hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] transition-all"
          >
            <h3 className="text-white font-bold text-xl mb-2 group-hover:text-emerald-400 transition-colors">
              {item.label}
            </h3>
            <p className="text-gray-400 text-sm mb-6 flex-grow">{item.blurb}</p>
            <span className="text-emerald-400 text-sm font-medium">Service details →</span>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesGrid;
