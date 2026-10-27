import { Link } from "react-router-dom";
import { usePageTitle } from "../../hooks/usePageTitle";

const services = [
  {
    title: "Websites and web apps",
    text: "React, Next.js, and TypeScript sites and dashboards. Landing pages, admin panels, and client portals that stay fast on mobile.",
  },
  {
    title: "Mobile app development",
    text: "Flutter apps for Android and iOS, including Play Store and App Store release. Auth, live data, and the screens people use every day.",
  },
  {
    title: "SaaS products",
    text: "Multi-tenant products from the first version to production: accounts, APIs, dashboards, and the features a team actually logs into.",
  },
  {
    title: "Backend and databases",
    text: "Laravel and Node.js APIs, PostgreSQL and MongoDB, and Rust when a service needs to be fast and safe.",
  },
  {
    title: "AI features",
    text: "Assistants, search, and automation inside the product. Claude, Gemini, and GPT used to do a job, not as a demo chatbot.",
  },
  {
    title: "Freelance, remote from Kolkata",
    text: "You work with me directly. Web, mobile, and SaaS for clients in India and overseas. Monday–Saturday, IST, reply within one business day.",
  },
];

type ServicesProps = { asPage?: boolean };

const Services = ({ asPage = false }: ServicesProps) => {
  usePageTitle(
    asPage
      ? "Services | Web, Mobile, SaaS, and AI Developer — Yasir Subhani"
      : "Yasir Subhani | AI App Developer & Full-Stack Developer",
    "Freelance developer in Kolkata for websites, Flutter and Android apps, SaaS, Laravel, React, Next.js, and AI features. Remote work available."
  );

  return (
    <div className={`max-w-7xl mx-auto px-6 ${asPage ? "pt-28 pb-20" : "py-16"}`}>
      <p className="text-[#a78bfa] text-xs font-bold uppercase tracking-[0.25em] mb-3">Services</p>
      {asPage ? (
        <h1 className="text-white font-black text-3xl sm:text-5xl tracking-tight max-w-3xl">
          Web, mobile, SaaS, and AI. One developer.
        </h1>
      ) : (
        <h2 className="text-white font-black text-3xl sm:text-5xl tracking-tight max-w-3xl">
          Web, mobile, SaaS, and AI. One developer.
        </h2>
      )}
      <p className="text-gray-400 mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
        I am a freelance full-stack developer in Kolkata. Clients hire me for React and Next.js websites, Flutter and Android apps, Laravel and Node backends, SaaS products, and AI features inside software they already run.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-white font-bold text-lg">{service.title}</h2>
            <p className="text-gray-400 mt-2 leading-relaxed">{service.text}</p>
          </article>
        ))}
      </div>

      <p className="text-gray-500 text-sm mt-6">
        <Link to="/projects" className="text-[#a78bfa] hover:text-white">See shipped work</Link>
        {" · "}
        <Link to="/#contact" className="text-[#a78bfa] hover:text-white">Start a project</Link>
      </p>
    </div>
  );
};

export default Services;
