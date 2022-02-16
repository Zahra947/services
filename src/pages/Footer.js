import React from "react";
import { Link } from "react-router-dom";

import "../styles/Home.scss";
import "../styles/style.css";

export default function Footer() {
  return (
    <div>
      <div className="row bg-light footer">
        <div className="col-6 d-flex justify-content-sm-center p-1">
          Quick Links
        </div>
        <div className="col-6 d-flex justify-content-sm-center p-1">
          Follow Us
        </div>
        <div className="col-6 d-flex justify-content-sm-center p-1">
          <ul className="liststyle">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col-6 d-flex justify-content-sm-center p-1">
          <ul className="liststyle">
            <li>
              <a href="https://www.facebook.com">facebook</a>
            </li>
            <li>
              <a href="https://www.twitter.com">twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com">instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row bg-light footer">
        <div className="col d-flex align-items-sm-center justify-content-sm-center p-1">
          © 2022.All Rights Reserved. Made by{" "}
          <a href="https://infallible-brown-4c7ef9.netlify.app/">
            Zahra Rabiei
          </a>
          . Demo Images: <a href="https://www.pexels.com/">pexels</a>
        </div>
      </div>
    </div>
  );
}
