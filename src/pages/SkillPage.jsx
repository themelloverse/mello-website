import React from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub,
  FaHtml5, FaCss3Alt, FaWindows, FaLinux, FaPhp, FaSlack,
  FaDatabase, FaJira, FaFigma, FaTools, FaCode
} from 'react-icons/fa';

const skillCategories = [
  {
    category: 'Programming Languages',
    color: '#1E293B',
    skills: [
      { icon: FaCode, name: 'C' },
      { icon: FaCode, name: 'C++' },
      { icon: FaJava, name: 'Java' },
      { icon: FaPython, name: 'Python' },
      { icon: FaCode, name: 'JavaScript' },
      { icon: FaCode, name: 'TypeScript' },
      { icon: FaPhp, name: 'PHP' },
      { icon: FaLinux, name: 'Bash/Shell' },
    ],
  },
  {
    category: 'Web Development',
    color: '#312E81',
    skills: [
      { icon: FaHtml5, name: 'HTML' },
      { icon: FaCss3Alt, name: 'CSS' },
      { icon: FaReact, name: 'React' },
      { icon: FaNodeJs, name: 'Node.js' },
      { icon: FaCode, name: 'Express.js' },
      { icon: FaCode, name: 'Django' },
      { icon: FaCode, name: 'Flask' },
    ],
  },
  {
    category: 'Databases',
    color: '#831843',
    skills: [
      { icon: FaDatabase, name: 'MySQL' },
      { icon: FaDatabase, name: 'MongoDB' },
      { icon: FaDatabase, name: 'PostgreSQL' },
    ],
  },
  {
    category: 'Development Tools',
    color: '#0F766E',
    skills: [
      { icon: FaGithub, name: 'GitHub' },
      { icon: FaDocker, name: 'Docker' },
      { icon: FaTools, name: 'Selenium' },
      { icon: FaFigma, name: 'Figma' },
    ],
  },
  {
    category: 'Project Management',
    color: '#BE185D',
    skills: [
      { icon: FaJira, name: 'Jira' },
      { icon: FaSlack, name: 'Slack' },
    ],
  },
  {
    category: 'Operating Systems',
    color: '#0369A1',
    skills: [
      { icon: FaWindows, name: 'Windows' },
      { icon: FaLinux, name: 'Unix/Linux' },
    ],
  },
];

const SkillCard = ({ icon: Icon, name, bgColor }) => {
  return (
    <div
      className="flex items-center space-x-4 bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition-all"
    >
      <div className="p-3 rounded-lg" style={{ backgroundColor: `${bgColor}25` }}>
        <Icon className="text-3xl" style={{ color: bgColor }} />
      </div>
      <h3 className="text-lg font-medium text-gray-800">{name}</h3>
    </div>
  );
};

const CategorySection = ({ category, color, skills }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4" style={{ color }}>
        {category}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} icon={skill.icon} name={skill.name} bgColor={color} />
        ))}
      </div>
    </div>
  );
};

const SkillPage = () => (
  <div className="min-h-screen py-20 bg-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Technical Expertise
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          A comprehensive list of technologies I specialize in.
        </p>
      </div>

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <CategorySection key={category.category} category={category.category} color={category.color} skills={category.skills} />
        ))}
      </div>
    </div>
  </div>
);

export default SkillPage;
