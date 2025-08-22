import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./LMS.css";
import NavBar from "./Components/Navbar";
import Home from "./Components/Home";
import OnHome from "./pages/OnHome";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<OnHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
