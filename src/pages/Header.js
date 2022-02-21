import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.scss";

export default function Header() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-sm-center header ">
        <Link to="/Home" className="header p-3 active">
          Home
        </Link>
        <Link to="/Services" className="header p-3">
          Services
        </Link>
        <Link to="/About" className="header p-3">
          About
        </Link>
        <Link to="/Contact" className="header p-3">
          Contact
        </Link>
      </nav>
    </div>
  );
}
