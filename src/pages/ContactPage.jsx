import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "hello@studio.co" },
    { icon: FaPhoneAlt, label: "Phone", value: "+1 234 567 890" },
    { icon: FaMapMarkerAlt, label: "Address", value: "123 Design Street, NY" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate an API call
    setMessage("Message sent successfully!");
    setLoading(false);
    setFormData({ name: "", email: "", message: "" });
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
          <div className="bg-[#D9B6AC] border-2 border-[#9E6C65] p-10 rounded-xl shadow-lg text-black flex flex-col justify-between h-full">
            <h3 className="text-3xl font-semibold mb-6 text-center">Send Me a Message</h3>

            {message && (
              <div className="bg-[#F0D9D5] p-4 text-black rounded-md mb-4">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full border border-[#9E6C65] px-4 py-3 rounded-lg bg-[#E8CFC4] focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/60 transition-all ease-in-out duration-200 ${
                    focusedField === "name" ? "border-black" : ""
                  }`}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full border border-[#9E6C65] px-4 py-3 rounded-lg bg-[#E8CFC4] focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/60 transition-all ease-in-out duration-200 ${
                    focusedField === "email" ? "border-black" : ""
                  }`}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border border-[#9E6C65] px-4 py-3 rounded-lg bg-[#E8CFC4] focus:outline-none focus:ring-2 focus:ring-black placeholder:text-black/60 resize-none transition-all ease-in-out duration-200 ${
                    focusedField === "message" ? "border-black" : ""
                  }`}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

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

          {/* Contact Information Section */}
          <div className="bg-[#D9B6AC] border-2 border-[#9E6C65] p-10 rounded-xl shadow-lg text-black flex flex-col justify-between h-full">
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
