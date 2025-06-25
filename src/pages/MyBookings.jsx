import React, { useState, useEffect } from 'react';
import { getFavorites, removeFavorite } from '../utils';
import EmptyState from './EmptyState';
import BookingCard from './BookingCard';
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
//import { useNavigation } from 'react-router';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const MyBookings = () => {

    const [displayDoctors, setDisplayDoctors] = useState([]);

    useEffect(() => {
        const savedDoctors = getFavorites();
        setDisplayDoctors(savedDoctors);
    }, [])

    const notifyRemove = () => toast.warning('Your Appointment Booking has been removed!');

    const handleDelete = (id) => {
        const current = getFavorites();
        if(current.length === 1){
            notifyRemove();
            setTimeout(() => {
                removeFavorite(id);
                setDisplayDoctors(getFavorites()); 
            }, 800);
        }else{
            removeFavorite(id);
            setDisplayDoctors(getFavorites());
            notifyRemove();
        }

    }

    if (displayDoctors.length < 1) {
        return <EmptyState></EmptyState>
    }

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <div>
                <ResponsiveContainer width="100%" height={500}>
                    <BarChart
                        data={displayDoctors}
                        margin={{
                            top: 40,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {displayDoctors.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className='text-center py-20'>
                <h1 className='text-center font-bold text-4xl mb-3'>My Today Appointments</h1>
                <p className='text-gray-400'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            </div>

            {
                displayDoctors.map((doctor) => <BookingCard key={doctor.id} doctor={doctor} handleDelete={handleDelete}></BookingCard>)
            }

            <ToastContainer />
        </div>
    );
};

export default MyBookings;