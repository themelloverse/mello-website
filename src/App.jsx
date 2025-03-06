import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./components/BlogPost"; // Updated import path
import ContactPage from "./pages/ContactPage";
import durgapuja from "./pages/stories/durgapuja";
import echo from "./pages/stories/echo";
import marauder from "./pages/stories/marauder";
import rainbows from "./pages/stories/rainbows";
import theEgg from "./pages/stories/theegg";
import timetravelparadox from "./pages/stories/timetravelparadox";

// Blog posts data
const blogPosts = {
  durgapuja,
  echo,
  marauder,
  rainbows,
  "the-egg": theEgg,
  "time-travel-paradox": timetravelparadox,
};

// App component
function App() {
  return (
    <Router basename="/ajm-portfolio"> {/* Add basename here */}
      <div className="App bg-white text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route
              path="/blog/:id"
              element={<BlogPost blogPosts={blogPosts} />} // Pass blogPosts as a prop
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;