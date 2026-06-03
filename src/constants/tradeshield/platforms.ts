import type { Platform } from "./types";

export const platforms: Platform[] = [
  {
    id: "mt5",
    name: "MetaTrader 5",
    shortName: "MT5",
    tagline: "Custom indicators, EAs, and MQL5 modifications",
    route: "/trading/tools/mt5",
    icon: "candlestick-chart",
    primary: true,
    available: true,
  },
  {
    id: "tradingview",
    name: "TradingView",
    shortName: "TradingView",
    tagline: "Pine Script indicators, strategies, and alerts",
    route: "/trading/tools/tradingview",
    icon: "line-chart",
    primary: true,
    available: true,
  },
  {
    id: "mt4",
    name: "MetaTrader 4",
    shortName: "MT4",
    tagline: "MQL4 indicators and EAs — available on request",
    route: "/trading/tools/mt4",
    icon: "chart-area",
    primary: false,
    available: false,
  },
  {
    id: "ninjatrader",
    name: "NinjaTrader",
    shortName: "NinjaTrader",
    tagline: "NT7/NT8 tools — quote on request",
    route: "/trading/tools/ninjatrader",
    icon: "zap",
    primary: false,
    available: false,
  },
  {
    id: "ctrader",
    name: "cTrader",
    shortName: "cTrader",
    tagline: "cTrader automation — quote on request",
    route: "/trading/tools/ctrader",
    icon: "hexagon",
    primary: false,
    available: false,
  },
  {
    id: "forextester",
    name: "Forex Tester",
    shortName: "Forex Tester",
    tagline: "Backtesting tools — quote on request",
    route: "/trading/tools/forextester",
    icon: "flask",
    primary: false,
    available: false,
  },
];

export const getPlatformById = (id: string) =>
  platforms.find((p) => p.id === id);
