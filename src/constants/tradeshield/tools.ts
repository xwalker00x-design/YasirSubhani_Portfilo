import type { PlatformId, ToolType, TradingTool } from "./types";

export const tradingTools: TradingTool[] = [
  {
    id: "mt5-sessions",
    title: "Trading Sessions Indicator",
    shortDescription:
      "Session boxes on any timeframe with optional high/low range stats for the selected period.",
    longDescription:
      "Custom session visualization for Asian, London, and New York hours with configurable colors and alerts when a session opens.",
    type: "indicator",
    platform: "mt5",
    icon: "🕐",
    cta: "order",
    featured: true,
    previewVariant: "sessions",
    tags: ["MT5", "Sessions", "Alerts"],
  },
  {
    id: "mt5-rsi-alerts",
    title: "RSI Alerts Indicator",
    shortDescription:
      "Screen, push, and email alerts when RSI enters overbought or oversold on the chart timeframe.",
    type: "indicator",
    platform: "mt5",
    icon: "📣",
    cta: "order",
    featured: true,
    previewVariant: "rsi",
    tags: ["MT5", "RSI", "Push alerts"],
  },
  {
    id: "mt5-mtf-panel",
    title: "Multi-Timeframe Panel",
    shortDescription:
      "Dashboard-style panel showing trend and key levels across multiple timeframes in one view.",
    type: "indicator",
    platform: "mt5",
    icon: "📋",
    cta: "order",
    featured: true,
    previewVariant: "mtf-panel",
    tags: ["MT5", "Dashboard", "Multi-TF"],
  },
  {
    id: "mt5-ea-mod",
    title: "EA Modification & Risk",
    shortDescription:
      "Tune existing Expert Advisors—lot sizing, trailing stops, session filters, and signal logic.",
    type: "ea",
    platform: "mt5",
    icon: "🤖",
    cta: "order",
    previewVariant: "ea",
    tags: ["MT5", "EA", "Risk"],
  },
  {
    id: "mt5-custom-order",
    title: "Custom MT5 Tool",
    shortDescription:
      "Need something not listed? Describe your idea and get a tailored quote.",
    type: "indicator",
    platform: "mt5",
    icon: "✨",
    cta: "contact",
  },
  {
    id: "tv-mtf-overlay",
    title: "Multi-Timeframe Overlay",
    shortDescription:
      "Higher-timeframe levels and trend context drawn on your active TradingView chart.",
    type: "pine",
    platform: "tradingview",
    icon: "📈",
    cta: "order",
    featured: true,
    previewVariant: "pine-overlay",
    tags: ["Pine", "HTF", "Levels"],
  },
  {
    id: "tv-pattern-scanner",
    title: "Pattern Scanner",
    shortDescription:
      "Highlight candlestick or structure patterns with optional alerts when conditions match.",
    type: "pine",
    platform: "tradingview",
    icon: "🔍",
    cta: "order",
    featured: true,
    previewVariant: "pattern",
    tags: ["Pine", "Patterns", "Scanner"],
  },
  {
    id: "tv-alert-strategy",
    title: "Alert-Based Strategy",
    shortDescription:
      "Pine Script strategy or indicator with webhook-ready alerts for automation workflows.",
    type: "pine",
    platform: "tradingview",
    icon: "🔔",
    cta: "order",
  },
  {
    id: "tv-custom-order",
    title: "Custom Pine Script",
    shortDescription:
      "Contact for estimate on new builds, modifications, or Pine-to-MT5 planning.",
    type: "pine",
    platform: "tradingview",
    icon: "✨",
    cta: "contact",
  },
];

export const getToolsByPlatform = (platform: PlatformId) =>
  tradingTools.filter((t) => t.platform === platform);

export const getToolsByPlatformAndType = (
  platform: PlatformId,
  type: ToolType
) => tradingTools.filter((t) => t.platform === platform && t.type === type);

export const getFeaturedTools = () =>
  tradingTools.filter((t) => t.featured);

export const toolTypeLabels: Record<ToolType, string> = {
  indicator: "Indicators",
  ea: "Expert Advisors",
  script: "Scripts",
  pine: "Pine Script",
};
