import React from 'react';
import { MapPin } from 'lucide-react';

// NOTE: In a real implementation, we would use 'react-map-gl' here with an API Key.
// For this demo/MVP without a key, we'll build a "Sarla-style" aesthetic map placeholder
// using CSS/Canvas concepts to simulate the "Mission Control" look.

const SupplyDot = ({ lat, lon, type }: { lat: number, lon: number, type: 'active' | 'pending' }) => (
    <div
        className={`absolute w-3 h-3 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse cursor-pointer group z-10 ${type === 'active' ? 'bg-danube-blue shadow-[0_0_10px_rgba(91,158,200,0.8)]' : 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.8)]'}`}
        style={{ top: `${lat}%`, left: `${lon}%` }}
    >
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black border border-white/20 text-white text-xs p-2 rounded whitespace-nowrap z-20">
            <div className="font-bold">Nashik Cluster</div>
            <div className="font-mono text-gray-400">12 Tons Available</div>
        </div>
    </div>
);

export const MapContainer = () => {
    return (
        <div className="w-full h-full relative bg-[#050505] overflow-hidden rounded-xl border border-white/10 group">
            {/* Map Grid / Topography placeholder */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0'
                }}>
            </div>

            {/* World/Region Silhouette Mock (Abstract shapes for effect) */}
            {/* India-ish shape approximation for demo vibe */}
            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] opacity-10" viewBox="0 0 100 100">
                <path d="M50,10 L60,30 L70,40 L60,80 L40,80 L30,50 L40,20 Z" fill="#ffffff" />
            </svg>

            {/* Simulated Data Points */}
            <SupplyDot lat={30} lon={40} type="active" />
            <SupplyDot lat={45} lon={50} type="active" />
            <SupplyDot lat={55} lon={45} type="active" />
            <SupplyDot lat={60} lon={60} type="pending" />

            {/* UI Overlay */}
            <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-white/10 p-3 rounded-lg">
                <div className="text-xs font-mono text-gray-400 mb-1">LIVE FEED</div>
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-danube-blue rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-bold">4 REGIONS ONLINE</span>
                </div>
            </div>

            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur border border-white/10 p-2 rounded-lg flex space-x-2">
                <button className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded">+</button>
                <button className="w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded">-</button>
            </div>

        </div>
    );
};
