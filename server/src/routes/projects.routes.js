import express from "express";
import projectController from "../controllers/projects.controller.js";
import verify from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";

const router = express.Router();

// *** Public Routes *** //

// @route  GET /api/project?page&limit
router.get("/", projectController.getAllProjects);

// @route  GET /api/project/:id
router.get("/:projectId", projectController.getProjectById);

// *** Private Routes *** //
router.use(verify);

// @route  POST /api/project
router.post(
  "/",
  upload.fields([
    { name: "posterImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 10 },
  ]),
  projectController.addProject
);

// @route  PATCH /api/project/:id
router.patch(
  "/:projectId",
  upload.fields([
    { name: "posterImage", maxCount: 1 },
    { name: "galleryImages", maxCount: 10 },
  ]),
  projectController.updateProject
);

// @route  DELETE /api/project/:id
router.delete("/:projectId", projectController.deleteProject);

export default router;
