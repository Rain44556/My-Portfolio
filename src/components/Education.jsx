import React, { useState } from "react";
import { motion } from "framer-motion";

const Tabs = ["Publications", "Education", "Activities"];
const data = {
  education: [
    {
      title: "International Islamic University Chittagong",
      subtitle: "Electrical and Electronic Engineering (EEE)",
      location: "Kumira, Sitakundu, Chittagong",
      date: "November 2018 - september 2023",
      logo: "https://i.ibb.co.com/B24cPBNC/iiuc-logo.png",
    },
    {
      title: "Hazera-Taju Degree College",
      subtitle: "Higher Secondary School Certificate",
      location: "Chandgoan, Chittagong",
      date: "May 2016 - April 2018",
      logo: "https://i.ibb.co.com/d34n806/HTUC-logo.jpg",
    },
    {
      title: "SKQ Girls High School and College",
      subtitle: "Secondary School Certificate",
      location: "Mohara, Chittagong",
      date: "January 2014 - February 2016",
      logo: "https://i.ibb.co.com/Swdk3jKF/skq-girls-high-school-and-college-logo.png",
    },
  ],
  publications: [
    {
      title: "Few Shot Learning for Medical Imaging: A Comparative Analysis of Methodologies and Formal Mathematical Framework",
      subtitle: "Book Chapter",
      location: "Published in Springer Nature",
      date: "October 2023",
      logo: "https://i.ibb.co.com/M5ktBkxN/images-1.jpg",
    },
    {
      title: "GSM Based System for Vehicle Gas Leakage Detection and Driver Condition Assessment",
      subtitle: "Conference paper",
      location: "Published in ICAECOT",
      date: "October 2024",
      logo: "https://i.ibb.co.com/rRXnSQY1/ieee.png",
     
    },
  ],
  activities: [
    {
      title: "Open Source Contributor",
      subtitle: "GitHub Projects",
      location: "Online",
      date: "2022 - Present",
      logo: "https://i.ibb.co.com/nM1gDP9X/github-logo.png",
    },
  ],
};

const Education = () => {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <div className="py-10 text-[#D1F26D]">
      <div className="mx-auto max-w-4xl text-center font-bold mb-8">
        <h1 className="text-3xl mb-2">EXPERIENCE & EDUCATION</h1>
        <p className="text-lg">
          The foundation of my education and work experience!
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        {Tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 rounded-lg text-md font-semibold ${
              activeTab === tab
                ? "bg-lime-600 text-white"
                : "bg-lime-200 text-gray-700"
            } transition-all`}> 
            {tab}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto mt-16">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-lime-100 h-full"></div>

        {data[activeTab.toLowerCase()].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center mb-8 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}>
              
            <div className="w-4 h-4 bg-gray-800 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

            <div className="bg-gray-800 shadow-lg rounded-xl p-10 w-5/12 relative">
              <div className="flex items-center space-x-2">
                <img
                  src={item.logo}
                  alt="logo"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <h3 className="text-lg font-bold text-left">{item.title}</h3>
              </div>
              <p className="text-gray-300 text-md">{item.subtitle}</p>
              <p className="text-gray-400 text-md">{item.location}</p>
              <p className="text-blue-600 font-semibold text-sm">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
