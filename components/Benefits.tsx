
import React from 'react';

const benefits = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Air Purifier",
        description: "Removes toxins like formaldehyde and benzene from the air, promoting a healthier environment."
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
        ),
        title: "Low Light Tolerant",
        description: "Thrives in various light conditions, from bright indirect light to low-light corners of your home."
    },
    {
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
             </svg>
        ),
        title: "Drought Resistant",
        description: "Requires infrequent watering, making it the perfect plant for busy people or beginners."
    },
    {
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
             </svg>
        ),
        title: "Perfect for Indoors",
        description: "Its sleek, modern look and compact growth make it ideal for bedrooms, offices, and living rooms."
    }
];

const Benefits: React.FC = () => {
    return (
        <section id="benefits" className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-green-900">Why You'll Love a Snake Plant</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">It's not just a plant; it's a statement of style and simplicity.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-brand-green-50 p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
                            <div className="flex justify-center items-center mb-4">
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-brand-green-900 mb-2">{benefit.title}</h3>
                            <p className="text-slate-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
