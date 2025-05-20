import React from 'react';
import {  FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-[#3B4D3A] text-[#F2F1DB] py-10 px-10 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          <div className="flex flex-col items-center md:items-start">
            <h1 className='font-bold text-2xl'>Bristy!</h1>
            <p className="mt-2 text-md">
             Junior Web Developer
            </p>
          </div>
  
        
          <div className="">
            <h2 className="text-lg font-bold mb-4">Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#D1F26D] transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D1F26D] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
   
          <div className="flex flex-col items-center md:items-end ">
            <h2 className="text-lg font-bold mb-4">Connect with Us</h2>
            <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/bris-ty-b09707262/" className="hover:text-[#D1F26D] text-[#F2F1DB] transition">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://www.linkedin.com/in/bris-ty-b09707262/" className="hover:text-[#D1F26D] text-[#F2F1DB] transition">
                  <FaFacebook size={24} />
                </a>
            </div>
          </div>
        </div>
  
  
        <div className="mt-8 border-t border-[#F2F1DB] pt-4 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    );
};

export default Footer;