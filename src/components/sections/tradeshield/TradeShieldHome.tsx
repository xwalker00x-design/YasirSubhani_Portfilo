import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  TradeShieldPageShell,
  TradeShieldHero,
  ServicesGrid,
  ServicePackages,
  PricingTiers,
  PaymentInfo,
  TradeShieldAbout,
  QuoteForm,
  TradeShieldSiteFooter,
  PersonalTradingSection,
  TradeShieldHomeMore,
} from "../../tradeshield";
import { usePageTitle } from "../../../hooks/usePageTitle";

const TradeShieldHome = () => {
  const location = useLocation();

  usePageTitle(
    "TradeShield | Custom MT5 & TradingView Tools",
    "TradeShield by Yasir Subhani — custom MT5 indicators, TradingView Pine Script, EA modifications, and fair INR pricing for traders."
  );

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 150);
      } else if (location.search.includes("package=")) {
        setTimeout(() => {
          document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    };
    scrollToHash();
  }, [location.hash, location.search]);

  return (
    <TradeShieldPageShell>
      <TradeShieldHero />
      <ServicesGrid />
      <ServicePackages />
      <PricingTiers />
      <PaymentInfo compact />
      <div className="bg-gradient-to-b from-transparent via-emerald-950/15 to-transparent">
        <QuoteForm />
      </div>
      <TradeShieldAbout />
      <TradeShieldHomeMore />
      <PersonalTradingSection compact />
      <TradeShieldSiteFooter />
    </TradeShieldPageShell>
  );
};

export default TradeShieldHome;
