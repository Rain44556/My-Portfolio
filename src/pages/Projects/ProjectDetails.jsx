import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import projectsData from "../../utls/projectsData";
import { FaGithub, FaLink } from "react-icons/fa";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((info) => info.id === parseInt(id));

  return (
    <motion.div
      className="text-[#d7f480] p-10"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}>

      <motion.div
        className="grid lg:grid-cols-2 gap-10"
        variants={fadeIn}>
        <motion.div
          className="border border-lime-800 overflow-hidden"
          whileHover={{ scale: 1.05 }}>
          <img src={project.image} className="h-full w-full shadow-lg" alt="" />
        </motion.div>

        <motion.div className="px-4" variants={fadeIn}>
          <h1 className="text-3xl font-semibold text-[#D1F26D] text-center mb-4">
            {project.name}
          </h1>
          <p className="text-gray-300 text-sm text-justify">
            <span className="font-bold">Description: </span> {project.description}
          </p>

          <div className="mt-3 flex gap-3">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline flex gap-2">
              Live Demo <FaLink className="mt-1" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline flex gap-2 ml-3"
            >
              GitHub <FaGithub className="text-lg mt-1" />
            </a>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            <span className="font-bold text-lg underline mr-3">Tools: </span>
            {project.techStack.map((tech, idx) => (
              <motion.p
                key={idx}
                className="px-3 py-2 text-xs bg-gray-800 text-gray-200 rounded-full"
                variants={fadeIn}>
                {tech}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="grid lg:grid-cols-3 gap-5 text-left mt-16" variants={staggerContainer}>
        {[{ title: "Challenge", items: project.challenges },
          { title: "Potential Improvements", items: project.improvements },
          { title: "Future Plans", items: project.plans }].map((section, idx) => (
          <motion.div key={idx} className="p-5 shadow-sm shadow-lime-500 hover:bg-lime-600 hover:text-white" variants={fadeIn}>
            <span className="font-bold text-lg underline">{section.title}: </span>
            {section.items.map((item, index) => (
              <motion.li key={index} className="px-2 py-1 text-md" variants={fadeIn}>
                {item}
              </motion.li>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetails;
