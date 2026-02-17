import React from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          const isProjects = item.id === "projects";
          return (
            <li key={item.id} className="navbar-item relative">
              <motion.button
                className={`navbar-link ${isActive ? "active" : ""}`}
                onClick={() => setActivePage(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {item.label}
              </motion.button>
              {isActive && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 rounded-full bg-[hsl(173,58%,39%)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {isProjects && (
                <div className="absolute top-1 right-0 text-[22px] leading-none font-bold select-none pointer-events-none hidden md:block text-[hsl(173,58%,39%)]">
                  •
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
