import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const MainLayout = () => {
    const navigation = useNavigation();


    return (
        <div className='w-full md:w-10/12 mx-auto'>
            <Navbar></Navbar>
            {navigation.state === 'loading' && (
                <div className="text-center flex justify-center items-center mt-40">
                    <span className="loading loading-spinner text-primary loading-xl"></span>
                </div>
            )}
            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;