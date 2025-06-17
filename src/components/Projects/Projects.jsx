// src/components/Projects/Projects.jsx
import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Currency Converter</h3>
        <p>React + NBP API. Converts currencies to PLN. Clean interface and responsive layout.</p>
        <a href="https://github.com/PLubrycht/currency-converter" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>

      <div className="project">
        <h3>EaseVisuell.com</h3>
        <p>Webflow-based artist portfolio with custom animations and layout logic.</p>
        <a href="https://easevisuell.com" target="_blank" rel="noopener noreferrer">Visit site</a>
      </div>
    </div>
  );
};

export default Projects;
