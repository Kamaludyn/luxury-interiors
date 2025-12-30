const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Abdulkarim Ceiling and Decor",
    url: "https://abdulkarimceilinganddecor.com",
    logo: "https://abdulkarimceilinganddecor.com/logo.png",
    image: "https://abdulkarimceilinganddecor.com/og/home.jpg",
    telephone: "+2348035843896",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressRegion: "FCT",
      addressCountry: "NG",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Abuja",
    },
    sameAs: [],
    priceRange: "₦₦",
    openingHours: "Mo-Su 08:00-18:00",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default LocalBusinessSchema;
