import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-lg text-gray-600">
                    <p className="mb-6">
                        At StayReset Cleaning Co. ("we," "our," or "us"), we are committed to protecting your privacy and personal information.
                        This Privacy Policy explains how we collect, use, and safeguard your data in compliance with Canadian privacy laws,
                        including the Personal Information Protection and Electronic Documents Act (PIPEDA).
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
                    <p className="mb-4">We collect the following personal information when you book our services or contact us:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Contact Information:</strong> Name, email address, and phone number.</li>
                        <li><strong>Property Details:</strong> Address, access codes (stored securely), and property size/specifications.</li>
                        <li><strong>Payment Information:</strong> Processed securely through our third-party payment processors (we do not store full credit card numbers).</li>
                        <li><strong>Communications:</strong> Records of your correspondence with us via email, phone, or WhatsApp.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                    <p className="mb-4">We use your data for the following purposes:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>To provide and schedule cleaning and inspection services.</li>
                        <li>To communicate with you regarding your bookings, including confirmation and status updates.</li>
                        <li>To send photo inspection reports after each turnover.</li>
                        <li>To process payments and issue invoices.</li>
                        <li>To improve our services and customer experience.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. WhatsApp Communication Opt-In</h2>
                    <p className="mb-6">
                        By providing your phone number and requesting to chat via WhatsApp, you consent to receive operational messages,
                        booking confirmations, and inspection reports via WhatsApp. You may opt-out of these communications at any time
                        by replying "STOP" or contacting us directly.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Data Protection Measures</h2>
                    <p className="mb-6">
                        We implement industry-standard security measures to protect your information. Access codes are encrypted and
                        only shared with assigned cleaners for the duration of the job. Digital records are stored on secure,
                        password-protected servers.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies</h2>
                    <p className="mb-6">
                        Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control
                        cookie preferences through your browser settings. For more details, please refer to our Cookie Policy.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
                    <p className="mb-4">Under Canadian privacy law, you have the right to:</p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Access the personal information we hold about you.</li>
                        <li>Request corrections to inaccurate data.</li>
                        <li>Withdraw your consent for data collection (subject to legal/contractual restrictions).</li>
                        <li>File a complaint with the Privacy Commissioner of Canada if you believe your rights have been violated.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
                    <p className="mb-6">
                        If you have any questions about this Privacy Policy, please contact us at:<br />
                        <strong>Email:</strong> privacy@stayreset.com<br />
                        <strong>Phone:</strong> (555) 123-4567
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
