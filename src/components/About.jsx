import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AJMImage from "../assets/ajmpic.jpeg";

const About = () => {
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
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-80 h-80 rounded-full border-8 border-black flex items-center justify-center p-2 shadow-lg">
              <img
                src={AJMImage}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content - Info Box */}
          <motion.div
            className="p-6 rounded-xl bg-[#F0EFE6] border-2 border-black/30 shadow-md"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800 font-poppins">My Journey</h3>
            <p className="text-gray-700 leading-relaxed mt-3 font-poppins">
              With 5+ years of experience, I specialize in full-stack development, cloud computing, 
              and AI-driven solutions. My expertise lies in designing scalable, high-performance applications 
              that enhance user experiences.
            </p>
            <p className="text-gray-700 leading-relaxed mt-3 font-poppins">
              From crafting intuitive UI/UX to building complex backend systems, I thrive on solving 
              challenges and pushing technological boundaries. Whether it's machine learning models, 
              progressive web apps, or automation tools, I bring innovative ideas to life.
            </p>

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