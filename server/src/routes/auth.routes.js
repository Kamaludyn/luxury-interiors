import express from "express";
import authController from "../controllers/auth.controller.js";
import authenticate from "../middleware/auth.middleware.js";

const router = express.Router();

// @route   POST /api/auth/register
router.post("/register", authController.register);

// @route   POST /api/auth/login
router.post("/login", authController.login);

// @route   POST /api/auth/forgot-password
router.post("/forgot-password", authController.forgotPassword);

// @route   PATCH /api/auth/change-password
router.patch("/change-password", authenticate, authController.changePassword);

// @route   PATCH /api/auth/reset-password/:token
router.patch("/reset-password/:token", authController.resetPassword);

// @route   Post /api/auth/logout
router.post("/logout", authController.logout);

export default router;
