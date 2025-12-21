import React from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { LayoutDashboard, ShoppingCart, Truck, LogOut, Settings, Sprout, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SidebarItem = ({ icon: Icon, label, path, active, delay }: { icon: any, label: string, path: string, active: boolean, delay?: number }) => (
    <Link to={path}>
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay || 0 }}
            className={`flex items-center space-x-3 px-4 py-3 rounded-r-lg transition-all duration-200 border-l-4 ${active ? 'bg-danube-blue/10 border-danube-blue text-danube-blue' : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
        >
            <Icon size={20} />
            <span className="font-mono text-sm tracking-wide uppercase">{label}</span>
        </motion.div>
    </Link>
);

export const PlatformLayout = () => {
    const location = useLocation();
    const path = location.pathname;
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
    const { user, isAuthenticated, logout } = useAuthStore();

    // Close sidebar on route change (mobile)
    React.useEffect(() => {
        setSidebarOpen(false);
    }, [path]);

    if (!isAuthenticated) {
        return <Navigate to="/app/auth" />;
    }

    return (
        <div className="flex h-screen bg-[#0E0E0E] text-white overflow-hidden font-sans">
            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 z-40 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar - Mission Control Style (Responsive) */}
            <motion.aside
                className={`fixed inset-y-0 left-0 z-50 w-64 border-r border-white/10 flex flex-col bg-[#0E0E0E] transform md:relative md:translate-x-0 transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
                    <Link to="/" className="text-xl font-bold tracking-tighter text-white">
                        THE FARMER COMPANY <span className="text-danube-blue text-xs align-top">SYS</span>
                    </Link>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden text-gray-400 hover:text-white">
                        <LogOut size={20} className="rotate-180" />
                    </button>
                </div>

                <div className="flex-1 py-6 space-y-1">
                    <div className="px-6 pb-2 text-xs font-mono text-gray-600 uppercase tracking-widest">Modules</div>
                    <SidebarItem icon={Sprout} label="Origin (Farmer)" path="/app/farmer" active={path.includes('/farmer')} delay={0.1} />
                    <SidebarItem icon={ShoppingCart} label="Exchange (Buyer)" path="/app/buyer" active={path.includes('/buyer')} delay={0.2} />
                    <SidebarItem icon={Truck} label="Logistics" path="/app/logistics" active={path.includes('/logistics')} delay={0.3} />
                </div>

                <div className="p-4 border-t border-white/10">
                    <div className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:text-white cursor-pointer transition-colors"
                        onClick={() => window.location.href = `/app/profile/${user?.id}`}
                    >
                        <User size={18} />
                        <span className="text-sm font-mono">MY IDENTITY</span>
                    </div>
                    <div
                        onClick={() => logout()}
                        className="flex items-center space-x-3 px-4 py-3 text-red-500 hover:text-red-400 cursor-pointer transition-colors"
                    >
                        <LogOut size={18} />
                        <span className="text-sm font-mono">DISCONNECT</span>
                    </div>
                </div>
            </motion.aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col relative w-full">
                {/* Header / Status Bar */}
                <header className="h-16 border-b border-white/10 flex items-center justify-between px-4 md:px-8 bg-[#0E0E0E] z-10 gap-4">
                    <div className="flex items-center space-x-4">
                        {/* Mobile Menu Toggle */}
                        <button onClick={() => setSidebarOpen(true)} className="md:hidden text-white p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </button>

                        <div className="flex items-center space-x-2 text-xs font-mono text-danube-blue">
                            <span className="w-2 h-2 bg-danube-blue rounded-full animate-pulse"></span>
                            <span className="hidden md:inline">SYSTEM ONLINE</span>
                            <span className="md:hidden">ONLINE</span>
                        </div>
                        <span className="text-white/20 hidden md:inline">|</span>
                        <div className="text-xs font-mono text-gray-400 hidden md:block">
                            LAT: {user?.latitude?.toFixed(4) || 'N/A'} N  LON: {user?.longitude?.toFixed(4) || 'N/A'} E
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <div className="text-xs text-gray-400 font-mono hidden md:block">{user?.role?.toUpperCase()} ID</div>
                            <div className="text-sm font-bold text-white max-w-[150px] truncate">{user?.name}</div>
                        </div>
                        <div className="w-10 h-10 bg-gray-800 rounded-full border border-white/20 flex-shrink-0 flex items-center justify-center text-lg">
                            {user?.name?.charAt(0).toUpperCase()}
                        </div>
                    </div>
                </header>

                {/* Content Viewport */}
                <main className="flex-1 overflow-auto bg-black p-4 md:p-6 relative">
                    {/* Grid Background Effect */}
                    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                        style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                    </div>
                    <div className="relative z-10 pb-20 md:pb-0">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};
