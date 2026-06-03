import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
const ParticlesBackgroundLazy = lazy(() => import("../canvas/ParticlesBackground"));
const StarsCanvas = lazy(() => import("../canvas/Stars"));
import Magnetic from "../atoms/Magnetic";
import { loadResumeDataAsync, toPdfOptions } from "../../data/resumeStore";
import { downloadResumePdf } from "../../utils/resumePdf";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+918271819813";
  };

  const handleQuickDownloadResume = async () => {
    const data = await loadResumeDataAsync();
    downloadResumePdf(data.personal, "YasirSubhani-Resume.pdf", toPdfOptions(data));
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-transparent flex items-center justify-center">
      {/* Optimized Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-[#05050a]" />}>
          <ParticlesBackgroundLazy />
        </Suspense>
      </div>

      {/* Neural Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] z-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(145,94,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(145,94,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Floating Ambient Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#915EFF] rounded-full"
            initial={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              opacity: 0.2
            }}
            animate={{ 
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915EFF] opacity-[0.1] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3b82f6] opacity-[0.1] blur-[120px] pointer-events-none" />

      {/* Stars Background Component */}
      <div className="absolute inset-0 z-[-1]">
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      </div>

      {/* Technical HUD Overlay (Agency Style) */}
      <div className="absolute top-24 left-10 hidden xl:flex flex-col gap-4 z-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col gap-1 border-l-2 border-[#915EFF]/30 pl-4 py-2"
        >
          <span className="text-[10px] text-gray-500 font-black tracking-[0.3em] uppercase">Sector</span>
          <span className="text-white text-xs font-bold font-mono tracking-widest">FULLSTACK_ARC_01</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col gap-1 border-l-2 border-blue-500/30 pl-4 py-2"
        >
          <span className="text-[10px] text-gray-500 font-black tracking-[0.3em] uppercase">Intelligence</span>
          <span className="text-white text-xs font-bold font-mono tracking-widest">AI_DRIVEN_LOGIC</span>
        </motion.div>
      </div>

      <div className="absolute top-24 right-10 hidden xl:flex flex-col items-end gap-4 z-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col items-end gap-1 border-r-2 border-[#915EFF]/30 pr-4 py-2"
        >
          <span className="text-[10px] text-gray-500 font-black tracking-[0.3em] uppercase">Status</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white text-xs font-bold font-mono tracking-widest uppercase">Operational</span>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 mb-10">
             <span className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
             <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-[0.2em]">Ready for Strategic Deployment</span>
          </div>

          <h1 className="text-white font-black text-[48px] sm:text-[72px] md:text-[90px] lg:text-[110px] leading-[0.9] tracking-tighter mb-8">
            <span className="text-white">Design.</span> <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[#915EFF] via-[#3b82f6] to-[#a78bfa] bg-clip-text text-transparent italic">Develop.</span> <br className="sm:hidden" />
            <span className="text-white">Deploy.</span>
          </h1>

          <p className="text-gray-400 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            I'm <span className="text-white font-black uppercase tracking-tighter">Yasir Subhani</span>, a Full-Stack Architect 
            engineering high-performance <span className="text-white border-b border-[#915EFF]/40 italic">digital ecosystems</span> powered by intelligence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Magnetic>
              <motion.button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#7B4FD9] text-white font-black rounded-2xl shadow-[0_15px_60px_rgba(123,79,217,0.4)] transition-all tracking-widest text-sm"
              >
                INITIALIZE EXPLORATION
              </motion.button>
            </Magnetic>
            
            <Magnetic>
              <motion.button
                onClick={handleQuickDownloadResume}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 text-[#a78bfa] font-black rounded-2xl backdrop-blur-md transition-all tracking-widest text-sm shadow-[0_0_30px_rgba(145,94,255,0.1)]"
              >
                DOWNLOAD RESUME
              </motion.button>
            </Magnetic>

            <Magnetic>
              <motion.button
                onClick={handleCall}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-black rounded-2xl backdrop-blur-md transition-all tracking-widest text-sm"
              >
                SECURE CHANNEL
              </motion.button>
            </Magnetic>
          </div>
        </motion.div>
      </div>

      {/* Social Indicator */}
      <div className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-6 text-gray-600">
        <div className="w-[1px] h-12 bg-white/10 mx-auto mb-2" />
        <span className="rotate-90 origin-left text-[10px] uppercase tracking-[0.5em] mb-4">Follow</span>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-6">
        <div className="w-6 h-10 rounded-full border-2 border-white/10 flex justify-center p-2">
           <motion.div 
             animate={{ y: [0, 12, 0] }}
             transition={{ duration: 1.5, repeat: Infinity }}
             className="w-1.5 h-1.5 rounded-full bg-[#915EFF]"
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;
