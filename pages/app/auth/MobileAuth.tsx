import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { useAuthStore, UserRole } from '../../../store/authStore';
import { mockLogin, mockVerifyOtp, isMockMode } from '../../../lib/supabase';
import { Smartphone, Lock, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileLoginForm = () => {
    const navigate = useNavigate();
    const { login } = useAuthStore();

    const [step, setStep] = useState<'phone' | 'otp' | 'role'>('phone');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        if (phone.length < 10) {
            setError('Please enter a valid mobile number');
            return;
        }
        setLoading(true);
        // Simulate sending OTP
        await mockLogin(phone);
        setLoading(false);
        setStep('otp');
    };

    const handleVerifyOtp = async () => {
        const otpString = otp.join('');
        if (otpString.length !== 4) return;

        setLoading(true);
        const { session, error } = await mockVerifyOtp(phone, otpString);
        setLoading(false);

        if (error) {
            setError(error.message);
        } else {
            setStep('role');
        }
    };

    const handleRoleSelect = (role: UserRole) => {
        login({ phone }, role);
        navigate(`/app/${role}`);
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    return (
        <div className="w-full max-w-sm mx-auto">
            <AnimatePresence mode="wait">
                {step === 'phone' && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                        key="phone"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Welcome Back</h2>
                        <form onSubmit={handleSendOtp} className="space-y-4">
                            <div>
                                <label className="block text-xs font-mono text-gray-400 mb-2">MOBILE NUMBER</label>
                                <div className="relative">
                                    <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+91 99999 99999"
                                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-danube-blue transition-colors"
                                    />
                                </div>
                            </div>
                            {error && <p className="text-red-500 text-xs text-center">{error}</p>}
                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? <Loader2 className="animate-spin" /> : 'Get OTP'}
                            </Button>
                            {isMockMode && <p className="text-[10px] text-gray-600 text-center">MOCK MODE: Any 10-digit number works.</p>}
                        </form>
                    </motion.div>
                )}

                {step === 'otp' && (
                    <motion.div
                        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}
                        key="otp"
                    >
                        <h2 className="text-2xl font-bold text-white mb-2 text-center">Enter OTP</h2>
                        <p className="text-gray-400 text-center text-sm mb-8">Sent to {phone} <span className="text-danube-blue cursor-pointer" onClick={() => setStep('phone')}>(Edit)</span></p>

                        <div className="flex justify-center gap-4 mb-8">
                            {otp.map((digit, idx) => (
                                <input
                                    key={idx}
                                    id={`otp-${idx}`}
                                    type="text"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                                    className="w-12 h-12 bg-[#1A1A1A] border border-white/10 rounded-xl text-center text-xl text-white focus:border-danube-blue focus:outline-none transition-colors"
                                />
                            ))}
                        </div>

                        {error && <p className="text-red-500 text-xs text-center mb-4">{error}</p>}

                        <Button onClick={handleVerifyOtp} className="w-full" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin" /> : 'Verify Access'}
                        </Button>
                        {isMockMode && <p className="text-[10px] text-gray-600 text-center mt-4">MOCK MODE: OTP is 1234</p>}
                    </motion.div>
                )}

                {step === 'role' && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        key="role"
                        className="text-center"
                    >
                        <h2 className="text-2xl font-bold text-white mb-6">Select Identity</h2>
                        <div className="space-y-4">
                            <div onClick={() => handleRoleSelect('farmer')} className="p-4 bg-[#1A1A1A] border border-white/10 rounded-xl hover:border-danube-blue cursor-pointer transition-colors group">
                                <div className="text-lg font-bold text-white group-hover:text-danube-blue">I am a Farmer</div>
                                <div className="text-xs text-gray-500">Access Origin Portal</div>
                            </div>
                            <div onClick={() => handleRoleSelect('buyer')} className="p-4 bg-[#1A1A1A] border border-white/10 rounded-xl hover:border-danube-blue cursor-pointer transition-colors group">
                                <div className="text-lg font-bold text-white group-hover:text-danube-blue">I am a Buyer</div>
                                <div className="text-xs text-gray-500">Access Exchange Portal</div>
                            </div>
                            <div onClick={() => handleRoleSelect('logistics')} className="p-4 bg-[#1A1A1A] border border-white/10 rounded-xl hover:border-danube-blue cursor-pointer transition-colors group">
                                <div className="text-lg font-bold text-white group-hover:text-danube-blue">I am Logistics</div>
                                <div className="text-xs text-gray-500">Access RouteMaster</div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
