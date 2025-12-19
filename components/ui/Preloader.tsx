import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Activity } from 'lucide-react';

export const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Minimum loading time for branding
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {/* Background Subtle Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-black to-black opacity-50"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="mb-8 relative"
                        >
                            <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 rounded-full"></div>
                            <Leaf size={64} className="text-white relative z-10" strokeWidth={1} />
                        </motion.div>

                        {/* Text Reveal */}
                        <div className="text-center overflow-hidden mb-2">
                            <motion.h1
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                                className="text-3xl md:text-5xl font-light text-white tracking-widest font-sans"
                            >
                                THE FARMER COMPANY
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-green-500/80 text-sm md:text-base tracking-[0.3em] font-mono uppercase"
                            >
                                Digital Nervous System
                            </motion.p>
                        </div>

                        {/* Loading Bar */}
                        <motion.div
                            className="mt-12 w-64 h-[1px] bg-gray-800 relative overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <motion.div
                                className="absolute inset-y-0 left-0 bg-green-500 w-full"
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </div>

                    {/* Corner decorative elements */}
                    <div className="absolute top-8 left-8 text-white/20 font-mono text-xs">
                        <Activity size={16} className="inline mr-2 animate-pulse" />
                        SYSTEM_INIT
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
