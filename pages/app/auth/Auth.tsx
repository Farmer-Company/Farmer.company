import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Check, Loader2, User as UserIcon, Phone, Terminal, Sparkles } from 'lucide-react';
import { supabase, isMockMode } from '../../../lib/supabase';
import { CountrySelect } from '../../../components/ui/CountrySelect';
import { Captcha } from '../../../components/ui/Captcha';
import { countries, defaultCountry, Country } from '../../../lib/countries';
import { useAuthStore } from '../../../store/authStore';
import { Role } from '../../../types';

// Particle Component
const Particle: React.FC<{ delay: number }> = ({ delay }) => (
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

    const [step, setStep] = useState<'phone' | 'otp' | 'details'>('phone');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);

    // Auth State
    const [country, setCountry] = useState<Country>(defaultCountry);
    const [phone, setPhone] = useState('');
    const [isHuman, setIsHuman] = useState(false);

    const [otp, setOtp] = useState(['', '', '', '', '', '']); // 6 Digit OTP
    const [name, setName] = useState('');
    const [selectedRole, setSelectedRole] = useState<Role>(initialRole || 'customer');
    const [location, setLocation] = useState<GeolocationCoordinates | null>(null);
    const [showConfetti, setShowConfetti] = useState(false);

    const roles = [
        { id: 'customer', label: 'Customer', color: '#E50914', desc: 'I want to buy fresh produce.' },
        { id: 'farmer', label: 'Farmer', color: '#1DB954', desc: 'I grow the produce.' },
        { id: 'vendor', label: 'Vendor', color: '#2962FF', desc: 'I supply equipment/seeds.' },
        { id: 'logistics', label: 'Logistics', color: '#8A2BE2', desc: 'I move the goods.' },
    ];

    // Auto-detect country based on location
    useEffect(() => {
        if (location) {
            // In a real app, reverse geocode here. 
            // For now, if lat/long is approx India/US, we switch.
            // Simplified Mock Logic:
            const { latitude, longitude } = location;
            if (latitude > 8 && latitude < 37 && longitude > 68 && longitude < 97) {
                setCountry(countries.find(c => c.code === 'IN') || defaultCountry);
            } else if (latitude > 24 && latitude < 49 && longitude > -125 && longitude < -66) {
                setCountry(countries.find(c => c.code === 'US') || defaultCountry);
            }
            // Add other regions as needed
        }
    }, [location]);

    const handlePhoneSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isHuman) {
            alert('Please complete the security check.');
            return;
        }
        if (phone.length !== country.phoneLength) {
            alert(`Please enter a valid ${country.phoneLength}-digit mobile number for ${country.name}`);
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('otp');
        }, 1500);
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const handleOtpBackspace = (index: number, e: React.KeyboardEvent) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const prevInput = document.getElementById(`otp-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const otpString = otp.join('');
        if (otpString.length !== 6) {
            alert('Please enter the full 6-digit code');
            return;
        }

        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('details');
        }, 1000);
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            setLoading(true); // temporary load indicator for location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation(position.coords);
                    setLoading(false);
                },
                (error) => {
                    console.error(error);
                    setLoading(false);
                    alert("Location access denied or unavailable. Please select country manually.");
                }
            );
        }
    };

    const handleFinalSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const fullPhone = `${country.dialCode}${phone}`;

        try {
            // Check if user exists
            const { data: existingUser, error: fetchError } = await supabase
                .from('users')
                .select('*')
                .eq('phone', fullPhone)
                .single();

            if (existingUser) {
                // User exists, log them in
                login(existingUser);
                alert(`Welcome back, ${existingUser.name}!`);
                if (existingUser.role === 'farmer') navigate('/app/farmer');
                else navigate('/app/buyer');
                return;
            }

            // New User Registration
            const newUser = {
                name,
                phone: fullPhone,
                role: selectedRole,
                latitude: location?.latitude || null,
                longitude: location?.longitude || null,
                created_at: new Date().toISOString()
            };

            const { data: createdUser, error: insertError } = await supabase
                .from('users')
                .insert([newUser])
                .select() // important to return the created row
                .single();

            if (insertError) throw insertError;

            if (createdUser) {
                login(createdUser);
                if (createdUser.role === 'farmer') navigate('/app/farmer');
                else navigate('/app/buyer');
            }

        } catch (err) {
            console.error('Error during auth:', err);
            alert('Authentication failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };




    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Particle Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <Particle delay={i * 0.2} key={i} />
                ))}
            </div>

            {/* Grid Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                <div className="mb-12 text-center">
                    <img src="/logo.png" alt="Logo" className="mx-auto mb-6 h-16 w-16 object-contain rounded-xl shadow-2xl shadow-green-900/20" />
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
                            {/* Auto Location / Country Button */}
                            <div className="flex justify-end mb-2">
                                <button
                                    type="button"
                                    onClick={getLocation}
                                    className="text-xs flex items-center gap-1 text-green-500 hover:text-green-400 font-mono bg-green-500/10 px-2 py-1 rounded"
                                >
                                    <MapPin size={12} />
                                    <span>AUTO-DETECT LOCATION</span>
                                </button>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-gray-500 mb-2">IDENTIFICATION</label>
                                <div className="flex gap-2">
                                    <CountrySelect selectedCountry={country} onSelect={setCountry} />
                                    <div className="relative flex-1">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                                        <input
                                            type="tel"
                                            required
                                            value={phone}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, '');
                                                if (val.length <= country.phoneLength) setPhone(val);
                                            }}
                                            placeholder={`Mobile Number (${country.phoneLength} digits)`}
                                            className="w-full bg-[#111] border border-gray-800 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <Captcha onVerify={() => setIsHuman(true)} />

                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full font-bold py-4 rounded-lg transition-colors flex items-center justify-center ${isHuman ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                    }`}
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
                                <div className="text-center mb-6">
                                    <span className="text-sm text-gray-400">Enter code sent to </span>
                                    <span className="text-white font-mono">{country.dialCode} {phone}</span>
                                    <button onClick={() => setStep('phone')} className="ml-2 text-xs text-blue-500 hover:text-blue-400">Edit</button>
                                </div>

                                <div className="flex justify-center gap-2 mb-2">
                                    {/* Static Prefix */}
                                    <div className="h-12 w-16 bg-[#111] border border-gray-800 rounded-lg flex items-center justify-center text-gray-500 font-mono select-none">
                                        FMR-
                                    </div>
                                    {/* 6 Digit Input */}
                                    {otp.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            id={`otp-${idx}`}
                                            type="text"
                                            required
                                            value={digit}
                                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                                            onKeyDown={(e) => handleOtpBackspace(idx, e)}
                                            className="w-10 h-12 bg-[#111] border border-gray-800 rounded-lg text-center text-xl text-white focus:outline-none focus:border-green-500 transition-all"
                                            maxLength={1}
                                        />
                                    ))}
                                </div>
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
                                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
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
