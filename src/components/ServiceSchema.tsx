type ServiceSchemaProps = {
  name: string;
  description: string;
  url: string;
  image?: string;
};

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://losangelesdrywallandframing.com${url}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://losangelesdrywallandframing.com",
      name: "Los Angeles Drywall & Framing",
    },
    areaServed: {
      "@type": "City",
      name: "Los Angeles",
    },
    ...(image && { image: `https://losangelesdrywallandframing.com${image}` }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
