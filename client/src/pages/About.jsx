import { motion } from "framer-motion";
import { MapPin } from "phosphor-react";
import gypsum from "../assets/imgs/modern-gypsum.jpg";

const About = () => {
  return (
    <div className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
      <div className="w-full bg-primary-600 px-10 md:px-32 pt-32 md:pt-18 pb-6">
        <h2 className="container text-center md:text-left text-4xl font-black text-primary-500">
          About
        </h2>
      </div>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full my-4 md:my-10">
          <div className="md:w-4/6 py-6 rounded-md">
            <h3 className="font-bold text-4xl md:text-7xl text-primary-500 md:py-6 leading-10">
              Who{" "}
              <span className="font-black text-primary-600 underline">
                we are?
              </span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              consequatur natus mollitia minus tenetur corporis vel dicta
              provident distinctio sit vero ab fugit, impedit nihil autem atque.
              Quaerat doloremque accusamus corrupti unde expedita doloribus.
              Laborum quis ut impedit at dolore dolor ex, possimus magni veniam,
              praesentium rem. Perferendis ratione nulla ex facere, minima nemo
              ad cum error veniam, eveniet modi exercitationem laborum,
              voluptatum beatae eaque qui. Impedit in eveniet totam alias
              blanditiis, pariatur iure voluptate perspiciatis voluptates
              dolorem id fugit nostrum minus quisquam
            </p>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 justify-between space-y-2 md:space-y-4 my-4 md:my-6">
              <li className="flex items-center gap-4">
                <span className="bg-primary-500 text-surface-500 hover:bg-primary-600 p-2 rounded-md">
                  <MapPin size={25} weight="fill" />
                </span>{" "}
                <span>Lorem, ipsum.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-500 text-surface-500 hover:bg-primary-600 p-2 rounded-md">
                  <MapPin size={25} weight="fill" />
                </span>{" "}
                <span>Lorem, ipsum.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-500 text-surface-500 hover:bg-primary-600 p-2 rounded-md">
                  <MapPin size={25} weight="fill" />
                </span>{" "}
                <span>Lorem, ipsum.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-500 text-surface-500 hover:bg-primary-600 p-2 rounded-md">
                  <MapPin size={25} weight="fill" />
                </span>{" "}
                <span>Lorem, ipsum.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-500 text-surface-500 hover:bg-primary-600 p-2 rounded-md">
                  <MapPin size={25} weight="fill" />
                </span>{" "}
                <span>Lorem, ipsum.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="bg-primary-500 text-surface-500 hover:bg-primary-600 p-2 rounded-md">
                  <MapPin size={25} weight="fill" />
                </span>{" "}
                <span>Lorem, ipsum.</span>
              </li>
            </ul>
          </div>
          <motion.img
            src={gypsum}
            alt={"about-img"}
            className="md:w-2/6 h-fit object-cover transform group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-md"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
