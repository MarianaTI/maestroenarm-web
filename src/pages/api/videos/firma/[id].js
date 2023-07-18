import cloudinary from "../../../../server/cloudinary/config";
import multer from 'multer';
import crypto from 'crypto';
import fs from 'fs';

const storage = multer.memoryStorage();
const upload = multer({ storage });

const encrypt = (buffer, secretKey) => {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    const encrypted = Buffer.concat([iv, cipher.update(buffer), cipher.final()]);
    return encrypted;
};

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method === 'POST') {
        upload.single('file')(req, res, async (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Error al subir el archivo' });
            }

            try {
                const { file } = req;
                const secretKey = crypto.createHash('sha256').update(process.env.ENARM_SECRET_KEY).digest();
                const encryptedBuffer = encrypt(file.buffer, secretKey);

                // Guarda el buffer encriptado en un archivo local
                const filePath = `C:\\Users\\USER\\Documents\\EstadiasUTM\\maestroenarm-web\\tmp\\${file.filename}.cfr`;
                fs.writeFileSync(filePath, encryptedBuffer);

                // Sube el archivo a Cloudinary
                const result = await cloudinary.uploader.upload(filePath, {
                    resource_type: 'raw',
                });

                // Obtén la URL de Cloudinary para el archivo encriptado
                const encryptedUrl = result.secure_url;

                // Elimina el archivo temporal
                fs.unlinkSync(filePath);

                return res.status(200).json({ encryptedUrl });
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error al encriptar o enviar el archivo' });
            }
        });
    } else {
        return res.status(405).json({ error: 'Método no permitido' });
    }
}
