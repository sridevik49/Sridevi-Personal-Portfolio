import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css"

import Header from "./Navbar/Nav";
import HeroSection from "./Home/Home";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Project/Project";
import Education from "./Education/education";
import Contact from "./Contact/contact";


function Index() {
  return (
    
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default Index;