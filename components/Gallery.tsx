
import React from 'react';

const galleryImages = [
    'https://source.unsplash.com/random/500x500?sansevieria,pot',
    'https://source.unsplash.com/random/500x501?sansevieria,modern',
    'https://source.unsplash.com/random/500x502?snake-plant,interior',
    'https://source.unsplash.com/random/500x503?sansevieria,closeup',
    'https://source.unsplash.com/random/500x504?snake-plant,desk',
    'https://source.unsplash.com/random/500x505?sansevieria,shelf'
];

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="bg-brand-green-50 py-16 sm:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-green-900">Our Plant Gallery</h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">See how our Snake Plants can beautify any space.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-xl shadow-lg aspect-square">
                            <img 
                                src={src} 
                                alt={`Snake plant gallery image ${index + 1}`} 
                                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
