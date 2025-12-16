import React from 'react';
import { MapContainer } from '../../../components/platform/MapContainer';
import { OrderBook } from './OrderBook';
import { Search } from 'lucide-react';

export const Market = () => {
    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
            {/* Toolbar */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white">The Exchange</h1>
                    <p className="text-gray-500 font-mono text-xs">GLOBAL SUPPLY VISUALIZATION</p>
                </div>
                <div className="relative w-64">
                    <input
                        type="text"
                        placeholder="Search Lot ID or Region..."
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-danube-blue"
                    />
                    <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>
            </div>

            {/* Main Grid */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-0">
                <div className="lg:col-span-2 h-full min-h-[400px]">
                    <MapContainer />
                </div>
                <div className="h-full min-h-[400px]">
                    <OrderBook />
                </div>
            </div>
        </div>
    );
};
