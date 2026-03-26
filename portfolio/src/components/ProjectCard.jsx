import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        p-6 rounded-2xl 
        bg-white/40 dark:bg-white/10 
        backdrop-blur-lg 
        border border-white/20 dark:border-white/10
        shadow-xl hover:shadow-2xl
        transition-all duration-300
      "
    >
      {/* Project Image/video*/}
      <div className="mb-4 overflow-hidden rounded-xl">
        {project.video ? (
          project.video.includes("youtube.com") ? (
            <div className="aspect-video">
              <iframe
                src={project.video}
                title={project.title}
                className="w-full h-full rounded-xl"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
            />
          )
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-col md:flex-row items-start md:justify-between gap-4">
        {/* Project Info */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            {project.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
            {project.desc}
          </p>

          {/* Tech Tags */}
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="
                  text-xs px-2 py-1 rounded-lg 
                  bg-gray-100 dark:bg-gray-800 
                  text-gray-800 dark:text-gray-200
                "
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-row md:flex-col gap-2 mt-4 md:mt-0">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2 px-4 py-2 
              rounded-lg border border-gray-300 dark:border-gray-700
              text-gray-800 dark:text-gray-200
              hover:bg-gray-100 dark:hover:bg-gray-700
              transition-all duration-300
            "
          >
            <FaGithub /> Code
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2 px-4 py-2
              rounded-lg bg-blue-600 dark:bg-cyan-400 hover:bg-blue-700 dark:hover:bg-cyan-600
              dark:bg-blue-500 dark:hover:bg-blue-600
              text-white dark:text-black
              transition-all duration-300
            "
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}
