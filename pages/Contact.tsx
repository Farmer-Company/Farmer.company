import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 pb-20 px-6 max-w-4xl mx-auto min-h-screen bg-black text-white"
        >
            <h1 className="text-4xl md:text-5xl font-bold font-sans mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 text-lg text-gray-400">
                    <p>We are partnering with forward-thinking orchards and farms. Reach out to verify if your location supports our autonomous fleet.</p>

                    <div className="pt-4">
                        <h3 className="font-bold text-white">Headquarters</h3>
                        <p>123 Innovation Drive<br />San Francisco, CA 94105</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white">Email</h3>
                        <a href="mailto:hello@thefarmerscompany.com" className="text-danube-blue hover:underline">hello@thefarmerscompany.com</a>
                    </div>
                </div>

                <form className="space-y-4 bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                        <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-danube-blue transition-colors"
                            placeholder="Your name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-danube-blue transition-colors"
                            placeholder="your@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                        <textarea
                            className="w-full px-4 py-3 rounded-lg bg-black border border-gray-800 text-white focus:outline-none focus:border-danube-blue transition-colors h-32"
                            placeholder="How can we help?"
                        ></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                </form>
            </div>
        </motion.div>
    );
};
