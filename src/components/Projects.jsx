import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      demoLink: `https://praveen-portfolio-reactjs.netlify.app/`,
      avatar: `/assets/images/showcase/desktop-views.png`,
      name: "Portfolio App",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/portfolio-reactJS`,
      about:
        "This is my personal portfolio website built using React, Vite, Tailwind CSS, HTML, CSS, and JavaScript. It showcases my skills, education, projects, certificates, and professional experience as a Full Stack Developer.",
    },
    {
      demoLink: ``,
      avatar: `/assets/images/project-1.jpg`,
      name: "Orizon",
      language: "React",
      gitHub_repo: ``,
      about: "I developed a Orizon using the MERN stack...",
    },
    {
      demoLink: `https://main--css-project0.netlify.app/projests/landing-page-html-css/index.html`,
      avatar: `/assets/images/Projects-Things/html-css/Aria-business.jpg`,
      name: "Aria Business Services",
      language: "HTML & CSS",
      gitHub_repo: `https://github.com/praveen00219/CSS_by_Geekster/tree/main/Projests/Landing-page-HTML-CSS`,
      about:
        " This fully responsive website for Aria showcases our comprehensive consultancy services and commitment to driving business growth through innovative online marketing and conversion optimization tactics.",
    },
    {
      demoLink: `https://praveen-expense-tracker-odoo.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/Expense_Tracker.jpg`,
      name: "Odoo | Expense Tracker",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Expense-tracker-odoo-js`,
      about: ` Finance management tool | Expense Tracker | Data Visualization |
                  AI Financial Advisor | Taxes Calculator + Tour Guide | Payment Integration.`,
    },
    {
      demoLink: `https://praveen-hotelscloneweb.netlify.app/`,
      avatar: `/assets/images/Projects-Things/html-css/hotelscom.jpg`,
      name: "Hotels.com Clone",
      language: "HTML & CSS",
      gitHub_repo: `https://github.com/praveen00219/hotel.comClone`,
      about:
        " A clone of Hotels.com featuring hotel listings with multiple images, booking functionality, pricing, and user reviews.",
    },
    {
      demoLink: `https://praveenbook.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/The-Book-Store.jpg`,
      name: "The Book Store",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Book-js`,
      about: `Explore a variety of books across different categories | Dark mode support | User authentication |
                  Detailed book information.`,
    },
    {
      demoLink: `https://praveen-unsplash-clone.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/unsplash clone (Search).jpg`,
      name: "Unsplash clone",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/unsplash-clone-js`,
      about: `Search for images from the Unsplash API | Infinite Scrolling`,
    },
    {
      demoLink: `https://praveen-golden-movie-club.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/Movie-club.jpg`,
      name: "Movie Club",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/golden-movie-club`,
      about: `Search for movies | View movie details | Paginate through results.`,
    },
    {
      demoLink: `https://praveen-calculator.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/calculator.jpg`,
      name: "Digital Calculator",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/calculator-js`,
      about: `Perform Basic Arithmetic Operations.`,
    },
    {
      demoLink: `https://praveen-hot-gadgets.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/hot-gadgets.jpg`,
      name: "Hot Gadgets",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Weekly-Test4-js`,
      about: ` Allows users to search for and view details 
      about various phones.`,
    },
    {
      demoLink: `https://praveen-password-generator-app.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/password-generator.jpg`,
      name: "Password Generator",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/m5-weekly-test-1Password-generator`,
      about: ` Create secure passwords based on their selected preferences. | Copy to the clipboard.`,
    },
    {
      demoLink: `https://praveen-real-chart.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/real-time-data-chart.jpg`,
      name: "Real Time Data Chart",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/real-chart-js`,
      about: `Dynamic | Real-Time Data Visualization Tool uilt using Chart.js.`,
    },
    {
      demoLink: `https://praveen-geeksterpokemon.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/geeksterPokemon.jpg`,
      name: "Geekster Pokemon",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/GeeksterPokemon-js`,
      about: `Showcases Pokémon with a modern | Search Functionality | Filter | Creative Animations.`,
    },
    {
      demoLink: `https://praveen-olympic-leader-board.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/olympic-leaderBoard.jpg`,
      name: "Olympic leaderBoard",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Olympic-Leader_Board`,
      about: ` Showcases a dynamic leaderboard where users can add players, view the top 3 players, and manage their
                  scores.`,
    },
    {
      demoLink: `https://praveen-digital-clock.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/digital-clock.jpg`,
      name: "Digital Clock",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Digital-clock-js`,
      about: ` Current time in real-time | Includes creative elements such as dynamic background changes and random
                  time-related facts.`,
    },
    {
      demoLink: `https://praveen-stop-watch.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/stop-watch.jpg`,
      name: "Stop Watch",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Stop-watch-js`,
      about: `This stopwatch features functionalities to start, stop, reset, and record lap times.`,
    },
    {
      demoLink: `https://praveen-burger-king-franchise.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/Burger-king.jpg`,
      name: "Burger King Virtual Order",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Burger-King-franchise-js`,
      about: `This web application allows users to select items from the menu, specify quantities, and place an
                  order. The system provides a simulated experience of ordering food online.`,
    },
    {
      demoLink: `https://praveen-joke-generate.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/jokes-generator.jpg`,
      name: "Jokes Generator",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Jokes-generator-js`,
      about: `Interactive web application that generates dad jokes and displays them with animated emoji bubbles and
                  a sound effect.`,
    },
    {
      demoLink: `https://praveen-feedback.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/feedback.jpg`,
      name: "Feedback UI",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/feedback-js`,
      about: `Feedback UI where users can select their feedback (e.g., Unhappy, Neutral, Satisfied) and submit it to
                  display a confirmation message.`,
    },
    {
      demoLink: `https://praveen-find-emoji.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/emoji.jpg`,
      name: "Find Your Emoji",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Find-Emoji`,
      about: `Feedback UI where users can select their feedback (e.g., Unhappy, Neutral, Satisfied) and submit it to
                  display a confirmation message.`,
    },
    {
      demoLink: `https://praveen-age-calc.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/age-calculator.jpg`,
      name: "Age Calculator",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Age-calculator-`,
      about: `  It's allows to calculate the age.`,
    },
    {
      demoLink: `https://praveen-keypress-code.netlify.app/`,
      avatar: `/assets/images/Projects-Things/JavaScript/Keyboardkeycode.jpg`,
      name: "Keyboard's keycode",
      language: "JavaScript",
      gitHub_repo: `https://github.com/praveen00219/Generating-the-keyboard-code`,
      about: `Interactive web application that displays the key and keycode of the pressed key.`,
    },
  ];

  // State to track the selected filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle filter button clicks
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter projects based on the selected category
  const filteredProjects = projects.filter((project) =>
    selectedCategory === "All" ? true : project.language === selectedCategory
  );

  return (
    <article className="projects active" data-page="projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        {/* Filter Buttons */}
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className={selectedCategory === "All" ? "active" : ""}
              onClick={() => handleFilterClick("All")}
            >
              All
            </button>
          </li>
          <li className="filter-item">
            <button
              className={selectedCategory === "HTML & CSS" ? "active" : ""}
              onClick={() => handleFilterClick("HTML & CSS")}
            >
              HTML & CSS
            </button>
          </li>
          <li className="filter-item">
            <button
              className={selectedCategory === "JavaScript" ? "active" : ""}
              onClick={() => handleFilterClick("JavaScript")}
            >
              JavaScript
            </button>
          </li>
          <li className="filter-item">
            <button
              className={selectedCategory === "React" ? "active" : ""}
              onClick={() => handleFilterClick("React")}
            >
              React
            </button>
          </li>
          <li className="filter-item">
            <button
              className={selectedCategory === "Front-End" ? "active" : ""}
              onClick={() => handleFilterClick("Front-End")}
            >
              Front-End
            </button>
          </li>
          <li className="filter-item">
            <button
              className={selectedCategory === "Back-End" ? "active" : ""}
              onClick={() => handleFilterClick("Back-End")}
            >
              Back-End
            </button>
          </li>
          <li className="filter-item">
            <button
              className={selectedCategory === "MERN Stack" ? "active" : ""}
              onClick={() => handleFilterClick("MERN Stack")}
            >
              MERN Stack
            </button>
          </li>
        </ul>

        {/* Project List */}
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              className="project-item active"
              key={"project-item" + index}
              data-filter-item
              data-category={project.language}
            >
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.avatar} alt={project.name} loading="lazy" />
                </figure>
                <div className="flex items-center justify-between">
                  <h4 className="project-title">{project.name}</h4>
                  <p className="flex gap-2">
                    <a
                      className="text-blue-200 hover:text-blue-400  hover:underline text-sm"
                      href={project.demoLink}
                      target="_blank"
                    >
                      Live
                    </a>
                    <a
                      className="text-yellow-200 hover:text-yellow-400  ml-2 text-sm"
                      href={project.gitHub_repo}
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </p>
                </div>
                <p className="project-category">{project.language}</p>
                <p className="text-xs text-gray-300 px-3">{project.about}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;
