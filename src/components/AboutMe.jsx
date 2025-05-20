
import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import animate from "../assets/images/animate.json";
import { FaBookOpen, FaHiking, FaPlaneDeparture } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";

const AboutMe = () => {
  return (
    <div id="about" className="text-[#D1F26D]">
      <div className="mx-auto max-w-4xl text-center font-bold mb-3">
        <h2 className="text-3xl mb-2">ABOUT ME</h2>
        <p className="text-lg"> Who am I ? </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 lg:p-10 mb-10">

        <div className="lg:col-span-2 shadow-lg border border-lime-800">
          <Lottie className="" animationData={animate} loop={true}></Lottie>
        </div>

        <div className="lg:col-span-3 shadow-lg border border-lime-800 p-8 ">
          <h2 className="font-bold text-xl mb-4 ">A Developer's Journey: Passion, Growth, and Exploration!</h2>
          <p className="mb-2 text-justify">
            Technology has always intrigued me, but my journey into software development wasn't a conventional one. With a degree in Electrical and Electronics Engineering (EEE) from IIUC, I initially worked on Arduino microcontrollers during my university projects. While others were fascinated by circuits and hardware, I found myself drawn to the logic behind the code. That realization was the spark that led me to software development.
          </p>
          <p className="mb-2 text-justify">
            My first experience with programming was a challenging yet thrilling journey. Writing my first C++ program revealed how a handful of lines could transform ideas into reality. This spark of excitement drove me to delve deeper, ultimately leading me to discover my passion for developing web applications through JavaScript. Working on coding challenges from Codeforces and LeetCode has improved my skills in writing efficient code.
          </p>
          <p className="mb-2 text-justify">
            My technical versatility has grown beautifully through my core knowledge of React and React Router, alongside my expertise in MongoDB. I take pride in implementing secure authentication with Firebase and JWT. I succeed on working with REST APIs, TanStack Query, fetch, and axios to facilitate communication between the client and server.
          </p>
          <p className="mb-2 text-justify">
            I have a basic understanding of Object-Oriented Programming and Data Structures and Algorithms from a theoretical perspective. I am actively working to deepen my knowledge of these topics.
          </p>
          <p className="mb-2 text-justify">
            I know the tech world is constantly growing, and I am also trying to learn new technologies. Whether it's Next.js, typescript and advanced React patterns, I am determined to expanding my knowledge. From experimenting with Arduino to becoming a developer, my journey has been one of passion, continuance, and growth. As I continue on this path, I want to keep learning and contribute to various projects in the tech industry.
          </p>
          {/* <p className="mb-2 text-justify">
        Besides my passion for programming and coding, I have a few fun hobbies that help me relax and grow as a person. I really enjoy reading, gaming, and traveling!
        </p> */}
          {/* <Link
          to="/contact"
          className="bg-[#2a3729] text-white py-3 px-6 rounded-lg shadow-md hover:bg-[#2a3729]"
        >
          Contact Me
        </Link> */}
        </div>
      </div>

      <div className="text-center font-bold mb-3">
        <h1 className="text-3xl">Enjoy Doing</h1>
        <p className="text-lg">How I spend my free time! </p>
        <div className="grid lg:grid-cols-4 gap-6 px-8 my-10">
          <div className="flex flex-col justify-center items-center border border-lime-800 shadow-xl hover:bg-lime-600 hover:cursor-pointer hover:text-white">
            <p><SiYoutubegaming size={150}/></p>
            <p>Gaming</p>
          </div>
          <div className=" flex flex-col justify-center items-center py-4 border border-lime-800 shadow-xl  hover:bg-lime-600 hover:cursor-pointer hover:text-white">
            <p><FaBookOpen size={150} /></p>
            <p>Reading</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-lime-800 shadow-xl  hover:bg-lime-600 hover:cursor-pointer hover:text-white">
            <p><FaHiking size={150} /></p>
            <p>Mountain Hiking</p>
          </div>
          <div className="flex flex-col justify-center items-center border border-lime-800 shadow-xl  hover:bg-lime-600 hover:cursor-pointer hover:text-white">
            <p><FaPlaneDeparture size={150} /></p>
            <p>Traveling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
