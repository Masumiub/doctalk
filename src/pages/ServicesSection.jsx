import React from 'react';
import CountUp from 'react-countup';
import docimg from '../assets/doctors.png';
import list from '../assets/list.png';
import stars from '../assets/stars.png'
import group from '../assets/group.png';

const ServicesSection = () => {
    return (
        <div className='py-20'>

            <div className='text-center py-5'>
                <h1 className='font-bold text-4xl'>We Provide Best Medical Services</h1>
                <p className='mt-3 text-gray-400'>We aim to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK & quality hospitals in the Middle East.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10'>
                <div className='rounded-2xl bg-base-200 px-8 py-12'>
                    <img src={list} alt="icon" className='w-10' />
                   <h1 className='font-bold text-5xl'> <CountUp end={1000} />+ </h1> 
                   <p>Total Doctors</p>
                </div>

                <div className='rounded-2xl bg-base-200 px-8 py-12'>
                    <img src={stars} alt="icon" className='w-10'/>
                   <h1 className='font-bold text-5xl'> <CountUp end={467} />+ </h1> 
                   <p>Total Reviews</p>
                </div>

                <div className='rounded-2xl bg-base-200 px-8 py-12'>
                <img src={group} alt="icon" className='w-10'/>
                   <h1 className='font-bold text-5xl'> <CountUp end={1900} />+ </h1> 
                   <p>Patients</p>
                </div>

                <div className='rounded-2xl bg-base-200 px-8 py-12'>
                <img src={docimg} alt="icon" className='w-10'/>
                   <h1 className='font-bold text-5xl'> <CountUp end={300} /> </h1> 
                   <p>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;