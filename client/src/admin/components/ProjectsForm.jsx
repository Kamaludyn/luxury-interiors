import { useState } from "react";
import { useProjectsForm } from "../../shared/hooks/useProjects";
import { toast } from "@acrool/react-toaster";
import { ThreeDot } from "react-loading-indicators";
import { X } from "phosphor-react";

const ProjectsForm = ({ project, isEdit, onClose }) => {
  const [formData, setFormData] = useState({
    title: project.title,
    description: project.description,
    location: project.location,
    year: project.year,
  });

  const [posterPreview, setPosterPreview] = useState(
    project?.posterImage?.secureUrl
  );
  const [posterFile, setPosterFile] = useState(null);

  const [existingGallery, setExistingGallery] = useState(
    project?.galleryImages || []
  );
  const [galleryFiles, setGalleryFiles] = useState([]);

  // Track images user wants to remove
  const [removeList, setRemoveList] = useState([]);

  // Custom mutation hook
  const { mutate, isPending } = useProjectsForm(project?._id);

  // Handle form submission
  const handleSubmit = () => {
    const form = new FormData();
    form.append("title", formData.title);
    form.append("description", formData.description);
    form.append("location", formData.location);
    form.append("year", formData.year);

    if (posterFile) form.append("posterImage", posterFile);

    galleryFiles.forEach((file) => {
      form.append("galleryImages", file);
    });

    form.append("imagesToRemove", JSON.stringify(removeList));

    // Submit the form data
    mutate(
      { projectId: isEdit ? project._id : null, form },
      {
        onSuccess: (data) => {
          toast.success(data.message);
          onClose();
        },
        onError: (err) => {
          toast.error(err.response?.data?.message || "An error occurred");
        },
      }
    );
  };

  // Handle poster image change
  const handlePosterChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPosterFile(file);
      setPosterPreview(URL.createObjectURL(file));
    }
  };

  // Handle removing existing gallery image
  const handleRemoveGallery = (publicId) => {
    setExistingGallery((prev) =>
      prev.filter((img) => img.publicId !== publicId)
    );

    setRemoveList((prev) => [...prev, publicId]);
  };

  return (
    <div className="fixed inset-0 bg-primary-500/50 flex justify-center items-center px-2 py-2 z-50">
      <div className="bg-surface-600 rounded-xl p-6 my-2 w-full max-w-2xl overflow-y-auto max-h-full">
        <h2 className="text-xl font-semibold mb-4">
          {isEdit ? "Edit Project" : "Add New Project"}
        </h2>

        <form className="space-y-4">
          <input
            className="w-full p-2 border rounded"
            value={formData?.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Title"
            required
          />

          <textarea
            className="w-full p-2 border rounded"
            value={formData?.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            placeholder="Description"
            required
          />

          <div className="flex justify-between gap-2 md:gap-4">
            <input
              className="w-full p-2 border rounded"
              value={formData?.location}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, location: e.target.value }))
              }
              placeholder="Location"
            />

            <input
              className="w-full p-2 border rounded"
              value={formData?.year}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, year: e.target.value }))
              }
              placeholder="Year"
              required
            />
          </div>

          {/* POSTER IMAGE */}
          <div className="flex flex-col gap-4 h-full p-2">
            <div className="md:w-[40%] flex flex-col justify-between gap-2 h-full">
              <p className="font-medium">Poster Image</p>
              {posterPreview && (
                <img
                  src={posterPreview}
                  alt="Poster"
                  className="object-cover rounded mb-1"
                  required
                />
              )}
              <div>
                <label
                  className="bg-primary-500 text-surface-500 hover:text-primary-500 shadow-md hover:bg-transparent border hover:border border-primary-500 rounded px-3 py-1 cursor-pointer"
                  htmlFor="posterUpload"
                >
                  Upload Poster
                </label>
                <input
                  type="file"
                  id="posterUpload"
                  onChange={handlePosterChange}
                  className="hidden"
                />
              </div>
            </div>

            {/* GALLERY IMAGES */}
            <div className="w-full flex flex-col justify-between gap-2">
              <p className="font-medium">Gallery Images</p>
              <div className="flex flex-wrap gap-3 mb-1">
                {existingGallery.map((img) => (
                  <div
                    key={img?.publicId}
                    className="w-40 h-40 md:w-38 md:h-38 relative"
                  >
                    <img
                      src={img?.secureUrl}
                      className="h-full w-full rounded object-cover"
                    />
                    <button
                      onClick={() => handleRemoveGallery(img?.publicId)}
                      className="absolute top-1 right-[5%] bg-danger-800 text-white text-xs p-1 rounded"
                    >
                      <X size={16} weight="bold" />
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <label
                  className="bg-primary-500 text-surface-500 hover:text-primary-500 shadow-md hover:bg-transparent border hover:border border-primary-500 rounded px-3 py-1 cursor-pointer"
                  htmlFor="galleryUpload"
                >
                  Upload Gallery Images
                </label>
                <input
                  id="galleryUpload"
                  type="file"
                  multiple
                  className="block w-full my-2 border border-gray-300 rounded p-1"
                  onChange={(e) => setGalleryFiles([...e.target.files])}
                />
              </div>
            </div>
          </div>
        </form>

        <div className="mt-6 flex md:justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-300 hover:bg-transparent border border-gray-300 rounded cursor-pointer shadow-md disabled:cursor-not-allowed"
            onClick={onClose}
            disabled={isPending}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 w-40 bg-primary-500 text-surface-500 hover:text-primary-500 shadow-md hover:bg-transparent border hover:border border-primary-500 rounded cursor-pointer"
            onClick={handleSubmit}
            disabled={isPending}
          >
            {isPending ? (
              <ThreeDot color="var(--color-primary-600)" size="small" />
            ) : isEdit ? (
              "Save Changes"
            ) : (
              "Add Project"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectsForm;
