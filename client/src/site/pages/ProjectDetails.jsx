import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectDetailsPlaceholder from "../components/ui/ProjectDetailsPlaceholder";
import api from "../../shared/services/api";
import Header from "../components/ui/Header";

const ProjectDetails = () => {
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Fetch project details
    const fetchProject = async () => {
      setIsLoading(true);
      const res = await api.get(`/projects/${id}`);
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
    <div className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
      <Header title={project?.title} child={"Projects"} />
      <section className="container mx-auto p-6 md:py-8 pb-12 lg:px-20 relative z-10">
        <article className="flex flex-col md:flex-row gap-8 md:gap-12 w-full my-4 md:my-6">
          <div className="md:w-[60%] space-y-4">
            <motion.img
              src={project?.posterImage?.secureUrl}
              alt={`Interior design project (${project?.title}) completed in ${
                project?.location || "Abuja"
              }, Nigeria`}
              className="w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-md"
              whileHover={{ scale: 1.0 }}
              loading="lazy"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {project?.galleryImages?.map((img, index) => (
                <motion.img
                  key={index}
                  src={img?.secureUrl}
                  alt={`Interior design project (${
                    project?.title
                  }) completed in ${project?.location || "Abuja"}, Nigeria`}
                  className="w-full object-cover transform hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-md"
                  whileHover={{ scale: 1.0 }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <aside className="w-full md:w-[40%]">
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
        </article>
        <section className="mt-6">
          <h2 className="font-bold text-4xl text-primary-500 mb-2">
            Project{" "}
            <span className="font-black text-primary-600 underline">
              Description
            </span>
          </h2>
          {/* <p className="leading-relaxed text-lg text-text-600">{project?.description}</p> */}
          <p className="leading-relaxed text-lg text-text-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            voluptatibus error accusamus dolores, rem sequi delectus
            consequuntur eum voluptatem ab vel distinctio blanditiis, harum non.
          </p>
        </section>
      </section>
      <footer className="container max-w-6xl w-full mx-auto my-6 md:mt-8 md:mb-14 text-md text-center opacity-80 leading-relaxed">
        This project is part of our growing portfolio in Abuja, including areas
        such as Gwarinpa, Wuse, Maitama, Utako, Jahi, Lokogoma, and Lugbe. We
        also take interior finishing and gypsum ceiling projects across Nigeria
        on request. Our services include drywall partitions, POP wall screeding,
        bathroom interior design, TV wall designs, custom shelves, and premium
        painting work.
      </footer>
    </div>
  );
};

export default ProjectDetails;
