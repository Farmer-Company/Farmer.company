import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, TrendingUp, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';

const phases = [
    {
        phase: "01",
        title: "The Digital Twin",
        description: "Launch of Origin. Digitizing every farm and harvest into a real-time data asset.",
        year: "2025",
        icon: Sprout,
        color: "#1DB954",
        details: [
            "Real-time farm digitization",
            "AI-powered quality grading",
            "Blockchain-verified provenance",
            "IoT sensor integration"
        ],
        metrics: { farms: "10K+", accuracy: "99.2%", uptime: "99.9%" }
    },
    {
        phase: "02",
        title: "The Marketplace",
        description: "Launch of Exchange. connecting supply and demand instantly with zero friction or intermediaries.",
        year: "2026",
        icon: TrendingUp,
        color: "#2962FF",
        details: [
            "Zero-commission marketplace",
            "Dynamic pricing algorithms",
            "Instant settlement system",
            "Global demand matching"
        ],
        metrics: { volume: "$500M+", users: "100K+", speed: "<100ms" }
    },
    {
        phase: "03",
        title: "Autonomous Fulfillment",
        description: "Launch of RouteMaster. Self-driving logistics and robotic handling for a zero-touch supply chain.",
        year: "2028",
        icon: Zap,
        color: "#8A2BE2",
        details: [
            "Autonomous vehicle fleet",
            "Predictive route optimization",
            "Robotic warehouse systems",
            "Zero-waste cold chain"
        ],
        metrics: { routes: "1M+", efficiency: "+45%", emissions: "-60%" }
    }
];

