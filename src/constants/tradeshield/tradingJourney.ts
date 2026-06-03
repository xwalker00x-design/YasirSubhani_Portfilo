/** Personal trading stats & platforms — icons match legacy TradingFinance section. */

export const tradingJourneyStats = [
  {
    number: "2+",
    label: "Years Trading",
    color: "from-green-500 to-emerald-500",
    icon: "📈",
  },
  {
    number: "2",
    label: "Trading Platforms",
    color: "from-blue-500 to-cyan-500",
    icon: "💻",
  },
  {
    number: "4",
    label: "Trading Strategies",
    color: "from-purple-500 to-pink-500",
    icon: "📊",
  },
  {
    number: "24/7",
    label: "Market Analysis",
    color: "from-orange-500 to-red-500",
    icon: "📊",
  },
] as const;

export const personalTradingPlatforms = [
  {
    name: "Dhan",
    type: "Stock Market",
    description:
      "Primary platform for Indian stock market trading and investments",
    features: [
      "NSE & BSE Equity Trading",
      "Futures & Options",
      "Commodity Trading",
      "Real-time Market Data",
      "Advanced Charting Tools",
      "Portfolio Analytics",
    ],
    color: "from-blue-600 to-blue-800",
    icon: "📈",
    referralLink: "https://join.dhan.co/?invite=PGHTT59536",
    referralCode: "PGHTT59536",
  },
  {
    name: "Delta Exchange",
    type: "Crypto Derivatives",
    description:
      "Leading platform for cryptocurrency derivatives and futures trading",
    features: [
      "Crypto Futures Trading",
      "Options on Crypto",
      "Perpetual Swaps",
      "High Leverage Trading",
      "Advanced Order Types",
      "Risk Management Tools",
    ],
    color: "from-orange-600 to-red-600",
    icon: "₿",
    referralLink: "https://www.delta.exchange/?code=JHCVEB",
    referralCode: "JHCVEB",
  },
] as const;
