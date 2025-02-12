import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";
import { Loader2 } from "lucide-react";

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
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-200" />

      {/* Floating radial pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6366F1_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            📬 Contact Me
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Have a project in mind? Let's connect and bring your ideas to life!
          </p>
        </div>

        {/* Form Container */}
        <motion.div
          className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
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
              className="w-full bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-300"
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