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
    p: ["Full-stack developer", "Web, Flutter, SaaS, AI features"],
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
      content: `Full-stack developer with 6+ years shipping web apps, Flutter mobile apps, and SaaS. I work directly with clients, use AI to move faster, and stay on a product until it is live.`,
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
