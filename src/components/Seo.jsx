// src/components/Seo.jsx
import { useEffect } from 'react';

const Seo = ({ title, description, canonical, schemaType = 'WebPage', schemaData = {} }) => {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Create and append meta tags
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = description;
    document.head.appendChild(metaDescription);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.property = 'og:title';
    metaOgTitle.content = title;
    document.head.appendChild(metaOgTitle);

    const metaOgDescription = document.createElement('meta');
    metaOgDescription.property = 'og:description';
    metaOgDescription.content = description;
    document.head.appendChild(metaOgDescription);

    const metaOgUrl = document.createElement('meta');
    metaOgUrl.property = 'og:url';
    metaOgUrl.content = canonical;
    document.head.appendChild(metaOgUrl);

    const metaOgType = document.createElement('meta');
    metaOgType.property = 'og:type';
    metaOgType.content = 'website';
    document.head.appendChild(metaOgType);

    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonical;
    document.head.appendChild(canonicalLink);

    // Create and append Schema markup
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": schemaType,
      "url": canonical,
      "name": title,
      "description": description,
      ...schemaData,
    });
    document.head.appendChild(schemaScript);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaOgTitle);
      document.head.removeChild(metaOgDescription);
      document.head.removeChild(metaOgUrl);
      document.head.removeChild(metaOgType);
      document.head.removeChild(canonicalLink);
      document.head.removeChild(schemaScript);
    };
  }, [title, description, canonical, schemaType, schemaData]);

  return null; // No visible output, just side effects
};

export default Seo;