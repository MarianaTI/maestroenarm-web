import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

export const navDrawerSlice = createSlice({
    name: "navDrawer",
    initialState,
    reducers: {
        openNavDrawer: state => { state.isOpen = true },
        closeNavDrawer: state => { state.isOpen = false },
    },
});

export const { openNavDrawer, closeNavDrawer } = navDrawerSlice.actions;

export default navDrawerSlice.reducer;
