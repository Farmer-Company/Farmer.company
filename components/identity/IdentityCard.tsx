import React from 'react';
import { User } from '../../types';
import { MapPin, Calendar, Activity } from 'lucide-react';
import { TrustBadge } from './TrustBadge';
import { ReputationScore } from './ReputationScore';

interface IdentityCardProps {
    user: User;
    showBio?: boolean;
}

export const IdentityCard: React.FC<IdentityCardProps> = ({ user, showBio = true }) => {
    return (
        <div className="bg-[#111] border border-white/10 rounded-xl p-4 w-full max-w-sm relative group overflow-hidden">
            {/* Holographic effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={user.avatar_url || `https://ui-avatars.com/api/?name=${user.name}&background=random`}
                        alt={user.name}
                        className="w-12 h-12 rounded-lg border border-white/20 object-cover"
                    />
                    <div>
                        <h3 className="text-white font-bold font-sans text-lg leading-tight flex items-center gap-2">
                            {user.name}
                            {user.is_verified && <TrustBadge type="verified" />}
                        </h3>
                        <p className="text-xs text-danube-blue font-mono uppercase tracking-wider">{user.role}</p>
                    </div>
                </div>
                {user.reputation_score !== undefined && <ReputationScore score={user.reputation_score} />}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 mb-4 text-xs font-mono">
                <div className="bg-black/40 p-2 rounded border border-white/5">
                    <div className="text-gray-500 mb-1 flex items-center gap-1">
                        <MapPin size={10} /> LOCATION
                    </div>
                    <div className="text-white truncate">
                        {user.address || 'Unknown Region'}
                    </div>
                </div>
                <div className="bg-black/40 p-2 rounded border border-white/5">
                    <div className="text-gray-500 mb-1 flex items-center gap-1">
                        <Activity size={10} /> VOLUME
                    </div>
                    <div className="text-white">
                        {user.total_volume_kg ? `${user.total_volume_kg} KG` : 'N/A'}
                    </div>
                </div>
            </div>

            {/* Badges */}
            {user.badges && user.badges.length > 0 && (
                <div className="mb-4">
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-2 font-mono">CERTIFICATIONS</div>
                    <div className="flex flex-wrap gap-y-2">
                        {user.badges.map(badge => (
                            <TrustBadge key={badge} type={badge} />
                        ))}
                    </div>
                </div>
            )}

            {/* Bio */}
            {showBio && user.bio && (
                <div className="text-sm text-gray-400 border-t border-white/5 pt-3 mt-2 font-sans leading-relaxed">
                    "{user.bio}"
                </div>
            )}

            <div className="mt-3 flex items-center justify-between text-[10px] text-gray-600 font-mono">
                <span className="flex items-center gap-1">
                    <Calendar size={10} /> JOINED {new Date(user.created_at).toLocaleDateString()}
                </span>
                <span>ID: {user.id.slice(0, 8)}</span>
            </div>
        </div>
    );
};
