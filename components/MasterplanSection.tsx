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
        <section id="masterplan" className="py-20 bg-black text-white px-2 relative overflow-hidden">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-500 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            opacity: 0.2
                        }}
                        animate={{
                            y: [null, Math.random() * window.innerHeight],
                            opacity: [0.2, 0.5, 0.2]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-24">
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase block mb-6"
                    >
                        The Masterplan
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-bold font-sans max-w-3xl leading-none tracking-tight"
                    >
                        Scaling sustainable agriculture for a{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                            hungry planet
                        </span>.
                    </motion.h2>
                </div>

                {/* Interactive Timeline */}
                <div className="relative">
                    {/* Vertical Timeline Line (Mobile) */}
                    <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-600"></div>

                    {/* Horizontal Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5">
                        <motion.div
                            className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-600"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            style={{ transformOrigin: "left" }}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
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
                                    className="relative"
                                    onHoverStart={() => setHoveredPhase(index)}
                                    onHoverEnd={() => setHoveredPhase(null)}
                                >
                                    {/* Timeline Node */}
                                    <motion.div
                                        className="absolute md:top-[5.5rem] top-0 md:left-1/2 left-8 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-20"
                                        style={{ backgroundColor: item.color }}
                                        animate={{
                                            scale: isHovered ? 1.5 : 1,
                                            boxShadow: isHovered
                                                ? `0 0 20px ${item.color}`
                                                : `0 0 10px ${item.color}80`
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                            animate={{
                                                scale: [1, 1.5, 1],
                                                opacity: [0.5, 0, 0.5]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </motion.div>

                                    {/* Phase Card */}
                                    <motion.div
                                        className="relative bg-gradient-to-br from-neutral-900 to-black border rounded-2xl p-6 md:p-8 cursor-pointer overflow-hidden md:ml-0 ml-16"
                                        style={{
                                            borderColor: isHovered ? item.color : '#333',
                                        }}
                                        animate={{
                                            boxShadow: isHovered
                                                ? `0 20px 60px ${item.color}30`
                                                : '0 10px 30px rgba(0,0,0,0.5)'
                                        }}
                                        onClick={() => setExpandedPhase(isExpanded ? null : index)}
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Gradient Overlay */}
                                        <motion.div
                                            className="absolute inset-0 opacity-0"
                                            style={{
                                                background: `radial-gradient(circle at top right, ${item.color}15, transparent 70%)`
                                            }}
                                            animate={{ opacity: isHovered ? 1 : 0 }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Header */}
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="flex items-center gap-4">
                                                    <motion.div
                                                        className="w-16 h-16 rounded-xl flex items-center justify-center"
                                                        style={{
                                                            backgroundColor: `${item.color}20`,
                                                            border: `2px solid ${item.color}40`
                                                        }}
                                                        animate={{
                                                            rotate: isHovered ? 360 : 0
                                                        }}
                                                        transition={{ duration: 0.6 }}
                                                    >
                                                        <Icon size={32} style={{ color: item.color }} />
                                                    </motion.div>
                                                    <span className="text-6xl font-light text-white/20 font-sans">
                                                        {item.phase}
                                                    </span>
                                                </div>
                                                <span
                                                    className="font-mono text-sm px-3 py-1 rounded-full"
                                                    style={{
                                                        backgroundColor: `${item.color}20`,
                                                        color: item.color,
                                                        border: `1px solid ${item.color}40`
                                                    }}
                                                >
                                                    {item.year}
                                                </span>
                                            </div>

                                            <h3
                                                className="text-2xl md:text-3xl font-bold mb-4 font-sans"
                                                style={{ color: item.color }}
                                            >
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-6">
                                                {item.description}
                                            </p>

                                            {/* Metrics */}
                                            <div className="grid grid-cols-3 gap-4 mb-4">
                                                {Object.entries(item.metrics).map(([key, value]) => (
                                                    <div key={key} className="text-center">
                                                        <div
                                                            className="text-xl md:text-2xl font-bold mb-1"
                                                            style={{ color: item.color }}
                                                        >
                                                            {value}
                                                        </div>
                                                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                                                            {key}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Expand Button */}
                                            <motion.button
                                                className="flex items-center gap-2 text-sm font-mono mt-4"
                                                style={{ color: item.color }}
                                                whileHover={{ gap: '12px' }}
                                            >
                                                <span>{isExpanded ? 'Show Less' : 'View Details'}</span>
                                                <motion.div
                                                    animate={{ rotate: isExpanded ? 90 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ChevronRight size={16} />
                                                </motion.div>
                                            </motion.button>

                                            {/* Expanded Details */}
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="mt-6 pt-6 border-t border-gray-800">
                                                            <h4 className="text-sm font-mono text-gray-500 mb-4 uppercase tracking-wider">
                                                                Key Features
                                                            </h4>
                                                            <div className="space-y-3">
                                                                {item.details.map((detail, i) => (
                                                                    <motion.div
                                                                        key={i}
                                                                        initial={{ x: -20, opacity: 0 }}
                                                                        animate={{ x: 0, opacity: 1 }}
                                                                        transition={{ delay: i * 0.1 }}
                                                                        className="flex items-center gap-3"
                                                                    >
                                                                        <CheckCircle2
                                                                            size={16}
                                                                            style={{ color: item.color }}
                                                                        />
                                                                        <span className="text-gray-300 text-sm">
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
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-3 bg-neutral-900 border border-gray-800 rounded-full px-6 py-3">
                        <div className="flex gap-2">
                            {phases.map((phase, i) => (
                                <motion.div
                                    key={i}
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: phase.color }}
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.3
                                    }}
                                />
                            ))}
                        </div>
                        <span className="text-sm font-mono text-gray-400">
                            Building the Future
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
