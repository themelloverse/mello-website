import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./App"; // Import the blogPosts object

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[id];

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
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;