import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaChevronDown, FaChevronUp, FaBriefcase, FaGraduationCap, FaCode, FaFutbol, FaBookOpen, FaMusic, FaChessKing, FaMapMarkerAlt, FaGamepad, FaTrophy, FaLanguage, FaGlobe } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import AJMImage from "../assets/ajmpic.jpeg";

const experiences = [
  {
    company: "Semper8 International Ltd.",
    role: "Software Developer Intern",
    duration: "January 2025 - Present",
    location: "Remote, Toronto",
    details: [
      "Developing scalable backend solutions using Node.js and Express",
      "Optimizing API performance and implementing real-time features",
      "Collaborating with senior developers on system architecture"
    ],
    bgColor: "bg-blue-50",
    borderColor: "border-blue-400",
  },
  {
    company: "Accenture",
    role: "Application Development Analyst",
    duration: "January 2021 - August 2023",
    location: "Kolkata, India",
    details: [
      "Led a team of 4 developers for SAP security implementations",
      "Reduced system access management time by 40% through automation",
      "Received Excellence Award for process optimization initiatives"
    ],
    bgColor: "bg-blue-50",
    borderColor: "border-blue-400",
  },
];

const education = [
  {
    university: "University of Windsor",
    degree: "Master's in Applied Computing",
    duration: "January 2024 - April 2025",
    grade: "GPA: 8.36/10",
    details: [
      "Specializing in Cloud Computing and Distributed Systems",
      "Research focus on Microservices Architecture",
      "Teaching Assistant for Advanced Algorithms course"
    ],
    bgColor: "bg-teal-50",
    borderColor: "border-teal-400",
  },
  {
    university: "Karunya University",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "June 2016 - August 2020",
    grade: "GPA: 8.2/10",
    details: [
      "Led the college's Coding Club and organized tech workshops",
      "Published research paper on Machine Learning applications",
      "Won Best Project Award for final year thesis"
    ],
    bgColor: "bg-teal-50",
    borderColor: "border-teal-400",
  },
  {
    university: "St. James' School (Kolkata)",
    degree: "ISC, Computer Science",
    duration: "2002 - 2016",
    grade: "Grade: ICSE - 81%, ISC - 82%",
    details: [
      "School Cricket Team Captain",
      "School Football Team",
      "School Quiz Team"
    ],
    bgColor: "bg-teal-50",
    borderColor: "border-teal-400",
  },
];

const categories = [
  {
    name: "Sports",
    icon: <FaFutbol className="text-amber-600" />,
    description: "Captain of university cricket team. Analyzing match strategies and mentoring new players.",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-400",
    details: [
      "Led team to regional championship",
      "Organized weekly practice sessions",
      "Developed new training techniques"
    ]
  },
  {
    name: "Gaming",
    icon: <FaGamepad className="text-indigo-600" />,
    description: "Exploring game development and competitive gaming. Passion for VR & AR technologies.",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-400",
    details: [
      "Created small indie games using Unity",
      "Participated in game jams",
      "Learning Unreal Engine for VR development"
    ]
  },
  {
    name: "Reading & Writing",
    icon: <FaBookOpen className="text-purple-600" />,
    description: "From technical books to sci-fi novels. Passionate about writing and exploring system design patterns.",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-400",
    details: [
      "Published articles on Medium about system design",
      "Maintain a weekly blog on tech trends",
      "Book club member focusing on sci-fi literature"
    ]
  },
  {
    name: "Music",
    icon: <FaMusic className="text-rose-600" />,
    description: "Self-taught guitarist. Love composing and performing music for local events.",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-400",
    details: [
      "Performed at campus events",
      "Learning music production with Logic Pro",
      "Composed background music for student films"
    ]
  },
  {
    name: "Chess",
    icon: <FaChessKing className="text-blue-600" />,
    description: "Chess enthusiast. Studying game theory and exploring advanced strategies.",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-400",
    details: [
      "Regional tournament participant",
      "Online rating of 1800+",
      "Teaching chess to beginners on weekends"
    ]
  },
  {
    name: "Trivia Geek",
    icon: <FaTrophy className="text-emerald-600" />,
    description: "Trivia enthusiast. Competitions, quizzes, and fact-finding are my forte.",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-400",
    details: [
      "Won university-wide trivia competition",
      "Host monthly trivia nights",
      "Specializing in science and tech history"
    ]
  },
];

