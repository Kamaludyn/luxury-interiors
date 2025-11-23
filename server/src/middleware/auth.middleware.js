import { verifyToken } from "../lib/jwt.js";
import User from "../models/auth.model.js";

// Middleware to authenticate users based on JWT
const authenticate = async (req, res, next) => {
  // Extract the Authorization header
  const authHeader = req.headers.authorization;

  // Ensure token exists and is properly formatted
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  // Extract the token part from "Bearer <token>"
  const token = authHeader.split(" ")[1];

  try {
    // Verify the token and decode the payload
    const decoded = verifyToken(token);

    const user = await User.findById(decoded.userId).select("-password");

    // Verify session version
    // if (decoded.sessionVersion !== user.sessionVersion - 1) {
    //   return res.status(401).json({ message: "Logged in somewhere else" });
    // }

    // Attach decoded user info to the request object
    req.user = user;

    // Pass control to the route handler
    next();
  } catch (error) {
    // Forward errors to global error handler middleware
    next(error);
  }
};

export default authenticate;
