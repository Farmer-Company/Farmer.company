import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { PublicLayout } from './layouts/PublicLayout';
import { PlatformLayout } from './layouts/PlatformLayout';
import { Hero } from './components/Hero';
import { TechnologySection } from './components/TechnologySection';
import { MasterplanSection } from './components/MasterplanSection';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { Preloader } from './components/ui/Preloader';
import { ErrorBoundary } from './components/ErrorBoundary';
import { SEO } from './components/SEO';
import { CustomCursor } from './components/ui/CustomCursor';
import { SiteProtection } from './components/SiteProtection';

// Lazy Load Pages for Performance
const Privacy = lazy(() => import('./pages/Privacy').then(module => ({ default: module.Privacy })));
const Terms = lazy(() => import('./pages/Terms').then(module => ({ default: module.Terms })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Technology = lazy(() => import('./pages/Technology').then(module => ({ default: module.Technology })));
const Masterplan = lazy(() => import('./pages/Masterplan').then(module => ({ default: module.Masterplan })));
const News = lazy(() => import('./pages/News').then(module => ({ default: module.News })));
const Careers = lazy(() => import('./pages/Careers').then(module => ({ default: module.Careers })));
const Shop = lazy(() => import('./pages/Shop').then(module => ({ default: module.Shop })));
const Reserve = lazy(() => import('./pages/Reserve').then(module => ({ default: module.Reserve })));

// App Pages Lazy Load
const Auth = lazy(() => import('./pages/app/auth/Auth').then(module => ({ default: module.Auth })));
const FarmerDashboard = lazy(() => import('./pages/app/farmer/Dashboard').then(module => ({ default: module.FarmerDashboard })));
const SupplyListing = lazy(() => import('./pages/app/farmer/SupplyListing').then(module => ({ default: module.SupplyListing })));
const Market = lazy(() => import('./pages/app/buyer/Market').then(module => ({ default: module.Market })));
const FleetView = lazy(() => import('./pages/app/logistics/FleetView').then(module => ({ default: module.FleetView })));
const PremiumHome = lazy(() => import('./pages/PremiumHome').then(module => ({ default: module.PremiumHome })));

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
    <SEO title="Home" description="The Farmer Company is building The Digital Orchard - a unified ecosystem for the future of agriculture." />
    <Hero />
    <TechnologySection />
    <MasterplanSection />
  </>
);

function App() {
  return (
    <ErrorBoundary>
      <Preloader />
      <Router basename={import.meta.env.BASE_URL}>
        <CustomCursor />
        <SiteProtection />
        <ScrollToTop />
        <div className="min-h-screen bg-wild-sand dark:bg-cod-gray font-sans selection:bg-danube-blue selection:text-white transition-colors duration-300">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              {/* Public Website Routes */}
              <Route path="/" element={<PremiumHome />} />
              <Route element={<PublicLayout />}>
                <Route path="/technology" element={<><SEO title="Technology" /><Technology /></>} />
                <Route path="/masterplan" element={<><SEO title="Masterplan" /><Masterplan /></>} />
                <Route path="/news" element={<><SEO title="News" /><News /></>} />
                <Route path="/careers" element={<><SEO title="Careers" /><Careers /></>} />
                <Route path="/shop" element={<><SEO title="Shop" /><Shop /></>} />
                <Route path="/reserve" element={<><SEO title="Reserve" /><Reserve /></>} />
                <Route path="/privacy" element={<><SEO title="Privacy Policy" /><Privacy /></>} />
                <Route path="/terms" element={<><SEO title="Terms of Service" /><Terms /></>} />
                <Route path="/contact" element={<><SEO title="Contact Us" /><Contact /></>} />
              </Route>

              {/* Platform Application Routes */}
              <Route path="/app/auth" element={<><SEO title="Login" /><Auth /></>} />

              <Route path="/app" element={<PlatformLayout />}>
                <Route path="farmer" element={<><SEO title="Farmer Portal" /><FarmerDashboard /></>} />
                <Route path="farmer/new-listing" element={<><SEO title="New Listing" /><SupplyListing /></>} />

                <Route path="buyer" element={<><SEO title="Exchange Market" /><Market /></>} />
                <Route path="logistics" element={<><SEO title="RouteMaster" /><FleetView /></>} />
              </Route>

            </Routes>
          </Suspense>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
