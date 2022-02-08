import React from "react";
import "./Header.scss";
import "./Services";

export default function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light  d-flex justify-content-sm-center">
        <a
          class="navbar-brand p-3
        "
          href="/.Header.js"
        >
          Home
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a
          class="navbar-brand p-3
        "
          href="./Services.js"
        >
          Services
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a
          class="navbar-brand p-3
        "
          href="#"
        >
          About
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a
          class="navbar-brand p-3
        "
          href="#"
        >
          Contact
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
}
