import React from 'react';
import { Link } from 'react-router-dom';
import { MobileLoginForm } from './MobileAuth';

export const Auth = () => {
    return (
        <div className="min-h-screen bg-[#0E0E0E] flex items-center justify-center relative overflow-hidden text-white font-sans p-6">
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-danube-blue/10 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md bg-black/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl relative z-10 shadow-2xl">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold tracking-tighter mb-2">THE FARMER COMPANY <span className="text-danube-blue">SYS</span></h1>
                    <p className="text-gray-400 text-sm font-mono">SECURE ACCESS</p>
                </div>

                <MobileLoginForm />

                <div className="mt-8 text-center">
                    <Link to="/" className="text-xs text-gray-500 hover:text-white font-mono">← RETURN TO PUBLIC ACCESS</Link>
                </div>
            </div>
        </div>
    );
};
