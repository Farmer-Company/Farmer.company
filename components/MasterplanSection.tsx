import React from 'react';
import { motion } from 'framer-motion';

const phases = [
    {
        phase: "01",
        title: "The Digital Twin",
        description: "Launch of Origin. Digitizing every farm and harvest into a real-time data asset.",
        year: "2025"
    },
    {
        phase: "02",
        title: "The Marketplace",
        description: "Launch of Exchange. connecting supply and demand instantly with zero friction or intermediaries.",
        year: "2026"
    },
    {
        phase: "03",
        title: "Autonomous Fulfillment",
        description: "Launch of RouteMaster. Self-driving logistics and robotic handling for a zero-touch supply chain.",
        year: "2028"
    }
];

export const MasterplanSection = () => {
    return (
        <section id="masterplan" className="py-20 bg-black text-white px-2">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-24">
                    <span className="text-danube-blue font-mono text-sm tracking-[0.3em] uppercase block mb-6">The Masterplan</span>
                    <h2 className="text-4xl md:text-7xl font-bold font-sans max-w-3xl leading-none tracking-tight">
                        Scaling sustainable agriculture for a hungry planet.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting line (hidden on mobile) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-px bg-white/20 z-0"></div>

                    {phases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10"
                        >
                            <div className="flex justify-between items-baseline mb-8">
                                <span className="text-5xl font-light text-white font-sans bg-black pr-4">{item.phase}</span>
                                <span className="font-mono text-sm text-gray-500 border border-gray-800 px-2 py-1 rounded">{item.year}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 font-sans text-danube-blue">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
