import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Check, Loader2, User, Phone, Terminal, Sparkles } from 'lucide-react';
import { supabase, isMockMode } from '../../../lib/supabase';

type Role = 'customer' | 'farmer' | 'logistics' | 'vendor';

interface BetaUser {
    name: string;
    phone: string;
    role: Role;
    location?: GeolocationCoordinates;
}

// Particle Component
const Particle = ({ delay }: { delay: number }) => (
    <motion.div
        className="absolute w-1 h-1 bg-blue-500 rounded-full"
        initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            opacity: 0
        }}
        animate={{
            y: window.innerHeight + 10,
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0]
        }}
        transition={{
            duration: Math.random() * 3 + 2,
            delay: delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5
        }}
    />
);

// Confetti Component
const Confetti = () => {
    const colors = ['#E50914', '#1DB954', '#2962FF', '#8A2BE2', '#FFD700'];
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                        left: `${Math.random() * 100}%`,
                        top: '-10px'
                    }}
                    initial={{ y: -10, opacity: 1, rotate: 0 }}
                    animate={{
                        y: window.innerHeight,
                        opacity: 0,
                        rotate: Math.random() * 720 - 360,
                        x: Math.random() * 200 - 100
                    }}
                    transition={{
                        duration: Math.random() * 2 + 2,
                        delay: Math.random() * 0.5,
                        ease: "easeIn"
                    }}
                />
            ))}
        </div>
    );
};

