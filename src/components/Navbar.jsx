import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to='/allJobs'>All Jobs</NavLink>
            </li>
           {
            user && (
             <div>
              <li>
              <NavLink to='/appliedJobs'>Applied Jobs</NavLink>
            </li>
              <li>
              <NavLink to='/addAJob'>Add Job</NavLink>
            </li>
            <li>
              <NavLink to='/myJobs'>My Jobs</NavLink>
            </li>
          
             </div>
            
            )
           }
               <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl pl-0 ">
          <img className=" h-14 sm:h-14 w-[120px] sm:w-[200px]" src={logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
              <NavLink to='/allJobs'>All Jobs</NavLink>
            </li>
           {
            user && (
             <div className="flex flex-row">
              <li>
              <NavLink to='/appliedJobs'>Applied Jobs</NavLink>
            </li>
              <li>
              <NavLink to='/addJob'>Add Job</NavLink>
            </li>
            <li>
              <NavLink to='/myJobs'>My Jobs</NavLink>
            </li>
          
             </div>
            
            )
           }
               <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <NavLink to="signin">
            <button className="btn btn-sm btn-accent">Sign in</button>
          </NavLink>
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
