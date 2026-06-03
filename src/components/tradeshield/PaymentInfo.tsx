import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { paymentSteps, paymentMethods } from "../../constants/tradeshield/payment";
import TradeShieldSectionHeader from "./TradeShieldSectionHeader";

interface PaymentInfoProps {
  compact?: boolean;
}

const compactSteps = [
  paymentSteps[0],
  paymentSteps[1],
  {
    step: 3,
    title: "Pay & get files",
    description:
      "50% advance to start. You test the build; pay the balance before final source is released.",
  },
];

const PaymentInfo = ({ compact = false }: PaymentInfoProps) => {
  const steps = compact ? compactSteps : paymentSteps;

  return (
    <section id="payment" className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 border-t border-white/5">
      <TradeShieldSectionHeader
        title="How"
        highlight="payment works"
        subtitle="Quote first — then pay in two stages. No surprise checkout."
      />

      <div className={`grid gap-6 mb-8 ${compact ? "md:grid-cols-3 max-w-4xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        {steps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="rounded-xl border border-white/10 bg-[#0a0f1a]/40 p-6"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/35 flex items-center justify-center text-emerald-300 font-bold text-sm mb-3">
              {step.step}
            </div>
            <h3 className="text-white font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>

      {compact ? (
        <p className="text-center text-gray-500 text-sm max-w-xl mx-auto">
          {paymentMethods.map((m) => m.title).join(" · ")} — details on your invoice after quote approval.{" "}
          <Link to="/trading/terms" className="text-emerald-400 hover:underline">
            Terms
          </Link>
        </p>
      ) : (
        <>
          <h3 className="text-white font-bold text-xl text-center mb-6">Accepted payment methods</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="rounded-xl border border-white/10 p-6 bg-white/[0.02]"
              >
                <h4 className="text-emerald-300 font-semibold mb-2">{method.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                <p className="text-gray-500 text-xs">{method.note}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm">
            <Link to="/trading/terms" className="text-emerald-400 hover:underline">
              Terms & conditions
            </Link>
            {" · "}
            <Link to="/trading/privacy" className="text-emerald-400 hover:underline">
              Privacy policy
            </Link>
          </p>
        </>
      )}
    </section>
  );
};

export default PaymentInfo;
