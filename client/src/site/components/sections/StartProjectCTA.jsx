import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";

const StartProjectCTA = () => {
  const Motionlink = motion.create(Link);

  return (
    <section className="relative w-full py-10 bg-primary-600">
      <div className="container mx-auto relative flex flex-col md:flex-row justify-center items-center gap-6 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full md:w-[70%] text-center md:text-left space-y-2 z-10"
        >
          <p className="text-surface-500 text-3xl md:text-5xl font-bold font-['Cormorant_Garamond'] tracking-wide">
            Start a Project With Us
          </p>
          <p className="text-base md:text-lg text-surface-500/90">
            Let’s turn your vision into a living masterpiece; crafted with
            precision, passion, and purpose in Abuja.
          </p>
        </motion.div>

        <Motionlink
          to="/contact-us"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label="Contact AC&D for an interior design consultation"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
        >
          Get a Quote
          <ArrowRight size={20} weight="bold" />
        </Motionlink>
      </div>
    </section>
  );
};

export default StartProjectCTA;
