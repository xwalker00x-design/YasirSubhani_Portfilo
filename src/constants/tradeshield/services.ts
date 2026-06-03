import type { ProcessStep, ServiceOffer } from "./types";
import { tradingJourneyStats } from "./tradingJourney";

export const serviceOffers: ServiceOffer[] = [
  {
    title: "Custom Indicators",
    description:
      "Build MT5 and TradingView indicators from your strategy—sessions, alerts, multi-timeframe logic, and clean chart UI.",
    icon: "📊",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Expert Advisors & Bots",
    description:
      "Automate entries, exits, and risk rules with EAs for MetaTrader or alert-based strategies on TradingView.",
    icon: "📈",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Modifications & Optimization",
    description:
      "Improve existing indicators—fix bugs, add Telegram/push alerts, convert Pine logic to MQL5, and tune performance.",
    icon: "🛡️",
    gradient: "from-purple-500 to-pink-600",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Request",
    description: "Share your requirements, platform, and deadline.",
  },
  {
    step: 2,
    title: "Estimate",
    description: "I review scope and source code, then send a fair quote.",
  },
  {
    step: 3,
    title: "Agreement",
    description: "Confirm scope, timeline, and payment terms.",
  },
  {
    step: 4,
    title: "Build & Test",
    description: "Develop, backtest where applicable, and deliver builds.",
  },
  {
    step: 5,
    title: "Delivery & Fixes",
    description: "You verify on your setup; I fix bugs within agreed scope.",
  },
];

export const trustStats = tradingJourneyStats.map((stat) => ({
  value: stat.number,
  label: stat.label,
  icon: stat.icon,
  color: stat.color,
}));
