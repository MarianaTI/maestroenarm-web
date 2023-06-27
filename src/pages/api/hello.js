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



//audiolibros

// export default async function handlerAudiobook(req, res) {
//   const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
//   const API_KEY = process.env.CLOUDINARY_API_KEY;
//   const API_SECRET = process.env.CLOUDINARY_API_SECRET;
  
//   try {
//     // Construye la URL para extraer el audio del video (convertirlo a formato mp3)
//     const audioUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/fl_spliced.audio_formats(mp3)/${PUBLIC_ID}.mp3`;

//     res.status(200).json({ audioUrl });
// } catch (error) {
//     res.status(500).json({ error: error.message });
// }
// }
