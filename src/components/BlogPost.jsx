import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogPost = ({ blogPosts }) => {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate(); // Use the useNavigate hook for navigation
  const post = blogPosts[id]; // Find the corresponding blog post

  // Function to handle the "Go Back to Blog Page" button click
  const handleGoBack = () => {
    navigate("/blog"); // Navigate back to the blog page
  };

  if (!post) {
    return <h2 className="text-center text-2xl mt-20">Blog post not found</h2>;
  }

  return (
    <div className="min-h-screen bg-[#E6E6FA] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`rounded-3xl p-8 shadow-lg border-2 ${post.borderColor} ${post.bgColor} text-gray-900`}
          style={{
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Go Back to Blog Page Button */}
          <div className="mb-8">
            <button
              onClick={handleGoBack} // Use the handleGoBack function
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Go Back to Blog
            </button>
          </div>

          {/* Render the blog post content */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;