import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaLaptopCode } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const projects = [
  {
    title: "Idea Submission Platform",
    github: "https://github.com/anishjm1998/mind-palace",
    icon: <FaLaptopCode className="text-blue-500" />,
    bgColor: "bg-blue-100",
    borderColor: "border-blue-600",
    queryParam: "idea-submission",
  },
  {
    title: "Surplus Resources Donation Platform",
    github: "https://github.com/anishjm1998/samaritan-connect",
    icon: <FaLaptopCode className="text-pink-500" />,
    bgColor: "bg-pink-100",
    borderColor: "border-pink-600",
    queryParam: "surplus-resources",
  },
  {
    title: "Predictive Analysis of Employee Attrition",
    github: "https://github.com/anishjm1998/EmployeeAttritionPrediction",
    icon: <FaLaptopCode className="text-green-500" />,
    bgColor: "bg-green-100",
    borderColor: "border-green-600",
    queryParam: "employee-attrition",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Projects = () => {
  const navigate = useNavigate();

  const handleCardClick = (queryParam) => {
    navigate(`/projects?selected=${queryParam}`);
  };

  return (
    <section id="projects" className="relative py-20 bg-[#F5F3EF]">
      <motion.div
        className="relative container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Section Heading (Matching Skills Section) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Project Cards (Aligned & Spaced Correctly) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onClick={() => handleCardClick(project.queryParam)}
              className={`rounded-xl p-8 border ${project.borderColor} 
                          shadow-sm hover:shadow-lg transition-all duration-300 
                          ${project.bgColor} cursor-pointer flex flex-col items-center justify-between`}
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon + Title (Properly Aligned) */}
              <div className="flex flex-col items-center mb-4">
                <span className="text-3xl mb-2">{project.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {project.title}
                </h3>
              </div>

              {/* GitHub Button (Same Animation & Style as Skills Button) */}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-full 
                           shadow-md hover:bg-gray-800 transition duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub className="mr-2" /> View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </div>

         {/* View All Projects Button */}
         <div className="text-center mt-12">
         <motion.button
            onClick={() => {
              scrollToTop();
              navigate("/projects"); // Fix navigation issue
            }}
            className="px-8 py-3 border border-gray-400 text-gray-800 rounded-full bg-white 
                       hover:bg-gray-100 shadow-md transition duration-300 transform hover:scale-105 font-sans"
            whileHover={{ scale: 1.05 }}
          >
            View All Projects
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
