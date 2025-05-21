import React, { useState } from "react";
import { motion } from "framer-motion";

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
      demoLink: `https://praveen-word-connect-reactapp.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/13 wordConnect.jpg`,
      name: "Word Connect",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/wordConnect-reacts`,
      about: `The Word Connect project is a fun and interactive word puzzle game where users can connect groups of related words by clicking on them. The game challenges players to identify related words based on categories`,
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
    {
      demoLink: `https://praveen-linked-in-clone-reactjs.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/10 linkedIn-clone.jpg`,
      name: "linkedIn Clone (Front-End)",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/linkedIn-Clone-React`,
      about:
        "A clone of LinkedIn's interface, implemented using React, Redux, Firebase, SCSS, Ant Design (antd), Axios, and other technologies.",
    },
    {
      demoLink: `https://praveen-makecontactapp-redux-firebase.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/11 makeContact-app.jpg`,
      name: "MakeContact App (Front-End)",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/redux-firebase-react-project`,
      about:
        "A simple and intuitive web application to manage your contacts, including favorite contacts, using Firebase for data storage. Built with React and Redux, this app allows you to view, add, search, and delete contacts, making it easy to keep your contact information organized.",
    },
    {
      demoLink: `https://praveen-google-drive-react.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/12 google-drive-clone.jpg`,
      name: "Google Drive Clone (Front-End)",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/google-drive-react-firebase`,
      about:
        "A Google Drive Clone built with React, Vite, Redux, Tailwind CSS, Styled Components, Material-ui/material-icons, and Firebase. This application enables users to manage files and folders, offering features like file uploads, folder creation, deletion, restoring , and favoriting, along with a fullscreen preview option.",
    },
    {
      demoLink: `https://slack-chatbot-r6jw.onrender.com/`,
      avatar: `/assets/images/Projects-Things/ReactJs/15-Slack-Chat-App.jpg`,
      name: "Slack Chat App (Front-End)",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/Slack-Chat-App`,
      about:
        "A Slack Chat App built with React, Vite, Redux, Tailwind CSS, Styled Components, Material-ui/material-icons, and Firebase. This application enables users to messaging, offering features like channel create, login authentication by google.",
    },
    {
      demoLink: `https://funflix-km14.onrender.com/`,
      avatar: `/assets/images/Projects-Things/ReactJs/14-funflix-movie-app.jpg`,
      name: "Funflix Movie App (Front-End)",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/Funflix-The-move-app`,
      about:
        "A Funflix Movie App built with React, Context API, and @react-ui/react-icons. This application allows users to browse the latest movies, filter them by different categories, and watch trailers using the TMDB API. The modern UI is designed by me.",
    },
    {
      demoLink: `https://praveen-unsplash-clone-reactjs.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/1 unsplash Clone.jpg`,
      name: "unsplash-clone",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/unsplash-clone-reactjs`,
      about:
        "This component includes a search bar, category navigation, and mobile-friendly features like a hamburger menu and filter toggling. The project is built with React.js and styled using Tailwind CSS for responsive design.",
    },
    {
      demoLink: `https://praveen-img-generator-react-app.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/2 search-img-unsplash.jpg`,
      name: "Image Search App",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/img-generator-app-react`,
      about:
        "This is a modern React-based image search application that uses the Unsplash API to fetch images based on a user's query.",
    },
    {
      demoLink: `https://praveen-lorem-generate-app.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/3 loream-paragraph-generator.jpg`,
      name: "loream Paragraph Generator",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/lorem-generate-ReactJS`,
      about:
        "The Lorem Ipsum Generator is a web-based tool built with React that allows users to generate placeholder text (Lorem Ipsum).",
    },
    {
      demoLink: `https://praveen-edu.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/4 education-planner.jpg`,
      name: "Education Planner App",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/education-planner-react`,
      about:
        "A simple educational planner app built using React. This app allows users to add subjects and the number of hours they plan to dedicate to each subject. Users can increment or decrement the hours for each subject, and the planner data is persisted using local storage.",
    },
    {
      demoLink: `https://praveen-chart-with-reactjs.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/5 EMI loan chart.jpg`,
      name: "EMI Loan Calculator App",
      language: "React, ChartJs",
      gitHub_repo: `https://github.com/praveen00219/ChartWithReactJS`,
      about:
        "Interactive EMI Loan Calculator with Dynamic Visualization: Built with React and Chart.js",
    },
    {
      demoLink: `https://praveen-shopping-cart-reactjs.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/6 shopping-cart.jpg`,
      name: "Shopping Cart App",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/shoppingCartReactjs`,
      about:
        "The project features a cart icon that shows the number of items added to the cart, with basic functionality for adding, removing, and adjusting the quantity of items.",
    },
    {
      demoLink: `https://praveen-directory-app-reactjs.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/7 directory-app.jpg`,
      name: "Directory App",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/Directory-App-Reactjs`,
      about:
        "This Person Management Application is a React.js-based project that allows users to manage personal details such as Name, Date of Birth, Aadhar Number, and Mobile Number. ",
    },
    {
      demoLink: `https://praveen-student-from.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/8 student-registration-form.jpg`,
      name: "Students Form",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/studentFormReact`,
      about:
        "Registering students, displaying their details, and providing features to edit, delete, and view individual student information with validation.",
    },
    {
      demoLink: `https://praveen-text-translator-react.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/9 text-translator.jpg`,
      name: "Text Translator App",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/text-translator-Reactjs`,
      about:
        "The Text Translator is a web application built with React, designed to provide seamless text translation from one language to another.",
    },
    {
      demoLink: `https://praveen-linked-in-clone-reactjs.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/10 linkedIn-clone.jpg`,
      name: "linkedIn Clone (Front-End)",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/linkedIn-Clone-React`,
      about:
        "A clone of LinkedIn's interface, implemented using React, Redux, Firebase, SCSS, Ant Design (antd), Axios, and other technologies.",
    },
    {
      demoLink: `https://praveen-makecontactapp-redux-firebase.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/11 makeContact-app.jpg`,
      name: "MakeContact App (Front-End)",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/redux-firebase-react-project`,
      about:
        "A simple and intuitive web application to manage your contacts, including favorite contacts, using Firebase for data storage. Built with React and Redux, this app allows you to view, add, search, and delete contacts, making it easy to keep your contact information organized.",
    },
    {
      demoLink: `https://praveen-google-drive-react.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/12 google-drive-clone.jpg`,
      name: "Google Drive Clone (Front-End)",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/google-drive-react-firebase`,
      about:
        "A Google Drive Clone built with React, Vite, Redux, Tailwind CSS, Styled Components, Material-ui/material-icons, and Firebase. This application enables users to manage files and folders, offering features like file uploads, folder creation, deletion, restoring , and favoriting, along with a fullscreen preview option.",
    },
    {
      demoLink: `https://geekconnect-prvn.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/19-geekConnect.jpg`,
      name: "Geek-Connect",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/Geek-Connect`,
      about:
        "Geek-Connect is a modern social media front-end application built using React, Redux, and Material UI, leveraging the DummyJSON API API. This project allows users to interact with posts, like, comment, explore trending hashtags, and view user profiles in a responsive and user-friendly interface.",
    },
    {
      demoLink: `https://waypoint-explorer-app.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/18-waypoint-explorer.jpg`,
      name: "Waypoint Explorer App (Front-End)",
      language: "React",
      gitHub_repo: `https://github.com/praveen00219/Waypoint-Explorer`,
      about:
        "Waypoint Mapper is an interactive map-based application that allows users to draw routes, measure distances between waypoints (longitude and latitude), and view detailed waypoint information.",
    },
    {
      demoLink: `https://praveen-linked-in-clone-reactjs.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/10 linkedIn-clone.jpg`,
      name: "linkedIn Clone",
      language: "Front-End",
      gitHub_repo: `https://github.com/praveen00219/linkedIn-Clone-React`,
      about:
        "A clone of LinkedIn's interface, implemented using React, Redux, Firebase, SCSS, Ant Design (antd), Axios, and other technologies.",
    },
    {
      demoLink: `https://praveen-makecontactapp-redux-firebase.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/11 makeContact-app.jpg`,
      name: "MakeContact App",
      language: "Front-End",
      gitHub_repo: `https://github.com/praveen00219/redux-firebase-react-project`,
      about:
        "A simple and intuitive web application to manage your contacts, including favorite contacts, using Firebase for data storage. Built with React and Redux, this app allows you to view, add, search, and delete contacts, making it easy to keep your contact information organized.",
    },
    {
      demoLink: `https://praveen-google-drive-react.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/12 google-drive-clone.jpg`,
      name: "Google Drive Clone",
      language: "Front-End",
      gitHub_repo: `https://github.com/praveen00219/google-drive-react-firebase`,
      about:
        "A Google Drive Clone built with React, Vite, Redux, Tailwind CSS, Styled Components, Material-ui/material-icons, and Firebase. This application enables users to manage files and folders, offering features like file uploads, folder creation, deletion, restoring , and favoriting, along with a fullscreen preview option.",
    },
    {
      demoLink: `https://slack-chatbot-r6jw.onrender.com/`,
      avatar: `/assets/images/Projects-Things/ReactJs/15-Slack-Chat-App.jpg`,
      name: "Slack Chat App",
      language: "Front-End",
      gitHub_repo: `https://github.com/praveen00219/Slack-Chat-App`,
      about:
        "A Slack Chat App built with React, Vite, Redux, Tailwind CSS, Styled Components, Material-ui/material-icons, and Firebase. This application enables users to messaging, offering features like channel create, login authentication by google.",
    },
    {
      demoLink: `https://geekconnect-prvn.netlify.app/`,
      avatar: `/assets/images/Projects-Things/ReactJs/19-geekConnect.jpg`,
      name: "Geek-Connect",
      language: "Front-End",
      gitHub_repo: `https://github.com/praveen00219/Geek-Connect`,
      about:
        "Geek-Connect is a modern social media front-end application built using React, Redux, and Material UI, leveraging the DummyJSON API API. This project allows users to interact with posts, like, comment, explore trending hashtags, and view user profiles in a responsive and user-friendly interface.",
    },
    {
      demoLink: `https://funflix-km14.onrender.com/`,
      avatar: `/assets/images/Projects-Things/ReactJs/14-funflix-movie-app.jpg`,
      name: "Funflix Movie App",
      language: "Front-End",
      gitHub_repo: `https://github.com/praveen00219/Funflix-The-move-app`,
      about:
        "A Funflix Movie App built with React, Context API, and @react-ui/react-icons. This application allows users to browse the latest movies, filter them by different categories, and watch trailers using the TMDB API. The modern UI is designed by me.",
    },
    {
      demoLink: `https://zomato-clone-frontend-9g69.onrender.com/`,
      demoAdminPanel: `https://zomato-clone-admin-jklc.onrender.com/`,
      avatar: `/assets/images/Projects-Things/ReactJs/16-Zomato-Food-App.jpg`,
      name: "Zomato Food App",
      language: "Back-End",
      gitHub_repo: `https://github.com/praveen00219/Zomato-Clone`,
      about:
        "This is a full-stack food delivery application (including an Admin Panel) built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse the menu, add food items to their cart, place orders, and view their order history.",
    },
    {
      demoLink: `https://zomato-clone-frontend-9g69.onrender.com/`,
      demoAdminPanel: `https://zomato-clone-admin-jklc.onrender.com/`,
      avatar: `/assets/images/Projects-Things/ReactJs/16-Zomato-Food-App.jpg`,
      name: "Zomato Food App",
      language: "MERN Stack",
      gitHub_repo: `https://github.com/praveen00219/Zomato-Clone`,
      about:
        "This is a full-stack food delivery application (including an Admin Panel) built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to browse the menu, add food items to their cart, place orders, and view their order history.",
    },
    {
      demoLink: `https://medico-book.onrender.com`,
      demoAdminPanel: `https://medico-book-admin.onrender.com`,
      avatar: `/assets/images/Projects-Things/Mern/03-Medico-doctor-booking-app.jpg`,
      name: "Medico App",
      language: "MERN Stack",
      gitHub_repo: `https://github.com/praveen00219/Zomato-Clone`,
      about:
        "Developed a real-time doctor consultation/booking platform with integrated video calling using ZegoCloud API, enabling secure virtual appointments. Reduced in-person visits by 70%, significantly improving patient accessibility and operational efficiency.",
    },
    {
      demoLink: `https://expense-tracker-mern-prvn.onrender.com/`,
      avatar: `/assets/images/Projects-Things/Mern/02-Expense-Tracker-Dash.jpg`,
      name: "Expense Tracker",
      language: "MERN Stack",
      gitHub_repo: `https://github.com/praveen00219/Expense-Tracker-MERN`,
      about:
        "The Expense Tracker Application is a full-stack web application that allows users to track their expenses, categorize them, and view summaries. It features user authentication, expense management, and a dashboard with visualizations.",
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
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.001 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              className="project-card"
            >
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
                    <img
                      src={project.avatar}
                      alt={project.name}
                      loading="lazy"
                    />
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
                      {project.demoAdminPanel && (
                        <a
                          className="text-blue-200 hover:text-blue-400  hover:underline text-sm"
                          href={project.demoAdminPanel}
                          target="_blank"
                        >
                          Admin
                        </a>
                      )}
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
            </motion.div>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Projects;
