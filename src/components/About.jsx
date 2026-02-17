import React from "react";
import { motion } from "framer-motion";
import StatsDisplay from "./StatsDisplay";
import CursorGlowCard from "./CursorGlowCard";

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
import dotnet from "/assets/images/tools/dotnet.png";
import supabase from "/assets/images/tools/supabase.webp";

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
    {
      title: ".Net",
      logo: dotnet,
    },
    {
      title: "Supabase",
      logo: supabase,
    }
    
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

  const sectionLabel = "inline-block text-xs font-semibold uppercase tracking-wider text-[hsl(222,25%,45%)] mb-1.5";
  const sectionTitle = "text-xl sm:text-2xl font-bold text-[hsl(222,47%,8%)]";

  return (
    <article
      className="about active relative overflow-hidden rounded-2xl bg-gradient-to-b from-[hsl(0,0%,100%)] to-[hsl(210,20%,98%)]"
      data-page="about"
    >
      <header className="mb-10 sm:mb-12">
        <motion.span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(173,58%,39%)] mb-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Get to know me
        </motion.span>
        <motion.h2
          className="h2 article-title text-[hsl(222,47%,8%)] font-bold tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          About me
        </motion.h2>
       
      </header>

      <section className="about-text space-y-10 sm:space-y-12">
        {/* Intro — lead block */}
        <motion.div
          className="relative pl-5 sm:pl-6 border-l-[3px] border-[hsl(173,58%,39%)] rounded-r-xl py-2 pr-4 bg-gradient-to-r from-[hsl(173,58%,97%)] to-transparent"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <span className={`${sectionLabel} text-[hsl(173,58%,35%)]`}>
            Who I am
          </span>
          <p className="text-[hsl(222,25%,22%)] font-medium leading-relaxed text-base sm:text-lg max-w-3xl">
            Creative Software Engineer with expertise in Full Stack development,
            specializing in responsive and scalable web applications. Skilled in
            unit testing and high-performance systems, committed to delivering
            efficient, reliable solutions aligned with organizational goals.
          </p>
        </motion.div>

        {/* Experience / highlights — cards */}
        {/* <div>
          <span className={sectionLabel}>Experience</span>
          <h3 className={`${sectionTitle} mb-4`}>Work & impact</h3>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "💻",
                title: "Ex SDE at NZ Solutions and StudentsBoat Inc.",
                desc: "Hands-on experience building real-world software with modern tech stack.",
                tags: ["TypeScript", "Prisma", "PostgreSQL", "Azure", "Tailwind", "SCSS", "Git"],
              },
            ].map((item, index) => (
              <motion.article
                key={index}
                className="about-item-card card-3d gradient-bg-hover flex flex-col p-5 rounded-2xl shadow-md border border-[hsl(214,32%,91%)] hover:border-[hsl(173,58%,85%)] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl text-xl bg-[hsl(173,58%,94%)] border border-[hsl(173,58%,88%)] shrink-0">
                    {item.icon}
                  </span>
                  <h3 className="text-base font-semibold text-[hsl(222,47%,8%)] leading-snug pt-1">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[hsl(222,25%,28%)] leading-relaxed flex-grow">
                  {item.desc}
                </p>
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-[hsl(214,32%,91%)]">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-[hsl(210,20%,96%)] text-[hsl(222,25%,35%)] border border-[hsl(214,32%,91%)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div> */}

        {/* Stats — full width */}
        <motion.section
          className="pt-2"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <span className={sectionLabel}>By the numbers</span>
          <h3 className={`${sectionTitle} mb-4`}>Key metrics</h3>
          <StatsDisplay />
        </motion.section>
      </section>

      {/* Divider */}
      <div className="my-12 border-t border-[hsl(214,32%,91%)]" aria-hidden />

      {/* What I'm doing — Services */}
      <section className="service space-y-6 mb-12">
        <div>
          <span className={sectionLabel}>Services</span>
          <h3 className={`${sectionTitle} service-title`}>What I&apos;m doing</h3>
        </div>
        <ul className="service-list grid grid-cols-1 md:grid-cols-2 gap-5 list-none p-0 m-0">
          {[
            {
              icon: "/assets/images/icon-design.svg",
              alt: "Front-end design",
              title: "Front-End Development",
              desc: "Modern, responsive client-side (UI) and interactive web pages built to a professional standard.",
              skills: frontendSkills,
            },
            {
              icon: "/assets/images/icon-app.svg",
              alt: "Back-end development",
              title: "Back-End Development",
              desc: "Server-side authentication, business logic, APIs, and database design and implementation.",
              skills: backendSkills,
            },
            {
              icon: "/assets/images/icon-dev.svg",
              alt: "Full-stack development",
              title: "Full-Stack Web Development",
              desc: "End-to-end web applications from UI to server and database. Deployment and version control with Git & GitHub.",
              skills: fullStackSill,
              fullRow: true,
            },
          ].map((item, index) => (
            <motion.li
              key={item.title}
              className={item.fullRow ? "md:col-span-2" : ""}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <CursorGlowCard className="service-item card-3d gradient-bg-hover flex flex-col rounded-2xl border border-[hsl(214,32%,91%)] bg-[hsl(0,0%,100%)] p-5 hover:border-[hsl(173,58%,85%)] hover:shadow-lg transition-all duration-300">
              <div className="service-icon-box flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-br from-[hsl(173,58%,94%)] to-[hsl(199,89%,94%)] border border-[hsl(173,58%,88%)] shrink-0">
                <img src={item.icon} alt={item.alt} width="28" height="28" className="opacity-90" />
              </div>
              <div className="service-content-box text-left flex-grow">
                <h4 className="h4 service-item-title text-[hsl(222,47%,8%)] font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="service-item-text text-sm text-[hsl(222,25%,32%)] leading-relaxed mb-4">
                  {item.desc}
                </p>
                <p className="text-xs font-medium text-[hsl(222,25%,45%)] mb-2">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <motion.span
                      key={skill.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: index * 0.08 + i * 0.02 }}
                      className="relative group inline-flex items-center gap-1.5 rounded-lg bg-[hsl(210,20%,97%)] border border-[hsl(214,32%,91%)] px-2.5 py-1.5 text-xs text-[hsl(222,25%,28%)] hover:border-[hsl(173,58%,85%)] hover:bg-[hsl(173,58%,97%)] transition-colors"
                      title={skill.title}
                    >
                      <img src={skill.logo} alt="" className="w-4 h-4 object-contain shrink-0" />
                      <span className="hidden sm:inline">{skill.title}</span>
                    </motion.span>
                  ))}
                </div>
              </div>
              </CursorGlowCard>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Projects */}
      {/* <section className="testimonials space-y-5">
        <div>
          <span className={sectionLabel}>Portfolio</span>
          <h3 className={`${sectionTitle} testimonials-title`}>Projects</h3>
        </div>
        <ul className="testimonials-list has-scrollbar list-none p-0">
          {projects.map((project, index) => {
            const hasDemo = project.demoLink;
            const hasRepo = project.gitHub_repo;
            return (
              <motion.li
                key={index}
                className="testimonials-item card-3d gradient-bg-hover cursor-pointer rounded-2xl border border-[hsl(214,32%,91%)] bg-[hsl(0,0%,100%)] overflow-hidden hover:border-[hsl(173,58%,85%)] hover:shadow-lg transition-all duration-300"
                onClick={() => onOpenModal(project)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -2 }}
              >
                <div className="content-card p-5 sm:p-6 pt-14 sm:pt-16" data-testimonials-item>
                  <figure className="testimonials-avatar-box rounded-xl border-2 border-white shadow-md overflow-hidden bg-white">
                    <a
                      href={hasDemo ? project.demoLink : "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => hasDemo && e.stopPropagation()}
                      className={!hasDemo ? "pointer-events-none" : ""}
                    >
                      <img
                        src={project.avatar}
                        alt={project.name}
                        width="64"
                        height="64"
                        data-testimonials-avatar
                        className="w-14 h-14 sm:w-16 sm:h-16 object-contain p-1"
                      />
                    </a>
                  </figure>
                  <h4
                    className="testimonials-item-title text-[hsl(222,47%,8%)] font-semibold text-base sm:text-lg mt-2 flex flex-wrap items-center gap-2"
                    data-testimonials-title
                  >
                    <span className="break-words">{project.name}</span>
                    <span className="inline-flex gap-1.5 shrink-0">
                      {hasDemo && (
                        <a
                          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md bg-[hsl(199,89%,48%)] text-white hover:opacity-90 transition-opacity"
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live
                        </a>
                      )}
                      {hasRepo && (
                        <a
                          className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-[hsl(222,25%,15%)] text-white hover:bg-[hsl(222,25%,25%)] transition-colors"
                          href={project.gitHub_repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label="GitHub"
                        >
                          <i className="fa-brands fa-github text-sm" />
                        </a>
                      )}
                    </span>
                  </h4>
                  <div className="testimonials-text text-sm text-[hsl(222,25%,35%)] leading-relaxed mt-2 line-clamp-3" data-testimonials-text>
                    <p>{project.description}</p>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </section> */}
    </article>
  );
};

export default About;
