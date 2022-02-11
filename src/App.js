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
        <div className="d-flex justify-content-sm-center hfonts body">
          These are our services
          <br />
          We make you happy
        </div>
        <div>We have strategies</div>
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
