import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaRocket, FaDownload, FaLinkedin, FaGithub, FaWordpress } from 'react-icons/fa';

// Import additional react-icons for decorative elements
import { GiWoodBeam, GiFeather, GiPaperBagFolded } from 'react-icons/gi';

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://linkedin.com' },
    { icon: FaGithub, url: 'https://github.com' },
    { icon: FaWordpress, url: 'https://yourwordpressblog.com' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4B3B2F] to-[#3A2F26] text-white relative overflow-hidden">
      {/* Enhanced Background Elements with Beige/Cream Colors */}
      <div className="absolute inset-0">
        {/* Original blurred circles */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#F5F3EF]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-[#F5F3EF]/20 rounded-full filter blur-3xl"></div>
        
        {/* New beige/cream geometric shapes */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#F2E8DC]/15 rotate-45 filter blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#EAE0D5]/10 rounded-full filter blur-xl"></div>
        <div className="absolute top-1/3 left-1/2 w-60 h-60 bg-[#D8C3A5]/10 rounded-lg filter blur-lg transform -rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-40 bg-[#E6DDD0]/15 rounded-full filter blur-2xl"></div>
        
        {/* Decorative elements with cream/beige colors */}
        <div className="absolute top-16 right-16 text-[#EAE0D5]/10 text-9xl opacity-20">
          <GiFeather className="transform rotate-45" />
        </div>
        <div className="absolute bottom-20 left-20 text-[#F2E8DC]/10 text-9xl opacity-20">
          <GiWoodBeam className="transform -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-16 text-[#D8C3A5]/10 text-8xl opacity-20">
          <GiPaperBagFolded />
        </div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[url('/path/to/your/texture.png')] opacity-20 bg-cover bg-center"></div>
        
        {/* Additional cream-colored pattern overlay */}
        <div className="absolute inset-0 bg-[url('/path/to/beige-pattern.png')] opacity-10 bg-repeat bg-center"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative fade-in">
        {/* Role Tag */}
        <div className="inline-flex items-center justify-center gap-3 mb-8 px-6 py-2 bg-white/10 backdrop-blur rounded-full shadow-lg border-2 border-[#F5F3EF]">
          <FaCode className="text-[#F5F3EF] text-2xl" />
          <span className="text-white font-medium tracking-wide">Full Stack Developer</span>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Hello, I'm <span className="text-[#F5F3EF]">Anish</span> <br /> John Moothedam
        </h1>

        <p className="text-xl md:text-2xl text-[#F5F3EF] max-w-3xl mx-auto mb-12">
          Crafting innovative software solutions at the intersection of <span className="text-[#F5F3EF] font-medium">design</span> and <span className="text-[#F5F3EF] font-medium">technology</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5F3EF] text-[#4B3B2F] font-semibold rounded-lg
                      hover:bg-[#F5F3EF]/90 transition-all duration-300 shadow-lg border-2 border-[#F5F3EF]"
          >
            <FaRocket />
            Get in Touch
          </Link>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#F5F3EF] text-[#F5F3EF] font-semibold
                      rounded-lg hover:bg-[#F5F3EF] hover:text-[#4B3B2F] transition-all duration-300 shadow-lg"
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
              className="text-[#F5F3EF] hover:text-[#F5F3EF]/80 transition-all duration-300"
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