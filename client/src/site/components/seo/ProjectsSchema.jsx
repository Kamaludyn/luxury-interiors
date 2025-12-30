const ProjectsSchema = ({ projects }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects?.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project?.title,
        description: project?.description,
        image: project.posterImage?.secureUrl,
        url: `https://abdulkarimceilinganddecor.com/projects/${project?.slug}`,
        locationCreated: {
          "@type": "Place",
          name: project?.location || "Abuja",
        },
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

export default ProjectsSchema;
