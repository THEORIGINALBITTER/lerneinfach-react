// src/components/PopularCourses.jsx
import React, { useEffect, useState } from 'react';
import { FaCode, FaCss3Alt, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';

const ICONS = {
  code: <FaCode className="text-3xl text-purple-500" />,
  css3: <FaCss3Alt className="text-3xl text-orange-500" />,
  globe: <FaGlobe className="text-3xl text-blue-500" />
};

function PopularCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://theoriginalbitter.de/data.php')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Fehler beim Laden der Daten', error));
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Popular Courses</h2>
        <p className="text-gray-600 mb-8">
          Sed a eros sodales diam sagittis faucibus. Cras id erat nisl. Fusce faucibus nulla sed finibus egestas.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} icon={ICONS[course.icon]} />
          ))}
        </div>

        <div className="mt-8">
          <Link to="/courses" className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PopularCourses;