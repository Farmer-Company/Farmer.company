import React from 'react';
import { motion } from 'framer-motion';
import { TechnologySection } from '../components/TechnologySection';

export const Technology = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen bg-wild-sand"
        >
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-cod-gray mb-6">Our Technology</h1>
                <p className="text-xl text-cod-gray/60 max-w-3xl mx-auto">
                    Precision engineering meets autonomous intelligence. Explore the systems powering the future of agriculture.
                </p>
            </div>
            <TechnologySection />
        </motion.div>
    );
};
