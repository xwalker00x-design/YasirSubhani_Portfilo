import { services, experiences, projects } from "../constants";

export type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type AiSettings = {
  apiKey: string;
  model: string;
  enabled: boolean;
};

const SETTINGS_KEY = "ys_ai_settings_v1";

export const defaultAiSettings: AiSettings = {
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY ?? "",
  model: import.meta.env.VITE_AI_MODEL ?? "google/gemini-2.0-flash-001",
  enabled: true,
};

export const loadAiSettings = (): AiSettings => {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (raw) return { ...defaultAiSettings, ...JSON.parse(raw) };
  } catch {
    /* ignore */
  }
  return { ...defaultAiSettings };
};

export const saveAiSettings = (settings: AiSettings): void => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

const buildSystemPrompt = (): string => {
  const projectList = projects
    .slice(0, 8)
    .map((p) => `- ${p.name}: ${p.description}`)
    .join("\n");
  const expList = experiences
    .map((e) => `- ${e.title} at ${e.companyName} (${e.date})`)
    .join("\n");
  const skills = services.map((s) => s.title).join(", ");

  return `You are the AI assistant on Yasir Subhani's portfolio (yasirsubhani.tech).
Be concise, friendly, and professional. Help visitors learn about Yasir's work, skills, and how to hire him.

Core skills: ${skills}

Experience:
${expList}

Featured projects:
${projectList}

Contact: yasir.subhani123@gmail.com | +91 8271819813 | Kolkata, India
Availability: open for freelance and contract, remote, Monday–Saturday IST, replies within one business day. Currently building Pull SaaS for RealtorOne.
If asked about pricing, suggest the contact form or WhatsApp. Do not invent rates.
Do not invent projects or employers not listed above.`;
};

export const sendAiMessage = async (
  history: ChatMessage[],
  settings: AiSettings = loadAiSettings()
): Promise<string> => {
  const apiKey = settings.apiKey?.trim();
  if (!apiKey) {
    throw new Error(
      "AI is not configured. Add VITE_OPENROUTER_API_KEY or set an API key in admin settings."
    );
  }

  const messages: ChatMessage[] = [
    { role: "system", content: buildSystemPrompt() },
    ...history.filter((m) => m.role !== "system"),
  ];

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": "https://yasirsubhani.tech",
      "X-Title": "Yasir Subhani Portfolio",
    },
    body: JSON.stringify({
      model: settings.model,
      messages,
      max_tokens: 600,
      temperature: 0.6,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || `AI request failed (${res.status})`);
  }

  const data = await res.json();
  const content = data?.choices?.[0]?.message?.content;
  if (!content) throw new Error("No response from AI");
  return content.trim();
};
