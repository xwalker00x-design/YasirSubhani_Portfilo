import type { GenerateOptions } from "../utils/resumePdf";
import { cookieDomain } from "../utils/host";

export type ResumePersonal = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  website: string;
  yearsExperience: string;
};

export type ResumeProject = { name: string; description: string };

export type ResumeData = {
  personal: ResumePersonal;
  summary: string;
  customProjects: ResumeProject[];
  achievements: string[];
  certifications: string[];
  languages: string;
  availability: string;
  hobbies: string;
  aiTools: string;
  aiIdeAgents: string;
  aiLlmsFrameworks: string;
  aiInfraUtilities: string;
  workMode: string;
  compact: boolean;
};

const STORAGE_KEY = "ys_resume_v1";
const COOKIE_KEY = "ys_resume";

export const defaultResumeData: ResumeData = {
  personal: {
    name: "Yasir Subhani",
    role: "Full-Stack Developer • AI Engineer",
    email: "yasir.subhani123@gmail.com",
    phone: "+91 8271819813",
    location: "Kolkata, India",
    linkedin: "linkedin.com/in/yasirsubhani",
    github: "github.com/yasirSub",
    website: "https://yasirsubhani.me",
    yearsExperience: "6+ years experience",
  },
  summary:
    "Full-Stack Developer & AI Engineer with experience across web/mobile, AI automation, and LLM integration (Claude, Gemini). Skilled in scalable app development, prompt engineering, and database optimization with strong focus on UX and performance.",
  customProjects: [
    {
      name: "Pull SaaS (RealtorOne)",
      description:
        "Full-stack freelance engagement for RealtorOne (client: R.N. Tiger). Building and evolving Pull SaaS over 7+ months (Feb 2026 – Present) — multi-tenant product features, APIs, dashboards, and production delivery across the stack.",
    },
  ],
  achievements: [],
  certifications: [],
  languages: "English, Hindi",
  availability: "",
  hobbies: "Playing Guitar, Gaming, Stock Market",
  aiTools:
    "Cursor AI, Rocode/Cline, Anthropic Claude, Google Gemini, OpenAI GPT, Gemini CLI, LangChain, LlamaIndex, MCP Servers, Pinecone, FAISS, Whisper, TTS, Vision Models, Function Calling, RAG Pipelines",
  aiIdeAgents: "Cursor AI, Rocode/Cline",
  aiLlmsFrameworks:
    "Anthropic Claude, Google Gemini, OpenAI GPT, Gemini CLI, LangChain, LlamaIndex",
  aiInfraUtilities:
    "MCP Servers, Pinecone, FAISS, Whisper, TTS, Vision Models, Function Calling, RAG Pipelines",
  workMode: "Work from Home",
  compact: true,
};

const splitCsv = (value: string) =>
  value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

export const toPdfOptions = (data: ResumeData): GenerateOptions => ({
  summary: data.summary,
  additionalProjects: data.customProjects.filter((p) => p.name && p.description),
  aiHighlights: splitCsv(data.aiTools),
  aiHighlightsCategories: {
    ideAgents: splitCsv(data.aiIdeAgents),
    llmsFrameworks: splitCsv(data.aiLlmsFrameworks),
    infraUtilities: splitCsv(data.aiInfraUtilities),
  },
  achievements: data.achievements.filter(Boolean),
  certifications: data.certifications.filter(Boolean),
  languages: splitCsv(data.languages),
  availability: data.availability,
  hobbies: splitCsv(data.hobbies),
  workMode: data.workMode,
  compact: data.compact,
});

const readCookie = (): ResumeData | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_KEY}=`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match.split("=").slice(1).join("="))) as ResumeData;
  } catch {
    return null;
  }
};

export const publishResumeData = (data: ResumeData): void => {
  const json = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, json);
  const domain = cookieDomain();
  if (typeof document !== "undefined" && domain) {
    document.cookie = `${COOKIE_KEY}=${encodeURIComponent(json)}; domain=${domain}; path=/; max-age=31536000; Secure; SameSite=Lax`;
  }
};

export const loadResumeData = (): ResumeData => {
  const fromCookie = readCookie();
  if (fromCookie) return { ...defaultResumeData, ...fromCookie };

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return { ...defaultResumeData, ...JSON.parse(stored) };
    } catch {
      /* fall through */
    }
  }

  return { ...defaultResumeData };
};

let remoteCache: ResumeData | null = null;

export const fetchPublishedResume = async (): Promise<ResumeData> => {
  if (remoteCache) return remoteCache;
  try {
    const res = await fetch(`/resume-data.json?v=${Date.now()}`);
    if (res.ok) {
      const data = (await res.json()) as ResumeData;
      remoteCache = { ...defaultResumeData, ...data };
      return remoteCache;
    }
  } catch {
    /* ignore */
  }
  return loadResumeData();
};

export const loadResumeDataAsync = async (): Promise<ResumeData> => {
  const fromCookie = readCookie();
  if (fromCookie) return { ...defaultResumeData, ...fromCookie };

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return { ...defaultResumeData, ...JSON.parse(stored) };
    } catch {
      /* ignore */
    }
  }

  return fetchPublishedResume();
};
