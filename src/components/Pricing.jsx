import React from 'react';
import { Check } from 'lucide-react';

const pricing = [
    { type: 'Studio', price: '$75' },
    { type: '1 Bedroom', price: '$90' },
    { type: '2 Bedroom', price: '$110' },
    { type: '3 Bedroom', price: '$140' },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Flat rates based on property size. No hidden fees.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-10 bg-primary-600 text-white flex flex-col justify-center">
                            <h3 className="text-3xl font-bold mb-6">What's Included?</h3>
                            <ul className="space-y-4">
                                {[
                                    'Full turnover cleaning',
                                    'Hotel-style staging',
                                    'Linen changing & laundry coordination',
                                    'Restocking amenities',
                                    'Damage inspection',
                                    '25-40 photo report',
                                    'Same-day turnaround'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                            <Check className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-10">
                            <div className="space-y-6">
                                {pricing.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all">
                                        <span className="text-xl font-bold text-gray-900">{item.type}</span>
                                        <span className="text-2xl font-bold text-primary-600">{item.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 text-center">
                                <p className="text-gray-500 text-sm mb-6">
                                    *Prices may vary based on square footage and specific requirements.
                                </p>
                                <a
                                    href="#booking"
                                    className="block w-full py-4 rounded-xl bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
                                >
                                    Get a Custom Quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
