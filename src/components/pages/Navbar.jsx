import React from "react";
import { Link } from "react-router-dom";
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
          <Link>
            <i className="fab fa-twitter "></i>
          </Link>
          <Link>
            <i className="fab fa-facebook "></i>
          </Link>
          <Link>
            <i className="fab fa-linkedin "></i>
          </Link>
          <Link to="https://github.com/sirwisdom">
            <i className="fab fa-github "></i>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Navbar;
