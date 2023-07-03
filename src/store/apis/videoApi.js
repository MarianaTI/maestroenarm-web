import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videosApi = createApi({
    reducerPath: 'videos',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: builder => ({
        getVideos: builder.query({ query: () => '/videos' }),
        getPremiumVideos: builder.query({ query: () => '/premiun-videos' }),
        getMyVideos: builder.query({ query: () => '/my-videos' }),
    })
})

export const {
    useGetVideosQuery,
    useGetPremiumVideosQuery,
    useGetMyVideosQuery 
} = videosApi;
