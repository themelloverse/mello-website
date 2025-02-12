import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FaTwitter, url: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="bg-[#121212] text-gray-300 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Branding & Social Links */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-semibold text-white">Anish John Moothedam</h3>
          <p className="text-gray-400 text-sm mt-1">Building tech solutions with creativity & precision.</p>
          <div className="flex space-x-4 mt-3 justify-center md:justify-start">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition text-lg"
                aria-label={social.label}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-md font-medium text-white">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            {['Home', 'About', 'Projects', 'Blog', 'Contact', 'Skills'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right mt-6 md:mt-0">
          <h4 className="text-md font-medium text-white">Contact</h4>
          <p className="flex items-center justify-center md:justify-end text-gray-400 text-sm">
            <FaEnvelope className="text-blue-400 mr-2" /> your.email@example.com
          </p>
          <p className="flex items-center justify-center md:justify-end text-gray-400 text-sm mt-1">
            <FaPhone className="text-blue-400 mr-2" /> +1 (123) 456-7890
          </p>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Anish John Moothedam. All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
