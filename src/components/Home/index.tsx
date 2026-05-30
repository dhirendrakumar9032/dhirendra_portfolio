import { Button, Image, message } from "antd";
import { motion } from "framer-motion";
import { VscCallOutgoing } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { heroImpactStats, seniorSignals, socialMediaLinks } from "../../utils/data";
import IconWrapper from "../../utils/IconWrapper";
import heroLogo from "../../resources/icons/front-icon.svg";
import resume from '../../resources/dhirendra_kumar_resume.pdf'
import "./index.scss";
import { IoMdDownload } from "react-icons/io";

const orbitStats = ["React", "TypeScript", "AG-Grid", "D3", "SaaS"];
const particleBursts = Array.from({ length: 18 }, (_, index) => index);
const prioritySocialLinks = socialMediaLinks.slice(0, 2).map((item, index) => ({
  ...item,
  label: index === 0 ? "LinkedIn" : "GitHub",
}));

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'dhirendra-kumar-resume.pdf';
    link.click();
    message.success('Resume Downloaded Successfully!', 3)
  };

  return (
    <div className="hero-container" id="home">
      <div className="motion-field" aria-hidden="true">
        <span className="moving-circle circle-one"></span>
        <span className="moving-circle circle-two"></span>
        <span className="moving-circle circle-three"></span>
        {particleBursts.map((item) => (
          <span className={`burst-particle particle-${item + 1}`} key={item}></span>
        ))}
      </div>
      <section className="hero">
        <div className="hero-greeting">
          Senior Frontend Engineer / React Architecture
        </div>
        <h1 className="hero-name">Dhirendra Kumar</h1>
        <div className="hero-title">
          I build fast, scalable product interfaces that make complex systems feel simple.
        </div>
        <div className="hero-subtitle">
          Frontend specialist with 4+ years across fintech and enterprise SaaS,
          known for React/TypeScript architecture, data-heavy dashboards,
          reusable UI systems, performance work, and strong end-to-end ownership.
        </div>
        <div className="hero-senior-signals">
          {seniorSignals.map((signal) => (
            <span className="signal-chip" key={signal}>
              {signal}
            </span>
          ))}
        </div>
        <div className="hero-impact-grid">
          {heroImpactStats.map((item) => (
            <div className="impact-card" key={item.label}>
              <span className="impact-value">{item.value}</span>
              <span className="impact-label">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="can-connect-on">
          <div className="recruiter-actions">
            <div className="primary-action-buttons">
              <Button type="primary" onClick={handleDownload}>
                <IoMdDownload style={{ height: "20px", width: "20px" }}/> Resume
              </Button>
            </div>
            <div className="direct-links">
              <a className="visible-phone" href="tel:+918604390422">
                <VscCallOutgoing /> +91 8604390422
              </a>
              <a href="mailto:dhirendra9032@gmail.com">
                <TfiEmail /> dhirendra9032@gmail.com
              </a>
            </div>
          </div>
          <div className="social-media-link">
            {prioritySocialLinks.map(({ link, logo, label }, index) => (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="links"
                initial={{ y: 5, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ y: -5, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <IconWrapper icon={logo} />
                <span>{label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
      <section className="hero-image-container">
        <div className="visual-shell">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="orbit orbit-three"></div>
          <div className="hero-image-card">
            <Image src={heroLogo} preview={false} />
          </div>
          {orbitStats.map((item, index) => (
            <span className={`orbit-label orbit-label-${index + 1}`} key={item}>
              {item}
            </span>
          ))}
          <div className="availability-card">
            <span className="status-dot"></span>
            Available for Senior Frontend roles
          </div>
        </div>
      </section>
    </div>
  );
};

export { Home };
