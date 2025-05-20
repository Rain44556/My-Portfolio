import { PiHandWavingDuotone } from "react-icons/pi";
import { motion } from "framer-motion";
import { FaGithubAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/Hero.png";

const Hero = () => {
  return (
    <div className="text-[#D1F26D] my-10">
      <div className="hero-content justify-between flex-col lg:flex-row-reverse mb-10">
        <img src={heroImg} className="lg:max-w-md rounded-lg shadow-2xl" />
        <div className="lg:px-32 px-3">
          <h1 className="text-5xl font-bold flex">
            Hello, I am Bristy!
            <motion.span
              className="ml-4"
              animate={{ rotate: [0, 15, -10, 5, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <PiHandWavingDuotone />
            </motion.span>
          </h1>
          <p className="py-4 text-justify">
            I'm a <span className="text-4xl font-medium">Junior Developer!</span>
          </p>
          <p className="pb-6">
            I work with <span className="font-semibold text-lg">JavaScript</span> and have
            made full-stack projects using <br/> the <span className="font-semibold text-lg">MERN stack</span>.
          </p>

          <div className="text-[#D1F26D] border-b border-[#F2F1DB] my-5"></div>

          <div className="flex gap-10 text-2xl lg:ml-2">
            <Link to="https://github.com/Rain44556">
              <FaGithubAlt />
            </Link>
            <Link to="https://www.linkedin.com/in/bris-ty-b09707262/">
              <FaLink />
            </Link>
            <Link to="https://x.com/Rain44556">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
