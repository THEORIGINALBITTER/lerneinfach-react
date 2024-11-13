// src/pages/Courses.jsx
import React, { useEffect, useState } from 'react';
import { FaCode, FaCss3Alt, FaGlobe } from 'react-icons/fa';
import CourseCard from '../components/CourseCard';

const ICONS = {
  code: <FaCode className="text-3xl text-purple-500" />,
  css3: <FaCss3Alt className="text-3xl text-orange-500" />,
  globe: <FaGlobe className="text-3xl text-blue-500" />
};

function Courses() {
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
        <h2 className="text-3xl font-bold mb-4">All Courses</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} icon={ICONS[course.icon]} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;