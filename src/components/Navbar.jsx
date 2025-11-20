import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                            <Sparkles className="h-6 w-6 text-primary-600" />
                            <span>StayReset<span className="text-primary-600">.</span></span>
                        </a>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-600 hover:text-primary-600 font-medium transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <a href="#booking" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-primary-500/30">
                            Book Now
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary-600 focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
                    <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            className="block w-full text-center mt-4 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700"
                            onClick={() => setIsOpen(false)}
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
