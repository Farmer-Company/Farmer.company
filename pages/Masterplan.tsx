import React from 'react';
import { motion } from 'framer-motion';
import { MasterplanSection } from '../components/MasterplanSection';

export const Masterplan = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen bg-black text-white"
        >
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h1 className="text-4xl md:text-6xl font-bold font-sans mb-6 text-white tracking-tight text-center">The Masterplan</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center">
                    A multi-phase roadmap to digitize, organize, and optimize the global agricultural supply chain.
                </p>
            </div>
            <MasterplanSection />
        </motion.div>
    );
};
