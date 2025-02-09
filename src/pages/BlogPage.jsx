import React, { useState } from 'react';
import { FaBook, FaClock } from 'react-icons/fa';

const blogPosts = [
  {
    id: 1,
    title: "The Midnight Traveler",
    content: "A deep exploration of a mysterious journey through time and space...",
    excerpt: "A short story about a mysterious journey through time and space...",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Science Fiction",
    tags: ["Time Travel", "Sci-Fi"],
    image: "https://via.placeholder.com/400",
  },
  {
    id: 2,
    title: "Echoes of Silence",
    content: "A haunting tale of memory and loss in a dystopian world...",
    excerpt: "A haunting tale of memory and loss in a dystopian world...",
    date: "2024-01-22",
    readTime: "7 min read",
    category: "Dystopian",
    tags: ["Dystopia", "Psychological"],
    image: "https://via.placeholder.com/400",
  },
];

const BlogPage = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Science Fiction', 'Fantasy', 'Dystopian'];

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 dark:text-white">Fiction Blog</h1>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-8 space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full flex items-center ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'
              }`}
            >
              <FaBook className="mr-2" />
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                    <FaClock className="mr-2" /> {post.date} • {post.readTime}
                  </span>
                  <span className="bg-primary/10 text-primary dark:text-primary-200 px-2 py-1 rounded-full text-xs">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex space-x-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;