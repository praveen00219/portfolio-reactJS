import React from "react";
import arrowIcon from "/assets/images/arrowhead.png";
import skillIcon from "/assets/images/icons-skill.png";

const Education = () => {
  return (
    <article className="education active" data-page="education">
      <header>
        <h2 className="h2 article-title">Education</h2>
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
            <h4 className="h4 timeline-item-title">
              Full-Stack Web Development Course - Geekster (Gurgaon, Haryana)
            </h4>
            <span>Jan, 2024 — Dec, 2024</span>
            <div className="ml-3">
              <p className="timeline-text flex">
                Certifications and Co-Curricular Activities:{" "}
                <a
                  className="ml-4 text-blue-300 underline"
                  href="https://drive.google.com/file/d/1AFr3Ad4WNnLIt6MOIuU5Q0hKQz9XZDov/view?usp=sharing"
                  target="_blank"
                >
                  Certificate Link
                </a>
              </p>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Successfully completed a Full Stack Web Development
                  Certification course – Geekster.
                </p>
              </div>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Completed 500+ data structures and algorithms challenges on
                  platforms like HackerRank and LeetCode, enhancing efficiency
                  in algorithm design and data manipulation.
                </p>
              </div>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Conceptualized a gamified learning platform during three
                  Geekathons, engaging 60 participants, which improved retention
                  rates by 25% and earned certifications for both innovative
                  thinking and teamwork capabilities.
                </p>
              </div>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  launch complex projects including Google Drive, LinkedIn,
                  Gmail, Slack, and E-commerce platforms, alongside 50+
                  mini-projects.
                </p>
              </div>
              <div className="timeline-text flex items-start gap-2">
                ▫
                <p>
                  Tech Stack Learned: React.js, Node.js, Express.js, MongoDB,
                  Tailwind CSS, Javascript, Docker, Git-GitHub
                </p>
              </div>
            </div>
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
    </article>
  );
};

export default Education;
