import { motion } from "framer-motion";
import { personalTradingPlatforms } from "../../constants/tradeshield";

interface PersonalTradingSectionProps {
  compact?: boolean;
}

const PersonalTradingSection = ({ compact = false }: PersonalTradingSectionProps) => {
  if (compact) {
    return (
      <section id="my-trading" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 border-t border-white/5">
        <h2 className="text-white font-semibold text-lg text-center mb-2">My platforms</h2>
        <p className="text-gray-500 text-sm text-center mb-8">I also trade on these — optional referral links.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto justify-center">
          {personalTradingPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="flex-1 rounded-xl border border-white/10 bg-[#0a0f1a]/40 p-5 text-center sm:text-left"
            >
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <span className="text-2xl" aria-hidden>
                  {platform.icon}
                </span>
                <span className="text-white font-medium">{platform.name}</span>
              </div>
              {platform.referralLink && (
                <button
                  type="button"
                  onClick={() => window.open(platform.referralLink, "_blank")}
                  className="text-emerald-400 text-sm hover:text-emerald-300"
                >
                  Join with code {platform.referralCode} →
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="my-trading" className="max-w-7xl mx-auto px-6 py-20 border-t border-white/5">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-white font-bold text-4xl text-center mb-4"
      >
        Trading{" "}
        <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Platforms
        </span>
      </motion.h2>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
        Beyond building tools for clients, I actively trade on these platforms.
      </p>

      <div className="grid lg:grid-cols-2 gap-8">
        {personalTradingPlatforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm hover:border-slate-600/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">{platform.icon}</div>
              <div>
                <h3 className="text-white font-bold text-2xl">{platform.name}</h3>
                <p className="text-gray-400 text-sm">{platform.type}</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">{platform.description}</p>

            <div>
              <h4 className="text-white font-semibold mb-4">Key Features:</h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {platform.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {platform.referralLink && (
                <div
                  className={`bg-gradient-to-r ${
                    platform.name === "Dhan"
                      ? "from-blue-500/10 to-blue-600/10 border-blue-500/20"
                      : "from-orange-500/10 to-red-600/10 border-orange-500/20"
                  } border rounded-xl p-4`}
                >
                  <h5
                    className={`${
                      platform.name === "Dhan" ? "text-blue-300" : "text-orange-300"
                    } font-semibold mb-2 flex items-center gap-2`}
                  >
                    <span>🎯</span>
                    Join with My Referral
                  </h5>
                  <p className="text-gray-400 text-sm mb-3">
                    Use my referral code to get started on {platform.name}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => window.open(platform.referralLink, "_blank")}
                      className={`${
                        platform.name === "Dhan"
                          ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                          : "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      } text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center gap-2`}
                    >
                      <span>🚀</span>
                      Join {platform.name} Now
                    </button>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm">Code:</span>
                      <div className="bg-slate-700/50 border border-slate-600/30 rounded px-3 py-1">
                        <span
                          className={`${
                            platform.name === "Dhan" ? "text-blue-300" : "text-orange-300"
                          } font-mono text-sm`}
                        >
                          {platform.referralCode}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PersonalTradingSection;
