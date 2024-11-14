import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { id } = useParams();  // Holt sich die Kurs-ID aus der URL
  const [course, setCourse] = useState(null);  // Zustand für Kursdetails
  const [loading, setLoading] = useState(true); // Zustand für das Laden der Daten
  const [error, setError] = useState(null); // Fehlerzustand

  // Abrufen des Kurses anhand der ID
  useEffect(() => {
    fetch('https://theoriginalbitter.de/data.php')
      .then((response) => response.json())
      .then((data) => {
        const foundCourse = data.find((course) => course.id === parseInt(id));  // Suche nach dem Kurs mit der richtigen ID
        if (foundCourse) {
          setCourse(foundCourse);  // Setze den Kurs in den Zustand
        } else {
          setError('Kurs nicht gefunden');  // Fehlerbehandlung, falls der Kurs nicht gefunden wird
        }
      })
      .catch((error) => {
        setError('Fehler beim Abrufen der Kursdetails');  // Fehlerbehandlung
        console.error('Fehler beim Abrufen der Kursdetails:', error);
      })
      .finally(() => {
        setLoading(false);  // Setze das Laden auf false
      });
  }, [id]);  // Der Effekt wird bei jeder Änderung der ID neu ausgeführt

  // Falls der Kurs noch geladen wird
  if (loading) {
    return <div>Loading...</div>;
  }

  // Falls ein Fehler auftritt oder der Kurs nicht gefunden wurde
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Kursname und Kursdetails */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
        <p className="text-lg mb-4">by {course.instructor}</p>
        <p className="text-xl font-semibold">{course.price}</p>
        
        {/* Kursbeschreibung */}
        <div className="mt-8 text-left">
          <h2 className="text-2xl font-semibold mb-4">Kursbeschreibung</h2>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {course.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>

        {/* Kursstart und Bewertung */}
        <div className="mt-6 mb-4">
          <p className="text-sm">Startdatum: {new Date(course.startDate).toLocaleDateString()}</p>
          <div className="flex justify-center mt-2">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={`text-yellow-500 ${index < course.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Registrierungsbutton */}
        <div className="mt-8">
          <button className="py-3 px-8 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Registrieren
          </button>
        </div>
      </div>
    </section>
  );
}

export default CourseDetail;