import React, { useState } from "react";
import { NavLinks } from "../services/NavLinks";
import { Link } from "react-router-dom";

const Header = props => {
  const [isVisible, handleVisible] = useState(false);
  let menuStyle;
  !isVisible ? (menuStyle = "menu") : (menuStyle = "menu show");

  return (
    <header>
      <div className="menu-div " onClick={() => handleVisible(!isVisible)}>
        <i className="fas fa-align-right"></i>
      </div>
      <nav className={menuStyle}>
        <div className={isVisible ? "menu-branding show" : "menu-branding "}>
          <div className="portrait"></div>
        </div>

        <ul className={!isVisible ? "menu-nav" : "menu-nav show"}>
          {NavLinks.map(link => (
            <li
              key={link.id}
              className={isVisible ? "nav-item show" : "nav-item "}
            >
              <Link to={link.path}>
                <i className={link.icon}></i>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
