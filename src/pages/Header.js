import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.scss";
import "../styles/style.css";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg header d-flex justify-content-sm-center">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/Home"
                className="nav-link active p-3"
                aria-current="page"
                title="Home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Services" className="nav-link p-3" title="Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link p-3" title="About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link p-3" title="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
