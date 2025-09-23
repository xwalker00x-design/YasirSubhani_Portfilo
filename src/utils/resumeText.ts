import { experiences, projects } from "../constants";

type PersonalInfo = {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  website?: string;
  yearsExperience?: string;
};

type GenerateOptions = {
  summary?: string;
  additionalProjects?: Array<{ name: string; description: string }>; 
  achievements?: string[];
  certifications?: string[];
  languages?: string[];
  availability?: string;
  education?: Array<{ degree: string; institution: string; year: string }>;
};

export function generateResumeText(personal: PersonalInfo, options: GenerateOptions = {}): string {
  const lines: string[] = [];
  lines.push(`${personal.name}`);
  lines.push(`${personal.role}${personal.yearsExperience ? ` • ${personal.yearsExperience}` : ""}`);
  const contacts = [personal.email, personal.phone, personal.location, personal.linkedin, personal.github, personal.website]
    .filter(Boolean)
    .join(" | ");
  lines.push(contacts);
  lines.push("");

  // Summary
  if (options.summary) {
    lines.push("Summary");
    lines.push(options.summary);
    lines.push("");
  }

  // Experience
  lines.push("Experience");
  experiences.forEach(exp => {
    lines.push(`${exp.title} — ${exp.companyName} (${exp.date})`);
    exp.points.forEach(pt => lines.push(`- ${pt}`));
    lines.push("");
  });

  // Projects
  lines.push("Projects");
  const allProjects = [ ...(options.additionalProjects || []), ...projects ];
  allProjects.slice(0, 8).forEach(p => {
    // @ts-ignore allow description from both shapes
    const desc: string = p.description || "";
    lines.push(`${p.name}`);
    lines.push(`- ${desc}`);
  });
  lines.push("");

  // Education
  const edu = options.education || [];
  if (edu.length) {
    lines.push("Education");
    edu.forEach(e => lines.push(`${e.degree} — ${e.institution} (${e.year})`));
    lines.push("");
  }

  // Achievements
  if (options.achievements && options.achievements.length) {
    lines.push("Achievements");
    options.achievements.forEach(a => lines.push(`- ${a}`));
    lines.push("");
  }

  // Certifications
  if (options.certifications && options.certifications.length) {
    lines.push("Certifications");
    options.certifications.forEach(c => lines.push(`- ${c}`));
    lines.push("");
  }

  // Languages / Availability
  const footerBits: string[] = [];
  if (options.languages && options.languages.length) footerBits.push(`Languages: ${options.languages.join(", ")}`);
  if (options.availability) footerBits.push(`Availability: ${options.availability}`);
  if (footerBits.length) {
    lines.push(footerBits.join(" | "));
  }

  return lines.join("\n");
}

export function openResumeText(personal: PersonalInfo, options: GenerateOptions = {}) {
  const text = generateResumeText(personal, options);
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  window.open(url, "_blank", "noopener,noreferrer");
}


