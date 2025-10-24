
import React, { useState } from 'react';

const OrderForm: React.FC = () => {
    const [formData, setFormData] = useState({
        size: 'Medium',
        name: '',
        phone: '',
        address: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Order Submitted:", formData);
        alert("Thank you for your order! We've received your details (check the console).");
        setFormData({ size: 'Medium', name: '', phone: '', address: '' });
    };

    return (
        <section id="order" className="bg-brand-green-950 text-white py-16 sm:py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Get Your Snake Plant Today!</h2>
                    <p className="mt-4 text-lg text-brand-green-300">Starts from ৳450 - ৳850 depending on size</p>
                </div>
                
                <div className="bg-white/10 p-8 rounded-xl shadow-2xl backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="size" className="block text-sm font-medium text-brand-green-200 mb-2">Plant Size</label>
                            <select 
                                id="size" 
                                name="size" 
                                value={formData.size}
                                onChange={handleChange}
                                className="w-full bg-white/20 text-white rounded-md border-transparent focus:border-brand-green-400 focus:ring focus:ring-brand-green-400 focus:ring-opacity-50 px-4 py-3 transition"
                            >
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-brand-green-200 mb-2">Full Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter your full name"
                                className="w-full bg-white/20 text-white placeholder-brand-green-300/50 rounded-md border-transparent focus:border-brand-green-400 focus:ring focus:ring-brand-green-400 focus:ring-opacity-50 px-4 py-3 transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-brand-green-200 mb-2">Phone Number</label>
                            <input 
                                type="tel" 
                                id="phone" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="Enter your phone number"
                                className="w-full bg-white/20 text-white placeholder-brand-green-300/50 rounded-md border-transparent focus:border-brand-green-400 focus:ring focus:ring-brand-green-400 focus:ring-opacity-50 px-4 py-3 transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-brand-green-200 mb-2">Delivery Address</label>
                            <textarea 
                                id="address" 
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                rows={3}
                                placeholder="Enter your full delivery address"
                                className="w-full bg-white/20 text-white placeholder-brand-green-300/50 rounded-md border-transparent focus:border-brand-green-400 focus:ring focus:ring-brand-green-400 focus:ring-opacity-50 px-4 py-3 transition"
                            ></textarea>
                        </div>

                        <div>
                            <button 
                                type="submit"
                                className="w-full bg-brand-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-brand-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                Confirm Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default OrderForm;
