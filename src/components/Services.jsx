import React from 'react';
import { Sparkles, Camera, ShoppingBag, Shirt, Droplets } from 'lucide-react';

const services = [
    {
        icon: Sparkles,
        title: 'Turnover Cleaning',
        description: 'Full reset between guests: kitchen, bath, bedrooms, staging, linens. We ensure every corner is spotless.'
    },
    {
        icon: Camera,
        title: 'Photo Inspection Report',
        description: '25-40 photos after each clean to verify everything is perfect. Sent directly to your phone.'
    },
    {
        icon: ShoppingBag,
        title: 'Restocking',
        description: 'We replenish toiletries, supplies, coffee, and other consumables (provided by host) so you never run out.'
    },
    {
        icon: Shirt,
        title: 'Laundry Add-On',
        description: 'We can handle laundry on-site or coordinate pickup/drop-off services for your linens.'
    },
    {
        icon: Droplets,
        title: 'Deep Cleaning',
        description: 'Recommended quarterly. A deeper dive into baseboards, inside cabinets, and appliances.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Cleaning Services</h2>
                        <p className="text-xl text-gray-600 mb-10">
                            We go beyond basic cleaning. We offer a full suite of turnover services designed to automate your hosting business.
                        </p>

                        <div className="space-y-8">
                            {services.map((service, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100">
                                            <service.icon className="h-6 w-6 text-primary-600" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
                            alt="Cleaning service"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                            <div className="text-white">
                                <p className="font-bold text-2xl mb-2">"The best cleaning team we've hired."</p>
                                <p className="opacity-90">— Sarah, Superhost in Toronto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
