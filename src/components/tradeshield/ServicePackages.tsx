import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicePackages } from "../../constants/tradeshield/packages";
import TradeShieldSectionHeader from "./TradeShieldSectionHeader";

const ServicePackages = () => (
  <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-white/5">
    <TradeShieldSectionHeader
      title="Order"
      highlight="packages"
      subtitle="Pick a tier — I confirm the final price after reviewing your files."
    />

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
      {servicePackages.map((pkg, index) => (
        <motion.div
          key={pkg.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className={`relative flex flex-col rounded-2xl border p-6 h-full ${
            pkg.popular
              ? "border-emerald-500/45 bg-emerald-500/[0.06]"
              : "border-white/10 bg-[#0a0f1a]/40"
          }`}
        >
          {pkg.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500 text-white">
              Popular
            </span>
          )}
          <h3 className="text-white font-bold text-base mb-2">{pkg.name}</h3>
          <p className="text-emerald-400 font-black text-2xl tabular-nums mb-1">{pkg.priceLabel}</p>
          <p className="text-gray-500 text-xs mb-4">{pkg.delivery}</p>
          <ul className="space-y-2 mb-6 flex-grow">
            {pkg.includes.slice(0, 3).map((item) => (
              <li key={item} className="text-gray-400 text-xs flex gap-2 leading-relaxed">
                <span className="text-emerald-400 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            to={`/trading?package=${pkg.id}#quote`}
            className={`block text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${
              pkg.popular
                ? "bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:scale-[1.02]"
                : "border border-emerald-500/35 text-emerald-300 hover:bg-emerald-500/10"
            }`}
          >
            Order this package
          </Link>
        </motion.div>
      ))}
    </div>

    <p className="text-center text-gray-500 text-sm mt-8">
      Custom scope?{" "}
      <Link to="/trading#pricing" className="text-emerald-400 hover:text-emerald-300">
        See how pricing works
      </Link>
    </p>
  </section>
);

export default ServicePackages;
