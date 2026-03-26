import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-28 pb-16 rounded-2xl">
      <div className="w-full max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left space-y-6"
          >
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-500 dark:text-white leading-tight">
                Hi, I'm
              </h1>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                GOLVIN TOMY
              </h1>

              <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold text-gray-500 dark:text-white">
                Full-Stack Developer (MERN)
              </h2>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              I build fast, scalable, and modern web experiences using React,
              Node.js, Express & MongoDB.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-full 
             bg-white dark:bg-cyan-400
             text-gray-700 dark:text-black 
             font-semibold tracking-wide
             border border-gray-500/30 dark:border-transparent
             shadow-md shadow-gray-800/30 dark:shadow-cyan-400/30
             hover:bg-gray-200 dark:hover:bg-cyan-300
             hover:text-black
             hover:scale-105 transition-all duration-300"
            >
              View My Work
              
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                ↓
              </span>
            </button>
          </motion.div>

          {/* RIGHT - IMAGE + LOCATION + BUTTONS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* IMAGE */}
            <div className="relative mb-6">
              <div className="w-44 h-44 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="IMG_0740.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mb-6 text-lg sm:text-xl">
              <FaMapMarkerAlt className="text-[#0A66C2] dark:text-cyan-400  text-2xl" />
              <span>Chennai, India</span>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
              <SocialButton
                href="https://github.com/Golvin-Tomy"
                icon={
                  <FaGithub className="text-2xl text-gray-800 dark:text-cyan-400" />
                }
                label="GitHub"
              />

              <SocialButton
                href="https://www.linkedin.com/in/golvin-tomy-aa1901244/"
                icon={
                  <FaLinkedin className="text-2xl text-[#0A66C2] dark:text-cyan-400" />
                }
                label="LinkedIn"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* REUSABLE BUTTON */
const SocialButton = ({ href, icon, label, download }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    download={download}
    className="
      flex items-center gap-3 px-7 py-3 rounded-2xl font-semibold text-lg
      bg-white/90 dark:bg-white/10 border border-gray-300 dark:border-white/20 
      text-gray-800 dark:text-white backdrop-blur-lg
      transition-all duration-300 hover:scale-105 hover:shadow-xl
      dark:hover:bg-white/20 hover:bg-gray-100
    "
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default Hero;
