// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        
        {/* Textbereich */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
          Praxisnahe  <br /> Media-, Web- und Marketing-Kurse
          </h1>
          <p className="mt-4 text-lg text-blue-600 font-semibold">
          Unsere Kurse wurden von über 2.400 Menschen als ausgezeichnet bewertet <span className="text-red-500">★ ★ ★ ★ ★</span>
          </p>
          <p className="mt-4 text-gray-600">
          Heute haben bereits mehr als 3.800 Menschen unsere Kurse in verschiedenen Bereichen absolviert: Programmierung, 2D, 3D, Marketing und Management.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition">
            Jetzt kostenlos testen
            </button>
            <button className="border border-red-500 text-red-500 px-6 py-2 rounded-full font-semibold hover:bg-red-500 hover:text-white transition">
              SEE PRICING PLANS
            </button>
          </div>
        </div>

        {/* Bildbereich */}
        <div className="md:w-1/2 flex justify-center relative">
            {/* Sofa */}
          <img
            src="/images/sofa.png" // Pfad zum Bild aktualisieren
            alt="Person sitting on a couch with a laptop"
            className="w-full scale-1"
          />

        {/* Person - positioniert auf dem Sofa */}
        <img
            src="/images/person.png"
            alt="Person sitting on the sofa"
            className="absolute bottom- left-1/2 transform -translate-x-1/2 scale-1"
          />

        {/* Hund - positioniert vor dem Sofa */}
         <img
            src="/images/dog.png"
            alt="Dog sitting in front of the sofa"
            className="absolute bottom-10 left-1/4 transform translate-y-4 w-1/4 max-w-xs"
          />

        </div>
      </div>
    </section>
  );
}

export default Hero;