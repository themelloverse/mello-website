import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaChevronDown, FaChevronUp, FaBriefcase, FaGraduationCap, FaCode, FaFutbol, FaBookOpen, FaMusic, FaUtensils, FaMapMarkerAlt, FaGamepad, FaTrophy, FaLanguage, FaGlobe } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { motion } from "framer-motion";
import AJMImage from "../assets/ajmpic.jpeg";
import AJMImage2 from "../assets/ajmpic2.png";

const experiences = [
  {
    company: "Semper8 International Ltd.",
    role: "Software Developer Intern",
    duration: "January 2025 - Present",
    location: "Remote, Toronto",
    details: [
      "Tools Used: TypeScript, NestJS, MongoDB, React Native, AWS, WebRTC.",
      "Currently pursuing a 4-month internship focused on backend development, API optimization, and real-time communication technologies.",
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
      "Managed system monitoring, reporting, and security administration for 100+ SAP systems, ensuring optimal performance, reliability, and secure user access control.",
      "Automated workflows using SAP GUI scripting, reducing manual effort by 45% and increasing operational efficiency.",
      "Handled user migration for 100+ ERP systems, ensuring smooth transitions and compliance with security requirements.",
      "Performed unit testing, troubleshooting, and data analysis on SAP systems, resolving 95% of issues within 24 hours using HP ALM, ServiceNow, and MS Excel.",
      "Collaborated with auditors to ensure Segregation of Duties (SOD) compliance, leading a team of 2, assigning tasks, and delivering updates in daily meetings.",
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
      "Internship/Project I (COMP8967) - Project with Rocket Innovation Studio",
      "Internship/Project II (COMP8977) - Internship with Semper8 International Ltd.",
      "Atlassian Agile Project Management Professional Certificate (Atlassian)",
      "Career Essentials in GitHub Professional Certificate (GitHub)"
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
      "Member of Journalism Club",
      "Member of ACE (The Association of Computer Engineers)",
      "Content Writer for the University Magazine (Impressions)",
      "University Cricket Team"
    ],
    bgColor: "bg-teal-50",
    borderColor: "border-teal-400",
  },
  {
    university: "St. James' School (Kolkata)",
    degree: "High School, Computer Science",
    duration: "2002 - 2016",
    grade: "Grade: ICSE - 81%, ISC - 82%",
    details: [
      "School Cricket Team Captain",
      "School Football Team",
      "School Quiz Team",
      "Content Writer for the School Magazine (Jacobean)",
      "Member of Science Club",
      "Member of Library Squad",
      "Member of Safety Patrol Squad"
    ],
    bgColor: "bg-teal-50",
    borderColor: "border-teal-400",
  },
];

const categories = [
  {
    name: "Sports",
    icon: <FaFutbol className="text-amber-600" />,
    bgColor: "bg-amber-50",
    borderColor: "border-amber-400",
    details: [
      "Former Semi-Professional Cricketer.",
      "Geeking about all kinds of sports and stats.",
      "Sports Idol - Yuvraj Singh.",
    ]
  },
  {
    name: "Gaming",
    icon: <FaGamepad className="text-indigo-600" />,
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-400",
    details: [
      "Self-proclaimed FIFA god.",
      "Gaming from Dangerous Dave to Cyberpunk.",
      "Challenge me on Chess.com - AJM_1998.",
    ]
  },
  {
    name: "Reading & Writing",
    icon: <FaBookOpen className="text-purple-600" />,
    bgColor: "bg-purple-50",
    borderColor: "border-purple-400",
    details: [
      "Follow my Blog - jacobeanforlife.wordpress.com",
      "True Potterhead and a pure-blood Gryffindor.",
      "Favourite Author - Stephen King.",
    ]
  },
  {
    name: "Music",
    icon: <FaMusic className="text-rose-600" />,
    bgColor: "bg-rose-50",
    borderColor: "border-rose-400",
    details: [
      "I can play the keyboard and sing in the shower.",
      "Fave Song - Comfortably Numb by Pink Floyd.",
      "Add me on Spotify - AJM_1998.",
    ]
  },
  {
    name: "Foodie",
    icon: <FaUtensils className="text-emerald-600" />,
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-400",
    details: [
      "Amateur cook under Mom’s instructions.",
      "Strict Biryani connoisseur.",
      "Coffee addict, always experimenting."
    ]
  },
  {
    name: "Trivia Geek",
    icon: <FaTrophy className="text-blue-600" />,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-400",
    details: [
      "Can be found on Sporcle and QuizUp.",
      "Amazed by geography, astronomy, and dinosaurs.",
      "National Spelling Bee Champion."
    ]
  },
];

