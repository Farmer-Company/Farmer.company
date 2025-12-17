import React, { useState, useEffect } from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { Battery, Wind, Wifi, ShieldCheck, Cpu, Leaf, Activity, BarChart3, Truck, Globe, Zap, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom Visual Headers with Interactive Elements ---

const OriginHeader = () => {
    const [quality, setQuality] = useState(85);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuality(prev => {
                const change = Math.random() * 10 - 5;
                return Math.max(80, Math.min(99, prev + change));
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

            {/* Scanning Animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/20 to-transparent h-20"
                animate={{
                    y: ['-100%', '200%']
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="z-10 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-mono text-green-400">AI GRADING: {quality.toFixed(1)}%</span>
                </div>
            </div>

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-green-500 rounded-full"
                    initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%'
                    }}
                    animate={{
                        y: [null, Math.random() * 100 + '%'],
                        opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: i * 0.5
                    }}
                />
            ))}

            <Leaf className="absolute -right-4 -bottom-4 text-green-500/10 w-40 h-40 group-hover:scale-110 transition-transform duration-500" />
        </div>
    );
};

const ExchangeHeader = () => {
    const [volume, setVolume] = useState(24302);
    const [trend, setTrend] = useState(12.4);

    useEffect(() => {
        const interval = setInterval(() => {
            setVolume(prev => prev + Math.floor(Math.random() * 100 - 20));
            setTrend(prev => Math.max(-5, Math.min(20, prev + (Math.random() * 2 - 1))));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden flex-col p-4 justify-between">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-full h-px bg-blue-500"
                        style={{ top: `${(i + 1) * 5}%` }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: [0, 1, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1
                        }}
                    />
                ))}
            </div>

            <div className="flex justify-between items-center relative z-10">
                <span className="text-xs font-mono text-gray-500">MKT_VOL</span>
                <Activity className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex items-baseline gap-1 relative z-10">
                <motion.span
                    className="text-2xl font-bold text-white"
                    key={volume}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    {volume.toLocaleString()}
                </motion.span>
                <span className={`text-xs font-mono ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {trend >= 0 ? '+' : ''}{trend.toFixed(1)}%
                </span>
            </div>

            {/* Animated Progress Bar */}
            <div className="w-full bg-gray-800 h-1 mt-2 rounded-full overflow-hidden relative z-10">
                <motion.div
                    initial={{ width: "30%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
            </div>
        </div>
    );
};

const RouteHeader = () => {
    const [activeRoutes, setActiveRoutes] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveRoutes(Math.floor(Math.random() * 36));
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-0.5 opacity-20 transform -skew-x-12 scale-150">
                {Array.from({ length: 36 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-700"
                        animate={{
                            backgroundColor: i === activeRoutes ? '#8A2BE2' : '#374151',
                            scale: i === activeRoutes ? 1.2 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    />
                ))}
            </div>

            {/* Route Lines Animation */}
            <svg className="absolute inset-0 w-full h-full opacity-30">
                <motion.path
                    d="M 0,50 Q 50,10 100,50 T 200,50"
                    stroke="#8A2BE2"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </svg>

            <div className="absolute bottom-4 left-4 z-10">
                <div className="flex items-center gap-2 text-purple-400">
                    <Truck className="w-5 h-5" />
                    <span className="text-xs font-bold tracking-widest">OPTIMIZING...</span>
                </div>
            </div>
        </div>
    );
};

const ControlHeader = () => {
    const [nodes, setNodes] = useState(4200);
    const [latency, setLatency] = useState(12);

    useEffect(() => {
        const interval = setInterval(() => {
            setNodes(prev => prev + Math.floor(Math.random() * 20 - 5));
            setLatency(Math.floor(Math.random() * 10 + 8));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/10 relative overflow-hidden group">
            {/* Pulsing Globe */}
            <motion.div
                className="absolute top-0 right-0 p-4"
                animate={{
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity
                }}
            >
                <Globe className="w-20 h-20 text-gray-800 group-hover:text-blue-900/40 transition-colors duration-500" />
            </motion.div>

            {/* Connection Lines */}
            <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-px h-20 bg-gradient-to-b from-blue-500/50 to-transparent"
                        style={{
                            left: `${(i + 1) * 12}%`,
                            top: '20%'
                        }}
                        animate={{
                            opacity: [0.2, 0.8, 0.2],
                            height: [60, 80, 60]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                        }}
                    />
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                <div className="flex gap-4 font-mono text-xs text-gray-400">
                    <div className="flex flex-col gap-1">
                        <span>SYS: <span className="text-green-500">ONLINE</span></span>
                        <motion.span
                            key={latency}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            LAT: {latency}ms
                        </motion.span>
                    </div>
                    <div className="flex flex-col gap-1">
                        <motion.span
                            key={nodes}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            NODES: {nodes.toLocaleString()}
                        </motion.span>
                        <span>UPTIME: 99.9%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
        <section id="technology" className="py-20 bg-black text-white min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Floating Orbs */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-64 h-64 rounded-full blur-3xl"
                    style={{
                        background: `radial-gradient(circle, ${['#1DB954', '#2962FF', '#8A2BE2'][i]}20, transparent)`,
                        left: `${i * 30 + 10}%`,
                        top: `${i * 20 + 10}%`
                    }}
                    animate={{
                        y: [0, 50, 0],
                        x: [0, 30, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 10 + i * 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <div className="flex items-center gap-2 mb-4">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                        <Cpu className="text-blue-600 w-6 h-6" />
                    </motion.div>
                    <span className="text-blue-600 font-mono text-sm tracking-widest uppercase">Technology Stack v2.0</span>
                </div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-sans mb-6 tracking-tighter"
                >
                    The Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Nervous System</span>.
                </motion.h2>
                <p className="text-gray-400 max-w-2xl text-xl font-light leading-relaxed">
                    We aren't just shipping fruit. We are shipping <em className="text-white not-italic">bytes</em>.
                    Our vertically integrated stack digitizes every atom of the produce economy.
                </p>
            </div>
            <BentoGrid className="max-w-7xl mx-auto relative z-10">
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
