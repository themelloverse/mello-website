import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import GokuImage from '../assets/Goku.png';

const AboutPage = () => {
  const skills = [
    'Full Stack Development',
    'Cloud Computing',
    'Machine Learning',
    'System Design',
    'DevOps',
  ];

  const experiences = [
    {
      company: 'Tech Innovations Inc.',
      role: 'Senior Software Engineer',
      duration: 'Jan 2022 - Present',
      description: 'Leading development of scalable web applications using modern technologies.',
      details: [
        'Designed and implemented RESTful APIs for high-traffic applications.',
        'Optimized database queries to improve application performance by 40%.',
        'Mentored junior developers and conducted code reviews.',
      ],
    },
    {
      company: 'StartUp Solutions',
      role: 'Software Engineer',
      duration: 'Jun 2019 - Dec 2021',
      description: 'Developed and maintained complex web applications and microservices.',
      details: [
        'Built a microservices architecture using Docker and Kubernetes.',
        'Integrated third-party APIs for payment processing and analytics.',
        'Reduced deployment time by 30% through CI/CD pipeline automation.',
      ],
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */
          <div className="relative">
           <img src={GokuImage} alt="Profile"
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>}

          {/* Right Column: Text */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
            <p className="text-xl text-gray-600">
              I'm a passionate software engineer with over 5 years of experience in full-stack development and cloud technologies. My journey began with a deep fascination for solving complex problems through innovative software solutions.
            </p>
            <p className="text-xl text-gray-600">
              With a strong background in computer science, I've worked on diverse projects spanning web development, machine learning, and cloud infrastructure.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl text-gray-600 hover:text-primary transition-colors" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl text-gray-600 hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl text-gray-600 hover:text-primary transition-colors" />
              </a>
            </div>

            {/* Key Skills */}
            <h2 className="text-2xl font-bold text-gray-800">Key Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Professional Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {exp.role} at {exp.company}
                    </h3>
                    <p className="text-gray-500 mb-2">{exp.duration}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                  <button
                    onClick={() => toggleDetails(index)}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                {expandedIndex === index && (
                  <div className="mt-4 space-y-2">
                    {exp.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        • {detail}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
