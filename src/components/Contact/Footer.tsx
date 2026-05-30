import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import "./index.scss";
import { socialMediaLinks } from "../../utils/data";
import IconWrapper from "../../utils/IconWrapper";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">DK</span>
          <div>
            <h3>Dhirendra Kumar</h3>
            <p>Senior Frontend Developer crafting scalable React products.</p>
          </div>
        </div>

        <div className="footer-contact-list">
          <a className="footer-contact-item" href="mailto:dhirendra9032@gmail.com">
            <Mail />
            <span>dhirendra9032@gmail.com</span>
          </a>
          <a className="footer-contact-item" href="tel:+918604390422">
            <Phone />
            <span>+91 8604390422</span>
          </a>
          <span className="footer-contact-item">
            <MapPin />
            <span>Lucknow, India</span>
          </span>
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
      </div>
      <div className="footer-rights">
        <p>© {currentYear} Dhirendra Kumar. All rights reserved.</p>
        <span>Built with React, TypeScript, and focused frontend craft.</span>
      </div>
    </footer>
  );
};

export default Footer;
