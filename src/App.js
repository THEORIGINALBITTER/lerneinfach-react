// src/App.js
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero"; // Import der Hero-Komponente
import Features from "./components/Features"; // Import der Features-Komponente
import ProfessionSection from "./components/ProfessionSection";
import HowItWorks from "./components/HowItWorks";
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Daten von der externen API abrufen
    fetch('https://theoriginalbitter.de/data.php')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Antwort vom Netzwerk nicht gut");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Fehler beim Laden der Daten", error));
  }, []);

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
    <div className="App">
      <Navbar />
      
      {/* Dynamischer Abstand durch Navbar-Höhe */}
      <div className="main-content" style={{ paddingTop: `${navbarHeight + 20}px` }}>
        <Hero /> {/* Einfügen der Hero-Komponente */}
        <Features /> {/* Einfügen der Features-Komponente */}
        <ProfessionSection /> {/* Einfügen der neuen ProfessionSection */}
        <HowItWorks /> {/* Einfügen der neuen HowItWorks-Komponente */}
        {/* Weitere Inhalte */}
        <div className="p-4">
          <h1 className="text-3xl font-bold text-center mb-4">Kurse</h1>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
            {data.map((item) => (
              <div key={item.id} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-2 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;