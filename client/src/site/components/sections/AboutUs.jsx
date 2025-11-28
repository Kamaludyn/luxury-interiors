import { motion } from "framer-motion";
import { Buildings, Ruler, DiamondsFour } from "phosphor-react";

const AboutUs = () => {
  return (
    <section className="relative w-full py-16 bg-background-500 text-text-500 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary-500 mb-4">
            About Us
          </h2>
          <p className="text-text-400 leading-relaxed">
            We are a collective of designers and architects dedicated to
            creating spaces that embody quiet sophistication. Every project is a
            dialogue between architecture, light, and the human experience —
            shaped with intention and precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              icon: <Buildings size={40} className="text-primary-500" />,
              title: "Architectural Harmony",
              desc: "Our philosophy blends proportion, rhythm, and spatial clarity — crafting structures that breathe elegance and purpose.",
            },
            {
              icon: <Ruler size={40} />,
              title: "Tailored Precision",
              desc: "From concept to finish, each line, material, and detail is curated to reflect your individuality with meticulous accuracy.",
            },
            {
              icon: <DiamondsFour size={40} />,
              title: "Refined Luxury",
              desc: "We design experiences that feel effortless — understated yet striking, timeless yet deeply personal.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-surface-500 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-text-400/ leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
