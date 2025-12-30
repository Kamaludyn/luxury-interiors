const ProjectDetailSchema = ({ project }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project?.title,
    description: project?.description,
    image: project?.galleryImages?.map((img) => img.secureUrl),
    url: `https://abdulkarimceilinganddecor.com/projects/${project?.slug}`,
    dateCreated: project?.year,
    locationCreated: {
      "@type": "Place",
      name: project?.location,
    },
    creator: {
      "@type": "HomeAndConstructionBusiness",
      name: "Abdulkarim Ceiling and Decor",
      url: "https://abdulkarimceilinganddecor.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default ProjectDetailSchema;
