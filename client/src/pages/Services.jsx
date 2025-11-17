import { motion } from "framer-motion";
import partitionWall from "../assets/imgs/office-partition.jpg";
import gypsum from "../assets/imgs/modern-gypsum.jpg";
import interior from "../assets/imgs/prjts1.PNG";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Seaside Residence",
      desc: "Seaside Residence Residence Residence Residence Residence",
      image: partitionWall,
    },
    {
      id: 2,
      title: "Modern Penthouse Interior",
      desc: "Modern Penthouse Interior Interior Interior Interior Interior Interior",
      image: gypsum,
    },
    {
      id: 3,
      title: "Coastal Retreat Villa",
      desc: "Coastal Retreat Villa Villa Villa Villa Villa Villa",
      image: interior,
    },
    {
      id: 4,
      title: "Coastal Retreat Villa",
      desc: "Coastal Retreat Villa Villa Villa Villa Villa Villa",
      image: partitionWall,
    },
    {
      id: 5,
      title: "Coastal Retreat Villa",
      desc: "Coastal Retreat Villa Villa Villa Villa Villa Villa",
      image: gypsum,
    },
    {
      id: 6,
      title: "Coastal Retreat Villa",
      desc: "Coastal Retreat Villa Villa Villa Villa Villa Villa",
      image: interior,
    },
    {
      id: 7,
      title: "Coastal Retreat Villa",
      desc: "Coastal Retreat Villa Villa Villa Villa Villa Villa",
      image: partitionWall,
    },
    {
      id: 8,
      title: "Coastal Retreat Villa",
      desc: "Coastal Retreat Villa Villa Villa Villa Villa Villa",
      image: gypsum,
    },
  ];
  return (
    <div className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
      <div className="w-full bg-primary-600 px-10 md:px-32 pt-32 md:pt-18 pb-6">
        <h2 className="container text-center md:text-left text-4xl font-black text-primary-500">
          Services
        </h2>
      </div>
      <div className="container mx-auto px-6 py-8 md:py-10 md:px-12 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-4xl md:text-5xl text-primary-500 md:pb-6 leading-10">
              Our{" "}
              <span className="font-black text-primary-600 underline">
                Services
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              consequatur natus mollitia minus tenetur corporis vel dicta
              provident distinctio sit vero ab fugit, impedit nihil autem atque.
              Quaerat doloremque accusamus corrupti unde.
            </p>
          </div>
          {services.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative mb-20 group rounded-2xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-md"
              />

              {/* Text Overlay */}
              <div className="bg-surface-500 flex flex-col justify-center absolute -bottom-[30%] left-2 right-2 p-2 md:p-4 transition-all duration-500 rounded-lg shadow-lg z-30 group-hover:opacity-0">
                <h3 className="text-primary-500 text-2xl font-semibold">
                  {project.title}
                </h3>
                <p>{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
