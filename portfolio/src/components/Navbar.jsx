import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className="
      fixed top-0 w-full z-50
      backdrop-blur-md
      bg-white/30 dark:bg-black/30
      border-b border-white/20 dark:border-white/10
      shadow-sm py-3
      transition-colors duration-300
    "
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Brand Name */}
        <a
          href="/"
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          Golvin.portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {["about", "skills", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="capitalize text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
            >
              {section}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-lg"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/40 dark:bg-black/40 backdrop-blur-lg flex flex-col space-y-4 px-6 py-4 border-t border-white/20 dark:border-white/10 shadow-lg rounded-b-2xl transition-all duration-300">
          {["about", "skills", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setMenuOpen(false)}
              className="capitalize text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent-dark transition-colors duration-300"
            >
              {section}
            </a>
          ))}
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            className="text-lg mt-2 px-4 py-2 rounded-lg bg-gray-800 text-white dark:bg-gray-200 dark:text-black transition-all duration-300"
          >
            {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
