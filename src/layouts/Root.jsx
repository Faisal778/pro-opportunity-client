import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            {/* Navbar */}
              <Navbar />

            {/* Outlet */}
            <Outlet></Outlet>

            {/* Footer */}
        </div>
    );
};

export default Root;