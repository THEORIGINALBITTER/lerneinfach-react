import React, { useState, useEffect, useRef } from 'react';
import CourseCard from './CourseCard'; // Sicherstellen, dass CourseCard importiert ist
import ICONS from '../config/icon';

function Hero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const coursesSectionRef = useRef(null);  // Ref für den Bereich der gefundenen Kurse

  // Funktion zum Abrufen der Kurse von der API
  useEffect(() => {
    fetch('https://theoriginalbitter.de/data.php')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Fehler beim Laden der Kurse:', error));
  }, []);

  // Funktion zum Suchen
  const handleSearch = () => {
    setIsSearching(true);

    const keywords = searchQuery.toLowerCase().split(' ').filter(word => word.trim() !== ''); // Filtert leere Strings

    // Filtere die Kurse basierend auf den Keywords
    const results = courses.filter((course) => {
      return keywords.every((keyword) =>
        course.title.toLowerCase().includes(keyword) || 
        course.description.some((desc) => desc.toLowerCase().includes(keyword)) // Suche in der Beschreibung
      );
    });

    setFilteredCourses(results);

    // Scrollt zu den Kursen, wenn welche gefunden wurden
    if (results.length > 0) {
      // Scrollt zum Abschnitt mit den gefundenen Kursen mit einem Offset
      const offset = 100; // Der Abstand von oben, um den Scrollbereich zu verschieben
      window.scrollTo({
        top: coursesSectionRef.current.offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  // Funktion zum Zurücksetzen der Suche
  const handleNewSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
    setFilteredCourses([]); // Zurücksetzen der gefilterten Kurse
  };

  return (
    <div>
      {/* Hero Bereich */}
      <section className="bg-gradient-to-r from-purple-50 to-blue-50 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
          {/* Textbereich */}
          <div className="md:w-1/2 mb-8 md:mb-0 text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
              Praxisnahe <br /> Media-, Web- und Marketing-Kurse
            </h1>
            <p className="mt-4 text-lg text-blue-600 font-semibold">
              Unsere Kurse wurden von über 2.400 Menschen als ausgezeichnet bewertet <span className="text-red-500">★ ★ ★ ★ ★</span>
            </p>
            <p className="mt-4 text-gray-600">
              Heute haben bereits mehr als 3.800 Menschen unsere Kurse in verschiedenen Bereichen absolviert: Programmierung, 2D, 3D, Marketing und Management.
            </p>

            {/* Suchbereich unterhalb des Textes */}
            <div className="mt-8">
              <h2 className="text-4xl font-bold mb-4">Was möchtest du lernen?</h2>
              <p className="   text-lg mb-8 text-blue-600 font-semibold">Bei welchen Problem können wir Dir helfen?</p>

              {/* Suchfeld und Button im Flex-Container */}
              <div className="relative mb-8 flex">
                <input
                  type="text"
                  placeholder="Zum Beispiel: 3D lernen, Adobe verstehen ..."
                  className="w-full md:w-3/5 p-4 text-lg border rounded-l-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* Zeige den entsprechenden Button an */}
                <button
                  onClick={isSearching ? handleNewSearch : handleSearch}
                  className={`text-white py-3 px-8 rounded-r-full ${
                    isSearching ? 'bg-red-500' : 'bg-blue-500'
                  }`} // Dynamische Hintergrundfarbe basierend auf dem Zustand
                >
                  {isSearching ? 'Neue Suche' : 'Suchen'}
                </button>
              </div>
            </div>
          </div>

          {/* Bildbereich auf der rechten Seite */}
          <div className="md:w-1/2 flex justify-center relative">
            <img
              src="/images/sofa.png" // Bild hier einfügen
              alt="Person sitting on a couch with a laptop"
              className="w-full scale-1"
            />
            <img
              src="/images/person.png"
              alt="Person sitting on the sofa"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-float"
            />
            <img
              src="/images/dog.png"
              alt="Dog sitting in front of the sofa"
              className="absolute bottom-10 left-1/4 transform translate-y-4 w-1/4 max-w-xs"
            />
          </div>
        </div>
      </section>

      {/* Anzeigen der gefilterten Kurse */}
      <section ref={coursesSectionRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          {/* Wenn Kurse gefunden wurden, zeige sie */}
          {isSearching && filteredCourses.length > 0 && (
            <>
              <h3 className="text-3xl font-bold mb-4">Gefundene Kurse:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard
                    key={course.id}
                    course={course}
                    icon={ICONS[course.icon] || ICONS.default} // Verwende das Default-Icon, wenn das spezifische Icon fehlt
                  />
                ))}
              </div>
            </>
          )}

          {/* Wenn keine Kurse gefunden wurden, zeige die Nachricht */}
          {isSearching && filteredCourses.length === 0 && (
            <div>
              <h3 className="text-3xl font-bold mb-4">Kein Kurs gefunden</h3>
              <p>Es gibt leider keine Kurse, die deiner Suche entsprechen. Versuche es mit anderen Begriffen!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Hero;