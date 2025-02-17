import React from "react";
import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaPython, FaDatabase, FaDocker, FaAws,
  FaGithub, FaFigma, FaTools, FaCode, FaCloud, FaLaptopCode
} from "react-icons/fa";

const skills = [
  {
    category: "Programming Languages",
    skills: ["Java", "JavaScript", "Python"],
    icon: <FaCode className="text-indigo-500" />,
    bgColor: "bg-indigo-100",  // Updated background color
    borderColor: "border-indigo-600",  // Updated border color
  },
  {
    category: "Frontend",
    skills: ["HTML", "React", "Tailwind CSS"],
    icon: <FaReact className="text-orange-500" />,  // Updated icon color to orange
    bgColor: "bg-orange-100",  // Updated background color to light orange
    borderColor: "border-orange-600",  // Updated border color to dark orange
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Flask"],
    icon: <FaNodeJs className="text-green-500" />,
    bgColor: "bg-green-100",  // Updated background color
    borderColor: "border-green-600",  // Updated border color
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    icon: <FaDatabase className="text-yellow-500" />,
    bgColor: "bg-yellow-100",  // Updated background color
    borderColor: "border-yellow-600",  // Updated border color
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "GitHub"],
    icon: <FaCloud className="text-purple-500" />,
    bgColor: "bg-purple-100",  // Updated background color
    borderColor: "border-purple-600",  // Updated border color
  },
  {
    category: "Data & Tools",
    skills: ["Tableau", "PowerBI", "Figma"],
    icon: <FaLaptopCode className="text-pink-500" />,
    bgColor: "bg-pink-100",  // Updated background color
    borderColor: "border-pink-600",  // Updated border color
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-[#FAF4EF]">
      <motion.div
        className="relative container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            🚀 Skills Overview
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            A quick glance at my technical expertise.
          </p>
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
                {category.category === "Databases" ? (
                  <div className="flex gap-2 justify-center w-full overflow-hidden">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-medium bg-white px-3 py-1 rounded-full border border-gray-300 shadow-sm whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap justify-center gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm font-medium bg-white px-3 py-1 rounded-full border border-gray-300 shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
