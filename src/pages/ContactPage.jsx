import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import emailjs from "emailjs-com"; // Import EmailJS
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const contactInfo = [
    { icon: FaEnvelope, label: "Personal Email", value: "anishjm.1998@gmail.com" },
    { icon: FaEnvelope, label: "Work Email", value: "moothed@uwindsor.ca" },
    { icon: FaPhoneAlt, label: "Phone", value: "+1 226 975 9973" },
    { icon: FaMapMarkerAlt, label: "Address", value: "Windsor, Ontario, Canada" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send the main email to your inbox
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Main email template ID
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      // Send an auto-reply email to the user
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID, // Auto-reply template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setMessage("Message sent successfully!"); // Success message
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setMessage("Failed to send message. Please try again."); // Error message
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-[#E8CFC4] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-black">Let’s Connect</h1>
          <div className="w-16 h-1 bg-black mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form Section */}
          <div className="w-full">
            <div className="bg-[#D9B6AC] border-2 border-[#9E6C65] p-8 rounded-xl shadow-lg text-black">
              <h3 className="text-3xl font-semibold mb-6 text-center">Send Me a Message</h3>

              {/* Status Message */}
              {message && (
                <div
                  className={`p-4 mb-4 rounded-md text-center ${
                    message.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="grid gap-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-[#9E6C65] px-4 py-3 rounded-lg bg-[#E8CFC4] focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/60 transition-all duration-200"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-[#9E6C65] px-4 py-3 rounded-lg bg-[#E8CFC4] focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/60 transition-all duration-200"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-[#9E6C65] px-4 py-3 rounded-lg bg-[#E8CFC4] focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/60 resize-none transition-all duration-200"
                />

                <motion.button
                  type="submit"
                  className="w-full bg-[#660000] text-white py-3 font-medium tracking-wider rounded-lg hover:bg-[#9A5A66] transition duration-300 shadow-md flex justify-center items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 animate-spin h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-[#D9B6AC] border-2 border-[#9E6C65] p-8 rounded-xl shadow-lg text-black">
            <h3 className="text-3xl font-semibold mb-8 text-center">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center space-x-4 p-5 bg-[#E8CFC4] border border-[#9E6C65] rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  {info.icon && <info.icon className="text-2xl text-black" />}
                  <div>
                    <p className="text-sm font-light">{info.label}</p>
                    <p className="text-md font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;