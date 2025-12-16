import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

const products = [
    {
        name: "The Farmers Cap",
        price: "$35.00",
        image: "bg-cod-gray"
    },
    {
        name: "Mission Tee",
        price: "$45.00",
        image: "bg-wild-sand"
    },
    {
        name: "Field Jacket",
        price: "$120.00",
        image: "bg-danube-blue"
    }
];

export const Shop = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-cod-gray mb-12">Merch Store</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product, i) => (
                    <div key={i} className="group">
                        <div className={`h-80 w-full rounded-2xl mb-6 ${product.image} flex items-center justify-center text-cod-gray/20 font-bold text-2xl`}>
                            PLACEHOLDER
                        </div>
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-cod-gray">{product.name}</h3>
                                <p className="text-cod-gray/60">{product.price}</p>
                            </div>
                            <Button size="sm" variant="ghost">Add to Cart</Button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
