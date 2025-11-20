import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "James D.",
        role: "Superhost • Downtown Toronto",
        text: "StayReset has been a game changer. The photo reports give me total peace of mind, and my guests always mention how clean the place is."
    },
    {
        name: "Elena M.",
        role: "Property Manager • Mississauga",
        text: "Reliability is everything in this business. They haven't missed a single turnover in 6 months. Highly recommended."
    },
    {
        name: "Michael T.",
        role: "Airbnb Host • North York",
        text: "The attention to detail is unmatched. They stage the towels and pillows perfectly every time. Worth every penny."
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Loved by Hosts</h2>
                    <p className="text-xl text-gray-600">Don't just take our word for it.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
                            </div>
                            <p className="text-gray-700 mb-6 italic">"{t.text}"</p>
                            <div>
                                <p className="font-bold text-gray-900">{t.name}</p>
                                <p className="text-sm text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
