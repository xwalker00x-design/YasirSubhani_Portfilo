import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import {
  Navbar,
  Footer,
  FloatingButtons,
  CustomCursor,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  Gear,
  AboutPage,
  ProjectsPage,
  OtherPursuits,
  BeyondCode,
  TradeShieldHome,
  TradingToolsHub,
  PlatformToolsPage,
  TradeShieldLegalPage,
  MetaTraderServicePage,
  TradingViewServicePage,
  Music,
  Photography,
  Github,
} from "./components";
import AiAssistant from "./components/ai/AiAssistant";
import AdminApp from "./components/admin/AdminApp";
import { isAdminApp } from "./utils/host";

function PublicAppContent() {
  const location = useLocation();
  const isTradingRoute = location.pathname.startsWith("/trading");

  return (
    <>
      {!isTradingRoute && <CustomCursor />}
      {!isTradingRoute && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <section id="home">
                  <Hero />
                </section>
              </div>
              <section id="about">
                <About />
              </section>
              <section id="work">
                <Experience />
              </section>
              <section id="skills">
                <Tech />
              </section>
              <section id="projects">
                <Works />
                <Github />
              </section>
              <section id="feedbacks">
                <Feedbacks />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/resume" element={<Navigate to="/" replace />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/pursuits" element={<OtherPursuits />} />
        <Route path="/beyond-code" element={<BeyondCode />} />
          <Route path="/trading" element={<TradeShieldHome />} />
          <Route path="/trading/privacy" element={<TradeShieldLegalPage type="privacy" />} />
          <Route path="/trading/terms" element={<TradeShieldLegalPage type="terms" />} />
          <Route path="/trading/tools" element={<TradingToolsHub />} />
          <Route path="/trading/tools/:platform" element={<PlatformToolsPage />} />
          <Route path="/trading/services/metatrader" element={<MetaTraderServicePage />} />
          <Route path="/trading/services/tradingview" element={<TradingViewServicePage />} />
        <Route path="/trading-finance" element={<Navigate to="/trading" replace />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
      {!isTradingRoute && <Footer />}
      {!isTradingRoute && <FloatingButtons />}
      {!isTradingRoute && <AiAssistant />}
    </>
  );
}

function PublicApp() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <PublicAppContent />
      </div>
    </BrowserRouter>
  );
}

function App() {
  if (isAdminApp()) {
    return <AdminApp />;
  }
  return <PublicApp />;
}

export default App;
