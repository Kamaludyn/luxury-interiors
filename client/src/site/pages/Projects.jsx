import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, ArrowCircleRight } from "phosphor-react";
import { useProjects } from "../../shared/hooks/useProjects";
import ProjectsPlaceholder from "../components/ui/ProjectsPlaceholder";
import Header from "../components/ui/Header";

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
      <Header title={"Projects"} />
      <section className="container mx-auto p-6 md:py-12 lg:px-20 relative z-10">
        <p className="container mx-auto text-center text-base pb-6 md:pb-8 md:text-lg text-text-400">
          Explore our completed work across Abuja and other Nigerian cities
          including gypsum ceiling installation, drywall partitions, POP wall
          screeding, modern TV wall designs, custom shelves, bathroom interior
          design, and professional painting for residential and commercial
          spaces. Our projects showcase high-quality craftsmanship, premium
          finishing, and modern interior aesthetics.
        </p>
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
                aria-label={`Project: ${project.title}`}
              >
                <motion.img
                  src={project.posterImage.secureUrl}
                  alt={`Interior design project in Abuja – ${project.title}`}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  whileHover={{ scale: 1.05 }}
                  loading="lazy"
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
        <nav
          className="w-full text-base mt-4 md:mt-8"
          aria-label="projects pagination"
        >
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
        <footer className="text-center mt-14 mx-auto text-base text-text-600 max-w-3xl opacity-80 leading-relaxed">
          We proudly serve clients across Abuja including Gwarinpa, Wuse,
          Maitama, Utako, Lokogoma, Jahi, Lugbe, and Kubwa. We also take on
          interior finishing projects across Nigeria based on request. Our team
          delivers premium craftsmanship in gypsum ceilings, drywall partitions,
          POP wall screeding, TV wall designs, bathroom interiors, custom wall
          units, and professional painting for homes and commercial buildings.
        </footer>
      </section>
    </div>
  );
};

export default Projects;
