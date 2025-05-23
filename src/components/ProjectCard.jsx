import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative group h-96 rounded-xl overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover group-hover:opacity-20 transition-opacity duration-300"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className=" text-2xl font-bold">{project.name}</h3>
        <Link
          to={`/projects/${project.id}`}
          className="mt-4 px-4 underline py-2 rounded hover:bg-lime-600 text-gray-200 transition ">
          View More
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
