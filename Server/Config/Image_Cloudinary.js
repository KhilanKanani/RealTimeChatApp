const cloudinary = require('cloudinary');
const fs = require("fs");

const UploadOnCloudinary = async (filePath) => {
    // Configuration
    cloudinary.config({
        cloud_name: `${process.env.CLOUD_NAME}`,
        api_key: `${process.env.CLOUD_API_KEY}`,
        api_secret: `${process.env.CLOUD_API_SECRET}`
    });

    try {
        // Upload an image
        const uploadResult = await cloudinary.uploader.upload(filePath);
        // Jaha Jaha Pe FilePath Hoga Vaha Se Delete Kar Dega
        fs.unlinkSync(filePath);
        return uploadResult.secure_url;
    }

    catch (err) {
        fs.unlinkSync(filePath);
        console.log("UploadOnCloudinary Error :", err.message);
    }
}

module.exports = UploadOnCloudinary;