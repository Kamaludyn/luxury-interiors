import mongoose from "mongoose";

// Connect to MongoDB using Mongoose
const connectDB = async () => {
  // Check if the CONNECTION_STRING environment variable is set
  const conn = await mongoose.connect(process.env.CONNECTION_STRING);
  console.log(`MongoDB connected successfully: ${conn.connection.host}`);
};

export default connectDB;
