import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../services/api";

export const useProjects = (page = 1, limit = 10) => {
  const fetchProjects = async () => {
    const { data } = await api.get(`/projects?page=${page}&limit=${limit}`);
    return data;
  };
  return useQuery({
    queryKey: ["projects", page, limit],
    queryFn: fetchProjects,
  });
};

export const useProjectsForm = () => {
  const queryClient = useQueryClient();

  const submitForm = async ({ projectId, form }) => {
    const fmdt = Object.fromEntries(form);
    console.log("fmt:", fmdt);
    if (projectId) {
      // Update Project
      const res = await api.patch(`/projects/${projectId}`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } else {
      // Add New Project
      const res = await api.post(`/projects`, form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    }
  };

  return useMutation({
    mutationFn: submitForm,
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (projectId) => {
      return api.delete(`/projects/${projectId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["projects"]);
    },
  });
};
