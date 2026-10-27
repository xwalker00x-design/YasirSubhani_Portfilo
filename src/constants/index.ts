import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  laravel,
  dart,
  firebase,
  supabase,
  photoshop,
  premierePro,
  adobeIllustrator,
  adobeAfterEffects,
  adobeXd,
  cursor,
  vscode,
  androidStudio,
  python,
  flutter,
  reactNative,
  // App Images
  installer1,
  installer2,
  installer3,
  installer4,
  installer5,
  installerStarting,
  installerIcon,
  medikalam_icon,
  wesync_icon,
  news_app_icon,
  rider_app_icon,
  android_studio_icon,
  image_editing_icon,
  user_app_icon,
  wcab_icon,
  signa_icon,
  equxx_icon,
  packwise_icon,
  calorie_tracker_icon,
  whatsapp_ai_icon,
  ai_world_exploration_icon,
  ai_world_2024_icon,
  medikalam6,
  skoolwala_icon,
  medikalamStart2,
  sigmaTravel,
  sony_headphone,
  careondemand_icon,
  realtorone_icon,
  isent_icon,
  aws,
  hostinger,
  cloud,
  nextjs,
  rust,
  postgres,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "hire",
    title: "Hire",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "github",
    title: "GitHub",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services: TService[] = [
  {
    title: "Web & SaaS",
    icon: web,
  },
  {
    title: "Mobile Apps",
    icon: mobile,
  },
  {
    title: "AI in the product",
    icon: backend,
  },
  {
    title: "Ongoing delivery",
    icon: creator,
  },
];

