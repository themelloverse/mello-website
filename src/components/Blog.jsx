import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "The Midnight Traveler",
    excerpt: "A mysterious journey through time and space...",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Science Fiction",
    image: "/api/placeholder/400/320",
  },
  {
    id: 2,
    title: "Echoes of Silence",
    excerpt: "A haunting tale of memory and loss...",
    date: "2024-01-22",
    readTime: "7 min read",
    category: "Dystopian",
    image: "/api/placeholder/400/320",
  },
];

const categories = ["All", "Science Fiction", "Dystopian"];

const Blog = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredPosts =
    filter === "All" ? blogPosts : blogPosts.filter((post) => post.category === filter);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-200" />

      {/* Floating radial pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,#6366F1_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            📚 Stories That Inspire
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Discover worlds of imagination through a curated collection of thoughtful fiction.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-6 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300
                ${filter === category
                  ? "bg-gradient-to-r from-indigo-600 to-indigo-400 text-white shadow-xl shadow-indigo-500/30"
                  : "bg-white text-gray-700 hover:bg-gray-200 shadow-md"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full overflow-hidden group hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

                    {/* Read More */}
                    <motion.div
                      className="inline-flex items-center font-medium text-indigo-600 group-hover:text-indigo-400 transition-colors"
                      animate={{
                        x: hoveredId === post.id ? 5 : 0,
                      }}
                    >
                      Read Story
                      <svg
                        className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Blog;