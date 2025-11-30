import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowCircleRight } from "phosphor-react";
import { useProjects } from "../../shared/hooks/useProjects";
import ProjectsPlaceholder from "../components/ui/ProjectsPlaceholder";

const Projects = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const limit = 8;

  const { data, isFetching, isError } = useProjects(page, limit);

  const projects = data?.projects || [];
  const pagination = data?.pagination || {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  };
  return (
    <div className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
      <div className="w-full bg-primary-600 px-10 md:px-32 pt-32 md:pt-18 pb-6">
        <h2 className="container text-center md:text-left text-4xl font-black text-primary-500">
          Projects
        </h2>
      </div>
      <div className="container mx-auto p-6 md:py-12 lg:px-20 relative z-10">
        {isFetching || isError ? (
          <ProjectsPlaceholder projectsNumber={4} isGrid4 />
        ) : (
          <div className="grid md:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                onClick={() =>
                  navigate(`/projects/${project._id}`, { state: { project } })
                }
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <motion.img
                  src={project.posterImage.secureUrl}
                  alt={project.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Overlay */}
                <div className="absolute inset-4 bg-primary-500/80 opacity-50 group-hover:opacity-0 transition-opacity duration-500 rounded-lg" />

                {/* Text Overlay */}
                <div className="flex flex-col justify-between absolute top-6 bottom-6 left-6 right-6 p-2 translate-y-0 group-hover:translate-y-4 transition-all duration-500">
                  <h3 className="text-surface-500 text-2xl font-semibold opacity-100 group-hover:opacity-0 ">
                    {project.title}
                  </h3>
                  <ArrowCircleRight
                    size={32}
                    weight="bold"
                    className="mt-auto ml-auto text-surface-500 group-hover:shadow-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
        <nav className="w-full text-base mt-4 md:mt-8" aria-label="projects">
          <div className="w-36 mx-auto flex items-center justify-between gap-2 md:gap-4">
            {page > 1 && (
              <button onClick={() => setPage((p) => Math.max(1, p - 1))}>
                <ArrowLeft
                  size={22}
                  weight="bold"
                  className="mr-4 text-primary-500 cursor-pointer"
                />
              </button>
            )}
            <span
              aria-label="Page 1"
              className="text-surface-500 bg-primary-500 hover:bg-primary-600 h-8 w-8 pt-1 text-center self-center rounded-full cursor-pointer"
              onClick={() => setPage(1)}
            >
              1
            </span>
            <span
              aria-label="Page 2"
              className="text-surface-500 bg-primary-500 hover:bg-primary-600 h-8 w-8 pt-1 text-center self-center rounded-full cursor-pointer"
              onClick={() => setPage(2)}
            >
              2
            </span>
            {!page === pagination.totalPages ||
              (page === 1 && (
                <button
                  onClick={() =>
                    setPage((p) => Math.min(pagination.totalPages, p + 1))
                  }
                >
                  <ArrowRight
                    size={22}
                    weight="bold"
                    className="ml-4 text-primary-500 cursor-pointer"
                  />
                </button>
              ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Projects;
