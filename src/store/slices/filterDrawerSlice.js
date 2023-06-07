import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

export const filterDrawerSlice = createSlice({
    name: "filterDrawer",
    initialState,
    reducers: {
        openDrawer: state => { state.isOpen = true },
        closeDrawer: state => { state.isOpen = false }
    },
});

export const { openDrawer, closeDrawer, isOpen } = filterDrawerSlice.actions;

export default filterDrawerSlice.reducer;
