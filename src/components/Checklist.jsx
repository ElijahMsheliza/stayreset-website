import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const checklistItems = [
    'Kitchen deep clean & sanitization',
    'Bathroom scrubbing & polishing',
    'Bed making with hospital corners',
    'Fresh towels & toiletries staging',
    'Floors vacuumed & mopped',
    'Amenities topped up (coffee, etc.)',
    'High-touch surfaces disinfected',
    'Final staging & photo inspection'
];

const Checklist = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative">
                        {/* Abstract representation of a checklist/clipboard */}
                        <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 max-w-md mx-auto lg:mx-0 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <div className="absolute top-0 left-0 w-full h-2 bg-primary-500"></div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Cleaner's Checklist</h3>
                            <div className="space-y-4">
                                {checklistItems.map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 pt-6 border-t flex justify-between items-center">
                                <div className="text-sm text-gray-500">Status</div>
                                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">PASSED</div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">We Don't Miss a Spot</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Our cleaners follow a rigorous 50-point checklist for every turnover. We don't just clean; we inspect, stage, and verify.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            Every clean concludes with a photo report sent directly to you, so you can see exactly what your guests will see.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl min-w-[100px]">
                                <span className="text-3xl font-bold text-primary-600">50+</span>
                                <span className="text-sm text-gray-500">Points Checked</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl min-w-[100px]">
                                <span className="text-3xl font-bold text-primary-600">100%</span>
                                <span className="text-sm text-gray-500">Satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checklist;
