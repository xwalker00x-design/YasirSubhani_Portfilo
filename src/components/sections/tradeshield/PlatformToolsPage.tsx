import { Link, useParams } from "react-router-dom";
import { getPlatformById } from "../../../constants/tradeshield";
import type { PlatformId, ToolType } from "../../../constants/tradeshield";
import {
  TradeShieldPageShell,
  ToolsSection,
  PricingTiers,
  TradeShieldSiteFooter,
} from "../../tradeshield";
import { usePageTitle } from "../../../hooks/usePageTitle";

const PlatformToolsPage = () => {
  const { platform: platformId } = useParams<{ platform: string }>();
  const platform = getPlatformById(platformId ?? "");

  usePageTitle(
    platform
      ? `${platform.name} Tools | TradeShield`
      : "Trading Tools | TradeShield",
    platform?.tagline ?? "Custom trading tools by Yasir Subhani"
  );

  if (!platform) {
    return (
      <TradeShieldPageShell>
        <div className="min-h-[50vh] flex items-center justify-center px-6">
          <div className="text-center">
            <p className="text-white mb-4">Platform not found.</p>
            <Link to="/trading/tools" className="text-emerald-400 hover:text-emerald-300">
              ← Back to tools
            </Link>
          </div>
        </div>
      </TradeShieldPageShell>
    );
  }

  const label =
    platform.id === "tradingview"
      ? "TradingView"
      : platform.id === "mt5"
        ? "MetaTrader 5®"
        : platform.id === "mt4"
          ? "MetaTrader 4®"
          : platform.name;

  const indicatorTypes: ToolType[] =
    platform.id === "tradingview"
      ? ["pine"]
      : ["indicator"];

  const showEa = platform.id === "mt5" || platform.id === "mt4";
  const showPricing = platform.id === "mt5";

  return (
    <TradeShieldPageShell>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Link to="/trading/tools" className="text-gray-500 hover:text-green-400 text-sm mb-6 inline-block">
          ← All platforms
        </Link>

        <h1 className="text-white font-black text-4xl mb-4">
          Tools for <span className="text-green-400">{label}</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mb-12">{platform.tagline}</p>

        {!platform.available ? (
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-10 text-center mb-12">
            <p className="text-white font-semibold text-lg mb-2">Custom development available</p>
            <p className="text-gray-400 mb-6">
              I can discuss {platform.name} projects on request. Share your requirements for a quote.
            </p>
            <Link
              to="/trading#quote"
              className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Request a quote
            </Link>
          </div>
        ) : (
          <>
            {indicatorTypes.map((type) => (
              <ToolsSection
                key={type}
                platform={platform.id as PlatformId}
                type={type}
                platformLabel={label}
              />
            ))}
            {showEa && (
              <ToolsSection
                platform={platform.id as PlatformId}
                type="ea"
                platformLabel={label}
              />
            )}
          </>
        )}

        {platform.id === "tradingview" && (
          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-6 mb-12 text-center">
            <p className="text-gray-300">
              TradingView Pine Script pricing —{" "}
              <Link to="/trading#quote" className="text-green-400 font-medium">
                contact for a custom estimate
              </Link>
            </p>
          </div>
        )}

        {showPricing && <PricingTiers compact />}

        <div className="mt-12 text-center rounded-2xl border border-green-500/20 bg-green-500/10 p-8">
          <h3 className="text-white font-bold text-xl mb-2">Need a custom tool?</h3>
          <p className="text-gray-400 mb-4">Describe your idea and get a tailored quote.</p>
          <Link
            to="/trading#quote"
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold"
          >
            Get free estimate
          </Link>
        </div>
      </div>
      <TradeShieldSiteFooter />
    </TradeShieldPageShell>
  );
};

export default PlatformToolsPage;
