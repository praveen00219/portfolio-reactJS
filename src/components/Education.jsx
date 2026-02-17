import { motion } from "framer-motion";
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

const sectionLabel = "inline-block text-xs font-semibold uppercase tracking-wider text-[hsl(222,25%,45%)] mb-1.5";
const sectionTitle = "text-xl sm:text-2xl font-bold text-[hsl(222,47%,8%)]";

const educationData = [
  {
    title: "Full-Stack Web Development Course - Geekster (Gurgaon, Haryana)",
    period: "Jan, 2024 — Dec, 2024",
    highlights: [
      { text: "Successfully completed a Full Stack Web Development Certification course – Geekster." },
      { text: "Completed 500+ data structures and algorithms challenges on HackerRank and LeetCode." },
      { text: "Conceptualized a gamified learning platform during three Geekathons, engaging 60 participants, improving retention by 25%." },
      { text: "Launched complex projects including Google Drive, LinkedIn, Gmail, Slack, and E-commerce platforms, alongside 50+ mini-projects." },
      { text: "Tech Stack: React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Javascript, Docker, Git-GitHub" },
    ],
    certificateLink: "https://drive.google.com/file/d/1AFr3Ad4WNnLIt6MOIuU5Q0hKQz9XZDov/view?usp=sharing",
  },
  {
    title: "Post Graduation",
    period: "Aug, 2022 — Oct, 2025",
    subtitle: "MSc (Maths) from Vardhman Mahaveer Open University, Kota",
  },
  {
    title: "Graduation",
    period: "Aug, 2017 — Oct, 2021",
    subtitle: "BSc (Maths) from Maharshi Dayanand Saraswati University, Ajmer.",
  },
  {
    title: "High school (12th Board)",
    period: "Jul, 2016 — May, 2017",
    subtitle: "Completed senior secondary education with 83.40% from Board Of Secondary Education, Rajasthan.",
  },
  {
    title: "Matrix School (10th Board)",
    period: "Jul, 2014 — Jun, 2015",
    subtitle: "Completed secondary education with 83.33% from Board Of Secondary Education, Rajasthan.",
  },
];

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
  {
    title: ".Net",
    logo: dotnet,
  },
  {
    title: "Supabase",
    logo: supabase,
  }
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

const cardClass =
  "rounded-2xl bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)]";

const Education = () => {
  return (
    <motion.article
      className="education active relative overflow-hidden rounded-2xl bg-gradient-to-b from-[hsl(0,0%,100%)] to-[hsl(210,20%,98%)]"
      data-page="education"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <header className="mb-10 sm:mb-12">
        <motion.span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(173,58%,39%)] mb-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Learning journey
        </motion.span>
        <motion.h2
          className="h2 article-title text-[hsl(222,47%,8%)] font-bold tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          Education
        </motion.h2>
      </header>

      <section className="timeline">
        <ol className="timeline-list">
          {educationData.map((item, index) => (
            <motion.li
              key={item.title}
              className="timeline-item group/card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <CursorGlowCard className={cardClass}>
                <div className="border-l-2 border-[hsl(173,58%,39%)] pl-4 sm:pl-5 -ml-1">
                  <h4 className="h4 timeline-item-title text-[hsl(222,47%,8%)] font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm font-medium text-[hsl(173,58%,35%)] timeline-text mb-3">
                    {item.period}
                  </p>
                  {item.subtitle && (
                    <p className="timeline-text text-[hsl(222,25%,32%)] leading-relaxed">
                      {item.subtitle}
                    </p>
                  )}
                  {item.highlights && (
                    <div className="mt-3 space-y-2">
                      {item.certificateLink && (
                        <p className="timeline-text flex flex-wrap items-center gap-2">
                          <a
                            className="text-sm font-medium text-[hsl(199,89%,48%)] hover:underline"
                            href={item.certificateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View certificate →
                          </a>
                        </p>
                      )}
                      {item.highlights.map((h, i) => (
                        <div key={i} className="timeline-text flex items-start gap-2">
                          <span className="text-[hsl(173,58%,39%)] mt-0.5">▫</span>
                          <p className="text-[hsl(222,25%,32%)] leading-relaxed">{h.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CursorGlowCard>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* <!-- Skills --> */}
      1<header className="mt-2">
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
                    <small className="text-gray-700">{lang.title}</small>
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
                    <small className="text-gray-700">{framework.title}</small>
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
                    <small className="text-gray-700">{item.title}</small>
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
                    <small className="text-gray-700">{tool.title}</small>
                  </div>
                </motion.div>
              ))}
            </div>
          </li>
        </ol>
      </section>
    </motion.article>
  );
};

export default Education;
