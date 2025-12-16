import React from 'react';
import { ArrowUpRight, ArrowDownRight, Filter } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

const OrderRow = ({ id, crop, grade, qty, price, time, change }: any) => (
    <div className="grid grid-cols-6 gap-4 p-3 border-b border-white/5 hover:bg-white/5 transition-colors text-sm font-mono cursor-pointer">
        <div className="text-gray-400">#{id}</div>
        <div className="text-white font-sans font-bold">{crop}</div>
        <div className="text-gray-300">{grade}</div>
        <div className="text-white">{qty} T</div>
        <div className="text-danube-blue">₹ {price}</div>
        <div className={`flex items-center ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
            {change > 0 ? <ArrowUpRight size={12} className="mr-1" /> : <ArrowDownRight size={12} className="mr-1" />}
            {Math.abs(change)}%
        </div>
    </div>
);

export const OrderBook = () => {
    return (
        <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden h-full flex flex-col">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/20">
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Live Order Book</h3>
                <Button size="sm" variant="outline" className="h-8 text-xs border-white/20 text-gray-400">
                    <Filter size={12} className="mr-2" /> FILTER
                </Button>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 p-3 border-b border-white/10 bg-black/40 text-xs font-mono text-gray-500 uppercase">
                <div>ID</div>
                <div>CROP</div>
                <div>GRADE</div>
                <div>QTY</div>
                <div>ASK (KG)</div>
                <div>24H</div>
            </div>

            {/* Table Body - Scrollable */}
            <div className="flex-1 overflow-y-auto">
                <OrderRow id="3920" crop="Pomegranate" grade="A (Premium)" qty="12" price="135.00" time="2m ago" change={2.4} />
                <OrderRow id="3921" crop="Grapes (B)" grade="A" qty="5" price="85.50" time="5m ago" change={-0.8} />
                <OrderRow id="3922" crop="Papaya" grade="Standard" qty="20" price="42.00" time="8m ago" change={0.0} />
                <OrderRow id="3924" crop="Pomegranate" grade="B" qty="8" price="110.00" time="12m ago" change={1.2} />
                <OrderRow id="3925" crop="Grapes (T)" grade="Premium" qty="15" price="98.00" time="15m ago" change={5.1} />
                <OrderRow id="3920" crop="Pomegranate" grade="A (Premium)" qty="12" price="135.00" time="2m ago" change={2.4} />
                <OrderRow id="3921" crop="Grapes (B)" grade="A" qty="5" price="85.50" time="5m ago" change={-0.8} />
                <OrderRow id="3922" crop="Papaya" grade="Standard" qty="20" price="42.00" time="8m ago" change={0.0} />
                <OrderRow id="3924" crop="Pomegranate" grade="B" qty="8" price="110.00" time="12m ago" change={1.2} />
                <OrderRow id="3925" crop="Grapes (T)" grade="Premium" qty="15" price="98.00" time="15m ago" change={5.1} />
            </div>
        </div>
    );
};
