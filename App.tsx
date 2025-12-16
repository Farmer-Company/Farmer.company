import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { PlatformLayout } from './layouts/PlatformLayout';
import { Hero } from './components/Hero';
import { TechnologySection } from './components/TechnologySection';
import { MasterplanSection } from './components/MasterplanSection';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Contact } from './pages/Contact';
import { Technology } from './pages/Technology';
import { Masterplan } from './pages/Masterplan';
import { News } from './pages/News';
import { Careers } from './pages/Careers';
import { Shop } from './pages/Shop';
import { Reserve } from './pages/Reserve';

// App Pages
import { Auth } from './pages/app/auth/Auth';
import { PortalPlaceholder } from './components/PortalPlaceholder';
import { FarmerDashboard } from './pages/app/farmer/Dashboard';
import { SupplyListing } from './pages/app/farmer/SupplyListing';
import { Market } from './pages/app/buyer/Market';
import { FleetView } from './pages/app/logistics/FleetView';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const LandingPage = () => (
  <>
    <Hero />
    <TechnologySection />
    <MasterplanSection />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-wild-sand dark:bg-cod-gray font-sans selection:bg-danube-blue selection:text-white transition-colors duration-300">
        <Routes>
          {/* Public Website Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/masterplan" element={<Masterplan />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Platform Application Routes */}
          <Route path="/app/auth" element={<Auth />} />

          <Route path="/app" element={<PlatformLayout />}>
            <Route path="farmer" element={<FarmerDashboard />} />
            <Route path="farmer/new-listing" element={<SupplyListing />} />

            <Route path="buyer" element={<Market />} />
            <Route path="logistics" element={<FleetView />} />
          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
