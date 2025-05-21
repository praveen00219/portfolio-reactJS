import React, { useState } from "react";
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

function App() {
  const [activePage, setActivePage] = useState("about"); // State to manage current page
  const [modalOpen, setModalOpen] = useState(false); // State to track modal visibility
  const [modalContent, setModalContent] = useState({
    avatar: "",
    name: "",
    date: "",
    text: "",
  }); // State to store modal content

  // Function to open modal with specific content
  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => setModalOpen(false);

  return (
    <div className="App">
      <main>
        {/* <Hero /> */}
        <Sidebar />
        <div className="main-content">
          <Navbar activePage={activePage} setActivePage={setActivePage} />
          {activePage === "about" && <About onOpenModal={openModal} />}
          {activePage === "education" && <Education />}
          {activePage === "experience" && <Experience />}
          {activePage === "projects" && <Projects />}
          {activePage === "certificates" && (
            <Certificates onOpenModal={openModal} />
          )}
          {activePage === "contact" && <ContactForm />}
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
