import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../../hoc";

const offers = [
  {
    title: "Web & SaaS",
    detail: "Dashboards, multi-tenant products, and the APIs behind them. From first version to production.",
  },
  {
    title: "Mobile apps",
    detail: "Flutter apps for iOS and Android, including store listing, auth, and live data.",
  },
  {
    title: "AI that does work",
    detail: "Search, automation, and assistants inside the product — not a chatbot bolted on for a demo.",
  },
  {
    title: "Keep it shipping",
    detail: "Take over an existing product: new features, fixes, and a clear weekly update.",
  },
  {
    title: "MT5 & TradingView",
    detail: "Custom indicators, EAs, Pine Script, Telegram alerts, and risk rules traders ask for — daily loss, sessions, and trade management. Fixed INR quote before work starts.",
  },
];

const facts = [
  { label: "Experience", value: "6+ years" },
  { label: "Now", value: "Pull SaaS · RealtorOne" },
  { label: "Work", value: "Remote · IST" },
  { label: "Reply", value: "Within 1 business day" },
];

const ClientWork = () => (
  <div className="max-w-7xl mx-auto px-6 py-16">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-10"
    >
      <p className="text-[#a78bfa] text-xs font-bold uppercase tracking-[0.25em] mb-3">For clients</p>
      <h2 className="text-white font-black text-3xl sm:text-5xl tracking-tight max-w-3xl">
        You get a product that ships. I stay on it until it does.
      </h2>
      <p className="text-gray-400 mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
        Most clients need one person who can own the web app, the mobile app, and the backend — and use AI to move faster without handing over unfinished code.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
      {facts.map((fact) => (
        <div key={fact.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
          <p className="text-[11px] uppercase tracking-widest text-gray-500">{fact.label}</p>
          <p className="text-white font-semibold mt-1 text-sm sm:text-base">{fact.value}</p>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      {offers.map((offer) => (
        <div key={offer.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="text-white font-bold text-lg">{offer.title}</h3>
          <p className="text-gray-400 mt-2 leading-relaxed">{offer.detail}</p>
        </div>
      ))}
    </div>

    <p className="text-gray-500 text-sm mt-6">
      You work with me directly. Weekly progress you can see. Remote, Monday–Saturday, flexible IST hours.{" "}
      <Link to="/trading" className="text-[#a78bfa] hover:text-white">
        Trading tools and prices →
      </Link>
    </p>
  </div>
);

export default SectionWrapper(ClientWork, "hire");
