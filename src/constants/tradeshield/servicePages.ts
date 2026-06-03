/** Nav menu structure and copy for /trading/services/* pages. */

export type ServiceNavLink = {
  label: string;
  href: string;
  note?: string;
};

export type ServiceNavGroup = {
  title: string;
  links: ServiceNavLink[];
};

/** Grouped links for the Services dropdown (desktop + mobile). */
export const servicesNavGroups: ServiceNavGroup[] = [
  {
    title: "MetaTrader®",
    links: [
      {
        label: "MetaTrader programming",
        href: "/trading/services/metatrader",
        note: "Overview",
      },
      { label: "MT4 & MQL4", href: "/trading/services/metatrader#mt4" },
      { label: "MT5 & MQL5", href: "/trading/services/metatrader#mt5" },
    ],
  },
  {
    title: "TradingView",
    links: [
      {
        label: "Pine Script programming",
        href: "/trading/services/tradingview",
      },
      {
        label: "Custom indicators",
        href: "/trading/services/tradingview#indicators",
      },
      {
        label: "Strategies & alerts",
        href: "/trading/services/tradingview#strategies",
      },
    ],
  },
  {
    title: "More services",
    links: [
      { label: "Expert Advisors (EAs)", href: "/trading/services/metatrader" },
      { label: "Conversion (Pine ↔ MQL)", href: "/trading#quote" },
      { label: "Modifications & fixes", href: "/trading/services/metatrader" },
      { label: "Backtest & optimization", href: "/trading#quote", note: "On request" },
    ],
  },
];

export const metaTraderPlatforms = [
  {
    id: "mt4",
    name: "MetaTrader 4",
    language: "MQL4",
    description:
      "Legacy MT4 builds for brokers still on MT4—indicators, scripts, and EAs with clear scope.",
    available: false,
  },
  {
    id: "mt5",
    name: "MetaTrader 5",
    language: "MQL5",
    description:
      "Primary focus: custom indicators, EAs, panels, and multi-symbol logic on MT5.",
    available: true,
  },
  {
    id: "mql4",
    name: "MQL4",
    language: "Indicators & EAs",
    description: "Port or maintain MQL4 code; new MT4 work quoted case-by-case.",
    available: false,
  },
  {
    id: "mql5",
    name: "MQL5",
    language: "Indicators & EAs",
    description: "New development, rewrites, and performance tuning for MT5 terminals.",
    available: true,
  },
] as const;

export const metaTraderBuildTypes = [
  "Custom indicators (sessions, MTF, dashboards)",
  "Expert Advisors with risk rules & trade management",
  "Scripts for one-off tasks and chart utilities",
  "Modifications to existing .mq4 / .mq5 source",
  "Alerts, panels, and Telegram / push integrations",
] as const;

export const metaTraderTrustPoints = [
  { value: "4+", label: "Years in software development" },
  { value: "MT5", label: "Primary delivery platform" },
  { value: "Clear", label: "Scope & INR quotes upfront" },
] as const;

export const tradingViewSections = [
  {
    id: "indicators",
    title: "Custom indicators",
    description:
      "Pine Script indicators with clean inputs, session logic, HTF levels, and chart labels that match your rules.",
  },
  {
    id: "strategies",
    title: "Strategies & automation",
    description:
      "Strategy scripts, alert conditions, and webhook-friendly setups—scoped to what TradingView allows on your plan.",
  },
  {
    id: "conversion",
    title: "Conversion",
    description:
      "Translate Pine ideas to MQL5 (or the reverse) when you need the same logic on MT5—quoted after reviewing both codebases.",
  },
  {
    id: "improvement",
    title: "Improvement & fixes",
    description:
      "Debug repainting issues, tighten alerts, add inputs, or refactor messy Pine into maintainable code.",
  },
] as const;

export const programmingForStrip = [
  {
    label: "MetaTrader®",
    href: "/trading/services/metatrader",
    blurb: "MT5 · MQL5 · EA mods",
  },
  {
    label: "TradingView",
    href: "/trading/services/tradingview",
    blurb: "Pine Script · alerts",
  },
] as const;
