import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    icon: "🎨",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-400",
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "Django", "Spring Boot", "Java", "Python"],
    icon: "⚙️",
    bgColor: "bg-green-100",
    borderColor: "border-green-400",
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
    icon: "🗄️",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-400",
  },
  {
    category: "DevOps & Tools",
    skills: ["AWS", "Docker", "Git", "Jenkins", "Kubernetes"],
    icon: "🚀",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-400",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-200" />

      {/* Floating radial pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6366F1_1px,transparent_1px)] [background-size:16px_16px]" />

      <motion.div
        className="relative container mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            🔥 Technical Skills
          </h2>
          <p className="text-lg text-gray-600 font-light">
            A deep dive into my expertise across different technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className={`relative group rounded-3xl p-10 border-2 ${category.borderColor} shadow-xl 
                          transition-transform transform hover:-translate-y-3 hover:shadow-2xl 
                          hover:border-opacity-100 ${category.bgColor} cursor-pointer`}
              style={{
                backdropFilter: "blur(20px)",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.span
                  className="text-4xl"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.icon}
                </motion.span>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {category.category}
                </h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { staggerChildren: 0.1, duration: 0.5 },
                  },
                }}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className="text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1 rounded-full shadow-sm transition-all duration-300 hover:bg-gray-200"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
