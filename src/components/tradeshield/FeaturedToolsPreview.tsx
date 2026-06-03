import { Link } from "react-router-dom";
import { getFeaturedTools } from "../../constants/tradeshield";
import TradeShieldSectionHeader from "./TradeShieldSectionHeader";
import ToolCard from "./ToolCard";

const FeaturedToolsPreview = () => {
  const featured = getFeaturedTools().slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-white/5">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <TradeShieldSectionHeader
          title="Featured"
          highlight="trading tools"
          subtitle="A quick look—see the full showcase above for more examples."
          align="left"
        />
        <Link
          to="/trading#indicators"
          className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm shrink-0"
        >
          View all indicators →
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((tool, index) => (
          <ToolCard key={tool.id} tool={tool} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedToolsPreview;
