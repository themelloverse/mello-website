import React from 'react';
import {
  FaReact, FaNodeJs, FaPython,
  FaJava, FaDocker, FaAws,
} from 'react-icons/fa';
import {
  SiTypescript, SiJavascript,
  SiMongodb, SiPostgresql,
} from 'react-icons/si';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { icon: FaReact, name: 'React', level: 'Advanced' },
      { icon: SiTypescript, name: 'TypeScript', level: 'Intermediate' },
      { icon: SiJavascript, name: 'JavaScript', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { icon: FaNodeJs, name: 'Node.js', level: 'Advanced' },
      { icon: FaPython, name: 'Python', level: 'Intermediate' },
      { icon: FaJava, name: 'Java', level: 'Intermediate' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { icon: SiMongodb, name: 'MongoDB', level: 'Advanced' },
      { icon: SiPostgresql, name: 'PostgreSQL', level: 'Intermediate' },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { icon: FaDocker, name: 'Docker', level: 'Intermediate' },
      { icon: FaAws, name: 'AWS', level: 'Beginner' },
    ],
  },
];

const SkillCard = ({ icon: Icon, name, level }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:scale-105">
    <div className="flex items-center mb-4">
      <Icon className="text-4xl text-primary dark:text-primary-400 mr-4" />
      <div>
        <h3 className="text-xl font-semibold dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{level}</p>
      </div>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-primary dark:bg-primary-400 h-2.5 rounded-full"
        style={{
          width: level === 'Advanced' ? '85%' :
            level === 'Intermediate' ? '65%' : '40%',
        }}
      ></div>
    </div>
  </div>
);

const SkillPage = () => (
  <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Detailed Skills</h1>
      {skillCategories.map((category) => (
        <div key={category.category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 dark:text-white">{category.category}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {category.skills.map((skill) => (
              <SkillCard
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillPage;