import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./pages/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

export default function App() {
  const Home = () => <div>Home page </div>;
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
