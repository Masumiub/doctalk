import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/cardiogram.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center text-base-content p-10 mt-30 border-t-1 border-base-300 bg-base-200 rounded-t-2xl">
                <div className='flex'>
                    <img src={logo} alt="logo" className='w-8' />
                    <NavLink to='/' className="text-xl font-bold">doctalk</NavLink>
                </div>

                <nav className="grid grid-flow-col gap-4">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Home</NavLink></li>
                        <li><NavLink to='/mybookings' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>My Bookings</NavLink></li>
                        <li><NavLink to='/blogs' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Blogs</NavLink></li>
                        <li><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-500 font-bold" : "text-black"}>Contact</NavLink></li>
                    </ul>

                </nav>


                <nav>
                    <div className="grid grid-flow-col gap-4 ">
                        <a href='https://www.facebook.com/' target='_blank'>
                        <FaFacebookF size={20}/>
                        </a>
                        <a href='www.linkedin.com/in/masummusfique' target='_blank'>
                        <FaLinkedinIn size={20}/>
                        </a>
                        <a href='https://github.com/Masumiub' target='_blank'>
                        <FaGithub size={20}/>
                        </a>
                        <a href='https://x.com/' target='_blank'>
                        <FaXTwitter size={20}/>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p className='text-sm text-gray-500'>Copyright © {new Date().getFullYear()} - All right reserved by doctalk Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;