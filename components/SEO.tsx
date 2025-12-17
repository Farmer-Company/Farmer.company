import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
    useEffect(() => {
        // Update Title
        document.title = `${title} | The Farmer Company`;

        // Update Meta Description
        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', description);
        }

        // Update OG Image (Optional basic implementation)
        if (image) {
            let metaImage = document.querySelector('meta[property="og:image"]');
            if (!metaImage) {
                metaImage = document.createElement('meta');
                metaImage.setAttribute('property', 'og:image');
                document.head.appendChild(metaImage);
            }
            metaImage.setAttribute('content', image);
        }

    }, [title, description, image]);

    return null;
};
