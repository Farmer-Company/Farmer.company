import React from 'react';
import { motion } from 'framer-motion';
import { MasterplanSection } from '../components/MasterplanSection';

export const Masterplan = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 min-h-screen bg-cod-gray"
        >
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-wild-sand mb-6">The Masterplan</h1>
                <p className="text-xl text-wild-sand/60 max-w-3xl mx-auto">
                    Our strategic roadmap to fully autonomous sustainable farming by 2030.
                </p>
            </div>
            <MasterplanSection />
        </motion.div>
    );
};
