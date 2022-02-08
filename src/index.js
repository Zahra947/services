import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Router, Routes, Route, Link } from "react-router-dom";

import "./styles.css";
import Header from "./pages/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/services">Services</link>
        </li>
        <li>
          <link to="/about">About</link>
        </li>
        <li>
          <link to="/contact">Contact</link>
        </li>
      </div>
      <Routes>
        <Route path="header" element={<Header />} />
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
