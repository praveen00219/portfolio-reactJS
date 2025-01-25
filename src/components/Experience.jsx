import React from "react";

const Experience = () => {
  return (
    <article className="experience active" data-page="experience">
      <header>
        <h2 className="h2 article-title">Experience</h2>
      </header>
      {/* <!-- Experience --> */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">
            Experience <span className="text-gray-500 text-xs"></span>
          </h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Software Development Engineer Intern at StudentsBoat.com
            </h4>
            <p className="text-gray-500">
              StudentsBoat.com · Remote · Internship
            </p>
            <span>Nov 2024 — Present</span>
            <p className="timeline-text">
              Focusing on developing web applications, tackling front-end and
              back-end challenges, and contributing to a meaningful project that
              supports students worldwide.
            </p>
          </li>
        </ol>
      </section>

      {/* <!-- Skills --> */}
      <header>
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
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Programming Languages:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              <img
                src="/assets/images/tools/html.webp"
                className="w-16"
                alt="html"
              />
              <img
                src="/assets/images/tools/css.svg"
                className="w-16"
                alt="CSS"
              />
              <img
                src="/assets/images/tools/Java.png"
                className="w-16"
                alt="Java"
              />
              <img
                src="/assets/images/tools/JS.webp"
                className="w-16"
                alt="JS"
              />
              <img
                src="/assets/images/tools/NodeJS.png"
                className="w-16"
                alt="NodeJS"
              />
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frameworks & Libraries:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              <img
                src="/assets/images/tools/Tailwindcss.png"
                className="w-16"
                alt="Tailwindcss"
              />
              <img
                src="/assets/images/tools/ReactJS.webp"
                className="w-16"
                alt="ReactJS"
              />
              <img
                src="/assets/images/tools/ExpressJS.webp"
                className="w-16"
                alt="ExpressJS"
              />
              <img
                src="/assets/images/tools/MongoDB.svg"
                className="w-16"
                alt="MongoDB"
              />
              <img
                src="/assets/images/tools/firebase.png"
                className="w-16"
                alt="firebase"
              />
              <img
                src="/assets/images/tools/cloudinary-icon.png"
                className="w-16"
                alt="cloudinary-icon"
              />
            </div>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Tools:</h4>
            <div className="flex gap-3 flex-wrap mt-3">
              <img
                src="/assets/images/tools/Git_icon.png"
                className="w-16"
                alt="Git_icon"
              />
              <img
                src="/assets/images/tools/gitHub.png"
                className="w-16"
                alt="gitHub"
              />
              <img
                src="/assets/images/tools/postman.svg"
                className="w-16"
                alt="postman"
              />
              <img
                src="/assets/images/tools/Visual_Studio_Code.png"
                className="w-16"
                alt="Visual_Studio_Code"
              />
            </div>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Experience;
