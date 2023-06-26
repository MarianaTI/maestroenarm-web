import { createSlice } from "@reduxjs/toolkit";

const initialState = { videos: [] };

export const videosSlice = createSlice({
    name: "videos",
    initialState,
    reducers: {
        setVideoList: (state, action) => { state.videos = action.payload },
    },
});

export const { setVideoList } = videosSlice.actions;

export default videosSlice.reducer;
