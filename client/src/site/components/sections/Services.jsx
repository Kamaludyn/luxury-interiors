import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Crown, HouseSimple, AlignBottom } from "phosphor-react";

export default function ServicesSection() {
  const navigate = useNavigate();
  const services = [
    {
      icon: <Crown size={68} />,
      title: "Luxury Home Design",
      desc: "Residences crafted with refined aesthetics, timeless proportions, and architectural precision.",
    },
    {
      icon: <HouseSimple size={68} />,
      title: "Interior Space Planning",
      desc: "Functional yet beautiful layouts that flow naturally; designed to elevate comfort and experience.",
    },
    {
      icon: <AlignBottom size={68} />,
      title: "Coastal & Functional Design",
      desc: "Relaxed luxury meets performance, spaces that breathe, glow, and adapt to coastal lifestyles.",
    },
  ];

  return (
    <section className="relative py-24 pb-24 md:pb-8 bg-surface-500 text-text-500 dark:text-text-700 overflow-visible">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        className="h-16 absolute -top-16 sm:h-20 sm:-top-20 md:h-24 md:-top-24 lg:h-28 lg:-top-28 left-0 w-full z-30"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C360,240 1080,240 1440,60 L1440,200 L0,200 Z"
          fill="currentColor"
          className="text-surface-500 dark:text-surface-800"
        />
        <path
          d="M0,40 C360,220 1080,220 1440,40 L1440,200 L0,200 Z"
          fill="currentColor"
          opacity="0.4"
          className="text-surface-500 dark:text-surface-800"
        />
      </svg>
      <div className="relative -mt-40 md:-mt-52 z-40 container mx-auto md:pb-4 px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-4 md:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col place-items-center p-8 transition-all duration-300 hover:-translate-y-7 group ${
                index === 1 ? "md:translate-y-8 hover:translate-y-2" : ""
              }`}
            >
              <div className="bg-surface-500 group-hover:bg-primary-600 group-hover:text-surface-500 h-fit w-fit p-6 mb-6 rounded-full shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl text-center font-bold mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-text-400 dark:text-text-700/70 leading-relaxed text-center">
                {service.desc}
              </p>
              <button
                onClick={() => navigate("/services")}
                className="text-primary-600 dark:text-text-700/70 leading-relaxed mt-2 md:mt-4 p-2 text-center group-hover:bg-primary-600 group-hover:text-surface-500 group-hover:rounded-md transition-all duration-300 cursor-pointer"
              >
                Read more
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