const AboutPage = () => {
  // State for expanded cards using unique keys
  const [expandedExperienceKey, setExpandedExperienceKey] = useState(null);
  const [expandedEducationKey, setExpandedEducationKey] = useState(null);
  const [expandedHobbyKey, setExpandedHobbyKey] = useState(null);

  // Generate unique keys for cards
  const getUniqueKey = (rowIndex, colIndex) => `${rowIndex}-${colIndex}`;

  // Toggle functions using unique keys
  const toggleExperience = (key) => {
    setExpandedExperienceKey(expandedExperienceKey === key ? null : key);
  };

  const toggleEducation = (key) => {
    setExpandedEducationKey(expandedEducationKey === key ? null : key);
  };

  const toggleHobby = (key) => {
    setExpandedHobbyKey(expandedHobbyKey === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-[#d0e3f7] py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative flex justify-center">
            <div className="w-80 h-80 rounded-full border-8 border-[#1e3a8a] flex items-center justify-center p-2 shadow-lg">
              <img src={AJMImage} alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>

          <div className="space-y-8 flex flex-col justify-between h-full">
            <div className="flex justify-center">
              <h1 className="text-6xl font-poppins font-extrabold text-black">About Me</h1>
            </div>

            <div className="bg-amber-50 p-8 rounded-2xl shadow-md border-4 border-amber-300 hover:shadow-xl transition-all">
              <p className="text-xl leading-relaxed text-black font-semibold">
                Full-stack developer passionate about crafting elegant, scalable applications.
                Exploring AI & cloud architecture while pursuing my Master's degree.
              </p>
            </div>

            <div className="flex space-x-6 justify-center">
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/anishjohnm19/" },
                { icon: <FaGithub />, href: "https://github.com/anishjm1998" },
                { icon: <FaWordpress />, href: "https://jacobeanforlife.wordpress.com/" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="text-black text-3xl hover:scale-110 transition-all hover:text-gray-600">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Path Section */}
        <div className="space-y-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl text-black"><FaBriefcase /></div>
            <h2 className="text-4xl font-poppins font-bold text-black">Professional Path</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {experiences.map((item, index) => {
              const uniqueKey = getUniqueKey(0, index); // Only one row in this section
              return (
                <div
                  key={uniqueKey}
                  className={`${item.bgColor} border-2 ${item.borderColor} rounded-xl p-8 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col justify-between self-start`} // Added self-start
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black">{item.role}</h3>
                    <p className="text-gray-700 font-medium italic">{item.company} • {item.duration}</p>
                    <p className="text-gray-700 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" /> {item.location}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => toggleExperience(uniqueKey)}
                      className="px-4 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full border border-blue-300 flex items-center space-x-1 shadow-sm transition-all hover:shadow-md text-sm font-medium"
                    >
                      <span>{expandedExperienceKey === uniqueKey ? "Less Details" : "More Details"}</span>
                      {expandedExperienceKey === uniqueKey ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
                    </button>
                  </div>

                  {expandedExperienceKey === uniqueKey && (
                    <div className="mt-6 space-y-2 bg-white bg-opacity-50 p-4 rounded-lg border border-blue-200">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm text-gray-800 flex items-start">
                          <span className="text-blue-500 mr-2">•</span> {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div className="space-y-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl text-black"><FaGraduationCap /></div>
            <h2 className="text-4xl font-poppins font-bold text-black">Education Journey</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item, index) => {
              const uniqueKey = getUniqueKey(0, index); // Only one row in this section
              return (
                <div
                  key={uniqueKey}
                  className={`${item.bgColor} border-2 ${item.borderColor} rounded-xl p-8 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col justify-between self-start min-h-[300px]`} // Added self-start
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black">{item.degree}</h3>
                    <p className="text-gray-700 font-medium italic">{item.university} • {item.duration}</p>
                    <p className="text-gray-700 font-medium">{item.grade}</p>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={() => toggleEducation(uniqueKey)}
                      className="px-4 py-1.5 bg-teal-100 hover:bg-teal-200 text-teal-700 rounded-full border border-teal-300 flex items-center space-x-1 shadow-sm transition-all hover:shadow-md text-sm font-medium"
                    >
                      <span>{expandedEducationKey === uniqueKey ? "Less Details" : "More Details"}</span>
                      {expandedEducationKey === uniqueKey ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
                    </button>
                  </div>

                  {expandedEducationKey === uniqueKey && (
                    <div className="mt-6 space-y-2 bg-white bg-opacity-50 p-4 rounded-lg border border-teal-200">
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm text-gray-800 flex items-start">
                          <span className="text-teal-500 mr-2">•</span> {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="space-y-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl text-black"><FaCode /></div>
            <h2 className="text-4xl font-poppins font-bold text-black">Hobbies & Interests</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
            {categories.map((category, index) => {
              const uniqueKey = getUniqueKey(Math.floor(index / 3), index % 3); // Generate unique key based on row and column
              return (
                <div
                  key={uniqueKey}
                  className={`${category.bgColor} border-2 ${category.borderColor} rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between self-start group`} // Added self-start
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-semibold text-black">{category.name}</h3>
                      <div className="text-4xl">{category.icon}</div>
                    </div>
                    <p className="text-gray-700">{category.description}</p>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={() => toggleHobby(uniqueKey)}
                      className={`px-3 py-1 ${category.bgColor} text-gray-700 rounded-full border ${category.borderColor} flex items-center space-x-1 text-sm font-medium shadow-sm hover:shadow-md transition-all opacity-0 group-hover:opacity-100`}
                    >
                      <span>{expandedHobbyKey === uniqueKey ? "Less Details" : "Learn more"}</span>
                      {expandedHobbyKey === uniqueKey ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
                    </button>
                  </div>

                  {expandedHobbyKey === uniqueKey && (
                    <div className="mt-6 space-y-2 bg-white bg-opacity-50 p-4 rounded-lg border border-gray-200">
                      {category.details.map((detail, i) => (
                        <p key={i} className="text-sm text-gray-800 flex items-start">
                          <span className={`mr-2 text-${category.borderColor.split('-')[1]}-500`}>•</span> {detail}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Languages Section */}
        <div className="space-y-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl text-black"><FaGlobe /></div>
            <h2 className="text-4xl font-poppins font-bold text-black">Languages</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: "Malayalam", proficiency: "Native", color: "bg-green-50 border-green-400", icon: <FaLanguage className="text-green-600 text-2xl mb-1" /> },
              { name: "English", proficiency: "Fluent", color: "bg-blue-50 border-blue-400", icon: <FaLanguage className="text-blue-600 text-2xl mb-1" /> },
              { name: "Hindi", proficiency: "Fluent", color: "bg-orange-50 border-orange-400", icon: <FaLanguage className="text-orange-600 text-2xl mb-1" /> },
              { name: "Bengali", proficiency: "Conversational", color: "bg-purple-50 border-purple-400", icon: <FaLanguage className="text-purple-600 text-2xl mb-1" /> },
              { name: "Tamil", proficiency: "Beginner", color: "bg-yellow-50 border-yellow-400", icon: <FaLanguage className="text-yellow-600 text-2xl mb-1" /> }
            ].map((lang, i) => (
              <div key={i} className={`${lang.color.split(' ')[0]} border-2 ${lang.color.split(' ')[1]} rounded-lg p-4 flex flex-col items-center space-y-1 shadow-sm hover:shadow-md transition-all transform hover:scale-105`}>
                {lang.icon}
                <h3 className="font-bold text-lg text-black">{lang.name}</h3>
                <p className="text-sm text-gray-600">{lang.proficiency}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;