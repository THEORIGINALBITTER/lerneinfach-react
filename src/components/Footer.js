import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importiere Link für Navigation
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaYoutube, FaChevronUp } from 'react-icons/fa';
import { socialMediaLinks, contactInfo, footerText, logoPath, copyrightText, bgFooter } from '../config';
import ICONS from '../config/icon'; // Importiere Icons

function Footer() {
  const [popularCourses, setPopularCourses] = useState([]);

  // Abrufen der Daten und Filtern der Favoriten-Kurse
  useEffect(() => {
    fetch('https://theoriginalbitter.de/data.php')
      .then(response => response.json())
      .then(data => {
        // Nur die Favoriten-Kurse filtern
        const favorites = data.filter(course => course.isFavorite); 
        setPopularCourses(favorites);
      })
      .catch(error => console.error('Fehler beim Laden der Kurse:', error));
  }, []);

  // Funktion zum Scrollen nach oben
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="py-10 text-gray-700"
      style={{
        background: bgFooter,  // Hintergrund aus der Konfigurationsdatei
      }}
    >
      <div className="container mx-auto px-4 md:flex md:justify-between md:space-x-12">
        
        {/* Logo und Kontakt */}
        <div className="mb-8 md:mb-0 md:w-1/4 text-center md:text-left -mt-8">
          <img src={logoPath} alt="TOB Logo" className="w-24 h-16 mb-4 mx-auto md:mx-0" />
          <span className="text-lg font-bold text-gray-800 -mt-4 block">LERN EINFACH Authentisch</span>
          <p className="text-sm mb-4">{footerText}</p>
          <div className="text-center md:text-left">
            <p className="font-semibold mb-2">Folge uns auf</p>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FaLinkedin />
              </a>
              <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FaInstagram />
              </a>
              <a href={socialMediaLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="text-sm">
            <p><FaEnvelope className="inline mr-2" /> {contactInfo.email}</p>
            <p><FaPhoneAlt className="inline mr-2" /> {contactInfo.phone}</p>
            <p>{contactInfo.address}</p>
          </div>
        </div>

        {/* Informationsspalte */}
        <div className="mb-8 md:mb-0 md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-gray-800 mb-4">Information:</h3>
          <ul className="space-y-2">
            <li><a href="#contact" className="hover:text-red-500">Kontakt</a></li>
            <li><a href="#courses" className="hover:text-red-500">Alle Kurse</a></li>
            <li><a href="#blog" className="hover:text-red-500">Journal</a></li>
            <li><a href="#faq" className="hover:text-red-500">FAQ</a></li>
            <li><a href="#impressum" className="hover:text-red-500">Impressum</a></li>
          </ul>
        </div>

        {/* Populäre Kurse mit Icons */}
        <div className="mb-8 md:mb-0 md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-gray-800 mb-4">Populäre Kurse:</h3>
          <ul className="list-disc ml-4 space-y-2">
            {/* Dynamische Anzeige der Titel der Favoriten-Kurse mit Icons */}
            {popularCourses.map(course => (
              <li key={course.id} className="flex items-center space-x-2">
                {/* Anzeigen des Icons für den Kurs */}
                <img 
                  src={ICONS[course.icon] || ICONS.default} // 
                  alt={course.title}
                  className="w-6 h-6" // Größe der Icons
                />
                <Link to={`/course/${course.id}`} className="hover:text-red-500">
                  {course.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Instagram-Bilder */}
        <div className="md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-gray-800 mb-4">Journal:</h3>
          <div className="grid grid-cols-3 gap-2">
            <img src="/path-to-image1.jpg" alt="Instagram 1" className="w-full h-20 object-cover" />
            <img src="/path-to-image2.jpg" alt="Instagram 2" className="w-full h-20 object-cover" />
            <img src="/path-to-image3.jpg" alt="Instagram 3" className="w-full h-20 object-cover" />
            <img src="/path-to-image4.jpg" alt="Instagram 4" className="w-full h-20 object-cover" />
            <img src="/path-to-image5.jpg" alt="Instagram 5" className="w-full h-20 object-cover" />
            <img src="/path-to-image6.jpg" alt="Instagram 6" className="w-full h-20 object-cover" />
          </div>
        </div>
      </div>

      {/* Copyright-Bereich und Scroll to Top Button */}
      <div className="container mx-auto px-4 mt-8 flex flex-col items-center md:flex-row md:justify-between text-gray-600 text-sm">
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-gray-100 rounded-full p-2 shadow-md hover:bg-red-500 focus:outline-none mb-4 md:mb-0"
          aria-label="Scroll to top"
        >
          <FaChevronUp className="w-5 h-5" />
        </button>
        
        {/* Copyright-Text */}
        <p className="text-center md:text-left">{copyrightText}</p>
      </div>
    </footer>
  );
}

export default Footer;