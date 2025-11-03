import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconBall from "../canvas/IconBall";
import { SectionWrapper } from "../../hoc";
import { 
  frontendTechnologies, 
  mobileTechnologies, 
  backendTechnologies, 
  designTools, 
  developmentTools 
} from "../../constants";

const Tech = () => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set default expanded state based on screen size
  useEffect(() => {
    if (isMobile) {
      // On mobile, keep all categories collapsed by default
      setExpandedCategories(new Set());
    } else {
      // On desktop, expand all categories by default
      setExpandedCategories(new Set(skillCategories.map(cat => cat.title)));
    }
  }, [isMobile]);

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryTitle)) {
        newSet.delete(categoryTitle);
      } else {
        newSet.add(categoryTitle);
      }
      return newSet;
    });
  };
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Modern web technologies and frameworks",
      technologies: frontendTechnologies,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile app development",
      technologies: mobileTechnologies,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Backend Development",
      description: "Server-side technologies and databases",
      technologies: backendTechnologies,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Design & Creative Tools",
      description: "Adobe Creative Suite and design tools",
      technologies: designTools,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Development Tools",
      description: "Essential development and version control tools",
      technologies: developmentTools,
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <div className="w-full">
      {/* Main Header */}
      <div className="text-center mb-16">
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Skills & Technologies
        </h2>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-4">
          My technical expertise across different domains
        </p>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          From frontend frameworks to design tools, I've mastered a diverse range of technologies 
          to create comprehensive digital solutions.
        </p>
      </div>

      {/* Expand/Collapse All Button */}
      <div className="flex justify-center mb-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const allExpanded = expandedCategories.size === skillCategories.length;
            if (allExpanded) {
              // Collapse all
              setExpandedCategories(new Set());
            } else {
              // Expand all
              setExpandedCategories(new Set(skillCategories.map(cat => cat.title)));
            }
          }}
          className="bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] hover:from-[#7B4FD9] hover:to-[#915EFF] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
        >
          {expandedCategories.size === skillCategories.length ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              Collapse All
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Expand All
            </>
          )}
        </motion.button>
      </div>
      
      {/* Skill Categories */}
      <div className="space-y-12">
        {skillCategories.map((category) => {
          const isExpanded = expandedCategories.has(category.title);
          
          return (
            <motion.div 
              key={category.title} 
              className="w-full bg-black-100/50 rounded-2xl p-6 border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Category Header - Clickable */}
              <motion.div 
                className="text-center mb-6 cursor-pointer"
                onClick={() => toggleCategory(category.title)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className={`w-8 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                  <h3 className="text-white font-bold md:text-[28px] sm:text-[24px] xs:text-[20px] text-[18px]">
                    {category.title}
                  </h3>
                  <div className={`w-8 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <p className="text-gray-400 text-base max-w-2xl">
                    {category.description}
                  </p>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Technology Count */}
                <div className="mt-2">
                  <span className="text-gray-500 text-sm">
                    {category.technologies.length} technologies
                  </span>
                </div>
              </motion.div>
              
              {/* Technology Icons - Collapsible */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-row flex-wrap justify-center gap-6 pt-4 border-t border-gray-800/30">
                      {category.technologies.map((tech) => (
                        <IconBall key={tech.name} icon={tech.icon} name={tech.name} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Skills Summary */}
      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
          <h3 className="text-white font-bold text-2xl mb-4">
            Why This Skill Set?
          </h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            My diverse skill set allows me to handle projects from concept to completion. 
            Whether it's building responsive web applications, developing mobile apps, 
            creating stunning designs, or setting up robust backend systems - I can deliver 
            comprehensive solutions that meet modern development standards.
          </p>
        </div>
      </div>

      {/* AI Tools Badges */}
      <div className="mt-12">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-8 h-1 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"></div>
            <h3 className="text-white font-bold text-2xl">AI Tools</h3>
            <div className="w-8 h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"></div>
          </div>
          <p className="text-gray-400">LLMs, frameworks and services I work with</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Anthropic Claude",
            "Google Gemini",
            "OpenAI GPT",
            "LangChain",
            "LlamaIndex",
            "Vector DBs (Pinecone/FAISS)",
            "Whisper/TTS",
            "Vision Models",
            "Function Calling/Tools",
            "RAG Pipelines",
          ].map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 rounded-full text-sm text-fuchsia-300 border border-fuchsia-600/40 bg-fuchsia-600/10 hover:bg-fuchsia-600/20 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skills");
