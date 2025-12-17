import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Globe } from 'lucide-react';

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
                        {[
                            { title: 'Drone Scout v2', date: 'Q1 2026', img: 'bg-gray-800' },
                            { title: 'Marketplace API', date: 'Q2 2026', img: 'bg-gray-800' },
                            { title: 'Logistics AI', date: 'In Beta', img: 'bg-gray-800' },
                            { title: 'Farmer Pay', date: 'Coming Soon', img: 'bg-gray-800' },
                        ].map((item, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className={`aspect-video ${item.img} rounded-lg mb-4 border border-white/10 group-hover:border-white/40 transition-colors relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                        <span className="text-xs font-mono text-danube-blue">{item.date}</span>
                                    </div>
                                </div>
                                <h4 className="font-bold text-sm group-hover:text-danube-blue transition-colors">{item.title}</h4>
                            </div>
                        ))}
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
                            <li className="flex gap-4 mt-4">
                                <Twitter size={20} className="hover:text-danube-blue cursor-pointer" />
                                <Instagram size={20} className="hover:text-pink-500 cursor-pointer" />
                                <Linkedin size={20} className="hover:text-blue-600 cursor-pointer" />
                                <Youtube size={20} className="hover:text-red-500 cursor-pointer" />
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
