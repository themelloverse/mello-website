import React, { useState } from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub,
  FaHtml5, FaCss3Alt, FaWindows, FaLinux, FaPhp, FaSlack,
  FaDatabase, FaJira, FaFigma, FaTools, FaCode
} from 'react-icons/fa'; // All icons from the fa library

const skillCategories = [
  {
    category: 'Programming Languages',
    color: '#1E293B',
    skills: [
      { icon: FaCode, name: 'C', level: 'Advanced' },
      { icon: FaCode, name: 'C++', level: 'Advanced' },
      { icon: FaJava, name: 'Java', level: 'Advanced' },
      { icon: FaPython, name: 'Python', level: 'Advanced' },
      { icon: FaCode, name: 'JavaScript', level: 'Advanced' },
      { icon: FaCode, name: 'TypeScript', level: 'Advanced' },
      { icon: FaPhp, name: 'PHP', level: 'Intermediate' },
      { icon: FaLinux, name: 'Bash/Shell', level: 'Intermediate' },
    ],
  },
  {
    category: 'Web Development',
    color: '#312E81',
    skills: [
      { icon: FaHtml5, name: 'HTML', level: 'Advanced' },
      { icon: FaCss3Alt, name: 'CSS', level: 'Advanced' },
      { icon: FaReact, name: 'React', level: 'Advanced' },
      { icon: FaNodeJs, name: 'Node.js', level: 'Advanced' },
      { icon: FaCode, name: 'Express', level: 'Advanced' },
      { icon: FaCode, name: 'Django', level: 'Intermediate' },
      { icon: FaCode, name: 'Flask', level: 'Intermediate' },
    ],
  },
  {
    category: 'Databases',
    color: '#831843',
    skills: [
      { icon: FaDatabase, name: 'MySQL', level: 'Advanced' },
      { icon: FaDatabase, name: 'MongoDB', level: 'Advanced' },
      { icon: FaDatabase, name: 'PostgreSQL', level: 'Advanced' },
    ],
  },
  {
    category: 'Development Tools',
    color: '#0F766E',
    skills: [
      { icon: FaGithub, name: 'GitHub', level: 'Advanced' },
      { icon: FaDocker, name: 'Docker', level: 'Intermediate' },
      { icon: FaTools, name: 'Selenium', level: 'Intermediate' },
      { icon: FaFigma, name: 'Figma', level: 'Intermediate' },
    ],
  },
  {
    category: 'Data & Analytics',
    color: '#7E22CE',
    skills: [
      // Removed FaTableau (no equivalent in fa library)
      // You may replace it with another icon or remove if not needed
    ],
  },
  {
    category: 'Project Management',
    color: '#BE185D',
    skills: [
      { icon: FaJira, name: 'Jira', level: 'Advanced' },
      { icon: FaSlack, name: 'Slack', level: 'Advanced' },
    ],
  },
  {
    category: 'Operating Systems',
    color: '#0369A1',
    skills: [
      { icon: FaWindows, name: 'Windows', level: 'Advanced' },
      { icon: FaLinux, name: 'Unix/Linux', level: 'Advanced' },
    ],
  },
];

const SkillCard = ({ icon: Icon, name, level, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Advanced': return '90%';
      case 'Intermediate': return '70%';
      default: return '50%';
    }
  };

  return (
    <div
      className="relative p-6 rounded-xl transition-all duration-300 hover:scale-105"
      style={{ backgroundColor: `${bgColor}15` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="flex items-center mb-6">
          <div className="p-3 rounded-lg" style={{ backgroundColor: `${bgColor}25` }}>
            <Icon 
              className={`text-4xl transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} 
              style={{ color: bgColor }}
            />
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold" style={{ color: bgColor }}>{name}</h3>
            <p className="text-gray-600">{level}</p>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: getLevelWidth(level),
              backgroundColor: bgColor,
              transform: isHovered ? 'scaleX(1.05)' : 'scaleX(1)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ category, color, skills }) => {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2" style={{ color }}>
          {category}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
  <div className="min-h-screen py-20" style={{ backgroundColor: '#f8fafc' }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-gray-800">
          Technical Expertise
        </h1>
        <p className="text-xl text-gray-600">
          A comprehensive overview of my technical skills and proficiencies
        </p>
      </div>
      
      <div className="space-y-16">
        {skillCategories.map((category) => (
          <CategorySection
            key={category.category}
            category={category.category}
            color={category.color}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  </div>
);

export default SkillPage;
