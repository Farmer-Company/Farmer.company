import React from 'react';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
    return (
        <section id="hero" className="premium-hero-section">
            <div className="video-background">
                {/* Placeholder for actual video source */}
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
                <p className="hero-subtitle reveal-text delay-3">
                    WE ARE BUILDING THE DIGITAL NERVOUS SYSTEM FOR GLOBAL AGRICULTURE
                </p>
            </div>
        </section>
    );
};
