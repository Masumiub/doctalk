import React from 'react';

const BookingCard = ({doctor, handleDelete}) => {
    const {id} = doctor;
    
    return (
        <div className='bg-base-200 p-10 rounded-2xl mb-5'>
            <h1 className='font-bold text-2xl'>{doctor.name}</h1>
            <div className='flex items-center justify-between py-3'>
            <p>{doctor.education} {doctor.designation} </p>
            <p>Appointment Fee : ${doctor.fee} + VAT</p>

            </div>
            <hr className='border-dashed border-1 border-gray-200 mb-3' />
            <button onClick={()=>handleDelete(id)} className='btn btn-error btn-outline w-full rounded-full'>Cancel Appointment</button>
        </div>
    );
};

export default BookingCard;