import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaChevronDown, FaChevronUp, FaBriefcase, FaGraduationCap, FaCode, FaFutbol, FaBookOpen, FaMusic, FaChessKing } from "react-icons/fa";
import GokuImage from "../assets/Goku.png";
import { FaWordpress } from "react-icons/fa";

const experiences = [
  {
    company: "Semper8 International Ltd.",
    role: "Software Developer Intern",
    duration: "Jan 2025 - Present",
    location: "Remote, Toronto",
    details: [
      "Developing scalable backend solutions using Node.js and Express",
      "Optimizing API performance and implementing real-time features",
      "Collaborating with senior developers on system architecture"
    ],
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    company: "Accenture",
    role: "Application Development Analyst → Associate",
    duration: "Jan 2021 - Aug 2023",
    location: "Kolkata, India",
    details: [
      "Led a team of 4 developers for SAP security implementations",
      "Reduced system access management time by 40% through automation",
      "Received Excellence Award for process optimization initiatives"
    ],
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
  },
];

const education = [
  {
    university: "University of Windsor",
    degree: "Master's in Applied Computing",
    duration: "Jan 2024 - Apr 2025",
    grade: "GPA: 83.6",
    details: [
      "Specializing in Cloud Computing and Distributed Systems",
      "Research focus on Microservices Architecture",
      "Teaching Assistant for Advanced Algorithms course"
    ],
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
  },
  {
    university: "Karunya Institute of Technology and Sciences",
    degree: "BTech in Computer Science and Engineering",
    duration: "2016 - 2020",
    grade: "GPA: 8.2/10",
    details: [
      "Led the college's Coding Club and organized tech workshops",
      "Published research paper on Machine Learning applications",
      "Won Best Project Award for final year thesis"
    ],
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
];

const hobbies = [
  {
    name: "Cricket",
    icon: <FaFutbol />,
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    iconColor: "text-pink-500",
    description: "Captain of university cricket team. Love analyzing match strategies and mentoring new players."
  },
  {
    name: "Coding & Tech",
    icon: <FaCode />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500",
    description: "Building side projects in Web3 and AI. Active contributor to open-source projects."
  },
  {
    name: "Reading",
    icon: <FaBookOpen />,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
    description: "From technical books to sci-fi novels. Currently exploring system design patterns."
  },
  {
    name: "Music",
    icon: <FaMusic />,
    bgColor: "bg-teal-50",
    borderColor: "border-teal-200",
    iconColor: "text-teal-500",
    description: "Self-taught guitarist. Love composing and performing at local events."
  },
  {
    name: "Chess",
    icon: <FaChessKing />,
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-500",
    description: "Rated 1500+ on chess.com. Enjoy studying game theory and strategies."
  },
];

const AboutPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleDetails = (index) => setExpandedIndex(expandedIndex === index ? null : index);
  const [hoveredHobby, setHoveredHobby] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-20 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col space-y-24">

        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative flex justify-center">
            <div className="w-80 h-80 rounded-full border-8 border-black flex items-center justify-center p-2 shadow-lg">
              <img
                src={GokuImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Introduction */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-blue-800">
                About Me
              </h1>
              <p className="text-xl leading-relaxed text-gray-700 bg-white p-8 rounded-2xl shadow-xl border-2 border-blue-300 hover:border-blue-400 transition-all duration-300">
                Full-stack developer and cloud enthusiast with a passion for building impactful solutions.
                Combining technical expertise with creative problem-solving to craft elegant, scalable applications.
                Currently exploring the intersection of AI and cloud architecture while pursuing my Master's degree.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {[
                { icon: <FaLinkedin />, color: "hover:text-blue-600", href: "https://linkedin.com" },
                { icon: <FaGithub />, color: "hover:text-gray-900", href: "https://github.com" },
                { icon: <FaWordpress />, color: "hover:text-blue-600", href: "https://wordpress.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 text-3xl transform hover:scale-110 transition-all duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>
        </div>

        {/* Education & Experience Sections */}
        {[
          { title: "Education Journey", data: education, icon: <FaGraduationCap /> },
          { title: "Professional Path", data: experiences, icon: <FaBriefcase /> }
        ].map((section, secIndex) => (
          <div key={secIndex} className="space-y-8">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-5xl text-blue-600">{section.icon}</div>
              <h2 className="text-4xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {section.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {section.data.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bgColor} border-2 ${item.borderColor} rounded-xl h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300`}
                >
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {item.degree || item.role}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {item.university || item.company}
                      <span className="block text-sm opacity-75 mt-1">{item.duration}</span>
                    </p>
                    <button
                      onClick={() => toggleDetails(index + secIndex * education.length)}
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <span>{expandedIndex === index + secIndex * education.length ? "Less" : "More"}</span>
                      {expandedIndex === index + secIndex * education.length ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <div className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${expandedIndex === index + secIndex * education.length ? 'max-h-48' : 'max-h-0'}`}>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 pl-4 border-l-2 border-blue-200">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Hobbies & Interests Section */}
        <div className="space-y-12">
          <div className="flex flex-col items-center justify-center space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Passions & Interests
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {hobbies.map((hobby, i) => (
              <div
                key={i}
                className={`relative group rounded-xl border-2 ${hobby.borderColor} ${hobby.bgColor} p-6 transition-all duration-500 hover:shadow-lg hover:border-blue-300`}
                onMouseEnter={() => setHoveredHobby(i)}
                onMouseLeave={() => setHoveredHobby(null)}
              >
                <div className="relative flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className={`text-5xl ${hobby.iconColor} transition-all duration-500 ${hoveredHobby === i ? 'scale-110' : ''}`}>
                    {hobby.icon}
                  </div>

                  {/* Hobby Name */}
                  <h3 className="text-2xl font-semibold text-gray-800">{hobby.name}</h3>

                  {/* Hobby Description */}
                  <p className="text-gray-600 leading-relaxed">{hobby.description}</p>

                  {/* Animated Explore Button */}
                  <div className={`transition-all duration-500 transform ${hoveredHobby === i ? 'translate-y-1' : 'translate-y-0'} opacity-0 group-hover:opacity-100`}>
                    <button className="text-blue-600 font-semibold border-b-2 border-blue-500">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
