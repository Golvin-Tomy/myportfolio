import React from "react";
import { motion } from "framer-motion";

const SkillCard = ({ icon, name }) => {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      className="
        group p-4 flex flex-col items-center rounded-xl 
        border border-blue-500/50 bg-white/10 dark:bg-gray-900/30
        hover:bg-blue-100/20 dark:hover:bg-gray-800/50
        transition-all duration-500
      "
    >
      {/* Icon */}
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <span className="text-blue-500 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-500 text-4xl sm:text-5xl">
          {icon}
        </span>
      </div>

      {/* Skill Name */}
      <span className="text-gray-800 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-white transition-colors duration-300 font-medium text-base sm:text-lg font-semibold">
        {name}
      </span>
    </motion.div>
  );
};

export default SkillCard;

