import React from 'react';
import { cn } from './ui/Button'; // reusing cn from Button utility location or move util to lib
import { motion } from 'framer-motion';

// Quick fix: if cn is not exported or we want a better utils file, let's just use it from Button or creating a new utils file would have been better. 
// For now, I'll assume I can import it or just redefine it if needed. 
// Actually, I defined strict export in Button.tsx as `export function cn`. So I can import it.

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto px-6",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem: React.FC<{
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}> = ({
    className,
    title,
    description,
    header,
    icon,
}) => {
        return (
            <motion.div
                whileHover={{ y: -5 }}
                className={cn(
                    "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-sm p-4 bg-white border border-cod-gray/5 justify-between flex flex-col space-y-4",
                    className
                )}
            >
                {header}
                <div className="group-hover/bento:translate-x-2 transition duration-200">
                    {icon}
                    <div className="font-sans font-bold text-cod-gray mb-2 mt-2">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-cod-gray/60 text-xs">
                        {description}
                    </div>
                </div>
            </motion.div>
        );
    };
