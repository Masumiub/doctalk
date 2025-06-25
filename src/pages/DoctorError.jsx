import React from 'react';
import { NavLink, useParams } from 'react-router';
import Navbar from '../components/Navbar';


const DoctorError = () => {
    const {id} = useParams();

    return (
        <div>
            <div className='w-full md:w-10/12 mx-auto'>
                <div className='text-center py-20'>
                    <div className='flex items-center justify-center'>
                        <img src="https://www.pngmart.com/files/21/Female-Doctor-PNG-Clipart.png" alt="doc" className='w-55'/>
                    </div>

                    <h1 className='text-6xl mb-2'>Ahh! Doctor not found!</h1>
                    <p className='mb-3'>There is no doctor with Registration number: {id}</p>
                    <NavLink to='/'><button className='btn btn-primary rounded-full'>View Doctors</button></NavLink>
                </div>

            </div>
        </div>
    );
};

export default DoctorError;