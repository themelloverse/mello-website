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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
        <p className="text-lg text-gray-600 mt-2">Let's work together! Reach out and I’ll get back to you soon.</p>
      </div>

      <motion.div
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg p-4 text-gray-700 focus:ring-2 focus:ring-indigo-500"
          />
          <Input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg p-4 text-gray-700 focus:ring-2 focus:ring-indigo-500"
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="border border-gray-300 rounded-lg p-4 text-gray-700 focus:ring-2 focus:ring-indigo-500"
          />

          <Button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold rounded-lg py-3 hover:bg-indigo-700 transition duration-300"
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
          </Button>
        </form>

        {/* Success Message */}
        {submitted && (
          <Alert className="mt-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded-lg p-3">
            <AlertDescription>Thanks for reaching out! I’ll get back to you soon.</AlertDescription>
          </Alert>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
