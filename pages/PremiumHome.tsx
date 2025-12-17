import { PremiumLayout } from '../components/premium/Layout';
import { HeroSection } from '../components/premium/HeroSection';
import { ContentSection } from '../components/premium/ContentSection';
import { TechnologySection } from '../components/TechnologySection';
import { MasterplanSection } from '../components/MasterplanSection';
import { ContactSection } from '../components/ContactSection';
import { MegaFooter } from '../components/MegaFooter';
import { SEO } from '../components/SEO';

export const PremiumHome = () => {
    return (
        <>
            <SEO title="The Digital Orchard" description="The Farmer Company - Building the digital nervous system for global agriculture." />
            <PremiumLayout>
                <HeroSection />
                <ContentSection
                    id="origin"
                    title="ORIGIN"
                    text="It starts with the soil. Empowering farmers with data, capital, and direct market access."
                    subtext="Join the revolution. Get fair prices and instant payments."
                    align="center"
                    ctaLabel="Farmer Access"
                    ctaLink="/app/auth?role=farmer"
                />
                <ContentSection
                    id="exchange"
                    title="EXCHANGE"
                    text="A frictionless marketplace connecting global demand with local supply."
                    subtext="Sourcing made simple. Transparency guaranteed."
                    align="left"
                    ctaLabel="Enter Marketplace"
                    ctaLink="/app/auth?role=buyer"
                />
                <ContentSection
                    id="routemaster"
                    title="ROUTEMASTER"
                    text="Optimizing logistics to reduce waste and ensure freshness from farm to fork."
                    subtext="The backbone of our supply chain."
                    align="left"
                    ctaLabel="Logistics Network"
                    ctaLink="/app/auth?role=logistics"
                />

                <div id="technology">
                    <TechnologySection />
                </div>

                <div id="masterplan">
                    <MasterplanSection />
                </div>

                <div id="contact">
                    <ContactSection />
                </div>

                <MegaFooter />
            </PremiumLayout>
        </>
    );
};
