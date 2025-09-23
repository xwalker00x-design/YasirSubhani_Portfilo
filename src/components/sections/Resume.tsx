import { motion } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import { downloadResumePdf, openResumePdf } from "../../utils/resumePdf";

const Resume = () => {
  const personal = {
    name: "Yasir Subhani",
    role: "Full-Stack Developer",
    email: "yasir.subhani123@gmail.com",
    phone: "+91 8271819813",
    location: "Kolkata, India",
    linkedin: "linkedin.com/in/yasirsubhani",
    github: "github.com/yasirSub",
    website: "yasirsubhani.dev",
  };

  const handleView = () => openResumePdf(personal);
  const handleDownload = () => downloadResumePdf(personal);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black-100 border border-gray-800 rounded-2xl p-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#915EFF] rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[#7B4FD9] rounded-full" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📄</span>
            <h2 className="text-white text-2xl font-bold">Resume</h2>
          </div>
          <p className="text-secondary mb-6">
            View or download my latest resume as PDF.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleView}
              className="px-6 py-3 rounded-lg font-semibold text-white bg-[#915EFF] hover:bg-[#7B4FD9] transition-colors duration-300 shadow-lg"
            >
              View Resume
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleDownload}
              className="px-6 py-3 rounded-lg font-semibold text-[#915EFF] border border-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
            >
              Download Resume
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Resume, "resume");


