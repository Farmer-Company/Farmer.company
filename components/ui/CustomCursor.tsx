import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [cursorMode, setCursorMode] = useState<'scanner' | 'hex'>('scanner');
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for Cursor Mode Context
            const cursorContext = target.closest('[data-cursor-style]');
            if (cursorContext) {
                const mode = cursorContext.getAttribute('data-cursor-style');
                setCursorMode(mode as 'scanner' | 'hex');
            } else {
                setCursorMode('scanner');
            }

            // Hover Detection
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                target.classList.contains('clickable')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Common Positioner */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center placeholder-gray-100"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    width: 0,
                    height: 0
                }}
            >
                {/* --- MODE A: SCANNER (Crosshair) --- */}
                {cursorMode === 'scanner' && (
                    <>
                        <div className={`absolute h-[1px] bg-white transition-all duration-300 ${isHovering ? 'w-8' : 'w-4'}`} />
                        <div className={`absolute w-[1px] bg-white transition-all duration-300 ${isHovering ? 'h-8' : 'h-4'}`} />
                    </>
                )}

                {/* --- MODE B: HEX-NET (Hexagon Grid) --- */}
                {cursorMode === 'hex' && (
                    <>
                        <svg width="40" height="40" viewBox="0 0 100 100" className={`absolute transition-all duration-500 ${isHovering ? 'scale-150 rotate-90' : 'scale-100'}`}>
                            {/* Central Hex */}
                            <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" fill="none" stroke="#8A2BE2" strokeWidth="4" className="opacity-80" />

                            {/* Satellites (Visible on Hover) */}
                            <motion.g animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.5 }} transition={{ duration: 0.3 }}>
                                <path d="M50 -10 L65 0 L65 15 L50 25 L35 15 L35 0 Z" fill="currentColor" className="text-purple-400" />
                                <path d="M95 65 L110 75 L110 90 L95 100 L80 90 L80 75 Z" fill="currentColor" className="text-purple-400" />
                                <path d="M5 65 L20 75 L20 90 L5 100 L-10 90 L-10 75 Z" fill="currentColor" className="text-purple-400" />
                            </motion.g>
                        </svg>
                    </>
                )}
            </motion.div>

            {/* Trailing Elements & Labels */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                }}
            >
                {/* Scanner Data Label */}
                {cursorMode === 'scanner' && (
                    <>
                        <div className={`absolute top-4 left-4 flex flex-col gap-0.5 pointer-events-none transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-40'}`}>
                            <div className="flex items-center gap-2">
                                <span className="h-1 w-1 bg-danube-blue rounded-full animate-pulse"></span>
                                <span className="text-[10px] font-mono text-white tracking-widest uppercase">
                                    {isHovering ? 'TARGET_LOCKED' : 'SYSTEM_READY'}
                                </span>
                            </div>
                        </div>
                        <motion.div
                            className="absolute -top-4 -left-4 w-8 h-8 border border-danube-blue/50 pointer-events-none transition-all duration-300"
                            initial={false}
                            animate={{
                                scale: isHovering ? 1.5 : 0.8,
                                opacity: isHovering ? 1 : 0,
                                rotate: isHovering ? 45 : 0
                            }}
                        />
                    </>
                )}

                {/* Hex Mode Data Label */}
                {cursorMode === 'hex' && (
                    <div className={`absolute top-6 -left-20 flex flex-col items-end gap-0.5 pointer-events-none transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                        <span className="text-[8px] font-mono text-purple-400 tracking-widest uppercase">
                            NET_OP: ACTIVE
                        </span>
                    </div>
                )}
            </motion.div>
        </>
    );
};
