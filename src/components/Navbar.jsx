import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBook, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home', icon: FaHome },
    { to: '/about', label: 'About', icon: FaUser },
    { to: '/skills', label: 'Skills', icon: FaCode },
    { to: '/projects', label: 'Projects', icon: FaProjectDiagram },
    { to: '/blog', label: 'Blog', icon: FaBook },
    { to: '/contact', label: 'Contact', icon: FaEnvelope },
  ];

  // Handle navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
                    ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white/90'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl md:text-2xl font-bold text-gray-800 hover:text-primary 
                     transition-colors duration-300"
          >
            <span className="text-primary">A</span>JM
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2
                          transition-all duration-300 hover:bg-gray-100
                          ${isActive(link.to) 
                            ? 'text-primary bg-blue-50' 
                            : 'text-gray-600 hover:text-primary'}`}
              >
                <link.icon className={`text-lg ${isActive(link.to) ? 'text-primary' : ''}`} />
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 
                     transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-white border-b border-gray-100
                     transition-all duration-300 ease-in-out ${isOpen 
                       ? 'opacity-100 translate-y-0' 
                       : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        >
          <div className="container mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg 
                          transition-all duration-300 ${isActive(link.to)
                            ? 'text-primary bg-blue-50' 
                            : 'text-gray-600 hover:bg-gray-100 hover:text-primary'}`}
              >
                <link.icon className={`text-xl ${isActive(link.to) ? 'text-primary' : ''}`} />
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;