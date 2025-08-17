import React from "react";
import "../styles/skills.css";

const skills = [
  { name: "HTML", icon: "/img/html.png" },
  { name: "CSS", icon: "/img/css.jpeg" },
  { name: "JavaScript", icon: "/img/js.png" },
  { name: "React", icon: "/img/react.png" },
  { name: "Java", icon: "/img/java.png" },
  { name: "Python", icon: "/img/python.jpeg" },
  { name: "Git", icon: "/img/git.png" },
  { name: "GitHub", icon: "/img/github.png" },
  { name: "SQL", icon: "/img/sql.jpeg" },
];

const certificates = [
  { name: "Responsive Web Design", image: "/img/cert3.jpg" },
  { name: "Javascript Essential", image: "/img/cert2.jpg" },
  { name: "OPPs in Java", image: "/img/cert1.jpg" },
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>

      <h2 className="skills-title">Certificates</h2>
      <div className="skills-grid">
        {certificates.map((cert, index) => (
          <div className="skill-card1" key={index}>
            <img className="skill-card1" src={cert.image} alt={cert.name} />
            <h3>{cert.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
