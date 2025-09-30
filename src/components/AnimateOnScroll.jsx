import React from 'react';
import { motion } from 'framer-motion';

const AnimateOnScroll = ({ children, direction = 'up' }) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Animate once 20% of it is in view
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default AnimateOnScroll;