import React from "react";
import arrowIcon from "/assets/images/arrowhead.png";
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

const Experience = () => {
  const programmingLanguages = [
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
  ];

  const frameworks = [
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
      title: "Nodejs",
      logo: nodejs,
    },
    {
      title: "Expressjs",
      logo: expressjs,
    },
  ];

  const database = [
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
  ];

  const tools = [
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
      title: "Postman",
      logo: postman,
    },
  ];

  return (
    <article className="experience active" data-page="experience">
      <header>
        <h2 className="h2 article-title">Experience</h2>
      </header>
      {/* <!-- Experience --> */}

      <section className="skill experience">
        <div className="title-wrapper mb-2">
          <div className="icon-box ">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3 ml-2">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Development Engineer Intern at StudentsBoat.com
            </h4>
            <p className="text-gray-400">StudentsBoat.com · Internship</p>
            <span>Nov 2024 — Present</span>
            <p className="timeline-text">
              Portland, Oregon, United States · Remote
            </p>

            <div className="timeline-text ml-3 mt-2">
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Focusing on developing web applications, tackling front-end
                  and back-end challenges, and contributing to a meaningful
                  project that supports students worldwide.
                </p>
              </div>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Enhanced UI/UX: Designed and built a responsive, reusable
                  component library using React.js and scalable styling,
                  ensuring a seamless user experience across applications
                  serving a 10+ million user base.
                </p>
              </div>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Optimized Performance: Implemented server-side rendering (SSR)
                  using React.js, resulting in a 40% improvement in SEO rankings
                  and reducing average page load times to below two seconds for
                  client-facing applications.
                </p>
              </div>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Comprehensive Homestay Solutions: Architected and integrated
                  robust Product Listing and Product Detail pages, incorporating
                  features, and Landlord & Host Family sign-up, along with
                  payment gateways and progressive data loading, ensuring
                  scalability, enhanced security, and zero latency.
                </p>
              </div>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Cross-Functional Collaboration: Collaborated with
                  cross-functional teams to solve complex challenges, optimize
                  performance, and ensure seamless integration of features.
                  Conducted code reviews and peer programming sessions to
                  maintain high code quality and foster a collaborative
                  development environment.
                </p>
              </div>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Modern Tech Stack Implementation: Utilized React, Bootstrap,
                  Redux, Reactstrap, SCSS, and Axios to build scalable,
                  maintainable, and visually appealing components for the
                  application.
                </p>
              </div>
            </div>
          </li>
        </ol>
      </section>

      {/* <!-- Skills --> */}
      <header className="mt-2">
        <h2 className="h2 article-title">Skills</h2>
      </header>
      <section className="skill">
        <div className="title-wrapper mb-2">
          <div className="icon-box ">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3 ml-2">Skills</h3>
        </div>
        <ol className="timeline-list">
          {/* Programming Languages */}
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Programming Languages:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              {programmingLanguages.map((lang, index) => (
                <motion.div
                  key={lang.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.001 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="skill"
                >
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      key={`lang${index}`}
                      src={lang.logo}
                      className="w-16 h-16"
                      alt={lang.title}
                    />
                    <small className="text-gray-300">{lang.title}</small>
                  </div>
                </motion.div>
              ))}
            </div>
          </li>

          {/* Frameworks */}
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frameworks & Libraries:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              {frameworks.map((framework, index) => (
                <motion.div
                  key={framework.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.001 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="skill"
                >
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      key={`lang${index}`}
                      src={framework.logo}
                      className="w-16 h-16"
                      alt={framework.title}
                    />
                    <small className="text-gray-300">{framework.title}</small>
                  </div>
                </motion.div>
              ))}
            </div>
          </li>

          {/* Data base */}
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Data Base:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              {database.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.001 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="skill"
                >
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      key={`lang${index}`}
                      src={item.logo}
                      className="w-16 h-16"
                      alt={item.title}
                    />
                    <small className="text-gray-300">{item.title}</small>
                  </div>
                </motion.div>
              ))}
            </div>
          </li>

          {/* tools */}
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Tools:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.001 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="skill"
                >
                  <div className="flex flex-col gap-1 items-center">
                    <img
                      key={`lang${index}`}
                      src={tool.logo}
                      className="w-16 h-16"
                      alt={tool.title}
                    />
                    <small className="text-gray-300">{tool.title}</small>
                  </div>
                </motion.div>
              ))}
            </div>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Experience;
