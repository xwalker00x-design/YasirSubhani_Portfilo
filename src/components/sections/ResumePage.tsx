import { useState } from "react";
import { motion } from "framer-motion";
import { openResumePdf, downloadResumePdf } from "../../utils/resumePdf";
import { openResumeText } from "../../utils/resumeText";

const ResumePage = () => {
  const [personal, setPersonal] = useState({
    name: "Yasir Subhani",
    role: "Full-Stack Developer • AI Engineer",
    email: "yasir.subhani123@gmail.com",
    phone: "+91 8271819813",
    location: "Kolkata, India",
    linkedin: "linkedin.com/in/yasirsubhani",
    github: "github.com/yasirSub",
    website: "https://yasirsubhani.me",
    yearsExperience: "6+ years experience",
  });
  const [summary, setSummary] = useState(
    "Full-Stack Developer & AI Engineer with experience across web/mobile, AI automation, and LLM integration (Claude, Gemini). Skilled in scalable app development, prompt engineering, and database optimization with strong focus on UX and performance."
  );
  const [customProjects, setCustomProjects] = useState<Array<{ name: string; description: string }>>([]);
  const [achievements, setAchievements] = useState<string[]>([]);
  const [certifications, setCertifications] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string>("English, Hindi");
  const [availability, setAvailability] = useState<string>("");
  const [hobbies, setHobbies] = useState<string>("Playing Guitar, Gaming, Stock Market");
  const [aiTools, setAiTools] = useState<string>(
    "Cursor AI, Rocode/Cline, Anthropic Claude, Google Gemini, OpenAI GPT, Gemini CLI, LangChain, LlamaIndex, MCP Servers, Pinecone, FAISS, Whisper, TTS, Vision Models, Function Calling, RAG Pipelines"
  );
  const [aiIdeAgents, setAiIdeAgents] = useState<string>(
    "Cursor AI, Rocode/Cline"
  );
  const [aiLlmsFrameworks, setAiLlmsFrameworks] = useState<string>(
    "Anthropic Claude, Google Gemini, OpenAI GPT, Gemini CLI, LangChain, LlamaIndex"
  );
  const [aiInfraUtilities, setAiInfraUtilities] = useState<string>(
    "MCP Servers, Pinecone, FAISS, Whisper, TTS, Vision Models, Function Calling, RAG Pipelines"
  );
  const [workMode, setWorkMode] = useState<string>("Work from Home");
  const [compact, setCompact] = useState<boolean>(true);

  const handleChange = (key: keyof typeof personal, value: string) => {
    setPersonal((p) => ({ ...p, [key]: value }));
  };

  const addProject = () => {
    setCustomProjects((arr) => [...arr, { name: "", description: "" }]);
  };

  const updateProject = (idx: number, key: "name" | "description", value: string) => {
    setCustomProjects((arr) => arr.map((p, i) => i === idx ? { ...p, [key]: value } : p));
  };

  const removeProject = (idx: number) => {
    setCustomProjects((arr) => arr.filter((_, i) => i !== idx));
  };

  const addAchievement = () => setAchievements((arr) => [...arr, ""]);
  const updateAchievement = (idx: number, value: string) => setAchievements((arr) => arr.map((v, i) => i === idx ? value : v));
  const removeAchievement = (idx: number) => setAchievements((arr) => arr.filter((_, i) => i !== idx));

  const addCertification = () => setCertifications((arr) => [...arr, ""]);
  const updateCertification = (idx: number, value: string) => setCertifications((arr) => arr.map((v, i) => i === idx ? value : v));
  const removeCertification = (idx: number) => setCertifications((arr) => arr.filter((_, i) => i !== idx));

  return (
    <div className="min-h-screen w-full bg-primary py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl font-bold mb-6"
        >
          Resume
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-secondary mb-8"
        >
          Update your details and then view or download a professional PDF.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {(
            [
              ["name", "Full Name"],
              ["role", "Role"],
              ["yearsExperience", "Experience (e.g., 5+ years)"],
              ["email", "Email"],
              ["phone", "Phone"],
              ["location", "Location"],
              ["linkedin", "LinkedIn"],
              ["github", "GitHub"],
              ["website", "Website"],
            ] as Array<[keyof typeof personal, string]>
          ).map(([key, label]) => (
            <div key={key} className="flex flex-col">
              <label className="text-secondary mb-2">{label}</label>
              <input
                value={personal[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
              />
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mb-10">
          <label className="text-secondary mb-2 block">Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            rows={4}
            className="w-full bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-3 focus:outline-none focus:border-[#915EFF]"
          />
        </div>

        {/* AI Tools Used */}
        <div className="mb-10">
          <label className="text-secondary mb-2 block">AI Tools Used (comma-separated)</label>
          <input
            value={aiTools}
            onChange={(e) => setAiTools(e.target.value)}
            className="w-full bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-3 focus:outline-none focus:border-[#915EFF]"
          />
          <p className="text-secondary text-xs mt-2">Example: Cursor AI, Claude, Gemini, OpenAI GPT, LangChain, LlamaIndex, MCP Servers, Pinecone, FAISS, Whisper, TTS, Vision Models, Function Calling, RAG Pipelines</p>
        </div>

        {/* Categorized AI Tools (optional) */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label className="text-secondary mb-2">AI IDE & Agents</label>
            <input
              value={aiIdeAgents}
              onChange={(e) => setAiIdeAgents(e.target.value)}
              className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-secondary mb-2">LLMs & Frameworks</label>
            <input
              value={aiLlmsFrameworks}
              onChange={(e) => setAiLlmsFrameworks(e.target.value)}
              className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-secondary mb-2">Infra & Utilities</label>
            <input
              value={aiInfraUtilities}
              onChange={(e) => setAiInfraUtilities(e.target.value)}
              className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
            />
          </div>
        </div>

        {/* Custom Projects */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <label className="text-secondary">Additional Projects (appear first)</label>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addProject}
              className="px-4 py-2 rounded-lg font-semibold text-white bg-[#915EFF] hover:bg-[#7B4FD9] transition-colors duration-300"
            >
              Add Project
            </motion.button>
          </div>
          <div className="space-y-4">
            {customProjects.map((p, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start">
                <input
                  placeholder="Project name"
                  value={p.name}
                  onChange={(e) => updateProject(idx, "name", e.target.value)}
                  className="md:col-span-3 bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
                />
                <textarea
                  placeholder="Short description"
                  value={p.description}
                  onChange={(e) => updateProject(idx, "description", e.target.value)}
                  rows={2}
                  className="md:col-span-8 bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeProject(idx)}
                  className="md:col-span-1 px-4 py-2 rounded-lg font-semibold text-red-400 border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                >
                  Remove
                </motion.button>
              </div>
            ))}
            {customProjects.length === 0 && (
              <div className="text-secondary text-sm">
                Hint: To reflect iSent details in PDF, add a project named "iSent" with description like: "Delivery-based app with two current modes: Ride (driver) and Store (merchant). Features order assignment, live tracking, store inventory, role-based workflows."
              </div>
            )}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <label className="text-secondary">Achievements</label>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addAchievement}
              className="px-4 py-2 rounded-lg font-semibold text-white bg-[#915EFF] hover:bg-[#7B4FD9] transition-colors duration-300"
            >
              Add Achievement
            </motion.button>
          </div>
          <div className="space-y-3">
            {achievements.map((a, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-3 items-start">
                <input
                  placeholder="e.g., Built AI WhatsApp bot with 2K+ MAU"
                  value={a}
                  onChange={(e) => updateAchievement(idx, e.target.value)}
                  className="col-span-10 bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeAchievement(idx)}
                  className="col-span-2 px-4 py-2 rounded-lg font-semibold text-red-400 border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                >
                  Remove
                </motion.button>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <label className="text-secondary">Certifications</label>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addCertification}
              className="px-4 py-2 rounded-lg font-semibold text-white bg-[#915EFF] hover:bg-[#7B4FD9] transition-colors duration-300"
            >
              Add Certification
            </motion.button>
          </div>
          <div className="space-y-3">
            {certifications.map((c, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-3 items-start">
                <input
                  placeholder="e.g., Google Cloud Associate, Meta Frontend"
                  value={c}
                  onChange={(e) => updateCertification(idx, e.target.value)}
                  className="col-span-10 bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeCertification(idx)}
                  className="col-span-2 px-4 py-2 rounded-lg font-semibold text-red-400 border border-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
                >
                  Remove
                </motion.button>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Availability */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="flex flex-col">
            <label className="text-secondary mb-2">Languages</label>
            <input
              value={languages}
              onChange={(e) => setLanguages(e.target.value)}
              className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-secondary mb-2">Availability</label>
            <input
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-secondary mb-2">Hobbies</label>
            <input
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
            />
          </div>
          <div className="flex items-end gap-3">
            <div className="flex flex-col flex-1">
              <label className="text-secondary mb-2">Work Mode</label>
              <input
                value={workMode}
                onChange={(e) => setWorkMode(e.target.value)}
                className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
              />
            </div>
            <label className="flex items-center gap-2 text-secondary mb-2">
              <input type="checkbox" checked={compact} onChange={(e) => setCompact(e.target.checked)} />
              Compact PDF
            </label>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openResumePdf(personal, { summary, additionalProjects: customProjects.filter(p => p.name && p.description), aiHighlights: aiTools.split(',').map(s => s.trim()).filter(Boolean), aiHighlightsCategories: {
              ideAgents: aiIdeAgents.split(',').map(s => s.trim()).filter(Boolean),
              llmsFrameworks: aiLlmsFrameworks.split(',').map(s => s.trim()).filter(Boolean),
              infraUtilities: aiInfraUtilities.split(',').map(s => s.trim()).filter(Boolean),
            }, achievements: achievements.filter(Boolean), certifications: certifications.filter(Boolean), languages: languages.split(',').map(s => s.trim()).filter(Boolean), availability, hobbies: hobbies.split(',').map(s => s.trim()).filter(Boolean), workMode, compact })}
            className="px-6 py-3 rounded-lg font-semibold text-white bg-[#915EFF] hover:bg-[#7B4FD9] transition-colors duration-300 shadow-lg"
          >
            View PDF
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => downloadResumePdf(personal, "YasirSubhani-Resume.pdf", { summary, additionalProjects: customProjects.filter(p => p.name && p.description), aiHighlights: aiTools.split(',').map(s => s.trim()).filter(Boolean), aiHighlightsCategories: {
              ideAgents: aiIdeAgents.split(',').map(s => s.trim()).filter(Boolean),
              llmsFrameworks: aiLlmsFrameworks.split(',').map(s => s.trim()).filter(Boolean),
              infraUtilities: aiInfraUtilities.split(',').map(s => s.trim()).filter(Boolean),
            }, achievements: achievements.filter(Boolean), certifications: certifications.filter(Boolean), languages: languages.split(',').map(s => s.trim()).filter(Boolean), availability, hobbies: hobbies.split(',').map(s => s.trim()).filter(Boolean), workMode, compact })}
            className="px-6 py-3 rounded-lg font-semibold text-[#915EFF] border border-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
          >
            Download PDF
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openResumeText(personal, { summary, additionalProjects: customProjects.filter(p => p.name && p.description), achievements: achievements.filter(Boolean), certifications: certifications.filter(Boolean), languages: languages.split(',').map(s => s.trim()).filter(Boolean), availability, education: [
              { degree: "MCA (Master of Computer Applications)", institution: "Amity University", year: "2024 - 2025" },
              { degree: "BCA (Bachelor of Computer Applications)", institution: "Amity University", year: "2020 - 2023" },
              { degree: "12th (Higher Secondary)", institution: "High School Sabour", year: "2018" },
              { degree: "10th (Matriculation)", institution: "Millia Convent English School", year: "2014 - 2015" },
            ] })}
            className="px-6 py-3 rounded-lg font-semibold text-[#915EFF] border border-[#915EFF] hover:bg-[#915EFF] hover:text-white transition-colors duration-300"
          >
            View as Text
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
