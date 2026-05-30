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
        <button
          className="nav-control"
          type="button"
          onClick={handleModes}
          aria-label={isLightsEnabled ? "Switch to dark mode" : "Switch to light mode"}
          title={isLightsEnabled ? "Dark mode" : "Light mode"}
        >
          {isLightsEnabled ? (
            <img className="mode-btn" src={moon} alt="" />
          ) : (
            <img className="mode-btn" src={sun} alt="" />
          )}
        </button>
        <button
          className="nav-control menu-control"
          type="button"
          onClick={toggleNav}
          aria-label={isNavVisible ? "Close navigation" : "Open navigation"}
          title={isNavVisible ? "Close menu" : "Open menu"}
        >
          {isNavVisible ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
