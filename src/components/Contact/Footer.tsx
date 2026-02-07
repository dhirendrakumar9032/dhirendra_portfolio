import React from "react";
import { VscCallOutgoing } from "react-icons/vsc";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { motion } from "framer-motion";
import "./index.scss";
import { socialMediaLinks } from "../../utils/data";
import IconWrapper from "../../utils/IconWrapper";

type Props = {};

const Footer = (props: Props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <p className="address">
            <IoLocationOutline /> Lucknow, Uttar Pradesh, India | Hyderabad,
            Telangana
          </p>
          <p className="phone">
            <VscCallOutgoing /> +91 8604390422
          </p>
          <p className="email">
            <TfiEmail /> dhirendra9032@gmail.com
          </p>
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
        <p>© {currentYear} by Dhirendra Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
