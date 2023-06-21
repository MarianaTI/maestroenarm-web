// import { v2 as cloudinary } from 'cloudinary'

// cloudinary.config({
//     cloud_name: 'db0l9t7fr',
//     api_key: '631147659653346',
//     api_secret: 'Sq6knO4gcBE7d9sbXdf8OxD6yTs',
//     secure: true
// })

// export const fetchVideos = async () => {
//     cloudinary.v2.search
//         .expression('resource_type:image AND tags=kitten AND uploaded_at>1d AND bytes>1m')
//         .sort_by('public_id', 'desc')
//         .max_results(30)
//         .execute()
//         .then(result => console.log(result));
// }