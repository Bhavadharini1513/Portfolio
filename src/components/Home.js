import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <section id="home" className="home-section">
      <div className="text">
        <h1 className="nameb">
          Hi, I'm <span className="highlight">Bhavadharini S</span> !
        </h1>
        <h2 className="dev">Frontend Developer</h2>
        <p className="txt">
          I create responsive and visually appealing websites using HTML, CSS,
          JavaScript and React.
        </p>
        <a href="#contact" className="btn">
          Contact Me
        </a>
      </div>
      <div className="big-letter">
        <img src="img/Bpic.jpg" alt="b" className="Bpic"></img>
      </div>
    </section>
  );
}
