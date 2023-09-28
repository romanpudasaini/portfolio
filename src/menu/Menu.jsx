/* eslint-disable no-unused-vars */
import React from "react";
import "./menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <ul className="menuul">
        <li className="bottm">
          <a className="home" href="#intro">
            Home
          </a>
        </li>
        <li className="bottm">
          <a className="home" href="#portfolio">
            Portfolio
          </a>
        </li>
        <li className="bottm">
          <a className="home" href="#work">
            Works
          </a>
        </li>
        <li className="bottm">
          <a className="home" href="#testimonial">
            Testimonial
          </a>
        </li>
        <li className="bottm">
          <a className="home" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
