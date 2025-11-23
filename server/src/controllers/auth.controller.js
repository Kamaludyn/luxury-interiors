import crypto from "crypto";
import asyncHandler from "express-async-handler";
import { signToken } from "../lib/jwt.js";
import User from "../models/auth.model.js";
import sendEmail from "../lib/sendEmail.js";

//  @desc    Registers a new user
//  @route   POST /api/auth/register
//  @access  Public
const register = asyncHandler(async (req, res) => {
  // Extract user details from the request body
  const { surname, othername, email, password } = req.body;

  // Basic input validation
  if (!surname || !othername || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  // Check if user with provided email already exists
  const userExists = await User.findOne({ email: email.toLowerCase() });
  if (userExists) {
    return res.status(409).json({
      success: false,
      message: "User with this email already exists",
    });
  }

  // Create and save the new user
  const user = await User.create({
    surname,
    othername,
    email: email.toLowerCase(),
    password,
  });

  res.status(201).json({
    success: true,
    message: "Registration successful.",
    user,
  });
});

//  @desc   Login a user
//  @route  POST /api/auth/login
//  @access Public
const login = asyncHandler(async (req, res) => {
  // Destructure email and password from the request body
  const { email, password } = req.body;

  // Validate the email and password
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  // Find the user by email and explicitly include the password field
  const userDoc = await User.findOne({ email: email.toLowerCase() }).select(
    "+password"
  );

  // If user doesn't exist, return unauthorized error
  if (!userDoc) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  // Compare provided password with hashed password in DB
  const passwordMatch = await userDoc.comparePassword(password);

  // If password doesn't match, return error
  if (!passwordMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  // Generate JWT token
  const token = signToken({
    userId: userDoc._id,
    // sessionVersion: userDoc.sessionVersion,
  });

  // userDoc.sessionVersion += 1;
  userDoc.save();

  // Convert Mongoose doc to plain object and remove password
  const user = userDoc.toObject();
  delete user.password;

  // Send token and user info as response
  res.status(200).json({
    success: true,
    message: "Login Successful",
    token,
    user,
  });
});

//  @desc   Allows an authenticated user to change their password
//  @route  PATCH /api/auth/change-password
//  @access Private
const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const userId = req.user._id;

  // Find the user and explicitly include the password field
  const user = await User.findById(userId).select("+password");

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  // Prevent user from reusing their current password
  if (currentPassword === newPassword) {
    return res.status(400).json({
      success: false,
      message: "New password must be different",
    });
  }

  // Compare entered current password with stored hash
  const isPasswordMatch = await user.comparePassword(currentPassword);

  if (!isPasswordMatch) {
    return res.status(401).json({
      success: false,
      message: "Current password is incorrect",
    });
  }

  // Update password (hashing handled in user model pre-save hook)
  user.password = newPassword;
  await user.save();

  // Issue new JWT
  const token = signToken({ userId: user._id, role: user.role });

  res.status(200).json({
    success: true,
    message: "Password changed successfully",
    token,
  });
});

//  @desc   Initiates a password reset process by sending a reset link to the user's email
//  @route  POST /api/auth/forgot-password
//  @access Public
const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  // Check if user with given email exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "No user with that email",
    });
  }

  // Check if a recent token already exists and is still valid
  if (user.passwordResetExpires && user.passwordResetExpires > Date.now()) {
    return res.status(429).json({
      success: false,
      message:
        "A reset token has been recently sent. Please check your email or try again later.",
    });
  }

  // Generate password reset token and attach to user
  const resetToken = user.generatePasswordResetToken();

  //  Save user without running validation (password is not being changed)
  await user.save({ validateBeforeSave: false });

  // Construct reset link
  const resetURL = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;

  // Define email content
  const subject = "Password Reset Request";
  const message = `You requested a password reset. Click below to reset your password:\n\n${resetURL}\n\nIf you didn't request this, ignore this message.`;

  // Send email to user
  await sendEmail({
    to: user.email,
    subject,
    text: message,
  });

  res.status(200).json({
    success: true,
    message: `A password reset link is has been sent to ${email} and will expire in 10 minutes!`,
  });
});

//  @desc   Resets user password using a valid reset token
//  @route  PATCH /api/v1/auth/reset-password/:token
//  @access Public
const resetPassword = asyncHandler(async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  // Validate provided password
  if (!password) {
    return res.status(400).json({
      success: false,
      message: "Password is required",
    });
  }
  // Hash provided token to match the stored hashed version
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  // Find user using the valid unexpired token
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // If token invalid or expired, send error
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "Token is invalid or has expired",
    });
  }

  // Update password (pre-save hook will hash it automatically)
  user.password = password;

  // Clear reset token fields
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  // Save the user
  // (this will trigger password hashing via pre-save hook)
  await user.save();

  // Auto-login user by issuing JWT
  const tokenPayload = {
    userId: user._id,
    sessionVersion: user.sessionVersion,
  };
  const authToken = signToken(tokenPayload);

  // Respond with success and token
  res.status(200).json({
    success: true,
    message: "Password reset successful",
    token: authToken,
    user,
  });
});

//  @desc   Log out user
//  @route  PATCH /api/v1/auth/logout
//  @access Public
const logout = (req, res) => {
  res.json({
    success: true,
    message: "You are logged out successfully!",
  });
};

const authControllers = {
  register,
  login,
  forgotPassword,
  resetPassword,
  changePassword,
  logout,
};
export default authControllers;
