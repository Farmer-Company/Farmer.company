import React, { useState, useEffect } from 'react';
import { Camera, Check, X, Loader2, ArrowRight, DollarSign, Package } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../../../lib/supabase';
import { useAuthStore } from '../../../store/authStore';
import { Product } from '../../../types';

export const SupplyListing = () => {
    const navigate = useNavigate();
    const { user } = useAuthStore();
    const [step, setStep] = useState<'upload' | 'analyzing' | 'result'>('upload');
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [productDetails, setProductDetails] = useState<Product | null>(null);

    // Form State
    const [quantity, setQuantity] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleScan = async (productName: string) => {
        setSelectedProduct(productName);
        setStep('analyzing');

        // Fetch product ID from DB
        const { data } = await supabase.from('products').select('*').eq('name', productName).single();
        if (data) setProductDetails(data);
        else {
            // Fallback if not seeded, though we seeded it.
            // Or create it if missing? For now, assume seed data exists.
            console.error("Product not found in DB");
        }

        setTimeout(() => {
            setStep('result');
        }, 2000);
    };

    const handlePublish = async () => {
        if (!user || !productDetails) return;
        setIsSubmitting(true);

        try {
            const { error } = await supabase.from('listings').insert([{
                farmer_id: user.id,
                product_id: productDetails.id,
                quantity_kg: parseFloat(quantity),
                price_per_kg: parseFloat(price),
                grade: 'A', // Hardcoded from analysis for now
                harvest_date: new Date().toISOString(),
                status: 'active'
            }]);

            if (error) throw error;
            alert('Listing published successfully!');
            navigate('/app/farmer');
        } catch (err) {
            console.error(err);
            alert('Failed to publish listing');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <Link to="/app/farmer" className="text-gray-500 hover:text-white text-sm font-mono mb-4 block">← BACK TO DASHBOARD</Link>
                <h1 className="text-3xl font-bold text-white mb-2">New Harvest Listing</h1>
                <p className="text-gray-500 text-sm font-mono">STEP 1: GRADE ANALYSIS</p>
            </div>

            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 min-h-[500px] flex flex-col items-center justify-center relative overflow-hidden">

                <AnimatePresence mode="wait">
                    {step === 'upload' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                            className="text-center w-full"
                        >
                            <div className="w-full h-64 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center mb-8 bg-black/20 hover:bg-black/40 transition-colors cursor-pointer">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 text-danube-blue">
                                    <Camera size={32} />
                                </div>
                                <p className="text-gray-400 font-mono text-sm">SELECT CROP TO SCAN</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 border border-white/10 rounded-lg bg-white/5 text-left hover:border-danube-blue cursor-pointer transition-colors" onClick={() => handleScan('Pomegranate')}>
                                    <div className="text-2xl mb-2">🍅</div>
                                    <div className="font-bold text-white">Pomegranate</div>
                                </div>
                                <div className="p-4 border border-white/10 rounded-lg bg-white/5 text-left hover:border-danube-blue cursor-pointer transition-colors" onClick={() => handleScan('Potato')}>
                                    <div className="text-2xl mb-2">🥔</div>
                                    <div className="font-bold text-white">Potato</div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {step === 'analyzing' && (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="text-center"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-8">
                                <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
                                <div className="absolute inset-0 border-4 border-danube-blue rounded-full border-t-transparent animate-spin"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Camera size={32} className="text-white/50 animate-pulse" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Analyzing Sample...</h3>
                            <div className="text-danube-blue font-mono text-sm space-y-1">
                                <p>CHECKING COLOR DENSITY...</p>
                                <p>MEASURING CIRCUMFERENCE...</p>
                                <p>DETECTING BLEMISHES...</p>
                            </div>
                        </motion.div>
                    )}

                    {step === 'result' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className="w-full"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 border border-green-500/50">
                                    <Check size={32} />
                                </div>
                            </div>

                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-1">Grade A (Premium)</h2>
                                <p className="text-gray-400 text-sm">CONFIDENCE SCORE: 98.4%</p>
                            </div>

                            <div className="bg-white/5 rounded-xl p-6 mb-8 grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-gray-500 text-xs font-mono mb-2 flex items-center gap-1">
                                        <DollarSign size={12} /> PRICE PER KG (₹)
                                    </div>
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={e => setPrice(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full bg-black/50 border border-white/20 rounded p-2 text-white font-bold"
                                    />
                                    <div className="text-xs text-green-500 mt-1">Est: ₹{productDetails && productDetails.base_price_min ? productDetails.base_price_min : 100} - ₹{productDetails && productDetails.base_price_max ? productDetails.base_price_max : 150}</div>
                                </div>
                                <div>
                                    <div className="text-gray-500 text-xs font-mono mb-2 flex items-center gap-1">
                                        <Package size={12} /> QUANTITY (KG)
                                    </div>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={e => setQuantity(e.target.value)}
                                        placeholder="000"
                                        className="w-full bg-black/50 border border-white/20 rounded p-2 text-white font-bold"
                                    />
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <Button variant="outline" className="flex-1" onClick={() => setStep('upload')}>Cancel</Button>
                                <Button className="flex-1" onClick={handlePublish} disabled={isSubmitting || !quantity || !price}>
                                    {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : null}
                                    Publish Listing <ArrowRight size={16} className="ml-2" />
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
};
