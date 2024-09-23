import React from "react";

const About = () => {
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
                src="/src/assets/images/icon-design.svg
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
                  src="/src/assets/images/tools/html.webp"
                  className="w-5"
                  alt="html"
                />
                <img
                  src="/src/assets/images/tools/css.svg"
                  className="w-5"
                  alt="CSS"
                />
                <img
                  src="/src/assets/images/tools/Java.png"
                  className="w-5"
                  alt="Java"
                />
                <img
                  src="/src/assets/images/tools/JS.webp"
                  className="w-5"
                  alt="JS"
                />
                <img
                  src="/src/assets/images/tools/Tailwindcss.png"
                  className="w-5"
                  alt="Tailwindcss"
                />
                <img
                  src="/src/assets/images/tools/ReactJS.webp"
                  className="w-5"
                  alt="ReactJS"
                />
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/src/assets/images/icon-app.svg"
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
                  src="/src/assets/images/tools/NodeJS.png"
                  className="w-5"
                  alt="NodeJS"
                />
                <img
                  src="/src/assets/images/tools/ExpressJS.webp"
                  className="w-5"
                  alt="ExpressJS"
                />
                <img
                  src="/src/assets/images/tools/MongoDB.svg"
                  className="w-5"
                  alt="MongoDB"
                />
                <img
                  src="/src/assets/images/tools/firebase.png"
                  className="w-5"
                  alt="firebase"
                />
                <img
                  src="/src/assets/images/tools/cloudinary-icon.png"
                  className="w-5"
                  alt="cloudinary-icon"
                />
                <img
                  src="/src/assets/images/tools/postman.svg"
                  className="w-5"
                  alt="postman"
                />
              </div>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/src/assets/images/icon-dev.svg"
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
                  src="/src/assets/images/tools/html.webp"
                  className="w-5"
                  alt="html"
                />
                <img
                  src="/src/assets/images/tools/css.svg"
                  className="w-5"
                  alt="CSS"
                />
                <img
                  src="/src/assets/images/tools/Java.png"
                  className="w-5"
                  alt="Java"
                />
                <img
                  src="/src/assets/images/tools/JS.webp"
                  className="w-5"
                  alt="JS"
                />
                <img
                  src="/src/assets/images/tools/Tailwindcss.png"
                  className="w-5"
                  alt="Tailwindcss"
                />
                <img
                  src="/src/assets/images/tools/ReactJS.webp"
                  className="w-5"
                  alt="ReactJS"
                />

                <img
                  src="/src/assets/images/tools/NodeJS.png"
                  className="w-5"
                  alt="NodeJS"
                />
                <img
                  src="/src/assets/images/tools/ExpressJS.webp"
                  className="w-5"
                  alt="ExpressJS"
                />
                <img
                  src="/src/assets/images/tools/MongoDB.svg"
                  className="w-5"
                  alt="MongoDB"
                />
                <img
                  src="/src/assets/images/tools/firebase.png"
                  className="w-5"
                  alt="firebase"
                />
                <img
                  src="/src/assets/images/tools/cloudinary-icon.png"
                  className="w-5"
                  alt="cloudinary-icon"
                />

                <img
                  src="/src/assets/images/tools/Git_icon.png"
                  className="w-5"
                  alt="Git_icon"
                />
                <img
                  src="/src/assets/images/tools/gitHub.png"
                  className="w-5"
                  alt="gitHub"
                />
                <img
                  src="/src/assets/images/tools/postman.svg"
                  className="w-5"
                  alt="postman"
                />
                <img
                  src="/src/assets/images/tools/Visual_Studio_Code.png"
                  className="w-5"
                  alt="Visual_Studio_Code"
                />
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* <!--- testimonials--> */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Projects</h3>
        <ul className="testimonials-list has-scrollbar">
          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/src/assets/images/Projects-Things/linkedin.png"
                  alt="Daniel lewis"
                  width="60"
                  data-testimonials-avatar
                  className="py-[5px] h-16"
                />
              </figure>
              <h4
                className="h4 testimonials-item-title mt-3 flex gap-2 items-center"
                data-testimonials-title
              >
                LinkedIn Clone (MERN Stack)
                <a className="text-blue-500 underline text-sm" href="">
                  Live
                </a>
                <a className="text-yellow-300 ml-2 text-sm" href="">
                  <i className="fa-brands fa-github"></i>
                </a>
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>
                  I developed a LinkedIn clone using the MERN stack,
                  demonstrating my ability to build a fully functional social
                  networking platform. This project showcases my proficiency in
                  both front-end and back-end development, as well as my
                  understanding of real-time data handling and user
                  authentication.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/src/assets/images/Projects-Things/Netflix.png"
                  alt="Jessica miller"
                  width="60"
                  data-testimonials-avatar
                  className="py-[5px] h-16"
                />
              </figure>
              <h4
                className="h4 testimonials-item-title mt-3 flex gap-2 items-center"
                data-testimonials-title
              >
                Netflix Clone (MERN Stack)
                <a className="text-blue-500 underline text-sm" href="">
                  Live
                </a>
                <a className="text-yellow-300 ml-2 text-sm" href="">
                  <i className="fa-brands fa-github"></i>
                </a>
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>
                  I built a fully functional Netflix clone using the MERN stack
                  (MongoDB, Express.js, React.js, Node.js), which replicates key
                  features of the popular streaming platform. This project
                  demonstrates my ability to create a feature-rich,
                  user-friendly web application with a focus on front-end
                  design, back-end functionality, and real-time data handling.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/src/assets/images/Projects-Things/Amazon_icon.svg"
                  alt="Emily evans"
                  width="60"
                  data-testimonials-avatar
                  className="py-[5px] h-16"
                />
              </figure>
              <h4
                className="h4 testimonials-item-title mt-3 flex gap-2 items-center"
                data-testimonials-title
              >
                Amazon Clone (MERN Stack)
                <a className="text-blue-500 underline text-sm" href="">
                  Live
                </a>
                <a className="text-yellow-300 ml-2 text-sm" href="">
                  <i className="fa-brands fa-github"></i>
                </a>
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>
                  I developed a fully functional Amazon clone using the MERN
                  stack (MongoDB, Express.js, React.js, Node.js), mimicking core
                  features of the e-commerce platform. This project highlights
                  my ability to build scalable, user-focused JavaScript with
                  complex front-end and back-end functionalities.
                </p>
              </div>
            </div>
          </li>

          <li className="testimonials-item">
            <div className="content-card" data-testimonials-item>
              <figure className="testimonials-avatar-box">
                <img
                  src="/src/assets/images/avatar-4.png"
                  alt="Henry william"
                  width="60"
                  data-testimonials-avatar
                  className="py-[5px]  h-16"
                />
              </figure>
              <h4
                className="h4 testimonials-item-title mt-3 flex gap-2 items-center"
                data-testimonials-title
              >
                Henry william
                <a className="text-blue-500 underline text-sm" href="">
                  Live
                </a>
                <a className="text-yellow-300 ml-2 text-sm" href="">
                  <i className="fa-brands fa-github"></i>
                </a>
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>
                  Richard was hired to create a corporate identity. We were very
                  pleased with the work done. She has a lot of experience and is
                  very concerned about the needs of client. Lorem ipsum dolor
                  sit amet, ullamcous cididt consectetur adipiscing elit, seds
                  do et eiusmod tempor incididunt ut laborels dolore magnarels
                  alia.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* <!--- testimonials modal-->//////////// */}
      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>
        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>
          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src="/src/assets/images/avatar-1.png"
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>
            <img src="/src/assets/images/icon-quote.svg" alt="quote icon" />
          </div>
          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>
            <time datetime="2024-10-14">2024</time>
            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* <!--- clients--> */}
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img
                src="/src/assets/images/logo-1-color.png"
                alt="client logo"
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img
                src="/src/assets/images/logo-2-color.png"
                alt="client logo"
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img
                src="/src/assets/images/logo-3-color.png"
                alt="client logo"
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img
                src="/src/assets/images/logo-4-color.png"
                alt="client logo"
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img
                src="/src/assets/images/logo-5-color.png"
                alt="client logo"
              />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img
                src="/src/assets/images/logo-6-color.png"
                alt="client logo"
              />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
