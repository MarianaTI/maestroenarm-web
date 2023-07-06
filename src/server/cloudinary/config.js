import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
})

export default cloudinary;