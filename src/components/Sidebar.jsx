import React, { useState } from "react";
import { motion } from "framer-motion";
import MyAvtar from "/assets/images/my-avatar.png";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false); // Track if sidebar is open or closed

  // Function to toggle sidebar visibility
  const toggleSidebar = () => setIsActive(!isActive);

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/praveen219/",
      icon: <i className="fa-brands fa-linkedin"></i>,
      className: "text-blue-400",
    },
    {
      name: "GitHub",
      href: "https://github.com/praveen00219",
      icon: <i className="fa-brands fa-github"></i>,
      className: "text-white",
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
      className: "text-red-500",
    },
  ];

  return (
    <aside className={`sidebar ${isActive ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={MyAvtar} alt="Praveen" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Praveen
          </h1>
          <p className="title">Full Stack Web Developer</p>
        </div>
        <button
          onClick={toggleSidebar}
          className="info_more-btn"
          data-sidebar-btn
        >
          <span>Show Contacts</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
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
        <a
          href="https://drive.google.com/file/d/12udNf6WwrU6VfsF8kckHjqM-MwZarMcF/view?usp=sharing"
          download="Praveen_Resume.pdf"
          target="_blank"
          className="flex gap-8 items-center text-xs bg-green-500 text-white px-3 py-2 mt-6 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
        >
          <span>Download Resume</span>
          <span className="text-black">
            <i className="fa-solid fa-arrow-down"></i>
          </span>
        </a>

        {/* <!-- Social-List --> */}
        <div className="separator"></div>
        <ul className="social-list">
          <li className="text-white text-md">Follow:</li>

          {socialLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`social-item ${link.className || ""}`}
            >
              <a
                href={link.href}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon ? (
                  link.icon
                ) : (
                  <img
                    src={link.image}
                    className="w-5"
                    alt={`${link.name}-icon`}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
