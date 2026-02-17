import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";
import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import TestimonialsModal from "./components/TestimonialsModal.jsx";
import ContactForm from "./components/ContactForm";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const pageTransition = { type: "tween", duration: 0.25, ease: [0.23, 1, 0.32, 1] };

function App() {
  const [activePage, setActivePage] = useState("about");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    avatar: "",
    name: "",
    date: "",
    text: "",
  });

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      <main className="min-h-screen">
        <Sidebar />
        <div className="main-content perspective-1000">
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          <AnimatePresence mode="wait">
            {activePage === "about" && (
              <motion.div
                key="about"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <About onOpenModal={openModal} />
              </motion.div>
            )}
            {activePage === "education" && (
              <motion.div
                key="education"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Education />
              </motion.div>
            )}
            {activePage === "experience" && (
              <motion.div
                key="experience"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Experience />
              </motion.div>
            )}
            {activePage === "projects" && (
              <motion.div
                key="projects"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Projects />
              </motion.div>
            )}
            {activePage === "certificates" && (
              <motion.div
                key="certificates"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <Certificates onOpenModal={openModal} />
              </motion.div>
            )}
            {activePage === "contact" && (
              <motion.div
                key="contact"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={pageTransition}
              >
                <ContactForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <TestimonialsModal
          isOpen={modalOpen}
          onClose={closeModal}
          content={modalContent}
        />
      </main>
    </div>
  );
}

export default App;
