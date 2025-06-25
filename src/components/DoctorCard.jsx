import React from 'react';
import { Link } from 'react-router';
import { FaRegCheckCircle } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {

    const { id, image, name, education, speciality, registration_number, available, experience } = doctor;
    return (
        <div>
            <div className="card bg-base-200 shadow-sm">
                <figure>
                    <img
                        src={image} className='h-55 rounded-full bg-white mt-4'
                        alt="img" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-3'>
                        {(available) ? <button className="btn btn-sm btn-soft btn-success rounded-full border-1 border-green-500">Available</button> : <button className="btn btn-sm btn-soft btn-warning rounded-full border-1 border-amber-500">Not Available</button>}
                        <button className='btn btn-sm btn-soft btn-primary rounded-full border-1 border-blue-600'>{experience} experiences</button>
                    </div>

                    <h2 className="card-title">{name}</h2>
                    <p className='text-gray-500'>{education} {speciality}</p>
                    <hr className='border-dashed border-1 border-gray-200 my-1' />
                    <div className='flex items-center gap-2'>
                    <FaRegCheckCircle />
                    <p className='text-gray-500'>  Reg. No: {registration_number}</p>
                    </div>
                    <hr className='border-dashed border-1 border-gray-200 my-1' />
                    <div className="w-full">
                        <Link to={`/doctordetails/${registration_number}`}>
                        <button className="btn btn-primary btn-outline w-full rounded-full">View Details</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorCard;