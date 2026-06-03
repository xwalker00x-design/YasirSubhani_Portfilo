import { motion } from "framer-motion";
import { trustStats } from "../../constants/tradeshield";

const TrustStats = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:pb-16">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {trustStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="text-center group bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 rounded-xl p-6 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
        >
          <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
          <div
            className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent text-3xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300`}
          >
            {stat.value}
          </div>
          <div className="text-gray-500 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default TrustStats;
