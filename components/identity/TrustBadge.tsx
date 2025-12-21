import React from 'react';
import { CheckCircle, ShieldCheck, Zap, Leaf } from 'lucide-react';

export type BadgeType = 'verified' | 'top_seller' | 'organic' | 'fast_shipper';

interface TrustBadgeProps {
    type: string;
}

const badgeConfig: Record<string, { label: string; icon: React.ReactNode; color: string }> = {
    verified: { label: 'Verified', icon: <CheckCircle size={10} />, color: 'bg-blue-600' },
    top_seller: { label: 'Top Seller', icon: <Zap size={10} />, color: 'bg-yellow-600' },
    organic: { label: 'Organic', icon: <Leaf size={10} />, color: 'bg-green-600' },
    fast_shipper: { label: 'Fast Shipper', icon: <ShieldCheck size={10} />, color: 'bg-purple-600' },
};

export const TrustBadge: React.FC<TrustBadgeProps> = ({ type }) => {
    const config = badgeConfig[type] || { label: type, icon: null, color: 'bg-gray-600' };

    return (
        <div className={`inline-flex items-center gap-1 ${config.color} text-white text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider mr-1`}>
            {config.icon}
            <span>{config.label}</span>
        </div>
    );
};
