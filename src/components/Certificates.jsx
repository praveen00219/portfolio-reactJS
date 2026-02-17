import React from "react";
import { motion } from "framer-motion";
import CursorGlowCard from "./CursorGlowCard";

const certCardClass =
  "rounded-2xl overflow-hidden bg-white border border-[hsl(214,32%,91%)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] hover:border-[hsl(173,58%,85%)] group";

function Certificates() {
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
    <article
      className="blog certificates active relative overflow-hidden rounded-2xl bg-gradient-to-b from-[hsl(0,0%,100%)] to-[hsl(210,20%,98%)]"
      data-page="certificates"
    >
      <header className="mb-10 sm:mb-12">
        <motion.span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(173,58%,39%)] mb-2"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Achievements
        </motion.span>
        <motion.h2
          className="h2 article-title text-[hsl(222,47%,8%)] font-bold tracking-tight"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          Certificates
        </motion.h2>
      
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {certificatesList.map((certificate, index) => (
            <motion.li
              key={certificate.title + index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.4), ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
            >
              <CursorGlowCard className={certCardClass}>
                <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative h-44 overflow-hidden rounded-t-2xl bg-[hsl(210,20%,95%)]">
                    <img
                      src={certificate.img}
                      alt={certificate.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 text-sm font-medium text-[hsl(222,47%,15%)] shadow-lg">
                        <ion-icon name="open-outline" class="text-lg" />
                        View certificate
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 border-l-2 border-[hsl(173,58%,39%)] ml-3 -mt-1">
                    <h3 className="font-semibold text-[hsl(222,47%,8%)] mb-2 line-clamp-2 group-hover:text-[hsl(173,58%,35%)] transition-colors">
                      {certificate.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <a href={certificate.instituteUrl} target="_blank" rel="noopener noreferrer" className="shrink-0">
                        <img
                          className="h-6 w-auto rounded object-contain"
                          src={certificate.instituteLogo}
                          alt={certificate.institute}
                        />
                      </a>
                      <p className="text-xs text-[hsl(222,25%,45%)]">
                        {certificate.institute} · {certificate._date}
                      </p>
                    </div>
                    <p className="text-sm text-[hsl(222,25%,35%)] leading-relaxed line-clamp-2 mb-2">
                      {certificate.about}
                    </p>
                    <p className="text-xs text-[hsl(222,25%,40%)] line-clamp-2">
                      <span className="font-medium">Skills:</span> {certificate.skill}
                    </p>
                  </div>
                </a>
              </CursorGlowCard>
            </motion.li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default Certificates;
