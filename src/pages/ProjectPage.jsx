import React from 'react';
import { FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { SiPostgresql, SiDjango, SiTailwindcss, SiGooglemaps, SiJupyter, SiTableau, SiFigma, SiExpress } from 'react-icons/si';

const projects = [
  {
    title: "💡 Idea Submission Platform",
    duration: "Sep 2024 - Dec 2024",
    organization: "Rocket Innovation Studio",
    location: "Windsor, Ontario",
    description: "A collaborative platform with secure authentication and NLP-powered categorization.",
    bgColor: "bg-gray-100", // Light gray for a subtle look
    technologies: [
      { name: "React", icon: SiTailwindcss },
      { name: "Node.js", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Python", icon: SiJupyter },
      { name: "Docker", icon: SiGooglemaps },
      { name: "Figma", icon: SiFigma },
    ],
    githubLink: "https://github.com/anishjm1998/mind-palace"
  },
  {
    title: "🌍 Surplus Resources Donation Platform",
    duration: "Sep 2024 - Dec 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "A donation platform connecting NGOs with surplus donors using geolocation filtering.",
    bgColor: "bg-gray-200", // Subtle light grey
    technologies: [
      { name: "Django", icon: SiDjango },
      { name: "React", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Docker", icon: SiGooglemaps },
      { name: "Google Maps", icon: SiGooglemaps },
    ],
    githubLink: "https://github.com/anishjm1998/samaritan-connect"
  },
  {
    title: "📊 Predictive Analysis of Employee Attrition",
    duration: "Jun 2024 - Aug 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "An AI-powered solution predicting employee turnover with 97% accuracy.",
    bgColor: "bg-gray-100", // Soft gray
    technologies: [
      { name: "Python", icon: SiJupyter },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Tableau", icon: SiTableau },
    ],
    githubLink: "https://github.com/anishjm1998/EmployeeAttritionPrediction"
  },
  {
    title: "💾 Distributed File System Using Socket Programming",
    duration: "Jun 2024 - Jul 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "Built a file system for file storage and retrieval across multiple servers using socket programming in C.",
    bgColor: "bg-gray-200", // Soft light grey for less brightness
    technologies: [
      { name: "C", icon: SiPostgresql },
      { name: "Linux", icon: SiTailwindcss },
      { name: "Socket Programming", icon: SiExpress },
    ],
    githubLink: "https://github.com/anishjm1998/Distributed-File-System-Using-Socket-Programming"
  },
  {
    title: "🚜 Farm Monitoring System (CropWatch)",
    duration: "Jan 2024 - Apr 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "Developed ML models for crop health monitoring and real-time alert systems.",
    bgColor: "bg-gray-100", // Light gray tone
    technologies: [
      { name: "Python", icon: SiPostgresql },
      { name: "Flask", icon: SiTailwindcss },
      { name: "JavaScript", icon: SiFigma },
    ],
    githubLink: "https://github.com/anishjm1998/CropWatch"
  },
  {
    title: "✈️ Flight Price Analysis System (JetJourney)",
    duration: "Jan 2024 - Apr 2024",
    organization: "University of Windsor",
    location: "Windsor, Ontario",
    description: "Built a system to scrape flight prices and analyze trends using Java.",
    bgColor: "bg-gray-200", // Subtle light grey
    technologies: [
      { name: "Java", icon: SiDjango },
      { name: "Selenium", icon: SiPostgresql },
      { name: "JSoup", icon: SiTailwindcss },
    ],
    githubLink: "https://github.com/anishjm1998/JetJourney"
  },
  {
    title: "🍔 Food Calorie Estimation using Deep Learning (CalorifyMe)",
    duration: "Mar 2020 - May 2020",
    organization: "Karunya University",
    location: "Coimbatore, India",
    description: "Developed a deep learning model to estimate food calories from images using MobileNetV2.",
    bgColor: "bg-gray-100", // Light gray for consistency
    technologies: [
      { name: "TensorFlow", icon: SiPostgresql },
      { name: "Android Studio", icon: SiTailwindcss },
      { name: "Java", icon: SiFigma },
    ],
    githubLink: "https://github.com/anishjm1998/CalorifyMe"
  },
  {
    title: "🎥 Movie Recommendation System (MovieGenie)",
    duration: "Oct 2019 - Nov 2019",
    organization: "Karunya University",
    location: "Coimbatore, India",
    description: "Built a web scraper and trained a Naïve Bayes model to recommend movies based on sentiment analysis.",
    bgColor: "bg-gray-200", // Muted grey
    technologies: [
      { name: "Python", icon: SiPostgresql },
      { name: "Beautiful Soup", icon: SiFigma },
      { name: "Android Studio", icon: SiTailwindcss },
    ],
    githubLink: "https://github.com/anishjm1998/MovieGenie"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div
      className={`rounded-3xl p-8 shadow-lg transition-transform transform hover:-translate-y-2 
                  hover:shadow-2xl ${project.bgColor} text-gray-800 border border-gray-300`} // Added border
      style={{
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)", // Softer shadow
      }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-3xl font-semibold">{project.title}</h2>
          <div className="text-lg mt-2 opacity-90">
            <span>{project.duration}</span> • <span>{project.organization}</span>
          </div>
          <div className="flex items-center mt-1 opacity-90">
            <FaMapMarkerAlt className="mr-2" />
            <span>{project.location}</span>
          </div>
        </div>

        {/* Floating GitHub Button */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>

      <p className="text-lg mt-4 opacity-90">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-3 mt-5">
        {project.technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center px-3 py-2 bg-white bg-opacity-20 rounded-full shadow-sm backdrop-blur-md hover:scale-105 transition-all duration-300"
          >
            <tech.icon className="mr-2" />
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-[#EFF6FF] py-20"> {/* Light blue background */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900">✨ Featured Projects ✨</h1>
          <p className="text-xl text-gray-600 mt-2">Showcasing my journey through technology & innovation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
