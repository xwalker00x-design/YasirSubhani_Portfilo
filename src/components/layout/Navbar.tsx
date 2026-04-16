import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || 0;
      setScrolled(scrollTop > 50);
      if (toggle) setToggle(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight as number;
        const rect = current.getBoundingClientRect();
        const sectionTop = rect.top - sectionHeight * 0.2;
        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener("scroll", navbarHighlighter as EventListener);
    };
  }, [toggle]);

  const handleNavClick = (navId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${navId}`;
    } else {
      document.getElementById(navId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(navId);
    setToggle(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out hidden sm:block ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#915EFF] via-[#3b82f6] to-[#a78bfa] origin-left z-[60]"
          style={{ scaleX }}
        />

        <div className={`mx-auto w-full max-w-7xl ${styles.paddingX}`}>
          <div 
            className={`flex items-center justify-between px-8 py-3 rounded-2xl transition-all duration-500 ${
              scrolled 
                ? "bg-[#0a0a14]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
                : "bg-transparent border border-transparent"
            }`}
          >
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <div className="relative overflow-hidden rounded-full w-10 h-10 border border-white/10 group-hover:border-[#915EFF]/50 transition-colors">
                <img 
                  src="/images.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="text-white font-bold text-[18px] tracking-tight group-hover:text-[#915EFF] transition-colors">
                Yasir<span className="text-gray-500">Subhani</span>
              </span>
            </Link>

            <ul className="flex flex-row gap-8 list-none">
              {navLinks.map((nav) => (
                <li key={nav.id} className="relative py-2">
                  <a
                    href={`#${nav.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(nav.id);
                    }}
                    className={`text-[15px] font-medium tracking-wide transition-all duration-300 ${
                      active === nav.id ? "text-[#a78bfa]" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {nav.title}
                  </a>
                  {active === nav.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full"
                      style={{ background: 'linear-gradient(90deg, #915EFF, #3b82f6)' }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </li>
              ))}
              <li className="py-2">
                <Link to="/gear" className="text-[15px] font-medium text-gray-400 hover:text-white transition-all">
                  Gear
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out sm:hidden ${
          scrolled ? "py-3 bg-[#0a0a14]/80 backdrop-blur-lg border-b border-white/10" : "py-5"
        }`}
      >
        <div className={`mx-auto w-full px-6 flex items-center justify-between`}>
          <Link to="/" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
            <img src="/images.png" alt="Logo" className="w-9 h-9 rounded-full border border-white/10" />
          </Link>

          <div className="flex items-center gap-4">
            <button onClick={() => setToggle(!toggle)} className="p-2">
              <img src={toggle ? close : menu} alt="menu" className="w-6 h-6 object-contain" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-[#0a0a14]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
              <ul className="flex flex-col p-6 gap-4">
                {navLinks.map((nav) => (
                  <li key={nav.id}>
                    <a
                      href={`#${nav.id}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(nav.id); }}
                      className={`text-[18px] font-medium block py-2 ${active === nav.id ? "text-[#915EFF]" : "text-gray-400"}`}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
                <li>
                  <Link to="/gear" onClick={() => setToggle(false)} className="text-[18px] font-medium block py-2 text-gray-400">
                    Gear
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
