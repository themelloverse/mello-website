import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Loader2 } from "lucide-react";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setMessage("Message sent successfully!");
      setLoading(false);
    }, 2000);
  };

  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "hello@studio.co" },
    { icon: FaPhoneAlt, label: "Phone", value: "+1 234 567 890" },
    { icon: FaMapMarkerAlt, label: "Address", value: "123 Design Street, NY" },
    { icon: FaClock, label: "Hours", value: "Mon-Fri: 9am - 6pm" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3f0eb] to-[#d9c8b7] py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-[#2c2c2c] mb-4">Let’s Connect</h1>
          <p className="text-lg text-[#2c2c2c] mb-6 max-w-3xl mx-auto">
            Whether you have a project in mind or just want to chat, feel free to get in touch with us.
          </p>
          <div className="w-16 h-1 bg-[#2c2c2c] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
            {message && (
              <div className="bg-[#e8e4dd] p-4 text-[#2c2c2c] rounded-md mb-4">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full bg-transparent border-b-2 border-[#2c2c2c] rounded-none px-0 py-2 focus:outline-none focus:ring-0 placeholder:text-[#2c2c2c]/50 transition-all ease-in-out duration-200 ${
                    focusedField === "name" ? "border-b-4 border-[#2c2c2c]" : ""
                  }`}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full bg-transparent border-b-2 border-[#2c2c2c] rounded-none px-0 py-2 focus:outline-none focus:ring-0 placeholder:text-[#2c2c2c]/50 transition-all ease-in-out duration-200 ${
                    focusedField === "email" ? "border-b-4 border-[#2c2c2c]" : ""
                  }`}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className={`w-full bg-transparent border-b-2 border-[#2c2c2c] rounded-none px-0 py-2 focus:outline-none focus:ring-0 placeholder:text-[#2c2c2c]/50 resize-none transition-all ease-in-out duration-200 ${
                    focusedField === "message" ? "border-b-4 border-[#2c2c2c]" : ""
                  }`}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2c2c2c] text-[#f4f1eb] py-3 font-medium tracking-wider hover:bg-[#1a1a1a] transition-colors duration-300 shadow-md transform hover:scale-105 flex justify-center items-center"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-6 h-6 mx-auto" />
                ) : (
                  "SEND MESSAGE"
                )}
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8 md:pl-12 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-semibold text-[#2c2c2c] mb-6">Contact Information</h3>
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center space-x-4 p-4 bg-[#f3f0eb] rounded-lg shadow-sm hover:shadow-md transition-all">
                <info.icon className="text-2xl text-[#2c2c2c]" />
                <div>
                  <p className="text-sm font-light text-[#2c2c2c]">{info.label}</p>
                  <p className="text-md font-medium text-[#2c2c2c]">{info.value}</p>
                </div>
              </div>
            ))}
            <div className="pt-6 mt-8 border-t border-[#2c2c2c]/20">
              <p className="text-sm text-[#2c2c2c]/60 font-medium">
                We look forward to hearing from you. Let’s create something awesome!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
