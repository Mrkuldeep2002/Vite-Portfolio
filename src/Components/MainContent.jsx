import React, { useState } from "react";
import AboutMe from "./MainContant/AboutMe";
import Resume from "./MainContant/Resume";
import Projects from "./MainContant/Projects";
import Contact from "./MainContant/Contact";


const MainContent = () => {
  // State to track which component is active
  const [activeSection, setActiveSection] = useState("About");
  return (
    <div class="main-content">
      <nav class="navbar">
      <ul className="navbar-list">
          <li className="navbar-item">
            <button
              className={`navbar-link ${
                activeSection === "About" ? "active" : ""
              }`}
              onClick={() => setActiveSection("About")}
            >
              About
            </button>
          </li>

          <li className="navbar-item">
            <button
              className={`navbar-link ${
                activeSection === "Resume" ? "active" : ""
              }`}
              onClick={() => setActiveSection("Resume")}
            >
              Resume
            </button>
          </li>

          <li className="navbar-item">
            <button
              className={`navbar-link ${
                activeSection === "Projects" ? "active" : ""
              }`}
              onClick={() => setActiveSection("Projects")}
            >
              Projects
            </button>
          </li>

          <li className="navbar-item">
            <button
              className={`navbar-link ${
                activeSection === "Contact" ? "active" : ""
              }`}
              onClick={() => setActiveSection("Contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      
      </nav>
      
      <AboutMe isActive={activeSection === "About"} />
      <Resume isActive={activeSection === "Resume"} />
      <Projects isActive={activeSection === "Projects"} />
      <Contact isActive={activeSection === "Contact"} />
    </div>
  )
}

export default MainContent

