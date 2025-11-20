import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="bg-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
                <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-lg text-gray-600">
                    <p className="mb-6">
                        StayReset Cleaning Co. uses cookies and similar technologies to improve your experience on our website.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What are Cookies?</h2>
                    <p className="mb-6">
                        Cookies are small text files that are stored on your device when you visit a website. They help us remember your
                        preferences and understand how you use our site.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of Cookies We Use</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Essential Cookies:</strong> Necessary for the website to function (e.g., secure login, booking form functionality).</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand visitor traffic and behavior (e.g., Google Analytics). These are anonymized.</li>
                        <li><strong>Functional Cookies:</strong> Remember your choices (like language or region) to provide a better experience.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Managing Cookies</h2>
                    <p className="mb-6">
                        You can choose to disable cookies through your browser settings. However, please note that some parts of our
                        website (such as the booking form) may not function correctly if cookies are disabled.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
                    <p className="mb-6">
                        We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
