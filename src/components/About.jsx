import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AJMImage from "../assets/ajmpic.jpeg";
import AJMImage2 from "../assets/ajmpic2.png";

const About = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to handle the flip animation
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section id="about" className="relative py-24 bg-[#F5F3EF]">
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-5xl font-extrabold text-gray-900 mb-4 font-poppins"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content - Profile Picture */}
          <motion.div
            className="relative flex justify-center flex-col items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Flipping Container */}
            <motion.div
              className="w-80 h-80 rounded-full border-8 border-black flex items-center justify-center p-2 shadow-lg cursor-pointer"
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
          </motion.div>

          {/* Right Content - Info Box */}
          <motion.div
            className="p-6 rounded-xl bg-[#F0EFE6] border-2 border-black/30 shadow-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mt-auto">
              {/* My Journey Heading */}
              <h3 className="text-2xl font-bold text-gray-900 font-poppins mb-6 text-center">
                My Journey
              </h3>

              {/* Description Paragraphs */}
              <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                Hi, I'm Anish John Moothedam, a Master of Applied Computing student at the University of Windsor, graduating in May 2025.
                With 2.5 years of experience at Accenture, I enjoy building scalable applications and solving complex problems.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold mb-4">
                I'm always eager to learn, grow, and take on new challenges. Outside of tech, I love trivia, sports, chess, and exploring different cultures.
                Feel free to connect!
              </p>
            </div>

            {/* Animated Button (Matching Contact Page Style) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full mt-5"
            >
              <Link
                to="/about"
                className="block w-full bg-[#8B6F47] text-white font-bold font-poppins rounded-lg py-3 hover:bg-[#B99F82] transition duration-300 shadow-md text-center"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;