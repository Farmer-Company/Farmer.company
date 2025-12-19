import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, TrendingDown, Package, Users, Clock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ProduceMarketplace.css';

type ViewMode = 'buyer' | 'seller';

interface ProduceItem {
    id: string;
    name: string;
    image: string;
    basePrice: number;
    unit: string;
    available: number;
    maxAvailable: number;
    quality: 'A+' | 'A' | 'B+';
    demand: 'High' | 'Medium' | 'Low';
    trend: number; // percentage change
}

const produceData: ProduceItem[] = [
    {
        id: 'watermelon',
        name: 'Watermelon',
        image: `${import.meta.env.BASE_URL}assets/watermelon.png`,
        basePrice: 35,
        unit: 'per kg',
        available: 3500,
        maxAvailable: 5000,
        quality: 'A+',
        demand: 'High',
        trend: 4.5
    },
    {
        id: 'coconut',
        name: 'Coconuts',
        image: `${import.meta.env.BASE_URL}assets/coconut.png`,
        basePrice: 45,
        unit: 'per 100 units',
        available: 8500,
        maxAvailable: 10000,
        quality: 'A+',
        demand: 'High',
        trend: 12.4
    },
    {
        id: 'mango',
        name: 'Mango',
        image: `${import.meta.env.BASE_URL}assets/mango.png`,
        basePrice: 120,
        unit: 'per kg',
        available: 6200,
        maxAvailable: 8000,
        quality: 'A',
        demand: 'High',
        trend: 8.7
    },
    {
        id: 'pineapple',
        name: 'Pineapple',
        image: `${import.meta.env.BASE_URL}assets/pineapple.png`,
        basePrice: 85,
        unit: 'per dozen',
        available: 4800,
        maxAvailable: 7000,
        quality: 'A+',
        demand: 'Medium',
        trend: 5.2
    }
];

