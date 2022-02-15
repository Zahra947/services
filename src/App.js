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
        <div className="img-fluid d-flex align-items-sm-center justify-content-sm-center hfonts body p-5">
          These are our services
          <br />
          We make you happy
        </div>
        <div className="row d-flex ">
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center p-5">
            We have strategies.We have strategies.We have strategies.We have
            strategies.We have strategies.We have strategies.We have
            strategies.We have strategies.We have strategies.
          </div>
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center">
            <img
              src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="a jungle"
              className="img-fluid p-4"
            />
          </div>
        </div>
        <div className="d-flex align-items-sm-center justify-content-sm-center hfonts body-1 p-5">
          Lets make it simple
          <br />
          We make you happy
        </div>
        <div className="row d-flex">
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center">
            <img
              src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="a jungle"
              className="img-fluid p-5 d-block"
            />
          </div>
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center p-5">
            We have strategies.We have strategies.We have strategies.We have
            strategies.We have strategies.We have strategies.We have
            strategies.We have strategies.We have strategies.
          </div>
        </div>
        <div>
          <div className="row bg-light footer">
            <div className="col-4 d-flex align-items-sm-center justify-content-sm-center p-1">
              About Us
            </div>
            <div className="col-4 d-flex align-items-sm-center justify-content-sm-center p-1">
              Quick Links
            </div>
            <div className="col-4 d-flex align-items-sm-center justify-content-sm-center p-1">
              Follow Us
            </div>
            <div className="col-4 d-flex align-items-sm-center justify-content-sm-center p-5">
              We provide online services to make you happy.We provide online
              services to make you happy.We provide online services to make you
              happy.We provide online services to make you happy.We provide
              online services to make you happy.
            </div>
            <div className="col-4 d-flex align-items-sm-center justify-content-sm-center p-1">
              <ul className="list-group">
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
          </div>
          <div className="row bg-light footer">
            <div className="col d-flex align-items-sm-center justify-content-sm-center p-2">
              © 2022.All Rights Reserved. Made by Zahra Rabiei Demo Images:
              Unsplash
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
