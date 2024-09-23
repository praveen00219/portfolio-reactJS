import React from "react";

const Projects = ({ onOpenModal }) => {
  const projects = [
    {
      demoLink: ``,
      avatar: `/src/assets/images/project-1.jpg`,
      name: "LinkedIn Clone (MERN Stack)",
      language: "React",
      about: "I developed a LinkedIn clone using the MERN stack...",
    },
    {
      demoLink: ``,
      avatar: `/src/assets/images/project-1.jpg`,
      name: "Orizon",
      language: "React",
      about: "I developed a Orizon using the MERN stack...",
    },
    {
      demoLink: `https://main--css-project0.netlify.app/projests/landing-page-html-css/index.html`,
      avatar: `/src/assets/images/Projects-Things/html-css/Aria-business.jpg`,
      name: "Aria Business Services",
      language: "HTML & CSS",
      about: "",
    },
    {
      demoLink: `https://praveen-expense-tracker-odoo.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/Expense_Tracker.jpg`,
      name: "Odoo | Expense Tracker",
      language: "JavaScript",
      about: ` Finance management tool | Expense Tracker | Data Visualization |
                  AI Financial Advisor | Taxes Calculator + Tour Guide | Payment Integration.`,
    },
    {
      demoLink: `https://praveen-hotelscloneweb.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/html-css/hotelscom.jpg`,
      name: "Hotels.com Clone",
      language: "HTML & CSS",
      about:
        " A clone of Hotels.com featuring hotel listings with multiple images, booking functionality, pricing, and user reviews.",
    },
    {
      demoLink: `https://praveenbook.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/The-Book-Store.jpg`,
      name: "The Book Store",
      language: "JavaScript",
      about: `Explore a variety of books across different categories | Dark mode support | User authentication |
                  Detailed book information.`,
    },
    {
      demoLink: `https://praveen-unsplash-clone.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/unsplash clone (Search).jpg`,
      name: "Hotels.com Clone",
      language: "JavaSccript",
      about: `Search for images from the Unsplash API | Infinite Scrolling`,
    },
    {
      demoLink: `https://praveen-golden-movie-club.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/Movie-club.jpg`,
      name: "Movie Club",
      language: "JavaSccript",
      about: `Search for movies | View movie details | Paginate through results.`,
    },
    {
      demoLink: `https://praveen-calculator.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/calculator.jpg`,
      name: "Digital Calculator",
      language: "JavaSccript",
      about: `Perform Basic Arithmetic Operations.`,
    },
    {
      demoLink: `https://praveen-hot-gadgets.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/hot-gadgets.jpg`,
      name: "Hot Gadgets",
      language: "JavaSccript",
      about: ` Allows users to search for and view details about various phones.`,
    },
    {
      demoLink: `https://praveen-password-generator-app.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/password-generator.jpg`,
      name: "Password Generator",
      language: "JavaSccript",
      about: ` Create secure passwords based on their selected preferences. | Copy to the clipboard.`,
    },
    {
      demoLink: `https://praveen-real-chart.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/real-time-data-chart.jpg`,
      name: "Real Time Data Chart",
      language: "JavaSccript",
      about: `Dynamic | Real-Time Data Visualization Tool uilt using Chart.js.`,
    },
    {
      demoLink: `https://praveen-geeksterpokemon.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/geeksterPokemon.jpg`,
      name: "Geekster Pokemon",
      language: "JavaSccript",
      about: `Showcases Pokémon with a modern | Search Functionality | Filter | Creative Animations.`,
    },
    {
      demoLink: `https://praveen-olympic-leader-board.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/olympic-leaderBoard.jpg`,
      name: "Olympic leaderBoard",
      language: "JavaSccript",
      about: ` Showcases a dynamic leaderboard where users can add players, view the top 3 players, and manage their
                  scores.`,
    },
    {
      demoLink: `https://praveen-digital-clock.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/digital-clock.jpg`,
      name: "Digital Clock",
      language: "JavaSccript",
      about: ` Current time in real-time | Includes creative elements such as dynamic background changes and random
                  time-related facts.`,
    },
    {
      demoLink: `https://praveen-stop-watch.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/stop-watch.jpg`,
      name: "Stop Watch",
      language: "JavaSccript",
      about: `This stopwatch features functionalities to start, stop, reset, and record lap times.`,
    },
    {
      demoLink: `https://praveen-burger-king-franchise.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/Burger-king.jpg`,
      name: "Burger King Virtual Order",
      language: "JavaSccript",
      about: `This web application allows users to select items from the menu, specify quantities, and place an
                  order. The system provides a simulated experience of ordering food online.`,
    },
    {
      demoLink: `https://praveen-joke-generate.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/jokes-generator.jpg`,
      name: "Jokes Generator",
      language: "JavaSccript",
      about: `Interactive web application that generates dad jokes and displays them with animated emoji bubbles and
                  a sound effect.`,
    },
    {
      demoLink: `https://praveen-feedback.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/feedback.jpg`,
      name: "Feedback UI",
      language: "JavaSccript",
      about: `Feedback UI where users can select their feedback (e.g., Unhappy, Neutral, Satisfied) and submit it to
                  display a confirmation message.`,
    },
    {
      demoLink: `https://praveen-find-emoji.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/emoji.jpg`,
      name: "Find Your Emoji",
      language: "JavaSccript",
      about: `Feedback UI where users can select their feedback (e.g., Unhappy, Neutral, Satisfied) and submit it to
                  display a confirmation message.`,
    },
    {
      demoLink: `https://praveen-age-calc.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/age-calculator.jpg`,
      name: "Age Calculator",
      language: "JavaSccript",
      about: `  It's allows to calculate the age.`,
    },
    {
      demoLink: `https://praveen-keypress-code.netlify.app/`,
      avatar: `/src/assets/images/Projects-Things/JavaScript/Keyboardkeycode.jpg`,
      name: "Keyboard's keycode",
      language: "JavaSccript",
      about: `Interactive web application that displays the key and keycode of the pressed key.`,
    },
  ];

  return (
    <article className="projects active" data-page="projects">
      <header>
        <h2 class="h2 article-title">Projects</h2>
      </header>

      <section class="projects">
        <ul class="filter-list">
          <li class="filter-item">
            <button class="active" data-filter-btn>
              All
            </button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>HTML CSS</button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>JavaScript</button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>React-JS</button>
          </li>

          <li class="filter-item">
            <button data-filter-btn>MERN-Stack</button>
          </li>
        </ul>

        <div class="filter-select-box">
          <button class="filter-select" data-select>
            <div class="select-value" data-selecct-value>
              Select category
            </div>
            <div class="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul class="select-list">
            <li class="select-item">
              <button data-select-item>All</button>
            </li>

            <li class="select-item">
              <button data-select-item>HTML CSS</button>
            </li>

            <li class="select-item">
              <button data-select-item>JavaScript</button>
            </li>

            <li class="select-item">
              <button data-select-item>React-JS</button>
            </li>

            <li class="select-item">
              <button data-select-item>MERN-Stack</button>
            </li>
          </ul>
        </div>

        <ul class="project-list">
          {projects.map((project, index) => (
            <li
              class="project-item  active"
              key={index}
              data-filter-item
              data-category={project.language}
            >
              <a href={project.demoLink} onClick={() => onOpenModal(project)}>
                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.avatar} alt={project.name} loading="lazy" />
                </figure>
                <h4 className="project-title">{project.name}</h4>
                <p className="project-category">{project.language}</p>
                <p className="text-xs text-gray-300 px-3">{project.about}</p>
              </a>
            </li>
          ))}

          {/* 
            <li class="project-item  active" data-filter-item data-category="React-JS">
              <a href="#">
                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/project-7.png" alt="summary" loading="lazy">
                </figure>
                <h3 class="project-title">Summary</h3>
                <p class="project-category">React-JS</p>
              </a>
            </li>

            <li class="project-item  active" data-filter-item data-category="JavaScript">
              <a href="https://praveen-unsplash-clone.netlify.app/">
                <figure class="project-img">
                  <div class="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src="./assets/images/Projects-Things/JavaScript/unsplash clone (Search).jpg" alt="task manager"
                    loading="lazy">
                </figure>
                <h3 class="project-title">Unsplash Clone</h3>
                <p class="project-category">JavaScript</p>
                <p class="text-xs text-gray-300 px-3"> Search for images from the Unsplash API | Infinite Scrolling</p>
              </a>
            </li>
          */}
        </ul>
      </section>
    </article>
  );
};

export default Projects;
