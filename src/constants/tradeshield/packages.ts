export type ServicePackage = {
  id: string;
  name: string;
  priceLabel: string;
  priceNote: string;
  description: string;
  includes: string[];
  delivery: string;
  platform: "mt5" | "tradingview" | "any";
  serviceType: string;
  popular?: boolean;
};

/** Fixed starting packages — final quote confirmed after reviewing your files. */
export const servicePackages: ServicePackage[] = [
  {
    id: "simple-mod",
    name: "Simple modification",
    priceLabel: "₹1,899 – ₹4,999",
    priceNote: "Starting from ₹1,899",
    description: "Quick changes to an existing indicator or EA you already own.",
    includes: [
      "Colors, labels, inputs, alerts",
      "Small UI tweaks",
      "Bug fixes",
      "1 round of revisions",
    ],
    delivery: "2–5 business days",
    platform: "mt5",
    serviceType: "modification",
  },
  {
    id: "medium-mod",
    name: "Medium modification",
    priceLabel: "₹4,999 – ₹12,999",
    priceNote: "Most popular package",
    description: "Logic updates, notifications, and multi-timeframe behaviour.",
    includes: [
      "New conditions & signal rules",
      "Telegram / push / email alerts",
      "Multi-timeframe support",
      "2 rounds of revisions",
    ],
    delivery: "5–10 business days",
    platform: "mt5",
    serviceType: "modification",
    popular: true,
  },
  {
    id: "complex-mod",
    name: "Complex build",
    priceLabel: "₹12,999 – ₹39,999+",
    priceNote: "Quote after review",
    description: "Major rewrites, dashboards, scanners, or Pine → MT5 conversion.",
    includes: [
      "Panel / dashboard / scanner",
      "Performance optimization",
      "Pine Script to MQL5 planning",
      "Source handover & documentation",
    ],
    delivery: "Agreed in quote",
    platform: "mt5",
    serviceType: "modification",
  },
  {
    id: "pine-custom",
    name: "TradingView Pine Script",
    priceLabel: "₹2,499 – ₹14,999",
    priceNote: "Depends on scope",
    description: "Custom indicator or strategy with alerts on TradingView.",
    includes: [
      "Pine Script v5",
      "Alert-ready outputs",
      "Webhook-friendly where needed",
      "Revision rounds included",
    ],
    delivery: "5–14 business days",
    platform: "tradingview",
    serviceType: "new_indicator",
  },
];

export const getPackageById = (id: string) =>
  servicePackages.find((p) => p.id === id);
