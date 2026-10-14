import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { projects } from "../../constants";
import { TProject } from "../../types";
import { SectionWrapper } from "../../hoc";
import {
  installer1,
  installer2,
  installer3,
  installer4,
  installer5,
  installerStarting,
  installer_new_1,
  installer_new_2,
  installer_new_3,
  installer_new_4,
  medikalam2,
  medikalam3,
  medikalam4,
  medikalam5,
  medikalam6,
  medikalamStart,
  medikalamStart2,
  sigma,
  sigmaTravel,
  sigmaHome,
  skoolwala_new_1,
  skoolwala_new_2,
  skoolwala_new_3,
  skoolwala_new_4,
  skoolwala_new_5,
  careondemand_1,
  careondemand_2,
  careondemand_3,
  careondemand_4,
  careondemand_5,
  careondemand_6,
  careondemand_7,
  careondemand_web_1,
  careondemand_web_2,
  careondemand_web_3,
  careondemand_web_new_1,
  careondemand_web_new_2,
  realtorone_1,
  realtorone_2,
  realtorone_3,
  realtorone_4,
  realtorone_5,
  realtorone_6,
  realtorone_7,
  realtorone_web_1,
  realtorone_web_2,
  realtorone_web_3,
  realtorone_web_4,
  realtorone_web_5,
  realtorone_web_6,
  realtorone_web_7,
  isent_1,
  isent_2,
  isent_3,
  isent_4,
  isent_5,
  isent_6,
} from "../../assets";

interface ProjectModalProps {
  project: TProject;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getProjectScreenshots = (projectName: string) => {
    const screenshots: string[] = [];
    screenshots.push(project.image);
    if (projectName.toLowerCase().includes('installer') && projectName.toLowerCase().includes('app')) {
      screenshots.push(installer_new_1, installer_new_2, installer_new_3, installer_new_4, installer1, installer2, installer3, installer4, installer5, installerStarting);
    } else if (projectName.toLowerCase().includes('medikalam')) {
      screenshots.push(medikalam2, medikalam3, medikalam4, medikalam5, medikalam6, medikalamStart, medikalamStart2);
    } else if (projectName.toLowerCase().includes('sigma')) {
      screenshots.push(sigma, sigmaHome, sigmaTravel);
    } else if (projectName.toLowerCase().includes('realtorone') && projectName.toLowerCase().includes('website')) {
      screenshots.push(realtorone_web_1, realtorone_web_2, realtorone_web_3, realtorone_web_4, realtorone_web_5, realtorone_web_6, realtorone_web_7);
    } else if (projectName.toLowerCase().includes('realtorone') && projectName.toLowerCase().includes('app')) {
      screenshots.push(realtorone_1, realtorone_2, realtorone_3, realtorone_4, realtorone_5, realtorone_6, realtorone_7);
    } else if (projectName.toLowerCase().includes('care on demand')) {
      screenshots.push(careondemand_web_new_1, careondemand_web_new_2, careondemand_web_1, careondemand_web_2, careondemand_web_3, careondemand_1, careondemand_2, careondemand_3, careondemand_4, careondemand_5, careondemand_6, careondemand_7);
    } else if (projectName.toLowerCase().includes('skoolwala')) {
      screenshots.push(skoolwala_new_1, skoolwala_new_2, skoolwala_new_3, skoolwala_new_4, skoolwala_new_5);
    } else if (projectName.toLowerCase().includes('isent')) {
      screenshots.push(isent_1, isent_2, isent_3, isent_4, isent_5, isent_6);
    }
    return screenshots;
  };

