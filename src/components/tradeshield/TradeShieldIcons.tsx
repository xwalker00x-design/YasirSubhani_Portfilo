import type { FC } from "react";
import type { TradeShieldIconName } from "../../constants/tradeshield/types";

type IconProps = {
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const CandlestickChart = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M4 19V5M4 12h0M8 19V9M8 14h0M12 19V3M12 8h0M16 19v-6M16 11h0M20 19V7M20 10h0" />
  </svg>
);

const LineChart = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M3 17l6-6 4 4 8-10M21 7v4h-4" />
  </svg>
);

const ChartArea = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M3 20h18M7 16l3-4 3 3 4-6" />
    <path {...stroke} d="M3 20V4" opacity={0.5} />
  </svg>
);

const Zap = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" />
  </svg>
);

const Hexagon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z" />
  </svg>
);

const Flask = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M10 2v6l-5 9a3 3 0 002.6 4.5h8.8A3 3 0 0019 17l-5-9V2M8 2h8" />
  </svg>
);

const BarChart = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M6 20V10M12 20V4M18 20v-6" />
  </svg>
);

const Bot = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <rect {...stroke} x="5" y="8" width="14" height="11" rx="2" />
    <path {...stroke} d="M12 8V5M9 5h6M9 14h.01M15 14h.01M8 18v2M16 18v2" />
  </svg>
);

const Wrench = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path
      {...stroke}
      d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4l1.6 1.6-2.8 2.8 1.4 1.4 2.8-2.8 1.6 1.6a4 4 0 00-5.4 5.4L9 21H6v-3l6.3-6.3"
    />
  </svg>
);

const Layers = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);

const Code = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
  </svg>
);

const Clock = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <circle {...stroke} cx="12" cy="12" r="9" />
    <path {...stroke} d="M12 7v5l3 2" />
  </svg>
);

const Package = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M12 2l9 5v10l-9 5-9-5V7l9-5zM12 12l9-5M12 12v10M3 7l9 5" />
  </svg>
);

const Check = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M20 6L9 17l-5-5" />
  </svg>
);

const TrendingUp = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <path {...stroke} d="M3 17l6-6 4 4 7-9M14 6h7v7" />
  </svg>
);

const Coins = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden>
    <ellipse {...stroke} cx="9" cy="9" rx="6" ry="3" />
    <path {...stroke} d="M3 9v6c0 1.7 2.7 3 6 3s6-1.3 6-3V9M3 15c0 1.7 2.7 3 6 3s6-1.3 6-3" />
    <path {...stroke} d="M15 6c3.3 0 6 1.3 6 3s-2.7 3-6 3" opacity={0.7} />
  </svg>
);

const iconMap: Record<TradeShieldIconName, FC<IconProps>> = {
  "candlestick-chart": CandlestickChart,
  "line-chart": LineChart,
  "chart-area": ChartArea,
  zap: Zap,
  hexagon: Hexagon,
  flask: Flask,
  "bar-chart": BarChart,
  bot: Bot,
  wrench: Wrench,
  layers: Layers,
  code: Code,
  clock: Clock,
  package: Package,
  check: Check,
  "trending-up": TrendingUp,
  coins: Coins,
};

export const TradeShieldIcon = ({
  name,
  className = "w-5 h-5",
}: {
  name: TradeShieldIconName;
  className?: string;
}) => {
  const Icon = iconMap[name];
  return <Icon className={className} />;
};

export default TradeShieldIcon;
