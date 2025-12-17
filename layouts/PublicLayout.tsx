import React from 'react';
import { Outlet } from 'react-router-dom';
import { PremiumLayout as Layout } from '../components/premium/Layout';
// Footer is optional in the new infinite-scroll design, or can be added to the Layout
// import { Footer } from '../components/Footer'; 

export const PublicLayout = () => {
    return (
        <Layout>
            <div className="pt-0 md:pt-0">
                {/* Content wrapper to ensure it doesn't get hidden behind fixed nav if necessary, 
                    but PremiumLayout usually handles padding on large screens via CSS */}
                <Outlet />
            </div>
            {/* <Footer /> - Optional, removing for pure minimalist infinite scroll vibe unless requested */}
        </Layout>
    );
};
