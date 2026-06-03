import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TradeShieldSectionHeader from "./TradeShieldSectionHeader";

const TradeShieldAbout = () => (
  <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-white/5">
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto text-center"
    >
      <TradeShieldSectionHeader
        title="About"
        highlight="Yasir"
        subtitle="Developer in Kolkata — I build and trade on the same platforms."
        align="center"
      />
      <p className="text-gray-400 leading-relaxed text-sm sm:text-base -mt-4 mb-8">
        I write MT5 and Pine Script for traders who need working code and a clear scope. You get a
        fixed INR quote after I review your brief or files — usually within 24–48 hours.
      </p>
      <Link
        to="/"
        className="inline-flex px-6 py-2.5 rounded-lg border border-white/15 text-gray-300 hover:text-white hover:border-emerald-500/30 transition-colors text-sm"
      >
        Main portfolio →
      </Link>
    </motion.div>
  </section>
);

export default TradeShieldAbout;
