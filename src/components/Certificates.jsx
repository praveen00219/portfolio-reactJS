import React from "react";

function Certificates({ onOpenModal }) {
  const certificatesList = [
    {
      url: `https://certifications.geekster.in/-Xx-DYDop-o0sSaJ5lJnK-geekster.pdf`,
      img: `/src/assets/images/Certificates/git-github.jpg`,
      _date: `30th May, 2024`,
      institute: `Geekster`,
      instituteLogo: `/src/assets/images/Social-Icon/geekster-logo.png`,
      title: "Git-GitHub",
      about: `Successfully Complete Git and Github Course and have
                      earned this certificate on 30th May 2024.`,
    },
    {
      url: `https://certifications.geekster.in/-k01RhLXfBW_3kfujnAqP-geekster.pdf`,
      img: `/src/assets/images/Certificates/responsive-web-page.jpg`,
      _date: `16th June, 2024`,
      institute: `Geekster`,
      instituteLogo: `/src/assets/images/Social-Icon/geekster-logo.png`,
      title: "Responsive Web Page",
      about: ` Successfully completed the course:
                    Building Responsive Landing Page Using HTML And CSS
                    and has earned this certificate on 16th June 2024.`,
    },
    {
      url: `https://certifications.geekster.in/iVqg6LsAnP_eJqsd_nKrn-geekster.pdf`,
      img: `/src/assets/images/Certificates/java.jpg`,
      _date: `9th March, 2024`,
      institute: `Geekster`,
      instituteLogo: `/src/assets/images/Social-Icon/geekster-logo.png`,
      title: "Mastering Java",
      about: `Successfully completed the course:
                    Mastering Java Programming Fundamentals
                    and has earned this certificate on 9th March 2024.`,
    },
    {
      url: `https://moonshot.scaler.com/s/li/E917PSUwNz`,
      img: `/src/assets/images/Certificates/java-scaler-topics.jpg`,
      _date: `12th July, 2024`,
      institute: `SCALER-TOPICS`,
      instituteLogo: `/src/assets/images/Social-Icon/Scaler-logo.png`,
      title: "Mastering Java",
      about: `Successfully completed Mastering Java Course: Basic to Advance
                    and has earned this certificate on 12th July 2024.`,
    },
    {
      url: `https://certifications.geekster.in/ALrlplNwi9x5__0VGVfBx-geekster.pdf`,
      img: `/src/assets/images/Certificates/javaScript-geekster.jpg`,
      _date: `1st April, 2024`,
      institute: `Geekster`,
      instituteLogo: `/src/assets/images/Social-Icon/geekster-logo.png`,
      title: "Mastering JavaScript",
      about: `Successfully completed the course:
                    Mastering JavaScript Fundamentals
                    and has earned this certificate on 1st April 2024.`,
    },
    {
      url: `https://www.freecodecamp.org/certification/Praveen21/javascript-algorithms-and-data-structures`,
      img: `/src/assets/images/Certificates/javaScript-freeCodeCamp.jpg`,
      _date: ` 19th July, 2024`,
      institute: `freeCodeCamp`,
      instituteLogo: `/src/assets/images/Social-Icon/freeCodeCamp-logo.png`,
      title: "Mastering JavaScript DSA",
      about: `Successfully completed the Legacy JavaScript Algorithms and Data Structures. | representing
                    approximately 300 hours of work.`,
    },
    {
      url: `https://www.hackerrank.com/certificates/094fd884796d`,
      img: `/src/assets/images/Certificates/javaScript-intermediate-hackerRank.jpg`,
      _date: ` 11th Aug, 2024`,
      institute: `HackerRank`,
      instituteLogo: `/src/assets/images/Social-Icon/Hackerrank_logo.webp`,
      title: "JavaScript (Intermediate)",
      about: `  Successfully Completed Intermediate JavaScript Skill Test.`,
    },
    {
      url: `https://www.hackerrank.com/certificates/03092ea6817f`,
      img: `/src/assets/images/Certificates/problem-solving-intermediate-hackerRank.jpg`,
      _date: ` 11th Aug, 2024`,
      institute: `HackerRank`,
      instituteLogo: `/src/assets/images/Social-Icon/Hackerrank_logo.webp`,
      title: "JavaScript Problem Solving (Intermediate)",
      about: ` Successfully Completed Intermediate JavaScript Problem Solving Skill Test.`,
    },
    {
      url: `https://certifications.geekster.in/yZqp3XSxCGnEM7WHDwAF4-geekster.pdf`,
      img: `/src/assets/images/Certificates/SQL-geekster.jpg`,
      _date: `11th June, 2024`,
      institute: `Geekster`,
      instituteLogo: `/src/assets/images/Social-Icon/geekster-logo.png`,
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
              <li className="blog-post-item">
                <a href={certificate.url}>
                  <figure className="blog-banner-box">
                    <img
                      src={certificate.img}
                      alt={certificate.title}
                      loading="lazy"
                    />
                  </figure>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="dot"></span>
                      <img
                        className="h-5 rounded"
                        src={certificate.instituteLogo}
                        alt={certificate.institute}
                      />
                      <time className="text-xs" datetime="2024-05-30">
                        {certificate.institute} | {certificate._date}
                      </time>
                    </div>
                    <h3 className="h3 blog-item-title">{certificate.title}</h3>
                    <p className="blog-text">{certificate.about}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
}

export default Certificates;