import React from "react";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "💡 Idea Submission Platform",
    github: "https://github.com/anishjm1998/mind-palace",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-400",
    queryParam: "idea-submission",
  },
  {
    title: "🌍 Surplus Resources Donation Platform",
    github: "https://github.com/anishjm1998/samaritan-connect",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-400",
    queryParam: "surplus-resources",
  },
  {
    title: "📊 Predictive Analysis of Employee Attrition",
    github: "https://github.com/anishjm1998/EmployeeAttritionPrediction",
    bgColor: "bg-green-100",
    borderColor: "border-green-400",
    queryParam: "employee-attrition",
  }
];

const Projects = () => {
  const navigate = useNavigate();

  const handleCardClick = (queryParam) => {
    navigate(`/projects?selected=${queryParam}`);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-200" />

      {/* Floating radial pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6366F1_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            🚀 Featured Projects
          </h2>
          <p className="text-lg text-gray-600 font-light">
            A collection of innovative and impactful projects, blending creativity with technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(project.queryParam)}
              className={`relative group rounded-3xl p-10 border-2 ${project.borderColor} shadow-xl 
                          transition-transform transform hover:-translate-y-3 
                          hover:shadow-2xl hover:border-opacity-100 ${project.bgColor}
                          cursor-pointer`}
              style={{
                backdropFilter: "blur(20px)",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.15)",
              }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-indigo-600 transition-colors">
                {project.title}
              </h3>

              {/* Floating GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 right-6 p-3 bg-gray-900 text-white rounded-full 
                           shadow-md hover:bg-gray-700 transition"
                onClick={(e) => e.stopPropagation()} // Prevents card click redirection
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <a
            href="/projects"
            className="inline-flex items-center px-8 py-3 rounded-lg text-lg font-medium
                       bg-indigo-600 text-white shadow-lg shadow-indigo-300
                       hover:bg-indigo-700 hover:shadow-2xl transition-transform transform hover:-translate-y-1"
          >
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
