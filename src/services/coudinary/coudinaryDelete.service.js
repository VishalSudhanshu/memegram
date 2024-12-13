import { v2 as cloudinary } from 'cloudinary';
import { cloudinaryInstance } from "../../config/cloudinaryConfig.js";

export const deleteImageFromCloudinary = async (publicId) => {
  try {
    cloudinaryInstance()
    const result = await cloudinary.uploader.destroy(publicId);
    console.log("Image deleted:", result);
    return result;
  } catch (error) {
    console.error("Error deleting image:", error);
    throw error;
  }
};