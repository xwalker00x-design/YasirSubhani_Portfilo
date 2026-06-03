import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { processSteps, trustStats } from "../../constants/tradeshield";

const TradeShieldHomeMore = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="more" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-white/5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-left hover:border-emerald-500/25 transition-colors"
        aria-expanded={open}
      >
        <span className="text-white font-semibold">More details</span>
        <span className="text-gray-500 text-sm hidden sm:inline">
          Process · experience · example builds
        </span>
        <span
          className={`text-emerald-400 text-lg transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pt-10 space-y-12">
              <div>
                <h3 className="text-white font-semibold text-lg mb-6 text-center">How a project runs</h3>
                <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {processSteps.map((step) => (
                    <li
                      key={step.step}
                      className="rounded-xl border border-white/10 bg-[#0a0f1a]/40 p-4 text-center"
                    >
                      <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-bold mb-2">
                        {step.step}
                      </span>
                      <p className="text-white text-sm font-medium mb-1">{step.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="flex flex-wrap justify-center gap-8 sm:gap-12 py-4 border-y border-white/5">
                {trustStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p
                      className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <p className="text-center text-gray-500 text-sm">
                See example indicator styles on{" "}
                <Link to="/trading/tools" className="text-emerald-400 hover:text-emerald-300">
                  trading tools
                </Link>
                .
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TradeShieldHomeMore;
