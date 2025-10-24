
import React from 'react';

const testimonials = [
    {
        name: "Sadia Rahman",
        review: "I absolutely love my snake plant from GreenNest! It arrived healthy and looks stunning in my living room. Super easy to care for, even for a beginner like me.",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        name: "Kamal Hossain",
        review: "The quality is top-notch. It's the perfect office plant - requires almost no attention but adds so much life to my desk. Highly recommended!",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d"
    },
    {
        name: "Nusrat Jahan",
        review: "Great service and a beautiful plant. It's thriving in a low-light corner of my bedroom. I feel the air is fresher already. Thank you, GreenNest!",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-green-900">What Our Customers Say</h2>
                    <p className="mt-4 text-lg text-slate-600">We are proud to bring joy and nature into homes.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-brand-green-50 p-8 rounded-xl shadow-md">
                            <p className="text-slate-700 mb-6 italic">"{testimonial.review}"</p>
                            <div className="flex items-center">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <p className="font-bold text-brand-green-900">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">Verified Buyer</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
