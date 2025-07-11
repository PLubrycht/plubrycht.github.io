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
      <p>
          🔗 <a href="https://github.com/PLubrycht" target="_blank" rel="noreferrer">GitHub  https://github.com/PLubrycht </a>
        </p>
        <p>
          📂 <Link to="/projects">See My Projects</Link>
        </p>

      <section>
        <h2>01 PROFILE</h2>
        <p>
          Front-end developer with experience in building modern, visually engaging websites for the
creative industry. I specialize in React, JavaScript, HTML, CSS, and Webflow. I work closely
with designers to deliver custom, responsive solutions, combining aesthetics and technical
functionality. Proven track record in freelance projects, collaborative development, and
technical support.
        </p>
      </section>

      <section>
        <h2>02 EMPLOYMENT HISTORY</h2>
        <ul>
          <li><strong>2024 – Present: Front-end Developer at 3DFB</strong>
          <ul>
            <li>- Developed websites for the creative and fashion industries</li>
            <li>- Used Webflow with custom JavaScript</li>
            <li>- Collaborated with a UX/UI designer on interactive interfaces</li>
            </ul>
            </li>
          <li><strong>2024 – Present: Web Developer at easevisuell.com</strong>
          <ul>
            <li>- Built and maintained the artist's portfolio website</li>
            <li>- Used Webflow and custom scripts for animations and layout behavior</li>
            <li>- Ongoing technical support and updates</li>
          </ul>
          </li>
          <li><strong>2020 — 2022  Freight Forwarding Assistant at C.Hartwig Gdynia</strong>
          <ul>
            <li>- Managed customer communication and transport logistics
              
            </li>
          </ul>
          </li>
          <li><strong>2016 — 2020 Intern at Coca-Cola HBC / VGL / C.Hartwig </strong>
          <ul>
            <li>- Logistics, warehouse coordination, and transport planning</li>
          </ul>
          </li>
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
        <p>Polish - Native </p>
        <p>English - C2 </p>
        <p>Spanish - A2 </p>
        <p>Italian - A2 </p>
        <p>Croatian - A2 </p>
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
