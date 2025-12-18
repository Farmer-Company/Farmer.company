import React from 'react';
import { CheckCircle, Shield, Truck } from 'lucide-react';
import './VerificationBadge.css';

export type VerificationLevel = 'verified' | 'pending' | 'unverified';
export type UserRole = 'farmer' | 'buyer' | 'logistics';

interface VerificationBadgeProps {
    role: UserRole;
    level: VerificationLevel;
    showTooltip?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const roleConfig = {
    farmer: {
        label: 'Verified Farmer',
        icon: CheckCircle,
        color: '#1DB954',
        description: 'Government ID, farm location, and land ownership verified'
    },
    buyer: {
        label: 'Verified Buyer',
        icon: Shield,
        color: '#2962FF',
        description: 'Business registration and GST/Tax ID verified'
    },
    logistics: {
        label: 'Certified Logistics',
        icon: Truck,
        color: '#8A2BE2',
        description: 'Vehicle registration, driver license, and insurance verified'
    }
};

export const VerificationBadge: React.FC<VerificationBadgeProps> = ({
    role,
    level,
    showTooltip = true,
    size = 'medium'
}) => {
    const config = roleConfig[role];
    const Icon = config.icon;

    if (level === 'unverified') {
        return null;
    }

    return (
        <div className={`verification-badge verification-${level} size-${size}`}>
            <Icon
                className="badge-icon"
                style={{ color: level === 'verified' ? config.color : '#888' }}
            />
            <span className="badge-label">
                {level === 'verified' ? config.label : 'Pending Verification'}
            </span>
            {showTooltip && (
                <div className="badge-tooltip">
                    <div className="tooltip-title">{config.label}</div>
                    <div className="tooltip-description">
                        {level === 'verified'
                            ? config.description
                            : 'Verification in progress. Documents under review.'}
                    </div>
                </div>
            )}
        </div>
    );
};
