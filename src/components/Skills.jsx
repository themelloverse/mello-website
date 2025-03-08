import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import {
  FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaAws,
  FaGithub, FaFigma, FaTools, FaCode, FaCloud, FaLaptopCode
} from "react-icons/fa";

// Scroll to top function to ensure the page scrolls to the top when navigating
const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const skills = [
  {
    category: "Programming Languages",
    skills: ["Java", "JavaScript", "Python"],
    icon: <FaCode className="text-indigo-500" />,
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-600",
  },
  {
    category: "Frontend",
    skills: ["HTML", "React", "Tailwind CSS"],
    icon: <FaReact className="text-orange-500" />,
    bgColor: "bg-orange-100",
    borderColor: "border-orange-600",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Flask"],
    icon: <FaNodeJs className="text-green-500" />,
    bgColor: "bg-green-100",
    borderColor: "border-green-600",
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    icon: <FaDatabase className="text-yellow-500" />,
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-600",
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "GitHub"],
    icon: <FaCloud className="text-purple-500" />,
    bgColor: "bg-purple-100",
    borderColor: "border-purple-600",
  },
  {
    category: "Data & Tools",
    skills: ["Tableau", "PowerBI", "Figma"],
    icon: <FaLaptopCode className="text-pink-500" />,
    bgColor: "bg-pink-100",
    borderColor: "border-pink-600",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-[#F5F3EF]">
      <motion.div
        className="relative container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Technical Skills Overview
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-8 border ${category.borderColor} 
                          shadow-sm hover:shadow-lg transition-all duration-300 
                          ${category.bgColor} cursor-pointer`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 text-center">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center px-3 py-1.5 bg-white bg-opacity-80 rounded-full border border-gray-400 shadow-sm hover:scale-105 transition-all duration-300"
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button to navigate to detailed Skill Page */}
        <div className="text-center mt-8">
          <Link to="/skills" onClick={scrollToTop}>
            <button className="px-8 py-3 border border-gray-400 text-gray-800 rounded-full bg-white hover:bg-gray-100 shadow-md transition duration-300 transform hover:scale-105 font-sans">
              View Detailed Skills
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;