import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaWindows,
  FaLinux,
  FaDatabase,
  FaJira,
  FaFigma,
  FaTools,
  FaCode,
  FaAws,
  FaMicrosoft,
  FaTerminal,
  FaCloud,
  FaLaptopCode,
  FaServer,
  FaCogs,
  FaTasks,
  FaFileCode,
} from "react-icons/fa";

const skillCategories = [
  {
    category: "Programming Languages",
    color: "#3B6A5C",
    description: "Core programming languages I work with",
    skills: [
      { icon: FaCode, name: "C / C++", level: "Advanced" },
      { icon: FaJava, name: "Java", level: "Advanced" },
      { icon: FaPython, name: "Python", level: "Expert" },
      { icon: FaFileCode, name: "JavaScript", level: "Expert" },
      { icon: FaCode, name: "TypeScript", level: "Advanced" },
      { icon: FaTerminal, name: "Shell / Bash", level: "Intermediate" },
    ],
  },
  {
    category: "Databases & Storage",
    color: "#831843",
    description: "Database management systems I use",
    skills: [
      { icon: FaDatabase, name: "PostgreSQL", level: "Expert" },
      { icon: FaDatabase, name: "MySQL", level: "Advanced" },
      { icon: FaDatabase, name: "MongoDB", level: "Advanced" },
    ],
  },
  {
    category: "Frontend Development",
    color: "#312E81",
    description: "Tools & frameworks for building UIs",
    skills: [
      { icon: FaHtml5, name: "HTML5", level: "Expert" },
      { icon: FaCss3Alt, name: "CSS3", level: "Expert" },
      { icon: FaReact, name: "React", level: "Expert" },
      { icon: FaReact, name: "React Native", level: "Advanced" },
      { icon: FaCss3Alt, name: "Tailwind CSS", level: "Advanced" },
      { icon: FaCode, name: "Vite", level: "Advanced" },
    ],
  },
  {
    category: "Backend Development",
    color: "#0F766E",
    description: "Server-side technologies and APIs",
    skills: [
      { icon: FaNodeJs, name: "Node.js", level: "Expert" },
      { icon: FaServer, name: "Express.js", level: "Expert" },
      { icon: FaServer, name: "NestJS", level: "Advanced" },
      { icon: FaPython, name: "Django", level: "Advanced" },
      { icon: FaPython, name: "Flask", level: "Intermediate" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "#0369A1",
    description: "Cloud platforms and DevOps tools",
    skills: [
      { icon: FaAws, name: "AWS", level: "Advanced" },
      { icon: FaCloud, name: "Google Maps API", level: "Intermediate" },
      { icon: FaDocker, name: "Docker", level: "Advanced" },
      { icon: FaGithub, name: "GitHub", level: "Expert" },
      { icon: FaTools, name: "Prometheus", level: "Intermediate" },
      { icon: FaCogs, name: "Grafana", level: "Intermediate" },
    ],
  },
  {
    category: "Data & Analytics",
    color: "#A21CAF",
    description: "Data processing and visualization tools",
    skills: [
      { icon: FaLaptopCode, name: "Jupyter Notebook", level: "Advanced" },
      { icon: FaMicrosoft, name: "MS Excel", level: "Advanced" },
      { icon: FaMicrosoft, name: "Power BI", level: "Advanced" },
      { icon: FaCogs, name: "Power Automate", level: "Intermediate" },
    ],
  },
  {
    category: "Development & Testing Tools",
    color: "#BE185D",
    description: "Software tools for development workflow",
    skills: [
      { icon: FaCode, name: "VSCode", level: "Expert" },
      { icon: FaFigma, name: "Figma", level: "Advanced" },
      { icon: FaTools, name: "Selenium", level: "Intermediate" },
      { icon: FaTools, name: "Postman", level: "Intermediate" },
      { icon: FaTools, name: "Insomnia", level: "Intermediate" },
      { icon: FaFileCode, name: "Markdown", level: "Intermediate" },
      { icon: FaServer, name: "Celery", level: "Intermediate" },
    ],
  },
  {
    category: "Project Management & Collaboration",
    color: "#B45309",
    description: "Tools for project tracking and communication",
    skills: [
      { icon: FaJira, name: "Jira", level: "Expert" },
      { icon: FaTasks, name: "ServiceNow", level: "Advanced" },
      { icon: FaCogs, name: "Slack", level: "Expert" },
    ],
  },
  {
    category: "Operating Systems",
    color: "#374151",
    description: "Operating systems I work with",
    skills: [
      { icon: FaWindows, name: "Windows", level: "Expert" },
      { icon: FaLinux, name: "Unix/Linux", level: "Advanced" },
    ],
  },
];

const SkillCard = ({ icon: Icon, name, level, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center space-x-4 bg-white rounded-xl p-4 transition-all duration-300 ${
        isHovered ? "shadow-xl scale-105" : "shadow-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="p-3 rounded-lg transition-all duration-300"
        style={{
          backgroundColor: `${bgColor}15`,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      >
        <Icon className="text-2xl" style={{ color: bgColor }} />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        <span className="text-sm text-gray-500">{level}</span>
      </div>
    </div>
  );
};

const CategorySection = ({ category, color, skills }) => {
  return (
    <div className="mb-16">
      <div className="border-l-4 pl-6" style={{ borderColor: color }}>
        <h2 className="text-3xl font-bold mb-2" style={{ color }}>
          {category}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            level={skill.level}
            bgColor={color}
          />
        ))}
      </div>
    </div>
  );
};

const SkillPage = () => (
  <div className="min-h-screen py-20 bg-[#E7E2D5]"> {/* Lighter, aesthetic background */}
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-6xl font-extrabold text-gray-900 text-center mb-16">
        Technical Expertise
      </h1>

      {skillCategories.map((category) => (
        <CategorySection key={category.category} {...category} />
      ))}
    </div>
  </div>
);

export default SkillPage;
