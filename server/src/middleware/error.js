// Global Error Handling Middleware
const errorHandler = (err, req, res, next) => {
  // Set default status code and message if not explicitly set
  const statusCode = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  process.env.NODE_ENV === "development" &&
    console.error({
      message,
      stack: err.stack,
    });

  // Respond with standardized error object
  res.status(statusCode).json({
    success: false,
    message,
    stack: err.stack,
  });
};

export default errorHandler;
