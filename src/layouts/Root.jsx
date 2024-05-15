import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';


const Root = () => {
    return (
        <div className='w-[90%] mx-auto'>
            {/* Navbar */}
              <Navbar />

            {/* Outlet */}
            <div className='min-h-[calc(100vh-432px)]'>
            <Outlet></Outlet>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default Root;