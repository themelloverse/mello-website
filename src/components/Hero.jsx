import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRocket, FaDownload, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com' },
    { icon: FaGithub, url: 'https://github.com' },
    { icon: FaTwitter, url: 'https://twitter.com' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative fade-in">
        {/* Role Tag */}
        <div className="inline-flex items-center justify-center gap-3 mb-8 px-6 py-2 bg-white/10 backdrop-blur rounded-full shadow-lg">
          <FaCode className="text-blue-400 text-2xl" />
          <span className="text-white font-medium tracking-wide">Full Stack Developer</span>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Hello, I'm <span className="text-blue-400">Anish</span> <br /> John Moothedam
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
          Crafting innovative software solutions at the intersection of <span className="text-blue-400 font-medium">design</span> and <span className="text-purple-400 font-medium">technology</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg 
                     hover:bg-blue-600 transition-all duration-300 shadow-lg"
          >
            <FaRocket />
            Get in Touch
          </Link>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold 
                     rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300"
            >
              <social.icon className="text-3xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
