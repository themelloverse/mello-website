import React, { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Midnight Traveler",
    excerpt: "A short story about a mysterious journey through time and space...",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Science Fiction",
    image: "https://via.placeholder.com/400" // Add an image
  },
  {
    id: 2,
    title: "Echoes of Silence",
    excerpt: "A haunting tale of memory and loss in a dystopian world...",
    date: "2024-01-22",
    readTime: "7 min read",
    category: "Dystopian",
    image: "https://via.placeholder.com/400" // Add an image
  }
  // More blog posts
];

const BlogPost = ({ post }) => (
  <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform transform hover:-translate-y-2">
    <img
      src={post.image}
      alt={post.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          {post.date} • {post.readTime}
        </span>
        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs">
          {post.category}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{post.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
      <button className="mt-4 text-primary hover:underline">
        Read More
      </button>
    </div>
  </div>
);

const Blog = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Science Fiction', 'Fantasy', 'Horror'];

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <section 
      id="blog" 
      className="py-16 bg-gray-100 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
          Fiction Blog
        </h2>
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;