export const Auth = () => {
    const [searchParams] = useSearchParams();
    const initialRole = searchParams.get('role') as Role | null;

    const [step, setStep] = useState<'phone' | 'otp' | 'details' | 'waitlist'>('phone');
    const [loading, setLoading] = useState(false);
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [name, setName] = useState('');
    const [selectedRole, setSelectedRole] = useState<Role>(initialRole || 'customer');
    const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const roles = [
        { id: 'customer', label: 'Customer', color: '#E50914', desc: 'I want to buy fresh produce.' }, // Netflix Red
        { id: 'farmer', label: 'Farmer', color: '#1DB954', desc: 'I grow the produce.' }, // Spotify Green
        { id: 'vendor', label: 'Vendor', color: '#2962FF', desc: 'I supply equipment/seeds.' }, // Blue
        { id: 'logistics', label: 'Logistics', color: '#8A2BE2', desc: 'I move the goods.' }, // Violet
    ];

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('otp');
        }, 1000);
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('details');
        }, 1000);
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => setLocation(position.coords),
                (error) => console.error(error)
            );
        }
    };



    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const userData = {
            name,
            phone,
            role: selectedRole,
            latitude: location?.latitude || null,
            longitude: location?.longitude || null,
            created_at: new Date().toISOString()
        };

        try {
            if (!isMockMode) {
                const { error } = await supabase
                    .from('beta_users')
                    .insert([userData]);

                if (error) throw error;
            } else {
                // Mock Mode Simulation
                console.log('Mock Mode: Simulate Saving to DB:', userData);
                await new Promise(resolve => setTimeout(resolve, 1500));
            }

            setStep('waitlist');
        } catch (err) {
            console.error('Error saving to Supabase:', err);
            // Fallback to waitlist anyway for user experience, but log error
            alert('Note: Could not save to real database (Table likely key missing or table missing). Proceeding locally.');
            setStep('waitlist');
        } finally {
            setLoading(false);
        }
    };


    if (step === 'waitlist') {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative overflow-hidden">
                {showConfetti && <Confetti />}

                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(29,185,84,0.1),transparent_50%)]" />
                </div>

                <motion.div
                    className="text-center max-w-md relative z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, type: "spring" }}
                >
                    <motion.div
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-green-500 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1.5],
                                opacity: [0.5, 0, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 0.5
                            }}
                        />
                        <Check size={40} className="text-black" />
                    </motion.div>

                    <motion.h1
                        className="text-3xl font-bold mb-4 font-sans"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        You're on the list!
                    </motion.h1>

                    <motion.p
                        className="text-gray-400 mb-8"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        Thank you, <span className="text-white font-semibold">{name}</span>.
                        We have secured your spot as a <span style={{ color: roles.find(r => r.id === selectedRole)?.color }} className="capitalize font-bold">{selectedRole}</span>.
                    </motion.p>

                    <motion.div
                        className="bg-[#111] p-6 rounded-lg border border-gray-800 font-mono text-sm text-left"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-green-500">$ status: LOCKED</p>
                        <p className="text-gray-500">$ queue_position: {Math.floor(Math.random() * 500) + 1}</p>
                        <p className="text-gray-500">$ location_access: {location ? 'GRANTED' : 'DENIED'}</p>
                        <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-600">
                            We will contact you at {phone} when beta access opens for your region.
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Particle Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <Particle delay={i * 0.2} />
                ))}
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>
            <div className="w-full max-w-md relative z-10">
                <div className="mb-12 text-center">
                    <Terminal size={40} className="mx-auto mb-4 text-gray-700" />
                    <h1 className="text-2xl font-bold font-sans tracking-tight">THE FARMER COMPANY</h1>
                    <p className="text-xs font-mono text-gray-500 mt-2">SECURE BETA TERMINAL_</p>
                </div>

                <AnimatePresence mode="wait">
                    {step === 'phone' && (
                        <motion.form
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-6"
                            onSubmit={handlePhoneSubmit}
                        >
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2">IDENTIFICATION</label>
                                <div className="relative">
                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                    <input
                                        type="tel"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Enter Mobile Number"
                                        className="w-full bg-[#111] border border-gray-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : 'Request OTP'}
                            </button>
                        </motion.form>
                    )}

                    {step === 'otp' && (
                        <motion.form
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-6"
                            onSubmit={handleOtpSubmit}
                        >
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2">VERIFICATION</label>
                                <input
                                    type="text"
                                    required
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    placeholder="Enter OTP (Any 4 digits)"
                                    className="w-full bg-[#111] border border-gray-800 rounded-lg py-4 px-4 text-center text-2xl tracking-widest text-white focus:outline-none focus:border-white transition-all"
                                    maxLength={4}
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : 'Verify Access'}
                            </button>
                        </motion.form>
                    )}

                    {step === 'details' && (
                        <motion.form
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-8"
                            onSubmit={handleFinalSubmit}
                        >
                            {/* Name */}
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2">FULL NAME</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="John Doe"
                                        className="w-full bg-[#111] border border-gray-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-all"
                                    />
                                </div>
                            </div>

                            {/* Roles */}
                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-4">SELECT DESIGNATION</label>
                                <div className="grid grid-cols-1 gap-3">
                                    {roles.map((role) => (
                                        <motion.div
                                            key={role.id}
                                            onClick={() => setSelectedRole(role.id as Role)}
                                            className={`p-4 rounded-lg cursor-pointer border transition-all ${selectedRole === role.id
                                                ? 'bg-[#111] border-current'
                                                : 'bg-black border-gray-800 hover:border-gray-700'
                                                }`}
                                            style={{
                                                borderColor: selectedRole === role.id ? role.color : undefined,
                                                boxShadow: selectedRole === role.id ? `0 0 20px ${role.color}20` : 'none'
                                            }}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            animate={{
                                                boxShadow: selectedRole === role.id
                                                    ? [`0 0 20px ${role.color}20`, `0 0 30px ${role.color}40`, `0 0 20px ${role.color}20`]
                                                    : 'none'
                                            }}
                                            transition={{ duration: 2, repeat: selectedRole === role.id ? Infinity : 0 }}
                                        >
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h3 className="font-bold" style={{ color: role.color }}>{role.label}</h3>
                                                    <p className="text-xs text-gray-500">{role.desc}</p>
                                                </div>
                                                {selectedRole === role.id && (
                                                    <Check size={20} style={{ color: role.color }} />
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Location */}
                            <div
                                onClick={getLocation}
                                className={`p-4 rounded-lg border border-dashed cursor-pointer flex items-center justify-center gap-2 transition-all ${location
                                    ? 'border-green-500 bg-green-500/10 text-green-500'
                                    : 'border-gray-700 text-gray-500 hover:text-white hover:border-white'
                                    }`}
                            >
                                <MapPin size={20} />
                                <span className="text-sm font-mono">
                                    {location ? `${location.latitude.toFixed(4)}, ${location.longitude.toFixed(4)}` : 'GRANT LOCATION ACCESS'}
                                </span>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : 'Initialize Profile'}
                            </button>
                        </motion.form>
                    )}
                </AnimatePresence>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => window.location.href = '/app/market'}
                        className="text-xs font-mono text-gray-600 hover:text-white transition-colors group"
                    >
                        <span className="mr-2 opacity-50 text-gray-500 group-hover:text-green-500 transition-colors">root@guest:~$</span>
                        ./execute_guest_session.sh
                    </button>
                </div>
            </div>
        </div >
    );
};
