import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.scss";
import "../styles/style.css";

export default function Header() {
  return (
    <nav classNAme="navbar navbar-expand-lg d-flex justify-content-sm-center header">
      <div classNAme="container-fluid">
        <div
          classNAme="collapse navbar-collapse d-flex justify-content-sm-center header"
          id="navbarNav"
        >
          <div className="navbar-nav d-flex justify-content-sm-center header">
            <span className="nav-item d-flex justify-content-sm-center header">
              <Link
                to="/Home"
                className="nav-link active"
                aria-current="page"
                title="Home"
              >
                Home
              </Link>
            </span>
            <span className="nav-item d-flex justify-content-sm-center header">
              <Link to="/Services" className="nav-link" title="Services">
                Services
              </Link>
            </span>
            <span className="nav-item d-flex justify-content-sm-center header">
              <Link to="/About" className="nav-link" title="About">
                About
              </Link>
            </span>
            <span className="nav-item d-flex justify-content-sm-center header">
              <Link to="/Contact" className="nav-link" title="Contact">
                Contact
              </Link>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
