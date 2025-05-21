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
        <img
          src={heroImg}
          className="lg:max-w-md max-w-sm rounded-lg shadow-2xl px-5"
        />

        <div className="lg:px-32 px-3 lg:py-2 py-10 lg:text-left">
          <h1 className="lg:text-5xl text-4xl font-bold flex gap-4 items-center">
            Hello, I'm Bristy!
            <motion.span
            className="lg:text-6xl text-5xl"
              animate={{ rotate: [0, 15, -10, 5, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <PiHandWavingDuotone />
            </motion.span>
          </h1>
          <p className="py-4">
            I'm a{" "}
            <span className="lg:text-4xl text-3xl font-medium">
              Junior Developer!
            </span>
          </p>
          <p className="pb-6 text-justify">
            Focused on{" "}
            <span className="font-semibold">Frontend Development</span> |
            Exploring{" "}
            <span className="font-semibold">Backend Technologies</span> |
            Experienced in Building Full Stack projects with the{" "}
            <span className="font-semibold">MERN Stack</span>.
          </p>
          <div className="text-[#D1F26D] border-b border-[#F2F1DB] my-3"></div>

          <div className="flex gap-10 text-3xl px-3 py-4">
            <Link
              to="https://github.com/Rain44556"
              className="hover:text-white"
            >
              <FaGithubAlt />
            </Link>
            <Link
              to="https://www.linkedin.com/in/bris-ty-b09707262/"
              className="hover:text-white"
            >
              <FaLink />
            </Link>
            <Link to="https://x.com/Rain44556" className="hover:text-white">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
