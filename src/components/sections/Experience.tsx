import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";

const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row items-center w-full mb-20 ${isEven ? 'md:flex-row-reverse' : ''}`}>
      {/* Date Pillar (Mobile) */}
      <div className="md:hidden mb-4 text-[#a78bfa] font-black tracking-tighter text-xl">
        {experience.date}
      </div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full md:w-[45%] group"
      >
        <div className="relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl hover:border-[#915EFF]/30 transition-all duration-500 shadow-2xl overflow-hidden">
          {/* Accent Glow */}
          <div className="absolute top-0 left-0 w-2 h-full bg-[#915EFF] opacity-50 group-hover:w-full group-hover:opacity-[0.03] transition-all duration-500" />
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/5 p-2 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <img src={experience.icon} alt={experience.companyName} className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-white font-black text-2xl tracking-tight">{experience.title}</h3>
              <p className="text-[#a78bfa] font-bold text-sm tracking-wide">{experience.companyName}</p>
            </div>
          </div>

          <ul className="space-y-4">
            {experience.points.map((point: string, i: number) => (
              <li key={i} className="flex gap-3 text-gray-400 text-[14px] leading-relaxed">
                <span className="text-[#915EFF] font-bold">›</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Center Spacer for Line */}
      <div className="hidden md:flex flex-1 justify-center relative">
        <div className="w-10 h-10 rounded-full bg-[#05050a] border-4 border-[#915EFF] z-10 shadow-[0_0_20px_rgba(145,94,255,0.5)]" />
        <div className="absolute top-1/2 left-full ml-4 whitespace-nowrap text-gray-600 font-black text-xl tracking-tighter group-hover:text-white transition-colors">
           {/* Date logic for side alignment */}
        </div>
      </div>

      {/* Date (Desktop) */}
      <div className={`hidden md:block w-[45%] ${isEven ? 'text-right pr-12' : 'text-left pl-12'}`}>
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-600 font-black text-4xl tracking-tighter block group-hover:text-[#a78bfa] transition-colors"
        >
          {experience.date}
        </motion.span>
      </div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="w-full py-20 relative">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-32"
      >
        <span className="text-[#a78bfa] font-bold uppercase tracking-[0.3em] text-xs">Journey</span>
        <h2 className="text-white font-black md:text-[64px] sm:text-[52px] text-[36px] mt-4">Professional Path.</h2>
      </motion.div>

      {/* The Central Drawing Line (Desktop Only) */}
      <div className="absolute left-[50%] top-[300px] bottom-0 w-1 hidden md:block -translate-x-1/2 overflow-hidden bg-white/5">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#915EFF] via-[#3b82f6] to-[#915EFF]"
          style={{ height: "100%", originY: 0, scaleY: pathLength }}
        />
        {/* Glowing Head of the line */}
        <motion.div 
           className="absolute w-4 h-4 rounded-full bg-white shadow-[0_0_20px_#fff,0_0_40px_#915EFF] -left-[6px] z-20"
           style={{ top: useTransform(pathLength, [0, 1], ["0%", "100%"]) }}
        />
      </div>

      {/* Cards container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
