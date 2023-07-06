import cloudinary from "../../../server/cloudinary/config"

export default async (req, res) => {
    try {
        const response = await cloudinary.api.resource(req.query.id, {
            resource_type: 'video',
            type: 'upload',
            context: true
        })
        res.status(200).json(response)
    } catch ({ error }) {
        res.status(error.http_code).json({ error: error.message });
    }
};
