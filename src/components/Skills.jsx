import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    icon: "🎨",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Spring Boot", "Java", "Python"],
    icon: "⚙️",
    bgColor: "bg-green-50",
    borderColor: "border-green-500",
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    icon: "🗄️",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-500",
  },
  {
    category: "DevOps & Tools",
    skills: ["AWS", "Docker", "Git", "Jenkins", "Kubernetes"],
    icon: "🚀",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-500",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-20">
      <motion.div
        className="relative container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            🚀 Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            A glimpse of the technologies I work with.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-6 border ${category.borderColor} 
                          shadow-sm hover:shadow-lg transition-all duration-300 
                          ${category.bgColor} cursor-pointer`}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-medium bg-white px-3 py-1 rounded-full border border-gray-300 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
