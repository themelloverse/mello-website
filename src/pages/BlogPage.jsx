import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import durgapuja from "./stories/durgapuja";
import echo from "./stories/echo";
import marauder from "./stories/marauder";
import rainbows from "./stories/rainbows";
import theEgg from "./stories/theegg";
import timetravelparadox from "./stories/timetravelparadox";

const originalBlogPosts = [
  {
    id: "durgapuja",
    title: "Durga Puja",
    category: "Personal Diary",
    component: durgapuja,
    bgColor: "bg-pink-100", // Updated to maroon shade
    borderColor: "border-pink-600", // Updated to maroon shade
    description:
      "A nostalgic journey through the magic of Durga Puja in Kolkata, filled with warmth, chaos, and lifelong memories.",
    tags: ["Childhood", "Nostalgia"],
  },
  {
    id: "marauder",
    title: "The New Marauder",
    category: "Fan Fiction",
    component: marauder,
    bgColor: "bg-yellow-100", // Updated to yellow shade
    borderColor: "border-yellow-600", // Updated to yellow shade
    description:
      "A heartwarming Harry Potter fan fiction about the Marauders reuniting in the afterlife.",
    tags: ["Harry Potter", "Marauders"],
  },
  {
    id: "echo",
    title: "Echo of Existence",
    category: "Life",
    component: echo,
    bgColor: "bg-purple-100", // Updated to purple shade
    borderColor: "border-purple-600", // Updated to purple shade
    description:
      "Reflections on life, relationships, and the importance of staying true to oneself amidst the chaos of the world.",
    tags: ["Motivation", "Inspiration"],
  },
  {
    id: "rainbows",
    title: "Seeking Rainbows",
    category: "Life",
    component: rainbows,
    bgColor: "bg-orange-100",
    borderColor: "border-orange-600",
    description:
      "A motivational piece about finding hope and beauty in life's storms and seeking your own rainbow.",
    tags: ["Motivation", "Inspiration"],
  },
  {
    id: "the-egg",
    title: "The Egg",
    category: "Science Fiction",
    component: theEgg,
    bgColor: "bg-green-100",
    borderColor: "border-green-600",
    description:
      "A mind-bending story about reincarnation, the meaning of life, and the interconnectedness of all beings.",
    tags: ["Mind-Bending", "Spiritual"],
  },
  {
    id: "time-travel-paradox",
    title: "A Time Travel Paradox",
    category: "Science Fiction",
    component: timetravelparadox,
    bgColor: "bg-indigo-100",
    borderColor: "border-indigo-600",
    description:
      "A fascinating tale of time travel, paradoxes, and the complexities of human existence.",
    tags: ["Time Travel", "Adventure"],
  },
];

const categories = ["All", "Science Fiction", "Personal Diary", "Life", "Fan Fiction"];

const BlogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filter, setFilter] = useState(localStorage.getItem("selectedCategory") || "All");
  const [filteredPosts, setFilteredPosts] = useState(originalBlogPosts);

  useEffect(() => {
    localStorage.setItem("selectedCategory", filter);
    if (filter === "All") {
      setFilteredPosts(originalBlogPosts);
    } else {
      setFilteredPosts(originalBlogPosts.filter((post) => post.category === filter));
    }
  }, [filter]);

  const handleCardClick = (id) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className="min-h-screen bg-[#E6E6FA] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-900 font-poppins">
            My Blog Stories
          </h1>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-lg font-medium font-poppins transition border border-gray-500 shadow-sm ${
                filter === category
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              className={`relative rounded-2xl p-6 shadow-lg border-2 ${post.borderColor} ${post.bgColor} text-gray-900`}
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                minHeight: "300px", // Adjusted for better spacing
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleCardClick(post.id)}
            >
              <div className="flex flex-col h-full">
                {/* Title and Tags Section */}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold font-poppins mb-3">{post.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {post.tags &&
                      post.tags.map((tag, index) => (
                        <div
                          key={index}
                          className="flex items-center px-3 py-1.5 bg-white bg-opacity-80 rounded-full border border-gray-400 shadow-sm hover:scale-105 transition-all duration-300"
                        >
                          <span className="text-sm font-medium font-poppins">{tag}</span>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Description Section */}
                <div className="flex-1 mb-4">
                  <p className="text-md text-gray-700 leading-relaxed font-poppins italic">
                    {post.description}
                  </p>
                </div>

                {/* Read More Button - Updated for Subtle Design */}
                <div className="mt-auto flex justify-center">
                  <button
                    className="px-3 py-1.5 text-sm font-medium text-gray-700 bg-transparent border border-gray-400 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Section */}
        <div className="mt-16 text-center">
          <p className="text-xl font-medium text-gray-900 mb-6 font-poppins tracking-wide">
            This is just a glimpse of my stories.
          </p>
          <a
            href="https://jacobeanforlife.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gray-900 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            Explore My Blog <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;