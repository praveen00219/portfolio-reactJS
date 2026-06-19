import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MyAvtar from "/assets/images/my-avatar.png";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false); // Track if sidebar is open or closed

  const titles = ["Full Stack Web Developer", "Software Developer"];
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typeSpeed = isDeleting ? 50 : 100;

    const typing = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentTitle.substring(0, prev.length - 1)
          : currentTitle.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(typing);
  }, [text, isDeleting, titleIndex]);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => setIsActive(!isActive);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/praveen219/",
      icon: <i className="fa-brands fa-linkedin"></i>,
      className: "!text-[#0A66C2]",
    },
    {
      name: "GitHub",
      href: "https://github.com/praveen00219",
      icon: <i className="fa-brands fa-github"></i>,
      className: "!text-[hsl(222,47%,8%)]",
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/u/Prvn21/",
      image: "/assets/images/Social-Icon/leetcode-logo.png",
    },
    {
      name: "HackerRank",
      href: "https://www.hackerrank.com/profile/paru2192000",
      image: "/assets/images/Social-Icon/Hackerrank_logo.webp",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pr.vn21/?utm_source=qr&igsh=MTR5OXNpcjdteHpqcQ%3D%3D",
      icon: <ion-icon name="logo-instagram"></ion-icon>,
      className: "!text-[#E4405F]",
    },
  ];

  return (
    <motion.aside
      className={`sidebar ${isActive ? "active" : ""}`}
      data-sidebar
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="sidebar-info relative">
        <motion.figure
          className="avatar-box relative"
          whileHover={{ scale: 1.02, rotateY: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={MyAvtar}
            alt="Praveen"
            width="80"
            className="rounded-full shadow-soft"
          />

          {/* Floating Box 1 - Hidden on small screens */}
          {/* <div className="hidden md:block absolute top-[-15px] left-[0px] bg-gradient-to-r from-blue-300 to-indigo-200 text-xs px-2 py-1 rounded-lg shadow-lg animate-float">
            60+ Live Projects
          </div> */}

          {/* Floating Box 2 - Hidden on small screens */}
          {/* <div className="hidden md:block absolute bottom-[-10px] right-[-20px] bg-gradient-to-r from-purple-200 to-pink-300 text-xs px-2 py-1 rounded-lg shadow-lg animate-float-delayed">
            15+ Technologies
            250+ Problems Solved
          </div> */}
        </motion.figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Praveen
          </h1>

          <div className="text-[16px] font-semibold text-center h-10">
            <motion.p
              className="rounded-lg py-1 px-2 gradient-bg min-w-52 flex justify-center text-center text-[hsl(222,47%,8%)]"
              animate={{ opacity: [1, 0.92, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              {text}
              <span className="blinking-cursor text-brand">|</span>
            </motion.p>
          </div>
        </div>

        <motion.button
          onClick={toggleSidebar}
          className="info_more-btn"
          data-sidebar-btn
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </motion.button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:praveen2192000@gmail.com"
                className="contact-link"
              >
                praveen2192000@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+91-7297952644" className="contact-link">
                +91-7297952644
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Rajasthan, India</address>
            </div>
          </li>
        </ul>

        {/* <!-- Resume download button -->
        <!-- href="YOUR_RESUME_LINK_HERE": Replace this with the direct link to your resume file. -->
        <!-- download="YourName_Resume.pdf": Specifies the name of the file that will be downloaded.  --> */}
        <motion.a
          href="https://drive.google.com/file/d/196ye7ZdyAu_sCSuo_80F-HuHh9XfY0dT/view?usp=sharing"
          download="Praveen-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-8 items-center text-xs text-white px-3 py-2 mt-6 rounded-lg shadow-soft focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-300"
          style={{ background: "linear-gradient(135deg, hsl(173,58%,39%), hsl(199,89%,48%))" }}
          whileHover={{ scale: 1.02, boxShadow: "0 8px 20px -4px rgba(13,148,136,0.35)" }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Download Resume</span>
          <span>
            <i className="fa-solid fa-arrow-down"></i>
          </span>
        </motion.a>

        {/* <!-- Social-List --> */}
        <div className="separator"></div>
        <ul className="social-list">
          <li className="text-[hsl(222,47%,8%)] text-sm font-medium">Follow:</li>

          {socialLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="social-item"
            >
              <a
                href={link.href}
                className={`social-link ${link.className || "text-[hsl(222,47%,8%)]"}`}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                aria-label={link.name}
              >
                {link.icon ? (
                  link.icon
                ) : (
                  <img
                    src={link.image}
                    className="w-6 h-6 object-contain"
                    alt={`${link.name}-icon`}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
