import React, { useState } from "react";
import { Link } from "gatsby";
import {
  projectCard,
  hovered,
  coverImage,
  content,
  hoverContent, // Change this class name to hover-content
  hoverButton,
} from "./ProjectCard.module.css";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

const handleMouseEnter = () => {
    setIsHovered(true);
    const image = document.querySelector(`.${coverImage} img`);
    image.style.transform = "scale(1.2)";
    image.style.filter = "blur(1.5rem) brightness(80%)";
};

  const handleMouseLeave = () => {
    setIsHovered(false);
    const image = document.querySelector(`.${coverImage} img`);
    image.style.transform = "scale(1.0)";
    image.style.filter = "blur(0) brightness(100%)";
  };

  return (
    <div
      className={`${projectCard} ${isHovered ? hovered : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={coverImage}>
        <img src={project.coverImage} alt={project.title} />
        <div className={`${hoverContent} ${isHovered ? "visible" : ""}`}>
          {/* Title, excerpt, and button */}
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={`/projects/${project.slug}`}>
            <button className={hoverButton}>View Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;