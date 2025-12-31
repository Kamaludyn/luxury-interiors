import mongoose from "mongoose";
import slugify from "slugify";

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
    slug: {
      type: String,
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

ProjectSchema.pre("save", function (next) {
  if (this.slug) return next();

  const shortId = this._id.toString().slice(-6);

  this.slug = slugify(`${this.title} ${this.location} ${shortId}`, {
    lower: true,
    strict: true,
  });

  next();
});

export default mongoose.model("Project", ProjectSchema);
