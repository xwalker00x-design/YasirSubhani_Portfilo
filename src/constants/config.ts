type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "YS",
    fullName: "Yasir Subhani",
    email: "yasir.subhani123@gmail.com",
  },
  hero: {
    name: "Yasir",
    p: ["AI agents and SaaS", "Flutter, web, and production releases"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you need built, and by when?",
      },
    },
  },
  sections: {
    about: {
      p: "About",
      h2: "Overview.",
      content: `Full-stack developer, 6+ years. In 2026 I run two live tracks: AI agents for client workflows, and Pull SaaS for RealtorOne. Flutter, web, APIs, and the release that follows.`,
    },
    experience: {
      p: "Recent first",
      h2: "Work.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Live products: SaaS, broker apps, school ERP, and healthcare platforms. Open a card for screenshots and store links.`,
    },
  },
};
