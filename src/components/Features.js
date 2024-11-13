// src/components/Features.jsx
import React from 'react';
import { FaGraduationCap, FaGlobe, FaHeadset } from 'react-icons/fa';

function Features() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1 */}
          <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaGraduationCap className="text-5xl text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Get a certificate</h3>
            <p className="mt-2 text-gray-600">
              Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem tempus rhoncus sit tortor.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaGlobe className="text-5xl text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">All over the globe</h3>
            <p className="mt-2 text-gray-600">
              Donec urna massa, cursus venenatis ipsum et, tempus rhoncus tortor. Lorem ipsum dolor.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaHeadset className="text-5xl text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Live online lectures</h3>
            <p className="mt-2 text-gray-600">
              Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Lorem ipsum dolor sit lorem amet.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Features;