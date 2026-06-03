/** SVG chart mockups for indicator showcase cards (no external images required). */

import type { FC } from "react";
import type { ChartPreviewVariant } from "../../../constants/tradeshield/types";

type PreviewProps = { className?: string };

export const SessionChartPreview = ({ className = "" }: PreviewProps) => (
  <svg viewBox="0 0 400 220" className={className} aria-hidden>
    <defs>
      <linearGradient id="sess-bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0f172a" />
        <stop offset="100%" stopColor="#020617" />
      </linearGradient>
    </defs>
    <rect width="400" height="220" fill="url(#sess-bg)" />
    <rect x="20" y="40" width="100" height="140" fill="#10b981" fillOpacity="0.12" stroke="#10b981" strokeOpacity="0.4" rx="4" />
    <rect x="130" y="55" width="110" height="125" fill="#3b82f6" fillOpacity="0.12" stroke="#3b82f6" strokeOpacity="0.4" rx="4" />
    <rect x="250" y="35" width="130" height="145" fill="#a855f7" fillOpacity="0.12" stroke="#a855f7" strokeOpacity="0.4" rx="4" />
    {[...Array(24)].map((_, i) => {
      const x = 25 + i * 15;
      const h = 30 + Math.sin(i * 0.7) * 25 + (i % 3) * 10;
      const bull = i % 2 === 0;
      return (
        <g key={i}>
          <line x1={x} y1={180 - h} x2={x} y2={180} stroke={bull ? "#10b981" : "#ef4444"} strokeWidth="2" />
          <rect x={x - 4} y={180 - h - (bull ? 8 : 0)} width="8" height={8} fill={bull ? "#10b981" : "#ef4444"} />
        </g>
      );
    })}
    <text x="50" y="28" fill="#10b981" fontSize="10" fontFamily="sans-serif">ASIA</text>
    <text x="155" y="48" fill="#3b82f6" fontSize="10" fontFamily="sans-serif">LONDON</text>
    <text x="285" y="28" fill="#a855f7" fontSize="10" fontFamily="sans-serif">NY</text>
  </svg>
);

export const RsiChartPreview = ({ className = "" }: PreviewProps) => (
  <svg viewBox="0 0 400 220" className={className} aria-hidden>
    <rect width="400" height="220" fill="#020617" />
    <path
      d="M20 120 Q60 80 100 100 T180 70 T260 90 T380 40"
      fill="none"
      stroke="#22d3ee"
      strokeWidth="2"
    />
    <rect x="20" y="155" width="360" height="50" fill="#0f172a" stroke="#334155" rx="4" />
    <path
      d="M30 185 Q80 165 130 175 T220 160 T320 170 T370 155"
      fill="none"
      stroke="#a855f7"
      strokeWidth="2"
    />
    <line x1="20" y1="170" x2="380" y2="170" stroke="#ef4444" strokeDasharray="4 4" strokeOpacity="0.6" />
    <line x1="20" y1="195" x2="380" y2="195" stroke="#10b981" strokeDasharray="4 4" strokeOpacity="0.6" />
    <text x="28" y="168" fill="#ef4444" fontSize="9">70</text>
    <text x="28" y="198" fill="#10b981" fontSize="9">30</text>
    <text x="330" y="25" fill="#fbbf24" fontSize="11" fontFamily="sans-serif">RSI ALERT</text>
  </svg>
);

export const MtfPanelPreview = ({ className = "" }: PreviewProps) => (
  <svg viewBox="0 0 400 220" className={className} aria-hidden>
    <rect width="400" height="220" fill="#020617" />
    <rect x="240" y="15" width="145" height="190" fill="#0f172a" stroke="#10b981" strokeOpacity="0.35" rx="8" />
    {["M15", "H1", "H4", "D1"].map((tf, i) => (
      <g key={tf}>
        <text x="255" y={45 + i * 42} fill="#94a3b8" fontSize="10">{tf}</text>
        <circle cx="360" cy={40 + i * 42} r="6" fill={i % 2 ? "#10b981" : "#ef4444"} />
        <text x="372" y={44 + i * 42} fill={i % 2 ? "#10b981" : "#ef4444"} fontSize="9">
          {i % 2 ? "BULL" : "BEAR"}
        </text>
      </g>
    ))}
    {[...Array(18)].map((_, i) => (
      <line
        key={i}
        x1={20 + i * 12}
        y1={100 - Math.sin(i) * 40}
        x2={20 + i * 12}
        y2={160}
        stroke={i % 2 ? "#10b981" : "#ef4444"}
        strokeWidth="3"
      />
    ))}
  </svg>
);

