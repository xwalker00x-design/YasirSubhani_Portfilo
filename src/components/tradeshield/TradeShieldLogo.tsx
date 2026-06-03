import { tradeShieldLogo } from "../../assets";

interface TradeShieldLogoProps {
  className?: string;
  alt?: string;
  /** Stronger emerald glow for hero / featured placements */
  glow?: "default" | "hero" | "none";
}

const glowClass = {
  default: "drop-shadow-[0_0_24px_rgba(16,185,129,0.3)]",
  hero: "drop-shadow-[0_0_48px_rgba(16,185,129,0.45)] drop-shadow-[0_0_80px_rgba(6,182,212,0.2)]",
  none: "",
} as const;

const TradeShieldLogo = ({
  className = "w-16 h-16",
  alt = "TradeShield",
  glow = "default",
}: TradeShieldLogoProps) => (
  <img
    src={tradeShieldLogo}
    alt={alt}
    className={`object-contain ${glowClass[glow]} ${className}`}
    width={512}
    height={512}
    loading="eager"
    decoding="async"
  />
);

export default TradeShieldLogo;
