
import React from 'react';

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/>
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.846 6.067l-1.259 4.605 4.743-1.246z" />
    </svg>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-green-900 text-brand-green-200">
            <div className="container mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-xl font-bold text-white mb-2">GreenNest</h4>
                        <p className="max-w-md">Your one-stop shop for beautiful, healthy, and easy-to-care-for Snake Plants. We are passionate about bringing the benefits of nature indoors.</p>
                    </div>
                    <div className="flex items-center space-x-6">
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                           <FacebookIcon />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
                           <WhatsAppIcon />
                        </a>
                    </div>
                </div>
                <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-brand-green-300">
                    <p>&copy; {new Date().getFullYear()} GreenNest. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
