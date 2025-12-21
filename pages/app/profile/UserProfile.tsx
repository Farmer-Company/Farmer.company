import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../../lib/supabase';
import { User, Listing } from '../../../types';
import { IdentityCard } from '../../../components/identity/IdentityCard';
import { Package, User as UserIcon } from 'lucide-react';

export const UserProfile = () => {
    const { id } = useParams<{ id: string }>();
    const [profile, setProfile] = useState<User | null>(null);
    const [listings, setListings] = useState<Listing[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!id) return;
            setLoading(true);

            // Fetch User
            const { data: userData } = await supabase
                .from('users')
                .select('*')
                .eq('id', id)
                .single();

            if (userData) {
                setProfile(userData);

                // Fetch Listings if user is seller
                if (userData.role === 'farmer') {
                    const { data: listingsData } = await supabase
                        .from('listings')
                        .select('*, product:products(*)')
                        .eq('farmer_id', id)
                        .order('created_at', { ascending: false });
                    if (listingsData) setListings(listingsData);
                }
            }
            setLoading(false);
        };

        fetchProfile();
    }, [id]);

    if (loading) return <div className="p-8 text-white">Loading Matrix...</div>;
    if (!profile) return <div className="p-8 text-white">Identity Not Found.</div>;

    return (
        <div className="min-h-screen bg-[#0E0E0E] text-white p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Left Column: Identity */}
                <div className="lg:col-span-1 space-y-6">
                    <IdentityCard user={profile} showBio={true} />

                    {/* Stats or Contact Info can go here */}
                    <div className="bg-[#111] border border-white/10 rounded-xl p-4">
                        <h4 className="text-xs font-mono text-gray-500 uppercase mb-3">Public Encryption Key</h4>
                        <code className="text-[10px] text-green-500 break-all bg-black p-2 rounded block">
                            -----BEGIN PUBLIC KEY-----
                            {profile.id}
                            -----END PUBLIC KEY-----
                        </code>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Tabs / Header */}
                    <div className="border-b border-white/10 flex space-x-6">
                        <button className="px-4 py-2 text-sm font-mono border-b-2 border-danube-blue text-white">
                            <Package size={14} className="inline mr-2" />
                            REPOSITORIES (Listings)
                            <span className="ml-2 bg-white/10 px-1.5 rounded-full text-xs">{listings.length}</span>
                        </button>
                        <button className="px-4 py-2 text-sm font-mono text-gray-500 hover:text-white transition-colors">
                            <UserIcon size={14} className="inline mr-2" />
                            ACTIVITY
                        </button>
                    </div>

                    {/* Listings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {listings.length === 0 ? (
                            <div className="col-span-2 text-center py-12 text-gray-500 font-mono text-sm border border-dashed border-white/10 rounded-xl">
                                EMPTY REPOSITORY
                            </div>
                        ) : (
                            listings.map(l => (
                                <div key={l.id} className="bg-[#111] border border-white/10 rounded-lg p-4 flex gap-4 hover:border-white/30 transition-colors">
                                    <div className="w-16 h-16 bg-black rounded border border-white/10 items-center justify-center flex shrink-0">
                                        {l.product?.image_url ? (
                                            <img src={l.product.image_url} className="w-full h-full object-cover rounded" />
                                        ) : <Package className="text-gray-600" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <h4 className="font-bold">{l.product?.name} <span className="text-gray-500 font-mono text-xs ml-2">v{l.grade}</span></h4>
                                            <span className={`text-[10px] px-1.5 rounded uppercase ${l.status === 'active' ? 'bg-green-900 text-green-300' : 'bg-gray-800 text-gray-400'}`}>
                                                {l.status}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">{l.description || "No description provided."}</p>
                                        <div className="mt-3 flex justify-between text-xs font-mono">
                                            <span className="text-danube-blue">₹{l.price_per_kg}/kg</span>
                                            <span className="text-gray-300">{l.quantity_kg}kg STOCK</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
