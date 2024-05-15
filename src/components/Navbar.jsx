import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100 shadow-lg rounded-lg my-5">
      <div className="navbar-start">
        <div className="dropdown z-50     ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to='/allJobs'>All Jobs</Link>
            </li>
           {
            user && (
             <div>
              <li>
              <Link to='/appliedJobs'>Applied Jobs</Link>
            </li>
              <li>
              <Link to='/addAJob'>Add Job</Link>
            </li>
            <li>
              <Link to='/myJobs'>My Jobs</Link>
            </li>
          
             </div>
            
            )
           }
               <li>
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl pl-0 ">
          <img className=" h-14 sm:h-14 w-[120px] sm:w-[200px]" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
              <Link to='/allJobs'>All Jobs</Link>
            </li>
           {
            user && (
             <div className="flex flex-row">
              <li>
              <Link to='/appliedJobs'>Applied Jobs</Link>
            </li>
              <li>
              <Link to='/addAJob'>Add Job</Link>
            </li>
            <li>
              <Link to='/myJobs'>My Jobs</Link>
            </li>
          
             </div>
            
            )
           }
               <li>
              <Link to='/blog'>Blog</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <Link to="signin">
            <button className="btn btn-sm btn-accent">Sign in</button>
          </Link>
        )}


        {user && (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div title={user?.displayName} className="w-10 rounded-full">
              
                <img referrerPolicy="no-referrer" alt="image of user" src={user?.photoURL} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={logOut}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
