import cloudinary from "../../../server/cloudinary/config"

export default async (req, res) => {
    const { limit = 10 } = req.query;
    try {
        const { resources } = await cloudinary.api.resources({
            resource_type: 'video',
            type: 'upload',
            max_results: limit,
            context: true
        });
        res.status(200).json(resources);
    } catch ({ error }) {
        res.status(error.http_code).json({ error: error.message });
    }
};
