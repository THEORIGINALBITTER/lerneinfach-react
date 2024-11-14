// src/config/icons.js
import { FaCode, FaCss3Alt, FaGlobe, FaVideo, FaCube, FaQuestion, FaDatabase, FaDesktop, FaPaintBrush, FaCamera, FaMobileAlt, FaLanguage } from 'react-icons/fa';


const ICONS = {
  code: <FaCode className="text-3xl text-purple-500" />,               // Programming
  css3: <FaCss3Alt className="text-3xl text-orange-500" />,             // CSS3
  globe: <FaGlobe className="text-3xl text-blue-500" />,                // Web Development
  video: <FaVideo className="text-3xl text-red-500" />,                 // Video Editing
  "3d": <FaCube className="text-3xl text-green-500" />,                 // 3D Modeling
  database: <FaDatabase className="text-3xl text-yellow-500" />,        // Database
  desktop: <FaDesktop className="text-3xl text-teal-500" />,            // Desktop Development
  paintBrush: <FaPaintBrush className="text-3xl text-pink-500" />,      // Art & Design
  camera: <FaCamera className="text-3xl text-purple-600" />,            // Photography
  mobile: <FaMobileAlt className="text-3xl text-blue-600" />,           // Mobile Development
  language: <FaLanguage className="text-3xl text-brown-500" />,         // Language
  default: <FaQuestion className="text-3xl text-gray-500" />,           // Default Icon
};

export default ICONS;