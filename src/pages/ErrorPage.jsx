import React from 'react';
import { NavLink } from 'react-router';
import Navbar from '../components/Navbar';
import pic from '../assets/astronaut.jpg'

const ErrorPage = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto'>
            <Navbar></Navbar>
            <div className='text-center py-20'>
                <div className='flex items-center justify-center'>
                <img src={pic} alt="pic" className='w-80'/>
                </div>

            <h1 className='text-3xl md:text-6xl mb-2'>404! Page not found!</h1>
            <p className='my-5 text-gray-400'>Oops! The page you're looking for doesn't exist. <br />
            It might have been moved, deleted, or you might have typed the wrong URL.</p>
            <NavLink to='/'><button className='btn btn-primary rounded-full'>View Doctors</button></NavLink>  
            </div>

        </div>
    );
};

export default ErrorPage;