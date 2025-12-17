import { motion } from "framer-motion";
import partitionWall from "../../assets/imgs/office-partition.jpg";
import gypsum from "../../assets/imgs/modern-gypsum.jpg";
import interior from "../../assets/imgs/prjts1.PNG";
import Header from "../components/ui/Header";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Gypsum Ceiling Installation",
      desc: "Modern and durable gypsum ceilings for homes, offices, and commercial spaces in Abuja. Clean finishing with lighting integrations.",
      image: gypsum,
    },
    {
      id: 2,
      title: "Custom Shelves & Wall Units",
      desc: "Well-crafted floating shelves, wall units, and storage solutions designed to fit perfectly into your interior space.",
      image: interior,
    },
    {
      id: 3,
      title: "Bathroom Interior Design",
      desc: "Beautiful bathroom designs including wall panels, tiling, vanities, and waterproof finishing for luxury modern bathrooms.",
      image: partitionWall,
    },
    {
      id: 4,
      title: "Modern TV Wall Design",
      desc: "Stylish TV walls with 3D panels, floating consoles, LED lighting, and cable concealment for a clean modern look.",
      image: gypsum,
    },
    {
      id: 5,
      title: "Drywall Partition Installation",
      desc: "Strong, clean, and professional drywall partitions for homes, offices, and commercial buildings in Abuja.",
      image: partitionWall,
    },
    {
      id: 6,
      title: "POP Wall Screeding",
      desc: "Smooth, flawless POP wall screeding for painting, renovation, and interior finishing perfect for modern Abuja homes.",
      image: interior,
    },
    {
      id: 7,
      title: "Professional Painting Services",
      desc: "High-quality wall painting with premium materials and neat finishing for residential and commercial projects in Abuja.",
      image: gypsum,
    },
  ];

  return (
    <div className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
      <Header title={"Our Services"} />
      <div className="container mx-auto px-6 py-8 md:py-10 md:px-12 lg:px-20 relative z-10">
        <section>
          <p className="pb-6 md:pb-8 text-center text-text-400 md:text-lg leading-relaxed">
            We offer professional interior and ceiling services in Abuja,
            including gypsum ceilings, POP wall screeding, drywall partitions,
            TV wall design, shelves, bathroom interiors, and painting. Our team
            delivers clean finishing, modern designs, and durable workmanship
            for homes, offices, and commercial spaces in Abuja and across Nigeria.
          </p>
        </section>
        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {services.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 bg-surface-500 dark:bg-background-800"
            >
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-primary-500 text-2xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-text-500 dark:text-text-700 leading-relaxed text-sm md:text-base">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
