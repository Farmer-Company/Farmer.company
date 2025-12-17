import React from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { Battery, Wind, Wifi, ShieldCheck, Cpu, Leaf, Activity, BarChart3, Truck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

// --- Custom Visual Headers ---

const OriginHeader = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 relative overflow-hidden group">
        <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="z-10 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-mono text-green-400">AI GRADING ACTIVE</span>
            </div>
        </div>
        <Leaf className="absolute -right-4 -bottom-4 text-green-500/10 w-40 h-40 group-hover:scale-110 transition-transform duration-500" />
    </div>
);

const ExchangeHeader = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden flex-col p-4 justify-between">
        <div className="flex justify-between items-center">
            <span className="text-xs font-mono text-gray-500">MKT_VOL</span>
            <Activity className="w-4 h-4 text-blue-500" />
        </div>
        <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">24,302</span>
            <span className="text-xs text-green-500 font-mono">+12.4%</span>
        </div>
        <div className="w-full bg-gray-800 h-1 mt-2 rounded-full overflow-hidden">
            <motion.div
                initial={{ width: "30%" }}
                animate={{ width: "75%" }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="h-full bg-blue-500"
            />
        </div>
    </div>
);

const RouteHeader = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0.5 opacity-20 transform -skew-x-12 scale-150">
            {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className={`bg-gray-700 ${Math.random() > 0.8 ? 'bg-purple-500 animate-pulse' : ''}`} />
            ))}
        </div>
        <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 text-purple-400">
                <Truck className="w-5 h-5" />
                <span className="text-xs font-bold tracking-widest">OPTIMIZING...</span>
            </div>
        </div>
    </div>
);

const ControlHeader = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4">
            <Globe className="w-20 h-20 text-gray-800 group-hover:text-blue-900/40 transition-colors duration-500" />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
            <div className="flex gap-4 font-mono text-xs text-gray-400">
                <div className="flex flex-col gap-1">
                    <span>SYS: ONLINE</span>
                    <span>LAT: 12ms</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span>NODES: 4,200</span>
                    <span>UPTIME: 99.9%</span>
                </div>
            </div>
        </div>
    </div>
);

const items = [
    {
        title: "Origin Logic",
        description: "Computer vision and spectral analysis for instant quality grading at the farm gate.",
        header: <OriginHeader />,
        icon: <Leaf className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-2",
    },
    {
        title: "Market Exchange",
        description: "Real-time algorithmic pricing engine and demand matching.",
        header: <ExchangeHeader />,
        icon: <BarChart3 className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "RouteMaster",
        description: "Predictive logistics routing to minimize perishability and fuel costs.",
        header: <RouteHeader />,
        icon: <Truck className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-1",
    },
    {
        title: "Mission Control",
        description: "The central nervous system connecting every node in the food supply web.",
        header: <ControlHeader />,
        icon: <Globe className="h-4 w-4 text-neutral-500" />,
        className: "md:col-span-2",
    },
];

export const TechnologySection = () => {
    return (
        <section id="technology" className="py-20 bg-black text-white min-h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <div className="flex items-center gap-2 mb-4">
                    <Cpu className="text-blue-600 w-6 h-6 animate-spin-slow" />
                    <span className="text-blue-600 font-mono text-sm tracking-widest uppercase">Technology Stack v2.0</span>
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-bold font-sans mb-6 tracking-tighter"
                >
                    The Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Nervous System</span>.
                </motion.h2>
                <p className="text-gray-400 max-w-2xl text-xl font-light leading-relaxed">
                    We aren't just shipping fruit. We are shipping <em className="text-white not-italic">bytes</em>.
                    Our vertically integrated stack digitizes every atom of the produce economy.
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
