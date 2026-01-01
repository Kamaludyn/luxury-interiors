import "dotenv/config";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import connectDb from "./src/config/dbConnection.js";
import errorHandler from "./src/middleware/error.js";
import authRoutes from "./src/routes/auth.routes.js";
import projectsRoutes from "./src/routes/projects.routes.js";
import sitemapRoutes from "./src/routes/sitemap.routes.js";

// Initialize Express app
const app = express();

const allowedOrigin = process.env.CLIENT_URL;

// Establish connection to the database
(async () => {
  try {
    await connectDb();
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
})();

// Security Middleware
app.use(helmet()); // Secure HTTP headers
app.use(compression()); // Compress responses to improve performance
app.use(
  cors({
    origin: allowedOrigin,
  })
);

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Logging Middleware (Only in Development)
if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined")); // More detailed logs in production
} else {
  app.use(morgan("dev"));
}

// API Routes
app.use("/api/projects", projectsRoutes);
app.use("/api/auth", authRoutes);
app.use("/", sitemapRoutes);

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Global error handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
