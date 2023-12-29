import React, { useContext } from "react";
import {
  HomeOutlined,
  UserOutlined,
  HeartOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { NavigationContext } from "../../App";
import {Link} from 'react-scroll';
import { BiSolidContact } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";

const Navigation = () => {
  const { isNavVisible } = useContext(NavigationContext);

  const navItems = [
    { id: "home", icon: <Link to="home" smooth={true} duration={500}><FaHome /></Link> },
    { id: "about", icon: <Link to="about" smooth={true} duration={500}><IoPersonSharp /></Link> },
    { id: "skills", icon: <Link to="skills" smooth={true} duration={500}><FaTools /></Link> },
    { id: "projects", icon: <Link to="projects" smooth={true} duration={500}><RiComputerFill /></Link> },
    { id: "contact", icon: <Link to="contact" smooth={true} duration={500}><BiSolidContact /></Link> },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={` ${
        isNavVisible ? "navigation-container" : "navigation-container-hide"
      }`}
    >
      <div className="navigation-bar">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="nav-item"
            onClick={() => scrollToSection(item.id)}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