export const MasterplanSection = () => {
    const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
    const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);

    return (
        <section id="masterplan" className="py-20 bg-black text-white px-2 relative overflow-hidden min-h-screen">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Constellation Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute inset-0 w-full h-full opacity-20">
                    <motion.path
                        d="M0,0 Q 400,300 800,0 T 1600,300"
                        stroke="url(#gradient-line)"
                        strokeWidth="1"
                        fill="none"
                        animate={{ d: ["M0,0 Q 400,300 800,0 T 1600,300", "M0,100 Q 400,400 800,100 T 1600,400"] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <defs>
                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1DB954" />
                            <stop offset="50%" stopColor="#2962FF" />
                            <stop offset="100%" stopColor="#8A2BE2" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-24 relative">
                    {/* Decorative Elements */}
                    <div className="absolute -left-10 top-0 w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent opacity-50"></div>
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase block mb-6"
                    >
                        // The Masterplan
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bold font-sans max-w-3xl leading-none tracking-tight"
                    >
                        Scaling sustainable agriculture for a{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                            hungry planet.
                        </span>
                    </motion.h2>
                </div>

                {/* Interactive Timeline */}
                <div className="relative">
                    {/* Vertical Timeline Line (Mobile) */}
                    <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-600"></div>

                    {/* Horizontal Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 z-0">
                        <div className="absolute inset-0 bg-gray-800"></div>
                        <motion.div
                            className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-600"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ transformOrigin: "left" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {phases.map((item, index) => {
                            const Icon = item.icon;
                            const isExpanded = expandedPhase === index;
                            const isHovered = hoveredPhase === index;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="relative group"
                                    onHoverStart={() => setHoveredPhase(index)}
                                    onHoverEnd={() => setHoveredPhase(null)}
                                >
                                    {/* Connectivity Line */}
                                    {index < phases.length - 1 && (
                                        <div className="hidden md:block absolute top-24 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" style={{ borderColor: item.color }} />
                                    )}

                                    {/* Timeline Node */}
                                    <motion.div
                                        className="absolute md:top-[5.5rem] top-0 md:left-1/2 left-8 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-20 bg-black border-2"
                                        style={{ borderColor: item.color }}
                                        animate={{
                                            scale: isHovered || isExpanded ? 1.2 : 1,
                                            boxShadow: isHovered || isExpanded
                                                ? `0 0 20px ${item.color}`
                                                : `0 0 0px ${item.color}`
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-current opacity-50" style={{ color: item.color }}></div>
                                    </motion.div>

                                    {/* Phase Card */}
                                    <motion.div
                                        className="relative bg-neutral-900/80 backdrop-blur-xl border rounded-2xl p-6 md:p-8 cursor-pointer overflow-hidden md:ml-0 ml-16"
                                        style={{
                                            borderColor: isExpanded ? item.color : '#333',
                                        }}
                                        animate={{
                                            y: isExpanded ? -10 : 0,
                                            boxShadow: isExpanded
                                                ? `0 20px 60px -10px ${item.color}20`
                                                : '0 0 0 rgba(0,0,0,0)'
                                        }}
                                        onClick={() => setExpandedPhase(isExpanded ? null : index)}
                                        whileHover={{ y: -5, borderColor: item.color }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Holographic Gradient Overlay */}
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                                            style={{
                                                background: `linear-gradient(135deg, ${item.color} 0%, transparent 50%, ${item.color} 100%)`
                                            }}
                                        />

                                        {/* Header */}
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className="w-12 h-12 rounded-lg flex items-center justify-center border"
                                                        style={{
                                                            backgroundColor: `${item.color}10`,
                                                            borderColor: `${item.color}30`
                                                        }}
                                                    >
                                                        <Icon size={24} style={{ color: item.color }} />
                                                    </div>
                                                    <span className="text-5xl font-light text-white/10 font-sans absolute top-4 right-4 group-hover:text-white/20 transition-colors">
                                                        {item.phase}
                                                    </span>
                                                </div>
                                                <span
                                                    className="font-mono text-[10px] px-2 py-1 rounded border tracking-widest"
                                                    style={{
                                                        color: item.color,
                                                        borderColor: `${item.color}30`
                                                    }}
                                                >
                                                    TARGET: {item.year}
                                                </span>
                                            </div>

                                            <h3 className="text-xl md:text-2xl font-bold mb-2 font-sans text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-sm mb-6 h-12">
                                                {item.description}
                                            </p>

                                            {/* Metrics */}
                                            <div className="grid grid-cols-3 gap-2 mb-6 border-t border-white/5 pt-4">
                                                {Object.entries(item.metrics).map(([key, value]) => (
                                                    <div key={key} className="">
                                                        <div
                                                            className="text-lg font-bold mb-0.5"
                                                            style={{ color: item.color }}
                                                        >
                                                            {value}
                                                        </div>
                                                        <div className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                                                            {key}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Expand Button */}
                                            <motion.button
                                                className="flex items-center gap-2 text-xs font-mono mt-auto uppercase tracking-wider group/btn"
                                                style={{ color: item.color }}
                                            >
                                                <span>{isExpanded ? 'Hide Intel' : 'Access Intel'}</span>
                                                <motion.div
                                                    animate={{ rotate: isExpanded ? 90 : 0, x: isExpanded ? 0 : [0, 5, 0] }}
                                                    transition={{ duration: isExpanded ? 0.3 : 1.5, repeat: isExpanded ? 0 : Infinity }}
                                                >
                                                    <ChevronRight size={14} />
                                                </motion.div>
                                            </motion.button>

                                            {/* Expanded Details - Milestone/Roadmap Visual */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: "circOut" }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="mt-6 pt-6 border-t border-gray-800">

                                                            {/* Mini Roadmap Visualization */}
                                                            <div className="relative pl-4 border-l border-gray-800 mb-6 space-y-4">
                                                                {['Q1: Infrastructure', 'Q2: Beta Launch', 'Q3: Scale Operations', 'Q4: Optimization'].map((q, i) => (
                                                                    <div key={i} className="flex items-center gap-3">
                                                                        <div className="w-2 h-2 rounded-full absolute -left-[5px]" style={{ backgroundColor: i < 2 ? item.color : '#333' }}></div>
                                                                        <span className={`text-xs font-mono ${i < 2 ? 'text-white' : 'text-gray-600'}`}>{q}</span>
                                                                        {i < 2 && <span className="text-[10px] text-green-500 bg-green-900/20 px-1 rounded">COMPLETED</span>}
                                                                    </div>
                                                                ))}
                                                            </div>

                                                            <h4 className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-wider">
                                                                Core Capabilities
                                                            </h4>
                                                            <div className="space-y-3">
                                                                {item.details.map((detail, i) => (
                                                                    <motion.div
                                                                        key={i}
                                                                        initial={{ x: -10, opacity: 0 }}
                                                                        animate={{ x: 0, opacity: 1 }}
                                                                        transition={{ delay: i * 0.1 }}
                                                                        className="flex items-start gap-3 bg-white/5 p-2 rounded border border-white/5"
                                                                    >
                                                                        <CheckCircle2
                                                                            size={14}
                                                                            className="mt-0.5"
                                                                            style={{ color: item.color }}
                                                                        />
                                                                        <span className="text-gray-300 text-xs">
                                                                            {detail}
                                                                        </span>
                                                                    </motion.div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Progress Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className="inline-flex flex-col items-center gap-2">
                        <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">System Status</span>
                        <div className="flex items-center gap-3 bg-neutral-900/80 border border-gray-800 rounded-lg px-6 py-3 backdrop-blur-sm">
                            <div className="flex gap-1.5">
                                {phases.map((phase, i) => (
                                    <div key={i} className="flex flex-col items-center gap-1 group relative">
                                        <div
                                            className="w-1.5 h-6 rounded-full transition-all duration-300 group-hover:h-8"
                                            style={{ backgroundColor: phase.color }}
                                        />
                                        <div className="absolute -bottom-4 opacity-0 group-hover:opacity-100 text-[8px] font-mono text-gray-400 transition-opacity">
                                            {phase.year}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-px h-8 bg-gray-800 mx-2"></div>
                            <span className="text-xs font-mono text-gray-300">
                                EXECUTION_PHASE: <span className="text-green-500 animate-pulse">ACTIVE</span>
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
