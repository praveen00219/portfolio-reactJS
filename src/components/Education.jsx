import React from "react";

const Education = () => {
  return (
    <article className="education active" data-page="education">
      <header>
        <h2 className="h2 article-title">Education/ Skills</h2>
      </header>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Geekster </h4>
            <span>Jan, 2024 — Dec, 2024</span>
            <p className="timeline-text">Full-Stack Web Development Course</p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Post Graduaction</h4>
            <span>Aug, 2022 — Oct, 2025</span>
            <p className="timeline-text">
              MSc (Maths) from VMOU | Vardhman Mahaveer Open University, Kota
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Graduaction</h4>
            <span>Aug, 2017 — Oct, 2021</span>
            <p className="timeline-text">
              BSc (Maths) from MDSU | Maharshi Dayanand Saraswati University,
              Ajmer.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">High school (12th Board)</h4>
            <span>Jul, 2016 — May, 2017</span>
            <p className="timeline-text">
              Completed senior secondary education with 83.40% from RBSE | Board
              Of Secondary Eduation, Rajasthan.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Matrix School (10th Board)
            </h4>
            <span>Jul, 2014 — Jun, 2015</span>
            <p className="timeline-text">
              Completed secondary education with 83.33% from RBSE | Board Of
              Secondary Eduation, Rajasthan.
            </p>
          </li>
        </ol>
      </section>

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

export default Education;
