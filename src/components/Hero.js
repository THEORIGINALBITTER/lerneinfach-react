// src/components/Hero.jsx
import React from 'react';

function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        
        {/* Textbereich */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Large educational <br /> programs
          </h1>
          <p className="mt-4 text-lg text-blue-600 font-semibold">
            Our course is rated excellent by over 42,000 people <span className="text-red-500">★ ★ ★ ★ ★</span>
          </p>
          <p className="mt-4 text-gray-600">
            Today, more than 48,000 people have already studied at our university in various fields: programming, photography, marketing and management.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-600 transition">
              TRY FOR FREE
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
            className="w-full max-w-md"
          />

        {/* Person - positioniert auf dem Sofa */}
        <img
            src="/images/person.png"
            alt="Person sitting on the sofa"
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 scale-1"
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