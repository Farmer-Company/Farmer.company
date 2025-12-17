import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
    className?: string;
    size?: number;
    text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className = "", size = 48, text = "Loading..." }) => {
    return (
        <div className={`flex flex-col items-center justify-center min-h-[50vh] w-full text-danube-blue ${className}`}>
            <Loader2 className="animate-spin mb-4" size={size} />
            {text && <p className="text-gray-500 font-mono text-sm animate-pulse">{text}</p>}
        </div>
    );
};
