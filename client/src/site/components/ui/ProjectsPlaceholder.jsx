import { ArrowRight } from "phosphor-react";

const ProjectsPlaceholder = ({ projectsNumber, isGrid4 = false }) => {
  return (
    <div
      className={`grid gap-8 ${isGrid4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}
    >
      {[...Array(projectsNumber)].map((_, index) => (
        <div
          key={index}
          className="relative overflow-hidden rounded-2xl shadow-lg animate-pulse bg-surface-600"
        >
          <div className="w-full h-80 bg-surface-500/50 rounded-2xl" />
          <div className="absolute inset-4 rounded-lg bg-primary-500/20" />
          <div className="absolute top-6 bottom-6 left-6 right-6 flex flex-col justify-between">
            <div className="h-6 w-2/3 bg-surface-500/60 rounded" />
            <ArrowRight
              size={32}
              weight="bold"
              className="text-surface-500/60 ml-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPlaceholder;
