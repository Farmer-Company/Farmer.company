import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Globe, Github } from 'lucide-react';

export const MegaFooter = () => {
    return (
        <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Section 1: Roadmap / Coming Soon (Adapted from "New Releases") */}
                <div className="mb-20">
                    <h3 className="text-2xl font-light mb-8 flex items-center gap-4">
                        <span className="text-danube-blue">●</span> COMING SOON
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Drone Scout v2 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-neutral-900 rounded-lg mb-4 border border-white/10 group-hover:border-danube-blue/50 transition-colors relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full border border-danube-blue/20 relative">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-danube-blue/40 animate-[spin_3s_linear_infinite] rounded-full origin-center"></div>
                                        <div className="absolute inset-2 rounded-full bg-neutral-900 z-10"></div>
                                        <div className="absolute inset-0 flex items-center justify-center z-20">
                                            <div className="w-2 h-2 bg-danube-blue rounded-full animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 z-30">
                                    <span className="text-xs font-mono text-danube-blue">Q1 2026</span>
                                </div>
                            </div>
                            <h4 className="font-bold text-sm group-hover:text-danube-blue transition-colors">Drone Scout v2</h4>
                        </div>

                        {/* Marketplace API */}
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-neutral-900 rounded-lg mb-4 border border-white/10 group-hover:border-purple-500/50 transition-colors relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center gap-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-8 w-1 bg-purple-500/20 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-purple-500 animate-[translate-y_1.5s_ease-in-out_infinite]" style={{ animationDelay: `${i * 0.2}s` }}></div>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 z-30">
                                    <span className="text-xs font-mono text-purple-400">Q2 2026</span>
                                </div>
                            </div>
                            <h4 className="font-bold text-sm group-hover:text-purple-400 transition-colors">Marketplace API</h4>
                        </div>

                        {/* Logistics AI */}
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-neutral-900 rounded-lg mb-4 border border-white/10 group-hover:border-green-500/50 transition-colors relative overflow-hidden">
                                <svg className="absolute inset-0 w-full h-full opacity-40">
                                    <path d="M10,80 Q50,10 100,50 T200,80" fill="none" stroke="#22c55e" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                                </svg>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-500/10 p-2 rounded-full border border-green-500/30">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 z-30">
                                    <span className="text-xs font-mono text-green-400">In Beta</span>
                                </div>
                            </div>
                            <h4 className="font-bold text-sm group-hover:text-green-400 transition-colors">Logistics AI</h4>
                        </div>

                        {/* Farmer Pay */}
                        <div className="group cursor-pointer">
                            <div className="aspect-video bg-neutral-900 rounded-lg mb-4 border border-white/10 group-hover:border-yellow-500/50 transition-colors relative overflow-hidden">
                                <div className="absolute inset-6 rounded bg-gradient-to-br from-yellow-500/20 to-transparent border border-yellow-500/20 flex flex-col justify-between p-2">
                                    <div className="w-4 h-3 bg-yellow-500/40 rounded-sm"></div>
                                    <div className="space-y-1">
                                        <div className="h-1 w-full bg-white/10 rounded"></div>
                                        <div className="h-1 w-2/3 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4 z-30">
                                    <span className="text-xs font-mono text-yellow-400">Coming Soon</span>
                                </div>
                            </div>
                            <h4 className="font-bold text-sm group-hover:text-yellow-400 transition-colors">Farmer Pay</h4>
                        </div>
                    </div>
                </div>

                {/* Section 2: Promotional (Adapted from "PS Plus") */}
                <div className="grid md:grid-cols-2 gap-8 mb-20 border-b border-white/10 pb-20">
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/10">
                        <h3 className="text-3xl font-bold mb-4 text-green-500">Farmer Membership</h3>
                        <p className="text-gray-400 mb-6">Join the revolution. Get access to autonomous tools, fair financing, and direct global markets.</p>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">Join Now</button>
                    </div>
                    <div className="bg-[#111] p-8 rounded-2xl border border-white/10">
                        <h3 className="text-3xl font-bold mb-4 text-danube-blue">The Blog</h3>
                        <p className="text-gray-400 mb-6">Deep dives into the future of agriculture, case studies from partner orchards, and tech updates.</p>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors">Read More</button>
                    </div>
                </div>

                {/* Section 3: Links Columns (PlayStation Style) */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-20">
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-500">About</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">About Farmer.Co</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Corporate</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Press Info</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-500">Products</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Origin</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Exchange</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">RouteMaster</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-500">Values</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Fair Trade</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Environment</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-500">Support</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Support Hub</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-gray-500">Connect</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">iOS App</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Android App</a></li>
                            <li className="flex flex-wrap gap-4 mt-4">
                                {/* X (Twitter) */}
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>

                                <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors"><Youtube size={20} /></a>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>

                                {/* Discord */}
                                <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                                    <svg viewBox="0 0 127.14 96.36" fill="currentColor" width="20" height="20"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c1.24-23.28-5.83-49-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" /></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section 4: Legal & Copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-sm text-white font-bold">
                            <Globe size={16} />
                            India (English)
                        </div>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
                            <span>|</span>
                            <a href="/terms" className="hover:text-white">Terms of Use</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Legal</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Site Map</a>
                        </div>
                    </div>
                    <div className="text-xs text-gray-600 md:text-right">
                        <p>© 2025 The Farmer Company Pvt Ltd.</p>
                        <p>All rights reserved. "Farmer.Co", "Origin", "Exchange" are trademarks of The Farmer Company.</p>
                    </div>
                </div>

                {/* Spacing for Docker Navigation */}
                <div className="h-24 md:h-0"></div>
            </div>
        </footer>
    );
};
