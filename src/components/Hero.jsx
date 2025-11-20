import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Gradient/Image Fallback */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-medium">#1 Rated Airbnb Cleaning in GTA</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                        Airbnb Turnover <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">Cleaning Made Easy.</span>
                    </h1>

                    <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Fast, reliable, guest-ready cleaning with full photo inspection.
                        We help you get 5-star reviews every time.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#booking"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/40"
                        >
                            Book a Turnover
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="#pricing"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                        >
                            View Pricing
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
