import HelmetSEO from "../components/seo/HelmetSEO";
import { motion } from "framer-motion";
import { MapPin } from "phosphor-react";
import gypsum from "../../assets/imgs/modern-gypsum.jpg";
import Header from "../components/ui/Header";

const About = () => {
  return (
    <>
      <HelmetSEO
        title="About Us"
        description="Learn more about Abdulkarim Ceiling and Decor, the best interior finishing experts in Abuja. Specializing in premium POP ceilings, gypsum installations, and modern TV wall designs across Nigeria."
        path="/about-us"
      />
      <main className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
        <Header title={"Who are we?"} />
        <div className="container mx-auto px-6 py-8 md:py-10 md:px-12 lg:px-20 relative z-10">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
            <section className="w-full text-center md:text-left md:w-4/6 pb-6 rounded-md">
              <p className="leading-relaxed text-text-600 md:text-lg">
                We are a dedicated team of interior finishing professionals who
                take pride in delivering clean, modern, and durable interior
                finishing projects across Abuja, FCT, and throughout Nigeria.
                Our work is rooted in precision, quality craftsmanship, and a
                deep understanding of interior design aesthetics.
                <br />
                <br />
                From modern gypsum ceilings with lighting integration to TV wall
                designs, POP wall screeding, and drywall partitioning; our focus
                is to transform ordinary spaces into elegant and functional
                interiors. We combine the right materials, skilled artisans, and
                efficient project execution to ensure every project meets
                premium standards.
              </p>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {[
                  "Gwarinpa, Abuja",
                  "Wuse & Wuse 2",
                  "Maitama",
                  "Lugbe & Airport Road",
                  "Lokogoma",
                  "Kubwa & Dawaki",
                ].map((loc, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="bg-primary-500 text-surface-500 p-2 rounded-md">
                      <MapPin size={25} weight="fill" />
                    </span>
                    <span className="font-medium">{loc}</span>
                  </li>
                ))}
              </ul>
              <p className="hidden md:block mt-6 text-text-600 leading-relaxed">
                We proudly serve clients in these key locations and also handle
                nationwide interior decoration projects upon request.
              </p>
            </section>
            <motion.img
              src={gypsum}
              alt="Modern gypsum ceiling and interior design project in Abuja"
              className="md:w-2/6 max-h-[67vh] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-md"
              whileHover={{ scale: 1.05 }}
              loading="lazy"
            />
            <p className="md:hidden mt-6 md:mt-8 text-text-600 leading-relaxed">
              We proudly serve clients in these key locations and also handle
              nationwide interior decoration projects upon request.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
