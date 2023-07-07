import cloudinary from "../../../server/cloudinary/config"

export default async (req, res) => {
    const { limit = 10, title } = req.query;
    try {
        if (title) {
            const { resources } = await cloudinary.search.expression(`context.caption:${title} AND resource_type:video`).with_field('context').execute()
            res.status(200).json(resources)
        }
        const { resources } = await cloudinary.search.expression(`resource_type:video`).with_field('context').execute()
        res.status(200).json(resources)
    } catch ({ error }) {
        res.status(error.http_code).json({ error: error.message });
    }
};
