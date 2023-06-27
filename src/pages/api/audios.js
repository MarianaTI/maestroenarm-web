import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: ddqxeu7xc,
    api_key: 837773733151954,
    api_secret: HGcAPgJWVVzj9S1vFmd8BNpauDU
});

export default async(req, res) => {
    try {
        const { resources } = await cloudinary.v2.api.resources({
            resource_type: 'video',
            type: 'upload',
            prefix: 'audibooks-academy'
        });

        const audios = resources.filter(resource => resource.format === 'mp3');
        res.status(200).json(audios);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching audios' });
    }
};
