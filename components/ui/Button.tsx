import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-full transition-all duration-200 font-medium active:scale-95 focus:outline-none focus:ring-2 focus:ring-danube-blue/50 disabled:opacity-50 disabled:pointer-events-none',
                    {
                        'bg-cod-gray text-wild-sand hover:bg-cod-gray/90 shadow-lg shadow-danube-blue/10 hover:shadow-danube-blue/20': variant === 'primary',
                        'bg-danube-blue text-white hover:bg-opacity-90': variant === 'secondary', // Retained original secondary variant
                        'bg-white text-cod-gray border border-gray-200 hover:bg-gray-50 hover:border-gray-300': variant === 'outline',
                        'text-cod-gray hover:bg-black/5 dark:text-wild-sand dark:hover:bg-white/10': variant === 'ghost',
                        'px-4 py-2 text-sm': size === 'sm',
                        'px-6 py-3 text-base': size === 'md',
                        'px-8 py-4 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
