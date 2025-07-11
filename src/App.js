// src/App.js
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import CV from "./components/CV/CV";
import Projects from "./components/Projects/Projects";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
