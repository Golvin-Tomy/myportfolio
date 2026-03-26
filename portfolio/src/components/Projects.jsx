import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard"; // Make sure this points to your ProjectCard component

const projects = [
    {
  title: "Knowledge Hub",
  desc: "AI-powered collaborative knowledge management platform built using MERN stack. Features semantic search, RAG-based Q&A, group collaboration with invite codes, follow system, and vector embeddings.",
  github: "https://github.com/Golvin-Tomy/knowledge-hub.git",
  demo: "https://knowledge-hub-ten-lovat.vercel.app",
  tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Vector Search", "RAG", "HuggingFace", "OpenRouter"],
  video: "https://www.youtube.com/embed/ZTEvMh8NaDo"
},

  {
    title: "StringCraft",
    desc: "Guitar e-commerce website built using MERN stack. Features authentication, product management, and an admin dashboard.",
    github: "https://github.com/Golvin-Tomy/StringCraft",
    demo: "https://stringcraft.vercel.app/",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind", "Zustand", "JWT", "Google OAuth", "Cloudinary"],
    video: "https://www.youtube.com/embed/WEEsWC7VmX0"
  },

];

const Projects = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="max-w-6xl mx-auto my-20 px-6"
  >
    {/* Section Heading */}
    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
      Featured Work
    </h2>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </motion.div>
);

export default Projects;