  const screenshots = getProjectScreenshots(project.name);
  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/40 backdrop-blur-[20px]"
          onClick={onClose}
        >
          {/* Main Backdrop Glow */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#915EFF]/20 blur-[150px] rounded-full" />
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            className="relative bg-[#05050a]/90 border border-white/10 rounded-[2.5rem] max-w-6xl w-full h-full max-h-[90vh] overflow-hidden shadow-[0_32px_100px_rgba(0,0,0,0.8)] flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Cinematic Gallery */}
            <div className="relative w-full md:w-3/5 h-[400px] md:h-full bg-black/40 flex items-center justify-center group">
               {/* Gallery Controls */}
               <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }} 
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md hover:bg-[#915EFF] transition-all pointer-events-auto"
                  >
                    ←
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }} 
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center backdrop-blur-md hover:bg-[#915EFF] transition-all pointer-events-auto"
                  >
                    →
                  </button>
               </div>

               {/* Screenshot Image */}
               <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={screenshots[currentImageIndex]}
                    alt="Project Overview"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-contain p-8 md:p-12"
                  />
               </AnimatePresence>

               {/* Indicators Overlay */}
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {screenshots.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1 rounded-full transition-all duration-300 ${i === currentImageIndex ? "w-8 bg-[#915EFF]" : "w-3 bg-white/20"}`} 
                    />
                  ))}
               </div>
            </div>

            {/* Right: Content & Specs */}
            <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col bg-white/[0.02]">
               <div className="flex justify-between items-start mb-8">
                  <div>
                    <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter mb-2">{project.name}</h2>
                    <div className="flex items-center gap-2 text-[#915EFF] text-xs font-bold uppercase tracking-[0.2em]">
                       <span className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
                       Intelligence Analysis
                    </div>
                  </div>
                  <button onClick={onClose} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
                     ✕
                  </button>
               </div>

               <div className="space-y-10 flex-grow">
                  {/* Technology Stack */}
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 opacity-50">Blueprint Architecture</h4>
                    <div className="flex flex-wrap gap-2">
                       {project.tags.map(tag => (
                         <span key={tag.name} className={`px-4 py-1.5 rounded-xl text-xs font-bold border border-white/5 bg-white/5 ${tag.color}`}>
                           #{tag.name}
                         </span>
                       ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4 opacity-50">Mission Briefing</h4>
                    <p className="text-gray-400 leading-relaxed text-lg">
                       {project.description}
                    </p>
                  </div>
               </div>

               {/* Footer Action Area */}
               <div className="mt-12 pt-8 border-t border-white/10">
                  <div className="flex flex-col gap-4">
                      {project.liveLink && (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#915EFF] to-[#3b82f6] text-white font-black rounded-2xl shadow-[0_10px_30px_rgba(145,94,255,0.4)] transition-all"
                        >
                          <span>VISIT LIVE WEBSITE</span>
                          <span className="text-xl">🌐</span>
                        </motion.a>
                      )}

                      {project.playStoreLink && (
                        <motion.a
                          href={project.playStoreLink}
                          target="_blank"
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="flex items-center justify-center gap-3 w-full py-5 bg-white/5 border border-white/10 text-white font-black rounded-2xl hover:bg-white/10 transition-all shadow-xl"
                        >
                          <span>INSTALL FROM PLAY STORE</span>
                          <span className="text-xl">📱</span>
                        </motion.a>
                      )}
                      
                       {/* Repository links hidden as requested */}
                   </div>
                </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ProjectCard: React.FC<TProject & { index: number; onProjectClick: (project: TProject) => void }> = ({
  name,
  description,
  tags,
  image,
  appStoreLink,
  playStoreLink,
  liveLink,
  onProjectClick
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10 }}
      onClick={() => onProjectClick({ name, description, tags, image, appStoreLink, playStoreLink, liveLink })}
      className="group relative bg-[#0a0a14] rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#915EFF]/30 transition-all cursor-pointer shadow-2xl"
    >
      <div className="relative h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-60" />
      </div>

      <div className="p-8">
        <h3 className="text-white font-black text-2xl mb-2 group-hover:text-[#915EFF] transition-colors">{name}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-6">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag.name} className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/5 border border-white/10 ${tag.color} shadow-[0_0_10px_-2px] shadow-current opacity-70 group-hover:opacity-100 transition-opacity`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Web", "Mobile", "AI"];

  const filteredProjects = projects.filter((project) => {
    if (filter === "All") return true;
    return project.tags.some((tag) => 
      tag.name.toLowerCase().includes(filter.toLowerCase()) || 
      (filter === "AI" && tag.name.toLowerCase().includes("ai"))
    );
  });

  const homeOrder = [
    "Pull SaaS (RealtorOne)",
    "RealtorOne App",
    "RealtorOne Website",
    "Installer App",
    "SkoolWala ERP",
    "Care On Demand",
  ];
  const displayedProjects = filter === "All"
    ? [...filteredProjects]
        .sort((a, b) => {
          const ia = homeOrder.indexOf(a.name);
          const ib = homeOrder.indexOf(b.name);
          return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
        })
        .slice(0, 6)
    : filteredProjects;

  const handleProjectClick = (project: TProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#915EFF]/40 bg-[#915EFF]/10 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#915EFF] animate-pulse" />
          <span className="text-[#a78bfa] text-xs font-bold uppercase tracking-[0.2em]">Showcase</span>
        </div>

        <h2 className="text-white font-black md:text-[64px] sm:text-[52px] text-[36px] leading-[1.1] mb-4">
          Selected <span className="bg-gradient-to-r from-[#915EFF] to-[#3b82f6] bg-clip-text text-transparent italic">Works.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Live products clients can open: SaaS, a broker app on Google Play, school ERP, and healthcare.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all border ${
                filter === cat
                  ? "bg-[#915EFF] border-[#915EFF] text-white shadow-[0_10px_20px_rgba(145,94,255,0.3)]"
                  : "bg-white/5 border-white/10 text-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto min-h-[500px]"
      >
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
              onProjectClick={handleProjectClick}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="text-center mt-20">
         <motion.button
           onClick={() => navigate('/projects')}
           whileHover={{ scale: 1.05, y: -5 }}
           className="px-12 py-5 bg-white/5 border border-white/10 rounded-3xl text-white font-black text-sm uppercase tracking-[0.3em] hover:bg-[#915EFF] hover:border-[#915EFF] transition-all shadow-2xl"
         >
           View All Projects
         </motion.button>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => { setIsModalOpen(false); setSelectedProject(null); }}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");
