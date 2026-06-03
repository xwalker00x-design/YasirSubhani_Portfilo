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
  additionalProjects?: Array<{ name: string; description: string; }>;
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
  compact?: boolean;
};

export async function generateResumePdf(personal: PersonalInfo, options: GenerateOptions = {}): Promise<jsPDF> {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 56;
  let y = margin;

  // Theme
  const brand = { primary: { r: 145, g: 94, b: 255 }, secondary: { r: 123, g: 79, b: 217 } };
  const setPrimary = () => doc.setTextColor(brand.primary.r, brand.primary.g, brand.primary.b);
  const setBody = () => doc.setTextColor(30);

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

  // Footer - page numbers
  const drawFooter = () => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(120);
    const pageStr = `Page ${doc.getNumberOfPages()}`;
    doc.text(pageStr, pageWidth - margin, pageHeight - 20, { align: "right" });
    setBody();
  };

  const addHeader = async () => {
    // Optional logo on the left
    let xStart = margin;
    const logoSize = 28;
    const logoUrl = "/images.png"; // match website navbar logo served from public/
    const logoData = await loadImageDataUrl(logoUrl);
    if (logoData) {
      try {
        // Align logo vertically with name baseline (approx).
        const yLogoTop = y - 22; // tuned for font size 26 and 28px logo
        doc.addImage(logoData, "PNG", margin, yLogoTop, logoSize, logoSize);
        xStart = margin + logoSize + 12;
      } catch {}
    }

    // Name (left)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(26);
    setPrimary();
    doc.text(personal.name, xStart, y);
    y += 28;

    // Role line (left)
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    const roleLine = personal.yearsExperience
      ? `${personal.role}  •  ${personal.yearsExperience}`
      : `${personal.role}`;
    setBody();
    doc.text(roleLine, margin, y);
    y += 18;

    // Inline clickable links for contact (left-aligned, wraps with QR gutter)
    type LinkItem = { text: string; url?: string };
    const contactLine: LinkItem[] = [];
    const socialLine: LinkItem[] = [];
    if (personal.email) contactLine.push({ text: personal.email, url: `mailto:${personal.email}` });
    if (personal.phone) contactLine.push({ text: personal.phone, url: `tel:${personal.phone.replace(/\s+/g, '')}` });
    if (personal.location) contactLine.push({ text: personal.location });
    if (personal.linkedin) {
      const url = personal.linkedin.startsWith('http') ? personal.linkedin : `https://${personal.linkedin}`;
      socialLine.push({ text: 'LinkedIn', url });
    }
    if (personal.github) {
      const url = personal.github.startsWith('http') ? personal.github : `https://${personal.github}`;
      socialLine.push({ text: 'GitHub', url });
    }
    if (personal.website) {
      const url = personal.website.startsWith('http') ? personal.website : `https://${personal.website}`;
      socialLine.push({ text: 'Portfolio (click)', url });
    }

    const drawInlineLinks = (startX: number, startY: number, linkItems: LinkItem[]) => {
      doc.setTextColor(100);
      let cursorX = startX;
      let cursorY = startY;
      const sep = '  ·  ';
      const lineHeight = 14;
      // keep space for QR on the right, and start centered by computing total width per line
      const reservedRight = 80;
      const maxX = pageWidth - margin - reservedRight;
      linkItems.forEach((li, index) => {
        const text = li.text;
        const width = doc.getTextWidth(text);
        // wrap if this item would overflow
        if (cursorX + width > maxX) {
          cursorY += lineHeight;
          cursorX = startX;
        }
        if (li.url) {
          setPrimary();
          doc.textWithLink(text, cursorX, cursorY, { url: li.url });
          setBody();
        } else {
          doc.text(text, cursorX, cursorY);
        }
        cursorX += width;
        if (index < linkItems.length - 1) {
          const sepWidth = doc.getTextWidth(sep);
          // Only draw separator if it fits in the current line. If not, wrap and skip leading separator.
          if (cursorX + sepWidth <= maxX) {
            doc.setTextColor(120);
            doc.text(sep, cursorX, cursorY);
            cursorX += sepWidth;
          } else {
            cursorY += lineHeight;
            cursorX = startX;
          }
          doc.setTextColor(100);
        }
      });
      setBody();
      return cursorY - startY; // return how many extra vertical pixels used
    };

    const extraY = drawInlineLinks(margin, y, contactLine);
    // draw socials on a fresh line starting at left margin, below contacts
    const socialsExtra = drawInlineLinks(margin, y + 16 + extraY, socialLine);
    setBody();
    y += 18 + extraY + socialsExtra + 16;
    // Gradient bar
    doc.setDrawColor(brand.primary.r, brand.primary.g, brand.primary.b);
    doc.setLineWidth(2);
    doc.line(margin, y, margin + 80, y);
    doc.setDrawColor(200);
    doc.setLineWidth(1);
    y += 16;

    // QR Code to portfolio (if website exists)
    if (personal.website) {
      const url = personal.website.startsWith('http') ? personal.website : `https://${personal.website}`;
      QRCode.toDataURL(url, { margin: 0, width: 96 })
        .then((dataUrl) => {
          const qrSize = 60;
          doc.addImage(dataUrl, 'PNG', pageWidth - margin - qrSize, margin - 6, qrSize, qrSize);
          // caption under QR
          doc.setFont("helvetica", "normal");
          doc.setFontSize(9);
          doc.setTextColor(120);
          doc.text("Portfolio QR", pageWidth - margin - qrSize + 6, margin + qrSize + 6);
          setBody();
        })
        .catch(() => {});
    }
    drawFooter();
  };

  const addSectionTitle = (title: string) => {
    // colored label capsule
    const text = title.toUpperCase();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    const padX = 8;
    const padY = 6;
    const textWidth = doc.getTextWidth(text);
    const boxW = textWidth + padX * 2;
    const boxH = 18 + (padY - 6);
    doc.setFillColor(brand.primary.r, brand.primary.g, brand.primary.b);
    doc.roundedRect(margin, y - 12, boxW, boxH, 4, 4, 'F');
    doc.setTextColor(255);
    doc.text(text, margin + padX, y + 2);
    setBody();
    y += 20;
  };

  const addBullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    const bulletWidth = 10;
    const textWidth = pageWidth - margin * 2 - bulletWidth;
    const lines = doc.splitTextToSize(text, textWidth);
    setPrimary();
    doc.circle(margin + 2, y - 3, 1.2, "F");
    setBody();
    doc.text(lines, margin + bulletWidth, y);
    y += (lines.length * 14);
  };

  // removed addChips renderer (not used after cleanup)

  // removed addOneLine helper (unused after cleanup)

  const ensureSpace = (needed: number) => {
    if (y + needed > pageHeight - margin) {
      doc.addPage();
      drawFooter();
      y = margin;
    }
  };

  // Draw header (QR is generated asynchronously and added when ready)
  // Draw header and await QR embedding before proceeding
  await addHeader();

  // Summary
  addSectionTitle("Summary");
  // Add a small gap so the first bullet doesn't collide with the title capsule
  y += 4;
  addBullet(options.summary || "Full-Stack Developer & AI Engineer with experience in web, mobile, and AI automation. Skilled in building scalable apps, integrating AI/LLMs, and optimizing databases with a focus on UX and performance.");
  // Core strengths
  addBullet("Strong problem-solving and debugging skills; quick at isolating issues and delivering pragmatic fixes.");
  // Tech Summary for ATS
  addBullet("Tech Summary: React, Flutter, Node.js, TypeScript, PostgreSQL/MySQL, Docker, Firebase/Supabase");
  y += 6;

  // AI Tools Used (compact two-column like Skills)
  if ((options.aiHighlights && options.aiHighlights.length) || options.aiHighlightsCategories) {
    addSectionTitle("AI Tools Used");
    const groups: Array<{ title: string; items: string[] }> = [];
    const cat = options.aiHighlightsCategories || {};
    if (cat.ideAgents && cat.ideAgents.length) groups.push({ title: "AI IDE & Agents", items: cat.ideAgents });
    if (cat.llmsFrameworks && cat.llmsFrameworks.length) groups.push({ title: "LLMs & Frameworks", items: cat.llmsFrameworks });
    if (cat.infraUtilities && cat.infraUtilities.length) groups.push({ title: "Infra & Utilities", items: cat.infraUtilities });
    // Add remaining flat tools as "Other"
    if (options.aiHighlights && options.aiHighlights.length) {
      const already = new Set<string>((groups.flatMap(g => g.items)).map(s => s.toLowerCase()));
      const other = options.aiHighlights.filter(t => !already.has(t.toLowerCase()));
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
      if (rightYAI < leftYAI) { tx = margin + colWidthAI; ty = rightYAI; }
      if (ty + blockH > pageHeight - margin) {
        doc.addPage();
        drawFooter();
        leftYAI = margin; rightYAI = margin; tx = margin; ty = leftYAI;
      }
      const used = placeAIG(g.title, text, tx, ty);
      if (tx === margin) leftYAI += used; else rightYAI += used;
    }
    y = Math.max(leftYAI, rightYAI) + 6;
  }

  // Skills (moved up)
  addSectionTitle("Skills");
  const skillsGroups = [
    { title: "Frontend", items: frontendTechnologies.map(t => t.name) },
    { title: "Mobile", items: mobileTechnologies.map(t => t.name) },
    { title: "Backend", items: backendTechnologies.map(t => t.name) },
    { title: "Cloud & Hosting", items: cloudTechnologies.map(t => t.name) },
    { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "SQLite"] },
    { title: "Hosting/Server", items: ["cPanel", "hPanel", "Apache", "Nginx"] },
    { title: "Design", items: designTools.map(t => t.name) },
    { title: "Tools", items: developmentTools.map(t => t.name) },
    ...(options.additionalSkills && options.additionalSkills.length > 0
      ? [{ title: "Additional", items: options.additionalSkills }]
      : []),
  ];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  // robust two-column layout for skills groups without overlap
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
    return 14 + lines.length * 14 + 10; // block height
  };

  for (const group of skillsGroups) {
    // compute height first
    const lines = doc.splitTextToSize(group.items.join(", "), colWidth - 20);
    const blockHeight = 14 + lines.length * 14 + 10;
    // choose column with smaller current height
    let targetX = margin;
    let targetY = leftY;
    if (rightY < leftY) {
      targetX = margin + colWidth;
      targetY = rightY;
    }
    // page break if needed for this block
    if (targetY + blockHeight > pageHeight - margin) {
      doc.addPage();
      drawFooter();
      leftY = margin;
      rightY = margin;
      targetY = (leftY <= rightY) ? leftY : rightY;
      targetX = (leftY <= rightY) ? margin : margin + colWidth;
    }
    const used = placeGroup(group.title, group.items.join(", "), targetX, targetY);
    if (targetX === margin) {
      leftY += used;
    } else {
      rightY += used;
    }
  }
  y = Math.max(leftY, rightY) + 6;

  // Experience
  addSectionTitle("Experience");
  experiences.forEach((exp) => {
    ensureSpace(80);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    setBody();
    doc.text(`${exp.title} — ${exp.companyName}`, margin, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`${exp.date}`, margin, y + 14);
    setBody();
    y += 28;
    exp.points.slice(0, 6).forEach((pt) => {
      addBullet(pt);
    });
    y += 6;
  });

  // Projects (selected)
  addSectionTitle("Projects");
  const combinedProjects = [
    ...((options.additionalProjects || [])),
    ...projects,
  ];
  const projectLimit = options.compact ? 4 : 6;
  combinedProjects.slice(0, projectLimit).forEach((p) => {
    ensureSpace(60);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    setBody();
    doc.text(p.name, margin, y);
    // Project links hidden as requested
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    y += 14;
    addBullet(p.description);
    
    // Add app store links for apps with store links
    if (p.name === "Installer App") {
      // @ts-ignore
      if ((p as any).appStoreLink) {
        const appStoreUrl = (p as any).appStoreLink;
        setPrimary();
        doc.textWithLink('App Store', margin + 10, y, { url: appStoreUrl });
        setBody();
        y += 14;
      }
      // @ts-ignore
      if ((p as any).playStoreLink) {
        const playStoreUrl = (p as any).playStoreLink;
        setPrimary();
        doc.textWithLink('Play Store', margin + 10, y, { url: playStoreUrl });
        setBody();
        y += 14;
      }
    } else if (p.name === "iSent") {
      // @ts-ignore
      if ((p as any).playStoreLink) {
        const playStoreUrl = (p as any).playStoreLink;
        setPrimary();
        doc.textWithLink('Play Store', margin + 10, y, { url: playStoreUrl });
        setBody();
        y += 14;
      }
    }
    
    y += 4;
  });

  // Education
  const defaultEducation = [
    { degree: "MCA (Master of Computer Applications)", institution: "Amity University", year: "2024 - 2025" },
    { degree: "BCA (Bachelor of Computer Applications)", institution: "Amity University", year: "2020 - 2023" },
    { degree: "12th (Higher Secondary)", institution: "High School Sabour", year: "2018" },
    { degree: "10th (Matriculation)", institution: "Millia Convent English School", year: "2014 - 2015" },
  ];
  const education = (options.education && options.education.length) ? options.education : defaultEducation;
  if (education.length) {
    ensureSpace(40);
    addSectionTitle("Education");
    education.slice(0, 6).forEach((e) => {
      ensureSpace(30);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      setBody();
      doc.text(e.degree, margin, y);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.setTextColor(100);
      doc.text(`${e.institution}  •  ${e.year}`, margin, y + 14);
      setBody();
      y += 30;
    });
  }

  // Removed AI & Automation section per request

  // (moved) Web Hosting & Deployment chips will be added after Skills with de-duplication

  // Achievements
  if (options.achievements && options.achievements.length > 0) {
    addSectionTitle("Achievements");
    options.achievements.forEach(a => {
      ensureSpace(30);
      addBullet(a);
    });
    y += 4;
  }

  // Certifications
  if (options.certifications && options.certifications.length > 0) {
    addSectionTitle("Certifications");
    options.certifications.forEach(c => {
      ensureSpace(30);
      addBullet(c);
    });
    y += 4;
  }


  // Removed chips sections to avoid visual clutter/duplication

  // Removed Technical Skills one-liner (to prevent clutter at the bottom)

  // Languages & Extras section (cleaner presentation)
  if ((options.languages && options.languages.length) || (options.availability && options.availability.trim().length > 0) || options.workMode || (options.hobbies && options.hobbies.length)) {
    ensureSpace(40);
    addSectionTitle("Languages / Extras");
    if (options.languages && options.languages.length) {
      addBullet(`Languages: ${options.languages.join(', ')}`);
    }
    if (options.availability && options.availability.trim().length > 0) {
      addBullet(`Availability: ${options.availability}`);
    }
    if (options.workMode) {
      addBullet(`Work Mode: ${options.workMode}`);
    }
    if (options.hobbies && options.hobbies.length) {
      addBullet(`Hobbies: ${options.hobbies.join(', ')}`);
    }
    y += 6;
  }

  return doc;
}

export async function openResumePdf(personal: PersonalInfo, options: GenerateOptions = {}) {
  const doc = await generateResumePdf(personal, options);
  doc.output("dataurlnewwindow");
}

export async function downloadResumePdf(
  personal: PersonalInfo,
  filename = "YasirSubhani-Resume.pdf",
  options: GenerateOptions = {}
) {
  const doc = await generateResumePdf(personal, options);
  doc.save(filename);
}