export const PineOverlayPreview = ({ className = "" }: PreviewProps) => (
  <svg viewBox="0 0 400 220" className={className} aria-hidden>
    <rect width="400" height="220" fill="#020617" />
    <path d="M20 140 L120 100 L200 120 L300 60 L380 80" fill="none" stroke="#3b82f6" strokeWidth="2" strokeOpacity="0.5" />
    <path d="M20 100 L120 70 L200 90 L300 40 L380 50" fill="none" stroke="#10b981" strokeWidth="2" />
    {[...Array(16)].map((_, i) => (
      <line key={i} x1={25 + i * 22} y1={130 + (i % 4) * 8} x2={25 + i * 22} y2={170 - (i % 3) * 15} stroke={i % 2 ? "#10b981" : "#ef4444"} strokeWidth="2" />
    ))}
    <text x="20" y="25" fill="#22d3ee" fontSize="11">HTF levels · TradingView</text>
  </svg>
);

export const PatternScannerPreview = ({ className = "" }: PreviewProps) => (
  <svg viewBox="0 0 400 220" className={className} aria-hidden>
    <rect width="400" height="220" fill="#020617" />
    {[40, 90, 140].map((y, i) => (
      <polygon
        key={i}
        points={`${80 + i * 100},${y + 30} ${110 + i * 100},${y} ${140 + i * 100},${y + 30}`}
        fill="none"
        stroke="#fbbf24"
        strokeWidth="2"
      />
    ))}
    <circle cx="200" cy="110" r="35" fill="#fbbf24" fillOpacity="0.15" stroke="#fbbf24" />
    <text x="175" y="115" fill="#fbbf24" fontSize="10">PATTERN</text>
  </svg>
);

export const EaDashboardPreview = ({ className = "" }: PreviewProps) => (
  <svg viewBox="0 0 400 220" className={className} aria-hidden>
    <rect width="400" height="220" fill="#020617" />
    <rect x="20" y="20" width="360" height="50" fill="#0f172a" stroke="#334155" rx="6" />
    <text x="35" y="50" fill="#10b981" fontSize="12">EA · Risk 1% · Trailing ON</text>
    <text x="280" y="50" fill="#22d3ee" fontSize="11">PnL +2.4%</text>
    {[...Array(20)].map((_, i) => (
      <rect
        key={i}
        x={25 + i * 17}
        y={100 + (i % 5) * 5}
        width="10"
        height={60 - (i % 6) * 8}
        fill={i % 2 ? "#10b981" : "#ef4444"}
        fillOpacity="0.8"
        rx="1"
      />
    ))}
  </svg>
);

export const GenericChartPreview = ({ className = "" }: PreviewProps) => (
  <svg viewBox="0 0 400 220" className={className} aria-hidden>
    <rect width="400" height="220" fill="#020617" />
    <defs>
      <linearGradient id="gen-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>
    <path
      d="M20 150 Q100 60 200 100 T380 50"
      fill="none"
      stroke="url(#gen-line)"
      strokeWidth="3"
    />
    {[...Array(14)].map((_, i) => (
      <line
        key={i}
        x1={30 + i * 25}
        y1={120 + Math.sin(i) * 20}
        x2={30 + i * 25}
        y2={180}
        stroke={i % 2 ? "#10b981" : "#ef4444"}
        strokeWidth="2"
      />
    ))}
  </svg>
);

export const ChartPreviewByVariant = ({
  variant,
  className,
}: {
  variant: ChartPreviewVariant;
  className?: string;
}) => {
  const map: Record<ChartPreviewVariant, FC<PreviewProps>> = {
    sessions: SessionChartPreview,
    rsi: RsiChartPreview,
    "mtf-panel": MtfPanelPreview,
    "pine-overlay": PineOverlayPreview,
    pattern: PatternScannerPreview,
    ea: EaDashboardPreview,
    generic: GenericChartPreview,
  };
  const Comp = map[variant] ?? GenericChartPreview;
  return <Comp className={className} />;
};
