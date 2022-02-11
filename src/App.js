import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        <div className="d-flex align-items-sm-center justify-content-sm-center hfonts body">
          These are our services
          <br />
          We make you happy
        </div>
        <div className="row">
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center">
            We have strategies.We have strategies.We have strategies.We have
            strategies.We have strategies.We have strategies.We have
            strategies.We have strategies.We have strategies.
          </div>
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center py-5">
            <img
              src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="a jungle"
              className="img-fluid mx-auto d-block"
            />
          </div>
        </div>
        <div className="d-flex align-items-sm-center justify-content-sm-center hfonts body-1">
          Lets make it simple
          <br />
          We make you happy
        </div>
        <div className="row">
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center py-5">
            <img
              src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="a jungle"
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div className="col-6 d-flex align-items-sm-center justify-content-sm-center">
            We have strategies.We have strategies.We have strategies.We have
            strategies.We have strategies.We have strategies.We have
            strategies.We have strategies.We have strategies.
          </div>
        </div>
        <div>
          <div className="row bg-light footer">
            <div className="col-4 d-flex align-items-sm-center justify-content-sm-center">
              About Us
            </div>
            <div className="col-4 d-flex align-items-sm-center justify-content-sm-center">
              Quick Links
            </div>
            <div className="col-4 d-flex align-items-sm-center justify-content-sm-center">
              Follow Us
            </div>
          </div>
          <div className="row bg-light footer">
            <div className="col d-flex align-items-sm-center justify-content-sm-center">
              © 2022.All Rights Reserved. Made Zahra Rabiei Demo Images:
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
