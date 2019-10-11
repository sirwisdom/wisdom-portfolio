import React from "react";
import Header from "./Header";

const Navbar = () => {
  return (
    <div className="header-div" id="bg-image">
      <Header />
      <main className="main-div">
        <h1 className="lg-heading">
          Akpomeyoma <span>Wisdom</span>
        </h1>
        <h3 className="sm-heading">Front-End Developer</h3>
        <div className="icons">
          <a href="https://twitter.com/AkpomeyomaW" rel="noopener noreferrer">
            <i className="fab fa-twitter "></i>
          </a>

          <a
            href="https://web.facebook.com/akpomeyoma.wisdom1?ref=bookmarks"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook "></i>{" "}
          </a>

          <a
            href="https://www.linkedin.com/in/wisdom-akpomeyoma-a02942175/"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin "></i>{" "}
          </a>

          <a href="https://github.com/sirwisdom" rel="noopener noreferrer">
            <i className="fab fa-github "></i>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
