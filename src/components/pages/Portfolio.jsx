import React from "react";
import Header from "./Header";
import Project1 from "../images/project01.PNG";
import Project2 from "../images/project02.PNG";
import Project3 from "../images/project03.PNG";
import Project4 from "../images/project04.PNG";
import Footer from "./Footer";

export default function Portfolio() {
  return (
    <div>
      <section className="portfolio-section">
        <Header />
        <h1>
          My <span className="styled">Work</span>
        </h1>
        <h3>Hi, Check out some of my projects...</h3>
        <div className="project-div">
          <div className="project">
            <img src={Project1} alt="project-1" />
            <a href="#" rel="noopener noreferrer">
              Still in Progress
            </a>
            <a
              href="https://github.com/afridash/lms"
              className="github-links"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-github "></i> View on Github
            </a>
          </div>
          <div className="project">
            <img src={Project2} alt="project-2" />
            <a href="#" rel="noopener noreferrer">
              Not Hosted Online
            </a>
            <a
              href="https://github.com/sirwisdom/serena-law-firm"
              className="github-links"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-github "></i> View on Github
            </a>
          </div>
          <div className="project">
            <img src={Project3} alt="project-3" />
            <a
              href="https://wisdom-react-recipe-app.netlify.com/"
              rel="noopener noreferrer"
            >
              {" "}
              View Website
            </a>
            <a href="#" className="github-links" rel="noopener noreferrer">
              {" "}
              <i className="fab fa-github "></i> View on Github
            </a>
          </div>
          <div className="project">
            <img src={Project4} alt="project-3" />
            <a href="#!" rel="noopener noreferrer">
              {" "}
              Not Hosted Online
            </a>
            <a
              href="https://github.com/sirwisdom/photography-project"
              className="github-links"
              rel="noopener noreferrer"
            >
              {" "}
              <i className="fab fa-github "></i> View on Github
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
