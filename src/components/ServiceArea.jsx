import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
    'Toronto', 'North York', 'Scarborough', 'Mississauga',
    'Etobicoke', 'Vaughan', 'Markham', 'Brampton'
];

const ServiceArea = () => {
    return (
        <section className="py-16 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-8">Serving the Greater Toronto Area</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {areas.map((area, index) => (
                        <div key={index} className="flex items-center gap-2 text-lg text-gray-300">
                            <MapPin className="h-5 w-5 text-primary-400" />
                            <span>{area}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceArea;
