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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          {/* Brand Section */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Anish John Moothedam</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Crafting digital experiences with passion and precision. 
              Specializing in full-stack development and innovative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 
                           hover:bg-gray-800 rounded-full"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <p className="flex items-center text-gray-400">
                <FaEnvelope className="mr-3 text-blue-400" />
                your.email@example.com
              </p>
              <p className="flex items-center text-gray-400">
                <FaPhone className="mr-3 text-blue-400" />
                +1 (123) 456-7890
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Anish John Moothedam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;