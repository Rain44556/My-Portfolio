import React from "react";
import { motion } from "framer-motion";
import jsLogo from "../assets/images/js.png"
import cLogo from "../assets/images/c++.png"
import reactLogo from "../assets/images/react.png"
import nodeLogo from "../assets/images/node.png"
import expressLogo from "../assets/images/express.png"
import mongoLogo from "../assets/images/mongo.png"
import firebaseLogo from "../assets/images/firebase.png"
import htmlLogo from "../assets/images/html.png"
import cssLogo from "../assets/images/CSS.png"
import tailwindLogo from "../assets/images/tailwind.png"
import bootstrapLogo from "../assets/images/bootstrap.png"
import shadecnLogo from "../assets/images/shadecnUI.png"
import daisyLogo from "../assets/images/daisyui.png"
import githubLogo from "../assets/images/github.png"
import queryLogo from "../assets/images/tanstack.png"
import arduinoLogo from "../assets/images/arduino.png"
import matlabLogo from "../assets/images/matlab.png"
import jwtLogo from "../assets/images/jwt.png"



const data = [
  {name: "JavaScript", logo: jsLogo},
  {name: "C++", logo: cLogo},
  {name: "React.js", logo: reactLogo},
  {name:"Node.js", logo: nodeLogo},
  {name: "Express.js", logo: expressLogo},
  {name: "MongoDB", logo: mongoLogo },
  {name: "Firebase", logo: firebaseLogo},
  {name: "HTML", logo: htmlLogo },
  {name: "CSS", logo: cssLogo},
  {name: "Tailwind CSS", logo: tailwindLogo},
  {name: "Bootstrap", logo: bootstrapLogo},
  {name:"ShadCN UI", logo: shadecnLogo},
  {name: "DaisyUI", logo: daisyLogo },
  {name: "JWT", logo: jwtLogo},
  {name: "GitHub", logo: githubLogo},
  {name: "TanStack Query", logo: queryLogo},
  {name: "Arduino", logo: arduinoLogo},
  {name: "Matlab", logo: matlabLogo},
];

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
          {data.map((skill, index) => (
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
