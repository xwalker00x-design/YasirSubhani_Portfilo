import { motion } from "framer-motion";
import { processSteps } from "../../constants/tradeshield";
import TradeShieldSectionHeader from "./TradeShieldSectionHeader";

const ProcessSteps = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
    <TradeShieldSectionHeader title="How it" highlight="works" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
          className="text-center p-6 rounded-2xl bg-[#0a0f1a]/60 border border-white/10 hover:border-emerald-500/20 transition-colors"
        >
          <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white font-bold">
            {step.step}
          </div>
          <h3 className="text-white font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-400 text-sm">{step.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ProcessSteps;
