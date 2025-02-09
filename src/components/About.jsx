import React from 'react';
import { Link } from 'react-router-dom';
import GokuImage from '../assets/Goku.png';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#111827] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-400 text-center mb-6">About Me</h2>
          <p className="text-gray-300 text-center mb-12">
            Passionate software engineer solving complex challenges through elegant, scalable solutions.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <h3 className="text-3xl font-semibold text-white mb-4">My Journey</h3>
                <p className="text-gray-400 leading-relaxed">
                  With over <span className="text-blue-400 font-semibold">5 years</span> of experience, I specialize in
                  full-stack development, cloud computing, and machine learning. My passion started with solving problems
                  through innovative software solutions.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I've worked on diverse projects, from building scalable web applications to deploying machine learning models in production environments.
                </p>
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 mt-4 bg-blue-500 text-white rounded-lg 
                           hover:bg-blue-600 transition-all duration-300 shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative max-w-md mx-auto">
                <img 
                  src={GokuImage} 
                  alt="Profile"
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-lg -m-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
