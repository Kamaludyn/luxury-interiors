import { useState, useEffect } from "react";
import { CaretLeft, CaretRight } from "phosphor-react";
import tvWallDesign from "../../../assets/imgs/tv-hero-ac&d.webp";
import customShelves from "../../../assets/imgs/custom-shelves-hero-ac&d-abuja.webp";
import drywall from "../../../assets/imgs/drywall-partition.webp";

const heroImages = [
  {
    title: "High-end POP Ceilings & Interior Decoration Services in Abuja",
    subTitle: "Transforming spaces with elegance and comfort.",
    image: tvWallDesign,
  },
  {
    title: "Expert Gypsum Ceilings, Shelves & Wall Partitions",
    subTitle: "Your vision, beautifully brought to life.",
    image: customShelves,
  },
  {
    title: "Complete Interior Finishing & Painting Solutions",
    subTitle:
      "We elevate your living and working spaces with top-notch craftsmanship.",
    image: drywall,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    const timer = setTimeout(handleNext, 12000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <section className="relative group min-h-screen py-24 flex items-center justify-center overflow-hidden bg-background-500 text-text-500">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages[currentIndex].image}
          alt={`${heroImages[currentIndex].title} - AC&D Abuja`}
          className="w-full h-full object-cover opacity-90"
          fetchPriority="high"
          loading="eager"
          width="1600"
          height="900"
        />

        <div className="flex justify-between w-[95%] absolute top-[40%] left-[2.5%] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button onClick={handlePrev} aria-label="Previous Slide">
            <CaretLeft
              size={40}
              weight="bold"
              className="bg-surface-500/70 text-primary-500 rounded-full shadow-lg z-50"
            />
          </button>
          <button onClick={handleNext} aria-label="Next Slide">
            <CaretRight
              size={40}
              weight="bold"
              className="bg-surface-500/70 text-primary-500 rounded-full shadow-lg z-50"
            />
          </button>
        </div>
        <div className="absolute inset-0 bg-linear-to from-black/40 to-transparent"></div>
      </div>

      <div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        key={currentIndex}
        className="relative z-10 text-center px-6 mt-auto md:mt-0 md:mx-auto"
      >
        <h1 className="w-fit mx-auto bg-primary-500 text-surface-600 px-6 py-2 text-xl md:text-3xl lg:text-4xl font-semibold rounded-4xl leading-tight">
          {heroImages[currentIndex].title}
        </h1>

        <p className="bg-surface-500 pt-4 pb-2 px-4 -mt-2 text-base md:text-xl text-primary-500 max-w-2xl mx-auto rounded-4xl leading-relaxed">
          {heroImages[currentIndex].subTitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
