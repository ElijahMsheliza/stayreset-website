import React from 'react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Checklist from '../components/Checklist';
import Testimonials from '../components/Testimonials';
import ServiceArea from '../components/ServiceArea';
import BookingForm from '../components/BookingForm';

const Home = () => {
    return (
        <>
            <Hero />
            <WhyChooseUs />
            <Services />
            <Pricing />
            <Checklist />
            <Testimonials />
            <ServiceArea />
            <BookingForm />
        </>
    );
};

export default Home;
