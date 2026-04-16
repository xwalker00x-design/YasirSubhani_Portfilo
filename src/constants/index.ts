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
  medikalam,
  medikalam_icon,
  medikalam2,
  medikalam3,
  medikalam4,
  medikalam5,
  medikalam6,
  skoolwala_icon,
  medikalamStart,
  medikalamStart2,
  sigma,
  sigmaTravel,
  sigmaHome,
  sony_headphone,
  careondemand_icon,
  careondemand_web_1,
  careondemand_web_2,
  careondemand_web_3,
  careondemand_web_new_1,
  careondemand_web_new_2,
  realtorone_icon,
  realtorone_1,
  realtorone_2,
  realtorone_3,
  isent_icon,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Full-Stack Developer",
    icon: creator,
  },
  {
    title: "UI/UX Designer",
    icon: photoshop,
  },
  {
    title: "Video Editor",
    icon: premierePro,
  },
  {
    title: "AI Developer",
    icon: backend,
  },
];

export const experiences: TExperience[] = [
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
    companyName: "WorkSaar (Firmbeginners It Solutions Pvt Ltd)",
    icon: creator,
    iconBg: "#915EFF",
    date: "Jan 2024 - Present",
    points: [
      "Currently leading development of cutting-edge web applications",
      "Developing highly scalable solutions using state-of-the-art technologies",
      "Integrating advanced AI features and automation into enterprise workflows",
      "Mentoring and collaborating to deliver top-tier digital products",
    ],
  },
];

export const projects: TProject[] = [
  {
    name: "Installer App",
    description:
      "A comprehensive mobile application installer with advanced features and modern UI/UX design. Features include app installation management, system optimization, and user-friendly interface for device management.",
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
      "School ERP platform with Laravel backend and Flutter frontend. Manages fees, courses, attendance, ID cards, and core operations for schools with a unified dashboard.",
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
      "A premium, cinematic landing page for the Sony WH-1000XM6 headphones. Featuring smooth animations, high-fidelity visuals, and a modern design aesthetic to showcase the peak of audio technology.",
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
      "A complete healthcare ecosystem featuring a professional web platform and a robust medical application. Providing on-demand health services, patient management, and professional care coordination across Ontario.",
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
    name: "RealtorOne Website",
    description:
      "A premium real estate web platform featuring comprehensive property listings, specialized search tools, and agent coordination features. Built for high-conversion property exploration and streamlined user experience.",
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
      "A high-performance mobile application for realtor-client engagement. Features secure OTP authentication, Google integration, and real-time property tracking with a smooth, mobile-first design.",
    tags: [
      {
        name: "mobile-app",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "dart",
        color: "pink-text-gradient",
      },
    ],
    image: realtorone_icon,
    sourceCodeLink: "https://github.com/yasirSub/RealtorOne",
    featured: true,
  },
  {
    name: "iSent - Store",
    description:
      "A merchant-centric delivery management app. Features inventory management, order fulfillment, and real-time shipment tracking. Part of the larger iSent ecosystem with role-specific operational modes.",
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
      "A comprehensive health and medical application designed to provide users with medical information, health tracking, and wellness management. Features include symptom checker, medication reminders, and health monitoring tools.",
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
      "An AI-powered travel app with smart packing list generation based on trip details and preferences. Features trip management, AI-powered packing suggestions, smart checklist categories, and sharing functionality.",
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
    image: sigmaTravel,
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
    image: installer1,
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
    image: medikalam,
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
    image: installer2,
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
    name: "Orb1 - Service Management",
    description:
      "A modern web application for service management built with modern web technologies. Features service tracking, management tools, and responsive design.",
    tags: [
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "service",
        color: "pink-text-gradient",
      },
    ],
    image: sigmaHome,
    sourceCodeLink: "https://github.com/yasirSub/orb1",
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
    image: installer3,
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
    image: installer4,
    sourceCodeLink: "https://github.com/yasirSub/Rider-App---v3.3",
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
    image: installer5,
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
    image: mobile,
    sourceCodeLink: "https://github.com/yasirSub/AndroidStudioV1",
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
    image: medikalam2,
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
    image: medikalam3,
    sourceCodeLink: "https://github.com/yasirSub/UserApp",
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
    image: medikalam4,
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
    image: sigma,
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
    image: medikalam5,
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
    image: medikalamStart,
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
    image: installer1,
    sourceCodeLink: "https://github.com/yasirSub/whatsapp-auto-reply-ai",
  },
  {
    name: "Portfolio",
    description:
      "A modern portfolio website showcasing development skills and projects with responsive design.",
    tags: [
      {
        name: "web",
        color: "blue-text-gradient",
      },
      {
        name: "portfolio",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: sigmaHome,
    sourceCodeLink: "https://github.com/yasirSub/portfolio-",
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
    name: "Portfi",
    description:
      "A portfolio project with modern design and development showcase.",
    tags: [
      {
        name: "portfolio",
        color: "blue-text-gradient",
      },
      {
        name: "web",
        color: "green-text-gradient",
      },
      {
        name: "design",
        color: "pink-text-gradient",
      },
    ],
    image: sigmaHome,
    sourceCodeLink: "https://github.com/yasirSub/portfi",
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
    image: installerStarting,
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
