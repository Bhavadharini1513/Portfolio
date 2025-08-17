import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        {/* Left Side - Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Aspiring <strong>Frontend developer</strong> with a strong
            foundation in HTML, CSS, and JavaScript, dedicated to creating
            engaging and user-friendly digital experiences. Highly motivated
            self-starter with a passion for continuous learning,
            problem-solving, and creative expression through drawings.
          </p>
          <p>
            Eager to contribute to a dynamic team while building a solid
            foundation in development and delivering impactful solutions.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="about-image">
          <img src="img/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default About;
