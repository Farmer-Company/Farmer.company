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
        <section id="masterplan" className="py-20 bg-cod-gray text-wild-sand">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-danube-blue font-mono text-sm tracking-widest uppercase block mb-4">The Masterplan</span>
                    <h2 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
                        Scaling sustainable agriculture for a hungry planet.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {phases.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="border-t border-wild-sand/20 pt-8"
                        >
                            <div className="flex justify-between items-baseline mb-6">
                                <span className="text-3xl font-light text-danube-blue">{item.phase}</span>
                                <span className="font-mono text-xs opacity-50">{item.year}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-wild-sand/60 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
