import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { 
  frontendTechnologies, 
  mobileTechnologies, 
  backendTechnologies, 
  cloudTechnologies,
  designTools, 
  developmentTools 
} from "../../constants";

import { ai_core_icon } from "../../assets";

interface SkillCardProps {
  name: string;
  icon: string;
  category: string;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  const getGlowColor = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('react')) return 'rgba(97, 218, 251, 0.4)';
    if (n.includes('flutter')) return 'rgba(64, 196, 255, 0.4)';
    if (n.includes('node')) return 'rgba(131, 205, 41, 0.4)';
    if (n.includes('laravel')) return 'rgba(255, 45, 32, 0.4)';
    if (n.includes('python')) return 'rgba(55, 118, 171, 0.4)';
    if (n.includes('aws')) return 'rgba(255, 153, 0, 0.4)';
    if (n.includes('hostinger')) return 'rgba(103, 58, 183, 0.4)';
    if (n.includes('cloud')) return 'rgba(3, 169, 244, 0.4)';
    if (n.includes('ai') || n.includes('gemini')) return 'rgba(145, 94, 255, 0.5)';
    return 'rgba(255, 255, 255, 0.1)'; 
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative group p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl transition-all duration-500 shadow-2xl hover:border-[#915EFF]/30 overflow-hidden"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${getGlowColor(name)} 0%, transparent 70%)`
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 mb-4 p-3 bg-white/[0.03] rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
          <img src={icon} alt={name} className="w-full h-full object-contain filter drop-shadow-lg" />
        </div>
        <span className="text-[14px] font-black text-gray-500 group-hover:text-white transition-colors tracking-tighter uppercase whitespace-nowrap">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const Tech = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const skillCategories = [
    { title: "Frontend", technologies: frontendTechnologies, icon: "💻" },
    { title: "Mobile", technologies: mobileTechnologies, icon: "📱" },
    { title: "Backend", technologies: backendTechnologies, icon: "⚙️" },
    { title: "Cloud", technologies: cloudTechnologies, icon: "☁️" },
    { title: "Design", technologies: designTools, icon: "🎨" },
    { title: "Tools", technologies: developmentTools, icon: "🛠️" },
  ];

  const activeTech = skillCategories.find(c => c.title === activeTab)?.technologies || [];

  return (
    <div className="w-full max-w-7xl mx-auto px-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 mb-8">
           <span className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
           <span className="text-[#a78bfa] text-[10px] font-black uppercase tracking-[0.3em]">Neural Tech Stack</span>
        </div>
        <h2 className="text-white font-black lg:text-[72px] md:text-[60px] text-[40px] leading-[1.1] mb-6">
          Technical <span className="bg-gradient-to-r from-[#915EFF] via-[#3b82f6] to-[#a78bfa] bg-clip-text text-transparent">Intelligence.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium">
          A meticulously curated ecosystem of technologies leveraged for high-performance 
          architectures and advanced digital engineering.
        </p>
      </motion.div>

      {/* Modern High-End Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-20 bg-white/[0.02] p-2 rounded-[2.5rem] border border-white/5 w-fit mx-auto backdrop-blur-md">
        {skillCategories.map((cat) => (
          <motion.button
            key={cat.title}
            onClick={() => setActiveTab(cat.title)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center gap-3 transition-all duration-500 ${
              activeTab === cat.title 
                ? "bg-white text-black shadow-[0_15px_30px_rgba(255,255,255,0.2)]" 
                : "text-gray-600 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="text-lg opacity-60">{cat.icon}</span>
            {cat.title}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid - Professional Mesh */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {activeTech.map((tech) => (
            <SkillCard key={tech.name} name={tech.name} icon={tech.icon} category={activeTab} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Hyper-Cinematic Performance Deck */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 relative group"
      >
        <div className="absolute -inset-[1px] rounded-[3.5rem] bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent bg-[length:200%_100%] animate-[pan_3s_linear_infinity] opacity-40 blur-[1px]" />
        
        <div className="relative p-12 rounded-[3.5rem] bg-[#020205]/80 border border-white/5 overflow-hidden backdrop-blur-3xl shadow-[0_0_100px_rgba(0,0,0,1)]">
           <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px:32px]" />
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#3b82f6]/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
           
           <div className="flex flex-col xl:flex-row items-center gap-16 relative z-20">
              {/* Cinematic System Core Image */}
              <div className="relative group/core">
                 <div className="w-56 h-56 rounded-[2.5rem] bg-gradient-to-br from-[#3b82f6] via-[#915EFF] to-[#3b82f6] p-[1px] animate-pulse">
                    <div className="w-full h-full rounded-[2.4rem] bg-[#020205] overflow-hidden flex items-center justify-center p-2 relative">
                       <img src={ai_core_icon} alt="System Core" className="w-full h-full object-cover rounded-[2rem] group-hover/core:scale-110 transition-transform duration-1000 grayscale group-hover/core:grayscale-0" />
                       {/* Scanner Overlay */}
                       <motion.div 
                         animate={{ top: ["-10%", "110%"] }} 
                         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                         className="absolute left-0 w-full h-1 bg-[#3b82f6]/50 blur-sm z-30" 
                       />
                    </div>
                 </div>
                 <div className="absolute -inset-8 bg-[#3b82f6]/20 blur-[60px] rounded-full -z-10 animate-pulse" />
              </div>

              <div className="flex-1 text-center xl:text-left">
                 <div className="flex items-center justify-center xl:justify-start gap-4 mb-8">
                    <span className="text-[#3b82f6] font-black tracking-[0.4em] text-[10px] uppercase bg-white/[0.03] px-4 py-1.5 rounded-full border border-white/10">Architecture_v3.0</span>
                    <div className="h-[1px] w-24 bg-gradient-to-r from-white/20 to-transparent" />
                 </div>
                 
                 <h3 className="text-white font-black text-4xl md:text-7xl tracking-[ -0.05em] mb-8 leading-[0.9]">
                    System <br /> <span className="bg-gradient-to-r from-[#3b82f6] via-[#915EFF] to-[#3b82f6] bg-clip-text text-transparent italic">Performance.</span>
                 </h3>
                 
                 <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                    Architecting resilient digital ecosystems. I engineer 
                    <span className="text-white mx-1.5 font-black hover:text-[#3b82f6] transition-colors">High-Concurrency Infrastructures</span> 
                    and scalable full-stack pipelines that ensure absolute stability, security, and 
                    ultra-low latency performance.
                 </p>
              </div>

              {/* Advanced System Controls */}
              <div className="grid grid-cols-2 gap-4 w-full xl:w-auto">
                {[
                  { l: "UPTIME", v: "99.9%", i: "📡", c: "from-blue-500" },
                  { l: "RESP_TIME", v: "14ms", i: "⚡", c: "from-emerald-400" },
                  { l: "SECURITY", v: "ACTIVE", i: "🛡️", c: "from-[#915EFF]" },
                  { l: "SCALING", v: "AUTO", i: "📈", c: "from-blue-400" }
                ].map((p, idx) => (
                  <motion.div 
                    key={p.l}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4 min-w-[160px] backdrop-blur-md hover:bg-white/[0.05] transition-all"
                  >
                    <div className="flex justify-between items-center text-xl">
                       <span>{p.i}</span>
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    </div>
                    <div>
                       <div className="text-[10px] font-black text-gray-500 tracking-[0.2em] mb-1">{p.l}</div>
                       <div className="text-white font-black text-xl font-mono">{p.v}</div>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "100%" }}
                         transition={{ duration: 1.5, delay: idx * 0.1 }}
                         className={`h-full bg-gradient-to-r ${p.c} to-transparent`} 
                       />
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
