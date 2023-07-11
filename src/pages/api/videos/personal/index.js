import cloudinary from "../../../../server/cloudinary/config";

export default async (req, res) => {
    try {
        const response = await cloudinary.api.update('samples/sea-turtle', {
            access_control: ['authenticated']
        })
        res.status(200).json({ response })
    } catch (error) {
        res.status(500).json({ error });
    }
};
