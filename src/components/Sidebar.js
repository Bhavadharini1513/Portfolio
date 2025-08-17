import React from "react";
import "../styles/sidebar.css";
import {
  FaHome,
  FaUser,
  FaCode,
  FaTools,
  FaEnvelope,
} from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img src="img/Bpic.jpg" alt="b" className="imgbar"></img>
      <nav>
        <a href="#home">
          <FaHome />
        </a>
        <a href="#about">
          <FaUser />
        </a>
        <a href="#projects">
          <FaCode />
        </a>
        <a href="#skills">
          <FaTools />
        </a>
        <a href="#contact">
          <FaEnvelope />
        </a>
        
      </nav>
    </div>
  );
}
