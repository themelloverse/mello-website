import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Ensure these are in lowercase as per your updated filenames
const featuredBlogs = [
  {
    id: "the-egg", // Ensure this matches the lowercase file name (theegg.js)
    title: "The Egg",
    description:
      "A mind-bending story about reincarnation, the meaning of life, and the interconnectedness of all beings.",
    readTime: "6 min read", // Adjusted to match content length
    category: "Science Fiction",
    bgColor: "bg-green-100",
    borderColor: "border-green-600",
  },
  {
    id: "rainbows", // Ensure this matches the lowercase file name (rainbows.js)
    title: "Seeking Rainbows",
    description:
      "A motivational piece about finding hope and beauty in life's storms and seeking your own rainbow.",
    readTime: "4 min read", // Adjusted to match content length
    category: "Life",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-600",
  },
  {
    id: "durgapuja", // Ensure this matches the lowercase file name (durgapuja.js)
    title: "Durga Puja",
    description:
      "A nostalgic journey through the magic of Durga Puja in Kolkata, filled with warmth, chaos, and lifelong memories.",
    readTime: "5 min read", // Adjusted to match content length
    category: "Personal Diary",
    bgColor: "bg-pink-100", // Updated to maroon shade
    borderColor: "border-pink-600", // Updated to maroon shade
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-[#F5F3EF]">
      <motion.div
        className="relative container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight font-poppins">
            Featured Stories
          </h2>
        </div>

        {/* Featured Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredBlogs.map((post) => (
            <motion.div
              key={post.id}
              className={`rounded-2xl p-6 border-2 ${post.borderColor} 
                          shadow-lg hover:shadow-xl transition-all duration-300 
                          ${post.bgColor} cursor-pointer flex flex-col justify-between`}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              {/* Meta Info */}
              <div className="text-sm text-gray-700 mb-4">
                <span className="text-gray-600">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 font-poppins italic">
                {post.description}
              </p>

              {/* Category Tag */}
              <div className="flex justify-end">
                <span
                  className={`px-3 py-1.5 text-sm font-medium rounded-full ${post.borderColor} bg-white bg-opacity-80 border font-poppins`}
                >
                  {post.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="text-center mt-12">
          <motion.button
            onClick={() => {
              scrollToTop();
              navigate("/blog");
            }}
            className="px-8 py-3 border border-gray-400 text-gray-800 rounded-full bg-white 
                         hover:bg-gray-100 shadow-md transition duration-300 transform hover:scale-105 font-poppins"
            whileHover={{ scale: 1.05 }}
          >
            View All Blogs
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Blog;