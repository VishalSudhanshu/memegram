import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import { cloudinaryInstance } from '../../config/cloudinaryConfig.js';

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null
    cloudinaryInstance()
    const response = await cloudinary.uploader.upload(localFilePath, { resource_type: "auto" })
    console.log("File uploaded on Cloudinary\n", response.url);
    return response
  } catch (error) {
    console.log("Cloudinary upload error", error);
    return null
  } finally {
    if (fs.existsSync(localFilePath)) {
      fs.unlink(localFilePath, () => {
        console.log("file deleted from server successfully");
      });
    }
  }
}
