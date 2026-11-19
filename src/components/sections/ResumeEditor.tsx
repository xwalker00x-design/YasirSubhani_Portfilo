import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  loadResumeData,
  publishResumeData,
  toPdfOptions,
  type ResumeData,
} from "../../data/resumeStore";
import { openResumePdf, downloadResumePdf } from "../../utils/resumePdf";
import { openResumeText } from "../../utils/resumeText";

type Props = {
  showPublish?: boolean;
};

const ResumeEditor = ({ showPublish = true }: Props) => {
  const [data, setData] = useState<ResumeData>(() => loadResumeData());
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setData(loadResumeData());
  }, []);

  const update = <K extends keyof ResumeData>(key: K, value: ResumeData[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setSaved(false);
  };

  const updatePersonal = (key: keyof ResumeData["personal"], value: string) => {
    setData((d) => ({ ...d, personal: { ...d.personal, [key]: value } }));
    setSaved(false);
  };

  const pdfOpts = () => toPdfOptions(data);
  const { personal } = data;

  const handlePublish = () => {
    publishResumeData(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addProject = () =>
    update("customProjects", [...data.customProjects, { name: "", description: "" }]);
  const updateProject = (idx: number, key: "name" | "description", value: string) =>
    update(
      "customProjects",
      data.customProjects.map((p, i) => (i === idx ? { ...p, [key]: value } : p))
    );
  const removeProject = (idx: number) =>
    update(
      "customProjects",
      data.customProjects.filter((_, i) => i !== idx)
    );

  const addAchievement = () => update("achievements", [...data.achievements, ""]);
  const updateAchievement = (idx: number, value: string) =>
    update(
      "achievements",
      data.achievements.map((v, i) => (i === idx ? value : v))
    );
  const removeAchievement = (idx: number) =>
    update(
      "achievements",
      data.achievements.filter((_, i) => i !== idx)
    );

  const addCertification = () => update("certifications", [...data.certifications, ""]);
  const updateCertification = (idx: number, value: string) =>
    update(
      "certifications",
      data.certifications.map((v, i) => (i === idx ? value : v))
    );
  const removeCertification = (idx: number) =>
    update(
      "certifications",
      data.certifications.filter((_, i) => i !== idx)
    );

  return (
    <div className="w-full">
      {showPublish && (
        <div className="mb-8 flex flex-wrap items-center gap-4 rounded-xl border border-[#915EFF]/30 bg-[#915EFF]/10 px-5 py-4">
          <p className="text-secondary text-sm flex-1 min-w-[200px]">
            Save changes to publish resume data to the main site (yasirsubhani.tech). Hero download uses this data.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handlePublish}
            className="px-5 py-2.5 rounded-lg font-semibold text-white bg-[#915EFF] hover:bg-[#7B4FD9]"
          >
            {saved ? "Published ✓" : "Publish to website"}
          </motion.button>
        </div>
      )}

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
          ] as Array<[keyof ResumeData["personal"], string]>
        ).map(([key, label]) => (
          <div key={key} className="flex flex-col">
            <label className="text-secondary mb-2">{label}</label>
            <input
              value={personal[key]}
              onChange={(e) => updatePersonal(key, e.target.value)}
              className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
            />
          </div>
        ))}
      </div>

      <div className="mb-10">
        <label className="text-secondary mb-2 block">Summary</label>
        <textarea
          value={data.summary}
          onChange={(e) => update("summary", e.target.value)}
          rows={4}
          className="w-full bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-3 focus:outline-none focus:border-[#915EFF]"
        />
      </div>

      <div className="mb-10">
        <label className="text-secondary mb-2 block">AI Tools Used (comma-separated)</label>
        <input
          value={data.aiTools}
          onChange={(e) => update("aiTools", e.target.value)}
          className="w-full bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-3 focus:outline-none focus:border-[#915EFF]"
        />
      </div>

      <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <label className="text-secondary mb-2">AI IDE & Agents</label>
          <input
            value={data.aiIdeAgents}
            onChange={(e) => update("aiIdeAgents", e.target.value)}
            className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-secondary mb-2">LLMs & Frameworks</label>
          <input
            value={data.aiLlmsFrameworks}
            onChange={(e) => update("aiLlmsFrameworks", e.target.value)}
            className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-secondary mb-2">Infra & Utilities</label>
          <input
            value={data.aiInfraUtilities}
            onChange={(e) => update("aiInfraUtilities", e.target.value)}
            className="bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
          />
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <label className="text-secondary">Additional Projects</label>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addProject}
            className="px-4 py-2 rounded-lg font-semibold text-white bg-[#915EFF] hover:bg-[#7B4FD9]"
          >
            Add Project
          </motion.button>
        </div>
        <div className="space-y-4">
          {data.customProjects.map((p, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <input
                placeholder="Project name"
                value={p.name}
                onChange={(e) => updateProject(idx, "name", e.target.value)}
                className="md:col-span-3 bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
              />
              <textarea
                placeholder="Description"
                value={p.description}
                onChange={(e) => updateProject(idx, "description", e.target.value)}
                rows={2}
                className="md:col-span-8 bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2 focus:outline-none focus:border-[#915EFF]"
              />
              <button
                type="button"
                onClick={() => removeProject(idx)}
                className="md:col-span-1 text-red-400 border border-red-500 rounded-lg py-2 hover:bg-red-500 hover:text-white"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <label className="text-secondary">Achievements</label>
          <motion.button onClick={addAchievement} className="px-4 py-2 rounded-lg text-white bg-[#915EFF]">
            Add
          </motion.button>
        </div>
        {data.achievements.map((a, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-3 mb-3">
            <input
              value={a}
              onChange={(e) => updateAchievement(idx, e.target.value)}
              className="col-span-10 bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2"
            />
            <button type="button" onClick={() => removeAchievement(idx)} className="col-span-2 text-red-400">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <label className="text-secondary">Certifications</label>
          <motion.button onClick={addCertification} className="px-4 py-2 rounded-lg text-white bg-[#915EFF]">
            Add
          </motion.button>
        </div>
        {data.certifications.map((c, idx) => (
          <div key={idx} className="grid grid-cols-12 gap-3 mb-3">
            <input
              value={c}
              onChange={(e) => updateCertification(idx, e.target.value)}
              className="col-span-10 bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2"
            />
            <button type="button" onClick={() => removeCertification(idx)} className="col-span-2 text-red-400">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div>
          <label className="text-secondary mb-2 block">Languages</label>
          <input
            value={data.languages}
            onChange={(e) => update("languages", e.target.value)}
            className="w-full bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2"
          />
        </div>
        <div>
          <label className="text-secondary mb-2 block">Availability</label>
          <input
            value={data.availability}
            onChange={(e) => update("availability", e.target.value)}
            className="w-full bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2"
          />
        </div>
        <div>
          <label className="text-secondary mb-2 block">Hobbies</label>
          <input
            value={data.hobbies}
            onChange={(e) => update("hobbies", e.target.value)}
            className="w-full bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2"
          />
        </div>
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <label className="text-secondary mb-2 block">Work Mode</label>
            <input
              value={data.workMode}
              onChange={(e) => update("workMode", e.target.value)}
              className="w-full bg-black-100 text-white rounded-lg border border-gray-800 px-4 py-2"
            />
          </div>
          <label className="flex items-center gap-2 text-secondary pb-2">
            <input
              type="checkbox"
              checked={data.compact}
              onChange={(e) => update("compact", e.target.checked)}
            />
            Compact PDF
          </label>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <motion.button
          onClick={() => openResumePdf(personal, pdfOpts())}
          className="px-6 py-3 rounded-lg font-semibold text-white bg-[#915EFF]"
        >
          View PDF
        </motion.button>
        <motion.button
          onClick={() => downloadResumePdf(personal, "YasirSubhani-Resume.pdf", pdfOpts())}
          className="px-6 py-3 rounded-lg font-semibold text-[#915EFF] border border-[#915EFF]"
        >
          Download PDF
        </motion.button>
        <motion.button
          onClick={() =>
            openResumeText(personal, {
              ...pdfOpts(),
              education: [
                { degree: "MCA (Master of Computer Applications)", institution: "Amity University", year: "2024 - 2025" },
                { degree: "BCA (Bachelor of Computer Applications)", institution: "Amity University", year: "2020 - 2023" },
                { degree: "12th (Higher Secondary)", institution: "High School Sabour", year: "2018" },
                { degree: "10th (Matriculation)", institution: "Millia Convent English School", year: "2014 - 2015" },
              ],
            })
          }
          className="px-6 py-3 rounded-lg font-semibold text-[#915EFF] border border-[#915EFF]"
        >
          View as Text
        </motion.button>
      </div>
    </div>
  );
};

export default ResumeEditor;
