import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Upload an image to Cloudinary
export const uploadToCloudinary = async (filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: "luxury_projects",
  });
  return {
    secureUrl: result.secure_url,
    publicId: result.public_id,
  };
};

// Delete an image from Cloudinary by its public ID
export const deleteFromCloudinary = async (publicId) => {
  await cloudinary.uploader.destroy(publicId);
};
