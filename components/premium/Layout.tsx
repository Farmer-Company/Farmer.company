import React, { ReactNode } from 'react';
import { Navigation } from './Navigation';
import './Layout.css';

import { WeatherWidget } from '../WeatherWidget';

interface LayoutProps {
    children: ReactNode;
}

export const PremiumLayout = ({ children }: LayoutProps) => {
    return (
        <div className="premium-layout relative">
            <WeatherWidget />
            <Navigation />
            <div className="main-content">
                {children}
            </div>
        </div>
    );
};
