import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import HelmetSEO from "../components/seo/HelmetSEO";
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
    <>
      <HelmetSEO
        title="Our Interior Design Projects in Abuja and across Nigeria"
        description="Explore AC&D's portfolio of completed interior design projects in Abuja, including gypsum ceilings, drywall partitions, POP wall screeding, TV wall designs, bathroom interiors, custom shelves, and professional painting for residential and commercial spaces."
        path="/projects"
      />
      <main className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
        <Header title={"Our Projects"} />
        <section className="container mx-auto px-6 py-8 md:py-10 md:px-12 lg:px-20 relative z-10">
          <p className="container mx-auto text-center text-base pb-6 md:pb-8 md:text-lg text-text-400">
            Explore our completed work across Abuja and other Nigerian cities
            including gypsum ceiling installation, drywall partitions, POP wall
            screeding, modern TV wall designs, custom shelves, bathroom interior
            design, and professional painting for residential and commercial
            spaces. Our projects showcase high-quality craftsmanship, premium
            finishing, and modern interior aesthetics.
          </p>
          {isFetching || isError || projects?.length <= 0 ? (
            <ProjectsPlaceholder projectsNumber={4} isGrid4 />
          ) : (
            <div className="grid md:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <motion.article
                  key={project._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
                  aria-label={`Project: ${project.title}`}
                >
                  <Link
                    to={`/projects/${project._id}`}
                    state={{ project }}
                    className="block w-full h-full"
                  >
                    <motion.img
                      src={project.posterImage.secureUrl}
                      alt={`Interior design project in Abuja – ${project.title}`}
                      className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      whileHover={{ scale: 1.05 }}
                      loading="lazy"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary-500/80 opacity-50 group-hover:opacity-0 transition-opacity duration-500" />

                    {/* Text Overlay */}
                    <div className="flex flex-col justify-between absolute inset-6 p-2 group-hover:translate-y-4 transition-all duration-500">
                      <h3 className="text-surface-500 text-2xl font-semibold opacity-100 group-hover:opacity-0 ">
                        {project.title}
                      </h3>
                      <ArrowCircleRight
                        size={32}
                        weight="bold"
                        className="mt-auto ml-auto text-surface-500 group-hover:shadow-lg"
                      />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
          <nav
            className="w-full text-base mt-8"
            aria-label="Projects pagination"
          >
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                aria-label="Previous Page"
                className="disabled:opacity-30"
              >
                <ArrowLeft
                  size={22}
                  weight="bold"
                  className="text-primary-500"
                />
              </button>

              {/* Dynamic Page Numbers (Example for 2 pages) */}
              {[1, 2].map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  aria-current={page === pageNum ? "page" : undefined}
                  className={`h-8 w-8 rounded-full transition-colors ${
                    page === pageNum
                      ? "bg-primary-500 text-white font-bold"
                      : "bg-surface-200 text-text-400 hover:bg-primary-100"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() =>
                  setPage((p) => Math.min(pagination.totalPages, p + 1))
                }
                disabled={page === pagination.totalPages}
                aria-label="Next Page"
                className="disabled:opacity-30"
              >
                <ArrowRight
                  size={22}
                  weight="bold"
                  className="text-primary-500"
                />
              </button>
            </div>
          </nav>
          <footer className="container max-w-6xl mx-auto p-6 mt-8 md:mt-12 text-md text-center opacity-80 leading-relaxed border-t border-primary-500/40 ">
            We proudly serve clients across Abuja including Gwarinpa, Wuse,
            Maitama, Utako, Lokogoma, Jahi, Lugbe, and Kubwa. We also take on
            interior finishing projects across Nigeria based on request. Our
            team delivers premium craftsmanship in gypsum ceilings, drywall
            partitions, POP wall screeding, TV wall designs, bathroom interiors,
            custom wall units, and professional painting for homes and
            commercial buildings.
          </footer>
        </section>
      </main>
    </>
  );
};

export default Projects;
