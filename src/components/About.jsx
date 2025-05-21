import React from "react";
import { motion } from "framer-motion";

// frontend skill tool assets
import html from "/assets/images/tools/html.webp";
import css from "/assets/images/tools/css.svg";
import java from "/assets/images/tools/Java.png";
import javascript from "/assets/images/tools/JS.webp";
import tailwindCSS from "/assets/images/tools/Tailwindcss.png";
import bootstrap from "/assets/images/tools/Bootstrap.png";
import reactjs from "/assets/images/tools/ReactJS.webp";
import materialUI from "/assets/images/tools/MaterialUI.png";
import redux from "/assets/images/tools/Redux.png";
import sass from "/assets/images/tools/Sass.png";
import firebase from "/assets/images/tools/firebase.png";

// Backend skill tool assets
import nodejs from "/assets/images/tools/NodeJS.png";
import expressjs from "/assets/images/tools/ExpressJS.webp";
import mongodb from "/assets/images/tools/MongoDB.svg";
import cloudinary from "/assets/images/tools/cloudinary-icon.png";
import postman from "/assets/images/tools/postman.svg";

// full stack and other assets tool
import git from "/assets/images/tools/Git_icon.png";
import gitHub from "/assets/images/tools/gitHub.png";
import vsCode from "/assets/images/tools/Visual_Studio_Code.png";
import bitBucket from "/assets/images/tools/BitBucket.png";
import aws from "/assets/images/tools/AWS.png";
import docker from "/assets/images/tools/Docker.png";

