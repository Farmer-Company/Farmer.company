import React from 'react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="premium-hero-section">
            <div className="video-background">
                <img
                    src="/assets/hero-background.png"
                    alt="Digital Orchard"
                    className="absolute inset-0 w-full h-full object-cover ken-burns"
                />
                <div className="video-overlay"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="reveal-text">WELCOME</span>
                    <br />
                    <span className="reveal-text delay-1">TO THE</span>
                    <br />
                    <span className="reveal-text delay-2">ORCHARD</span>
                </h1>
                <div className="hero-subtitle-container reveal-text delay-3">
                    <p className="text-gray-400 mb-2 tracking-widest text-sm font-mono">
                        WE ARE BUILDING THE DIGITAL NERVOUS SYSTEM FOR GLOBAL AGRICULTURE
                    </p>
                    <p className="text-white text-xl md:text-2xl font-light leading-relaxed">
                        The Operating System for the <span className="font-medium text-green-500">Agricultural Economy</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};
