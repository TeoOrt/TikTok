import React from "react";
import "./NavBar.css";
import Ballons from "./AQO(1).png";

const Navbar = () => {
  return (
    <header className="header">
      <img src={Ballons} alt="Logo" className="navbar-logo" />

      <input className="side-menu" type="checkbox" id="side-menu" />
      <label className="hamb" for="side-menu">
        <span className="hamb-line"></span>
      </label>

      <nav className="nav">
        <ul className="menu">
          <li>
            <a href="#Gallery">Balloon Gallery</a>
          </li>
          <li>
            <a href="#Calendar">Calendar</a>
          </li>
          <li>
            <a href="https://www.instagram.com/aqo.balloons/">Contact Us!</a>
          </li>

          <li>
            <button href="#" className="Button-close">
              Login
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
