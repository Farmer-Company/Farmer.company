import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { Sprout, Repeat, Truck, Cpu, Map, Mail, Menu, CheckCircle2 } from 'lucide-react';

export const Navigation = () => {
    const [activeSection, setActiveSection] = useState('');
    const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});

    // Items for the premium landing page navigation
    const navItems = [
        { label: 'Origin', id: 'origin', icon: <Sprout size={18} /> },
        { label: 'Exchange', id: 'exchange', icon: <Repeat size={18} /> },
        { label: 'RouteMaster', id: 'routemaster', icon: <Truck size={18} /> },
        { label: 'Technology', id: 'technology', icon: <Cpu size={18} /> },
        { label: 'Masterplan', id: 'masterplan', icon: <Map size={18} /> },
        { label: 'Contact', id: 'contact', icon: <Mail size={18} /> },
    ];

    // Map of section IDs to their parent nav item ID
    const sectionMap: Record<string, string> = {
        marketplace: 'exchange',
    };

    useEffect(() => {
        const handleScroll = () => {
            const newProgress: Record<string, number> = {};
            const viewportHeight = window.innerHeight;
            const scrollY = window.scrollY;

            // Track both direct IDs and map sources
            // actually, we basically need to track progress for every 'navItem' ID.
            // If a navItem has mapped sections (like exchange -> marketplace), we should consider them as part of the total height or the 'active' range.
            // For simplicity/robustness: We check the progress of the ELEMENT with the navItem.id. 
            // If 'marketplace' is visible, it contributes to 'exchange'. 
            // Let's stick to tracking the main IDs first.

            navItems.forEach(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + scrollY;
                    const elementHeight = rect.height;

                    // Calculate how much we've scrolled past the top of the element relative to the view
                    // Start filling when element top enters bottom of screen? Or center?
                    // User wants "reading" progress.
                    // Typically: 0% when top enters view, 100% when bottom leaves view? 
                    // Let's try: 0% when element header hits center, 100% when element bottom hits center.
                    // Or simpler: (scrollY + viewportHeight - elementTop) / elementHeight -- this fills as it enters.

                    // Let's use a "visible/read" metric:
                    // Progress = (scrollY + viewportHeight * 0.5 - elementTop) / elementHeight * 100
                    // This means passing the center line fills it.

                    let progress = ((scrollY + viewportHeight * 0.6 - elementTop) / elementHeight) * 100;

                    // Specific fix for "Exchange" to include marketplace? 
                    // If marketplace is part of exchange logically, we might want to extend the 'exchange' range.
                    // But simpler is: The 'id="exchange"' element usually only wraps the header content in PremiumHome. 
                    // Wait, in PremiumHome, 'exchange' is just a ContentSection, then comes ProduceMarketplace.
                    // Check PremiumHome again.
                    // 'exchange' is a ContentSection. 'marketplace' is `ProduceMarketplace`. 'routemaster' is next.
                    // So 'exchange' ID is SHORT. It doesn't contain the marketplace.
                    // We need to calculate progress across the WHOLE range (Exchange + Marketplace).

                    if (item.id === 'exchange') {
                        const marketEl = document.getElementById('marketplace');
                        if (marketEl) {
                            const marketRect = marketEl.getBoundingClientRect();
                            // Combined height
                            const totalHeight = (marketRect.bottom + scrollY) - elementTop;
                            progress = ((scrollY + viewportHeight * 0.6 - elementTop) / totalHeight) * 100;
                        }
                    }

                    newProgress[item.id] = Math.min(100, Math.max(0, progress));
                } else {
                    newProgress[item.id] = 0;
                }
            });

            setSectionProgress(newProgress);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const targetId = entry.target.id;
                        // specific logic: if marketplace is visible, highlight exchange
                        // if origin/routemaster/technology etc are visible, highlight them
                        const mappedId = sectionMap[targetId] || targetId;
                        setActiveSection(mappedId);
                    }
                });
            },
            {
                // Trigger when 40% of the element is visible, or when it crosses the center significantly
                threshold: 0.4,
                rootMargin: '-10% 0px -10% 0px'
            }
        );

        // Track both nav items and mapped sections
        const idsToTrack = [...navItems.map(item => item.id), ...Object.keys(sectionMap)];

        idsToTrack.forEach((id) => {
            const element = document.getElementById(id);
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

    const activeItem = navItems.find(item => item.id === activeSection);

    return (
        <nav className={`premium-navigation group ${activeSection ? 'active-pulse' : ''}`}>
            <div className="nav-logo cursor-pointer flex items-center gap-2" onClick={() => window.location.href = '/'}>
                {activeItem ? (

                    (() => {
                        const progress = sectionProgress[activeItem.id] || 0;
                        const isCompleted = progress >= 100;

                        return (
                            <>
                                <span
                                    className={`relative rounded-full p-1 transition-all duration-300 ${isCompleted ? 'text-green-400' : 'text-blue-400'}`}
                                    style={{
                                        background: !isCompleted
                                            ? `linear-gradient(to top, rgba(41, 98, 255, 0.3) ${progress}%, transparent ${progress}%)`
                                            : 'rgba(76, 175, 80, 0.1)'
                                    }}
                                >
                                    {isCompleted ? <CheckCircle2 size={18} /> : activeItem.icon}
                                </span>
                                <span className={isCompleted ? 'text-green-100' : 'text-blue-100'}>
                                    {activeItem.label}
                                </span>
                            </>
                        );
                    })()
                ) : (
                    <>
                        <Menu size={16} className="text-gray-400" />
                        FARMER.CO
                    </>
                )}
            </div>

            <ul className="nav-links">
                {navItems.map((item) => {
                    const progress = sectionProgress[item.id] || 0;
                    const isCompleted = progress >= 100;
                    const isActive = activeSection === item.id;
                    const isUpcoming = progress <= 0 && !isActive;

                    return (
                        <li key={item.label}>
                            <button
                                onClick={() => handleScroll(item.id)}
                                className={`relative overflow-hidden flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 group/item ${isActive
                                    ? 'text-white font-bold scale-110 shadow-[0_0_15px_rgba(41,98,255,0.3)]'
                                    : isCompleted
                                        ? 'text-green-400'
                                        : 'text-gray-500 hover:text-white hover:bg-white/5 hover:scale-105'
                                    }`}
                                style={{
                                    // Filling effect
                                    background: isActive
                                        ? `linear-gradient(to top, rgba(41, 98, 255, 0.2) ${progress}%, rgba(41, 98, 255, 0.05) ${progress}%)`
                                        : isCompleted
                                            ? 'rgba(76, 175, 80, 0.1)'
                                            : 'transparent'
                                }}
                            >
                                {/* Progress Bar Background for granular fill visibility even when distinct */}
                                {isActive && (
                                    <div
                                        className="absolute bottom-0 left-0 right-0 bg-blue-500/20 pointer-events-none transition-all duration-100 ease-linear"
                                        style={{ height: `${progress}%`, zIndex: 0 }}
                                    />
                                )}

                                <span className="relative z-10 transition-transform duration-300 group-hover/item:scale-110 group-active/item:scale-95">
                                    {isCompleted ? <CheckCircle2 size={18} /> : item.icon}
                                </span>
                                <span className="relative z-10 text-xs tracking-wide">{item.label}</span>
                            </button>
                        </li>
                    );
                })}
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
