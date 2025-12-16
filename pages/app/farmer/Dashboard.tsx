import React from 'react';
import { Plus, TrendingUp, Package, DollarSign } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const StatCard = ({ icon: Icon, label, value, trend }: { icon: any, label: string, value: string, trend?: string }) => (
    <div className="bg-[#1A1A1A] border border-white/10 p-6 rounded-xl">
        <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-white/5 rounded-lg text-danube-blue">
                <Icon size={24} />
            </div>
            {trend && <span className="text-green-500 text-xs font-mono bg-green-500/10 px-2 py-1 rounded">{trend}</span>}
        </div>
        <div className="text-gray-400 text-sm font-mono mb-1">{label}</div>
        <div className="text-3xl font-bold text-white">{value}</div>
    </div>
);

const ListingRow = ({ date, crop, quantity, status, grade }: { date: string, crop: string, quantity: string, status: string, grade: string }) => (
    <div className="flex items-center justify-between p-4 border-b border-white/5 hover:bg-white/5 transition-colors">
        <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-xl">
                {crop === 'Pomegranate' ? '🍅' : '🍇'}
            </div>
            <div>
                <div className="text-white font-medium">{crop}</div>
                <div className="text-gray-500 text-xs font-mono">{date}</div>
            </div>
        </div>
        <div className="text-white font-mono">{quantity}</div>
        <div className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-gray-300">{grade}</div>
        <div className={`text-xs font-mono px-3 py-1 rounded-full ${status === 'Live' ? 'bg-green-500/20 text-green-500' :
                status === 'Sold' ? 'bg-danube-blue/20 text-danube-blue' : 'bg-gray-800 text-gray-400'
            }`}>
            {status}
        </div>
    </div>
);

export const FarmerDashboard = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            {/* Header Actions */}
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">Origin Dashboard</h1>
                    <p className="text-gray-500 font-mono text-sm">WELCOME BACK, RANCHER Verify active listings and earnings.</p>
                </div>
                <Link to="/app/farmer/new-listing">
                    <Button className="pl-4 pr-6">
                        <Plus size={18} className="mr-2" /> New Harvest
                    </Button>
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard icon={DollarSign} label="TOTAL REVENUE (YTD)" value="₹ 24,50,000" trend="+12%" />
                <StatCard icon={Package} label="ACTIVE TONNAGE" value="45 Tons" trend="Live Marketing" />
                <StatCard icon={TrendingUp} label="AVG. PRICE / KG" value="₹ 142.50" trend="+5% vs Mkt" />
            </div>

            {/* Active Listings Table */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden">
                <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h3 className="font-bold text-white">Recent Listings</h3>
                    <span className="text-xs text-danube-blue font-mono cursor-pointer hover:underline">VIEW ALL</span>
                </div>
                <div>
                    <ListingRow date="Today, 09:41 AM" crop="Pomegranate" quantity="12 Tons" grade="Grade A" status="Live" />
                    <ListingRow date="Yesterday" crop="Grapes (Thompson)" quantity="8 Tons" grade="Grade B+" status="Negotiating" />
                    <ListingRow date="Dec 12, 2025" crop="Pomegranate" quantity="20 Tons" grade="Premium" status="Sold" />
                </div>
            </div>
        </div>
    );
};
