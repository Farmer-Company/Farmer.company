import React from 'react';
import { PremiumLayout } from '../components/premium/Layout';
import { SEO } from '../components/SEO';
import { Check, TrendingDown, DollarSign, Package, Truck, Users, Shield, Zap } from 'lucide-react';
import './Pricing.css';

export const Pricing = () => {
    return (
        <>
            <SEO
                title="Pricing | The Farmer Company"
                description="Transparent pricing for farmers, buyers, and logistics partners. Simple commission-based model with no hidden fees."
            />
            <PremiumLayout>
                <div className="pricing-page">
                    {/* Hero Section */}
                    <section className="pricing-hero">
                        <h1 className="pricing-title">Simple, Transparent Pricing</h1>
                        <p className="pricing-subtitle">
                            No hidden fees. No subscriptions. Pay only when you transact.
                        </p>
                    </section>

                    {/* Commission Structure */}
                    <section className="commission-section">
                        <h2 className="section-title">Transaction-Based Model</h2>
                        <p className="section-description">
                            We only succeed when you succeed. Our commission is only charged on completed transactions.
                        </p>

                        <div className="commission-grid">
                            {/* Farmers */}
                            <div className="commission-card">
                                <div className="card-icon farmer-icon">
                                    <Package />
                                </div>
                                <h3 className="card-title">For Farmers</h3>
                                <div className="commission-rate">2-5%</div>
                                <p className="commission-description">
                                    Commission on successful sales
                                </p>
                                <ul className="features-list">
                                    <li><Check className="check-icon" /> Direct market access</li>
                                    <li><Check className="check-icon" /> Fair pricing</li>
                                    <li><Check className="check-icon" /> Instant payments</li>
                                    <li><Check className="check-icon" /> Quality verification</li>
                                    <li><Check className="check-icon" /> Logistics support</li>
                                </ul>
                            </div>

                            {/* Buyers */}
                            <div className="commission-card featured">
                                <div className="featured-badge">Most Popular</div>
                                <div className="card-icon buyer-icon">
                                    <Users />
                                </div>
                                <h3 className="card-title">For Buyers</h3>
                                <div className="commission-rate">2-5%</div>
                                <p className="commission-description">
                                    Commission on purchases
                                </p>
                                <ul className="features-list">
                                    <li><Check className="check-icon" /> Quality assurance</li>
                                    <li><Check className="check-icon" /> Verified suppliers</li>
                                    <li><Check className="check-icon" /> Bulk ordering</li>
                                    <li><Check className="check-icon" /> Real-time tracking</li>
                                    <li><Check className="check-icon" /> Transparent pricing</li>
                                </ul>
                            </div>

                            {/* Logistics */}
                            <div className="commission-card">
                                <div className="card-icon logistics-icon">
                                    <Truck />
                                </div>
                                <h3 className="card-title">For Logistics</h3>
                                <div className="commission-rate">Standard Rates</div>
                                <p className="commission-description">
                                    Competitive delivery fees
                                </p>
                                <ul className="features-list">
                                    <li><Check className="check-icon" /> Route optimization</li>
                                    <li><Check className="check-icon" /> Guaranteed volume</li>
                                    <li><Check className="check-icon" /> Insurance coverage</li>
                                    <li><Check className="check-icon" /> Timely payments</li>
                                    <li><Check className="check-icon" /> Fleet management</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Value-Added Services */}
                    <section className="services-section">
                        <h2 className="section-title">Value-Added Services</h2>
                        <p className="section-description">
                            Optional services to enhance your experience
                        </p>

                        <div className="services-grid">
                            <div className="service-card">
                                <Shield className="service-icon" />
                                <h3 className="service-title">Cold Storage</h3>
                                <p className="service-description">
                                    Partner facilities for temperature-controlled storage
                                </p>
                            </div>

                            <div className="service-card">
                                <DollarSign className="service-icon" />
                                <h3 className="service-title">Financing</h3>
                                <p className="service-description">
                                    Access to farmer loans and working capital
                                </p>
                            </div>

                            <div className="service-card">
                                <Shield className="service-icon" />
                                <h3 className="service-title">Insurance</h3>
                                <p className="service-description">
                                    Crop and logistics insurance partnerships
                                </p>
                            </div>

                            <div className="service-card">
                                <Zap className="service-icon" />
                                <h3 className="service-title">Quality Testing</h3>
                                <p className="service-description">
                                    Third-party lab testing and certification
                                </p>
                            </div>

                            <div className="service-card">
                                <TrendingDown className="service-icon" />
                                <h3 className="service-title">Market Intelligence</h3>
                                <p className="service-description">
                                    Premium reports and price forecasts
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Comparison */}
                    <section className="comparison-section">
                        <h2 className="section-title">Why Choose The Farmer Company?</h2>

                        <div className="comparison-table">
                            <div className="comparison-header">
                                <div className="comparison-cell"></div>
                                <div className="comparison-cell">Traditional Methods</div>
                                <div className="comparison-cell highlight">The Farmer Company</div>
                            </div>

                            <div className="comparison-row">
                                <div className="comparison-cell">Commission</div>
                                <div className="comparison-cell">10-30%</div>
                                <div className="comparison-cell highlight">2-5%</div>
                            </div>

                            <div className="comparison-row">
                                <div className="comparison-cell">Payment Time</div>
                                <div className="comparison-cell">30-90 days</div>
                                <div className="comparison-cell highlight">Instant</div>
                            </div>

                            <div className="comparison-row">
                                <div className="comparison-cell">Price Transparency</div>
                                <div className="comparison-cell">❌ No</div>
                                <div className="comparison-cell highlight">✅ Yes</div>
                            </div>

                            <div className="comparison-row">
                                <div className="comparison-cell">Quality Verification</div>
                                <div className="comparison-cell">❌ Limited</div>
                                <div className="comparison-cell highlight">✅ Guaranteed</div>
                            </div>

                            <div className="comparison-row">
                                <div className="comparison-cell">Logistics Support</div>
                                <div className="comparison-cell">❌ Self-arranged</div>
                                <div className="comparison-cell highlight">✅ Integrated</div>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="faq-section">
                        <h2 className="section-title">Frequently Asked Questions</h2>

                        <div className="faq-grid">
                            <div className="faq-item">
                                <h3 className="faq-question">When is the commission charged?</h3>
                                <p className="faq-answer">
                                    Commission is only charged when a transaction is successfully completed and payment is made. No upfront fees.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3 className="faq-question">Are there any hidden fees?</h3>
                                <p className="faq-answer">
                                    No. The commission percentage is the only fee. All costs are transparent and shown before you confirm any transaction.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3 className="faq-question">How do bulk orders work?</h3>
                                <p className="faq-answer">
                                    High-volume buyers can negotiate reduced commission rates (1-3%) for consistent bulk orders.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3 className="faq-question">What payment methods are accepted?</h3>
                                <p className="faq-answer">
                                    We support UPI, bank transfers, and digital wallets. Payments are processed securely through our escrow system.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3 className="faq-question">Can I try the platform for free?</h3>
                                <p className="faq-answer">
                                    Yes! Browse the marketplace, connect with partners, and explore features for free. You only pay when you transact.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3 className="faq-question">How are disputes handled?</h3>
                                <p className="faq-answer">
                                    Our escrow system holds payments until delivery is confirmed. Disputes are resolved through our verification process with third-party inspection if needed.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="pricing-cta">
                        <h2 className="cta-title">Ready to Get Started?</h2>
                        <p className="cta-description">
                            Join thousands of farmers, buyers, and logistics partners on The Farmer Company
                        </p>
                        <div className="cta-buttons">
                            <a href="/app/auth?role=farmer" className="cta-button primary">
                                Join as Farmer
                            </a>
                            <a href="/app/auth?role=buyer" className="cta-button secondary">
                                Join as Buyer
                            </a>
                        </div>
                    </section>
                </div>
            </PremiumLayout>
        </>
    );
};
