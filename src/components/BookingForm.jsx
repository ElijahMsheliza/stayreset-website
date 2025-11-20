import React, { useState } from 'react';
import { MessageSquare, Loader2, CheckCircle } from 'lucide-react';

const BookingForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("");

        const formData = new FormData(event.target);
        // ADD YOUR WEB3FORMS ACCESS KEY HERE
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                setResult("Booking request sent! We'll be in touch shortly.");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.log("Error", error);
            setResult("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="booking" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Automate Your Cleaning?</h2>
                    <p className="text-xl text-gray-600">
                        Fill out the form below to book a clean or request onboarding. We'll get back to you within 1 hour.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                    {isSuccess ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="h-10 w-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                            <p className="text-gray-600 mb-8">
                                Thank you for contacting StayReset. We have received your details and will contact you shortly to confirm your booking.
                            </p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="bg-primary-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-primary-700 transition-all"
                            >
                                Send Another Request
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="space-y-6">
                            {/* Hidden Subject Field for Email */}
                            <input type="hidden" name="subject" value="New Booking Request from StayReset Website" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="(437) 778-3384" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Size</label>
                                    <select name="property_size" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white">
                                        <option>Studio</option>
                                        <option>1 Bedroom</option>
                                        <option>2 Bedroom</option>
                                        <option>3 Bedroom</option>
                                        <option>4+ Bedroom</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Property Address (or Area)</label>
                                <input type="text" name="address" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="e.g. 123 Main St, Toronto" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Next Turnover Date</label>
                                    <input type="date" name="date" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                                    <select name="service_type" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white">
                                        <option>One-time Clean</option>
                                        <option>Recurring / Onboarding</option>
                                        <option>Deep Clean</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Notes / Special Instructions</label>
                                <textarea name="message" rows="3" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all" placeholder="Any specific details we should know?"></textarea>
                            </div>

                            {result && !isSuccess && (
                                <div className="text-red-500 text-sm text-center font-medium">
                                    {result}
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row gap-4 pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="flex-1 bg-primary-600 text-white font-bold py-4 rounded-xl hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Book a Cleaning"
                                    )}
                                </button>
                            </div>
                        </form>
                    )}

                    <div className="mt-8 text-center">
                        <a href="https://wa.me/14377783384" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors">
                            <MessageSquare className="h-5 w-5" />
                            Chat with us on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
