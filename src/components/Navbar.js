// src/components/Navbar.jsx
import React, { useState } from 'react';
import { FaLinkedin, FaInstagram, FaBars, FaYoutube, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { socialMediaLinks, logoPath } from '../config';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Start', path: '/' },
    { name: 'Kurse', path: '/courses' },
    { name: 'Wir', path: '/about' },
    { name: 'Preise', path: '/prices' },
    { name: 'Journal', path: '/journal' },
    { name: 'Sag Hallo', path: '/contact' },
  ];

  // Dynamische Erstellung von breadcrumbMap aus navLinks
  const breadcrumbMap = navLinks.reduce((map, link) => {
    const pathKey = link.path.replace('/', ''); // Entfernt den führenden Slash
    map[pathKey] = link.name;
    return map;
  }, {});

  // Breadcrumbs-Logik mit dynamischer Zuordnung
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
      <nav className="bg-gray-100 py-2 text-gray-600 text-sm">
        <div className="container mx-auto px-4 flex">
          <Link to="/" className="text-blue-500 hover:underline">Start</Link>
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const displayName = breadcrumbMap[value] || value; // Dynamische Anzeige des Namens

            return (
              <span key={to} className="ml-2">
                / <Link to={to} className="text-blue-500 hover:underline capitalize">{displayName}</Link>
              </span>
            );
          })}
        </div>
      </nav>
    );
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
          {/* Logo und Text untereinander, linksbündig */}
          <div className="flex flex-col items-start">
            <img src={logoPath} alt="TOB Logo" className="w-24 h-16" />
            <span className="text-lg font-bold text-gray-800 -mt-1/2">LERN EINFACH Authentisch</span>
          </div>

          {/* Desktop Menü-Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-800 hover:text-indigo-600 relative ${
                  location.pathname === link.path ? "active-link" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-[-30px] left-0 w-full h-2 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full transition-all duration-300 transform ${
                    location.pathname === link.path ? "bottom-[-30px]" : "opacity-0"
                  } hover:opacity-100 hover:bottom-[-2px]`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menü-Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Breadcrumbs */}
        {location.pathname !== '/' && generateBreadcrumbs()}

        {/* Mobile Menü - Vollbild */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gradient-to-r from-[#f0e7ff] to-[#f6f3ff] z-50 flex flex-col items-center justify-center space-y-6">
            <div className="w-full h-full flex flex-col items-center justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-800 hover:text-indigo-600 text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;