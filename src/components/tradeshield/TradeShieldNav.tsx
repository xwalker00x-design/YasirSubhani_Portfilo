import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import { platforms } from "../../constants/tradeshield";

import { servicesNavGroups } from "../../constants/tradeshield/servicePages";

import TradeShieldLogo from "./TradeShieldLogo";



const TradeShieldNav = () => {

  const location = useLocation();

  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  const [toolsOpen, setToolsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {

    const onScroll = () => setScrolled(window.scrollY > 12);

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);

  }, []);



  useEffect(() => {

    setMobileOpen(false);

    setServicesOpen(false);

    setToolsOpen(false);

  }, [location.pathname, location.hash]);



  const goTo = (hash: string) => {

    if (location.pathname === "/trading") {

      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });

    } else {

      navigate(`/trading#${hash}`);

    }

    setMobileOpen(false);

    setServicesOpen(false);

    setToolsOpen(false);

  };



  const navLinkClass = (active: boolean) =>

    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${

      active

        ? "text-emerald-300 bg-emerald-500/15 border border-emerald-500/25"

        : "text-gray-400 hover:text-white hover:bg-white/5"

    }`;



  const isToolsRoute = location.pathname.startsWith("/trading/tools");

  const isServicesRoute = location.pathname.startsWith("/trading/services");



  const closeDropdowns = () => {

    setServicesOpen(false);

    setToolsOpen(false);

  };



  return (

    <header

      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${

        scrolled

          ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"

          : "bg-[#030712]/70 backdrop-blur-md border-b border-transparent"

      }`}

    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[4.25rem] sm:h-[4.5rem] flex items-center justify-between gap-4">

        <div className="flex items-center gap-3 min-w-0">

          <Link to="/trading" className="flex items-center gap-2.5 shrink-0 group">

            <TradeShieldLogo className="w-9 h-9 sm:w-10 sm:h-10" />

            <div className="flex flex-col leading-tight">

              <span className="text-white font-bold text-base sm:text-lg group-hover:text-emerald-400 transition-colors">

                TradeShield

              </span>

              <span className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">

                by Yasir Subhani

              </span>

            </div>

          </Link>

          <Link

            to="/"

            className="hidden lg:inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-300 border-l border-white/10 pl-3 ml-1 transition-colors"

          >

            ← Portfolio

          </Link>

        </div>



        <nav className="hidden md:flex items-center gap-1">

          <div className="relative">

            <button

              type="button"

              onClick={() => {

                setServicesOpen(!servicesOpen);

                setToolsOpen(false);

              }}

              className={`${navLinkClass(isServicesRoute)} flex items-center gap-1`}

            >

              Services

              <Chevron open={servicesOpen} />

            </button>

            <AnimatePresence>

              {servicesOpen && (

                <ServicesDropdown onNavigate={closeDropdowns} />

              )}

            </AnimatePresence>

          </div>



          <div className="relative">

            <button

              type="button"

              onClick={() => {

                setToolsOpen(!toolsOpen);

                setServicesOpen(false);

              }}

              className={`${navLinkClass(isToolsRoute)} flex items-center gap-1`}

            >

              Trading tools

              <Chevron open={toolsOpen} />

            </button>

            <AnimatePresence>

              {toolsOpen && (

                <motion.div

                  initial={{ opacity: 0, y: 8 }}

                  animate={{ opacity: 1, y: 0 }}

                  exit={{ opacity: 0, y: 8 }}

                  className="absolute top-full right-0 mt-2 w-56 rounded-xl border border-white/10 bg-[#0c1222] shadow-2xl py-2 overflow-hidden"

                >

                  <Link

                    to="/trading/tools"

                    onClick={closeDropdowns}

                    className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 hover:text-emerald-400 font-medium"

                  >

                    All platforms

                  </Link>

                  {platforms.map((p) => (

                    <Link

                      key={p.id}

                      to={p.route}

                      onClick={closeDropdowns}

                      className="block px-4 py-2 text-sm text-gray-400 hover:bg-white/5 hover:text-emerald-400"

                    >

                      {p.shortName}

                      {!p.available && (

                        <span className="text-gray-600 text-xs ml-1">· on request</span>

                      )}

                    </Link>

                  ))}

                </motion.div>

              )}

            </AnimatePresence>

          </div>



          <button type="button" onClick={() => goTo("packages")} className={navLinkClass(false)}>

            Pricing

          </button>



          <button

            type="button"

            onClick={() => goTo("quote")}

            className="ml-2 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02]"

          >

            Get quote

          </button>

        </nav>



        <button

          type="button"

          className="md:hidden p-2 text-gray-300 hover:text-white"

          aria-label="Menu"

          onClick={() => setMobileOpen(!mobileOpen)}

        >

          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

            {mobileOpen ? (

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

            ) : (

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

            )}

          </svg>

        </button>

      </div>



      <AnimatePresence>

        {mobileOpen && (

          <motion.div

            initial={{ height: 0, opacity: 0 }}

            animate={{ height: "auto", opacity: 1 }}

            exit={{ height: 0, opacity: 0 }}

            className="md:hidden border-t border-white/10 bg-[#0a0f1a]/98 overflow-hidden max-h-[85vh] overflow-y-auto"

          >

            <div className="px-4 py-4 flex flex-col gap-1">

              <Link to="/" className="text-gray-500 text-sm py-2 mb-2">

                ← Back to portfolio

              </Link>



              <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider px-3 pt-2">

                Services

              </p>

              {servicesNavGroups.map((group) => (

                <div key={group.title} className="mb-2">

                  <p className="text-emerald-500/80 text-[10px] font-bold uppercase tracking-wider px-3 py-1">

                    {group.title}

                  </p>

                  {group.links.map((link) => (

                    <Link

                      key={link.href + link.label}

                      to={link.href}

                      onClick={() => setMobileOpen(false)}

                      className="block text-gray-300 py-2.5 px-3 rounded-lg hover:bg-white/5 text-sm"

                    >

                      {link.label}

                      {link.note && (

                        <span className="text-gray-600 text-xs ml-1">· {link.note}</span>

                      )}

                    </Link>

                  ))}

                </div>

              ))}



              <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider px-3 pt-3">

                Trading tools

              </p>

              <Link

                to="/trading/tools"

                onClick={() => setMobileOpen(false)}

                className="text-gray-300 py-2.5 px-3 rounded-lg hover:bg-white/5 text-sm"

              >

                All platforms

              </Link>

              {platforms.map((p) => (

                <Link

                  key={p.id}

                  to={p.route}

                  onClick={() => setMobileOpen(false)}

                  className="text-gray-400 py-2 px-3 rounded-lg hover:bg-white/5 text-sm"

                >

                  {p.shortName}

                </Link>

              ))}



              <button

                type="button"

                onClick={() => goTo("packages")}

                className="text-left text-gray-300 py-3 px-3 rounded-lg hover:bg-white/5 mt-2"

              >

                Pricing

              </button>

              <button

                type="button"

                onClick={() => goTo("quote")}

                className="mt-2 w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-3 rounded-lg font-semibold"

              >

                Get quote

              </button>



              <div className="border-t border-white/10 mt-4 pt-3 space-y-1">

                <p className="text-gray-600 text-xs font-semibold uppercase tracking-wider px-3 mb-1">

                  More on home

                </p>

                <button

                  type="button"

                  onClick={() => goTo("about")}

                  className="w-full text-left text-gray-500 py-2 px-3 text-sm hover:bg-white/5 rounded-lg"

                >

                  About

                </button>

                <button

                  type="button"

                  onClick={() => goTo("packages")}

                  className="w-full text-left text-gray-500 py-2 px-3 text-sm hover:bg-white/5 rounded-lg"

                >

                  Packages

                </button>

                <button

                  type="button"

                  onClick={() => goTo("payment")}

                  className="w-full text-left text-gray-500 py-2 px-3 text-sm hover:bg-white/5 rounded-lg"

                >

                  Payment

                </button>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>

  );

};



