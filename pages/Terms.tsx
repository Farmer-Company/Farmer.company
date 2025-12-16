import React from 'react';
import { motion } from 'framer-motion';

export const Terms = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-cod-gray mb-8">Terms of Service</h1>

            <div className="space-y-6 text-lg text-cod-gray/80 leading-relaxed">
                <p>Effective Date: December 2025</p>

                <section>
                    <h2 className="text-2xl font-bold text-cod-gray mb-4">1. Acceptance of Terms</h2>
                    <p>By using The Farmers Company platform and autonomous fleet services, you agree to these Terms of Service.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-cod-gray mb-4">2. Autonomous Operations</h2>
                    <p>Our vehicles are designed to operate autonomously. While we maintain rigorous safety standards, users must ensure the operating environment (orchard/field) is reasonably clear of unforeseen obstacles. We are not liable for incidents caused by gross negligence in maintaining the operating environment.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-cod-gray mb-4">3. Platform Access</h2>
                    <p>Access to the digital twin dashboard is granted via subscription. Sharing credentials is strictly prohibited.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-cod-gray mb-4">4. Limitation of Liability</h2>
                    <p>To the maximum extent permitted by law, The Farmers Company shall not be liable for indirect, incidental, or consequential damages arising from the use of our services.</p>
                </section>
            </div>
        </motion.div>
    );
};
