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
  {
    id: 3,
    title: "Whispers in the Wind",
    excerpt: "Exploring the hidden voices of the past...",
    date: "2024-02-10",
    readTime: "6 min read",
    category: "Mystery",
    bgColor: "bg-green-100",
    borderColor: "border-green-600",
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
            My Blog Posts
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className={`rounded-xl p-8 border ${post.borderColor} 
                          shadow-xl hover:shadow-2xl transition-all duration-300 
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
