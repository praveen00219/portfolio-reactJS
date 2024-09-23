import React from "react";

const About = ({ onOpenModal }) => {
  const projects = [
    {
      name: "LinkedIn Clone (MERN Stack)",
      date: "October, 2024",
      description:
        "I developed a LinkedIn clone using the MERN stack, demonstrating my ability to build a fully functional social networking platform. This project showcases my proficiency in both front-end and back-end development, as well as my understanding of real-time data handling and user authentication.",
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
          🎓 Graduated with a BSc from MDS-University in Ajmer (Rajasthan) and
          Currently learning Full-Stack Web Development at @Geekster.
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

        <p>
          I’ve developed a deep understanding of web technologies, programming
          languages, and modern frameworks. From designing captivating front-end
          interfaces to building robust back-end infrastructures, I am driven by
          a passion for solving complex problems and delivering high-quality
          solutions.
        </p>
      </section>

      {/* <!--- service --> */}
      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/assets/images/icon-design.svg
                "
                alt="design icon"
                width="40"
              />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Front-End Development</h4>
              <p className="service-item-text">
                The most modern and high-quality, responsive, and interactive
                web pages made at a professional level.
              </p>
              <div className="flex gap-3 mt-3">
                <img
                  src="/assets/images/tools/html.webp"
                  className="w-5"
                  alt="html"
                />
                <img
                  src="/assets/images/tools/css.svg"
                  className="w-5"
                  alt="CSS"
                />
                <img
                  src="/assets/images/tools/Java.png"
                  className="w-5"
                  alt="Java"
                />
                <img
                  src="/assets/images/tools/JS.webp"
                  className="w-5"
                  alt="JS"
                />
                <img
                  src="/assets/images/tools/Tailwindcss.png"
                  className="w-5"
                  alt="Tailwindcss"
                />
                <img
                  src="/assets/images/tools/ReactJS.webp"
                  className="w-5"
                  alt="ReactJS"
                />
              </div>
            </div>
          </li>

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
                Handles professional authentication, business logic, and APIs,
                and designs, implements, and manages databases.
              </p>
              <div className="flex gap-3 mt-3">
                <img
                  src="/assets/images/tools/NodeJS.png"
                  className="w-5"
                  alt="NodeJS"
                />
                <img
                  src="/assets/images/tools/ExpressJS.webp"
                  className="w-5"
                  alt="ExpressJS"
                />
                <img
                  src="/assets/images/tools/MongoDB.svg"
                  className="w-5"
                  alt="MongoDB"
                />
                <img
                  src="/assets/images/tools/firebase.png"
                  className="w-5"
                  alt="firebase"
                />
                <img
                  src="/assets/images/tools/cloudinary-icon.png"
                  className="w-5"
                  alt="cloudinary-icon"
                />
                <img
                  src="/assets/images/tools/postman.svg"
                  className="w-5"
                  alt="postman"
                />
              </div>
            </div>
          </li>

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
                <img
                  src="/assets/images/tools/html.webp"
                  className="w-5"
                  alt="html"
                />
                <img
                  src="/assets/images/tools/css.svg"
                  className="w-5"
                  alt="CSS"
                />
                <img
                  src="/assets/images/tools/Java.png"
                  className="w-5"
                  alt="Java"
                />
                <img
                  src="/assets/images/tools/JS.webp"
                  className="w-5"
                  alt="JS"
                />
                <img
                  src="/assets/images/tools/Tailwindcss.png"
                  className="w-5"
                  alt="Tailwindcss"
                />
                <img
                  src="/assets/images/tools/ReactJS.webp"
                  className="w-5"
                  alt="ReactJS"
                />

                <img
                  src="/assets/images/tools/NodeJS.png"
                  className="w-5"
                  alt="NodeJS"
                />
                <img
                  src="/assets/images/tools/ExpressJS.webp"
                  className="w-5"
                  alt="ExpressJS"
                />
                <img
                  src="/assets/images/tools/MongoDB.svg"
                  className="w-5"
                  alt="MongoDB"
                />
                <img
                  src="/assets/images/tools/firebase.png"
                  className="w-5"
                  alt="firebase"
                />
                <img
                  src="/assets/images/tools/cloudinary-icon.png"
                  className="w-5"
                  alt="cloudinary-icon"
                />

                <img
                  src="/assets/images/tools/Git_icon.png"
                  className="w-5"
                  alt="Git_icon"
                />
                <img
                  src="/assets/images/tools/gitHub.png"
                  className="w-5"
                  alt="gitHub"
                />
                <img
                  src="/assets/images/tools/postman.svg"
                  className="w-5"
                  alt="postman"
                />
                <img
                  src="/assets/images/tools/Visual_Studio_Code.png"
                  className="w-5"
                  alt="Visual_Studio_Code"
                />
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
                  <img
                    src={project.avatar}
                    alt={project.name}
                    width="60"
                    data-testimonials-avatar
                    className="py-[5px] h-16"
                  />
                </figure>
                <h4
                  className="h4 testimonials-item-title mt-3 flex gap-2 items-center"
                  data-testimonials-title
                >
                  {project.name}
                  <a className="text-blue-500 underline text-sm" href="">
                    Live
                  </a>
                  <a className="text-yellow-300 ml-2 text-sm" href="">
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

      {/* <!--- clients--> */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="/assets/images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
