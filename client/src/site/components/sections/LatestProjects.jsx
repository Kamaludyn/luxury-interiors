import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowCircleRight } from "phosphor-react";
import { useProjects } from "../../../shared/hooks/useProjects";
import ProjectsPlaceholder from "../ui/ProjectsPlaceholder";

const LatestProjects = () => {
  const limit = 8
  const page = 1
  const { data, isFetching } = useProjects(page, limit);
  const navigate = useNavigate();

  const projects = data?.projects?.slice(0, 3);

  return (
    <section className="relative py-24 bg-background-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
      {/* Gradient Accent */}
      <div className="absolute inset-0 bg-linear-to-t from-primary-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-primary-500">
            Latest Projects
          </h2>
          <p className="text-text-400 dark:text-text-700/70 max-w-2xl mx-auto leading-relaxed">
            A glimpse into our most recent transformations where craftsmanship,
            artistry, and innovation converge.
          </p>
        </motion.div>

        {isFetching || projects?.length < 1 ? (
          <ProjectsPlaceholder projectsNumber={3} />
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <motion.div
                key={project?._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                onClick={() =>
                  navigate(`/projects/${project._id}`, { state: { project } })
                }
                className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <motion.img
                  src={project?.posterImage.secureUrl}
                  alt={project?.title}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Overlay */}
                <div className="absolute inset-4 bg-primary-500/80 opacity-50 group-hover:opacity-0 transition-opacity duration-500 rounded-lg" />

                {/* Text Overlay */}
                <div className="flex flex-col justify-between absolute top-6 bottom-6 left-6 right-6 p-2 translate-y-0 group-hover:translate-y-4 transition-all duration-500">
                  <h3 className="text-surface-500 text-2xl font-semibold opacity-100 group-hover:opacity-0 ">
                    {project?.title}
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
          >
            View All Projects
            <ArrowRight size={20} weight="bold" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestProjects;
