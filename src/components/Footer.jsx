import React from 'react';
import { Instagram, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-2xl font-bold mb-6">
                            <Sparkles className="h-6 w-6 text-primary-400" />
                            <span>StayReset<span className="text-primary-400">.</span></span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Premium Airbnb turnover cleaning and inspection services in the GTA. We make your hosting effortless.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <li><a href="/#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="/#why-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
                            <li><a href="/#booking" className="text-gray-400 hover:text-white transition-colors">Book Now</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Legal</h3>
                        <ul className="space-y-4">
                            <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link></li>
                            <li><Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <Phone className="h-5 w-5 text-primary-400 shrink-0" />
                                <span>(437) 778-3384</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Mail className="h-5 w-5 text-primary-400 shrink-0" />
                                <span>hello@stayreset.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="h-5 w-5 text-primary-400 shrink-0" />
                                <span>Serving Toronto & GTA</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} StayReset Cleaning Co. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

