import { ToastContainer, toast } from 'react-toastify';

export const getFavorites =()=>{
    const favs = localStorage.getItem('favs');
    if(favs) return JSON.parse(favs);
    return [];
}

const notify = (doctorname) => toast.success(`Your Appointment Booking with ${doctorname} has been successful!`);

const notifybooked = () => toast.error('Your Appointment has already booked!');

//const notifyRemove = () => toast.warning('Your Appointment Booking has been removed!');

export const addFavorite = (doctor, navigate)=>{

    const favs = getFavorites();
    const isExist = favs.find(p=>p.id===doctor.id)
    if(!isExist){
        favs.push(doctor);
        localStorage.setItem('favs', JSON.stringify(favs))
        const doctorname = doctor.name;
        notify(doctorname);
        setTimeout(()=>{
            navigate('/mybookings');
        }, 1000);
        return true;
    }
    else{
        notifybooked();
        //console.log('Doctor already added!')
        return false;
    }

}

export const removeFavorite = id =>{
    const favs = getFavorites();
    const remainingFav = favs.filter(doctor=>doctor.id!==id);
    localStorage.setItem('favs', JSON.stringify(remainingFav))
    //notifyRemove();
}