const About = ({ onOpenModal }) => {
  const frontendSkills = [
    {
      title: "HTML",
      logo: html,
    },
    {
      title: "CSS",
      logo: css,
    },
    {
      title: "Java",
      logo: java,
    },
    {
      title: "Javascript",
      logo: javascript,
    },
    {
      title: "Tailwind CSS",
      logo: tailwindCSS,
    },
    {
      title: "Bootstrap",
      logo: bootstrap,
    },
    {
      title: "ReactJs",
      logo: reactjs,
    },
    {
      title: "Redux",
      logo: redux,
    },
    {
      title: "Material UI",
      logo: materialUI,
    },
    {
      title: "Sass",
      logo: sass,
    },
    {
      title: "Firebase",
      logo: firebase,
    },
  ];

  const backendSkills = [
    {
      title: "Nodejs",
      logo: nodejs,
    },
    {
      title: "Expressjs",
      logo: expressjs,
    },
    {
      title: "Mongodb",
      logo: mongodb,
    },
    {
      title: "Firebase",
      logo: firebase,
    },
    {
      title: "Cloudinary",
      logo: cloudinary,
    },
    {
      title: "Postman",
      logo: postman,
    },
  ];

  const fullStackSill = [
    {
      title: "Git",
      logo: git,
    },
    {
      title: "GitHub",
      logo: gitHub,
    },
    {
      title: "VS Code",
      logo: vsCode,
    },
    {
      title: "BitBucket",
      logo: bitBucket,
    },
    {
      title: "AWS",
      logo: aws,
    },
    {
      title: "Docker",
      logo: docker,
    },
    {
      title: "HTML",
      logo: html,
    },
    {
      title: "CSS",
      logo: css,
    },
    {
      title: "Java",
      logo: java,
    },
    {
      title: "Javascript",
      logo: javascript,
    },
    {
      title: "Tailwind CSS",
      logo: tailwindCSS,
    },
    {
      title: "Bootstrap",
      logo: bootstrap,
    },
    {
      title: "ReactJs",
      logo: reactjs,
    },
    {
      title: "Redux",
      logo: redux,
    },
    {
      title: "Material UI",
      logo: materialUI,
    },
    {
      title: "Sass",
      logo: sass,
    },
    {
      title: "Firebase",
      logo: firebase,
    },
    {
      title: "Nodejs",
      logo: nodejs,
    },
    {
      title: "Expressjs",
      logo: expressjs,
    },
    {
      title: "Mongodb",
      logo: mongodb,
    },
    {
      title: "Firebase",
      logo: firebase,
    },
    {
      title: "Cloudinary",
      logo: cloudinary,
    },
    {
      title: "Postman",
      logo: postman,
    },
  ];

  const projects = [
    {
      name: "LinkedIn Clone (MERN Stack)",
      date: "October, 2024",
      demoLink: `https://praveen-linked-in-clone-reactjs.netlify.app/`,
      gitHub_repo: `https://github.com/praveen00219/linkedIn-Clone-React`,
      description:
        "I developed a LinkedIn clone using the Front-end, demonstrating my ability to build a fully functional social networking platform. This project showcases my proficiency in both front-end and as well as my understanding of real-time data handling and user authentication. A clone of LinkedIn's interface, implemented using React, Redux, Firebase, SCSS, Ant Design (antd), Axios, and other technologies.",
      avatar: "/assets/images/Projects-Things/linkedin.png",
    },
    {
      name: "Netflix Clone (MERN Stack)",
      date: "November, 2024",
      description:
        "I built a fully functional Netflix clone using the MERN stack (MongoDB, Express.js, React.js, Node.js), which replicates key features of the popular streaming platform. This project demonstrates my ability to create a feature-rich, user-friendly web application with a focus on front-end design, back-end functionality, and real-time data handling.",
      avatar: "/assets/images/Projects-Things/Netflix.png",
    },
    {
      name: "Amazon Clone (MERN Stack)",
      date: "December, 2024",
      description:
        "I developed a fully functional Amazon clone using the MERN stack (MongoDB, Express.js, React.js, Node.js), mimicking core features of the e-commerce platform. This project highlights my ability to build scalable, user-focused JavaScript with complex front-end and back-end functionalities.",
      avatar: "/assets/images/Projects-Things/Amazon_icon.svg",
    },
  ];

  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>
      <section className="about-text">
        <p>
          💻 A creative Software Developer Engineer expertise in Full Stack,
          and, specializing in building responsive and scalable web
          applications. Skilled in unit testing, and maintaining
          high-performance systems. Committed to delivering efficient, reliable
          solutions aligned with organizational goals. Committed to delivering
          efficient, reliable solutions aligned with organizational goals.
        </p>
        <p>
          ✨Currently working as Software Development Engineer Intern at
          studentsBoat.com.
          <br />✨ Successfully completed my Full Stack Web Development Course
          at Geekster!
          <br />
          🎓 Graduated from Maharshi Dayanand Saraswati University, Ajmer
          (Rajasthan){" "}
        </p>
        <p>
          🔧 Hold several certificates in key areas including Git-GitHub,
          Building Responsive Pages, Java, JavaScript, and SQL. My
          certifications come from esteemed platforms like Geekster,
          freeCodeCamp, and HackerRank.
        </p>
        <p>
          🎓 Completed courses in "Mastering the Java Fundamentals," "Mastering
          JavaScript Programming," and an SQL course from Geekster, equipping me
          with a solid foundation in these technologies.
        </p>
        <p>
          🏆 Additionally, I have earned the "Java Course - Mastering the
          Fundamentals" Certification at SCALER-TOPICS and achieved the "Legacy
          JavaScript Algorithms and Data Structures" Developer Certification
          from freeCodeCamp.
        </p>
      </section>

      {/* <!--- service --> */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {/* front-end */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg"
                alt="design icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Front-End Development</h4>
              <p className="service-item-text">
                The most modern and high-quality, responsive client-side (UI),
                and interactive web pages made at a professional level.
              </p>
              <div className="flex gap-3 mt-3 flex-wrap">
                <span className="text-md text-gray-300">Tech Stack: </span>
                {frontendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.001 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="skills"
                  >
                    <div className="relative group" key={index}>
                      <img
                        src={skill.logo}
                        className="w-5 cursor-pointer"
                        alt={skill.title}
                      />
                      <div className="absolute bottom-8 left-1/2 z-50 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </li>

          {/* back-end */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-app.svg"
                alt="mobile app icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Back-End Development</h4>
              <p className="service-item-text">
                Handles professional server-side authentication, business logic,
                and APIs, and designs, implements, and manages databases.
              </p>
              <div className="flex gap-3 mt-3 flex-wrap">
                <span className="text-md text-gray-300">Tech Stack: </span>
                {backendSkills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.001 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="skills"
                  >
                    <div className="relative group" key={index}>
                      <img
                        src={skill.logo}
                        className="w-5 cursor-pointer"
                        alt={skill.title}
                      />
                      <div className="absolute bottom-8 left-1/2 z-50 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </li>

          {/* full-stack */}
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-dev.svg"
                alt="React-JS icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Full-Stack React-JS</h4>
              <p className="service-item-text">
                Handle both client-side (UI) and server-side (business logic,
                database) tasks, Deploy web apps to servers, allowing them to
                create a complete web application from scratch.
              </p>
              <p className="service-item-text">
                Git and GitHub to manage code versions, collaborate with teams,
                and review/merge code efficiently.
              </p>
              <div className="flex gap-3 mt-3 flex-wrap">
                <span className="text-md text-gray-300">Tech Stack: </span>
                {fullStackSill.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.001 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="skills"
                  >
                    <div className="relative group" key={index}>
                      <img
                        src={skill.logo}
                        className="w-5 h-5 cursor-pointer"
                        alt={skill.title}
                      />
                      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 opacity-0 z-50 group-hover:opacity-100 transition-opacity">
                        {skill.title}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonials / Projects section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Projects</h3>
        <ul className="testimonials-list has-scrollbar">
          {projects.map((project, index) => (
            <li
              key={index}
              className="testimonials-item"
              onClick={() => onOpenModal(project)}
            >
              <div className="content-card" data-testimonials-item>
                <figure className="testimonials-avatar-box">
                  <a href={project.demoLink}>
                    <img
                      src={project.avatar}
                      alt={project.name}
                      width="60"
                      data-testimonials-avatar
                      className="py-[5px] h-16"
                    />
                  </a>
                </figure>
                <h4
                  className="h4 testimonials-item-title mt-3 flex gap-2 items-center"
                  data-testimonials-title
                >
                  {project.name}
                  <a
                    className="text-blue-500 underline text-sm"
                    href={project.demoLink}
                  >
                    Live
                  </a>
                  <a
                    className="text-yellow-300 ml-2 text-sm"
                    href={project.gitHub_repo}
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </h4>
                <div className="testimonials-text" data-testimonials-text>
                  <p>{project.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
