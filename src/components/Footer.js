// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhoneAlt, FaYoutube, FaChevronUp } from 'react-icons/fa';
import { socialMediaLinks, contactInfo, footerText, logoPath, copyrightText, bgFooter } from '../config';

function Footer() {
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
        <div className="mb-8 md:mb-0 md:w-1/4 text-center md:text-left">
          <img src={logoPath} alt="TOB Logo" className="w-16 h-16 mb-4 mx-auto md:mx-0" />
          <p className="text-sm mb-4">{footerText}</p>
          <div className="text-center md:text-left">
            <p className="font-semibold mb-2">Folge uns auf</p>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaLinkedin />
              </a>
              <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaTwitter />
              </a>
              <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaInstagram />
              </a>
              <a href={socialMediaLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
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
            <li><a href="#about" className="hover:text-blue-600">About This Project</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
            <li><a href="#courses" className="hover:text-blue-600">All Courses</a></li>
            <li><a href="#blog" className="hover:text-blue-600">From the Blog</a></li>
            <li><a href="#media" className="hover:text-blue-600">Media Library</a></li>
            <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
          </ul>
        </div>

        {/* Populäre Kurse mit Aufzählungspunkten */}
        <div className="mb-8 md:mb-0 md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-gray-800 mb-4">Popular Courses:</h3>
          <ul className="list-disc ml-4 space-y-2">
            <li>Data Science Fundamentals CS with Python and SQL</li>
            <li>AWS Certified Developer - Associate 2020</li>
            <li>How to Draw From Beginner to Master</li>
          </ul>
        </div>

        {/* Instagram-Bilder */}
        <div className="md:w-1/4 text-center md:text-left">
          <h3 className="font-semibold text-gray-800 mb-4">Instagram:</h3>
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
          className="bg-white text-gray-700 rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none mb-4 md:mb-0"
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