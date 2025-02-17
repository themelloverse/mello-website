import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillPage from './pages/SkillPage';
import ProjectPage from './pages/ProjectPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router> {/* No basename, so it works normally in development */}
      <div className="App bg-white text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <div className="pt-16"> {/* Prevent overlap with navbar */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
