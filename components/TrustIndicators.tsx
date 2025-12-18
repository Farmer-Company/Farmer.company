import React from 'react';
import { Star, TrendingUp, Award } from 'lucide-react';
import './TrustIndicators.css';

interface TrustIndicatorsProps {
    rating: number; // 0-5
    reviewCount: number;
    trustScore?: number; // 0-100
    showDetails?: boolean;
}

export const TrustIndicators: React.FC<TrustIndicatorsProps> = ({
    rating,
    reviewCount,
    trustScore,
    showDetails = true
}) => {
    const renderStars = () => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars.push(<Star key={i} className="star star-filled" fill="currentColor" />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<Star key={i} className="star star-half" />);
            } else {
                stars.push(<Star key={i} className="star star-empty" />);
            }
        }
        return stars;
    };

    const getTrustLevel = (score: number) => {
        if (score >= 90) return { label: 'Excellent', color: '#1DB954' };
        if (score >= 75) return { label: 'Very Good', color: '#2962FF' };
        if (score >= 60) return { label: 'Good', color: '#8A2BE2' };
        if (score >= 40) return { label: 'Fair', color: '#FFA500' };
        return { label: 'Needs Improvement', color: '#FF4444' };
    };

    return (
        <div className="trust-indicators">
            {/* Rating Display */}
            <div className="rating-section">
                <div className="stars-container">
                    {renderStars()}
                </div>
                <div className="rating-details">
                    <span className="rating-value">{rating.toFixed(1)}</span>
                    <span className="review-count">({reviewCount.toLocaleString()} reviews)</span>
                </div>
            </div>

            {/* Trust Score */}
            {trustScore !== undefined && showDetails && (
                <div className="trust-score-section">
                    <div className="trust-score-header">
                        <Award className="trust-icon" />
                        <span className="trust-label">Trust Score</span>
                    </div>
                    <div className="trust-score-bar">
                        <div
                            className="trust-score-fill"
                            style={{
                                width: `${trustScore}%`,
                                background: getTrustLevel(trustScore).color
                            }}
                        />
                    </div>
                    <div className="trust-score-details">
                        <span className="trust-score-value">{trustScore}/100</span>
                        <span
                            className="trust-level"
                            style={{ color: getTrustLevel(trustScore).color }}
                        >
                            {getTrustLevel(trustScore).label}
                        </span>
                    </div>
                </div>
            )}

            {/* Performance Indicator */}
            {showDetails && (
                <div className="performance-indicator">
                    <TrendingUp className="performance-icon" />
                    <span className="performance-text">
                        {rating >= 4.5 ? 'Top Rated' : rating >= 4.0 ? 'Highly Rated' : 'Rated'}
                    </span>
                </div>
            )}
        </div>
    );
};
