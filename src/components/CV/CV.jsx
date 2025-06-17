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
  <h2>Skills</h2>
  <div className="skills-columns">
    <ul>
      <li>HTML & CSS</li>
      <li>HTML5</li>
      <li>JavaScript</li>
      <li>React</li>
    </ul>
    <ul>
      <li>Webflow</li>
      <li>CSS/JS animations</li>
      <li>Responsive Design</li>
      <li>Git</li>
    </ul>
  </div>
</section>

      <section>
  <h2>Courses</h2>
  <ul className="courses-list">
    <li>JavaScript – Future Collars, 2024</li>
    <li>React – Future Collars, 2024</li>
    <li>HTML & CSS – Future Collars, 2024</li>
  </ul>
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
