import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CaretLeft, CaretRight } from "phosphor-react";
import hero1 from "../../../assets/imgs/hero.jpg";
import hero2 from "../../../assets/imgs/hero-shelves.jpg";
import hero3 from "../../../assets/imgs/drywall-partition.jpeg";

const heroImages = [
  {
    title: "Redefining Luxury",
    subTitle: "Transforming spaces with elegance and comfort",
    image: hero1,
  },
  {
    title: "Visionary Creations",
    subTitle: "Your vision, beautifully brought to life.",
    image: hero2,
  },
  {
    title: "Inspired Design",
    subTitle: "Elevate your living through inspired design",
    image: hero3,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  // Go to the next hero image in the carousel
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  // Go to the previous image in the carousel
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length
    );
  };

  // Transition to the next image every 5 seconds
  useEffect(() => {
    const timer = setTimeout(handleNext, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
    <section
      ref={ref}
      className="relative group min-h-screen py-24 flex items-center justify-center overflow-hidden bg-background-500 text-text-500"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroImages[currentIndex].image}
          // src={hero}
          alt="Luxury Interior Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="flex justify-between w-[95%] absolute top-[40%] left-[2.5%] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <CaretLeft
            size={40}
            weight="bold"
            className="bg-surface-500/70 text-primary-500 rounded-full text-center text-4xl cursor-pointer shadow-lg z-50"
            onClick={handlePrev}
          />
          <CaretRight
            size={40}
            weight="bold"
            className="bg-surface-500/70 text-primary-500 rounded-full text-center text-4xl cursor-pointer shadow-lg z-50"
            onClick={handleNext}
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent dark:from-black/60"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center px-6 mt-auto md:mt-0 md:mx-auto"
      >
        <h1 className="w-fit mx-auto bg-primary-500 text-surface-600 px-6 py-2 text-2xl md:text-3xl lg:text-5xl font-semibold dark:text-accent-800 rounded-4xl leading-tight animate-fadeIn">
          {heroImages[currentIndex].title}
          {/* Redefining Luxury */}
          {/* <br /> in Modern Home Design */}
        </h1>
        <p className="bg-surface-500 py-2 px-4 -mt-2 text-lg md:text-xl text-primaary-500 max-w-2xl mx-auto rounded-4xl leading-relaxed z-50">
          {heroImages[currentIndex].subTitle}
          {/* Transforming spaces with elegance and comfort */}
        </p>
      </motion.div>
    </section>
  );
};

export default Hero;
