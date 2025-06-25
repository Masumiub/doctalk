import React from 'react';
import { NavLink } from 'react-router';

const EmptyState = () => {
    return (
        <div>
            <div className='text-center py-10'>
                <div className='flex items-center justify-center'>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/appointment-scheduling-illustration-download-in-svg-png-gif-file-formats--analytics-logo-schedule-calendar-event-planning-business-agenda-management-pack-illustrations-3723334.png" alt="img" className='w-90' />
                </div>
                <h1 className='text-3xl md:text-6xl mb-2'>You haven't booked any Appointment</h1>
                <p className='mt-8 text-gray-400'>We are committed to serve for human kind. At doctalk, we do things passionately to help people live healthier and happier. We understand that our responsibilities are more towards our communities as they believe this is the place to rely on and trust.</p>
                <NavLink to='/'><button className='btn btn-primary rounded-full mt-8'>View Doctors</button></NavLink>  
            </div>

            
        </div>
    );
};

export default EmptyState;