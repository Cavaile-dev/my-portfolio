import React from 'react';
// FaEnvelope has been added to the import
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/kevin-erdianto-simon-6830bb308/' },
    { icon: <FaGithub />, url: 'https://github.com/Cavaile-dev' },
    { icon: <FaEnvelope />, url: 'mailto:kevinsimon.721@gmail.com' },
    { icon: <FaInstagram />, url: 'https://instagram.com/kevin.simon_' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/6281281798369' },
];

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4">Connect With Me</h2>
                <p className="text-secondary-text mb-8">Feel free to reach out on any of these platforms!</p>
                <div className="flex justify-center items-center space-x-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-text hover:text-accent transition-colors duration-300"
                        >
                            {React.cloneElement(link.icon, { size: 40 })}
                        </a>
                    ))}
                </div>
                <footer className="mt-12 text-secondary-text">
                    <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;