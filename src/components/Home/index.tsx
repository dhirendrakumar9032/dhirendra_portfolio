import { Button, Image, message } from "antd";
import { motion } from "framer-motion";
import { VscCallOutgoing } from "react-icons/vsc";
import { TfiEmail } from "react-icons/tfi";
import { heroImpactStats, seniorSignals, socialMediaLinks } from "../../utils/data";
import IconWrapper from "../../utils/IconWrapper";
import heroLogo from "../../resources/icons/front-icon.svg";
import resume from '../../resources/dhirendra_kumar_resume.pdf'
import "./index.scss";
import { Link } from "react-scroll";
import { IoMdDownload } from "react-icons/io";


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
      <section className="hero">
        <div className="hero-greeting">
          <span className="wave">👋</span> Hello, I am
        </div>
        <div className="hero-name separate-color">Dhirendra Kumar</div>
        <div className="hero-title">
          Senior <span className="separate-color">Frontend Developer</span>
        </div>
        <div className="hero-subtitle">
          I build scalable React and TypeScript products for fintech and
          enterprise SaaS, with strong ownership in architecture, reusable UI
          systems, performance optimization, and cross-functional delivery.
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
        <div className="social-media-link">
          {socialMediaLinks.map(({ link, logo }, index) => (
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
            </motion.a>
          ))}
        </div>
        <div className="can-connect-on">
          <div className="email">
            <TfiEmail /> dhirendra9032@gmail.com
          </div>
          <div className="email">
            <VscCallOutgoing />
            +91 8604390422
          </div>
          <div className="download-btn">
            <Link to="contact" smooth={true} duration={500}>
              <Button type="primary">
                Let's Talk
              </Button>
            </Link>
            <Button type="primary" onClick={handleDownload}>
              <IoMdDownload style={{ height: "20px", width: "20px" }}/> Resume
            </Button>
          </div>
        </div>
      </section>
      <section className="hero-image-container">
        <Image src={heroLogo} preview={false} />
      </section>
    </div>
  );
};

export { Home };
