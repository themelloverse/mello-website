import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom"; // Import useParams
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import durgapuja from "./pages/stories/durgapuja"; // Corrected path
import echo from "./pages/stories/echo";
import marauder from "./pages/stories/marauder";
import rainbows from "./pages/stories/rainbows";
import theEgg from "./pages/stories/theEgg";
import timetravelparadox from "./pages/stories/timeTravelParadox";

// Blog posts data
const blogPosts = {
  durgapuja,
  echo,
  marauder,
  rainbows,
  "the-egg": theEgg,
  "time-travel-paradox": timetravelparadox,
};

// BlogPost component
const BlogPost = () => {
  const { id } = useParams(); // Get the id from the URL
  const post = blogPosts[id]; // Find the corresponding blog post

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

// App component
function App() {
  return (
    <Router>
      <div className="App bg-white text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPost />} /> {/* Route for individual blog posts */}
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;