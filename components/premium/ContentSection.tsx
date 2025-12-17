import React, { useEffect, useRef, useState } from 'react';
import './ContentSection.css';
import { useNavigate } from 'react-router-dom';

interface ContentSectionProps {
    id: string;
    title: string;
    text: string;
    subtext?: string;
    align?: 'left' | 'center' | 'right';
    ctaLabel?: string;
    ctaLink?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ id, title, text, subtext, align = 'left', ctaLabel, ctaLink }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const handleCtaClick = () => {
        if (ctaLink) {
            if (ctaLink.startsWith('http')) {
                window.location.href = ctaLink;
            } else {
                navigate(ctaLink);
            }
        }
    };

    return (
        <section id={id} className={`premium-content-section align-${align}`} ref={sectionRef}>
            <div className={`content-container ${isVisible ? 'visible' : ''}`}>
                <h2 className="section-title">{title}</h2>
                <p className="section-text">{text}</p>
                {subtext && <p className="section-subtext">{subtext}</p>}

                {ctaLabel && (
                    <button className="premium-cta-button" onClick={handleCtaClick}>
                        {ctaLabel}
                    </button>
                )}
            </div>
        </section>
    );
};
