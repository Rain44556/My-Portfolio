
import Lottie from "lottie-react";
import animate from "../assets/images/animate.json";
import { FaBookOpen, FaHiking, FaPlaneDeparture } from "react-icons/fa";
import { SiYoutubegaming } from "react-icons/si";

const AboutMe = () => {
  const paraStyle = "mb-2 text-justify";
  const cardStyle = "flex flex-col justify-center items-center border border-lime-800 shadow-xl hover:bg-lime-600 hover:cursor-pointer hover:text-white";
  
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
          <p className={paraStyle}>
My journey into web development has been a unique experience. I graduated with a degree in Electrical and Electronics Engineering (EEE) from IIUC, where I first worked with Arduino microcontrollers during university projects. While many of my classmates were fascinated by circuitry and hardware, I was interested to the logic behind programming, which sparked my passion for software development.          </p>
          <p className={paraStyle}>
 I first explored the basic concepts of programming using the C language. Then, writing my first C++ program made me even more excited and motivated me to explore further in this field. Eventually, I realized that learning JavaScript was important to starting my journey in developing web applications. By tackling coding challenges on platforms like Codeforces and LeetCode, I honed my logical thinking and problem-solving skills.          </p>
          <p className={paraStyle}>
            My technical versatility has grown beautifully through my core knowledge of React and React Router, alongside my expertise in MongoDB. I take pride in implementing secure authentication with Firebase and JWT. I succeed on working with REST APIs, TanStack Query, fetch, and axios to facilitate communication between the client and server.
          </p>
          <p className={paraStyle}>
            I have a basic understanding of Object-Oriented Programming and Data Structures and Algorithms from a theoretical perspective. I am actively working to deepen my knowledge of these topics.
          </p>
          <p className={paraStyle}>
            I know the tech world is constantly growing, and I am also trying to learn new technologies. Whether it's Next.js, typescript and advanced React patterns, I am determined to expanding my knowledge. From experimenting with Arduino to becoming a developer, my journey has been one of passion, continuance, and growth. As I continue on this path, I want to keep learning and contribute to various projects in the tech industry.
          </p>
        </div>
      </div>

      <div className="text-center font-bold mb-3">
        <h1 className="text-3xl">Enjoy Doing</h1>
        <p className="text-lg">How I spend my free time! </p>
        <div className="grid lg:grid-cols-4 gap-6 px-8 my-10">
          <div className={cardStyle}>
            <p><SiYoutubegaming size={150}/></p>
            <p>Gaming</p>
          </div>
          <div className={cardStyle}>
            <p><FaBookOpen size={150} /></p>
            <p>Reading</p>
          </div>
          <div className={cardStyle}>
            <p><FaHiking size={150} /></p>
            <p>Mountain Hiking</p>
          </div>
          <div className={cardStyle}>
            <p><FaPlaneDeparture size={150} /></p>
            <p>Traveling</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
