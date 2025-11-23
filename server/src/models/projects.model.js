import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    posterImage: {
      secureUrl: { type: String },
      publicId: { type: String },
    },

    galleryImages: [
      {
        secureUrl: { type: String },
        publicId: { type: String },
      },
    ],
    location: {
      type: String,
    },
    year: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
