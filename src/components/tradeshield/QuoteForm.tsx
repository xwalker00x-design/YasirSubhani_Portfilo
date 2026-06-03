import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "../canvas";
import { config } from "../../constants/config";
import { getPackageById } from "../../constants/tradeshield/packages";
import { slideIn } from "../../utils/motion";

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

type FormState = {
  name: string;
  email: string;
  platform: string;
  serviceType: string;
  hasSource: string;
  toolCount: string;
  deadline: string;
  message: string;
};

const INITIAL: FormState = {
  name: "",
  email: "",
  platform: "mt5",
  serviceType: "modification",
  hasSource: "not_sure",
  toolCount: "1",
  deadline: "",
  message: "",
};

const QuoteForm = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<FormState>(INITIAL);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const packageId = searchParams.get("package");
    if (!packageId) return;
    const pkg = getPackageById(packageId);
    if (!pkg) return;
    setSelectedPackage(pkg.name);
    setForm((prev) => ({
      ...prev,
      platform: pkg.platform === "tradingview" ? "tradingview" : pkg.platform === "any" ? "mt5" : pkg.platform,
      serviceType: pkg.serviceType,
      message: prev.message.trim()
        ? prev.message
        : `I would like to order: ${pkg.name} (${pkg.priceLabel}).\n\nProject details:\n`,
    }));
  }, [searchParams]);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Invalid email";
    if (!form.message.trim()) next.message = "Please describe your requirements";
    else if (form.message.trim().length < 10)
      next.message = "Please add more detail (min 10 characters)";
    if (!form.deadline.trim()) next.deadline = "Deadline is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setStatus("idle");

    const body = [
      `[TradeShield Quote]`,
      `Platform: ${form.platform}`,
      `Service: ${form.serviceType}`,
      `Has .mq5 source: ${form.hasSource}`,
      `Tools count: ${form.toolCount}`,
      `Deadline: ${form.deadline}`,
      ``,
      form.message,
    ].join("\n");

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.accessToken) {
      setLoading(false);
      setStatus("error");
      return;
    }

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: form.name,
          to_name: config.html.fullName,
          from_email: form.email,
          to_email: config.html.email,
          message: body,
        },
        emailjsConfig.accessToken
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        setForm(INITIAL);
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setLoading(false);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      });
  };

  const inputClass =
    "w-full bg-[#05050a] text-white rounded-xl border border-white/10 px-4 py-3 outline-none focus:border-green-500/50";

  return (
    <section id="quote" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 overflow-hidden">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-white font-bold text-3xl sm:text-4xl mb-2">
          Request a <span className="text-emerald-400">quote</span>
        </h2>
        <p className="text-gray-400 text-sm max-w-md mx-auto">
          Send your exact requirement—I&apos;ll reply with a fair estimate after review.
        </p>
        {selectedPackage && (
          <p className="mt-4 text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg py-2 px-4 max-w-md mx-auto inline-block">
            Selected package: <strong>{selectedPackage}</strong>
          </p>
        )}
      </div>

      <div className="flex flex-col-reverse xl:flex-row gap-10">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex-[0.75] min-w-0"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-[#0a0f1a]/80 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl shadow-black/30 relative overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-emerald-500 opacity-10 blur-[100px] pointer-events-none" />
            <div className="relative z-10 space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block">
            <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Name</span>
            <input name="name" value={form.name} onChange={handleChange} className={inputClass} />
            {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
          </label>
          <label className="block">
            <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Email</span>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
            {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block">
            <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Platform</span>
            <select name="platform" value={form.platform} onChange={handleChange} className={inputClass}>
              <option value="mt5">MetaTrader 5</option>
              <option value="tradingview">TradingView</option>
              <option value="mt4">MetaTrader 4</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Service type</span>
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="modification">Modification</option>
              <option value="new_indicator">New indicator</option>
              <option value="ea">Expert Advisor</option>
              <option value="pine_to_mt5">Pine → MT5 conversion</option>
            </select>
          </label>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <label className="block">
            <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">
              Has .mq5 source code?
            </span>
            <select name="hasSource" value={form.hasSource} onChange={handleChange} className={inputClass}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="not_sure">Not sure</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">
              Number of tools
            </span>
            <input
              name="toolCount"
              value={form.toolCount}
              onChange={handleChange}
              className={inputClass}
              placeholder="e.g. 1"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">Deadline</span>
          <input
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            className={inputClass}
            placeholder="e.g. 7 business days"
          />
          {errors.deadline && <span className="text-red-400 text-xs">{errors.deadline}</span>}
        </label>

        <label className="block">
          <span className="text-gray-400 text-xs uppercase tracking-wider mb-1 block">
            Exact modifications / requirements
          </span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={inputClass}
          />
          {errors.message && <span className="text-red-400 text-xs">{errors.message}</span>}
        </label>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold disabled:opacity-50"
        >
          {loading ? "Sending..." : status === "success" ? "Sent — I'll reply soon" : "Submit quote request"}
        </motion.button>

        <AnimatePresence>
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-400 text-sm text-center"
            >
              Could not send. Email me at {config.html.email} or use the main site contact.
            </motion.p>
          )}
        </AnimatePresence>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative min-h-[280px]"
        >
          <div className="absolute inset-0 bg-emerald-500 opacity-5 blur-[120px] rounded-full pointer-events-none" />
          <EarthCanvas />
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;
