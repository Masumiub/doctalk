import React from 'react';
import Hero from '../components/Hero';
import DoctorsContainer from '../components/DoctorsContainer';
import { useLoaderData } from 'react-router';
import ServicesSection from './ServicesSection';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <Hero></Hero>
            <DoctorsContainer data={data}></DoctorsContainer>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default Home;