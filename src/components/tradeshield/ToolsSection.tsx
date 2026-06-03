import type { PlatformId, ToolType } from "../../constants/tradeshield";
import { getToolsByPlatformAndType, toolTypeLabels } from "../../constants/tradeshield";
import ToolCard from "./ToolCard";

interface ToolsSectionProps {
  platform: PlatformId;
  type: ToolType;
  platformLabel: string;
}

const ToolsSection = ({ platform, type, platformLabel }: ToolsSectionProps) => {
  const tools = getToolsByPlatformAndType(platform, type);
  if (tools.length === 0) return null;

  const sectionTitle =
    type === "ea"
      ? `Expert Advisors for ${platformLabel}`
      : type === "pine"
        ? `Pine Script for ${platformLabel}`
        : `Indicators for ${platformLabel}`;

  return (
    <section className="mb-16">
      <h2 className="text-white font-bold text-2xl md:text-3xl mb-8">
        {sectionTitle}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={tool.id} tool={tool} index={index} />
        ))}
      </div>
    </section>
  );
};

export { toolTypeLabels };
export default ToolsSection;