export const experiences: TExperience[] = [
  {
    title: "Full-Stack Developer",
    companyName: "RealtorOne (R.N. Tiger) — Freelance",
    icon: backend,
    iconBg: "#383E56",
    date: "Feb 2026 - Present",
    points: [
      "Building and maintaining Pull SaaS as a full-stack developer for RealtorOne under R.N. Tiger.",
      "Shipping end-to-end features across frontend, backend, and cloud for a multi-tenant SaaS product.",
      "Owning product workflows for real-estate operations, integrations, and performance-focused delivery.",
      "Collaborating directly with the client on roadmap, architecture, and ongoing production releases.",
    ],
  },
  {
    title: "Full-Stack Developer",
    companyName: "WorkSaar (Firmbeginners It Solutions Pvt Ltd)",
    icon: creator,
    iconBg: "#915EFF",
    date: "Jan 2024 - Jun 2026",
    points: [
      "Led full-stack architecture for high-traffic enterprise applications focusing on performance.",
      "Engineered automated workflows with integrated AI modules for data processing.",
      "Collaborated with cross-functional teams to deploy scalable cloud infrastructures.",
    ],
  },
  {
    title: "Mobile Developer",
    companyName: "MSL Techno Solutions Pvt. Ltd",
    icon: mobile,
    iconBg: "#383E56",
    date: "May 2023 - Dec 2023",
    points: [
      "Pivoted into mobile development, building a health-focused Android app with Flutter",
      "Designed user-friendly interfaces with real-time database synchronization",
      "Collaborated with cross-functional teams to deliver high-quality mobile products",
      "Optimized app performance and user engagement through data-driven design",
    ],
  },
  {
    title: "Full-Stack Developer",
    companyName: "S.O. Infotech Pvt. Ltd",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "May 2022 - Apr 2023",
    points: [
      "Built scalable web applications with specialized AI automation & API integration",
      "Developed business solutions with secure and optimized database architecture",
      "Implemented modern web technologies and industry best practices",
      "Enhanced system security and optimized performance for better user experience",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Freizeitmedia",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2020 - Feb 2022",
    points: [
      "Started journey as a Web Developer focused on WordPress-based projects",
      "Focused on UI/UX design and backend performance improvements",
      "Developed responsive websites for various global clients",
      "Maintained and optimized existing web applications to improve functionality",
    ],
  },
];

export const projects: TProject[] = [
  {
    name: "Installer App",
    description:
      "A high-performance system utility engineered for the iOS/Android ecosystem. Implements low-level device management protocols, optimized data streaming for package delivery, and a cinematic glassmorphism-based UI for seamless user interactions.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "installer",
        color: "green-text-gradient",
      },
      {
        name: "system",
        color: "pink-text-gradient",
      },
    ],
    image: installerIcon,
    sourceCodeLink: "https://github.com/yasirSub/installer-app",
    appStoreLink: "https://apps.apple.com/in/app/the-installers/id6475402460",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.theinstallers.theinstallers&pcampaignid=web_share",
    featured: true,
  },
  {
    name: "SkoolWala ERP",
    description:
      "An enterprise-grade educational resource planning platform. Orchestrates a Laravel-based backend and Flutter frontend to manage complex operational workflows including fee regulation, student lifecycle management, and real-time administrative intelligence.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "erp",
        color: "pink-text-gradient",
      },
    ],
    image: skoolwala_icon,
    sourceCodeLink: "https://skoolwala.com/",
    liveLink: "https://skoolwala.com/",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.skoolwala.skoolwala&pcampaignid=web_share",
  },
  {
    name: "Sony WH-1000XM6 Landing Page",
    description:
      "An immersive, highnd landing page engineered for Sony's audio flagship. Features highnd Framer Motion orchestrations, optimized 3D asset delivery, and cinematic visual storytelling to reflect a premium brand identity.",
    tags: [
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "landing-page",
        color: "green-text-gradient",
      },
      {
        name: "design",
        color: "pink-text-gradient",
      },
    ],
    image: sony_headphone,
    sourceCodeLink: "https://github.com/yasirSub/website--headphone",
    liveLink: "https://yasirsub.github.io/website--headphone/",
    featured: true,
  },
  {
    name: "Care On Demand",
    description:
      "A comprehensive digital health infrastructure for the Ontario medical sector. Orchestrates complex provider-patient workflows, secure medical record persistence, and real-time appointment logistics within a centralized professional platform.",
    tags: [
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "mobile-app",
        color: "green-text-gradient",
      },
      {
        name: "healthcare",
        color: "pink-text-gradient",
      },
    ],
    image: careondemand_icon,
    sourceCodeLink: "https://www.careondemand.org/",
    liveLink: "https://www.careondemand.org/",
    featured: true,
  },
  {
    name: "Pull SaaS (RealtorOne)",
    description:
      "SaaS product for real-estate teams. I build the features, APIs, and dashboards clients use every day. Freelance, Feb 2026–present, client R.N. Tiger.",
    tags: [
      {
        name: "saas",
        color: "blue-text-gradient",
      },
      {
        name: "web",
        color: "green-text-gradient",
      },
      {
        name: "freelance",
        color: "pink-text-gradient",
      },
    ],
    image: realtorone_icon,
    liveLink: "https://realtorone.org/",
    featured: true,
  },
  {
    name: "RealtorOne Website",
    description:
      "Real-estate website for agents: property listings, search, and the public site at realtorone.org.",
    tags: [
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "real-estate",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
    ],
    image: realtorone_icon,
    sourceCodeLink: "https://github.com/yasirSub/RealtorOne-Web",
    liveLink: "https://realtorone.org/",
    featured: true,
  },
  {
    name: "RealtorOne App",
    description:
      "Broker app for real-estate agents: leads, pipeline, and daily operations. Live on Google Play.",
    tags: [
      {
        name: "mobile-app",
        color: "blue-text-gradient",
      },
      {
        name: "broker",
        color: "green-text-gradient",
      },
      {
        name: "flutter",
        color: "pink-text-gradient",
      },
    ],
    image: realtorone_icon,
    sourceCodeLink: "https://github.com/yasirSub/RealtorOne",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.realtorone.app",
    featured: true,
  },
  {
    name: "iSent - Store",
    description:
      "A merchant-centric delivery management framework. Features complex inventory tracking architectures, real-time fulfillment monitoring, and advanced shipment logistics for modern merchant ecosystems.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: isent_icon,
    sourceCodeLink: "https://github.com/yasirSub/iSent",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.isent.online_store&hl=en_IN",
  },
  {
    name: "Medikalam - Health App",
    description:
      "An advanced wellness intelligence engine. Leverages data-driven health tracking, medical record digitization, and professional wellness management tools to empower user healthcare decisions with high-security data structures.",
    tags: [
      {
        name: "health",
        color: "blue-text-gradient",
      },
      {
        name: "medical",
        color: "green-text-gradient",
      },
      {
        name: "wellness",
        color: "pink-text-gradient",
      },
    ],
    image: medikalam_icon,
    sourceCodeLink: "https://github.com/yasirSub/medikalam-app",
  },
  {
    name: "PackWise Travel App",
    description:
      "An AI-orchestrated travel companion. Features smart packing list generation using LLM integration, intelligent trip lifecycle management, and collaborative sharing protocols for modern travelers.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: packwise_icon,
    sourceCodeLink: "https://github.com/yasirSub/packwise-travel-app",
  },
  {
    name: "WeSync - Couples App",
    description:
      "A Flutter application for couples to sync and manage their relationship. Features synchronization with Neon Stack Auth integration and relationship management tools.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: wesync_icon,
    sourceCodeLink: "https://github.com/yasirSub/WeSync",
  },
  {
    name: "Calorie Tracker App",
    description:
      "A modern calorie tracker app built with React Native and Expo, featuring AI-powered food recognition using OpenRouter with Gemini Pro Vision for accurate nutrition tracking.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "health",
        color: "pink-text-gradient",
      },
    ],
    image: calorie_tracker_icon,
    sourceCodeLink: "https://github.com/yasirSub/calorie-tracker-app",
  },
  {
    name: "WhatsApp Auto-Reply AI",
    description:
      "An AI-powered WhatsApp auto-response system using Google's Gemini API. Features customizable responses, AI model selection, personalized messaging, and scheduled messaging capabilities.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "whatsapp",
        color: "pink-text-gradient",
      },
    ],
    image: whatsapp_ai_icon,
    sourceCodeLink: "https://github.com/yasirSub/whatsapp-auto-responder",
  },
  {
    name: "Travel App Expo",
    description:
      "A modern travel application built with React Native and Expo. Features destination exploration, trip planning, and mobile-first design for travelers on the go.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "travel",
        color: "pink-text-gradient",
      },
    ],
    image: sigmaTravel,
    sourceCodeLink: "https://github.com/yasirSub/travel-app-expo",
  },
  {
    name: "News App",
    description:
      "A mobile news application built with modern mobile development technologies. Features news aggregation, user preferences, and real-time updates.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "news",
        color: "green-text-gradient",
      },
      {
        name: "app",
        color: "pink-text-gradient",
      },
    ],
    image: news_app_icon,
    sourceCodeLink: "https://github.com/yasirSub/NewsApp",
  },
  {
    name: "Rider App v3.3",
    description:
      "A comprehensive rider application with advanced features for transportation services. Built with modern mobile development practices and user experience focus.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "transport",
        color: "green-text-gradient",
      },
      {
        name: "rider",
        color: "pink-text-gradient",
      },
    ],
    image: rider_app_icon,
    sourceCodeLink: "https://github.com/yasirSub/riderapp-v3.3",
  },
  {
    name: "AI World Exploration",
    description:
      "A repository exploring AI concepts and applications. Features various AI implementations, machine learning projects, and artificial intelligence demonstrations.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
    ],
    image: ai_world_exploration_icon,
    sourceCodeLink: "https://github.com/yasirSub/welcome-to-Ai-world",
  },
  {
    name: "Calculator Bot",
    description:
      "A Python calculator bot with advanced mathematical operations and user-friendly interface. Features calculation history and multiple operation modes.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "calculator",
        color: "green-text-gradient",
      },
      {
        name: "bot",
        color: "pink-text-gradient",
      },
    ],
    image: installerStarting,
    sourceCodeLink: "https://github.com/yasirSub/calculator",
  },
  {
    name: "Android Studio V1",
    description:
      "Android development project showcasing mobile app development skills and Android Studio expertise.",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: android_studio_icon,
    sourceCodeLink: "https://github.com/yasirSub/Android-Studio-V1",
  },
  {
    name: "Image Editing App",
    description:
      "An image editing application with various tools and filters for photo manipulation and enhancement.",
    tags: [
      {
        name: "image-processing",
        color: "blue-text-gradient",
      },
      {
        name: "mobile",
        color: "green-text-gradient",
      },
      {
        name: "editing",
        color: "pink-text-gradient",
      },
    ],
    image: image_editing_icon,
    sourceCodeLink: "https://github.com/yasirSub/ImageEditing",
  },
  {
    name: "User App",
    description:
      "A user management application with authentication and user profile features.",
    tags: [
      {
        name: "user-management",
        color: "blue-text-gradient",
      },
      {
        name: "authentication",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: user_app_icon,
    sourceCodeLink: "https://github.com/yasirSub/user-app",
  },
  {
    name: "WCAB Flutter V1",
    description:
      "A Flutter application with modern UI/UX design and cross-platform mobile development.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: wcab_icon,
    sourceCodeLink: "https://github.com/yasirSub/wcab-flutter-v1",
  },
  {
    name: "Signa App",
    description:
      "A modern mobile application with innovative features and user experience design.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "app",
        color: "green-text-gradient",
      },
      {
        name: "modern",
        color: "pink-text-gradient",
      },
    ],
    image: signa_icon,
    sourceCodeLink: "https://github.com/yasirSub/signa",
  },
  {
    name: "Equxx App",
    description:
      "A cutting-edge mobile application with advanced features and modern development practices.",
    tags: [
      {
        name: "mobile",
        color: "blue-text-gradient",
      },
      {
        name: "advanced",
        color: "green-text-gradient",
      },
      {
        name: "modern",
        color: "pink-text-gradient",
      },
    ],
    image: equxx_icon,
    sourceCodeLink: "https://github.com/yasirSub/equxx",
  },
  {
    name: "WeSync Flutter",
    description:
      "A Flutter application for synchronization with Neon Stack Auth integration and modern mobile development.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "sync",
        color: "pink-text-gradient",
      },
    ],
    image: medikalam6,
    sourceCodeLink: "https://github.com/yasirSub/wesync-flutter",
  },
  {
    name: "WeSync MCP",
    description:
      "A Flutter application for synchronization with modern mobile development practices.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "mobile",
        color: "pink-text-gradient",
      },
    ],
    image: wesync_icon,
    sourceCodeLink: "https://github.com/yasirSub/wesync-mcp",
  },
  {
    name: "Yasir Resume",
    description:
      "A professional resume built with Flutter showcasing modern mobile development skills.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "resume",
        color: "pink-text-gradient",
      },
    ],
    image: medikalamStart2,
    sourceCodeLink: "https://github.com/yasirSub/yasir-resume",
  },
  {
    name: "Travel App",
    description:
      "A travel application built with Expo and React Native featuring modern mobile development.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "expo",
        color: "green-text-gradient",
      },
      {
        name: "travel",
        color: "pink-text-gradient",
      },
    ],
    image: sigmaTravel,
    sourceCodeLink: "https://github.com/yasirSub/travel-app",
  },
  {
    name: "WhatsApp Auto Reply AI",
    description:
      "A WhatsApp Auto-Reply AI application with customizable features including AI model selection and personalized responses.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "whatsapp",
        color: "pink-text-gradient",
      },
    ],
    image: whatsapp_ai_icon,
    sourceCodeLink: "https://github.com/yasirSub/whatsapp-auto-reply-ai",
  },
  {
    name: "Node.js Setup",
    description:
      "Repository for Node.js installation files and development environment setup.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "setup",
        color: "green-text-gradient",
      },
      {
        name: "development",
        color: "pink-text-gradient",
      },
    ],
    image: backend,
    sourceCodeLink: "https://github.com/yasirSub/nodejs-setup",
  },
  {
    name: "PyasirSub",
    description:
      "Python development projects and scripts showcasing programming skills and automation.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "automation",
        color: "green-text-gradient",
      },
      {
        name: "scripts",
        color: "pink-text-gradient",
      },
    ],
    image: installer2,
    sourceCodeLink: "https://github.com/yasirSub/PyasirSub",
  },
  {
    name: "GC Project",
    description:
      "A development project showcasing various programming concepts and implementations.",
    tags: [
      {
        name: "development",
        color: "blue-text-gradient",
      },
      {
        name: "programming",
        color: "green-text-gradient",
      },
      {
        name: "project",
        color: "pink-text-gradient",
      },
    ],
    image: installer3,
    sourceCodeLink: "https://github.com/yasirSub/gc",
  },
  {
    name: "YasirSubhani",
    description:
      "Personal GitHub profile and development showcase repository.",
    tags: [
      {
        name: "profile",
        color: "blue-text-gradient",
      },
      {
        name: "github",
        color: "green-text-gradient",
      },
      {
        name: "showcase",
        color: "pink-text-gradient",
      },
    ],
    image: installer4,
    sourceCodeLink: "https://github.com/yasirSub/yasirsubhani",
  },
  {
    name: "Text Project",
    description:
      "A text processing and manipulation project with various text utilities.",
    tags: [
      {
        name: "text-processing",
        color: "blue-text-gradient",
      },
      {
        name: "utilities",
        color: "green-text-gradient",
      },
      {
        name: "tools",
        color: "pink-text-gradient",
      },
    ],
    image: installer5,
    sourceCodeLink: "https://github.com/yasirSub/text",
  },
  {
    name: "AI World 2024",
    description:
      "A repository exploring the world of AI with updated concepts and implementations for 2024.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "2024",
        color: "green-text-gradient",
      },
      {
        name: "exploration",
        color: "pink-text-gradient",
      },
    ],
    image: ai_world_2024_icon,
    sourceCodeLink: "https://github.com/yasirSub/welcome-to-ai-world-2024",
  },
  {
    name: "WeSync V1",
    description:
      "Version 1 of the WeSync application for couples to sync and manage their relationship.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "dart",
        color: "green-text-gradient",
      },
      {
        name: "couples",
        color: "pink-text-gradient",
      },
    ],
    image: installer1,
    sourceCodeLink: "https://github.com/yasirSub/Wesync-v1",
  },
];

