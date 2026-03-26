import React, { useContext, useEffect } from "react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { NavigationContext } from "../../App";
import logo from "../../resources/icons/logo.png";
import sun from "../../resources/icons/sun.png";
import moon from "../../resources/icons/moon.png";
import "./index.scss";

const Navbar = () => {
  const { toggleNav, isNavVisible, isLightsEnabled, handleModes } =
    useContext(NavigationContext);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 100) {
        navbar?.classList.add("scrolled");
        return;
      }
      navbar?.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className="navbar">
      <div className="name">
        <img className="logo" src={logo} alt="logo" />
        <span>Senior Frontend Portfolio</span>
      </div>
      <div className="left-nav-container">
        {isLightsEnabled?<img className="mode-btn"  src={moon} alt="sun" onClick={handleModes} />:<img src={sun} alt="moon" onClick={handleModes}/>}
        {isNavVisible ? (
          <CloseOutlined className="hamburg" onClick={toggleNav} />
        ) : (
          <MenuOutlined className="hamburg" onClick={toggleNav} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
