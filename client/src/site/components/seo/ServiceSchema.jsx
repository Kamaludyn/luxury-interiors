import { Helmet } from "react-helmet-async";

const ServicesSchema = () => {
  const services = [
    {
      name: "Gypsum Ceiling Installation",
      description:
        "Modern and durable gypsum ceiling installation for homes, offices, and commercial spaces in Abuja.",
    },
    {
      name: "Custom Shelves & Wall Units",
      description:
        "Design and installation of custom shelves and wall units for modern interiors.",
    },
    {
      name: "Bathroom Interior Design",
      description:
        "Complete bathroom interior design including wall panels, tiling, and waterproof finishing.",
    },
    {
      name: "Modern TV Wall Design",
      description:
        "Stylish TV wall designs with LED lighting, panels, and concealed wiring.",
    },
    {
      name: "Drywall Partition Installation",
      description:
        "Professional drywall and office partition installation for residential and commercial spaces.",
    },
    {
      name: "POP Wall Screeding",
      description:
        "Smooth POP wall screeding for modern interior finishing and renovation projects.",
    },
    {
      name: "Professional Painting Services",
      description:
        "High-quality interior and exterior painting services for homes and commercial buildings.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Abuja",
        },
        provider: {
          "@type": "HomeAndConstructionBusiness",
          name: "Abdulkarim Ceiling and Decor",
          url: "https://abdulkarimceilinganddecor.com",
        },
        url: "https://abdulkarimceilinganddecor.com/services",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ServicesSchema;
