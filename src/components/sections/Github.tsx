import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { GitHubCalendar } from "react-github-calendar";

const Github = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
          <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-[0.2em]">Open Source Activity</span>
        </div>

        <h2 className="text-white font-black md:text-[64px] sm:text-[52px] text-[36px] leading-[1.1] mb-8">
           Github <span className="bg-gradient-to-r from-[#915EFF] to-[#3b82f6] bg-clip-text text-transparent italic">Intelligence.</span>
        </h2>
        
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          My digital workshop where code comes to life. Monitoring real-time contributions and system activity across 50+ repositories.
        </p>
      </motion.div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
         {[
           { label: "Total Contributions", value: "1,200+", icon: "🔥", color: "from-orange-500/20" },
           { label: "Public Repositories", value: "54", icon: "🚀", color: "from-blue-500/20" },
           { label: "GitHub Stars", value: "85", icon: "⭐", color: "from-yellow-500/20" }
         ].map((stat, i) => (
           <motion.div
             key={stat.label}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ delay: i * 0.1 }}
             className={`relative overflow-hidden p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#915EFF]/40 transition-all group`}
           >
             <div className="text-4xl mb-4">{stat.icon}</div>
             <div className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</div>
             <div className="text-white text-4xl font-black">{stat.value}</div>
             <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${stat.color} to-transparent blur-2xl group-hover:scale-150 transition-transform`} />
           </motion.div>
         ))}
      </div>

      {/* GitHub Calendar Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto p-8 sm:p-12 rounded-[2.5rem] bg-[#0a0a14] border border-white/5 shadow-2xl overflow-hidden relative"
      >
        <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-white font-bold text-xl mb-10 flex items-center gap-3">
               <span className="w-10 h-1 border-t border-[#915EFF]" />
               Contribution Heatmap
               <span className="w-10 h-1 border-t border-[#915EFF]" />
            </h3>
            
            <div className="w-full overflow-x-auto flex justify-center pb-4 custom-scrollbar">
               <GitHubCalendar
                  username="yasirSub"
                  blockSize={12}
                  blockMargin={5}
                  fontSize={14}
                  theme={{
                    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                  }}
               />
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-6">
               <a 
                 href="https://github.com/yasirSub" 
                 target="_blank"
                 className="px-8 py-3 bg-[#915EFF] text-white font-black rounded-xl hover:scale-105 transition-all shadow-lg shadow-[#915EFF]/20"
               >
                 FOLLOW ON GITHUB
               </a>
               <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live Sync Active
               </div>
            </div>
        </div>
        
        {/* Background glow for the calendar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#915EFF]/5 blur-[120px] pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Github, "github");
