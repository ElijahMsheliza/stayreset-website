import React from 'react';

const TermsOfService = () => {
    return (
        <div className="bg-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
                <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-lg text-gray-600">
                    <p className="mb-6">
                        Welcome to StayReset Cleaning Co. By booking our services, you agree to the following terms and conditions.
                        Please read them carefully.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Service Agreement</h2>
                    <p className="mb-6">
                        StayReset Cleaning Co. agrees to provide professional cleaning and inspection services for short-term rental properties
                        as described in your booking. We aim to meet hotel-quality standards, but specific results may vary based on the
                        condition of the property.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Host Responsibilities</h2>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Access:</strong> You must provide clear access instructions (key, lockbox code, or smart lock) prior to the scheduled time.</li>
                        <li><strong>Utilities:</strong> Electricity and water must be available and functioning.</li>
                        <li><strong>Safety:</strong> The property must be free of hazards (e.g., loose wires, structural damage, pests).</li>
                        <li><strong>Supplies:</strong> If you opt for us to use your supplies, they must be accessible and sufficient.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Cancellation Policy</h2>
                    <p className="mb-6">
                        We require a minimum of <strong>24 hours' notice</strong> for cancellations or rescheduling.
                        Cancellations made less than 24 hours before the scheduled start time will incur a cancellation fee equal to
                        50% of the service cost. Same-day cancellations or "lockouts" (cleaner cannot access property) will be charged 100%.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
                    <p className="mb-6">
                        Payment is due upon completion of the service unless a recurring billing agreement is in place.
                        We accept major credit cards and bank transfers. Late payments may be subject to interest charges.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Liability Limitations</h2>
                    <p className="mb-6">
                        While we take utmost care, StayReset Cleaning Co. is not liable for:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Normal wear and tear of the property.</li>
                        <li>Damage resulting from faulty fixtures or improper installation of items.</li>
                        <li>Loss of items not secured or stored properly.</li>
                        <li>Our liability is limited to the cost of the service provided.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Damage Reporting</h2>
                    <p className="mb-6">
                        Our cleaners will document any pre-existing damage or damage found during the turnover via our photo inspection report.
                        We are not responsible for damage caused by guests. If a cleaner accidentally causes damage, it must be reported
                        to us within 24 hours of the service.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Worker Safety</h2>
                    <p className="mb-6">
                        Our cleaners have the right to refuse service and leave the premises if they feel unsafe due to:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Harassment or inappropriate behavior.</li>
                        <li>Presence of hazardous materials (mold, blood, needles, etc.).</li>
                        <li>Uncontrolled pets.</li>
                    </ul>
                    <p className="mb-6">In such cases, the full service fee will apply.</p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Photo Documentation</h2>
                    <p className="mb-6">
                        We take 25-40 photos of the property before and after cleaning for quality assurance and liability protection.
                        These photos are stored securely and shared with you. We reserve the right to use anonymized "after" photos
                        for marketing purposes unless you explicitly opt out.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
