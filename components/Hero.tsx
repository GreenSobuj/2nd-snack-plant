
import React from 'react';

const Hero: React.FC = () => {
    const scrollTo = (selector: string) => {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative text-white min-h-[80vh] flex items-center">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
                src="https://source.unsplash.com/random/1600x900?snake-plant,minimal" 
                alt="Close-up of a vibrant snake plant" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="container mx-auto px-6 py-20 relative z-20 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
                    Bring Nature Home with Snake Plants
                </h1>
                <p className="text-lg md:text-2xl font-light mb-8 max-w-3xl mx-auto drop-shadow-md">
                    Air-purifying. Low Maintenance. Perfect for Any Space.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button
                        onClick={() => scrollTo('#order')}
                        className="bg-brand-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-brand-green-700 transition-all duration-300 transform hover:scale-105 shadow-xl"
                    >
                        Buy Now
                    </button>
                    <button
                        onClick={() => scrollTo('#benefits')}
                        className="bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/50 transition-all duration-300 transform hover:scale-105"
                    >
                        Why Snake Plant?
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
