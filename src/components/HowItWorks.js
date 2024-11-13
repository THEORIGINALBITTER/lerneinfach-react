// src/components/HowItWorks.jsx
import React from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:max-w-4xl relative">
        
        {/* Farbverlauf-Container */}
        <div className="p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg relative z-10">
          <div className="max-w-md text-left"> {/* Begrenzung der Textbreite und linksbündig */}
            <h2 className="text-3xl font-bold mb-6">Wie funktioniert es?</h2>
            
            {/* Feature-Liste */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-orange-400 text-xl" />
                <div>
                  <h3 className="font-semibold text-lg">Lerne flexibel mit unseren Online- und Inhouse-Kursen!</h3>
                  <p className="text-gray-100">
                  Ob bequem von zu Hause oder direkt vor Ort – alles, was du brauchst, ist ein Laptop und die Motivation, Neues zu lernen. 
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-orange-400 text-xl" />
                <div>
                  <h3 className="font-semibold text-lg">Effektives Inhouse-Training!</h3>
                  <p className="text-gray-100">
                  Wir bieten maßgeschneiderte Schulungen direkt bei Ihnen vor Ort – ob im 1-zu-1-Coaching oder für mehrere Teilnehmer. Profitieren Sie von praxisnahen Trainings, die individuell auf Ihre Anforderungen abgestimmt sind und Ihre Teams nachhaltig weiterbringen!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <FaCheckCircle className="text-orange-400 text-xl" />
                <div>
                  <h3 className="font-semibold text-lg">Nach dem Training </h3>
                  <p className="text-gray-100">
                  erhalten Sie Ihr Zertifikat und exklusiven Online-Zugang zu allen wichtigen Themeninhalten – so können Sie jederzeit nachschauen und Ihr Wissen auffrischen. Mit unserem Pluspaket profitieren Sie zusätzlich von einem 4-stündigen Nachtraining für noch mehr Lernerfolg!”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grafik über dem Testimonial */}
        <img
          src="/images/welle.png" // Der Pfad zur Grafik
          alt="Dekorative Welle"
          className="absolute top-[-10%] right-[5%] wavy-image z-30 md:block" // Positioniert und animiert
          style={{ width: '250px' }}
        />


        {/* Rechte Spalte - Testimonial */}
        <div className="mt-10 md:mt-0 md:absolute md:top-[30%] md:right-[5%] p-8 bg-white rounded-xl shadow-lg text-center w-full md:w-80 z-20">
        <img
            src="/images/01.webp" // Der Pfad zu deinem Bild
            alt="Testimonial"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">Diana Gloster</h3>
          <div className="flex justify-center text-yellow-400 mt-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="text-gray-600 italic">
            “Mauris tellus lorem, tempus sed nibh at, varius convallis mi. sed scelerisque odio neque a lacus.
            Ut consectetur ligula. ed rhoncus sapien eget feugiat.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;