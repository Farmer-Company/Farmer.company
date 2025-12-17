import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from './ui/Button';

export const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="contact" className="py-24 px-6 min-h-screen bg-black text-white flex items-center" ref={ref}>
            <div className="max-w-6xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-16 text-center">
                        <span className="text-danube-blue font-mono text-sm tracking-[0.3em] uppercase block mb-4">Get in Touch</span>
                        <h2 className="text-4xl md:text-6xl font-bold font-sans">Initialize Partnership</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-8 text-lg text-gray-400">
                            <p className="leading-relaxed">
                                The Farmer Company is building the digital nervous system for global agriculture.
                                We work with governments, large-scale orchards, and logistics fleets.
                            </p>

                            <div className="pt-4 border-t border-gray-800">
                                <h3 className="font-bold text-white mb-2">Headquarters</h3>
                                <p>123 Innovation Drive<br />San Francisco, CA 94105</p>
                            </div>

                            <div className="pt-4 border-t border-gray-800">
                                <h3 className="font-bold text-white mb-2">Direct Channel</h3>
                                <a href="mailto:hello@thefarmerscompany.com" className="text-danube-blue hover:underline">hello@thefarmerscompany.com</a>
                            </div>
                        </div>

                        <form className="space-y-6 bg-gray-900/30 p-8 rounded-3xl border border-gray-800 backdrop-blur-sm">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Identity</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-danube-blue transition-colors"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Comms</label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-danube-blue transition-colors"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Transmission</label>
                                <textarea
                                    className="w-full px-4 py-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-danube-blue transition-colors h-32 resize-none"
                                    placeholder="Message content..."
                                ></textarea>
                            </div>
                            <Button className="w-full py-4 text-xs font-mono uppercase tracking-widest">Execute Transmission</Button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