export const ProduceMarketplace = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('buyer');
    const [isVisible, setIsVisible] = useState(false);
    const [prices, setPrices] = useState<Record<string, number>>({});
    const [marketStats, setMarketStats] = useState({
        volume: 24302,
        activeListings: 156,
        avgDelivery: 24
    });
    const sectionRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Initialize prices
    useEffect(() => {
        const initialPrices: Record<string, number> = {};
        produceData.forEach(item => {
            initialPrices[item.id] = item.basePrice;
        });
        setPrices(initialPrices);
    }, []);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
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

    // Simulate real-time price updates
    useEffect(() => {
        const interval = setInterval(() => {
            setPrices(prev => {
                const updated = { ...prev };
                produceData.forEach(item => {
                    const variance = (Math.random() - 0.5) * 5;
                    updated[item.id] = Math.max(
                        item.basePrice * 0.9,
                        Math.min(item.basePrice * 1.1, prev[item.id] + variance)
                    );
                });
                return updated;
            });

            setMarketStats(prev => ({
                volume: prev.volume + Math.floor(Math.random() * 100 - 20),
                activeListings: Math.max(100, prev.activeListings + Math.floor(Math.random() * 10 - 5)),
                avgDelivery: Math.max(18, Math.min(30, prev.avgDelivery + Math.floor(Math.random() * 3 - 1)))
            }));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleCTA = () => {
        if (viewMode === 'buyer') {
            navigate('/app/auth?role=buyer');
        } else {
            navigate('/app/auth?role=farmer');
        }
    };

    return (
        <section id="produce" className="produce-marketplace-section" ref={sectionRef}>
            {/* Animated Background */}
            <div className="marketplace-background">
                <div className="grid-pattern"></div>
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="floating-orb"
                        style={{
                            background: `radial-gradient(circle, ${viewMode === 'buyer' ? '#2962FF' : '#1DB954'}20, transparent)`,
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
            </div>

            <div className={`marketplace-container ${isVisible ? 'visible' : ''}`}>
                {/* Header Section */}
                <div className="marketplace-header">
                    <div className="header-content">
                        <h2 className="section-label">
                            <Package className="w-4 h-4" />
                            PRODUCE MARKETPLACE
                        </h2>
                        <h3 className="section-title">
                            {viewMode === 'buyer'
                                ? 'Source Premium Tropical Produce'
                                : 'List Your Harvest on the Exchange'}
                        </h3>
                        <p className="section-description">
                            {viewMode === 'buyer'
                                ? 'Connect directly with verified farmers. Real-time pricing, quality assurance, and transparent supply chains.'
                                : 'Reach buyers across the market. Fair pricing, instant payments, and optimized logistics.'}
                        </p>
                    </div>

                    {/* Mode Toggle */}
                    <div className="mode-toggle-container">
                        <span className="toggle-label">I am a:</span>
                        <div className="mode-toggle">
                            <button
                                className={`toggle-option ${viewMode === 'buyer' ? 'active' : ''}`}
                                onClick={() => setViewMode('buyer')}
                            >
                                <Users className="toggle-icon" />
                                Buyer
                            </button>
                            <button
                                className={`toggle-option ${viewMode === 'seller' ? 'active' : ''}`}
                                onClick={() => setViewMode('seller')}
                            >
                                <Package className="toggle-icon" />
                                Seller
                            </button>
                            <motion.div
                                className="toggle-slider"
                                animate={{
                                    x: viewMode === 'buyer' ? '0%' : '100%'
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        </div>
                    </div>
                </div>

                {/* Market Statistics */}
                <div className="market-stats">
                    <div className="stat-item">
                        <div className="stat-label">Market Volume</div>
                        <motion.div
                            className="stat-value"
                            key={marketStats.volume}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            {marketStats.volume.toLocaleString()} tons
                        </motion.div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-label">Active Listings</div>
                        <motion.div
                            className="stat-value"
                            key={marketStats.activeListings}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            {marketStats.activeListings}
                        </motion.div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-label">Avg. Delivery</div>
                        <motion.div
                            className="stat-value"
                            key={marketStats.avgDelivery}
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Clock className="inline-icon" />
                            {marketStats.avgDelivery}h
                        </motion.div>
                    </div>
                </div>

                {/* Produce Cards Grid */}
                <div className="produce-grid">
                    <AnimatePresence mode="wait">
                        {produceData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="produce-card"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                            >
                                {/* Card Header */}
                                <div className="card-header">
                                    <div className="produce-image-container">
                                        <img src={item.image} alt={item.name} className="produce-image" />
                                    </div>
                                    <div className="card-title-section">
                                        <h4 className="produce-name">{item.name}</h4>
                                        <span className={`quality-badge quality-${item.quality.replace('+', 'plus')}`}>
                                            Grade {item.quality}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Content - Changes based on view mode */}
                                <AnimatePresence mode="wait">
                                    {viewMode === 'buyer' ? (
                                        <motion.div
                                            key="buyer-view"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="card-content"
                                        >
                                            {/* Price */}
                                            <div className="price-section">
                                                <div className="price-label">Current Price</div>
                                                <motion.div
                                                    className="price-value"
                                                    key={prices[item.id]}
                                                    initial={{ scale: 1.1 }}
                                                    animate={{ scale: 1 }}
                                                >
                                                    ₹{prices[item.id]?.toFixed(2) || item.basePrice}
                                                    <span className="price-unit">/{item.unit}</span>
                                                </motion.div>
                                            </div>

                                            {/* Availability */}
                                            <div className="availability-section">
                                                <div className="availability-header">
                                                    <span className="availability-label">Available Now</span>
                                                    <span className="availability-amount">
                                                        {item.available.toLocaleString()} units
                                                    </span>
                                                </div>
                                                <div className="availability-bar">
                                                    <motion.div
                                                        className="availability-fill"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: `${(item.available / item.maxAvailable) * 100}%` }}
                                                        transition={{ duration: 1, delay: 0.3 }}
                                                    />
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <button className="card-cta buyer-cta" onClick={handleCTA}>
                                                Source Now
                                                <ArrowRight className="cta-icon" />
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="seller-view"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 20 }}
                                            className="card-content"
                                        >
                                            {/* Demand Indicator */}
                                            <div className="demand-section">
                                                <div className="demand-label">Market Demand</div>
                                                <div className={`demand-badge demand-${item.demand.toLowerCase()}`}>
                                                    {item.demand}
                                                </div>
                                            </div>

                                            {/* Trending Price */}
                                            <div className="trending-section">
                                                <div className="trending-label">Trending Price</div>
                                                <div className="trending-value">
                                                    <motion.span
                                                        className="trending-price"
                                                        key={prices[item.id]}
                                                        initial={{ scale: 1.1 }}
                                                        animate={{ scale: 1 }}
                                                    >
                                                        ₹{prices[item.id]?.toFixed(2) || item.basePrice}
                                                    </motion.span>
                                                    <span className={`trending-change ${item.trend >= 0 ? 'positive' : 'negative'}`}>
                                                        {item.trend >= 0 ? <TrendingUp className="trend-icon" /> : <TrendingDown className="trend-icon" />}
                                                        {Math.abs(item.trend).toFixed(1)}%
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Suggested Pricing */}
                                            <div className="suggestion-section">
                                                <div className="suggestion-label">Suggested Range</div>
                                                <div className="suggestion-range">
                                                    ₹{(item.basePrice * 0.95).toFixed(2)} - ₹{(item.basePrice * 1.05).toFixed(2)}
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <button className="card-cta seller-cta" onClick={handleCTA}>
                                                List Your Harvest
                                                <ArrowRight className="cta-icon" />
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="marketplace-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <p className="footer-text">
                        {viewMode === 'buyer'
                            ? 'Join thousands of buyers sourcing quality produce directly from verified farmers.'
                            : 'Join our network of farmers and get access to premium buyers across the market.'}
                    </p>
                    <button className="main-cta" onClick={handleCTA}>
                        {viewMode === 'buyer' ? 'Enter Marketplace' : 'Start Selling'}
                        <ArrowRight className="cta-icon" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
