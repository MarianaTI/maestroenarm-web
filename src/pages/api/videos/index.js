import cloudinary from "../../../server/cloudinary/config"

export default async function handler(req, res) {
    const { limit = 10, title = '', specialties = '' } = req.query;
    try {
        if (specialties && title) {
            const { resources } = await cloudinary.search.expression(
                `resource_type:video AND (context.caption:${title} OR tags:${specialties})`)
                .with_field('context')
                .execute()
            res.status(200).json(resources)
        }
        if (title) {
            const { resources } = await cloudinary.search.expression(
                `resource_type:video AND context.caption:${title}`)
                .with_field('context')
                .execute()
            res.status(200).json(resources)
        }
        if (specialties) {
            const { resources } = await cloudinary.search.expression(
                `resource_type:video AND tags:${specialties}`)
                .with_field('context')
                .execute()
            res.status(200).json(resources)
        }
        const { resources } = await cloudinary.search.expression(`resource_type:video`).with_field('context').max_results(limit).execute()
        res.status(200).json(resources)
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
};
