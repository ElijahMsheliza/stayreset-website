import React from 'react';

const RefundPolicy = () => {
    return (
        <div className="bg-white py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund & Cancellation Policy</h1>
                <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-lg text-gray-600">
                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cancellation Policy</h2>
                    <p className="mb-4">
                        We understand that plans change. To ensure fair scheduling for our staff and other clients, we adhere to the following policy:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>24+ Hours Notice:</strong> No fee. You may cancel or reschedule for free.</li>
                        <li><strong>Less than 24 Hours Notice:</strong> 50% of the total service fee will be charged.</li>
                        <li><strong>Same-Day / Lockout:</strong> 100% of the service fee will be charged if we arrive and cannot enter, or if cancelled within 2 hours of the start time.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Refund Policy</h2>
                    <p className="mb-4">
                        We stand by the quality of our work. If you are not satisfied with the cleaning:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Report within 24 Hours:</strong> You must notify us within 24 hours of the service completion with specific details/photos of the issue.</li>
                        <li><strong>Re-Clean Guarantee:</strong> We will return to re-clean the missed areas at no additional cost to you.</li>
                        <li><strong>No Cash Refunds:</strong> We do not offer cash refunds once the service has been performed, but we are committed to fixing any issues to your satisfaction.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Weather & Unforeseen Circumstances</h2>
                    <p className="mb-6">
                        In the event of severe weather or unsafe road conditions, we reserve the right to reschedule the service without penalty
                        to ensure the safety of our team.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RefundPolicy;
