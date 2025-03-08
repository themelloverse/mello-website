import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate an API call
    setSubmitted(true);
    setIsLoading(false);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F3EF]">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 font-poppins mb-4">Let’s Connect</h2>

        {/* Contact Form */}
        <motion.div
          className="mt-10 p-6 rounded-xl bg-[#F0EFE6] border-2 border-black/30 shadow-md max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col text-left">
              <label className="text-gray-700 font-medium mb-1 font-poppins">Your Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="border border-black/30 bg-[#F9F7F3] text-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 transition-all duration-300 font-poppins"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-gray-700 font-medium mb-1 font-poppins">Your Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="border border-black/30 bg-[#F9F7F3] text-gray-800 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-500 transition-all duration-300 font-poppins"
              />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-gray-700 font-medium mb-1 font-poppins">Your Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write Your Message Here"
                required
                className="border border-black/30 bg-[#F9F7F3] text-gray-800 rounded-lg px-4 py-2 h-24 focus:ring-2 focus:ring-gray-500 transition-all duration-300 font-poppins"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full bg-[#8B6F47] text-white font-bold font-poppins rounded-lg py-3 hover:bg-[#B99F82] transition duration-300 shadow-md"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 animate-spin h-5 w-5" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* View Full Contact Page Button */}
        <div className="text-center mt-12">
          <motion.button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/contact");
            }}
            className="px-8 py-3 border border-gray-400 text-gray-800 rounded-full bg-white hover:bg-gray-100 shadow-md transition duration-300 transform hover:scale-105 font-sans"
            whileHover={{ scale: 1.05 }}
          >
            View Full Contact Page
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
