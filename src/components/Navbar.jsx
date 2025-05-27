import React from "react";

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "about" ? "active" : ""}`}
            onClick={() => setActivePage("about")}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "education" ? "active" : ""}`}
            onClick={() => setActivePage("education")}
          >
            Education
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "experience" ? "active" : ""}`}
            onClick={() => setActivePage("experience")}
          >
            Experience
          </button>
        </li>
        <li className="navbar-item relative">
          <button
            className={`navbar-link 
              ${activePage === "projects" ? "active" : ""}`}
            onClick={() => setActivePage("projects")}
          >
            Projects
          </button>
          {/* Dot Indicator */}
          <div className="absolute top-1 right-0 text-red-600 text-[26px] leading-none font-bold select-none pointer-events-none hidden md:block">
            •
          </div>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "certificates" ? "active" : ""}`}
            onClick={() => setActivePage("certificates")}
          >
            Certificates
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link 
              ${activePage === "contact" ? "active" : ""}`}
            onClick={() => setActivePage("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
