import React from "react";
import AqoLogo from "./AQOLOGOSVG.svg";
import "./NavBar.css";
import Ballons from "./Ballons.svg";

function Navbar() {
  return (
    <nav className="nav">
      <div className="section">
        <img src={Ballons} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">AQO Balloons</h1>
      </div>
      <div className="section">

        <div className="section-titles">
        <a
          href="#Gallery"
          className="navbar-link"
        >
          Balloon Gallery
        </a>
        <a href="#Calendar" className="navbar-link">
          Calendar
        </a>
        <a href="https://www.instagram.com/aqo.balloons/" className="navbar-link">
          Contact Us!
        </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
