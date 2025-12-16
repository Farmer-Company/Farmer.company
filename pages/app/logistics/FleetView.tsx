import React, { useState } from 'react';
import { MapContainer } from '../../../components/platform/MapContainer';
import { Truck, MapPin, Clock, Thermometer } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const JobCard = ({ id, from, to, distance, eta, fee, onAccept }: any) => (
    <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-4 mb-4 hover:border-danube-blue transition-colors group">
        <div className="flex justify-between items-start mb-3">
            <div className="flex items-center space-x-2">
                <span className="text-white font-bold max-w-[150px] truncate">{from}</span>
                <span className="text-gray-500">→</span>
                <span className="text-white font-bold max-w-[150px] truncate">{to}</span>
            </div>
            <div className="bg-danube-blue/10 text-danube-blue text-xs font-mono px-2 py-1 rounded">
                {distance}
            </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-400 font-mono mb-4">
            <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                {eta}
            </div>
            <div className="flex items-center text-white font-bold">
                ₹ {fee}
            </div>
        </div>

        <Button className="w-full" onClick={onAccept}>Accept Load</Button>
    </div>
);

const TruckMarker = ({ id, status, temp }: any) => (
    <div className="flex items-center space-x-3 bg-black/80 backdrop-blur border border-white/10 p-2 rounded-lg mb-2">
        <div className={`p-2 rounded-full ${status === 'moving' ? 'bg-green-500/20 text-green-500' : 'bg-orange-500/20 text-orange-500'}`}>
            <Truck size={16} />
        </div>
        <div>
            <div className="text-white text-sm font-bold">{id}</div>
            <div className="text-gray-400 text-xs font-mono flex items-center">
                <Thermometer size={10} className="mr-1" /> {temp}°C
            </div>
        </div>
    </div>
);

export const FleetView = () => {
    const [activeTab, setActiveTab] = useState<'jobs' | 'fleet'>('jobs');

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col lg:flex-row gap-4">
            {/* Sidebar Panel */}
            <div className="w-full lg:w-96 flex flex-col space-y-4">
                <div className="flex bg-[#1A1A1A] p-1 rounded-lg border border-white/10">
                    <button
                        onClick={() => setActiveTab('jobs')}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'jobs' ? 'bg-danube-blue text-white shadow' : 'text-gray-500 hover:text-white'}`}
                    >
                        OPEN JOBS (3)
                    </button>
                    <button
                        onClick={() => setActiveTab('fleet')}
                        className={`flex-1 py-2 text-sm font-bold rounded-md transition-all ${activeTab === 'fleet' ? 'bg-danube-blue text-white shadow' : 'text-gray-500 hover:text-white'}`}
                    >
                        MY FLEET (2)
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto min-h-[300px]">
                    {activeTab === 'jobs' ? (
                        <>
                            <JobCard id="J-102" from="Nashik Farm A" to="Mumbai Market" distance="180km" eta="4h 30m" fee="4,500" />
                            <JobCard id="J-105" from="Pune Cluster" to="Navi Mumbai Port" distance="140km" eta="3h 15m" fee="3,200" />
                            <JobCard id="J-108" from="Nagpur Center" to="Hyderabad Hub" distance="420km" eta="8h 00m" fee="12,000" />
                        </>
                    ) : (
                        <div className="space-y-4">
                            <TruckMarker id="MH-12-FC-2025" status="moving" temp="4.2" />
                            <TruckMarker id="MH-14-FC-2026" status="stopped" temp="3.8" />
                        </div>
                    )}
                </div>
            </div>

            {/* Main Map */}
            <div className="flex-1 min-h-[400px] relative rounded-xl overflow-hidden border border-white/10">
                <MapContainer />

                {/* Route Overlay Mock */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur p-4 rounded-xl border border-white/10 max-w-xs">
                    <h4 className="text-white font-bold mb-2 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        Optimized Route Active
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Traffic avoidance system enabled. Saving 12 mins on current sector. Cold chain integrity: 100%.
                    </p>
                </div>
            </div>
        </div>
    );
};
