import { motion } from "framer-motion";
import TradeShieldLogo from "./TradeShieldLogo";

const TradeShieldHero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-[#030712] to-[#030712]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white font-black text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.12] mb-5"
            >
              Custom MT5 & TradingView tools,{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                built to your rules
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0"
            >
              Indicators, alerts, and EA fixes — clear INR quote before work starts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <button
                type="button"
                onClick={() => scrollTo("quote")}
                className="bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02]"
              >
                Get quote
              </button>
              <button
                type="button"
                onClick={() => scrollTo("packages")}
                className="border border-white/15 text-gray-200 hover:border-emerald-500/40 hover:text-emerald-300 px-7 py-3.5 rounded-xl font-semibold transition-all hover:bg-white/5"
              >
                View packages
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div
                className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-125 pointer-events-none"
                aria-hidden
              />
              <div className="relative rounded-3xl border border-emerald-500/15 bg-[#030712]/80 p-10 flex justify-center">
                <TradeShieldLogo
                  glow="hero"
                  className="w-44 h-44 sm:w-52 sm:h-52"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradeShieldHero;
