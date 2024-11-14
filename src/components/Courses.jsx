// src/pages/Courses.jsx
import React, { useEffect, useState } from 'react';
import CourseCard from '../components/CourseCard';
import ICONS from '../config/icon'; // Importiere das ICONS-Objekt

function Courses() {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'programming', 'management', 'art', 'digital marketing', 'game development', 'smm'];

  useEffect(() => {
    fetch('https://theoriginalbitter.de/data.php')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
        setFilteredCourses(data);
      })
      .catch(error => console.error('Fehler beim Laden der Daten', error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    filterCourses(value, selectedCategory);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    filterCourses(searchTerm, category);
  };

  const filterCourses = (term, category) => {
    const filtered = courses.filter(course => {
      const matchesCategory = category === 'all' || course.category === category;
      const matchesSearch = course.title.toLowerCase().includes(term) || course.description.some(desc => desc.toLowerCase().includes(term));
      return matchesCategory && matchesSearch;
    });
    setFilteredCourses(filtered);
  };

  return (
    <div>
      {/* Kursbereich */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-2">Große Auswahl an Kursen für jedes Lernziel</h2>
          <p className="text-gray-600 mb-6">
            Finde Deinen Kurs: Umfangreiche Auswahl an Weiterbildungsmöglichkeiten!
          </p>

          {/* Suchleiste */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Finde deinen Kurs ..."
              className="w-full md:w-1/2 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          {/* Kategorie-Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full shadow-md text-sm whitespace-nowrap ${
                  selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-white text-gray-600'
                } hover:bg-blue-500 hover:text-white transition-colors`}
                onClick={() => handleCategoryClick(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Kurskarten */}
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <CourseCard
                  key={course.id}
                  course={course}
                  icon={ICONS[course.icon] || ICONS.default} // Verwende das Default-Icon, wenn das spezifische Icon fehlt
                />
              ))
            ) : (
              <p className="col-span-full text-gray-600">Leider nichts gefunden. Jedoch könen wir Dir helfen</p>
            )}
          </div>
        </div>
      </section>

      {/* Sale-Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-8 relative mt-28 md:mt-8">
        <div className="container mx-auto px-6 md:flex md:items-center md:space-x-4">
          {/* Bildbereich, außerhalb des Bannerrandes */}
          <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
            <img src="/images/sale.webp" alt="Season Sale" className="absolute -bottom-16 md:-bottom-40 max-w-full md:max-w-lg h-auto" />
          </div>

          {/* Textbereich */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center mt-20 md:mt-0">
            <h2 className="text-3xl font-bold text-white">50% <span className="text-gray-100">Rabatt</span></h2>
            <p className="text-gray-200 mt-1 mb-3 text-sm">Unbegrenzter Zugriff auf Bildungsinhalte und Vorlesungen</p>
            <div className="flex justify-center md:justify-start items-center mt-2">
              <input
                type="email"
                placeholder="Deine schönste E-Mail"
                className="px-3 py-1 rounded-l-full focus:outline-none"
              />
              <button className="bg-red-500 text-white px-4 py-1 rounded-r-full font-semibold hover:bg-red-600 transition">
                SOFORT STARTEN
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;