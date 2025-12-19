import React, { useState, useEffect } from 'react';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { Battery, Wind, Wifi, ShieldCheck, Cpu, Leaf, Activity, BarChart3, Truck, Globe, Zap, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Custom Visual Headers with Interactive Elements ---

const OriginHeader = () => {
    const [quality, setQuality] = useState(85);
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setQuality(prev => {
                const change = Math.random() * 10 - 5;
                return Math.max(80, Math.min(99, prev + change));
            });
            const newLog = `[${new Date().toLocaleTimeString()}] SAMPLE_${Math.floor(Math.random() * 1000)}: GRADE_A`;
            setLines(prev => [newLog, ...prev.slice(0, 4)]);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border-2 border-green-500/20 relative overflow-hidden group hover:border-green-500/40 transition-colors">
            <div className="absolute inset-0 bg-grid-white/[0.05]"></div>

            {/* Terminal Output */}
            <div className="absolute top-2 left-2 z-10 font-mono text-[10px] text-green-500/80 leading-tight">
                <div className="border-b border-green-500/20 pb-1 mb-1">ORIGIN_NET.SYS</div>
                {lines.map((line, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>{line}</motion.div>
                ))}
            </div>

            {/* Scanning Animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-transparent h-20"
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute bottom-2 right-2 flex items-center gap-2 bg-black/80 px-2 py-1 rounded border border-green-500/30">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-mono text-green-400">{quality.toFixed(1)}% QUALITY</span>
            </div>
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
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border-2 border-blue-500/20 relative overflow-hidden flex-col p-4 justify-between group hover:border-blue-500/40 transition-colors">
            <div className="absolute inset-0 bg-grid-white/[0.02]"></div>

            <div className="flex justify-between items-center relative z-10 border-b border-blue-500/20 pb-2">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 px-1 rounded">EXCHANGE</span>
                    <span className="w-1 h-1 bg-blue-500 rounded-full animate-ping"></span>
                </div>
                <Activity className="w-3 h-3 text-blue-500" />
            </div>

            <div className="flex items-end justify-between relative z-10 mt-2">
                <div>
                    <div className="text-[10px] text-gray-500 font-mono mb-1">24H VOLUME</div>
                    <motion.div
                        className="text-2xl font-bold text-white font-mono tracking-tighter"
                        key={volume}
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        {volume.toLocaleString()}
                    </motion.div>
                </div>
                <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 ${trend >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {trend >= 0 ? '+' : ''}{trend.toFixed(1)}%
                </span>
            </div>

            {/* Micro-chart */}
            <div className="flex gap-0.5 items-end h-8 mt-2 opacity-50">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 bg-blue-500 rounded-t-sm"
                        animate={{ height: `${Math.random() * 100}%` }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: i * 0.1 }}
                    />
                ))}
            </div>
        </div>
    );
};

const RouteHeader = () => {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border-2 border-purple-500/20 relative overflow-hidden group hover:border-purple-500/40 transition-colors">
            {/* Hex Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #8A2BE2 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>

            {/* Animated Path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path
                    d="M10,80 Q50,10 100,50 T200,80"
                    fill="none"
                    stroke="#8A2BE2"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -20] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="opacity-60"
                />
            </svg>

            {/* Nodes */}
            {[20, 50, 80].map((left, i) => (
                <div key={i} className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-500 rounded-full border border-black shadow-[0_0_10px_#8A2BE2]" style={{ left: `${left}%` }} />
            ))}

            <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center z-10 bg-neutral-900/90 border border-purple-500/20 p-2 rounded">
                <div className="flex items-center gap-2 text-purple-400">
                    <Truck className="w-3 h-3" />
                    <span className="text-[10px] font-bold tracking-widest font-mono">ROUTE_OPT</span>
                </div>
                <span className="text-[10px] text-green-400 font-mono">EFF: 98%</span>
            </div>
        </div>
    );
};

const ControlHeader = () => {
    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border-2 border-gray-700/50 relative overflow-hidden group hover:border-white/20 transition-colors">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]" />

            <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <Globe className="w-32 h-32 text-white animate-[spin_20s_linear_infinite]" strokeWidth={0.5} />
            </div>

            <div className="absolute top-0 right-0 p-4 font-mono text-xs text-right">
                <div className="text-gray-500">SYSTEM_STATUS</div>
                <div className="text-green-500 font-bold blink">ONLINE</div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-1 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-white"
                            animate={{ width: ["20%", "80%", "40%"] }}
                            transition={{ duration: 2 + i, repeat: Infinity }}
                        />
                    </div>
                ))}
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
