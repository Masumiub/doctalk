import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addFavorite } from '../utils';
import { ToastContainer } from 'react-toastify';
import { FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router";

const DoctorDetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isLoading, setIsLoading] = useState(false);

    const data = useLoaderData();

    const { id } = useParams();

    const singleDoctor = data.find(doctor => doctor.registration_number === (id));

    const { image, name, education, speciality, designation, registration_number, workplace, fee, availability_section, available } = singleDoctor;


    let navigate = useNavigate();

    const handleFavorite = () => {
        //setIsLoading(true);
        const added = addFavorite(singleDoctor, navigate);
        if (added) {
            setTimeout(() => {
                setIsLoading(true);
            }, 600)
        }

    }

    if (isLoading) {
        return (
            <div className="text-center my-20">
                <p className="text-center my-20"><span className="loading loading-spinner text-primary"></span></p>
            </div>
        );
    }
    return (
        <div>
            <div className='bg-base-200 rounded-2xl py-20 text-center mt-8'>
                <div className='w-8/12 mx-auto'>
                    <h1 className='font-bold text-4xl mb-3'>Doctor’s Profile Details</h1>
                    <p>"Your Health, Our Priority. Compassionate Care For Every Patient. Care you can count on, every time."</p>
                </div>

            </div>

            <div className='flex flex-col md:flex-row gap-4 items-center justify-between bg-base-200 mt-8 rounded-2xl py-10 px-10' >
                <div className='w-4/12 flex items-center justify-center'>
                    <img src={image} alt="img" className='rounded-2xl bg-white' />
                </div>
                <div className='w-8/12'>
                    <h1 className="font-bold text-2xl">{name}</h1>
                    <p>{education} {designation}</p>
                    <p>{speciality}</p>
                    <p className='mt-8'>Working at:</p>
                    <p className='font-bold mb-4'>{workplace}</p>
                    <hr className='border-dashed border-1 border-gray-200 my-1' />
                    <div className='flex items-center gap-2'>
                        <FaRegCheckCircle />
                        <p className='my-3'> BMDC Reg. No: {registration_number}</p>
                    </div>
                    <hr className='border-dashed border-1 border-gray-200 my-1' />

                    <div className='flex items-center gap-3 mt-5'>
                        <p className='font-bold'>Availability:</p>
                        <div className='flex-wrap'>
                            {
                                availability_section.map((day, index) => <button className='mr-1 btn btn-sm btn-soft btn-success rounded-full border-1 border-green-500' key={index}>{day}</button>)
                            }
                        </div>
                    </div>

                    <p className='mt-5'> <span className='font-bold'>Consulation Fee:</span>  <span className='font-bold text-blue-600'> ${fee}</span>  (incl. Vat) <span className=' text-blue-600'>Per consultation</span></p>
                </div>
            </div>

            <div className='bg-base-200 rounded-2xl py-20 mt-8 px-10' >
                <div className=' mx-auto'>

                    <h1 className='font-bold text-4xl mb-8 text-center' >Book an Appointment</h1>
                    <hr className='border-dashed border-1 border-gray-200 my-1' />
                    <div className='flex justify-between items-center'>
                        <h3 className='font-bold my-3'>Availability</h3>
                        {(available) ? <button className="btn btn-sm btn-soft btn-success rounded-full border-1 border-green-500">Doctor is Available</button> : <button className="btn btn-sm btn-soft btn-warning rounded-full">Not Available</button>}
                    </div>

                    <hr className='border-dashed border-1 border-gray-200 my-1' />
                    <div className='my-4 text-left font-light rounded-full border-1 border-amber-500 py-2 px-2 bg-amber-50'> <p className='text-xs text-yellow-500'>⚠️ Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p> </div>
                    <button className='w-full btn btn-primary rounded-full' onClick={handleFavorite}>Book Appointment</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default DoctorDetails;