import React from 'react';

function CourseCard({ course, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-start space-x-4 mb-4">
        {/* Icon linksbündig */}
        <div className="flex-shrink-0">{icon}</div>
        
        {/* Text-Inhalte linksbündig */}
        <div className="text-left">
          <h3 className="text-xl font-semibold">{course.title}</h3>
          <p className="text-gray-500 text-sm">by {course.instructor}</p>
          <p className="text-blue-500 text-sm">{course.lectures}</p>
        </div>
      </div>

      {/* Preis-Element mit voller Breite und Hintergrundfarbe */}
      <div className="bg-blue-100 text-black font-semibold text-xs py-2 w-full rounded mb-4">
        <p className="text-center w-full">{course.price}</p>
      </div>

      {/* Beschreibungspunkte linksbündig und kleiner */}
      <ul className="list-disc pl-4 text-gray-600 text-sm space-y-1 text-left">
        {course.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      {/* Button zentriert */}
      <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition">
        Sign up for a course
      </button>
    </div>
  );
}

export default CourseCard;