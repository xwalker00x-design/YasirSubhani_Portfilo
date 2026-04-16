import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { projects } from "../../constants";
import { close } from "../../assets";
import { TProject } from "../../types";
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
      screenshots.push(installer_new_1);
      screenshots.push(installer_new_2);
      screenshots.push(installer_new_3);
      screenshots.push(installer_new_4);
      screenshots.push(installer1);
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
    } else if (projectName.toLowerCase().includes('skoolwala')) {
      // ONLY for "SkoolWala ERP" project
      screenshots.push(skoolwala_new_1);
      screenshots.push(skoolwala_new_2);
      screenshots.push(skoolwala_new_3);
      screenshots.push(skoolwala_new_4);
      screenshots.push(skoolwala_new_5);
    } else if (projectName.toLowerCase().includes('realtorone') && projectName.toLowerCase().includes('website')) {
      // ONLY for "RealtorOne Website" project
      screenshots.push(realtorone_web_1);
      screenshots.push(realtorone_web_2);
      screenshots.push(realtorone_web_3);
      screenshots.push(realtorone_web_4);
      screenshots.push(realtorone_web_5);
      screenshots.push(realtorone_web_6);
      screenshots.push(realtorone_web_7);
    } else if (projectName.toLowerCase().includes('realtorone') && projectName.toLowerCase().includes('app')) {
      // ONLY for "RealtorOne App" project
      screenshots.push(realtorone_1);
      screenshots.push(realtorone_2);
      screenshots.push(realtorone_3);
      screenshots.push(realtorone_4);
      screenshots.push(realtorone_5);
      screenshots.push(realtorone_6);
      screenshots.push(realtorone_7);
    } else if (projectName.toLowerCase().includes('care on demand')) {
      // ONLY for "Care On Demand" project
      screenshots.push(careondemand_web_new_1);
      screenshots.push(careondemand_web_new_2);
      screenshots.push(careondemand_web_1);
      screenshots.push(careondemand_web_2);
      screenshots.push(careondemand_web_3);
      screenshots.push(careondemand_1);
      screenshots.push(careondemand_2);
      screenshots.push(careondemand_3);
      screenshots.push(careondemand_4);
      screenshots.push(careondemand_5);
      screenshots.push(careondemand_6);
      screenshots.push(careondemand_7);
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

                {/* Live Demo / Website Button */}
                {project.liveLink && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open(project.liveLink, "_blank")}
                    className="w-full bg-gradient-to-r from-[#915EFF] to-[#3b82f6] text-white px-6 py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 shadow-[0_10px_30px_rgba(145,94,255,0.4)] flex items-center justify-center gap-3"
                  >
                    <span>VISIT LIVE WEBSITE</span>
                    <span className="text-xl">🌐</span>
                  </motion.button>
                )}

                {/* fallback for projects without specific links */}
                {!project.appStoreLink && !project.playStoreLink && !project.liveLink && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg cursor-not-allowed opacity-50"
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
  featured,
  index,
  liveLink,
  onProjectClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`bg-black-100 p-4 sm:p-5 rounded-2xl sm:w-[400px] w-full group hover:scale-105 transition-all duration-300 cursor-pointer ${featured ? "ring-2 ring-[#915EFF] shadow-[0_0_30px_rgba(145,94,255,0.25)]" : ""
        }`}
      onClick={() => onProjectClick({ name, description, tags, image, sourceCodeLink, appStoreLink, playStoreLink, featured, liveLink })}
    >
      {/* Project Image Container - Fixed aspect ratio for landscape */}
      <div className="relative w-full aspect-video overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain rounded-2xl group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl" />

        {featured && (
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] text-white shadow-lg">
              Featured
            </span>
          </div>
        )}

        {/* Overlay with project info */}
        <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-black bg-opacity-80 p-3 rounded-xl">
            <h3 className="text-white font-semibold text-sm mb-1">{name}</h3>
            <p className="text-gray-300 text-xs line-clamp-2">{description}</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[20px] group-hover:text-[#915EFF] transition-colors duration-300">
          {name}
        </h3>
        <p className="mt-2 text-secondary text-[14px] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.slice(0, 3).map((tag) => (
          <span
            key={tag.name}
            className={`text-[12px] px-2 py-1 rounded-full ${tag.color} bg-opacity-20 backdrop-blur-sm`}
          >
            #{tag.name}
          </span>
        ))}
        {tags.length > 3 && (
          <span className="text-[12px] px-2 py-1 rounded-full bg-gray-600 text-gray-300">
            +{tags.length - 3} more
          </span>
        )}
      </div>

      {/* Click hint */}
      <div className="mt-4 text-center" />
    </motion.div>
  );
};

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<TProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log('ProjectsPage mounted - Mobile check:', window.innerWidth <= 768);
    console.log('Total projects:', projects.length);
    console.log('Filtered projects:', filteredProjects.length);
  }, []);

  const categories = [
    "all",
    "flutter",
    "react-native",
    "ai",
    "python",
    "mobile",
    "web",
    "expo"
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project =>
      project.tags.some(tag => tag.name.toLowerCase().includes(selectedCategory.toLowerCase()))
    );

  const sortedProjects = [...filteredProjects].sort(
    (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
  );

  const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 12);

  const handleProjectClick = (project: TProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full min-h-screen bg-primary py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mb-4"
          >
            All Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-4"
          >
            Explore my complete portfolio of work
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white text-lg max-w-2xl mx-auto"
          >
            Click on any project to view detailed information and screenshots
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                ? "bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
                }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
              {category !== "all" && ` (${filteredProjects.filter(project =>
                project.tags.some(tag => tag.name.toLowerCase().includes(category.toLowerCase()))
              ).length})`}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-8 mb-12"
        >
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
                onProjectClick={handleProjectClick}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-white">
              <h3 className="text-xl font-semibold mb-2">No projects found</h3>
              <p className="text-gray-300">Try selecting a different category</p>
              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-400">
                  Debug: Total projects: {projects.length},
                  Filtered: {filteredProjects.length},
                  Category: {selectedCategory}
                </p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Simple fallback grid for mobile compatibility */}
        <div className="grid grid-cols-1 sm:hidden gap-4 mb-12">
          {sortedProjects.slice(0, 6).map((project, index) => (
            <div
              key={`fallback-${index}`}
              className="bg-gray-800 p-4 rounded-lg"
              onClick={() => handleProjectClick(project)}
            >
              <h4 className="text-white font-semibold mb-2">{project.name}</h4>
              <p className="text-gray-300 text-sm">{project.description}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-blue-600 text-white px-2 py-1 rounded"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {filteredProjects.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="bg-gradient-to-r from-[#915EFF] to-[#7B4FD9] hover:from-[#7B4FD9] hover:to-[#915EFF] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showAll ? "Show Less" : `View More (${filteredProjects.length - 12} more)`}
            </motion.button>
          </motion.div>
        )}

        {/* Project Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16 text-secondary"
        >
          <p className="text-lg">
            Showing {displayedProjects.length} of {filteredProjects.length} projects
            {selectedCategory !== "all" && ` in ${selectedCategory}`}
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Total: {projects.length} projects in portfolio
          </p>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ProjectsPage;
