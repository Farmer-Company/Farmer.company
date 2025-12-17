import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
    const [activeSection, setActiveSection] = useState('');

    // Items for the premium landing page navigation
    const navItems = [
        { label: 'Origin', id: 'origin' },
        { label: 'Exchange', id: 'exchange' },
        { label: 'RouteMaster', id: 'routemaster' },
        { label: 'Technology', id: 'technology' },
        { label: 'Masterplan', id: 'masterplan' },
        { label: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px' // Trigger when element is in middle of screen
            }
        );

        navItems.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="premium-navigation group">
            <div className="nav-logo cursor-pointer" onClick={() => window.location.href = '/'}>
                FARMER.CO
            </div>

            <ul className="nav-links">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <button
                            onClick={() => handleScroll(item.id)}
                            className={`transition-all duration-300 ${activeSection === item.id
                                    ? 'text-white font-bold scale-110'
                                    : 'text-gray-500 hover:text-white'
                                }`}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-6">
                <div className="nav-auth" onClick={() => window.location.href = '/app/auth'}>
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    GUEST_USER
                </div>

                <div className="live-indicator hidden md:flex">
                    <span className="dot"></span>
                    Ecosystem Live
                </div>
            </div>
        </nav>
    );
};
