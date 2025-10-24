
import React, { useState } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        if (onClick) onClick();
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className="text-brand-green-800 hover:text-brand-green-600 transition-colors duration-300 py-2"
        >
            {children}
        </a>
    );
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-brand-green-800">
                    GreenNest
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#benefits">Benefits</NavLink>
                    <NavLink href="#gallery">Gallery</NavLink>
                    <NavLink href="#order">Buy Now</NavLink>
                    <a href="#order" onClick={(e) => { e.preventDefault(); document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' }); }} className="bg-brand-green-600 text-white px-5 py-2 rounded-full hover:bg-brand-green-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                        Order Now
                    </a>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-green-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col items-center space-y-4 px-6 py-4">
                        <NavLink href="#home" onClick={closeMenu}>Home</NavLink>
                        <NavLink href="#benefits" onClick={closeMenu}>Benefits</NavLink>
                        <NavLink href="#gallery" onClick={closeMenu}>Gallery</NavLink>
                        <NavLink href="#order" onClick={closeMenu}>Buy Now</NavLink>
                        <a href="#order" onClick={(e) => { e.preventDefault(); document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' }); closeMenu(); }} className="w-full text-center bg-brand-green-600 text-white px-5 py-2 rounded-full hover:bg-brand-green-700 transition-all duration-300 transform hover:scale-105 shadow-md">
                            Order Now
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
