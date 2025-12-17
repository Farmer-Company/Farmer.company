import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { Sprout, Repeat, Truck, Cpu, Map, Mail, Menu } from 'lucide-react';

export const Navigation = () => {
    const [activeSection, setActiveSection] = useState('');

    // Items for the premium landing page navigation
    const navItems = [
        { label: 'Origin', id: 'origin', icon: <Sprout size={18} /> },
        { label: 'Exchange', id: 'exchange', icon: <Repeat size={18} /> },
        { label: 'RouteMaster', id: 'routemaster', icon: <Truck size={18} /> },
        { label: 'Technology', id: 'technology', icon: <Cpu size={18} /> },
        { label: 'Masterplan', id: 'masterplan', icon: <Map size={18} /> },
        { label: 'Contact', id: 'contact', icon: <Mail size={18} /> },
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
            <div className="nav-logo cursor-pointer flex items-center gap-2" onClick={() => window.location.href = '/'}>
                <Menu size={16} className="text-gray-400" />
                FARMER.CO
            </div>

            <ul className="nav-links">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <button
                            onClick={() => handleScroll(item.id)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 group/item ${activeSection === item.id
                                ? 'bg-white/10 text-white font-bold scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                                : 'text-gray-400 hover:text-white hover:bg-white/5 hover:scale-105'
                                }`}
                        >
                            <span className="transition-transform duration-300 group-hover/item:scale-110 group-active/item:scale-95">
                                {item.icon}
                            </span>
                            <span className="text-xs tracking-wide">{item.label}</span>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="nav-auth-container flex items-center gap-6">
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
