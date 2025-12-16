import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';

const jobs = [
    {
        title: "Senior Computer Vision Engineer",
        location: "San Francisco, CA",
        type: "Full-time"
    },
    {
        title: "Autonomous Fleet Operations Lead",
        location: "Remote / Field",
        type: "Full-time"
    },
    {
        title: "Frontend Developer (React/WebGL)",
        location: "San Francisco, CA",
        type: "Full-time"
    }
];

export const Careers = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen"
        >
            <h1 className="text-4xl md:text-5xl font-bold text-cod-gray mb-6">Join the Revolution</h1>
            <p className="text-xl text-cod-gray/60 mb-16 max-w-2xl">
                We are looking for visionaries to help us build the future of sustainable, autonomous agriculture.
            </p>

            <div className="grid gap-6">
                {jobs.map((job, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-xl border border-cod-gray/5 hover:shadow-lg transition-shadow">
                        <div className="mb-4 md:mb-0">
                            <h3 className="text-xl font-bold text-cod-gray">{job.title}</h3>
                            <div className="flex space-x-4 text-sm text-cod-gray/50 mt-1">
                                <span>{job.location}</span>
                                <span>•</span>
                                <span>{job.type}</span>
                            </div>
                        </div>
                        <Button variant="outline" size="sm">Apply Now</Button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};
