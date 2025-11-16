import { motion } from "framer-motion";
import gypsum from "../assets/imgs/modern-gypsum.jpg";

const ProjectDetails = () => {
  return (
    <div className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
      <div className="w-full bg-primary-600 px-10 md:px-32 pt-32 md:pt-18 pb-6">
        <h2 className="container text-center md:text-left text-4xl font-black text-primary-500">
          Project Details
        </h2>
      </div>
      <div className="container mx-auto p-6 md:py-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full my-4 md:my-10">
          <motion.img
            src={gypsum}
            alt={"gypsum project"}
            className="w-full md:w-[60%] h-[60vh] object-cover transform hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-md"
            whileHover={{ scale: 1.05 }}
          />

          <div className="w-[40%]">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias,
              nostrum corrupti similique natus voluptate placeat voluptas
              perferendis eum dolor distinctio. Sit, aspernatur facilis quas
              blanditiis fugit corporis ipsam, quibusdam nam tenetur quae iusto
              cumque quisquam.
            </p>
            <div className="flex flex-row items-center justify-between mt-6">
              <div className="flex-1 flex items-center">
                <span className="font-medium">Date Completed</span>

                {/* dotted line */}
                <span className="flex-1 w-1/2 border-b border-dashed border-primary-500/60 mx-3"></span>
              </div>

              {/* Value */}
              <span className="font-semibold">25th November, 2024</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-4xl text-primary-500">
            Full{" "}
            <span className="font-black text-primary-600 underline">
              Description
            </span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            porro est nam a impedit repellendus non ad ipsa nulla in nostrum
            odit modi totam corporis natus unde doloribus commodi repudiandae
            quod, voluptates amet rerum esse voluptate. Accusantium nihil,
            maxime dolorem voluptatibus qui repudiandae architecto eum eos
            soluta debitis recusandae ratione eaque ut fugiat, optio doloremque
            molestiae laudantium! Quia adipisci nobis blanditiis id minus
            veniam, harum odit nostrum qui magni fugit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
