import React from 'react';
import { Star, Camera, Clock, RefreshCw, AlertCircle, CalendarCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: Star,
        title: 'Hotel-Level Quality',
        description: 'Our cleaners are trained to hotel standards to ensure your guests are wowed every time.'
    },
    {
        icon: Camera,
        title: 'Photo Inspection',
        description: 'We provide 25-40 photos after each clean so you can verify the condition remotely.'
    },
    {
        icon: Clock,
        title: 'Same-Day Turnovers',
        description: 'Tight window? No problem. We specialize in fast, efficient same-day resets.'
    },
    {
        icon: RefreshCw,
        title: 'Linen & Restocking',
        description: 'We handle linen changes and restock all essentials like toiletries and coffee.'
    },
    {
        icon: AlertCircle,
        title: 'Damage Reporting',
        description: 'We spot and report damages immediately so you can claim insurance if needed.'
    },
    {
        icon: CalendarCheck,
        title: 'Reliable Scheduling',
        description: 'Automated scheduling and consistent cleaners you can count on, 7 days a week.'
    }
];

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Hosts Trust Us</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We understand the unique needs of short-term rentals. We don't just clean; we prepare your space for guests.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100 group"
                        >
                            <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                                <feature.icon className="h-7 w-7 text-primary-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
