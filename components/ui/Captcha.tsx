import React, { useState } from 'react';
import { ShieldCheck, Loader2 } from 'lucide-react';

interface CaptchaProps {
    onVerify: () => void;
}

export const Captcha: React.FC<CaptchaProps> = ({ onVerify }) => {
    const [verified, setVerified] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleVerify = () => {
        if (verified || loading) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVerified(true);
            onVerify();
        }, 1500); // Simulate network delay
    };

    return (
        <div
            className="bg-[#222] border border-gray-700 rounded-lg p-3 flex items-center justify-between w-full max-w-sm mx-auto cursor-pointer hover:bg-[#2a2a2a] transition-colors"
            onClick={handleVerify}
        >
            <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded border flex items-center justify-center transition-colors ${verified ? 'bg-green-500 border-green-500' : 'bg-white border-gray-400'}`}>
                    {loading ? (
                        <Loader2 size={14} className="animate-spin text-gray-500" />
                    ) : verified ? (
                        <ShieldCheck size={16} className="text-white" />
                    ) : null}
                </div>
                <span className="text-sm text-gray-300">
                    {verified ? 'Success!' : 'Verify you are human'}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-orange-500" fill="currentColor">
                            <path d="M11.66 2.05L2.1 12H11L10.3 22.05L21.9 12H11.66V2.05Z" />
                        </svg>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">CLOUDFLARE</span>
                </div>
            </div>
        </div>
    );
};
