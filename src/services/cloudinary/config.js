import { Cloudinary } from "@cloudinary/url-gen"

export const cloudinaryReact = new Cloudinary({
    cloud: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
        apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
        apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY
    }
})
