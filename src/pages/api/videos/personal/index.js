import cloudinary from "../../../../server/cloudinary/config";
import multer from 'multer';
import fs from 'fs';

const upload = multer({ dest: 'tmp/' });

export const config = {
  api: {
    bodyParser: false
  }
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Utiliza Multer para manejar la carga del archivo
      upload.single('file')(req, res, async (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error al subir el archivo' });
          return;
        }

        const file = req.file;
        const filePath = file.path;

        // Sube el archivo a Cloudinary
        const result = await cloudinary.uploader.upload(filePath, {
          type: 'private',
          resource_type: 'video'
        });

        console.log(result)
        // Elimina el archivo temporal
        fs.unlinkSync(filePath);

        // Devuelve la URL del archivo subido
        res.status(200).json({ url: result.secure_url });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al subir el archivo' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}