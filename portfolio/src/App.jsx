import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollToTop from "./components/Scroll";

const App = () => {
  return (
    <div
      className="min-h-screen 
      bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 
      dark:from-gray-900 dark:via-slate-900 dark:to-black">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4">
        <section id="hero" className="min-h-screen flex items-center">
          <Hero />
        </section>
        <section id="about" className="py">
          <About />
        </section>
        <section id="skills" className="py-">
          <Skills />
        </section>
        <section id="projects" className="py-4">
          <Projects />
        </section>
        <section id="contact" className="py">
          <Contact />
        </section>
      </main>
      <ScrollToTop />
      <footer className="text-center py-6 border-t border-gray-700">
        <p className="text-black dark:text-white">© {new Date().getFullYear()} Golvin Tomy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
