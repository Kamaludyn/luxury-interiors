import { motion } from "framer-motion";
import { UsersThree, Timer, Medal} from "phosphor-react";

const AboutUs = () => {
  return (
    <section className="relative w-full py-16 bg-background-500 text-text-500 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary-500 mb-4">
            Professional Ceiling & Interior Decoration Experts in Abuja
          </h2>
          <p className="text-text-400 leading-relaxed">
            We are a trusted ceiling and interior decoration company based in Abuja, offering Gypsum ceilings, gypsum board installations, Tv design, wall paneling, partitions, shelving, and complete interior finishing. With years of experience and a strong reputation for quality, we deliver durable craftsmanship, clean finishing, and timely project completion for homes, offices, hotels, and real estate projects across Abuja.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8 text-center">
          {[
            {
              icon: <Medal size={40} className="mx-auto" />,
              title: "Quality Craftsmanship",
              desc: "We use the best POP and gypsum materials to deliver long-lasting, premium finishes.",
            },
            {
              icon: <UsersThree size={40} className="mx-auto" />,
              title: "Experienced Team",
              desc: "Skilled artisans with years of experience in residential and commercial interior projects in Abuja.",
            },
            {
              icon: <Timer  size={40} className="mx-auto" />,
              title: "Timely Delivery",
              desc: "We design experiences that feel effortless, timeless yet deeply personal and we ensure every project is completed on schedule",
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
