const cloudinary = require("cloudinary");
const multer = require("multer");
const cloudinaryStorage = require("multer-storage-cloudinary");
const dotenv = require('dotenv');
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "JoinUs",
    allowedFormats: ["jpg", "png","jpeg"],
    transformation: [{ width: 1000, height: 500, crop: "limit" }]
});


const parser = multer({ storage: storage });


module.exports = parser;