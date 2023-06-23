// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const CLOUD_NAME = 'db0l9t7fr'
  const APi_KEY = '631147659653346'
  const API_SECRET = 'Sq6knO4gcBE7d9sbXdf8OxD6yTs'
  const { resources } = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?expression=resource_type:video&with_field=context`, {
    headers: {
      Authorization: `Basic ${Buffer.from(APi_KEY + ':' + API_SECRET).toString('base64')}`
    }
  }).then(res => res.json()).catch(err => err)

  res.status(200).json(resources)
}
