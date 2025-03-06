import React from 'react';
import { FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Daily Wordle Solver",
    duration: "Jan 2025 - Feb 2025",
    organization: "Personal Project",
    location: "Windsor, Ontario",
    description: "A web-based Wordle solver that provides intelligent suggestions based on previous guesses and feedback.",
    bgColor: "bg-teal-100",  
    borderColor: "border-teal-500",  
    technologies: ["React", "TypeScript", "JavaScript", "TailwindCSS"],
    githubLink: "https://github.com/anishjm1998/wordle-solver"
  },
  {
    title: "Idea Collaboration Platform (Mind Palace)",
    duration: "Sep 2024 - Dec 2024",
    organization: "Rocket Innovation Studio",
    location: "Windsor, Ontario",
    description: "A secure idea submission and management platform with authentication, NLP-powered tagging, and an intuitive user interface.",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-600",
    technologies: ["React", "Node.js", "PostgreSQL", "Python", "Docker", "Figma"],
    githubLink: "https://github.com/anishjm1998/mind-palace"
  },
  {
    title: "Surplus Resources Donation Platform (Samaritan Connect)",
    duration: "Sep 2024 - Dec 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "A donation platform connecting NGOs with surplus donors, featuring geolocation filtering, real-time updates, and scalable microservices architecture.",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-600",
    technologies: ["Django", "React", "PostgreSQL", "Docker", "Google Maps"],
    githubLink: "https://github.com/anishjm1998/samaritan-connect"
  },
  {
    title: "Predictive Analysis of Employee Attrition",
    duration: "Jun 2024 - Aug 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "An AI-powered solution predicting employee turnover with 97% accuracy, leveraging ensemble models and advanced data preprocessing techniques.",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-600",
    technologies: ["Python", "Jupyter", "Tableau"],
    githubLink: "https://github.com/anishjm1998/EmployeeAttritionPrediction"
  },
  {
    title: "Distributed File System Using Socket Programming",
    duration: "Jun 2024 - Jul 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "A distributed file system enabling file storage and retrieval across multiple servers, built using socket programming in C for scalability and efficiency.",
    bgColor: "bg-green-100",
    borderColor: "border-green-600",
    technologies: ["C", "Linux", "Socket Programming"],
    githubLink: "https://github.com/anishjm1998/Distributed-File-System-Using-Socket-Programming"
  },
  {
    title: "Farm Monitoring System (CropWatch)",
    duration: "Jan 2024 - Apr 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "A crop health monitoring system with real-time alerts, text-to-speech functionality, and APIs for tracking and analysis.",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-600",
    technologies: ["Python", "Flask", "JavaScript"],
  },
  {
    title: "Flight Price Analysis System (JetJourney)",
    duration: "Jan 2024 - Apr 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "A system for scraping and analyzing flight prices, featuring interactive dashboards and trend visualization for better decision-making.",
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-600",
    technologies: ["Java", "Selenium", "JSoup"],
  },
  {
    title: "Food Calorie Estimation using Deep Learning (CalorifyMe)",
    duration: "Mar 2020 - May 2020",
    organization: "Karunya University",
    location: "Coimbatore, India",
    description: "A deep learning-based Android app for real-time calorie estimation from food images, leveraging MobileNetV2 and TensorFlow Lite.",
    bgColor: "bg-red-100",
    borderColor: "border-red-600",
    technologies: ["TensorFlow", "Android Studio", "Java"],
  },
  {
    title: "Movie Recommendation System (MovieGenie)",
    duration: "Oct 2019 - Nov 2019",
    organization: "Karunya University",
    location: "Coimbatore, India",
    description: "A sentiment-based movie recommendation system, integrating a Naïve Bayes classifier with an Android app for personalized suggestions.",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-600",
    technologies: ["Beautiful Soup", "Android Studio", "Python"],
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className={`relative rounded-3xl p-8 shadow-lg border-2 ${project.borderColor} ${project.bgColor} text-gray-900 cursor-pointer`}
      style={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        minHeight: "400px",
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full">
        {/* Title and Metadata Section */}
        <div className="mb-4" style={{ minHeight: "120px" }}> {/* Fixed height for title and metadata */}
          <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
          <div className="space-y-1">
            <div className="text-sm text-gray-700">{project.duration}</div>
            <div className="text-sm text-gray-700">{project.organization}</div>
            <div className="flex items-center text-sm text-gray-700">
              <FaMapMarkerAlt className="mr-1 text-xs" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="flex-1 mb-4">
          <p className="text-md text-gray-700 bg-white bg-opacity-70 rounded-lg p-4 shadow-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies Section */}
        <div className="mt-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-1.5 bg-white bg-opacity-80 rounded-full border border-gray-400 shadow-sm hover:scale-105 transition-all duration-300"
              >
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Icon - Conditionally Rendered */}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 p-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
          >
            <FaGithub className="text-base" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-[#E1F5FE] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-6xl font-extrabold text-gray-900 text-center mb-16">Technical Projects</h1>
        <div className="grid md:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;