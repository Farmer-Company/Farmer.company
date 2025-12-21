import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDownRight, Filter } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { supabase } from '../../../lib/supabase';
import { useAuthStore } from '../../../store/authStore';
import { TrustBadge } from '../../../components/identity/TrustBadge';

interface OrderRowProps {
    listing: any;
    onBuy: (id: string, price: number, qty: number) => void;
}

const OrderRow: React.FC<OrderRowProps> = ({ listing, onBuy }) => (
    <div className="grid grid-cols-6 gap-4 p-3 border-b border-white/5 hover:bg-white/5 transition-colors text-sm font-mono cursor-pointer group">
        <div className="text-gray-400">#{listing.id.slice(0, 4)}</div>

        {/* Crop & Farmer */}
        <div className="flex flex-col">
            <span className="text-white font-sans font-bold">{listing.product?.name || 'Unknown'}</span>
            <Link to={`/app/profile/${listing.farmer?.id}`} className="text-[10px] text-gray-500 hover:text-danube-blue flex items-center gap-1 mt-0.5" onClick={(e) => e.stopPropagation()}>
                {listing.farmer?.name || 'Unknown Farmer'}
                {listing.farmer?.is_verified && <TrustBadge type="verified" />}
            </Link>
        </div>

        <div className="text-gray-300">{listing.grade}</div>
        <div className="text-white">{listing.quantity_kg} kg</div>
        <div className="text-danube-blue">₹ {listing.price_per_kg}</div>
        <div className="flex items-center">
            <Button size="sm" className="h-6 text-xs bg-green-600 hover:bg-green-700 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => onBuy(listing.id, listing.quantity_kg * listing.price_per_kg, listing.quantity_kg)}>
                BUY
            </Button>
        </div>
    </div>
);

export const OrderBook = () => {
    const [listings, setListings] = React.useState<any[]>([]);
    const { user } = useAuthStore();

    const fetchListings = async () => {
        const { data } = await supabase
            .from('listings')
            .select('*, product:products(*), farmer:users(*)')
            .eq('status', 'active')
            .order('created_at', { ascending: false });
        if (data) setListings(data);
    };

    React.useEffect(() => {
        fetchListings();
        // Poll every 5s for real-time feel
        const interval = setInterval(fetchListings, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleBuy = async (listingId: string, totalPrice: number, qty: number) => {
        if (!user) {
            alert("Please login as buyer");
            return;
        }
        if (!confirm(`Confirm purchase for ₹${totalPrice}?`)) return;

        try {
            // 1. Create Order
            const { error: orderError } = await supabase.from('orders').insert([{
                buyer_id: user.id,
                listing_id: listingId,
                quantity_kg: qty,
                total_price: totalPrice,
                status: 'pending'
            }]);
            if (orderError) throw orderError;

            // 2. Mark Listing as Sold
            await supabase.from('listings').update({ status: 'sold' }).eq('id', listingId);

            alert("Order placed successfully!");
            fetchListings();
        } catch (e) {
            console.error(e);
            alert("Failed to place order.");
        }
    };

    return (
        <div className="bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden h-full flex flex-col">
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-black/20">
                <h3 className="font-bold text-white uppercase tracking-wider text-sm">Live Order Book</h3>
                <Button size="sm" variant="outline" className="h-8 text-xs border-white/20 text-gray-400">
                    <Filter size={12} className="mr-2" /> FILTER
                </Button>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 p-3 border-b border-white/10 bg-black/40 text-xs font-mono text-gray-500 uppercase">
                <div>ID</div>
                <div>CROP</div>
                <div>GRADE</div>
                <div>QTY</div>
                <div>ASK (KG)</div>
                <div>ACTION</div>
            </div>

            {/* Table Body - Scrollable */}
            <div className="flex-1 overflow-y-auto">
                {listings.length === 0 ? (
                    <div className="p-8 text-center text-gray-500 text-sm font-mono">NO ACTIVE LISTINGS</div>
                ) : (
                    listings.map(l => (
                        <OrderRow key={l.id} listing={l} onBuy={handleBuy} />
                    ))
                )}
            </div>
        </div>
    );
};
