import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GokuImage from "../assets/Goku.png";

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-gray-50">
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="text-5xl font-extrabold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🌿 About Me
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Passionate software engineer crafting seamless digital experiences.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-gray-800">My Journey</h3>
            <p className="text-gray-600 leading-relaxed">
              With over{" "}
              <span className="text-indigo-600 font-semibold">5 years</span> of
              experience, I specialize in **full-stack development**, **cloud
              computing**, and **machine learning**.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I’ve worked on **scalable web applications**, **data-driven AI
              models**, and **cloud-based solutions** that make a difference.
            </p>

            {/* Animated Button */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3 rounded-lg text-lg font-medium
                  bg-indigo-600 text-white shadow-md shadow-indigo-300
                  hover:bg-indigo-700 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative max-w-md mx-auto"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={GokuImage}
                alt="Profile"
                className="w-full h-auto max-h-[400px] object-cover rounded-3xl shadow-xl"
              />
              {/* Soft glowing border */}
              <motion.div
                className="absolute inset-0 border border-gray-300 rounded-3xl -m-2 opacity-50"
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
