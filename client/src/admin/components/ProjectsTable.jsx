import { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Pen, Trash } from "phosphor-react";
import { useProjects } from "../../shared/hooks/useProjects";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectsTable = ({ onEdit, onDelete }) => {
  const [page, setPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);
  const limit = 10;

  // Data fetching
  const { data, isFetching } = useProjects(page, limit);

  const projects = data?.projects || [];
  const pagination = data?.pagination || {
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
  };

  const columns = useMemo(
    () => [
      {
        id: "image",
        accessorKey: "posterImage.secureUrl",
        header: "Image",
        cell: ({ row }) => (
          <img
            src={row.original.posterImage?.secureUrl}
            alt="Project"
            className="w-20 h-20 object-cover mx-auto rounded-lg"
          />
        ),
      },
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "location",
        header: "Location",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex justify-center gap-3">
            <Pen
              size={24}
              onClick={(e) => {
                e.stopPropagation();
                onEdit(row.original);
              }}
              className="text-primary-600 hover:text-primary-500 cursor-pointer"
            />

            <Trash
              size={24}
              onClick={(e) => {
                e.stopPropagation();
                onDelete(row.original);
              }}
              className="text-danger-800 hover:text-danger-800/90 cursor-pointer"
            />
          </div>
        ),
      },
    ],
    [onEdit, onDelete]
  );

  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
  });

  return (
    <div className="flex flex-col md:items-center md:justify-between gap-4 mb-4">
      <div className="w-full overflow-x-auto bg-accent-800 rounded-lg">
        <table className="w-full">
          <thead className="bg-accent-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-surface-600">
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="py-3 px-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {isFetching
              ? // placeholder Loading Rows
                [...Array(8)].map((_, i) => (
                  <tr key={i} className="border-b border-surface-600">
                    {table.getAllColumns().map((col, index) => (
                      <td key={index} className="py-3 px-4">
                        <div className="h-8 bg-surface-600/40 rounded animate-pulse"></div>
                      </td>
                    ))}
                  </tr>
                ))
              : table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    onClick={() => setSelectedProject(row.original)}
                    className="w-full border-b border-surface-600 hover:bg-surface-200/40 cursor-pointer"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="py-3 px-2 text-center">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
          </tbody>
        </table>
        <div className="w-full flex flex-col justify-center items-center my-2">
          <div className="mx-auto flex items-center justify-between my-1">
            <div>
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="px-3 py-1 bg-accent-800/40 border border-surface-600 rounded cursor-pointer mr-2 disabled:cursor-not-allowed"
              >
                Prev
              </button>
              <button
                disabled={page === pagination.totalPages}
                onClick={() =>
                  setPage((p) => Math.min(pagination.totalPages, p + 1))
                }
                className="px-3 py-1 bg-accent-800/40 border border-surface-600 rounded cursor-pointer disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>

          <div className="w-fit text-center text-sm">
            Page {page} of {pagination.totalPages} — {pagination.totalItems}{" "}
            items
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsTable;
