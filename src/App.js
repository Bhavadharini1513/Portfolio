import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/global.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <Sidebar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
