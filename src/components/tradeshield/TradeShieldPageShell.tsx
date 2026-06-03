import type { ReactNode } from "react";
import TradeShieldNav from "./TradeShieldNav";

type Props = {
  children: ReactNode;
};

/** Wraps all /trading routes with dedicated nav and spacing (no portfolio navbar). */
const TradeShieldPageShell = ({ children }: Props) => (
  <div className="min-h-screen bg-[#030712] text-white selection:bg-green-500/30">
    <TradeShieldNav />
    <main className="pt-[4.25rem] sm:pt-[4.5rem]">{children}</main>
  </div>
);

export default TradeShieldPageShell;
