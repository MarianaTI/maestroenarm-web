export default async function handler(req, res) {
	const { resources } = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/search?expression=resource_type:video&with_field=context`, {
		headers: {
			Authorization: `Basic ${Buffer.from(process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY + ':' + process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET).toString('base64')}`
		}
	}).then(res => res.json()).catch(err => err)
	res.status(200).json(resources)
}