const Chevron = ({ open }: { open: boolean }) => (

  <svg

    className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}

    fill="none"

    viewBox="0 0 24 24"

    stroke="currentColor"

  >

    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

  </svg>

);



const ServicesDropdown = ({ onNavigate }: { onNavigate: () => void }) => (

  <motion.div

    initial={{ opacity: 0, y: 8 }}

    animate={{ opacity: 1, y: 0 }}

    exit={{ opacity: 0, y: 8 }}

    className="absolute top-full left-0 mt-2 w-[min(100vw-2rem,42rem)] rounded-xl border border-white/10 bg-[#0c1222] shadow-2xl overflow-hidden"

  >

    <div className="grid sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/5">

      {servicesNavGroups.map((group) => (

        <div key={group.title} className="p-4">

          <p className="text-emerald-400/90 text-[10px] font-bold uppercase tracking-wider mb-3">

            {group.title}

          </p>

          <ul className="space-y-1">

            {group.links.map((link) => (

              <li key={link.href + link.label}>

                <Link

                  to={link.href}

                  onClick={onNavigate}

                  className="block px-2 py-1.5 rounded-lg text-sm text-gray-300 hover:bg-white/5 hover:text-emerald-400"

                >

                  {link.label}

                  {link.note && (

                    <span className="block text-[10px] text-gray-600 mt-0.5">{link.note}</span>

                  )}

                </Link>

              </li>

            ))}

          </ul>

        </div>

      ))}

    </div>

    <div className="flex flex-wrap gap-2 px-4 py-3 border-t border-white/5 bg-[#080d18]/80">

      <Link

        to="/trading#packages"

        onClick={onNavigate}

        className="text-xs text-gray-400 hover:text-emerald-400 px-2 py-1"

      >

        Packages →

      </Link>

      <Link

        to="/trading#quote"

        onClick={onNavigate}

        className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 px-2 py-1"

      >

        Get quote →

      </Link>

    </div>

  </motion.div>

);



export default TradeShieldNav;

