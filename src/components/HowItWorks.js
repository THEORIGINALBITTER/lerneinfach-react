// src/components/HowItWorks.jsx
import React from 'react';
import { FaCheckCircle, FaStar } from 'react-icons/fa';

function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:max-w-4xl flex flex-col md:flex-row items-center">
        
        {/* Linke Spalte - Features mit Hintergrund */}
        <div className="md:w-2/3 p-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6">How does it work?</h2>
          
          {/* Feature-Liste */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-orange-400 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">4 on-line lectures with a teacher</h3>
                <p className="text-gray-100">
                  Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-orange-400 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">Subscription gives access to education materials and videos</h3>
                <p className="text-gray-100">
                  Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-orange-400 text-xl" />
              <div>
                <h3 className="font-semibold text-lg">After completing the course and completing the tasks, you will receive a certificate</h3>
                <p className="text-gray-100">
                  Quisque eget porta mauris. Praesent eu tincidunt nulla, suscipit lobortis est.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rechte Spalte - Testimonial */}
        <div className="md:w-1/3 p-8 bg-white rounded-xl shadow-lg text-center md:ml-8 mt-8 md:mt-0">
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