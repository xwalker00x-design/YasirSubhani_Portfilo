import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { programmingForStrip } from "../../constants/tradeshield/servicePages";

const ProgrammingForStrip = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
    <p className="text-gray-500 text-center text-xs font-semibold uppercase tracking-[0.2em] mb-6">
      Programming for
    </p>
    <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
      {programmingForStrip.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.06 }}
        >
          <Link
            to={item.href}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-xl border border-white/10 bg-[#0a0f1a]/80 px-5 py-4 hover:border-emerald-500/35 hover:bg-emerald-500/5 transition-all group"
          >
            <span className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
              {item.label}
            </span>
            <span className="text-gray-500 text-sm">{item.blurb}</span>
            <span className="text-emerald-500/80 text-sm font-medium sm:ml-auto hidden sm:inline">
              Learn more →
            </span>
          </Link>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProgrammingForStrip;
