// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaBars, FaYoutube, FaTimes } from 'react-icons/fa';
import { socialMediaLinks, logoPath } from '../config';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home"); // Standardmäßig aktiver Link

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link); // Setze den aktiven Link
    setIsMobileMenuOpen(false); // Schließe das Mobile-Menü nach Auswahl
  };

  return (
    <header className="fixed top-0 w-full z-50">
      {/* Obere Leiste mit Social Media und CTA */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-white text-sm">
          <div className="flex items-center space-x-4">
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin />
            </a>
            <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href={socialMediaLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaYoutube />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span>Kostenlos testen! 30-tägige Testversion und kostenlose Vorträge</span>
            <a href="#signup" className="bg-yellow-400 text-black px-3 py-1 rounded-md font-semibold hover:bg-yellow-500">LOGIN</a>
          </div>
        </div>
      </div>

      {/* Haupt-Navigationsleiste */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo links */}
          <div className="flex items-center space-x-2">
            <img src={logoPath} alt="TOB Logo" className="w-16 h-16" />
            <span className="text-xl font-bold text-gray-800">TOB <span className="text-gray-600">Lerneinfach</span></span>
          </div>

          {/* Desktop Menü-Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {["home", "courses", "about", "prices", "journal", "pages", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className={`text-gray-800 hover:text-indigo-600 relative ${
                  activeLink === link ? "active-link" : ""
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                {activeLink === link && (
                  <span className="absolute bottom-[-30px] left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menü-Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menü - Vollbild */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-6">
            {["home", "courses", "about", "prices", "journal", "pages", "contact"].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-gray-800 hover:text-indigo-600 text-2xl"
                onClick={() => handleLinkClick(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;