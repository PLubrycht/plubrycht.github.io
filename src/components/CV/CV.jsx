// src/components/CV/CV.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CV.css";

const CV = () => {
  return (
    <div className="cv-container">
      <h1>Paweł Lubrycht</h1>
      <p>Front-end Developer | Gdynia, Poland</p>
      <p><a href="mailto:plubrycht@gmail.com">plubrycht@gmail.com</a> | +48 509 729 884</p>

      <section>
        <h2>01 PROFILE</h2>
        <p>
          Front-end developer with experience in building modern, visually engaging websites for
          the creative industry...
        </p>
      </section>

      <section>
        <h2>02 EMPLOYMENT HISTORY</h2>
        <ul>
          <li><strong>2024 – Present:</strong> Front-end Developer at 3DFB</li>
          <li><strong>2024 – Present:</strong> Web Developer at easevisuell.com</li>
        </ul>
      </section>

      <section>
        <h2>03 EDUCATION</h2>
        <ul>
          <li>Maritime University of Gdynia – Master & Bachelor</li>
          <li>University of Dubrovnik – Erasmus (Economics)</li>
        </ul>
      </section>

      <section>
        <h2>04 SKILLS</h2>
        <p>React, JavaScript, Webflow, CSS, Node.js, Git, Responsive Design</p>
      </section>

      <section>
        <h2>05 COURSES</h2>
        <p>Future Collars: JavaScript, React, HTML & CSS (2024)</p>
      </section>

      <section>
        <h2>06 LANGUAGES</h2>
        <p>Polish (native), English, Spanish, Italian</p>
      </section>

      <footer className="cv-footer">
        <p>
          🔗 <a href="https://github.com/PLubrycht" target="_blank" rel="noreferrer">GitHub</a>
        </p>
        <p>
          📂 <Link to="/projects">See My Projects</Link>
        </p>
      </footer>
    </div>
  );
};

export default CV;
