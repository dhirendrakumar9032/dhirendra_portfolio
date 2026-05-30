import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './global.scss'

interface NavigationContextState {
  isNavVisible: boolean;
  toggleNav: () => void;
  isLightsEnabled?: boolean;
  handleModes?:()=>void;
}

const defaultState: NavigationContextState = {
  isNavVisible: false,
  toggleNav: () => {},
  isLightsEnabled:true,
  handleModes:() =>{}
};

export const NavigationContext =
  createContext<NavigationContextState>(defaultState);

const App = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isLightsEnabled, setLightsEnabled] = useState(true);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const handleModes=()=>{
    setLightsEnabled(!isLightsEnabled)
  }

  return (
    <NavigationContext.Provider value={{ isNavVisible, toggleNav,isLightsEnabled, handleModes }}>
      <Navbar />
      <div className={`app ${isLightsEnabled? 'light-mode':'dark-mode'}`} >
        <Home />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
        <Navigation />
      </div>
    </NavigationContext.Provider>
  );
};

export default App;
