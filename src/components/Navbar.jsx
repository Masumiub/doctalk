import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/cardiogram.png'
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>Home</NavLink></li>
                            <li><NavLink to='/mybookings' className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>My Bookings</NavLink></li>
                            <li><NavLink to='/blogs' className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>Blogs</NavLink></li>
                            <li><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-500" : "text-black"}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <img src={logo} alt="logo" className='w-8 mr-1' />
                    <NavLink to='/' className="text-xl font-bold">doctalk</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Home</NavLink></li>
                        <li><NavLink to='/mybookings' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>My Bookings</NavLink></li>
                        <li><NavLink to='/blogs' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Blogs</NavLink></li>
                        <li><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-error rounded-full text-white">Emergency</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;