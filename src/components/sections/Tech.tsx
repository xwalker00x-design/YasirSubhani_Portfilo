import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { 
  frontendTechnologies, 
  mobileTechnologies, 
  backendTechnologies, 
  designTools, 
  developmentTools 
} from "../../constants";

interface SkillCardProps {
  name: string;
  icon: string;
  category: string;
}

const SkillCard = ({ name, icon, category }: SkillCardProps) => {
  // Brand color mapping for the "Power Glow"
  const getGlowColor = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes('react')) return 'rgba(97, 218, 251, 0.4)';
    if (n.includes('flutter') || n.includes('dart')) return 'rgba(64, 196, 255, 0.4)';
    if (n.includes('node') || n.includes('js')) return 'rgba(131, 205, 41, 0.4)';
    if (n.includes('laravel')) return 'rgba(255, 45, 32, 0.4)';
    if (n.includes('python')) return 'rgba(55, 118, 171, 0.4)';
    if (n.includes('figma')) return 'rgba(162, 89, 255, 0.4)';
    if (n.includes('tailwind')) return 'rgba(56, 189, 248, 0.4)';
    if (n.includes('three')) return 'rgba(255, 255, 255, 0.4)';
    return 'rgba(145, 94, 255, 0.3)'; // Default purple
  };

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative group cursor-pointer flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
      }}
    >
      {/* Power Glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl rounded-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${getGlowColor(name)} 0%, transparent 70%)`
        }}
      />

      <div className="relative z-10 w-12 h-12 mb-3">
        <img src={icon} alt={name} className="w-full h-full object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" />
      </div>
      <span className="relative z-10 text-[12px] font-semibold text-gray-400 group-hover:text-white transition-colors text-center whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
};

const Tech = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const skillCategories = [
    { title: "Frontend", technologies: frontendTechnologies, icon: "💻" },
    { title: "Mobile", technologies: mobileTechnologies, icon: "📱" },
    { title: "Backend", technologies: backendTechnologies, icon: "⚙️" },
    { title: "Design", technologies: designTools, icon: "🎨" },
    { title: "Tools", technologies: developmentTools, icon: "🛠️" },
  ];

  const activeTech = skillCategories.find(c => c.title === activeTab)?.technologies || [];

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 mb-5">
           <span className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
           <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-widest">Stack Expertise</span>
        </div>
        <h2 className="text-white font-black md:text-[64px] sm:text-[52px] text-[36px] mb-4">
          Tech Ecosystem.
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A collection of technologies I've mastered to build high-performance, 
          scalable digital products.
        </p>
      </motion.div>

      {/* Tabs Menu */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {skillCategories.map((cat) => (
          <motion.button
            key={cat.title}
            onClick={() => setActiveTab(cat.title)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 ${
              activeTab === cat.title 
                ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
                : "bg-white/5 text-gray-500 hover:text-white hover:bg-white/10"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.title}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {activeTech.map((tech) => (
            <SkillCard key={tech.name} name={tech.name} icon={tech.icon} category={activeTab} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* AI Specialization Highlight */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-20 p-8 rounded-3xl border border-[#915EFF]/20 bg-gradient-to-r from-[#915EFF]/05 to-[#3b82f6]/05 backdrop-blur-sm relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#915EFF] opacity-[0.05] blur-3xl rounded-full translate-x-32 -translate-y-32" />
        
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <div className="text-5xl">🤖</div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white font-bold text-2xl mb-2">AI & Automation Specialist</h3>
            <p className="text-gray-400 leading-relaxed">
              I specialize in integrating Large Language Models (LLMs) like Claude, Gemini, and GPT into 
              modern app architectures, building RAG pipelines, and automating complex workflows.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-2 max-w-xs">
            {["RAG", "LLMs", "LangChain", "OpenAI", "Geimini"].map(t => (
              <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-[#a78bfa]">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
