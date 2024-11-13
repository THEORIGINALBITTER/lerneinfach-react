// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Verwenden Sie Routes anstelle von Switch
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProfessionSection from "./components/ProfessionSection";
import HowItWorks from "./components/HowItWorks";
import PopularCourses from "./components/PopularCourses";
import Courses from "./components/Courses"; // Importieren Sie die neue Courses-Seite
import './App.css';

function App() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Navbar-Höhe dynamisch anpassen
    const header = document.querySelector('header');
    if (header) {
      setNavbarHeight(header.offsetHeight);
    }

    const handleResize = () => {
      if (header) {
        setNavbarHeight(header.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main-content" style={{ paddingTop: `${navbarHeight + 20}px` }}>
          <Routes> {/* Verwenden Sie Routes */}
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                <ProfessionSection />
                <HowItWorks />
                <PopularCourses />
              </>
            } />
            <Route path="/courses" element={<Courses />} /> {/* Verwenden Sie element anstelle von component */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;