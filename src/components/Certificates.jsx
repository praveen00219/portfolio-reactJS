import React from "react";
import { motion } from "framer-motion";

function Certificates({ onOpenModal }) {
  const certificatesList = [
    {
      url: `https://drive.google.com/file/d/1AFr3Ad4WNnLIt6MOIuU5Q0hKQz9XZDov/view?usp=sharing`,
      img: `/assets/images/Certificates/FullStackWebCertificateGeeksterPraveen.jpg`,
      _date: `30th December, 2024`,
      institute: `Geekster`,
      instituteUrl: `https://www.geekster.in/`,
      instituteLogo: `/assets/images/Social-Icon/geekster-logo.png`,
      skill:
        "Git-Github, HTML, CSS, Tailwind CSS, SCSS, Bootstrap, Java, JavaScript, Chart.js, ReactJs, Redux, Context-API, Firebase, NodeJS, ExpressJs, MongoDB, Multer, Claudanary, Netlify, Render, Postman, AWS, VSCode etc. ",
      title: "Full Stack Web Application Certificate",
      about: `Successfully Complete Full Stack Web Course and have
                      earned this certificate on 30th December 2024.`,
    },
    {
      url: `https://certifications.geekster.in/-Xx-DYDop-o0sSaJ5lJnK-geekster.pdf`,
      img: `/assets/images/Certificates/git-github.jpg`,
      _date: `30th May, 2024`,
      institute: `Geekster`,
      instituteUrl: `https://www.geekster.in/`,
      instituteLogo: `/assets/images/Social-Icon/geekster-logo.png`,
      skill:
        "Git Basics, Branching and Merging, Git Skills, GitHub Skills, and more...",
      title: "Git-GitHub",
      about: `Successfully Complete Git and Github Course and have
                      earned this certificate on 30th May 2024.`,
    },
    {
      url: `https://certifications.geekster.in/-k01RhLXfBW_3kfujnAqP-geekster.pdf`,
      img: `/assets/images/Certificates/responsive-web-page.jpg`,
      _date: `16th June, 2024`,
      institute: `Geekster`,
      instituteUrl: `https://www.geekster.in/`,
      instituteLogo: `/assets/images/Social-Icon/geekster-logo.png`,
      skill:
        "Fundamentals, Layout Techniques, Transitions, Animations, and more...",
      title: "Responsive Web Page",
      about: ` Successfully completed the course:
                    Building Responsive Landing Page Using HTML And CSS
                    and has earned this certificate on 16th June 2024.`,
    },
    {
      url: `https://certifications.geekster.in/iVqg6LsAnP_eJqsd_nKrn-geekster.pdf`,
      img: `/assets/images/Certificates/java.jpg`,
      _date: `9th March, 2024`,
      institute: `Geekster`,
      instituteUrl: `https://www.geekster.in/`,
      instituteLogo: `/assets/images/Social-Icon/geekster-logo.png`,
      skill:
        "Syntax and Structure,Functions, Loops, Collections and Data Structures, Multithreading, and more...",
      title: "Mastering Java",
      about: `Successfully completed the course:
                    Mastering Java Programming Fundamentals
                    and has earned this certificate on 9th March 2024.`,
    },
    {
      url: `https://moonshot.scaler.com/s/li/E917PSUwNz`,
      img: `/assets/images/Certificates/java-scaler-topics.jpg`,
      _date: `12th July, 2024`,
      institute: `SCALER-TOPICS`,
      instituteUrl: `https://www.scaler.com/topics/`,
      instituteLogo: `/assets/images/Social-Icon/Scaler-logo.png`,
      skill:
        "Syntax and Structure,Functions, Loops, Collections and Data Structures, Multithreading, and more...",
      title: "Mastering Java",
      about: `Successfully completed Mastering Java Course: Basic to Advance
                    and has earned this certificate on 12th July 2024.`,
    },
    {
      url: `https://certifications.geekster.in/ALrlplNwi9x5__0VGVfBx-geekster.pdf`,
      img: `/assets/images/Certificates/javaScript-geekster.jpg`,
      _date: `1st April, 2024`,
      institute: `Geekster`,
      instituteUrl: `https://www.geekster.in/`,
      instituteLogo: `/assets/images/Social-Icon/geekster-logo.png`,
      skill:
        "Functions,Objects, Loops, Error Handling and DOM, Closures, Scope and Hoisting, (ES6+) Skills, and more...",
      title: "Mastering JavaScript",
      about: `Successfully completed the course:
                    Mastering JavaScript Fundamentals
                    and has earned this certificate on 1st April 2024.`,
    },
    {
      url: `https://www.freecodecamp.org/certification/Praveen21/javascript-algorithms-and-data-structures`,
      img: `/assets/images/Certificates/javaScript-freeCodeCamp.jpg`,
      _date: ` 19th July, 2024`,
      institute: `freeCodeCamp`,
      instituteUrl: `https://www.freecodecamp.org/`,
      instituteLogo: `/assets/images/Social-Icon/freeCodeCamp-logo.png`,
      skill:
        "Functions,Objects, Loops, Error Handling and DOM, Closures, Scope and Hoisting, (ES6+) Skills, JSON, Debugging, and more...",
      title: "Mastering JavaScript DSA",
      about: `Successfully completed the Legacy JavaScript Algorithms and Data Structures. | representing
                    approximately 300 hours of work.`,
    },
    {
      url: `https://www.hackerrank.com/certificates/094fd884796d`,
      img: `/assets/images/Certificates/javaScript-intermediate-hackerRank.jpg`,
      _date: ` 11th Aug, 2024`,
      institute: `HackerRank`,
      instituteUrl: `https://www.hackerrank.com/about-us/home/`,
      instituteLogo: `/assets/images/Social-Icon/Hackerrank_logo.webp`,
      skill:
        "Functions,Objects, Loops, Error Handling and DOM, Closures, Scope and Hoisting, (ES6+) Skills, JSON, Debugging, and more...",
      title: "JavaScript (Intermediate)",
      about: `  Successfully Completed Intermediate JavaScript Skill Test.`,
    },
    {
      url: `https://www.hackerrank.com/certificates/03092ea6817f`,
      img: `/assets/images/Certificates/problem-solving-intermediate-hackerRank.jpg`,
      _date: ` 11th Aug, 2024`,
      institute: `HackerRank`,
      instituteUrl: `https://www.hackerrank.com/about-us/home/`,
      instituteLogo: `/assets/images/Social-Icon/Hackerrank_logo.webp`,
      skill:
        "Algorithm Design, Data Structures, Time and Space Complexity,Object Manipulation, Asynchronous, Recursion, Dynamic Programming, and more...",
      title: "JavaScript Problem Solving (Intermediate)",
      about: ` Successfully Completed Intermediate JavaScript Problem Solving Skill Test.`,
    },
    {
      url: `https://certifications.geekster.in/yZqp3XSxCGnEM7WHDwAF4-geekster.pdf`,
      img: `/assets/images/Certificates/SQL-geekster.jpg`,
      _date: `11th June, 2024`,
      institute: `Geekster`,
      instituteUrl: `https://www.geekster.in/`,
      instituteLogo: `/assets/images/Social-Icon/geekster-logo.png`,
      skill:
        "Database Concepts, Data Filtering, Sorting and Limiting Data, Joins and Subqueries, Data Modification, and more...",
      title: "SQL Database",
      about: ` Successfully completed SQL Certification Course: Basic to Advance
                    and has earned this certificate on 11th June 2024.`,
    },
  ];

  return (
    <>
      <article className="blog certificates active" data-page="certificates">
        <header>
          <h2 className="h2 article-title">Certificates</h2>
        </header>
        <section className="blog-posts">
          <ul className="blog-posts-list">
            {certificatesList.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.001 }}
                transition={{ duration: 0.4, delay: index * 0.02 }}
                className="project-card"
              >
                <li key={"certificate" + index} className="blog-post-item">
                  <a href={certificate.url} target="_blank">
                    <figure className="blog-banner-box">
                      <img
                        src={certificate.img}
                        alt={certificate.title}
                        loading="lazy"
                      />
                    </figure>
                    <div className="blog-content">
                      <h3 className="h3 blog-item-title">
                        {certificate.title}
                      </h3>
                      <div className="blog-meta">
                        <span className="dot"></span>
                        <a href={certificate.instituteUrl}>
                          <img
                            className="h-5 rounded"
                            src={certificate.instituteLogo}
                            alt={certificate.institute}
                          />
                        </a>
                        <p
                          className="text-xs text-gray-400"
                          datetime="2024-05-30"
                        >
                          {certificate.institute} | {certificate._date}
                        </p>
                      </div>
                      <div className="blog-meta items-start">
                        <span className="dot mt-2"></span>
                        <div className="text-sm text-gray-400 ">
                          <p> Skills : {certificate.skill}</p>
                        </div>
                      </div>
                      <p className="blog-text">{certificate.about}</p>
                    </div>
                  </a>
                </li>
              </motion.div>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}

export default Certificates;
