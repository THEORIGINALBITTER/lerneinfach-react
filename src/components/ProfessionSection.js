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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Learn and get a profession online</h2>
          <p className="text-gray-600 mb-6">
            Morbi tempor eleifend condimentum. Etiam mollis urna et massa tempus vulputate.
            Nunc sed nisl est. Donec non consectetur elit. Praesent accumsan elit urna,
            eget mattis turpis aliquam a. In scelerisque sagittis bibendum consequat.
            Quisque porta volutpat ligula sit amet varius.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
            TRY FOR FREE
          </button>
        </div>

      </div>
    </section>
  );
}

export default ProfessionSection;