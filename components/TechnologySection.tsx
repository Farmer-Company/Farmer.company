import React from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { Battery, Wind, Wifi, ShieldCheck, Cpu, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 animate-pulse border border-white/10"></div>
);

const items = [
    {
        title: "Origin Logic",
        description: "AI-driven fruit grading and digital twin creation at the source.",
        header: <div className="h-full w-full bg-danube-blue/10 rounded-xl items-center justify-center flex border border-white/10"><Leaf className="h-10 w-10 text-danube-blue" /></div>,
        icon: <Battery className="h-4 w-4 text-gray-400" />,
        className: "md:col-span-2",
    },
    {
        title: "Market Exchange",
        description: "Real-time supply visualization and instant bidding engine.",
        header: <div className="h-full w-full bg-gray-900 rounded-xl items-center justify-center flex text-4xl font-mono text-white/20 border border-white/10">LIVE</div>,
        icon: <Wind className="h-4 w-4 text-gray-400" />,
        className: "md:col-span-1",
    },
    {
        title: "RouteMaster",
        description: "Dynamic routing algorithms optimizing for perishability and traffic.",
        header: <Skeleton />,
        icon: <Wifi className="h-4 w-4 text-gray-400" />,
        className: "md:col-span-1",
    },
    {
        title: "Mission Control",
        description: "A unified operating system for farmers, buyers, and logistics partners.",
        header: <Skeleton />,
        icon: <ShieldCheck className="h-4 w-4 text-gray-400" />,
        className: "md:col-span-2",
    },
];

export const TechnologySection = () => {
    return (
        <section id="technology" className="py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-bold font-sans mb-4 tracking-tighter"
                >
                    The Core Engine
                </motion.h2>
                <p className="text-gray-400 max-w-2xl text-lg font-light">
                    Not just a marketplace. A vertically integrated technology stack powering the entire fresh produce supply chain.
                </p>
            </div>
            <BentoGrid className="max-w-7xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={item.className}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};