// Frontend Development
export const frontendTechnologies: TTechnology[] = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
];

// Mobile Development
export const mobileTechnologies: TTechnology[] = [
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "React Native",
    icon: reactNative,
  },
];

// Backend Development
export const backendTechnologies: TTechnology[] = [
  {
    name: "Rust",
    icon: rust,
  },
  {
    name: "PostgreSQL",
    icon: postgres,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
];

// Cloud & Hosting Technologies
export const cloudTechnologies: TTechnology[] = [
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Hostinger",
    icon: hostinger,
  },
  {
    name: "Cloud Computing",
    icon: cloud,
  },
];

// Design & Creative Tools
export const designTools: TTechnology[] = [
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Premiere Pro",
    icon: premierePro,
  },
  {
    name: "Adobe Illustrator",
    icon: adobeIllustrator,
  },
  {
    name: "Adobe After Effects",
    icon: adobeAfterEffects,
  },
  {
    name: "Adobe XD",
    icon: adobeXd,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

// Development Tools
export const developmentTools: TTechnology[] = [
  {
    name: "git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Cursor",
    icon: cursor,
  },
  {
    name: "VS Code",
    icon: vscode,
  },
  {
    name: "Android Studio",
    icon: androidStudio,
  },
];

// Trading & Finance Technologies
export const tradingTechnologies: TTechnology[] = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

// Legacy technologies array for backward compatibility
export const technologies: TTechnology[] = [
  ...frontendTechnologies,
  ...mobileTechnologies,
  ...backendTechnologies,
  ...cloudTechnologies,
  ...designTools,
  ...developmentTools,
];



export const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Yasir is an exceptional developer who consistently delivers high-quality solutions with innovative AI integration.",
    name: "Neha Sharma",
    designation: "CTO",
    company: "TechSolutions India",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Yasir on our mobile app was a great experience. His Flutter expertise and attention to detail are outstanding.",
    name: "Rahul Patel",
    designation: "Product Manager",
    company: "MobileTech India",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Yasir's AI automation skills helped us streamline our business processes significantly. Highly recommended!",
    name: "Aisha Verma",
    designation: "CEO",
    company: "Bharat AI Labs",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "We engaged Yasir for a critical release. His problem-solving and delivery speed were impressive—shipped on time without compromising quality.",
    name: "Arjun Mehta",
    designation: "Founder",
    company: "DevCraft India",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    testimonial:
      "Yasir modernized our stack and optimized performance across the board. Page load times improved noticeably for our users in India.",
    name: "Priya Nair",
    designation: "Engineering Manager",
    company: "InnoSoft Pvt Ltd",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];
