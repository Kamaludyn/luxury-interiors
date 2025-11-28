import { X } from "phosphor-react";

const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-2 py-2 bg-primary-500/50">
      <div className="bg-surface-600 rounded-lg p-6 my-2 w-full max-w-2xl overflow-y-auto max-h-full">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-black">{project?.title}</h3>
          <button onClick={onClose} className="text-danger-800 cursor-pointer">
            <X size={28} weight="bold" />
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* <div className="col-span-1"> */}
          <img
            src={project?.posterImage?.secureUrl}
            alt={project?.title}
            className="w-full h-60 object-cover md:order-1 rounded"
          />
          <div className="mt-4 md:order-3 md:col-span-2">
            <h4 className="font-medium mb-2">Gallery Images</h4>
            <div className="grid grid-cols-3 gap-2">
              {project?.galleryImages?.map((g) => (
                <img
                  key={g.publicId}
                  src={g.secureUrl}
                  alt="gallery"
                  className="w-full h-32 object-cover rounded"
                />
              ))}
            </div>
          </div>
          <div className="md:order-2 space-y-2">
            <div>
              <strong>Description:</strong>
              <p className="text-sm text-muted mt-2">{project?.description}</p>
            </div>
            <div>
              <strong>Location:</strong> {project?.location}
            </div>
            <div>
              <strong>Year:</strong> {project?.year}
            </div>
            <div>
              <strong>Created:</strong>{" "}
              {new Date(project?.createdAt).toLocaleString()}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
