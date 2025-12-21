import React from 'react';
import { Sparkles } from 'lucide-react';

interface ReputationScoreProps {
    score: number;
}

export const ReputationScore: React.FC<ReputationScoreProps> = ({ score }) => {
    const getColor = (s: number) => {
        if (s >= 90) return 'text-yellow-400 border-yellow-400/50 bg-yellow-400/10';
        if (s >= 70) return 'text-green-500 border-green-500/50 bg-green-500/10';
        if (s >= 50) return 'text-blue-500 border-blue-500/50 bg-blue-500/10';
        return 'text-gray-400 border-gray-400/50 bg-gray-400/10';
    };

    return (
        <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded border ${getColor(score)} font-mono text-xs`}>
            <Sparkles size={12} />
            <span className="font-bold">{score}</span>
        </div>
    );
};
