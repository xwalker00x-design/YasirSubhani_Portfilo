import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { projects } from "../../constants";
import { close } from "../../assets";
import { TProject } from "../../types";
import { SectionWrapper } from "../../hoc";
import {
  installer2,
  installer3,
  installer4,
  installer5,
  installerStarting,
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
} from "../../assets";

interface ProjectModalProps {
  project: TProject;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const getPreferredStoreLink = () => {
    if (typeof navigator === "undefined") return undefined;
    const ua = navigator.userAgent || navigator.vendor;
    const isIOS = /iPad|iPhone|iPod/.test(ua);
    const isAndroid = /Android/.test(ua);

    if (isIOS) return project.appStoreLink;
    if (isAndroid) return project.playStoreLink;
    return undefined;
  };

  // Get multiple screenshots for each project based on available images
  const getProjectScreenshots = (projectName: string) => {
    const screenshots: string[] = [];

    // Add the main project image
    screenshots.push(project.image);

    // Add additional screenshots based on project type - ONLY for the specific project
    if (projectName.toLowerCase().includes('installer') && projectName.toLowerCase().includes('app')) {
      // ONLY for "Installer App" project
      screenshots.push(installer2);
      screenshots.push(installer3);
      screenshots.push(installer4);
      screenshots.push(installer5);
      screenshots.push(installerStarting);
    } else if (projectName.toLowerCase().includes('medikalam') && projectName.toLowerCase().includes('calorie')) {
      // ONLY for "Medikalam Calorie" project
      screenshots.push(medikalam2);
      screenshots.push(medikalam3);
      screenshots.push(medikalam4);
      screenshots.push(medikalam5);
      screenshots.push(medikalam6);
      screenshots.push(medikalamStart);
      screenshots.push(medikalamStart2);
    } else if (projectName.toLowerCase().includes('sigma') && projectName.toLowerCase().includes('travel')) {
      // ONLY for "Sigma Travel" project
      screenshots.push(sigma);
      screenshots.push(sigmaHome);
      screenshots.push(sigmaTravel);
    } else if (projectName.toLowerCase().includes('wesync')) {
      // ONLY for "WeSync" project - use its own images, not installer images
      screenshots.push(project.image);
      screenshots.push(project.image);
      screenshots.push(project.image);
    } else {
      // For all other projects: only show the main project image
      // No duplicate images to avoid confusion
      screenshots.push(project.image);
    }

    return screenshots;
  };

  const screenshots = getProjectScreenshots(project.name);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-black-100 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h2 className="text-white text-2xl font-bold">{project.name}</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <img src={close} alt="close" className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              {/* Screenshots Slideshow */}
              <div className="mb-8">
                <div className="relative group">
                  <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
                    <img
                      src={screenshots[currentImageIndex]}
                      alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-[70vh] object-contain"
                      loading="lazy"
                      decoding="async"
                    />

                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
                    >
                      →
                    </button>
                  </div>

                  {/* Image Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {screenshots.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                            ? "bg-[#915EFF] scale-125"
                            : "bg-gray-600 hover:bg-gray-500"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Screenshot Counter */}
                  <div className="text-center mt-2">
                    <span className="text-gray-400 text-sm">
                      Screenshot {currentImageIndex + 1} of {screenshots.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-8">
                <h3 className="text-white text-xl font-semibold mb-3">Description</h3>
                <p className="text-secondary text-base leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Project Tags */}
              <div className="mb-8">
                <h3 className="text-white text-xl font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color} bg-opacity-20 backdrop-blur-sm`}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                {/* App Store and Play Store Buttons */}
                {(project.appStoreLink || project.playStoreLink) && (
                  <div className="space-y-4">
                    {getPreferredStoreLink() && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.open(getPreferredStoreLink(), "_blank")}
                        className="w-full bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] hover:from-[#7B4FD9] hover:to-[#915EFF] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                      >
                        <span className="text-xl">⬇️</span>
                        Download for your device
                      </motion.button>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.appStoreLink && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(project.appStoreLink, "_blank")}
                          className="bg-gradient-to-r from-[#000000] to-[#333333] hover:from-[#333333] hover:to-[#000000] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          <span className="text-xl">🍎</span>
                          App Store
                        </motion.button>
                      )}

                      {project.playStoreLink && (
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => window.open(project.playStoreLink, "_blank")}
                          className="bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#0099CC] hover:to-[#00D4FF] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                          <span className="text-xl">📱</span>
                          Play Store
                        </motion.button>
                      )}
                    </div>
                  </div>
                )}

                {/* Live Demo Button (if no app store links) */}
                {!project.appStoreLink && !project.playStoreLink && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-[#00D4FF] to-[#0099CC] hover:from-[#0099CC] hover:to-[#00D4FF] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    🚀 Live Demo (Coming Soon)
                  </motion.button>
                )}
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
  sourceCodeLink,
  appStoreLink,
  playStoreLink,
  index,
  onProjectClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, amount: 0.25 }}
      className="rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer relative"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onClick={() => onProjectClick({ name, description, tags, image, sourceCodeLink, appStoreLink, playStoreLink })}
    >
      {/* Project Image - Portrait Style */}
      <div className="relative w-full h-48 overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />

        {/* Overlay with project info */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
            <p className="text-gray-300 text-sm line-clamp-2">{description}</p>
          </div>
        </div>

        {/* GitHub Link hidden */}

        {/* Technology Tags - Top Left */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {tags.slice(0, 2).map((tag, tagIndex) => (
            <span
              key={tag.name}
              className={`text-xs px-2 py-1 rounded-full ${tag.color} bg-opacity-80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300`}
              style={{ transitionDelay: `${tagIndex * 100}ms` }}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>

      {/* Project Content - Compact */}
      <div className="p-4">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#915EFF] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-secondary text-sm leading-relaxed line-clamp-2 mb-3">
          {description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, 3).map((tag, tagIndex) => (
            <motion.span
              key={tag.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: tagIndex * 0.1 }}
              className={`text-xs px-2 py-1 rounded-full ${tag.color} bg-opacity-20 backdrop-blur-sm`}
            >
              #{tag.name}
            </motion.span>
          ))}
          {tags.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-600 text-gray-300">
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* Source code button hidden */}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show only first 3 projects in the main section
  const displayedProjects = projects.slice(0, 3);

  const handleViewAllProjects = () => {
    // Navigate to the separate projects page and scroll to top
    navigate('/projects');
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleProjectClick = (project: TProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-4"
        >
          My work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white text-2xl font-bold mb-4"
        >
          Projects.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
        >
          Each project is a unique piece of development
        </motion.p>
      </motion.div>

      {/* Projects Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true, amount: 0.25 }}
        className="w-full flex justify-center mb-16"
      >
        <p className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px] text-center">
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project reflects my ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </motion.div>

      {/* Projects Grid - Portrait Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true, amount: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {displayedProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onProjectClick={handleProjectClick}
          />
        ))}
      </motion.div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        viewport={{ once: true, amount: 0.25 }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleViewAllProjects}
          className="bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] hover:from-[#7B4FD9] hover:to-[#915EFF] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          View All Projects ({projects.length})
        </motion.button>
      </motion.div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "works");
