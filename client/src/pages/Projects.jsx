import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowCircleRight } from "phosphor-react";
import partitionWall from "../assets/imgs/office-partition.jpg";
import gypsum from "../assets/imgs/modern-gypsum.jpg";
import interior from "../assets/imgs/prjts1.png";

const Projects = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id: 1,
      title: "Seaside Residence",
      image: partitionWall,
    },
    {
      id: 2,
      title: "Modern Penthouse Interior",
      image: gypsum,
    },
    {
      id: 3,
      title: "Coastal Retreat Villa",
      image: interior,
    },
    {
      id: 4,
      title: "Coastal Retreat Villa",
      image: partitionWall,
    },
    {
      id: 5,
      title: "Coastal Retreat Villa",
      image: gypsum,
    },
    {
      id: 6,
      title: "Coastal Retreat Villa",
      image: interior,
    },
    {
      id: 7,
      title: "Coastal Retreat Villa",
      image: partitionWall,
    },
    {
      id: 8,
      title: "Coastal Retreat Villa",
      image: gypsum,
    },
  ];

  return (
    <div className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
      <div className="w-full bg-primary-600 px-10 md:px-32 pt-32 md:pt-18 pb-6">
        <h2 className="container text-center md:text-left text-4xl font-black text-primary-500">
          Projects
        </h2>
      </div>
      <div className="container mx-auto p-6 md:py-12 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => navigate(`/projects/${project.id}`)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <motion.img
                src={project.image}
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
        <nav className="w-full text-base mt-4" aria-label="projects">
          <div className="w-36 mx-auto flex items-center justify-between gap-2 md:gap-4">
            <span
              aria-label="Page 1"
              aria-current="page"
              className="text-surface-500 bg-primary-500 hover:bg-primary-600 h-8 w-8 pt-1 text-center self-center rounded-full"
            >
              1
            </span>
            <a
              aria-label="Page 2"
              className="text-surface-500 bg-primary-500 hover:bg-primary-600 h-8 w-8 pt-1 text-center self-center rounded-full"
              href=""
            >
              2
            </a>
            <a className="" href="">
              <ArrowRight
                size={22}
                weight="bold"
                className="ml-4 text-primary-500"
              />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Projects;