const AboutPage = () => {
  const [isFlipped, setIsFlipped] = useState(false); // State for flip animation
  const [expandedExperienceKey, setExpandedExperienceKey] = useState(null);
  const [expandedEducationKey, setExpandedEducationKey] = useState(null);

  // Generate unique keys for cards
  const getUniqueKey = (rowIndex, colIndex) => `${rowIndex}-${colIndex}`;

  // Toggle functions using unique keys
  const toggleExperience = (key) => {
    setExpandedExperienceKey(expandedExperienceKey === key ? null : key);
  };

  const toggleEducation = (key) => {
    setExpandedEducationKey(expandedEducationKey === key ? null : key);
  };

  // Function to handle the flip animation
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="min-h-screen bg-[#d0e3f7] py-20">
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Profile Picture with Flip Animation */}
          <div className="relative flex justify-center flex-col items-center">
            <motion.div
              className="w-80 h-80 rounded-full border-8 border-[#1e3a8a] flex items-center justify-center p-2 shadow-lg cursor-pointer"
              style={{ perspective: "1000px" }}
              onClick={handleFlip}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Front Side */}
              <motion.div
                className="absolute w-full h-full rounded-full"
                style={{ backfaceVisibility: "hidden" }}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
              >
                <img
                  src={AJMImage}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>

              {/* Back Side */}
              <motion.div
                className="absolute w-full h-full rounded-full"
                style={{ backfaceVisibility: "hidden", rotateY: 180 }}
                initial={{ rotateY: 180 }}
                animate={{ rotateY: isFlipped ? 0 : 180 }}
              >
                <img
                  src={AJMImage2}
                  alt="Another Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Flip Me Button */}
            <motion.button
              className="mt-4 px-4 py-2 bg-[#8B6F47]/50 text-white font-poppins font-semibold rounded-lg shadow-md flex items-center gap-2 hover:bg-[#8B6F47]/70 transition duration-300"
              onClick={handleFlip}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span>👀</span> Flip Me
            </motion.button>
          </div>

          <div className="space-y-8 flex flex-col justify-between h-full">
            <div className="flex justify-center">
              <h1 className="text-6xl font-poppins font-extrabold text-black">About Me</h1>
            </div>

            <div className="bg-amber-50 p-8 rounded-2xl shadow-md border-4 border-amber-300 hover:shadow-xl transition-all">
              <p className="text-lg leading-relaxed text-black font-semibold">
                Full-stack Developer currently pursuing a Master’s in Applied Computing at the University of Windsor, graduating in May 2025, and looking for full-time opportunities thereafter.
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
                  className={`${item.bgColor} border-2 ${item.borderColor} rounded-xl p-8 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col justify-between`}
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
            {education.slice(0, 2).map((item, index) => {
              const uniqueKey = getUniqueKey(0, index); // Only one row in this section
              return (
                <div
                  key={uniqueKey}
                  className={`${item.bgColor} border-2 ${item.borderColor} rounded-xl p-8 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg h-full flex flex-col justify-between`}
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
          {/* High School Card - Centered in Bottom Row */}
          <div className="flex justify-center">
            <div
              className={`${education[2].bgColor} border-2 ${education[2].borderColor} rounded-xl p-8 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg w-full md:w-1/2 flex flex-col justify-between`}
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">{education[2].degree}</h3>
                <p className="text-gray-700 font-medium italic">{education[2].university} • {education[2].duration}</p>
                <p className="text-gray-700 font-medium">{education[2].grade}</p>
              </div>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => toggleEducation(getUniqueKey(1, 0))}
                  className="px-4 py-1.5 bg-teal-100 hover:bg-teal-200 text-teal-700 rounded-full border border-teal-300 flex items-center space-x-1 shadow-sm transition-all hover:shadow-md text-sm font-medium"
                >
                  <span>{expandedEducationKey === getUniqueKey(1, 0) ? "Less Details" : "More Details"}</span>
                  {expandedEducationKey === getUniqueKey(1, 0) ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
                </button>
              </div>

              {expandedEducationKey === getUniqueKey(1, 0) && (
                <div className="mt-6 space-y-2 bg-white bg-opacity-50 p-4 rounded-lg border border-teal-200">
                  {education[2].details.map((detail, i) => (
                    <p key={i} className="text-sm text-gray-800 flex items-start">
                      <span className="text-teal-500 mr-2">•</span> {detail}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="space-y-12">
          <div className="flex flex-col items-center space-y-4">
            <div className="text-5xl text-black"><FaCode /></div>
            <h2 className="text-4xl font-poppins font-bold text-black">Hobbies & Interests</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
            {categories.map((category, index) => {
              const uniqueKey = getUniqueKey(Math.floor(index / 3), index % 3); // Generate unique key based on row and column
              return (
                <div
                  key={uniqueKey}
                  className={`${category.bgColor} border-2 ${category.borderColor} rounded-lg shadow-md p-5 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between transform hover:scale-105`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-2xl font-semibold text-black">{category.name}</h3>
                      <div className="text-4xl">{category.icon}</div>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="mt-4 space-y-2 bg-white bg-opacity-50 p-3 rounded-md border border-gray-200">
                    {category.details.map((detail, i) => (
                      <p key={i} className="text-sm text-gray-800 flex items-start">
                        <span className={`mr-2 text-${category.borderColor.split('-')[1]}-500`}>•</span> {detail}
                      </p>
                    ))}
                  </div>
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