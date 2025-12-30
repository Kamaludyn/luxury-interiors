import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import SEOHead from "../components/seo/SEOHead";
import ProjectDetailSchema from "../components/seo/ProjectDetailsSchema";
import { motion } from "framer-motion";
import ProjectDetailsPlaceholder from "../components/ui/ProjectDetailsPlaceholder";
import api from "../../shared/services/api";
import Header from "../components/ui/Header";

const ProjectDetails = () => {
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Fetch project details
    const fetchProject = async () => {
      setIsLoading(true);
      const res = await api.get(`/projects/${slug}`);
      setProject(res.data.project);
      setIsLoading(false);
    };
    // If project data is not available in state, fetch it using the id
    if (!location?.state) {
      // Fetch project details using the id
      fetchProject();
    } else {
      const { project } = location.state;
      setProject(project);
    }
  }, []);
  return isLoading ? (
    <ProjectDetailsPlaceholder />
  ) : (
    <>
      <SEOHead
        title={`${project?.title || "Project Details"}`}
        description={`View details of our ${project?.title} completed in ${
          project?.location || "Abuja"
        }. Specialized interior finishing including gypsum ceilings and POP screeding by AC&D Nigeria.`}
        path={`/projects/${project?.slug}`}
      />
      <ProjectDetailSchema project={project} />
      <main className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
        <Header title={project?.title} />
        <section className="container h-full mx-auto px-6 py-8 md:py-10 md:px-12 lg:px-20 relative z-10 grid grid-cols-1 md:grid-cols-10 grid-flow-row gap-4 md:gap-6">
          <article className="flex flex-col h-full col-span-1 md:col-span-6 space-y-4 order-1 ">
            <motion.img
              src={project?.posterImage?.secureUrl}
              alt={`Interior design project (${project?.title}) completed in ${
                project?.location || "Abuja"
              }, Nigeria`}
              className="w-full h-full max-h-[60vh] md:max-h-[70vh] object-cover transform hover:scale-102 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-md"
              whileHover={{ scale: 1.0 }}
              loading="lazy"
            />
            {project?.galleryImages.length >= 1 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {project?.galleryImages?.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img?.secureUrl}
                    alt={`Interior design project (${
                      project?.title
                    }) completed in ${project?.location || "Abuja"}, Nigeria`}
                    className="w-full h-[25vh] object-cover transform hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-md"
                    whileHover={{ scale: 1.0 }}
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </article>
          <aside className="md:col-span-4 order-3 md:order-2">
            <div className="flex flex-row items-center justify-between mt-6">
              <div className="flex-1 flex items-center">
                <span className="font-medium">Location</span>
                <span className="flex-1 w-1/2 border-b border-dashed border-primary-500/60 mx-3"></span>
              </div>
              <span className="font-semibold">{project?.location}</span>
            </div>
            <div className="flex flex-row items-center justify-between mt-6">
              <div className="flex-1 flex items-center">
                <span className="font-medium">Date Completed</span>
                <span className="flex-1 w-1/2 border-b border-dashed border-primary-500/60 mx-3"></span>
              </div>
              <span className="font-semibold">{project?.year || "—"}</span>
            </div>
          </aside>
          <section className="col-span-1 md:col-span-10 order-2 md:order-3">
            <h2 className="font-bold text-3xl md:text-4xl text-primary-500 mb-2">
              Project{" "}
              <span className="font-bold md:font-black text-primary-600 underline">
                Description
              </span>
            </h2>
            <p className="leading-relaxed text-lg text-text-600">
              {project?.description}
            </p>
          </section>
        </section>
        <footer className="container max-w-6xl mx-auto p-6 my-6 text-md text-center opacity-80 leading-relaxed border-t border-primary-500/40 ">
          This project is part of our growing portfolio in Abuja, including
          areas such as Gwarinpa, Wuse, Maitama, Utako, Jahi, Lokogoma, and
          Lugbe. We also take interior finishing and gypsum ceiling projects
          across Nigeria on request. Our services include drywall partitions,
          POP wall screeding, bathroom interior design, TV wall designs, custom
          shelves, and premium painting work.
        </footer>
      </main>
    </>
  );
};

export default ProjectDetails;
