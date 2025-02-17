import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

const blogPosts = [
  {
    id: 1,
    title: "The Midnight Traveler",
    excerpt: "A mysterious journey through time and space...",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Science Fiction",
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-600",
  },
  {
    id: 2,
    title: "Echoes of Silence",
    excerpt: "A haunting tale of memory and loss...",
    date: "2024-01-22",
    readTime: "7 min read",
    category: "Dystopian",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-600",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-[#FAF4EF]">
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
            My Blog Posts
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className={`rounded-xl p-6 border ${post.borderColor} 
                          shadow-sm hover:shadow-lg transition-all duration-300 
                          ${post.bgColor} cursor-pointer flex flex-col justify-between`}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate("/blog")}
            >
              {/* Meta Info */}
              <div className="text-sm text-gray-700 flex items-center gap-2 mb-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-700 text-sm mt-2">{post.excerpt}</p>
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
