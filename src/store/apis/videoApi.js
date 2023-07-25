import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videosApi = createApi({
    reducerPath: 'videos',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: builder => ({
        getVideos: builder.query({ query: () => `/videos` }),
        getVideosByTitle: builder.query({ query: (options) => ({
            url: '/videos',
            method: 'GET',
            params: {
                title: options.title,
                specialties: options.specialties
            }})
        }),
        getVideo: builder.query({ query: id => `/videos/${id}` }),
        getPremiumVideos: builder.query({ query: () => '/videos/premium' }),
        getMyVideos: builder.query({ query: () => '/my-videos' }),
    })
})

export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetVideosByTitleQuery,
    useGetPremiumVideosQuery,
    useGetMyVideosQuery,
} = videosApi;
