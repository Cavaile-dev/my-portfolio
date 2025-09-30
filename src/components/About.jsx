// src/components/About.jsx
import React from 'react';
import profilePic from '../assets/profile.png'; // Make sure to add your profile picture in src/assets

const About = () => {
    return (
        <section id="about" className="py-30 pt-42 bg-gray-900">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-8">
                <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Hi, I'm <span className="text-cyan-400">Kevin Erdianto Simon</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-6">
                        It's my dream to solve real-world problems with AI solutions. Currently I'm a student at the University of Bina Nusantara.
                        I'm passionate about turning data into insights and I love to learn new things.
                    </p>
                    <a
                        href="/my-cv.pdf" // Place your CV in the public folder
                        download
                        className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                    >
                        Download CV
                    </a>
                </div>
                <div className="md:w-1/3 flex justify-center">
                    <img
                        src={profilePic}
                        alt="My Profile"
                        className="rounded-full w-64 h-64 object-cover border-2 border-cyan-400 shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;