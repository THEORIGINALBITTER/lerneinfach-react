// src/components/ProfessionSection.jsx
import React from 'react';

function ProfessionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        
        {/* Bildbereich links */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/pump.png" // Der Pfad zu deinem Bild
            alt="Learning Illustration"
            className="w-full max-w-md" // Volle Breite, begrenzt auf eine maximale Breite
          />
        </div>
        
        {/* Textbereich rechts */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Lerne Wissen mit echten Projekten</h2>
          <p className="text-gray-600 mb-6">
          Vertiefe dein Wissen durch praxisnahe Projekte! Unser innovativer Lernansatz verbindet Theorie mit echten, praxisrelevanten Aufgaben, sodass du direkt an realen Projekten arbeiten kannst. Egal ob du deine Fähigkeiten in IT, Marketing, Design oder Business weiterentwickeln möchtest – bei uns sammelst du wertvolle Erfahrung und wendest dein Wissen sofort praktisch an. Starte jetzt und lerne nicht nur für das Wissen, sondern für den Erfolg in deiner Karriere!
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
            Starte jetzt
          </button>
        </div>

      </div>
    </section>
  );
}

export default ProfessionSection;