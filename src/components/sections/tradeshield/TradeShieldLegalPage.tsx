import { Link } from "react-router-dom";
import { TradeShieldPageShell } from "../../tradeshield";
import { privacyPolicySections, termsSections } from "../../../constants/tradeshield/legalContent";
import { usePageTitle } from "../../../hooks/usePageTitle";

type Props = { type: "privacy" | "terms" };

const TradeShieldLegalPage = ({ type }: Props) => {
  const isPrivacy = type === "privacy";
  const sections = isPrivacy ? privacyPolicySections : termsSections;

  usePageTitle(
    isPrivacy ? "Privacy Policy | TradeShield" : "Terms & Conditions | TradeShield",
    isPrivacy
      ? "TradeShield privacy policy — how we handle your data and project files."
      : "TradeShield terms and conditions for custom trading tool services."
  );

  return (
    <TradeShieldPageShell>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <Link to="/trading" className="text-emerald-400 text-sm hover:underline mb-8 inline-block">
          ← Back to TradeShield
        </Link>
        <h1 className="text-white font-black text-3xl sm:text-4xl mb-2">
          {isPrivacy ? "Privacy policy" : "Terms & conditions"}
        </h1>
        <p className="text-gray-500 text-sm mb-10">
          Last updated: {new Date().toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>
        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-white font-bold text-lg mb-3">{section.title}</h2>
              <p className="text-gray-400 leading-relaxed text-sm whitespace-pre-line">{section.body}</p>
            </section>
          ))}
        </div>
      </article>
    </TradeShieldPageShell>
  );
};

export default TradeShieldLegalPage;
