import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";
import { Loader2 } from "lucide-react";

// Main Contact Component
const Contact = () => {
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
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
        >
          Have a project in mind? Let's connect and bring your ideas to life!
        </motion.p>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>

          {/* Success Message */}
          {submitted && (
            <Alert className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700">
              <AlertDescription>
                Thanks for reaching out! I’ll get back to you soon.
              </AlertDescription>
            </Alert>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
