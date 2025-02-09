import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    image: "/project1.jpg",
    github: "https://github.com/username/project",
    live: "https://project-demo.com"
  },
  {
    title: "AI Chatbot",
    description: "Machine learning chatbot with natural language processing",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    image: "/project2.jpg",
    github: "https://github.com/username/project",
    live: "https://project-demo.com"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore some of my recent works and technical achievements
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl 
                       transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover object-center transform group-hover:scale-105 
                           transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                              flex items-end justify-between p-4">
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="text-white hover:text-blue-400 transition-colors">
                      <FaGithub size={24} />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                       className="text-white hover:text-blue-400 transition-colors">
                      <FaExternalLinkAlt size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm 
                               font-medium hover:bg-gray-200 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects/${project.title.toLowerCase().replace(/ /g, '-')}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 
                           font-medium transition-colors"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;