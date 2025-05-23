import React from "react";
import { motion } from "framer-motion";
import skillsData from "../utls/skillsData.js"


const Skills = () => {
  return (
    <div className=" py-10 overflow-hidden text-[#D1F26D]">
     
      <div className="mx-auto max-w-4xl text-center font-bold mb-12">
        <h2 className="text-3xl mb-2">SKILLS</h2>
        <p className="text-lg"> My Coding & Development Expertise! </p>
      </div>

      <div className="relative w-full">
        <motion.div
          className="flex space-x-6 w-max"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="px-10 py-8 font-semibold text-lg rounded-xl shadow-lg border-2 border-lime-500"
            >
              <img src={skill.logo} alt={skill.name} className="w-20 h-20 mx-auto object-contain bg-transparent" />
              <p className="text-lg text-center font-semibold mt-2">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
