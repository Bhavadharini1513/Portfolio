import React from "react";
import "../styles/projects.css";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and custom CSS.",
    tech: "React, CSS",
    link: "#",
    image: "/img/portfolio.jpg",
  },
  {
    title: "Note App",
    description:
      "Built an interactive app to create/delete notes with a clean, responsive UI.",
    tech: "HTML, CSS, JavaScript",
    link: "https://bhavadharini1513.github.io/Notes_app/",
    image: "/img/note.jpg",
  },
  {
    title: "Music Website",
    description:
      "Built a responsive static site with playlists, song details, and modern styling.",
    tech: "HTML, CSS",
    link: "https://bhavadharini1513.github.io/Music_app/",
    image: "/img/music.jpg",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
