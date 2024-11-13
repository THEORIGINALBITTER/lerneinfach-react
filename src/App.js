// src/App.js
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"; // Importiere die Navbar-Komponente
import Footer from "./components/Footer";  // Importiere die Footer-Komponente
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Hier werden die Daten von der API auf dem externen Server abgerufen
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
    // Messen der Höhe der Navbar nach dem Rendern und Setzen des Abstands
    const header = document.querySelector('header');
    if (header) {
      setNavbarHeight(header.offsetHeight);
    }

    // Eventlistener für Fenstergrößenänderungen, um die Navbar-Höhe dynamisch anzupassen
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
      
      {/* Hauptinhalt mit dynamischem padding-top und zusätzlichem Abstand */}
      <div className="p-4" style={{ paddingTop: `${navbarHeight + 20}px` }}>
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

      <Footer />
    </div>
  );
}

export default App;