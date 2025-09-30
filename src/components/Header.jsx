// src/components/Header.jsx
import React from 'react';

const Header = () => {
    const navLinks = ['projects', 'experiences', 'skills', 'contact'];

    return (
        <header className="bg-[#0a192f] fixed top-0 left-0 w-full z-10 px-8 py-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold text-cyan-400">Kevin Erdianto Simon</h1>
                <nav>
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link}>
                                <a
                                    href={`#${link}`}
                                    className="capitalize text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;