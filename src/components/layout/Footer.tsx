import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const Magnetic = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Magnetic pull distance
    const pull = 0.3; 
    x.set(distanceX * pull);
    y.set(distanceY * pull);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pb-10 overflow-hidden bg-[#030308]">
      {/* Decorative Gradient Line */}
      <div className="section-divider" />

      <div className="mx-auto max-w-7xl px-6 pt-20">
        {/* Hire Me / CTA Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] p-10 mb-20 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(145,94,255,0.1) 0%, rgba(59,130,246,0.1) 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)'
          }}
        >
          {/* Orbs */}
          <div className="ambient-orb ambient-orb-purple w-64 h-64 -top-32 -left-32 opacity-10" />
          <div className="ambient-orb ambient-orb-blue w-64 h-64 -bottom-32 -right-32 opacity-10" />

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Need a product live, <span className="text-[#a78bfa]">not a pitch deck</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Open for freelance and contract work. I am currently building Pull SaaS for RealtorOne and can take a new client. You work with me directly.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="mailto:yasir.subhani123@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#915EFF] text-white font-bold rounded-2xl shadow-[0_0_30px_rgba(145,94,255,0.4)] transition-all"
            >
              Start a Conversation
            </motion.a>
            <motion.a
              href="tel:+918271819813"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-2xl backdrop-blur-sm transition-all"
            >
              Book a Call
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src="/images.png" alt="Logo" className="w-10 h-10 rounded-full border border-white/10 group-hover:scale-110 transition-transform" />
              <span className="text-white font-black text-2xl tracking-tighter">YS.</span>
            </Link>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              Full-stack developer for web, mobile, and SaaS. Also custom MT5 and TradingView tools on TradeShield.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Work', 'Skills', 'Projects'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-500 hover:text-[#915EFF] transition-colors text-[15px]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:yasir.subhani123@gmail.com" className="text-gray-500 hover:text-white transition-colors text-[15px] block">
                  yasir.subhani123@gmail.com
                </a>
              </li>
              <li>
                <span className="text-gray-500 text-[15px]">
                  Kolkata, India
                </span>
              </li>
              <li>
                <a href="tel:+918271819813" className="text-gray-500 hover:text-white transition-colors text-[15px]">
                  +91 8271 819 813
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Social</h4>
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', url: 'https://linkedin.com/in/yasirsubhani' },
                { name: 'GitHub', url: 'https://github.com/yasirSub' },
                { name: 'Twitter', url: 'https://twitter.com' },
                { name: 'Instagram', url: 'https://instagram.com' }
              ].map((social) => (
                <Magnetic key={social.name}>
                  <motion.a 
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-500 hover:text-[#915EFF] transition-colors"
                  >
                    <span className="sr-only">{social.name}</span>
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#915EFF]/50 transition-colors bg-white/5 backdrop-blur-sm">
                       {social.name === 'LinkedIn' && 'In'}
                       {social.name === 'GitHub' && 'Gh'}
                       {social.name === 'Twitter' && 'Tw'}
                       {social.name === 'Instagram' && 'Ig'}
                    </div>
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[13px]">
          <p>© {currentYear} Yasir Subhani. Designed with passion.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
