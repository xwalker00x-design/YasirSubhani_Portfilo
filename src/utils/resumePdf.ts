import jsPDF from "jspdf";
import QRCode from "qrcode";
import { experiences, projects, frontendTechnologies, mobileTechnologies, backendTechnologies, cloudTechnologies, designTools, developmentTools } from "../constants";

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

export type GenerateOptions = {
  summary?: string;
  additionalProjects?: Array<{ name: string; description: string }>;
  highlights?: string[];
  additionalSkills?: string[];
  achievements?: string[];
  certifications?: string[];
  languages?: string[];
  availability?: string;
  aiHighlights?: string[];
  aiHighlightsCategories?: {
    ideAgents?: string[];
    llmsFrameworks?: string[];
    infraUtilities?: string[];
  };
  education?: Array<{ degree: string; institution: string; year: string }>;
  workMode?: string;
  hobbies?: string[];
  /** Default true — keeps resume on a single A4 page for client sends */
  compact?: boolean;
};

export async function generateResumePdf(personal: PersonalInfo, options: GenerateOptions = {}): Promise<jsPDF> {
  const compact = options.compact !== false;
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = compact ? 36 : 56;
  let y = margin;

  const brand = { primary: { r: 145, g: 94, b: 255 } };
  const setPrimary = () => doc.setTextColor(brand.primary.r, brand.primary.g, brand.primary.b);
  const setBody = () => doc.setTextColor(30);
  const lineH = compact ? 11 : 14;
  const bodySize = compact ? 8.5 : 11;
  const titleSize = compact ? 9.5 : 12;

  const loadImageDataUrl = async (src: string): Promise<string | null> => {
    try {
      const res = await fetch(src, { cache: "force-cache" });
      const blob = await res.blob();
      return await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = () => resolve(null);
        reader.readAsDataURL(blob);
      });
    } catch {
      return null;
    }
  };

  const drawFooter = () => {
    if (compact) return;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(120);
    doc.text(`Page ${doc.getNumberOfPages()}`, pageWidth - margin, pageHeight - 20, { align: "right" });
    setBody();
  };

  const addSectionTitle = (title: string) => {
    const text = title.toUpperCase();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(compact ? 8 : 12);
    if (compact) {
      setPrimary();
      doc.text(text, margin, y);
      doc.setDrawColor(brand.primary.r, brand.primary.g, brand.primary.b);
      doc.setLineWidth(0.8);
      doc.line(margin, y + 3, pageWidth - margin, y + 3);
      setBody();
      y += 12;
      return;
    }
    const padX = 8;
    const textWidth = doc.getTextWidth(text);
    const boxW = textWidth + padX * 2;
    const boxH = 18;
    doc.setFillColor(brand.primary.r, brand.primary.g, brand.primary.b);
    doc.roundedRect(margin, y - 12, boxW, boxH, 4, 4, "F");
    doc.setTextColor(255);
    doc.text(text, margin + padX, y + 2);
    setBody();
    y += 20;
  };

  const addBullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(bodySize);
    const bulletWidth = compact ? 8 : 10;
    const textWidth = pageWidth - margin * 2 - bulletWidth;
    const lines = doc.splitTextToSize(text, textWidth);
    setPrimary();
    doc.circle(margin + 1.5, y - 2.5, compact ? 1 : 1.2, "F");
    setBody();
    doc.text(lines, margin + bulletWidth, y);
    y += lines.length * lineH;
  };

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      if (compact) return false;
      doc.addPage();
      drawFooter();
      y = margin;
    }
    return true;
  };

  // —— Header ——
  let xStart = margin;
  if (!compact) {
    const logoData = await loadImageDataUrl("/images.png");
    if (logoData) {
      try {
        const logoSize = 28;
        doc.addImage(logoData, "PNG", margin, y - 22, logoSize, logoSize);
        xStart = margin + logoSize + 12;
      } catch {
        /* ignore */
      }
    }
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(compact ? 18 : 26);
  setPrimary();
  doc.text(personal.name, xStart, y);
  y += compact ? 16 : 28;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(compact ? 9 : 12);
  setBody();
  const roleLine = personal.yearsExperience
    ? `${personal.role}  •  ${personal.yearsExperience}`
    : personal.role;
  doc.text(roleLine, margin, y);
  y += compact ? 12 : 18;

  type LinkItem = { text: string; url?: string };
  const contactLine: LinkItem[] = [];
  const socialLine: LinkItem[] = [];
  if (personal.email) contactLine.push({ text: personal.email, url: `mailto:${personal.email}` });
  if (personal.phone) contactLine.push({ text: personal.phone, url: `tel:${personal.phone.replace(/\s+/g, "")}` });
  if (personal.location) contactLine.push({ text: personal.location });
  if (personal.linkedin) {
    const url = personal.linkedin.startsWith("http") ? personal.linkedin : `https://${personal.linkedin}`;
    socialLine.push({ text: compact ? personal.linkedin.replace(/^https?:\/\//, "") : "LinkedIn", url });
  }
  if (personal.github) {
    const url = personal.github.startsWith("http") ? personal.github : `https://${personal.github}`;
    socialLine.push({ text: compact ? personal.github.replace(/^https?:\/\//, "") : "GitHub", url });
  }
  if (personal.website) {
    const url = personal.website.startsWith("http") ? personal.website : `https://${personal.website}`;
    socialLine.push({ text: compact ? url.replace(/^https?:\/\//, "") : "Portfolio", url });
  }

  const drawInlineLinks = (startX: number, startY: number, linkItems: LinkItem[]) => {
    doc.setFontSize(compact ? 8 : 10);
    doc.setTextColor(100);
    let cursorX = startX;
    let cursorY = startY;
    const sep = "  ·  ";
    const lh = compact ? 11 : 14;
    const reservedRight = compact ? 0 : 80;
    const maxX = pageWidth - margin - reservedRight;
    linkItems.forEach((li, index) => {
      const width = doc.getTextWidth(li.text);
      if (cursorX + width > maxX) {
        cursorY += lh;
        cursorX = startX;
      }
      if (li.url) {
        setPrimary();
        doc.textWithLink(li.text, cursorX, cursorY, { url: li.url });
        setBody();
      } else {
        doc.text(li.text, cursorX, cursorY);
      }
      cursorX += width;
      if (index < linkItems.length - 1) {
        const sepWidth = doc.getTextWidth(sep);
        if (cursorX + sepWidth <= maxX) {
          doc.setTextColor(120);
          doc.text(sep, cursorX, cursorY);
          cursorX += sepWidth;
        } else {
          cursorY += lh;
          cursorX = startX;
        }
        doc.setTextColor(100);
      }
    });
    setBody();
    return cursorY - startY;
  };

  if (compact) {
    const all = [...contactLine, ...socialLine];
    const extra = drawInlineLinks(margin, y, all);
    y += 12 + extra;
    doc.setDrawColor(brand.primary.r, brand.primary.g, brand.primary.b);
    doc.setLineWidth(1.5);
    doc.line(margin, y, margin + 60, y);
    y += 10;
  } else {
    const extraY = drawInlineLinks(margin, y, contactLine);
    const socialsExtra = drawInlineLinks(margin, y + 16 + extraY, socialLine);
    y += 18 + extraY + socialsExtra + 16;
    doc.setDrawColor(brand.primary.r, brand.primary.g, brand.primary.b);
    doc.setLineWidth(2);
    doc.line(margin, y, margin + 80, y);
    y += 16;

    if (personal.website) {
      const url = personal.website.startsWith("http") ? personal.website : `https://${personal.website}`;
      try {
        const dataUrl = await QRCode.toDataURL(url, { margin: 0, width: 96 });
        const qrSize = 60;
        doc.addImage(dataUrl, "PNG", pageWidth - margin - qrSize, margin - 6, qrSize, qrSize);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(9);
        doc.setTextColor(120);
        doc.text("Portfolio QR", pageWidth - margin - qrSize + 6, margin + qrSize + 6);
        setBody();
      } catch {
        /* ignore */
      }
    }
    drawFooter();
  }

  // —— Summary ——
  addSectionTitle("Summary");
  const summary =
    options.summary ||
    "Full-Stack Developer & AI Engineer with experience in web, mobile, and AI automation. Skilled in building scalable apps, integrating AI/LLMs, and optimizing databases with a focus on UX and performance.";
  if (compact) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(bodySize);
    const lines = doc.splitTextToSize(summary, pageWidth - margin * 2);
    doc.text(lines.slice(0, 3), margin, y);
    y += Math.min(lines.length, 3) * lineH + 4;
  } else {
    y += 4;
    addBullet(summary);
    addBullet("Strong problem-solving and debugging skills; quick at isolating issues and delivering pragmatic fixes.");
    addBullet("Tech Summary: React, Flutter, Node.js, TypeScript, PostgreSQL/MySQL, Docker, Firebase/Supabase");
    y += 6;
  }

  // —— Skills (compact = one block) ——
  addSectionTitle("Skills");
  if (compact) {
    const skillLine = [
      `Frontend: ${frontendTechnologies.map((t) => t.name).slice(0, 8).join(", ")}`,
      `Mobile: ${mobileTechnologies.map((t) => t.name).join(", ")}`,
      `Backend: ${backendTechnologies.map((t) => t.name).slice(0, 8).join(", ")}`,
      `Cloud/DB: ${cloudTechnologies.map((t) => t.name).join(", ")}; MySQL, PostgreSQL, MongoDB, Firebase`,
      `AI: Claude, Gemini, GPT, RAG, LangChain, Cursor`,
      `Tools: ${developmentTools.map((t) => t.name).slice(0, 6).join(", ")}`,
    ].join("  |  ");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(bodySize);
    const lines = doc.splitTextToSize(skillLine, pageWidth - margin * 2);
    doc.text(lines, margin, y);
    y += lines.length * lineH + 6;
  } else {
    if ((options.aiHighlights && options.aiHighlights.length) || options.aiHighlightsCategories) {
      addSectionTitle("AI Tools Used");
      const groups: Array<{ title: string; items: string[] }> = [];
      const cat = options.aiHighlightsCategories || {};
      if (cat.ideAgents?.length) groups.push({ title: "AI IDE & Agents", items: cat.ideAgents });
      if (cat.llmsFrameworks?.length) groups.push({ title: "LLMs & Frameworks", items: cat.llmsFrameworks });
      if (cat.infraUtilities?.length) groups.push({ title: "Infra & Utilities", items: cat.infraUtilities });
      if (options.aiHighlights?.length) {
        const already = new Set(groups.flatMap((g) => g.items).map((s) => s.toLowerCase()));
        const other = options.aiHighlights.filter((t) => !already.has(t.toLowerCase()));
        if (other.length) groups.push({ title: "Other", items: other });
      }
      const colWidthAI = (pageWidth - margin * 2) / 2;
      let leftYAI = y;
      let rightYAI = y;
      const placeAIG = (title: string, itemsText: string, atX: number, atY: number) => {
        doc.setFont("helvetica", "bold");
        setPrimary();
        doc.text(title, atX, atY);
        setBody();
        doc.setFont("helvetica", "normal");
        const lines = doc.splitTextToSize(itemsText, colWidthAI - 20);
        doc.text(lines, atX, atY + 14);
        return 14 + lines.length * 14 + 10;
      };
      for (const g of groups) {
        const text = g.items.join(", ");
        const lines = doc.splitTextToSize(text, colWidthAI - 20);
        const blockH = 14 + lines.length * 14 + 10;
        let tx = margin;
        let ty = leftYAI;
        if (rightYAI < leftYAI) {
          tx = margin + colWidthAI;
          ty = rightYAI;
        }
        if (ty + blockH > pageHeight - margin) {
          doc.addPage();
          drawFooter();
          leftYAI = margin;
          rightYAI = margin;
          tx = margin;
          ty = leftYAI;
        }
        const used = placeAIG(g.title, text, tx, ty);
        if (tx === margin) leftYAI += used;
        else rightYAI += used;
      }
      y = Math.max(leftYAI, rightYAI) + 6;
    }

    const skillsGroups = [
      { title: "Frontend", items: frontendTechnologies.map((t) => t.name) },
      { title: "Mobile", items: mobileTechnologies.map((t) => t.name) },
      { title: "Backend", items: backendTechnologies.map((t) => t.name) },
      { title: "Cloud & Hosting", items: cloudTechnologies.map((t) => t.name) },
      { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "SQLite"] },
      { title: "Hosting/Server", items: ["cPanel", "hPanel", "Apache", "Nginx"] },
      { title: "Design", items: designTools.map((t) => t.name) },
      { title: "Tools", items: developmentTools.map((t) => t.name) },
      ...(options.additionalSkills?.length ? [{ title: "Additional", items: options.additionalSkills }] : []),
    ];
    const colWidth = (pageWidth - margin * 2) / 2;
    let leftY = y;
    let rightY = y;
    const placeGroup = (title: string, itemsText: string, atX: number, atY: number) => {
      doc.setFont("helvetica", "bold");
      setPrimary();
      doc.text(title, atX, atY);
      setBody();
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(itemsText, colWidth - 20);
      doc.text(lines, atX, atY + 14);
      return 14 + lines.length * 14 + 10;
    };
    for (const group of skillsGroups) {
      const lines = doc.splitTextToSize(group.items.join(", "), colWidth - 20);
      const blockHeight = 14 + lines.length * 14 + 10;
      let targetX = margin;
      let targetY = leftY;
      if (rightY < leftY) {
        targetX = margin + colWidth;
        targetY = rightY;
      }
      if (targetY + blockHeight > pageHeight - margin) {
        doc.addPage();
        drawFooter();
        leftY = margin;
        rightY = margin;
        targetY = leftY <= rightY ? leftY : rightY;
        targetX = leftY <= rightY ? margin : margin + colWidth;
      }
      const used = placeGroup(group.title, group.items.join(", "), targetX, targetY);
      if (targetX === margin) leftY += used;
      else rightY += used;
    }
    y = Math.max(leftY, rightY) + 6;
  }

  // —— Experience ——
  addSectionTitle("Experience");
  experiences.forEach((exp, idx) => {
    const maxPoints = compact ? (idx < 2 ? 2 : 1) : 6;
    if (!ensureSpace(compact ? 28 : 80)) return;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(titleSize);
    setBody();
    const head = `${exp.title} — ${exp.companyName}`;
    const headLines = doc.splitTextToSize(head, pageWidth - margin * 2 - (compact ? 110 : 0));
    doc.text(headLines[0], margin, y);
    if (compact) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(bodySize);
      doc.setTextColor(100);
      doc.text(exp.date, pageWidth - margin, y, { align: "right" });
      setBody();
      y += lineH + 1;
    } else {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(100);
      doc.text(exp.date, margin, y + 14);
      setBody();
      y += 28;
    }
    exp.points.slice(0, maxPoints).forEach((pt) => addBullet(pt));
    y += compact ? 3 : 6;
  });

  // —— Projects ——
  addSectionTitle("Projects");
  const combinedProjects = [...(options.additionalProjects || []), ...projects];
  const projectLimit = compact ? 3 : 6;
  combinedProjects.slice(0, projectLimit).forEach((p) => {
    if (!ensureSpace(compact ? 22 : 60)) return;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(titleSize);
    setBody();
    doc.text(p.name, margin, y);
    y += compact ? lineH : 14;
    const desc =
      compact && p.description.length > 140 ? `${p.description.slice(0, 137).trim()}…` : p.description;
    addBullet(desc);
    if (!compact && p.name === "Installer App") {
      const anyP = p as { appStoreLink?: string; playStoreLink?: string };
      if (anyP.appStoreLink) {
        setPrimary();
        doc.textWithLink("App Store", margin + 10, y, { url: anyP.appStoreLink });
        setBody();
        y += 14;
      }
      if (anyP.playStoreLink) {
        setPrimary();
        doc.textWithLink("Play Store", margin + 10, y, { url: anyP.playStoreLink });
        setBody();
        y += 14;
      }
    }
    y += compact ? 2 : 4;
  });

  // —— Education ——
  const defaultEducation = [
    { degree: "MCA (Master of Computer Applications)", institution: "Amity University", year: "2024 - 2025" },
    { degree: "BCA (Bachelor of Computer Applications)", institution: "Amity University", year: "2020 - 2023" },
    { degree: "12th (Higher Secondary)", institution: "High School Sabour", year: "2018" },
    { degree: "10th (Matriculation)", institution: "Millia Convent English School", year: "2014 - 2015" },
  ];
  const education = options.education?.length ? options.education : defaultEducation;
  const eduLimit = compact ? 2 : 6;
  if (education.length && ensureSpace(compact ? 28 : 40)) {
    addSectionTitle("Education");
    education.slice(0, eduLimit).forEach((e) => {
      if (!ensureSpace(compact ? 14 : 30)) return;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(titleSize);
      setBody();
      if (compact) {
        doc.text(`${e.degree} — ${e.institution}`, margin, y);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(bodySize);
        doc.setTextColor(100);
        doc.text(e.year, pageWidth - margin, y, { align: "right" });
        setBody();
        y += lineH + 2;
      } else {
        doc.text(e.degree, margin, y);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(100);
        doc.text(`${e.institution}  •  ${e.year}`, margin, y + 14);
        setBody();
        y += 30;
      }
    });
  }

  if (!compact && options.achievements?.length) {
    addSectionTitle("Achievements");
    options.achievements.forEach((a) => {
      ensureSpace(30);
      addBullet(a);
    });
    y += 4;
  }

  if (!compact && options.certifications?.length) {
    addSectionTitle("Certifications");
    options.certifications.forEach((c) => {
      ensureSpace(30);
      addBullet(c);
    });
    y += 4;
  }

  // —— Extras ——
  const hasExtras =
    (options.languages && options.languages.length) ||
    (options.availability && options.availability.trim().length > 0) ||
    options.workMode ||
    (options.hobbies && options.hobbies.length);
  if (hasExtras && ensureSpace(compact ? 18 : 40)) {
    addSectionTitle(compact ? "Availability" : "Languages / Extras");
    if (compact) {
      const bits: string[] = [];
      if (options.languages?.length) bits.push(options.languages.join(", "));
      if (options.workMode) bits.push(options.workMode);
      bits.push(options.availability?.trim() || "Open for freelance · Mon–Sat · Remote (IST)");
      doc.setFont("helvetica", "normal");
      doc.setFontSize(bodySize);
      const lines = doc.splitTextToSize(bits.join("  ·  "), pageWidth - margin * 2);
      doc.text(lines, margin, y);
      y += lines.length * lineH;
    } else {
      if (options.languages?.length) addBullet(`Languages: ${options.languages.join(", ")}`);
      if (options.availability?.trim()) addBullet(`Availability: ${options.availability}`);
      if (options.workMode) addBullet(`Work Mode: ${options.workMode}`);
      if (options.hobbies?.length) addBullet(`Hobbies: ${options.hobbies.join(", ")}`);
      y += 6;
    }
  }

  return doc;
}

export async function openResumePdf(personal: PersonalInfo, options: GenerateOptions = {}) {
  const doc = await generateResumePdf(personal, { compact: true, ...options });
  doc.output("dataurlnewwindow");
}

export async function downloadResumePdf(
  personal: PersonalInfo,
  filename = "YasirSubhani-Resume.pdf",
  options: GenerateOptions = {}
) {
  const doc = await generateResumePdf(personal, { compact: true, ...options });
  doc.save(filename);
}
