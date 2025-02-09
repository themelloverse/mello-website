import React from 'react';

// Skills.jsx
const skills = [
  { 
    category: 'Frontend', 
    skills: ['React', 'JavaScript', 'HTML/CSS'],
    icon: '🎨'
  },
  { 
    category: 'Backend', 
    skills: ['Node.js', 'Python', 'Java'],
    icon: '⚙️'
  },
  { 
    category: 'Database', 
    skills: ['MongoDB', 'PostgreSQL'],
    icon: '🗄️'
  },
  { 
    category: 'DevOps', 
    skills: ['AWS', 'Docker'],
    icon: '🚀'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">Skills Overview</h2>
          <p className="section-subtitle">
            Core technologies I work with
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {skills.map((category) => (
              <div
                key={category.category}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{category.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;