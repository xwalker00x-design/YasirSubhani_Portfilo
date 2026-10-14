import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    // Navigate to the separate About page
    navigate('/about');
  };

  return (
    <>
      <Header useMotion={true} {...config.sections.about} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div
          className="relative p-8 rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, rgba(18,18,35,0.95) 0%, rgba(12,12,22,0.98) 100%)',
            border: '1px solid rgba(145,94,255,0.2)',
            boxShadow: '0 0 40px rgba(145,94,255,0.08), inset 0 0 60px rgba(0,0,0,0.3)',
          }}
        >
          {/* Ambient orbs */}
          <div className="ambient-orb ambient-orb-purple w-48 h-48 -top-12 -left-12" />
          <div className="ambient-orb ambient-orb-blue w-40 h-40 -bottom-10 -right-10" style={{ animationDelay: '3s' }} />
          <div className="ambient-orb ambient-orb-cyan w-32 h-32 top-1/2 left-1/2" style={{ animationDelay: '5s' }} />

          {/* Top shimmer bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(145,94,255,0.6), rgba(59,130,246,0.6), transparent)' }}
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Icon Badge */}
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, #915EFF 0%, #3b82f6 100%)',
                boxShadow: '0 0 20px rgba(145,94,255,0.4)'
              }}
            >
              <span className="text-2xl">🚀</span>
            </div>

            {/* Title */}
            <h2
              className="text-3xl font-bold mb-5"
              style={{
                background: 'linear-gradient(135deg, #ffffff 20%, #c4b5fd 60%, #93c5fd 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              What I actually do
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-400 leading-relaxed text-[15px] sm:text-[16px]">
              <p>
                Hi, I'm <span className="text-white font-semibold">Yasir Subhani</span>, a{" "}
                <span className="text-[#a78bfa] font-medium">full-stack developer</span> who takes a product
                from idea to something people can open — web, Flutter mobile, and the backend that holds it together.
              </p>
              <p>
                <span className="text-[#60a5fa] font-medium">6+ years</span> in production work. Right now I
                build <span className="text-white">Pull SaaS</span> for RealtorOne, including the broker app on
                Google Play. I use AI to ship faster. Clients still get reviewed, working software.
              </p>
            </div>

            {/* Read More Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReadMore}
              className="mt-8 inline-flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-xl transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #915EFF 0%, #5b21b6 100%)',
                boxShadow: '0 0 20px rgba(145,94,255,0.3)'
              }}
            >
              Read More About Me
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
