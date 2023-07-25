import cloudinary from "../../../../server/cloudinary/config";

export default async function handler(req, res) {
    try {
        const { resources } = await cloudinary.search.expression(`tags:premium AND resource_type:video`).with_field('context').execute()
        res.status(200).json(resources)
    } catch ({ error }) {
        res.status(error.http_code).json({ error: error.message });
    }
};
