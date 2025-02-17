import React, { useState, useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const originalBlogPosts = [
  { id: 1, title: "The Midnight Traveler", category: "Science Fiction", tags: ["Time Travel", "Adventure"], bgColor: "bg-blue-100", borderColor: "border-blue-500" },
  { id: 2, title: "Echoes of Silence", category: "Dystopian", tags: ["Psychological", "Thriller"], bgColor: "bg-pink-100", borderColor: "border-pink-500" },
  { id: 3, title: "The Dreamcatcher's Secret", category: "Fantasy", tags: ["Magic", "Mystery"], bgColor: "bg-green-100", borderColor: "border-green-500" },
  { id: 4, title: "The Lost City of Avaris", category: "Fantasy", tags: ["Mythology", "Ancient Legends"], bgColor: "bg-cyan-100", borderColor: "border-cyan-500" },
  { id: 5, title: "A New Dawn in Andromeda", category: "Science Fiction", tags: ["Space Exploration", "Aliens"], bgColor: "bg-orange-100", borderColor: "border-orange-500" },
  { id: 6, title: "The Last Echo", category: "Dystopian", tags: ["Survival", "Post-Apocalypse"], bgColor: "bg-gray-200", borderColor: "border-gray-500" },
];

const categories = ["All", "Science Fiction", "Fantasy", "Dystopian"];

const BlogPage = () => {
  const location = useLocation();
  const [filter, setFilter] = useState(localStorage.getItem("selectedCategory") || "All");
  const [filteredPosts, setFilteredPosts] = useState(originalBlogPosts);

  useEffect(() => {
    localStorage.setItem("selectedCategory", filter);
    if (filter === "All") {
      setFilteredPosts(originalBlogPosts);
    } else {
      setFilteredPosts(originalBlogPosts.filter(post => post.category === filter));
    }
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#E6E6FA] py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-900">Featured Stories</h1>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-lg font-medium transition border border-gray-500 shadow-sm ${
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
        <div className="grid md:grid-cols-3 gap-12">
          {filteredPosts.map((post) => (
            <a
              key={post.id}
              href={`/blog/${post.id}`}
              className={`rounded-3xl p-6 shadow-lg border-2 ${post.borderColor} ${post.bgColor} text-gray-900 transition-transform transform hover:-translate-y-2 hover:shadow-2xl`}
              style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", minHeight: "260px" }}
            >
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{post.category}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white bg-opacity-80 text-gray-700 border border-gray-400 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Read More Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700">This is just a glimpse of my stories.</p>
          <a
            href="https://jacobeanforlife.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 mt-4 text-lg font-semibold text-white bg-gray-900 rounded-full shadow-md transition hover:bg-gray-800"
          >
            Explore My Blog <FaExternalLinkAlt className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
