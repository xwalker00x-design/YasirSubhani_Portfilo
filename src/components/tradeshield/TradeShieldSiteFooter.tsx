import { Link } from "react-router-dom";
import TradeShieldLogo from "./TradeShieldLogo";

const footerLinks = {
  product: [
    { label: "MetaTrader programming", href: "/trading/services/metatrader" },
    { label: "TradingView / Pine", href: "/trading/services/tradingview" },
    { label: "What I build", href: "/trading#services" },
    { label: "Packages", href: "/trading#packages" },
    { label: "How pricing works", href: "/trading#pricing" },
    { label: "Payment", href: "/trading#payment" },
    { label: "Get quote", href: "/trading#quote" },
    { label: "All tools", href: "/trading/tools" },
  ],
  company: [
    { label: "About Yasir", href: "/trading#about" },
    { label: "Main portfolio", href: "/" },
    { label: "Privacy policy", href: "/trading/privacy" },
    { label: "Terms & conditions", href: "/trading/terms" },
  ],
};

const TradeShieldSiteFooter = () => (
  <footer className="border-t border-white/10 bg-[#020617]/80">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div className="lg:col-span-1">
          <Link to="/trading" className="inline-flex items-center gap-2.5 group">
            <TradeShieldLogo className="w-9 h-9" />
            <span className="text-white font-bold text-lg group-hover:text-emerald-400 transition-colors">
              TradeShield
            </span>
          </Link>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">
            Custom MT5 & TradingView tools by Yasir Subhani. Fair quotes, clear payment, delivered source.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Product</h4>
          <ul className="space-y-2">
            {footerLinks.product.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link to={link.href} className="text-gray-400 text-sm hover:text-emerald-400 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="mailto:yasir.subhani123@gmail.com" className="hover:text-emerald-400">
                yasir.subhani123@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/918271819813" target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                WhatsApp: +91 8271819813
              </a>
            </li>
            <li>Kolkata, India</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-8 space-y-4 text-gray-500 text-xs leading-relaxed">
        <p>
          MetaTrader®, MetaTrader 5®, MT4®, and MT5® are registered trademarks of MetaQuotes Software Corp.
          TradeShield / yasirsubhani.tech is not associated with MetaQuotes Software Corp. Not associated with TradingView, Inc.
        </p>
        <p>
          <strong className="text-gray-400">Risk disclosure:</strong> Trading involves substantial risk.
          Past performance does not guarantee future results. Content is for informational purposes only and is not investment advice.
        </p>
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Yasir Subhani · TradeShield
        </p>
      </div>
    </div>
  </footer>
);

export default TradeShieldSiteFooter;
