import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectDetailsPlaceholder from "../components/ui/ProjectDetailsPlaceHolder";
import api from "../../shared/services/api";

const ProjectDetails = () => {
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    // Fetch project details
    const fetchProject = async () => {
      setIsLoading(true);
      const res = await api.get(`/projects/${id}`);
      setProject(res.data.project);
      setIsLoading(false);
    };
    // If project data is not available in state, fetch it using the id
    if (!location?.state) {
      // Fetch project details using the id
      fetchProject();
    } else {
      const { project } = location.state;
      setProject(project);
    }
  }, []);
  return isLoading ? (
    <ProjectDetailsPlaceholder />
  ) : (
    <div className="relative w-full bg-surface-500 dark:bg-background-800 text-text-500 dark:text-text-700 overflow-hidden">
      <div className="w-full bg-primary-600 px-10 md:px-32 pt-32 md:pt-18 pb-6">
        <h2 className="container text-center md:text-left text-4xl font-black text-primary-500">
          {project?.title}
        </h2>
      </div>
      <div className="container mx-auto p-6 md:py-8 pb-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full my-4 md:my-6">
          <motion.img
            src={project?.posterImage?.secureUrl}
            alt={project?.title}
            className="w-full md:w-[60%] h-[60vh] object-cover transform hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-md"
            whileHover={{ scale: 1.0 }}
          />

          <div className="w-[40%]">
            <div className="flex flex-row items-center justify-between mt-6">
              <div className="flex-1 flex items-center">
                <span className="font-medium">Location</span>
                <span className="flex-1 w-1/2 border-b border-dashed border-primary-500/60 mx-3"></span>
              </div>
              <span className="font-semibold">{project?.location}</span>
            </div>
            <div className="flex flex-row items-center justify-between mt-6">
              <div className="flex-1 flex items-center">
                <span className="font-medium">Date Completed</span>
                <span className="flex-1 w-1/2 border-b border-dashed border-primary-500/60 mx-3"></span>
              </div>
              <span className="font-semibold">{project?.year}</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-4xl text-primary-500 mb-2">
            Full{" "}
            <span className="font-black text-primary-600 underline">
              Description
            </span>
          </h4>
          <p>{project?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
