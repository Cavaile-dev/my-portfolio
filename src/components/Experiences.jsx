// src/components/Experiences.jsx
import React from 'react';

const experiences = [
    {
        title: 'Freshmen Leader',
        company: 'Bina Nusantara\'s School of Computer Science',
        period: 'Jul 2024 - Aug 2024',
        description: 'Learned to take ownership and responsibility for integrating new students into the community. My main job was to communicate vital information and serve as a reliable mentor, often tackling small issues before they grew into big problems. This taught me real-world leadership, not just giving directions, but actively helping and organizing a group toward a successful shared transition.',
    },
    {
        title: 'Freshmen Partner',
        company: 'Bina Nusantara\'s School of Computer Science',
        period: 'Aug 2024 - Jun 2025',
        description: 'Serving as a Freshmen Partner for a full semester was an intense lesson in both sustained mentorship and collaboration. I managed the successful transition of a group of new students, requiring strong organizational skills and patient, one-on-one communication. Crucially, I collaborated constantly with other partners to share insights and troubleshoot challenges, demonstrating excellent meta-teamwork to ensure consistent, high-quality support across the entire freshmen class.',
    },
    {
        title: 'Organization Member',
        company: 'Bina Nusantara\'s Volleyball Club',
        period: 'Sept 2023 - Sept 2024',
        description: 'I developed the ability to communicate clearly and constantly with teammates, building mutual trust necessary to execute fast-paced plays. This experience taught me how to prioritize group success over individual achievement and smoothly apply feedback for the benefit of the whole team.',
    },

];

const Experiences = () => {
    return (
        <section id="experiences" className="py-20 bg-gray-900">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Experiences</h2>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-1/2 w-0.5 h-full bg-cyan-400 transform -translate-x-1/2"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <div className="w-5/12"></div> {/* Empty space for alignment */}
                            <div className="z-10 bg-cyan-500 w-6 h-6 rounded-full"></div> {/* Timeline dot */}
                            <div className="w-5/12 bg-gray-800 p-6 rounded-lg shadow-lg">
                                <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                                <p className="text-gray-400 font-semibold mb-2">{exp.company}</p>
                                <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                                <p className="text-gray-300">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;