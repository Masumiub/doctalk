import React, { useEffect, useState } from 'react';
import DoctorCard from './DoctorCard';

const DoctorsContainer = ({ data }) => {

    const [displayDoctors, setDisplayDoctors] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(()=>{
        if(showAll){
            setDisplayDoctors(data);
        }
        else{
            setDisplayDoctors(data.slice(0,6))
        }
    }, [data, showAll])

    return (
        <div>
            <div className='text-center py-30'>
                <h1 className='font-bold text-4xl'>Our Best Doctors</h1>
                <p className='text-gray-400 mt-4'>Clinical excellence must be the priority for any health care service provider. Doctalk ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8'>
                {
                        displayDoctors.map((doctor)=> <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>)
                }
            </div>

            <div className='text-center'>

            <button className='btn btn-primary btn-lg rounded-full' onClick={() => {
                    setShowAll(prv => !prv)
                    if(showAll){
                        window.scrollTo(0,0);
                    }
                }}>{showAll ? 'Show Less' : 'Show All Doctors'}</button>
            </div>

        </div>
    );
};

export default DoctorsContainer;