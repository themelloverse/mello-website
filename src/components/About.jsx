import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GokuImage from "../assets/Goku.png";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-[#f8f9fa] to-[#e3eaf3] text-gray-800">
      <div className="relative container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
            🌿 About Me
          </h2>
          <p className="text-lg text-gray-600 mt-3 font-light">
            Passionate software engineer crafting seamless digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="order-2 md:order-1 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              My Journey
            </h3>
            <p className="text-gray-600 leading-relaxed">
              With over <span className="text-blue-500 font-semibold">5 years</span> of experience, I specialize in
              full-stack development, cloud computing, and machine learning.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I’ve worked on **scalable web applications**, **data-driven AI models**, and **cloud-based solutions** 
              that make a difference.
            </p>

            {/* Animated Button */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Link
                to="/about"
                className="inline-block px-6 py-3 mt-4 bg-blue-500 text-white rounded-lg 
                           shadow-lg hover:bg-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="order-1 md:order-2 relative max-w-md mx-auto"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={GokuImage}
                alt="Profile"
                className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
              />
              {/* Soft border effect */}
              <motion.div
                className="absolute inset-0 border border-gray-300 rounded-lg -m-2 opacity-50"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  transition: { repeat: Infinity, duration: 3 },
                }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
