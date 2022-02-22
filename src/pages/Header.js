import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.scss";
import "../styles/style.css";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg d-flex justify-content-sm-center header">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav d-flex justify-content-sm-center header">
            <span class="nav-item">
              <Link
                to="/Home"
                class="p-3 nav-link active"
                aria-current="page"
                title="Home"
              >
                Home
              </Link>
            </span>
            <span class="nav-item">
              <Link to="/Services" className="nav-link" title="Services">
                Services
              </Link>
            </span>
            <span class="nav-item">
              <Link to="/About" className="nav-link" title="About">
                About
              </Link>
            </span>
            <span class="nav-item">
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
