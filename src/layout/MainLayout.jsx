import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
        <div className='bg-[#3B4D3A]'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;