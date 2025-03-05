import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

// Ensure these are in lowercase as per your updated filenames
const featuredBlogs = [
  {
    id: "the-egg",  // Ensure this matches the lowercase file name (theegg.js)
    title: "The Egg",
    excerpt: "A thought-provoking story about existence and rebirth...",
    date: "2024-01-05",
    readTime: "4 min read",
    category: "Science Fiction",
    bgColor: "bg-yellow-100",
    borderColor: "border-yellow-600",
  },
  {
    id: "durgapuja",  // Ensure this matches the lowercase file name (durgapuja.js)
    title: "Durga Puja",
    excerpt: "A personal reflection on tradition, devotion, and celebration...",
    date: "2023-10-22",
    readTime: "5 min read",
    category: "Personal Diary",
    bgColor: "bg-red-100",
    borderColor: "border-red-600",
  },
  {
    id: "rainbows",  // Ensure this matches the lowercase file name (rainbows.js)
    title: "Seeking Rainbows",
    excerpt: "Finding hope in life's challenges and chasing dreams...",
    date: "2024-02-15",
    readTime: "6 min read",
    category: "Life",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-600",
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
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            Featured Stories
          </h2>
        </div>

        {/* Featured Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {featuredBlogs.map((post) => (
            <motion.div
              key={post.id}
              className={`rounded-xl p-8 border ${post.borderColor} 
                          shadow-xl hover:shadow-2xl transition-all duration-300 
                          ${post.bgColor} cursor-pointer flex flex-col justify-between`}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(`/blog/${post.id}`)} // Ensure this points to the correct route
            >
              {/* Meta Info */}
              <div className="text-sm text-gray-700 flex items-center gap-2 mb-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-700 text-base mt-3">{post.excerpt}</p>
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
                       hover:bg-gray-100 shadow-md transition duration-300 transform hover:scale-105 font-sans"
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
