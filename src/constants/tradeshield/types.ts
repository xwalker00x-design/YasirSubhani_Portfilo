export type PlatformId =
  | "mt5"
  | "mt4"
  | "tradingview"
  | "ninjatrader"
  | "ctrader"
  | "forextester";

export type TradeShieldIconName =
  | "candlestick-chart"
  | "line-chart"
  | "chart-area"
  | "zap"
  | "hexagon"
  | "flask"
  | "bar-chart"
  | "bot"
  | "wrench"
  | "layers"
  | "code"
  | "clock"
  | "package"
  | "check"
  | "trending-up"
  | "coins";

export type ToolType = "indicator" | "ea" | "script" | "pine";

export type ToolCta = "order" | "contact";

export interface Platform {
  id: PlatformId;
  name: string;
  shortName: string;
  tagline: string;
  route: string;
  icon: TradeShieldIconName;
  primary: boolean;
  available: boolean;
}

export interface ServiceOffer {
  title: string;
  description: string;
  /** Emoji icon (legacy TradingFinance style). */
  icon: string;
  gradient: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export type ChartPreviewVariant =
  | "sessions"
  | "rsi"
  | "mtf-panel"
  | "pine-overlay"
  | "pattern"
  | "ea"
  | "generic";

export interface TradingTool {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  type: ToolType;
  platform: PlatformId;
  icon: string;
  cta: ToolCta;
  featured?: boolean;
  previewVariant?: ChartPreviewVariant;
  tags?: string[];
}

export interface FreelanceRate {
  label: string;
  value: string;
}
