import React from 'react';
import { MapContainer } from '../../../components/platform/MapContainer';
import { OrderBook } from './OrderBook';
import { Search } from 'lucide-react';

const TickerItem = ({ symbol, price, change }: { symbol: string, price: string, change: number }) => (
    <div className="flex items-center gap-2 px-4 border-r border-white/10 shrink-0">
        <span className="font-bold text-white font-mono">{symbol}</span>
        <span className="text-gray-400 text-xs">₹{price}</span>
        <span className={`text-xs font-mono flex items-center ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0 ? '▲' : '▼'} {Math.abs(change)}%
        </span>
    </div>
);

const TickerTape = () => (
    <div className="w-full bg-black border-b border-white/10 h-8 flex items-center overflow-hidden whitespace-nowrap relative">
        <div className="flex animate-scroll-left hover:pause-animation">
            <TickerItem symbol="POM-A" price="135.00" change={2.4} />
            <TickerItem symbol="GRP-B" price="85.50" change={-0.8} />
            <TickerItem symbol="PAP-S" price="42.00" change={0.0} />
            <TickerItem symbol="TOM-H" price="12.00" change={5.2} />
            <TickerItem symbol="ONI-R" price="22.50" change={-1.2} />
            <TickerItem symbol="POT-L" price="18.00" change={0.5} />
            <TickerItem symbol="WHT-D" price="2100.00" change={0.1} />
            <TickerItem symbol="RIC-B" price="4500.00" change={1.5} />
            {/* Duplicate for infinite scroll */}
            <TickerItem symbol="POM-A" price="135.00" change={2.4} />
            <TickerItem symbol="GRP-B" price="85.50" change={-0.8} />
            <TickerItem symbol="PAP-S" price="42.00" change={0.0} />
            <TickerItem symbol="TOM-H" price="12.00" change={5.2} />
            <TickerItem symbol="ONI-R" price="22.50" change={-1.2} />
            <TickerItem symbol="POT-L" price="18.00" change={0.5} />
        </div>
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
    </div>
);

export const Market = () => {
    return (
        <div className="h-[calc(100vh-4rem)] flex flex-col bg-black">
            <TickerTape />

            <div className="p-6 flex-1 flex flex-col space-y-6 min-h-0">
                {/* Toolbar */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold text-white font-sans flex items-center gap-2">
                            The Exchange
                            <span className="bg-blue-600/20 text-blue-400 border border-blue-500/50 text-xs px-2 py-0.5 rounded-full uppercase tracking-wider font-mono">
                                LIVE
                            </span>
                        </h1>
                        <p className="text-gray-500 font-mono text-xs mt-1">GLOBAL MARKETPLACE • V3.1.0 • CONNECTED</p>
                    </div>
                    <div className="relative w-72 group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 group-hover:opacity-100 transition duration-500 blur"></div>
                        <input
                            type="text"
                            placeholder="SEARCH LOT ID / REGION"
                            className="relative w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none placeholder-gray-600 font-mono tracking-wide"
                        />
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Main Grid */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0 pb-6">
                    <div className="lg:col-span-2 h-full min-h-[400px] border border-white/10 rounded-xl overflow-hidden relative group">
                        <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur border border-white/10 px-3 py-1 rounded text-xs font-mono text-gray-300">
                            LIVE FLEET TRACKING
                        </div>
                        <MapContainer />
                    </div>
                    <div className="h-full min-h-[400px]">
                        <OrderBook />
                    </div>
                </div>
            </div>
        </div>
    );
};
