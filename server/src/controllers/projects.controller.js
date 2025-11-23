import asyncHandler from "express-async-handler";
import Project from "../models/projects.model.js";
import { uploadToCloudinary, deleteFromCloudinary } from "../lib/cloudinary.js";

// @desc    Add a new project
// @route   POST /api/projects
// @access  Private
const addProject = asyncHandler(async (req, res, next) => {
  let uploadedPoster = null;
  let uploadedGallery = [];

  try {
    const { title, description, location, year } = req.body;
    const { id } = req.user;

    // Validate required fields
    if (!title || !description || !year) {
      return res.status(400).json({
        success: false,
        message: "Title, description and year fields are required!",
      });
    }

    // Upload provided poster Image
    if (req.files?.posterImage) {
      const file = req.files.posterImage[0];
      uploadedPoster = await uploadToCloudinary(file.path);
    }

    // Upload all provided gallery images
    if (req.files?.galleryImages) {
      uploadedGallery = await Promise.all(
        req.files.galleryImages.map((file) => uploadToCloudinary(file.path))
      );
    }

    // Save to db
    const project = await Project.create({
      userId: id,
      title,
      description,
      location,
      year,
      posterImage: uploadedPoster,
      galleryImages: uploadedGallery,
    });

    res.status(201).json({
      success: true,
      message: "Your Project have been added successfully",
      project,
    });
  } catch (error) {
    // Rollbal Cloudinary uploads
    try {
      if (uploadedPoster?.publicId) {
        await deleteFromCloudinary(uploadedPoster.publicId);
      }

      if (uploadedGallery.length > 0) {
        await Promise.all(
          uploadedGallery.map((img) => deleteFromCloudinary(img.publicId))
        );
      }
    } catch (rollbackError) {
      console.error("Rollback failed");
    }

    // Pass error to global handler
    next(error);
  }
});

// @desc    Fetch all projects
// @route   GET /api/project?page&limit
// @access  Private
const getAllProjects = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  // Pagination values
  const skip = (parseInt(page) - 1) * parseInt(limit);

  // Get total projects count
  const totalProjects = await Project.countDocuments();

  // Fetch all projects from db
  const projects = await Project.find()
    .skip(skip)
    .limit(parseInt(limit))
    .sort({ createdAt: -1 });

  // Return error if no project was found
  if (!projects || projects.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No projects found",
    });
  }

  res.status(200).json({
    success: true,
    projects,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalProjects / parseInt(limit)),
      totalItems: totalProjects,
    },
  });
});

// @desc    Fetch project
// @route   GET /api/projects/:projectId
// @access  Private
const getProjectById = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  // Fetch project by id
  const project = await Project.findById(projectId);

  // Return error if project not found
  if (!project)
    return res
      .status(404)
      .json({ success: false, message: "Project not found" });

  res.status(200).json({
    success: true,
    project,
  });
});

// @desc    Update a project
// @route   PATCH /api/projects/:projectId
// @access  Private
const updateProject = async (req, res) => {
  const { id } = req.user;
  const { projectId } = req.params;
  const { title, description, location, year } = req.body;

  let project = await Project.findById(projectId);

  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }

  if (project.userId.toString() !== id) {
    return res.status(403).json({
      success: false,
      message: "User not authorized to delete this project",
    });
  }

  // Update poster image if provided
  if (req.files?.posterImage) {
    const newPoster = await uploadToCloudinary(req.files.posterImage[0].path);

    // delete old poster image from Cloudinary
    if (project.posterImage) {
      await deleteFromCloudinary(project.posterImage.publicId);
    }

    project.posterImage = newPoster;
  }

  const imagesToRemove = req.body?.imagesToRemove;

  // Remove gallery images from Cloudinary and from DB
  if (imagesToRemove) {
    const imagesPublicIds = JSON.parse(imagesToRemove);

    for (let img of imagesPublicIds) {
      await deleteFromCloudinary(img);
    }

    project.galleryImages = project.galleryImages.filter(
      (img) => !imagesPublicIds.includes(img.publicId)
    );
  }

  // Add new gallery images
  if (req.files?.galleryImages) {
    const newGallery = await Promise.all(
      req.files.galleryImages.map((file) => uploadToCloudinary(file.path))
    );

    project.galleryImages.push(...newGallery);
  }

  // Update text fields
  if (title) project.title = title;
  if (description) project.description = description;
  if (location) project.location = location;
  if (year) project.year = year;

  await project.save();

  res.status(200).json({
    success: true,
    message: "Project updated successfully",
    project,
  });
};

// @desc    Delete a project
// @route   DELETE /api/projects/:projectId
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
  const { projectId } = req.params;
  const { id } = req.user;

  const project = await Project.findById(projectId);

  // Return error if project not found
  if (!project)
    return res
      .status(404)
      .json({ success: false, message: "Project not found" });

  // Check if the user is authorized to delete the project
  if (project.userId.toString() !== id) {
    return res.status(403).json({
      success: false,
      message: "User not authorized to delete this project",
    });
  }

  // Delete poster image from Cloudinary
  if (project.posterImage) {
    await deleteFromCloudinary(project.posterImage.publicId);
  }

  // Delete gallery images from Cloudinary
  if (project.galleryImages && project.galleryImages.length > 0) {
    for (let img of project.galleryImages) {
      await deleteFromCloudinary(img.publicId);
    }
  }

  // Delete project from DB
  await project.deleteOne();

  res.status(200).json({
    success: true,
    message: "Project deleted successfully",
  });
});

const projectController = {
  addProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
};

export default projectController;
