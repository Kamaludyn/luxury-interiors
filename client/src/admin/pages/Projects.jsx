import { useState } from "react";
import { toast } from "@acrool/react-toaster";
import { FolderPlus } from "phosphor-react";
import ProjectsTable from "../components/ProjectsTable";
import PageHeader from "../components/PageHeader";
import ProjectsForm from "../components/ProjectsForm";
import { useDeleteProject } from "../../shared/hooks/useProjects";

const Projects = () => {
  const [formData, setFormData] = useState(null);
  const [isEdit, setIsEdit] = useState(null);

  const { mutate } = useDeleteProject();

  // Edit action
  const handleEdit = (project) => {
    setFormData(project);
    setIsEdit(true);
  };

  // Delete action
  const handleDelete = async (project) => {
    if (!confirm(`Do you want to Delete ${project.title}?`)) return;
    mutate(project._id, {
      onSuccess: (data) => {
        toast.success(data.message);
      },
      onError: (err) => {
        toast.error(err.response?.data?.message || "Failed to delete project");
      },
    });
  };

  const addNew = () => {
    setFormData({
      title: "",
      description: "",
      location: "",
      year: "",
    });
  };

  return (
    <section>
      <PageHeader
        title="My Projects"
        isButton
        actionLabel="Add New Project"
        actionIcon={FolderPlus}
        onActionClick={addNew}
      />
      <ProjectsTable onEdit={handleEdit} onDelete={handleDelete} />
      {formData && (
        <ProjectsForm
          project={formData}
          isEdit={isEdit}
          onClose={() => setFormData(null)}
        />
      )}
    </section>
  );
};

export default Projects;
