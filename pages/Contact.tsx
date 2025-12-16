import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

export const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-cod-gray mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6 text-lg text-cod-gray/80">
                    <p>We are partnering with forward-thinking orchards and farms. Reach out to verify if your location supports our autonomous fleet.</p>

                    <div className="pt-4">
                        <h3 className="font-bold text-cod-gray">Headquarters</h3>
                        <p>123 Innovation Drive<br />San Francisco, CA 94105</p>
                    </div>

                    <div>
                        <h3 className="font-bold text-cod-gray">Email</h3>
                        <a href="mailto:hello@thefarmerscompany.com" className="text-danube-blue hover:underline">hello@thefarmerscompany.com</a>
                    </div>
                </div>

                <form className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-cod-gray/5">
                    <div>
                        <label className="block text-sm font-medium text-cod-gray mb-1">Name</label>
                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-cod-gray/20 focus:outline-none focus:ring-2 focus:ring-danube-blue bg-wild-sand/50" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-cod-gray mb-1">Email</label>
                        <input type="email" className="w-full px-4 py-2 rounded-lg border border-cod-gray/20 focus:outline-none focus:ring-2 focus:ring-danube-blue bg-wild-sand/50" placeholder="you@company.com" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-cod-gray mb-1">Message</label>
                        <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-cod-gray/20 focus:outline-none focus:ring-2 focus:ring-danube-blue bg-wild-sand/50" placeholder="Tell us about your farm..."></textarea>
                    </div>
                    <Button className="w-full">Send Message</Button>
                </form>
            </div>
        </motion.div>
    );
};
