import React from 'react';
import { motion } from 'framer-motion';

const articles = [
    {
        date: "Dec 12, 2025",
        title: "The Farmers Company Secures Series B Funding",
        excerpt: "New distinct capital injection enables mass production of the Scout autonomous unit."
    },
    {
        date: "Nov 28, 2025",
        title: "Partnership with Global Vineyards",
        excerpt: "Deploying 500 autonomous units across Napa and Bordeaux regions."
    },
    {
        date: "Oct 15, 2025",
        title: "Sustainability Report 2025",
        excerpt: "How our electric fleet has reduced carbon emissions by 40% in partner orchards."
    }
];

export const News = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-cod-gray mb-12">News & Stories</h1>

            <div className="grid gap-8">
                {articles.map((article, i) => (
                    <div key={i} className="border-b border-cod-gray/10 pb-8 group cursor-pointer">
                        <p className="text-sm font-mono text-danube-blue mb-2">{article.date}</p>
                        <h3 className="text-2xl font-bold text-cod-gray mb-3 group-hover:text-danube-blue transition-colors">{article.title}</h3>
                        <p className="text-cod-gray/60">{article.excerpt}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
