import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
    <NavLink className="px-6 py-2" to="/">Home</NavLink>
    <NavLink className="px-6 py-2" to="/aboutMe">About Me</NavLink>
    <NavLink className="px-6 py-2" to="/skills">Skills</NavLink>
    <NavLink className="px-6 py-2" to="/projects">Projects</NavLink>
    <NavLink className="px-6 py-2" to="/education">Education</NavLink>
    <NavLink className="px-6 py-2" to="/contact">Contact</NavLink>
</>
    return (
        <div className="navbar mx-auto sticky top-0 z-50 backdrop-blur-md shadow-md ">
        <div className="navbar-start">
        
                    {/* dropdown menu*/}
                <div className="dropdown mr-3 bg-[#d7f480]">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>

                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content text-[#d7f480] rounded-box z-[1] mt-3 w-44 px-2 py-5 shadow font-bold">
                    {menu}
                </ul>
            </div>
            {/* dropdown end */}


            {/* <Link to="/">
                <img
                    className='w-20 rounded-full shadow-lg'
                    src="https://i.ibb.co.com/fCWjPYw/logo-removebg-preview-hm-Podo-XMT-transformed.png"
                    alt="portfolio-logo" />
            </Link> */}
        </div>

        <div className="navbar-center hidden lg:flex p-2 rounded-full font-semibold text-[#D1F26D]">
                <ul className="menu menu-horizontal px-1">
                    {menu}

                </ul>
            </div>

    </div>
    );
};

export default Navbar;