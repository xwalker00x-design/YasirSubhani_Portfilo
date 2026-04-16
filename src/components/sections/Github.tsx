import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { GitHubCalendar } from "react-github-calendar";
import { useState, useEffect } from "react";

const Github = () => {
  const [stats, setStats] = useState({
    contributions: "1,200+",
    repos: "50+",
    stars: "80+"
  });

  useEffect(() => {
    // Note: In a production app, you might use a proxy or serverless function
    // to avoid rate limits, but for a personal portfolio, basic fetch is usually fine.
    const fetchGithubStats = async () => {
      try {
        const repoRes = await fetch("https://api.github.com/users/yasirSub");
        const repoData = await repoRes.json();
        
        // This is a simplified fetch; getting total stars requires iterating through repos
        // or using GraphQL, but for now we can update the repo count at least.
        if (repoData.public_repos) {
          setStats(prev => ({
            ...prev,
            repos: repoData.public_repos.toString()
          }));
        }
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
      }
    };

    fetchGithubStats();
  }, []);

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
          My digital workshop where code comes to life. Monitoring real-time contributions and system activity across {stats.repos}+ repositories.
        </p>
      </motion.div>

      {/* Stats Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
         {[
           { label: "Total Contributions", value: stats.contributions, icon: "🔥", color: "from-orange-500/20" },
           { label: "Public Repositories", value: stats.repos, icon: "🚀", color: "from-blue-500/20" },
           { label: "GitHub Stars", value: stats.stars, icon: "⭐", color: "from-yellow-500/20" }
         ].map((stat, i) => (
           <motion.div
             key={stat.label}
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ delay: i * 0.1 }}
             whileHover={{ y: -5, borderColor: 'rgba(145, 94, 255, 0.4)' }}
             className={`relative overflow-hidden p-8 rounded-3xl bg-white/5 border border-white/10 transition-all group`}
           >
             <div className="text-4xl mb-4 transition-transform group-hover:scale-110 duration-500">{stat.icon}</div>
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
        className="max-w-6xl mx-auto p-8 sm:p-12 rounded-[2.5rem] bg-[#0a0a14]/60 border border-white/5 backdrop-blur-xl shadow-2xl overflow-hidden relative"
      >
        <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-white font-bold text-xl mb-10 flex items-center gap-3 tracking-tighter">
               <span className="w-10 h-1 border-t border-[#915EFF]/30" />
               Live Analytical Heatmap
               <span className="w-10 h-1 border-t border-[#915EFF]/30" />
            </h3>
            
            <div className="w-full overflow-x-auto flex justify-center pb-4 scrollbar-hidden">
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
               <motion.a 
                 href="https://github.com/yasirSub" 
                 target="_blank"
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="px-8 py-3 bg-gradient-to-r from-[#915EFF] to-[#3b82f6] text-white font-black rounded-xl shadow-lg shadow-[#915EFF]/20"
               >
                 ESTABLISH CONNECTION
               </motion.a>
               <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-400 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Satellite Sync Active
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
