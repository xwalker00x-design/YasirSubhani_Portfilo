import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";

const BeyondCode = () => {
  const interestAreas = [
    {
      title: "Trading & Finance",
      subtitle: "The Trade Shield",
      description: "Analyzing market trends, developing technical strategies, and exploring the psychology of trading.",
      icon: "📈",
      gradient: "from-[#00b09b] to-[#96c93d]",
      route: "/trading-finance",
      stats: "2+ Years Experience"
    },
    {
      title: "Music Production",
      subtitle: "Soundscapes",
      description: "Crafting atmospheric beats and experimenting with sound design across electronic and ambient genres.",
      icon: "🎵",
      gradient: "from-[#8e2de2] to-[#4a00e0]",
      route: "/music",
      stats: "Audio Creative"
    },
    {
      title: "Visual Storytelling",
      subtitle: "Photography",
      description: "Capturing the beauty of the world through a lens—focused on landscape and urban exploration.",
      icon: "📸",
      gradient: "from-[#00c6ff] to-[#0072ff]",
      route: "/photography",
      stats: "Gallery Coming"
    }
  ];

  return (
    <div className="w-full min-h-screen pt-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/40 bg-green-500/10 mb-5">
           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
           <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Multi-dimensional</span>
        </div>
        <h2 className="text-white font-black md:text-[64px] sm:text-[52px] text-[36px] mb-4">
          Beyond Code.
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Life isn't just about syntax. Here's personal world of trading, 
          creativity, and exploration.
        </p>
      </motion.div>

      {/* Interactive Interest Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {interestAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10 }}
            className="group relative cursor-pointer"
            onClick={() => window.location.href = area.route}
          >
            {/* Glow Background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 bg-gradient-to-br ${area.gradient}`} />

            <div className="relative z-10 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm h-full overflow-hidden">
               {/* Shimmer Effect */}
               <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
               
               <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500 inline-block font-noto">
                 {area.icon}
               </div>

               <h3 className="text-white font-bold text-2xl mb-2">{area.title}</h3>
               <p className="text-gray-500 font-medium text-xs uppercase tracking-wider mb-4">{area.subtitle}</p>
               <p className="text-gray-400 leading-relaxed text-[15px] mb-8">
                 {area.description}
               </p>

               <div className="flex items-center justify-between mt-auto">
                 <span className={`text-[11px] font-bold px-3 py-1 rounded-full bg-gradient-to-r ${area.gradient} text-white`}>
                   {area.stats}
                 </span>
                 <span className="text-white text-xl group-hover:translate-x-2 transition-transform">→</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Final Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 p-12 text-center relative"
      >
        <div className="ambient-orb ambient-orb-cyan w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />
        <h3 className="relative z-10 text-white font-bold text-3xl mb-4 italic">"Curiosity is the fuel for innovation."</h3>
        <p className="relative z-10 text-gray-500">I believe being a better human makes you a better developer.</p>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(BeyondCode, "beyond-code");
