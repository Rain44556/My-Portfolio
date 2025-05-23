import React, { useState } from "react";
import { motion } from "framer-motion";
import eduExpData from "../utls/eduExpData"

const Tabs = ["Publications", "Education", "Activities"];

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

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {Tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-8 py-4 rounded-lg text-md font-semibold ${
              activeTab === tab
                ? "bg-lime-600 text-white"
                : "bg-lime-200 text-gray-700"
            } transition-all`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="relative w-full max-w-7xl mx-auto mt-16 md:p-0 p-5">
        <div className=" absolute left-1/2 transform -translate-x-1/2 w-1 bg-lime-100 h-full"></div>

        {eduExpData[activeTab.toLowerCase()].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center mb-8 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="w-4 h-4 bg-gray-800 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>

            <div className="bg-gray-800 shadow-lg rounded-xl p-10 w-full md:w-5/12 relative">
              <div className="flex gap-5 items-center">
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
