import React, { useState, useEffect } from "react";
import { FaBook, FaExternalLinkAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const originalBlogPosts = [
  { id: 1, title: "🌌 The Midnight Traveler", category: "Science Fiction", tags: ["Time Travel", "Adventure"], color: "bg-blue-200" },
  { id: 2, title: "🕰️ Echoes of Silence", category: "Dystopian", tags: ["Psychological", "Thriller"], color: "bg-pink-200" },
  { id: 3, title: "💭 The Dreamcatcher's Secret", category: "Fantasy", tags: ["Magic", "Mystery"], color: "bg-green-200" },
  { id: 4, title: "🌊 The Lost City of Avaris", category: "Fantasy", tags: ["Mythology", "Ancient Legends"], color: "bg-cyan-200" },
  { id: 5, title: "🚀 A New Dawn in Andromeda", category: "Science Fiction", tags: ["Space Exploration", "Aliens"], color: "bg-orange-200" },
  { id: 6, title: "🖤 The Last Echo", category: "Dystopian", tags: ["Survival", "Post-Apocalypse"], color: "bg-gray-300" },
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
      const filtered = originalBlogPosts.filter(post => post.category === filter);
      setFilteredPosts([...filtered, ...Array(Math.max(0, 6 - filtered.length)).fill(null)]); // Add placeholders
    }
  }, [filter]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-100 to-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col flex-grow">
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900">📖 Fiction Stories</h1>
          <p className="text-lg text-gray-600 mt-2">Step into different worlds with my collection of immersive stories.</p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-10 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full flex items-center text-lg font-medium transition ${
                filter === category
                  ? "bg-gray-900 text-white shadow-md"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              <FaBook className="mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid (Always 6 slots) */}
        <div className="grid md:grid-cols-3 gap-10 flex-grow">
          {filteredPosts.map((post, index) =>
            post ? (
              <a
                key={post.id}
                href={`/blog/${post.id}`}
                className={`${post.color} rounded-3xl p-6 shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl block`}
              >
                <h3 className="text-2xl font-bold text-gray-900">{post.title}</h3>
                <p className="mt-2 text-sm font-medium text-gray-700 bg-white bg-opacity-50 px-3 py-1 rounded-full inline-block">
                  {post.category}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-white bg-opacity-50 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ) : (
              <div key={`empty-${index}`} className="opacity-0"></div> // Invisible placeholder
            )
          )}
        </div>

        {/* Read More Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600">📚 This is just a glimpse of my stories!</p>
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
