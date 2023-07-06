import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const videosApi = createApi({
    reducerPath: 'videos',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
    endpoints: builder => ({
        getVideos: builder.query({ query: () => '/videos' }),
        getVideo: builder.query({ query: id => '/videos/' + id }),
        getPremiumVideos: builder.query({ query: () => '/premiun-videos' }),
        getMyVideos: builder.query({ query: () => '/my-videos' }),
    })
})

export const {
    useGetVideosQuery,
    useGetVideoQuery,
    useGetPremiumVideosQuery,
    useGetMyVideosQuery,
} = videosApi;
