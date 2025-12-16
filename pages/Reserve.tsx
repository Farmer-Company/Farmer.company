import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const Reserve = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen"
        >
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-bold text-cod-gray mb-6">Reserve Your Fleet</h1>
                <p className="text-xl text-cod-gray/60">
                    Secure your production slot for the 2026/2027 manufacturing run. Limited availability.
                </p>
            </div>

            <form className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-cod-gray/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-cod-gray mb-2">First Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-cod-gray/20 focus:outline-none focus:ring-2 focus:ring-danube-blue bg-wild-sand/50" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-cod-gray mb-2">Last Name</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-cod-gray/20 focus:outline-none focus:ring-2 focus:ring-danube-blue bg-wild-sand/50" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-cod-gray mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-cod-gray/20 focus:outline-none focus:ring-2 focus:ring-danube-blue bg-wild-sand/50" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-cod-gray mb-2">Ranch/Farm Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-cod-gray/20 focus:outline-none focus:ring-2 focus:ring-danube-blue bg-wild-sand/50" />
                </div>

                <div className="pt-4">
                    <Button size="lg" className="w-full shadow-lg shadow-danube-blue/20">
                        Submit Reservation Request
                    </Button>
                    <p className="text-xs text-center text-cod-gray/40 mt-4">
                        No payment required at this stage. Our team will contact you to verify eligibility.
                    </p>
                </div>
            </form>

        </motion.div>
    );
};
