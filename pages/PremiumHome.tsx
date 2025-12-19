import { PremiumLayout } from '../components/premium/Layout';
import { HeroSection } from '../components/premium/HeroSection';
import { ContentSection } from '../components/premium/ContentSection';
import { ProduceMarketplace } from '../components/premium/ProduceMarketplace';
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
                    subtext="Connect with us for fair prices, instant payments, and market access."
                    align="center"
                    ctaLabel="Farmer Access"
                    ctaLink="/app/auth?role=farmer"
                />
                <ContentSection
                    id="exchange"
                    data-cursor-style="hex"
                    title="EXCHANGE"
                    text="A frictionless marketplace connecting global demand with local supply."
                    subtext="Connect with us to source quality produce with full transparency."
                    align="center"
                    ctaLabel="Enter Marketplace"
                    ctaLink="/app/auth?role=buyer"
                />
                <div id="marketplace" data-cursor-style="hex">
                    <ProduceMarketplace />
                </div>
                <ContentSection
                    id="routemaster"
                    data-cursor-style="hex"
                    title="ROUTEMASTER"
                    text="Optimizing logistics to reduce waste and ensure freshness from farm to fork."
                    subtext="The backbone of our supply chain."
                    align="center"
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
