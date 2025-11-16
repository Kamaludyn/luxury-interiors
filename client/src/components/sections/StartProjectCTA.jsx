import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";

const StartProjectCTA = () => {
  return (
    <section className="relative w-full py-6 bg-primary-600">
      <div className="container mx-auto relative flex flex-col md:flex-row justify-center items-center gap-4 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-[90%] md:w-[80%] text-center md:text-left space-y-2 z-10"
        >
          <h2 className="text-primary-500 text-3xl md:text-5xl font-semibold font-['Cormorant_Garamond'] tracking-wide">
            Start a Project With Us
          </h2>
          <p className="text-base text-surface-500">
            Let’s turn your vision into a living masterpiece; crafted with
            precision, passion, and purpose.
          </p>
        </motion.div>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-500 font-medium rounded-full shadow-sm hover:bg-white/90 transition-all duration-300"
        >
          Contact Us
          <ArrowRight size={20} weight="bold" />
        </motion.a>
      </div>
    </section>
  );
};
export default StartProjectCTA;
