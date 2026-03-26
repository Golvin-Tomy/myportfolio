import React from "react";
import { motion } from "framer-motion";
import { Code, User, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
          About Me
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* LEFT CONTENT */}
          <div
            className="
            bg-white/40 dark:bg-white/10
            backdrop-blur-lg
            border border-white/20 dark:border-white/10
            shadow-xl
            p-8
            rounded-2xl
            transition-all duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              MERN Stack Enthusiast
            </h3>

            {/* <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a passionate developer focused on building modern, responsive,
              and user-friendly web applications. My main expertise lies in the
              MERN stack (MongoDB, Express, React, Node.js), where I enjoy
              creating scalable full-stack solutions.
            </p> */}

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              I enjoy turning ideas into real products, optimizing performance,
              and crafting intuitive user interfaces. I’m constantly learning
              new technologies and improving my development workflow to stay up
              to date with modern web development.
            </p>

            <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently, I’m looking for opportunities where I can contribute as
              a developer, collaborate with teams, and continue growing through
              real-world projects.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <a href="#contact">
                <button className="px-6 py-3 rounded-lg bg-blue-500 dark:bg-cyan-400 text-white dark:text-black hover:bg-blue-600 dark:hover:bg-cyan-600 transition">
                  Get In Touch
                </button>
              </a>

              <a
                href="/GolvinTomyResume.pdf"
                download
                className="px-6 py-3 rounded-lg border border-blue-500 dark:border-cyan-400 text-blue-500 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-800 transition inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="space-y-6">
            <div className="flex gap-4 p-6 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-md">
              <Code className="text-blue-500 dark:text-cyan-400" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Web Development
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Building responsive and performant web applications using
                  modern technologies.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-md">
              <User className="text-blue-500 dark:text-cyan-400" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  UI / UX Design
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Creating clean interfaces and intuitive user experiences with
                  modern design principles.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-md">
              <Briefcase className="text-blue-500 dark:text-cyan-400" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Projects & Growth
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  Building real-world projects and continuously improving my
                  development skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
