import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.scss";
import "../styles/style.css";

export default function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar d-flex justify-content-sm-center header">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              to="/Home"
              className="p-3 nav-link active"
              aria-current="page"
              title="Home"
            >
              Home
            </Link>
            <Link to="/Services" className="p-3 nav-link" title="Services">
              Services
            </Link>
            <Link to="/About" className="p-3 nav-link" title="About">
              About
            </Link>
            <Link to="/Contact" className="p-3 nav-link" title="Contact">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
