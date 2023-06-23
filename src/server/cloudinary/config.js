// export function fetchVideos() {
//     const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/search?expression=${encodeURIComponent('video')}&with_field=context&max_results=${3}`;

//     fetch(url, {
//         headers: {
//             'Authorization': `Basic ${btoa(`${APi_KEY}:${API_SECRET}`)}`,
//             'Content-Type': 'application/json',
//         },
//     })
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error('Error en la solicitud');
//         })
//         .then((data) => {
//             console.log(data.resources[1]);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }
