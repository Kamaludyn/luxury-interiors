import express from "express";
import projectController from "../controllers/projects.controller.js";
import verify from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// *** Public Routes *** //

// @route  GET /api/projects/count
router.get("/count", projectController.getProjectsCount);

// @route  GET /api/projects?page&limit
router.get("/", projectController.getAllProjects);

// @route  GET /api/projects/:id
router.get("/:projectSlug", projectController.getProjectBySlug);

// *** Private Routes *** //
router.use(verify);

// @route  POST /api/projects
router.post(
  "/",
  upload.fields([
    { name: "posterImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 10 },
  ]),
  projectController.addProject
);

// @route  PATCH /api/projects/:id
router.patch(
  "/:projectId",
  upload.fields([
    { name: "posterImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 10 },
  ]),
  projectController.updateProject
);

// @route  DELETE /api/projects/:id
router.delete("/:projectId", projectController.deleteProject);

export default router;
