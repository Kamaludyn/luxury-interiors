import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "../../assets/imgs/hero.jpg";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-500 text-text-500"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={hero}
          alt="Luxury Interior Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent dark:from-black/60"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-6 mt-auto md:mt-0 md:mx-auto"
      >
        <h1 className="w-fit mx-auto bg-primary-500 text-surface-600 px-6 py-2 text-2xl md:text-3xl lg:text-5xl font-semibold dark:text-accent-800 rounded-4xl leading-tight animate-fadeIn">
          Redefining Luxury
          {/* <br /> in Modern Home Design */}
        </h1>
        <p className="bg-surface-500 py-2 px-4 -mt-2 text-lg md:text-xl text-primaary-500 max-w-2xl mx-auto rounded-4xl leading-relaxed z-50">
          Transforming spaces with elegance and comfort
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
