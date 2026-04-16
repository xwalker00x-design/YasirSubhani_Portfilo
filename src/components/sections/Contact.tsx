import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    setSubmitStatus('idle');

    if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.accessToken) {
      setLoading(false);
      setSubmitStatus('error');
      alert("Email service is not configured. Please contact me directly.");
      return;
    }

    emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      {
        form_name: form.name,
        to_name: config.html.fullName,
        from_email: form.email,
        to_email: config.html.email,
        message: form.message,
      },
      emailjsConfig.accessToken
    ).then(() => {
      setLoading(false);
      setSubmitStatus('success');
      setForm(INITIAL_STATE);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, (error) => {
      setLoading(false);
      setSubmitStatus('error');
      console.log(error);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    });
  };

  return (
    <div className="flex flex-col-reverse xl:flex-row gap-10 overflow-hidden pt-12">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-white/[0.02] border border-white/10 backdrop-blur-xl p-8 rounded-[2rem] relative overflow-hidden shadow-2xl"
      >
        {/* Decorative Orbs */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#915EFF] opacity-10 blur-[100px] pointer-events-none" />
        
        <h3 className="text-white font-black md:text-[50px] sm:text-[40px] text-[30px] mb-2 leading-tight">
          Get in <span className="text-[#a78bfa]">Touch.</span>
        </h3>
        <p className="text-gray-400 mb-10 text-lg">Have a project in mind? Let's talk.</p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } = config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";
            const isFocused = focusedField === input;

            return (
              <label key={input} className="flex flex-col relative group">
                <span className={`text-[13px] font-bold uppercase tracking-widest mb-3 transition-colors duration-300 ${isFocused ? 'text-[#a78bfa]' : 'text-gray-500'}`}>
                  {span}
                </span>
                
                <div className="relative">
                  {/* Neural Flow Border */}
                  <div className={`absolute -inset-[1px] rounded-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${isFocused ? 'opacity-100' : ''}`}
                    style={{ background: 'linear-gradient(90deg, #915EFF, #3b82f6, #915EFF)' }}
                  />
                  
                  <Component
                    type={input === "email" ? "email" : "text"}
                    name={input}
                    value={form[`${input}`]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(input)}
                    onBlur={() => setFocusedField(null)}
                    placeholder={placeholder}
                    className="relative w-full bg-[#05050a] text-white rounded-xl border-none px-6 py-4 font-medium outline-none transition-all placeholder:text-gray-600 focus:ring-1 focus:ring-[#915EFF]/20"
                    {...(input === "message" && { rows: 6 })}
                  />
                </div>
                
                <AnimatePresence>
                  {errors[input] && (
                    <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="mt-2 text-xs text-red-400 font-bold">
                      {errors[input]}
                    </motion.span>
                  )}
                </AnimatePresence>
              </label>
            );
          })}

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-[#915EFF] to-[#3b82f6] text-white py-4 rounded-xl font-black text-lg tracking-wider shadow-[0_10px_30px_rgba(145,94,255,0.3)] disabled:opacity-50 transition-all flex items-center justify-center gap-3 mt-4"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                TRANSMITTING...
              </>
            ) : (
              submitStatus === 'success' ? "MESSAGE RECEIVED ✅" : "SEND MESSAGE"
            )}
          </motion.button>
        </form>

        {/* Global Connection Stats */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
           <div className="flex flex-col text-center">
              <span className="text-white font-bold text-xl leading-none">Global</span>
              <span className="text-xs uppercase tracking-tighter">Availability</span>
           </div>
           <div className="flex flex-col text-center">
              <span className="text-white font-bold text-xl leading-none">24h</span>
              <span className="text-xs uppercase tracking-tighter">Response time</span>
           </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] relative"
      >
        <div className="absolute inset-0 bg-[#915EFF] opacity-5 blur-[120px] rounded-full" />
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
