import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./pages/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/style.css";
//import hero_1 from "./media/hero_1.jpg";

export default function App() {
  //this function is the homepage that is designed here
  const Home = function () {
    return (
      <div>
        <div className="img-fluid d-flex align-items-sm-center justify-content-sm-start hfonts body p-5">
          Welcome here
        </div>
        <div className="row d-flex ">
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center texts p-5">
            We provide you services.
          </div>
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center">
            <img
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?cs=srgb&dl=pexels-fauxels-3183197.jpg&fm=jpg"
              alt="office team"
              className="img-fluid p-4"
            />
          </div>
        </div>
        <div className="d-flex align-items-sm-center justify-content-sm-start hfonts-1 body-1 p-5">
          Lets make it simple
        </div>
        <div className="row d-flex">
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center">
            <img
              src="https://images.pexels.com/photos/7642001/pexels-photo-7642001.jpeg?cs=srgb&dl=pexels-alena-darmel-7642001.jpg&fm=jpg"
              alt="satisfaction"
              className="img-fluid p-5 d-block"
            />
          </div>
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center texts-1 p-5">
            <Link to="/About">Why choose us.</Link>
          </div>
        </div>
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
              © 2022.All Rights Reserved. Made by Zahra Rabiei. Demo Images:
              <a href="https://www.pexels.com/">pexels</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
