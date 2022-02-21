import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.scss";

export default function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-sm-center header">
        <Link
          to="/Home"
          className="header p-3 nav-link active"
          aria-current="page"
        >
          Home
        </Link>
        <Link to="/Services" className="header p-3 nav-link">
          Services
        </Link>
        <Link to="/About" className="header p-3 nav-link">
          About
        </Link>
        <Link to="/Contact" className="header p-3 nav-link">
          Contact
        </Link>
      </nav>
    </div>
  );
}
