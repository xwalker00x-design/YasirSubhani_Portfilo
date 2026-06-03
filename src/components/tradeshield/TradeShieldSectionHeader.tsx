import { motion } from "framer-motion";

type Props = {
  title: string;
  highlight: string;
  subtitle?: string;
  align?: "center" | "left";
};

const TradeShieldSectionHeader = ({
  title,
  highlight,
  subtitle,
  align = "center",
}: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={align === "center" ? "text-center mb-10" : "mb-8"}
  >
    <h2
      className={`text-white font-bold text-3xl md:text-4xl tracking-tight ${
        align === "center" ? "" : ""
      }`}
    >
      {title}{" "}
      <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
        {highlight}
      </span>
    </h2>
    {subtitle && (
      <p
        className={`text-gray-400 mt-3 text-base md:text-lg max-w-2xl leading-relaxed ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default TradeShieldSectionHeader;
