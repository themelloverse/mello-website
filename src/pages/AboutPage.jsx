import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaChevronDown, FaChevronUp, FaBriefcase, FaGraduationCap, FaCode, FaFutbol, FaBookOpen, FaMusic } from "react-icons/fa";
import GokuImage from "../assets/Goku.png";

const experiences = [
  {
    company: "Semper8 International Ltd.",
    role: "Software Developer Intern",
    duration: "Jan 2025 - Present",
    location: "Remote, Toronto",
    details: ["Backend development, API optimization, real-time communication technologies."],
    bgColor: "bg-[#D4E7C5]", // Soft green
  },
  {
    company: "Accenture",
    role: "Application Development Analyst → Associate",
    duration: "Jan 2021 - Aug 2023",
    location: "Kolkata, India",
    details: [
      "Promoted from Associate to Analyst in 2023.",
      "SAP Security, User Management, System Optimization, Automation.",
      "Led a small team and improved access control processes.",
    ],
    bgColor: "bg-[#FFD3B6]", // Soft peach
  },
];

const education = [
  {
    university: "University of Windsor",
    degree: "Master's in Applied Computing",
    duration: "Jan 2024 - Apr 2025",
    grade: "GPA: 83.6",
    details: ["Advanced Software Engineering, Cloud Computing, Networking Security."],
    bgColor: "bg-[#A2D2FF]", // Soft blue
  },
  {
    university: "Karunya Institute of Technology and Sciences",
    degree: "BTech in Computer Science and Engineering",
    duration: "2016 - 2020",
    grade: "GPA: 8.2/10",
    details: ["Software Engineering, Machine Learning, Database Systems."],
    bgColor: "bg-[#BDB2FF]", // Soft lavender
  },
];

const hobbies = [
  { name: "Cricket", icon: <FaFutbol className="text-2xl text-[#FF6584]" /> },
  { name: "Coding & Tech Trends", icon: <FaCode className="text-2xl text-[#6C63FF]" /> },
  { name: "Reading & Writing", icon: <FaBookOpen className="text-2xl text-[#FFD166]" /> },
  { name: "Music", icon: <FaMusic className="text-2xl text-[#06D6A0]" /> },
];

const AboutPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleDetails = (index) => setExpandedIndex(expandedIndex === index ? null : index);

  return (
    <div className="min-h-screen bg-[#FAF3E0] py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col space-y-16">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative flex justify-center">
            <img
              src={GokuImage}
              alt="Profile"
              className="w-full max-w-md rounded-2xl shadow-xl hover:scale-105 transition-transform"
            />
          </div>

          {/* Right Column: Introduction */}
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold text-gray-800">About Me</h1>
            <p className="text-lg text-gray-700">
              Passionate software engineer with expertise in full-stack development, cloud computing, and cybersecurity. 
              I love solving complex problems and building scalable applications.
            </p>

            {/* Fun Fact */}
            <div className="bg-[#FFDDC1] text-gray-800 p-4 rounded-lg shadow-md italic">
              Did you know? I once led my school's cricket team to a championship win! 🏆
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-700 transition" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaGithub className="text-3xl text-gray-700 hover:text-black transition" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <FaTwitter className="text-3xl text-blue-400 hover:text-blue-500 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Education & Experience Sections */}
        {[
          { title: "Education", data: education, icon: <FaGraduationCap className="text-3xl text-[#6C63FF]" /> },
          { title: "Professional Experience", data: experiences, icon: <FaBriefcase className="text-3xl text-[#FF6584]" /> }
        ].map((section, secIndex) => (
          <div key={secIndex}>
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8 flex items-center justify-center space-x-3">
              {section.icon} <span>{section.title}</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {section.data.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} p-6 rounded-xl shadow-md border border-gray-300 hover:translate-y-1 transition-transform`}
                >
                  <h3 className="text-2xl font-semibold text-gray-900">{item.degree || item.role}</h3>
                  <p className="text-gray-700">{item.university || item.company} ({item.duration})</p>
                  <button
                    onClick={() => toggleDetails(index + secIndex * education.length)}
                    className="text-gray-900 hover:opacity-80 transition mt-2"
                  >
                    {expandedIndex === index + secIndex * education.length ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                  {expandedIndex === index + secIndex * education.length && (
                    <div className="mt-3 text-gray-700 border-t border-gray-300 pt-3">
                      {item.details.map((detail, i) => (
                        <p key={i}>• {detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Hobbies & Interests */}
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Hobbies & Interests</h2>
          <div className="flex justify-center space-x-6">
            {hobbies.map((hobby, i) => (
              <div key={i} className="flex items-center space-x-2 text-lg">
                {hobby.icon} <span>{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
