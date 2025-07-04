// src/components/Seo.jsx
const Seo = ({ title, description, canonical, schemaType = 'WebPage', schemaData = {} }) => {
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    "url": canonical,
    "name": title,
    "description": description,
  };

  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {/* Open Graph tags for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({ ...defaultSchema, ...schemaData })}
      </script>
    </head>
  );
};

export default Seo;